import { WorkPlace } from '../../application/domain/work-place';
import { WorkPlaceDemand } from '../../application/domain/work-place-demand';
import { WorkPlaceDemandRepository } from './work-place-demand-repository';
import { SpecialityRepositoryHardCoded } from './speciality-reppository.hardcoded';
import { SpecialityDemand } from '../../application/domain/speciality-demand';
import { TagDemand } from '../../application/domain/tag-demand';
export class WorkPlaceDemandRepositoryHardCoded implements WorkPlaceDemandRepository{
   
   constructor(private readonly specialityRepositoryHardCoded: SpecialityRepositoryHardCoded, private readonly jsonFileData: any) {
   }

   private mapIndustryDemands = (industryDemandsData: any)=>  {
    return industryDemandsData.filter((i:any) => !i.disabled || i?.disabled == false).map((industryDemandData: any) => {
        return new WorkPlaceDemand({
            workPlace: new WorkPlace({name: industryDemandData.place}),
            specialityDemands: industryDemandData.specialities.map((specialityData: any) => {
                const specialityName = Object.keys(specialityData)[0];
                const quantity = specialityData[specialityName];
                return new SpecialityDemand({
                    speciality: this.specialityRepositoryHardCoded.getSpecialityByName(specialityName),
                    quantity
                })
            }),
            tagDemands: industryDemandData.tags.map((tag: string) => new TagDemand({tag, quantity: 1}))
        })
    });
}

    public findByIndustryId({industryId}: {industryId: string}): WorkPlaceDemand[] {
        return this.mapIndustryDemands(this.jsonFileData[industryId])
    }
}