import { WorkPlaceDemand } from "../../application/domain/work-place-demand";

export interface WorkPlaceDemandRepository {
    findByIndustryId({industryId}: {industryId: string}): WorkPlaceDemand[];
}