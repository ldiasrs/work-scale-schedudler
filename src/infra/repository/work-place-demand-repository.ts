import { WorkPlaceSpecialityDemand } from "../../application/domain/work-place-demand";

export interface WorkPlaceDemandRepository {
    findAll(): WorkPlaceSpecialityDemand[];
}