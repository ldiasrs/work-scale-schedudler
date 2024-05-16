import { Speciality } from '../../application/domain/speciality';
import { WorkPlace } from '../../application/domain/work-place';
import { WorkPlaceDemand } from '../../application/domain/work-place-demand';
import { WorkPlaceDemandRepository } from './work-place-demand-repository';
import { SpecialityRepositoryHardCoded } from './speciality-reppository.hardcoded';
import { SpecialityDemand } from '../../application/domain/speciality-demand';
import { TagDemand } from '../../application/domain/tag-demand';
export class WorkPlaceDemandRepositoryHardCoded implements WorkPlaceDemandRepository{
   
   constructor(private readonly specialityRepositoryHardCoded: SpecialityRepositoryHardCoded) {}

    public findAll(): WorkPlaceDemand[] {
        return [
            new WorkPlaceDemand({
                workPlace: new WorkPlace({name: "Hospital A"}),
                specialityDemands: [
                    new SpecialityDemand({
                    speciality: this.specialityRepositoryHardCoded.getSpecialityByName('cardiologia'),
                    quantity: 2
                })],
                tagDemands: [
                    new TagDemand({
                        tag: 'MOTORISTA',
                        quantity: 1
                    })
                    ]
            }),
        ]
    }
}