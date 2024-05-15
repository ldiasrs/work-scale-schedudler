import { Speciality } from "./speciality";

export type WorkPlaceSpecialityDemandProps = {
    speciality: Speciality;
    quantity: number;
}
export class WorkPlaceSpecialityDemand {
    public readonly speciality: Speciality;
    public readonly quantity: number;
    constructor({speciality, quantity}: WorkPlaceSpecialityDemandProps) {
        this.speciality = speciality;
        this.quantity = quantity;
    }
}