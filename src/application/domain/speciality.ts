export type SpecialityProps = {
    name: string;
    description?: string;
}
export class Speciality {
    public readonly name: string;
    public readonly description: string;

    constructor({name, description}: SpecialityProps) {
        this.name = name;
        this.description = description ?? '';
    }
}