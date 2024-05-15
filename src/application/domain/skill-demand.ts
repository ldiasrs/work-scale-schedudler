import { Skill } from "./skill";
import { Speciality } from "./speciality";

export type SkillDemandProps = {
    skill: Speciality;
    quantity: number;
}
export class SkillDemand {
    public readonly skill: Skill;
    public readonly quantity: number;
    constructor({skill, quantity}: SkillDemandProps) {
        this.skill = skill;
        this.quantity = quantity;
    }
}