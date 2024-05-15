import { Professional } from "@application/domain/professional";
import { ProfessionalRepositoryReadFile } from "./professional-repository.readfile";
import * as fs from 'fs'

describe('ProfessionalRepositoryReadFile', () => {

  const makeSut = () => {
    const readFileSyncMock = jest
    .spyOn(fs, 'readFileSync')
    .mockReturnValue(
      `sdsdd`
    );
    process.env.PROFESSIONALS_FILE_PATH = 'my-path';
    const sut = new ProfessionalRepositoryReadFile();
    return {
        sut,
        readFileSyncMock
    }
  }

  it('throws error if PROFESSIONALS_FILE_PATH is not set', () => {
    process.env.PROFESSIONALS_FILE_PATH = undefined;
    expect(() => new ProfessionalRepositoryReadFile()).toThrowError('env PROFESSIONALS_FILE_PATH not found');
  });

  it('reads professionals from the file and maps them to Professional objects', async () => {
    const {sut, readFileSyncMock} = makeSut()

    readFileSyncMock.mockReturnValue(
        `Adalberto	Enfermeira	MOTORISTA, APOIO	NÃO
         Luis	Medico	MOTORISTA	NÃO
         Ana	Cozinheiro	MOTORISTA	NÃO
        `);
    const expectedProfessionals = [
      new Professional({ name: 'Name1', skills: [], especilities: [] }),
      new Professional({ name: 'Name2', skills: [], especilities: [] }),
    ];
    const professionals = await sut.findAll();
    expect(professionals).toEqual(expectedProfessionals);
  });


});
