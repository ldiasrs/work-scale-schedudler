import { ProfessionalRepository } from "../../../infra/repository/professional-repository";
import { WorkPlaceDemandRepository } from "../../../infra/repository/work-place-demand-repository";
import { IndustryScale } from "../../domain/industry-scale";
import { BuildIndustryScaleExecutor } from './build-industry-scale.executor';

export type BuildIndustryScaleUseCaseParams = {
    industryId: string;
}

export class BuildIndustryScaleUseCase {
    
    private readonly workPlaceDemandRepository: WorkPlaceDemandRepository
    private readonly professionalRepository: ProfessionalRepository
    private readonly buildIndustryScaleExecutor: BuildIndustryScaleExecutor
    
    constructor(
        workPlaceDemandRepository: WorkPlaceDemandRepository, 
        professionalRepository: ProfessionalRepository,
        buildIndustryScaleExecutor: BuildIndustryScaleExecutor
    ) {
        this.workPlaceDemandRepository = workPlaceDemandRepository;
        this.professionalRepository = professionalRepository;
        this.buildIndustryScaleExecutor = buildIndustryScaleExecutor;
    }
    execute({industryId}:  BuildIndustryScaleUseCaseParams): IndustryScale {
        const workPlaceSpecialityDemands = this.workPlaceDemandRepository.findByIndustryId({industryId});
        const professionals = this.professionalRepository.findAll();
        return this.buildIndustryScaleExecutor.execute({workPlaceDemands: workPlaceSpecialityDemands, professionals});
    }
}