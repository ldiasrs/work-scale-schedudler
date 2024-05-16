import { SpecialityDemand } from "./speciality-demand";
import { TagDemand } from "./tag-demand";
import { WorkPlace } from "./work-place";

export type WorkPlaceSpecialityDemandProps = {
    workPlace: WorkPlace;
    specialityDemands: SpecialityDemand[];
    tagDemands: TagDemand[];
}
export class WorkPlaceDemand {
    public readonly workPlace: WorkPlace
    public readonly specialityDemands: SpecialityDemand[]
    public readonly tagDemands: TagDemand[]
    
    constructor({workPlace, specialityDemands, tagDemands}: WorkPlaceSpecialityDemandProps) {
        this.workPlace = workPlace;
        this.specialityDemands = specialityDemands;
        this.tagDemands = tagDemands;
    }
}