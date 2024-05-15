import { SpecialityDemand } from "./speciality-demand";
import { WorkPlace } from "./work-place";

export type WorkPlaceSpecialityDemandProps = {
    workPlace: WorkPlace;
    specialityDemands: SpecialityDemand[];
    tagDemands: string[];
}
export class WorkPlaceSpecialityDemand {
    public readonly workPlace: WorkPlace
    public readonly specialityDemands: SpecialityDemand[]
    public readonly tagDemands: string[]
    
    constructor({workPlace, specialityDemands, tagDemands}: WorkPlaceSpecialityDemandProps) {
        this.workPlace = workPlace;
        this.specialityDemands = specialityDemands;
        this.tagDemands = tagDemands;
    }
}