import { formatCurrency } from "@/utils";
import Image from "next/image";

export interface ICardProps {
    title: string;
    value: number;
    type: 'income' | 'outcome' | 'total';
}

export function Card({title, value, type}: ICardProps) {
    const icon = type === 'income' 
        ? '/images/income.png' 
        : type === 'outcome' 
          ? '/images/outcome.png' 
          : '/images/total.png';
    const bgColor = type === 'income' || type === 'outcome' 
        ? 'bg-white' 
        : value > 0
        ? 'bg-income'
        : 'bg-outcome';
    const textColor = type === 'income' || type === 'outcome' 
        ? 'text-title' 
        : 'text-white'
    return (
        <div className={`flex flex-col w-[352px] h-[136px] rounded-md ${bgColor} `}>
            <div className="flex flew-row justify-between align-middle items-center px-8 pt-6 pb-2">
                <span className={`text-base font-normal leading-4 ${textColor}`}>{title}</span>
                <Image src={icon} alt={title} width={32} height={32} />
            </div>
            <div className={`text-4xl ${textColor} px-8`}>{formatCurrency(value)}</div>
        </div>
    )
}