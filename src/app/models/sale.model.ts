export interface Sale{
    id: number;
    name: string;
    creationDt: Date;
    finishedDt: Date;
    price: number;
    status: string;
    seller: string;
    buyer: string;
}