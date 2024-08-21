export interface ITransaction {
    title: string;
    price: number;
    category: string;
    data: Date;
    type: "income" | "outcome";
}