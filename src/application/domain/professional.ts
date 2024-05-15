import { Skill } from "./skill";
import { Speciality } from "./speciality";

export type ProfessionalProps = {
    name: string;
    cellphone: string;
    address: string;
    especilities: Speciality[];
    skills: Skill[];
}
export class Profissional {
    public readonly name: string;
    public readonly cellphone: string;
    public readonly address: string;
    public readonly especilities: Speciality[];
    public readonly skills: Skill[];

    constructor({name, cellphone, especilities, skills, address}:ProfessionalProps) {
        this.name = name;
        this.cellphone = cellphone;
        this.especilities = especilities;
        this.skills = skills;
        this.address = address;
    }

    hasSkill(skill: Skill): boolean {
        return this.skills.includes(skill);
    }

    hasSpeciality(speciality: Speciality): boolean {
        return this.especilities.includes(speciality);
    }

    equals(professional: Profissional): boolean {
        return this.name === professional.name && this.cellphone === professional.cellphone;
    }
}