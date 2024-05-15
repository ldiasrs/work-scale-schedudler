import Papa from "papaparse";
import { Professional } from "../application/domain/professional";
import { Skill } from "../application/domain/skill";
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
            return new Professional(
                {
                    name: row[0]?.trim(),
                    skills: skillObjs,
                    especilities: [row[1]?.trim()]
                }
            )
          })
    }
}