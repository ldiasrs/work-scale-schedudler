import { Speciality } from '../../application/domain/speciality';
export class SpecialityRepositoryHardCoded {
   
    private cache: Map<string, Speciality> = new Map();

    getSpecialityByName(name: string): Speciality {
        if (!this.cache.has(name)) {
            this.cache.set(name, new Speciality({name: name}));
        }
        return this.cache.get(name)!;
    }
}