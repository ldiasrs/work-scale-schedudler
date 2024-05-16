import { WorkPlaceScale } from "./work-place-scale";

export type IndustryScaleProps = {
    workPlaceScales: WorkPlaceScale[];
}
export class IndustryScale {
    public readonly workPlaceScales: WorkPlaceScale[];

    constructor({workPlaceScales, }: IndustryScaleProps) {
        this.workPlaceScales = workPlaceScales;
    }
}