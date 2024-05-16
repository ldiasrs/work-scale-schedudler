import { ProfessionalRepository } from "../../../infra/repository/professional-repository";
import { WorkPlaceDemandRepository } from "../../../infra/repository/work-place-demand-repository";
import { IndustryScale } from "../../domain/industry-scale";
export type BuildIndustryScaleUseCaseParams = {
    industryId;
}

export class BuildIndustryScaleUseCase {
    private readonly workPlaceDemandRepository: WorkPlaceDemandRepository
    private readonly professionalRepository: ProfessionalRepository
    
    constructor(workPlaceDemandRepository: WorkPlaceDemandRepository, professionalRepository: ProfessionalRepository) {
        this.workPlaceDemandRepository = workPlaceDemandRepository;
        this.professionalRepository = professionalRepository;
    }
    execute({industryId}:  BuildIndustryScaleUseCaseParams): IndustryScale {
        const workPlaceSpecialityDemands = this.workPlaceDemandRepository.findByIndustryId({industryId});
        const professionals = this.professionalRepository.findAll();
        
        return new IndustryScale({
            workPlaceScales: []
        })
    }
}