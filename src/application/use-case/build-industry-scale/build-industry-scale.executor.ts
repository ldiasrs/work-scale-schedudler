import { IndustryScale } from '../../domain/industry-scale';
import { Professional } from '../../domain/professional';
import { ProfessionalScale } from '../../domain/professional-scale';
import { WorkPlaceDemand } from '../../domain/work-place-demand';
import { WorkPlaceScale } from '../../domain/work-place-scale';
import { BuildIndustryScaleUseCase } from './build-work-place-scale.usecase';


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
       const industryAllocatedProfessionals: Professional[] = [];

       const workPlaceScales: WorkPlaceScale[] = workPlaceDemands.map(workPlaceDemand => {    

        const professionalsSorted= this.rankProfessionals(professionals, workPlaceDemand)
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

        const ranksSpeciality = professionalsBySpeciality.map(professional => {
            return {
                professional,
                score: 101
            }
        })
        const finalRanks: Rank[]  = professionalsWithTag.map((professional: Professional) => {
            const rank = ranksSpeciality.find(rank => rank.professional === professional);
            if(rank) {
                rank.score += 50;
            }
            return rank!
        })

        const professionalsSorted= finalRanks.sort((a,b) => a.score - b.score).map(rank => rank.professional);
        return professionalsSorted;
    }
}