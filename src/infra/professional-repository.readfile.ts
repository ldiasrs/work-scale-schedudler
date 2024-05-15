import Papa from "papaparse";
import { Professional } from "../application/domain/professional";
import { Skill } from "../application/domain/skill";
import { Speciality } from "src/application/domain/speciality";
export class ProfessionalRepositoryReadFile  {
    
    private csvProfessionalsData: string;

    constructor(csvProfessionalsData: string) {
        this.csvProfessionalsData = csvProfessionalsData;
    }

    public findAll(): Professional[] {
        const results = Papa.parse(this.csvProfessionalsData, { delimiter: "	" });
        return results.data
          .slice(1)
          .map((row: any) => {
            const skills = row[2] ? row[2].split(",") : []
            const skillObjs = skills.map((skill: string) => new Skill({name: skill?.trim()}))
            const specialityName = row[1]?.trim()
            return new Professional(
                {
                    name: row[0]?.trim(),
                    skills: skillObjs,
                    especilities: [new Speciality({name: specialityName})]
                }
            )
          })
    }
}