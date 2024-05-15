import { Professional } from "./professional";
import { Speciality } from "./speciality";
export type ProfessionalScaleProps = {
    professional: Professional;
    role: Speciality;  
}

export class ProfessionalScale {
    public readonly professional: Professional;
    public readonly role: Speciality;  

    constructor({professional, role}: ProfessionalScaleProps) {
        this.professional = professional;
        this.role = role;
    }
}