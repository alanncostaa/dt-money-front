import { useState } from 'react';
import { ITransaction } from "@/types/transaction";
import { formatCurrency, formatDate } from "@/utils";
import { FormModal } from "@/components/FormModalUpdate";
import { useTransaction } from "@/hooks/useTransaction";

export interface ITableProps {
    data: ITransaction[]
}

export function Table({ data }: ITableProps) {

    const { mutateAsync: updateTransaction } = useTransaction.Update()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | null>(null);

    const handleOpenModal = (transaction: ITransaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTransaction(null);
    };

    const handleUpdateTransaction = async (transaction: ITransaction) => {
        await updateTransaction(transaction)    
      }
    
    return (
        <>
            <table className="w-full mt-16 border border-separate border-spacing-y-2 ">
                <thead>
                    <tr>
                        <th className="px-4 text-left text-table-header text-base font-medium">Título</th>
                        <th className="px-4 text-left text-table-header text-base font-medium">Preço</th>
                        <th className="px-4 text-left text-table-header text-base font-medium">Categoria</th>
                        <th className="px-4 text-left text-table-header text-base font-medium">Data</th>
                        <th className="px-4 text-left text-table-header text-base font-medium"></th>
                        <th className="px-4 text-left text-table-header text-base font-medium"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white h-16 rounded-lg">
                            <td className="px-4 py-4 whitespace-nowrap text-title">{item.title}</td>
                            <td className={`px-4 py-4 whitespace-nowrap text-right ${item.type === 'income' ? "text-income-value" : "text-outcome"}`}>
                                {formatCurrency(item.price)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">{item.category}</td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                {item.data ? formatDate(new Date(item.data)) : ''}
                            </td>
                            <td className="text-outcome px-4 py-4 whitespace-nowrap">
                                <button onClick={() => handleOpenModal(item)}>Alterar</button>
                            </td>
                            <td className="bg-outcome text-white px-4 py-4 whitespace-nowrap">
                                <button>EXCLUIR</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && selectedTransaction && (
                <FormModal formTitle="Alteração de Transação" closeModal={handleCloseModal} AddTransaction={handleUpdateTransaction} />
            )}
        </>
    );
}
