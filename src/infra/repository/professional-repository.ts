import { Professional } from "../../application/domain/professional";

export interface ProfessionalRepository {
    findAll(): Professional[];
}