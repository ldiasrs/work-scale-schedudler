import { Professional } from "./professional";
import { Skill } from "./skill";
import { Speciality } from "./speciality";
export type ProfessionalScaleProps = {
    professional: Professional;
    roles: Role[];  
}
export type Role = Speciality | Skill;

export class ProfessionalScale {
    private readonly professional: Professional;
    private readonly roles: Role[];  

    constructor({professional, roles}: ProfessionalScaleProps) {
        this.professional = professional;
        this.roles = roles;
    }
}