import { WorkPlaceDemand } from "../../application/domain/work-place-demand";

export interface WorkPlaceDemandRepository {
    findAll(): WorkPlaceDemand[];
    findByIndustryId({industryId}: {industryId: string}): WorkPlaceDemand[];
}