import { Skill } from "./skill";
import { Speciality } from "./speciality";

export type WorkPlaceSkillDemandProps = {
    skill: Speciality;
    quantity: number;
}
export class WorkPlaceSkillDemand {
    public readonly skill: Skill;
    public readonly quantity: number;
    constructor({skill, quantity}: WorkPlaceSkillDemandProps) {
        this.skill = skill;
        this.quantity = quantity;
    }
}