import { ITotal } from "@/app/page";
import { Card } from "../Card";

export interface ICardContainerProps {
    totals: ITotal
}

export function CardContainer({ totals }: ICardContainerProps){
    const { total, totalIncome, totalOutcome } = totals
    return (
        <div className="flex flex-row justify-between">
            <Card title="Entradas" value={totalIncome} type="income" />
            <Card title="Saídas" value={totalOutcome} type="outcome" />
            <Card title="Total" value={total} type="total" />
        </div>
    )
}