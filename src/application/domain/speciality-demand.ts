import { Speciality } from "./speciality";

export type SpecialityDemandProps = {
    speciality: Speciality;
    quantity: number;
}
export class SpecialityDemand {
    public readonly speciality: Speciality;
    public readonly quantity: number;
    constructor({speciality, quantity}: SpecialityDemandProps) {
        this.speciality = speciality;
        this.quantity = quantity;
    }
}