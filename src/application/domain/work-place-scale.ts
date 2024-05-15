import { ProfessionalScale } from "./professional-scale";
import { WorkPlaceSpecialityDemand } from "./work-place-demand";

export type WorkPlaceScaleProps = {
    workPlaceDemands: WorkPlaceSpecialityDemand;
    professionalScales: ProfessionalScale[];
}

export class WorkPlaceScale {
    public readonly workPlaceDemands: WorkPlaceSpecialityDemand;
    public readonly professionalScales: ProfessionalScale[];

    constructor({workPlaceDemands, professionalScales}: WorkPlaceScaleProps) {
        this.workPlaceDemands = workPlaceDemands;
        this.professionalScales = professionalScales;
    }
}