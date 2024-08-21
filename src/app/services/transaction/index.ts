import { DefaultApi } from "@/app/services/default"
import { ITransaction } from "@/types/transaction"

const endpoint = '/app/transaction'
const resourceId = 'id'

export const ApiTransaction = new DefaultApi<ITransaction>(endpoint, resourceId)