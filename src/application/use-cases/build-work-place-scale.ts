import { ProfessionalRepository } from "@infra/professional-repository";
import { WorkPlaceDemandRepository } from "@infra/work-place-demand-repository";

export class BuildWorkPlaceScale {
    private readonly workPlaceDemandRepository: WorkPlaceDemandRepository
    private readonly professionalRepository: ProfessionalRepository
    
    constructor(workPlaceDemandRepository: WorkPlaceDemandRepository, professionalRepository: ProfessionalRepository) {
        this.workPlaceDemandRepository = workPlaceDemandRepository;
        this.professionalRepository = professionalRepository;
    }
    execute() {
    }
}