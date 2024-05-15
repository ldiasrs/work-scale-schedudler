export type SkillProps = {
    name: string;
    description: string;
}
export class Skill {
    public readonly name: string;
    public readonly description: string;

    constructor({name, description}: SkillProps) {
        this.name = name;
        this.description = description;
    }
}