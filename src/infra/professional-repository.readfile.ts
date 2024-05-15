import { readFileSync } from 'fs';
import { ProfessionalRepository } from './professional-repository';
import { Professional } from '@application/domain/professional';

export class ProfessionalRepositoryReadFile implements ProfessionalRepository {
    
    private path: string;
    constructor() {
        const path = process.env.PROFESSIONALS_FILE_PATH;
        if (!path) {
            throw new Error('env PROFESSIONALS_FILE_PATH not found');
        }
        this.path = path;
    }

    private mapToProfessionals(csvProfessionals: string): Professional[] {
        const lines = csvProfessionals.split('  ');
        return lines.map(line => {
            console.log(line);
            return new Professional(
                {
                    name: 'name',
                    skills: [],
                    especilities: []
                    
                }
            );
        });
    }

    findAll() {
        const csvProfessionals = readFileSync(this.path, "utf8");
        return this.mapToProfessionals(csvProfessionals)
    }
}