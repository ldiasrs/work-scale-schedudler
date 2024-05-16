import { IndustryScale } from '../../domain/industry-scale';
import { Professional } from '../../domain/professional';
import { ProfessionalScale } from '../../domain/professional-scale';
import { SpecialityDemand } from '../../domain/speciality-demand';
import { WorkPlaceDemand } from '../../domain/work-place-demand';
import { WorkPlaceScale } from '../../domain/work-place-scale';


export type BuildIndustryScaleExecutorParams = {
    workPlaceDemands: WorkPlaceDemand[];
    professionals: Professional[];
}

export type Rank = {
    professional: Professional;
    score: number;
}
export class BuildIndustryScaleExecutor {

    execute({workPlaceDemands, professionals}: BuildIndustryScaleExecutorParams): IndustryScale {
       //TODO passara para metodos menores
       //TODO fazer repositorio ler e escrever JSON
       //TODO separar o processo de ranking e salvar em um arquivo JSON
       //TODO guardar a escala da industrial em um arquivo JSON
       //TODO futuro suportar horario? workplace tem tempo e profissinal pode ter tb para ser classificado
       //TODO revisar codigo e otimizar com ajuda do IA
       const industryAllocatedProfessionals: Professional[] = [];

       const workPlaceScales: WorkPlaceScale[] = workPlaceDemands.map(workPlaceDemand => {    

        const professionalsSorted= this.rankProfessionals(professionals, workPlaceDemand)
        if (professionalsSorted.length < workPlaceDemand.specialityDemands.length) {
            throw new Error('Not found professionals with speciality to allocate: '+ workPlaceDemand.specialityDemands.map(specialityDemand => specialityDemand.speciality.name).join(', ') + ' in ' + workPlaceDemand.workPlace.name + ' demand.')
        }
        const allocatedWorkPlaceProfessionals = this.allocateProfessionals(industryAllocatedProfessionals, professionalsSorted, workPlaceDemand)

        return new WorkPlaceScale({
            workPlaceDemands: workPlaceDemand,
            professionalScales: allocatedWorkPlaceProfessionals
        })
       })

       return new IndustryScale({
              workPlaceScales
         })
    }

    allocateProfessionals(allocatedProfessionals: Professional[], professionalsSorted: Professional[], workPlaceDemand: WorkPlaceDemand): ProfessionalScale[] {
        const allocatedWorkPlaceProfessionals: ProfessionalScale[] = workPlaceDemand.specialityDemands.map((specialityDemand: SpecialityDemand) => {
            const professionalScales = []
            for(let i = 0; i < specialityDemand.quantity; i++) {
                const professional = professionalsSorted.find(professional => {
                    const available = !allocatedProfessionals.includes(professional);
                    const hasSpeciality = professional.hasSpeciality(specialityDemand.speciality);
                    return available && hasSpeciality;
                });
                if (professional) {
                    allocatedProfessionals.push(professional);
                }
                professionalScales.push(new ProfessionalScale({
                    professional,
                    role: specialityDemand.speciality 
                }));
            }
            return professionalScales;
        }).flat();
        return allocatedWorkPlaceProfessionals;
    }

    rankProfessionals(professionals: Professional[], workPlaceDemand: WorkPlaceDemand): Professional[] {

        const professionalsBySpeciality: Professional[] = workPlaceDemand.specialityDemands.map(specialityDemand => {
            const professionalsBySpeciality: Professional[] = professionals.filter(professional => professional.hasSpeciality(specialityDemand.speciality));
            return professionalsBySpeciality;
        }).flat();

        const professionalsWithTag: Professional[] = workPlaceDemand.tagDemands.map(tagDemand => {
            const response: Professional[] = professionalsBySpeciality.filter(professional => professional.hasTag(tagDemand.tag));
            return response;
        }).flat();

        const ranks = professionalsBySpeciality.map(professional => {
            console.log(`${professional.name} tem especialidade`)
            return {
                professional,
                score: 101
            }
        })
        ranks.forEach((rank: Rank) => {
            const rankWithTag = professionalsWithTag.map(professional => professional.name).includes(rank.professional.name);
            if(rankWithTag) {
                rank.score += 50;
                console.log(`${rank.professional.name} tem tag score: ${rank.score}`)
            }
        })
        const ranksSorted = ranks.sort((a,b) => b.score - a.score)
        const professionalsSorted= ranksSorted.map(rank => rank.professional);
        return professionalsSorted;
    }
}