
import { Professional } from "../../domain/professional"
import { Speciality } from "../../domain/speciality"
import { SpecialityDemand } from "../../domain/speciality-demand"
import { TagDemand } from "../../domain/tag-demand"
import { WorkPlace } from "../../domain/work-place"
import { WorkPlaceDemand } from "../../domain/work-place-demand"
import { BuildIndustryScaleExecutor } from "./build-industry-scale.executor"


//Montar uma lista de profissionais que atendam a demanda de cada hospital
//Os profissionais devem ser alocados de acordo com a tag
//Se não houver profissionais suficientes para atender a demanda, o sistema deve retornar uma mensagem de erro
//O mesmo profissional não pode ser alocado em mais de um hospital
//O sistema deve retornar uma lista de profissionais alocados em cada hospital


describe('BuildIndustryScaleExecutor', () => {

    const makeParams=() =>{
        const professionalsData = [
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
            {name: 'Leonardo',especialities: ['Medico'], tags: ['cirurgiao']},
        ]
        const industryDemandsData = [
            {place: 'Hospital 1', specialities: [{'Medico': 1}, {'Enfermeiro':1}], tags: ['cirurgiao']},
            {place: 'Hospital 1', specialities: [{'Medico': 1}, {'Enfermeiro':1}], tags: ['cirurgiao']},
        ]

        const professionals = professionalsData.map(professionalData => {
            return new Professional({
                name: professionalData.name,
                especilities: professionalData.especialities.map(name => new Speciality({name})),
                tags: professionalData.tags
            })
        })
        const workPlaceDemands = industryDemandsData.map(industryDemandData => {
            return new WorkPlaceDemand({
                workPlace: new WorkPlace({name: industryDemandData.place}),
                specialityDemands: industryDemandData.specialities.map(specialityData => {
                    const specialityName = Object.keys(specialityData)[0];
                    const quantity = specialityData[specialityName];
                    return new SpecialityDemand({
                        speciality: new Speciality({name: specialityName}),
                        quantity
                    })
                }),
                tagDemands: industryDemandData.tags.map(tag => new TagDemand({tag, quantity: 1}))
            })
        });
        return {workPlaceDemands, professionals}
    }
    it('should allocate professionals of a industry work places demands', () => {
        const {workPlaceDemands, professionals} = makeParams();
        const industryScale = new BuildIndustryScaleExecutor().execute({workPlaceDemands, professionals})
        expect(industryScale.workPlaceScales[0].professionalScales.length).toBe(3)
    })
})