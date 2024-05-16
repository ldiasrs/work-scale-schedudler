import { Professional } from "../../application/domain/professional";
import { ProfessionalRepositoryFile } from "./professional-repository.file";
import { Speciality } from "../../application/domain/speciality";

describe('ProfessionalRepositoryReadFile', () => {

  it('reads professionals from the file and maps them to Professional objects',  () => {
    
    const repo  = new ProfessionalRepositoryFile(
      `
      Adalberto	Medico	MOTORISTA, APOIO	NÃO
      Alexia	Enfermeiro		NÃO
      `
    );
    const professionals = repo.findAll();
    expect(professionals).toEqual(
      [
        new Professional(
          {
            name: "Adalberto",
            tags: [ "MOTORISTA", "APOIO" ],
            especilities: [new Speciality({name: "Medico"})]
          }
        ),
        new Professional(
          {
            name: "Alexia",
            tags: [],
            especilities: [new Speciality({name: "Enfermeiro"})]
          }
        )
      ]
    );
  });
});
