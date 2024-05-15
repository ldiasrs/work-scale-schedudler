import { ProfessionalRepositoryReadFile } from "./professional-repository.readfile";

const repo = new ProfessionalRepositoryReadFile(
  `
    Adalberto	AF	MOTORISTA, APOIO	NÃO
    Alexia	Enfermeiro		NÃO
    `
);
const professionals = repo.findAll();
console.log(professionals);
