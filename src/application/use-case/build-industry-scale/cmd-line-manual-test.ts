import { readFileSync } from "fs";
import { ProfessionalRepositoryFile } from "../../../infra/repository/professional-repository.file";
import { SpecialityRepositoryHardCoded } from "../../../infra/repository/speciality-reppository.hardcoded";
import { WorkPlaceDemandRepositoryHardCoded } from "../../../infra/repository/work-place-demand-repository.file";
import { BuildIndustryScaleExecutor } from "./build-industry-scale.executor";
import { BuildIndustryScaleUseCase } from "./build-work-place-scale.usecase";
import { IndustryScale } from "../../domain/industry-scale";

const cmdLineManualTest = () => {
    const professionalCsvData: string = readFileSync('data/profissionais.csv').toString();
    const workspaceJSONata: string = readFileSync('data/industry-demands.json').toString();
    const specialityRepository = new SpecialityRepositoryHardCoded();
    const workplacedemandrepository = new WorkPlaceDemandRepositoryHardCoded(specialityRepository, JSON.parse(workspaceJSONata));
    const professionalsRepository = new ProfessionalRepositoryFile(professionalCsvData);
    const useCase = new BuildIndustryScaleUseCase(workplacedemandrepository, professionalsRepository, new BuildIndustryScaleExecutor());
    const industryScale = useCase.execute({industryId: 'VIGILANCIA_SANITARIA'});
    printConsoleLog(industryScale)
}

const printConsoleLog = (industryScale: IndustryScale) =>{
    industryScale.workPlaceScales.forEach((workPlaceScale) => {
        console.log(workPlaceScale.workPlaceDemands.workPlace.name)
        workPlaceScale.professionalScales.forEach((professionalScale) => {
            console.log(`\t${professionalScale.professional?.name} - ${professionalScale.role.name}: tags: ${professionalScale.professional?.tags.map(tag => tag).join(', ')}`)
        })
    })
}

cmdLineManualTest();