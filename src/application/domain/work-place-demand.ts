import { SkillDemand } from "./skill-demand";
import { SpecialityDemand } from "./speciality-demand";
import { WorkPlace } from "./work-place";

export type WorkPlaceSpecialityDemandProps = {
    workPlace: WorkPlace;
    specialityDemands: SpecialityDemand[];
    skillDemands: SkillDemand[];
}
export class WorkPlaceSpecialityDemand {
    public readonly workPlace: WorkPlace
    public readonly specialityDemands: SpecialityDemand[]
    public readonly skillDemands: SkillDemand[]
    
    constructor({workPlace, specialityDemands, skillDemands}: WorkPlaceSpecialityDemandProps) {
        this.workPlace = workPlace;
        this.specialityDemands = specialityDemands;
        this.skillDemands = skillDemands;
    }
}