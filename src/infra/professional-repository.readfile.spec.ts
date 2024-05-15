import { Professional } from "../application/domain/professional";
import { ProfessionalRepositoryReadFile } from "./professional-repository.readfile";
import { Skill } from "../application/domain/skill";

describe('ProfessionalRepositoryReadFile', () => {

  it('reads professionals from the file and maps them to Professional objects',  () => {
    
    const repo  = new ProfessionalRepositoryReadFile(
      `
      Adalberto	AF	MOTORISTA, APOIO	NÃO
      Alexia	Enfermeiro		NÃO
      `
    );
    const professionals = repo.findAll();
    expect(professionals).toEqual(
      [
        new Professional(
          {
            name: "Adalberto",
            skills: [new Skill({name: "MOTORISTA"}), new Skill({name: "APOIO"})],
            especilities: []
          }
        )
      ]
    );
  });


});
