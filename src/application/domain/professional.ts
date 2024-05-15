import { Speciality } from "./speciality";

export type ProfessionalProps = {
    name: string;
    cellphone?: string;
    address?: string;
    especilities: Speciality[];
    tags: string[];
}
export class Professional {
    public readonly name: string;
    public readonly cellphone?: string;
    public readonly address?: string;
    public readonly especilities: Speciality[];
    public readonly tags: string[];

    constructor({name, cellphone, especilities, tags, address}:ProfessionalProps) {
        this.name = name;
        this.cellphone = cellphone
        this.especilities = especilities;
        this.address = address 
        this.tags = tags;
    }

    hasTag(tag: string): boolean {
        return this.tags.includes(tag);
    }

    hasSpeciality(speciality: Speciality): boolean {
        return this.especilities.includes(speciality);
    }

    equals(professional: Professional): boolean {
        return this.name === professional.name && this.cellphone === professional.cellphone;
    }
}