import { Speciality } from '../../application/domain/speciality';
export class SpecialityRepositoryHardCoded {
   
    private cache: Map<string, Speciality> = new Map();

    getSpecialityByName(name: string): Speciality {
        const mapSpecialities = {
            "Medico": new Speciality({name: "Cardiologia"}),
            "Enfermeiro": new Speciality({name: "Cardiologia"}),
            "Técnico de enfermagem": new Speciality({name: "Cardiologia"}),
            "AF": new Speciality({name: "Cardiologia"}),
            "Nutricionista": new Speciality({name: "Cardiologia"}),
            "Méd Vet": new Speciality({name: "Méd Vet"}),
        }
        if (mapSpecialities[name]) {
            return mapSpecialities[name];
        }
        if (!this.cache.has(name)) {
            this.cache.set(name, new Speciality({name: name}));
        }
        return this.cache.get(name);
    }
}