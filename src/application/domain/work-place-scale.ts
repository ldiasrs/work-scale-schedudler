import { ProfessionalScale } from "./professional-scale";
import { WorkPlaceDemand } from "./work-place-demand";

export type WorkPlaceScaleProps = {
    workPlaceDemands: WorkPlaceDemand;
    professionalScales: ProfessionalScale[];
}

export class WorkPlaceScale {
    public readonly workPlaceDemands: WorkPlaceDemand;
    public readonly professionalScales: ProfessionalScale[];

    constructor({workPlaceDemands, professionalScales}: WorkPlaceScaleProps) {
        this.workPlaceDemands = workPlaceDemands;
        this.professionalScales = professionalScales;
    }
}