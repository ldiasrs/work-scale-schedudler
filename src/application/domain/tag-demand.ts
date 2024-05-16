
export type SpecialityDemandProps = {
    tag: string;
    quantity: number;
}
export class TagDemand {
    public readonly tag: string;
    public readonly quantity: number;
    constructor({tag, quantity}: SpecialityDemandProps) {
        this.tag = tag;
        this.quantity = quantity;
    }
}