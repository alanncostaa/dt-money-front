import { TransactionButton } from "../TransactionButton";

export interface TransactionSwitcherProps {
    type: 'income' | 'outcome';
    setType: (type: 'income' | 'outcome') => void;
}

export function TransactionSwitcher({type, setType }: TransactionSwitcherProps) {
    const isIncome = type === 'income';
    return (
        <div className="flex flex-row justify-between w-full gap-4 ">
            <TransactionButton type="income" isSelected={isIncome} onClick={() => setType("income")} />
            <TransactionButton type="outcome" isSelected={!isIncome} onClick={() => setType("outcome")}/>
        </div>
    )
}