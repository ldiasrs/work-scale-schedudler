import Papa from "papaparse";
import { Professional } from "../application/domain/professional";
import { Speciality } from "../application/domain/speciality";
import { ProfessionalRepository } from "./professional-repository";
export class ProfessionalRepositoryReadFile  implements  ProfessionalRepository {
    
    private csvProfessionalsData: string;

    constructor(csvProfessionalsData: string) {
        this.csvProfessionalsData = csvProfessionalsData;
    }

    public findAll(): Professional[] {
        const results = Papa.parse(this.csvProfessionalsData, { delimiter: "	" });
        return results.data
          .slice(1)
          .filter((row: any) => row[0]?.trim() !== '')
          .map((row: any) => {
            const tags = row[2] ? row[2].split(",") : []
            const specialityName = row[1]?.trim()
            return new Professional(
                {
                    name: row[0]?.trim(),
                    tags: tags.map((tag: string) => tag.trim()),
                    especilities: [new Speciality({name: specialityName})]
                }
            )
          })
    }
}