export type WorkPlaceProps = {
    name: string;
    address?: string;
    startTime: string;
    endTime: string;
}
export class WorkPlace {
    public readonly name: string;
    public readonly address: string;
    public readonly startTime: string;
    public readonly endTime: string;

    constructor({name, address, startTime, endTime}: WorkPlaceProps) {
        this.name = name;
        this.address = address;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}