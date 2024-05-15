import { SkillDemand } from "./skill-demand";
import { SpecialityDemand } from "./speciality-demand";
import { WorkPlace } from "./work-place";

export type WorkPlaceSpecialityDemandProps = {
    workPlce: WorkPlace;
    specialityDemands: SpecialityDemand[];
    skillDemands: SkillDemand[];
}
export class WorkPlaceSpecialityDemand {
    public readonly workPlce: WorkPlace
    public readonly specialityDemands: SpecialityDemand[]
    public readonly skillDemands: SkillDemand[]
    
    constructor({workPlce, specialityDemands, skillDemands}: WorkPlaceSpecialityDemandProps) {
        this.workPlce = workPlce;
        this.specialityDemands = specialityDemands;
        this.skillDemands = skillDemands;
    }
}