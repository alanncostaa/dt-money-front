import { ApiTransaction } from '@/app/services/transaction'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const QUERY_KEY = 'qkTransaction'

const Create = () => {
  const queryClient = useQueryClient()

  return useMutation(ApiTransaction.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY)
    }
  })
}

const ListAll = () => {
  return useQuery([QUERY_KEY], () => ApiTransaction.listAll())
}


const Update = () => {
  const queryClient = useQueryClient()

  return useMutation(ApiTransaction.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY)
    }
  })
}

const Delete = () => {
  const queryClient = useQueryClient()

  return useMutation(ApiTransaction.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY)
    }
  })
}

export const useTransaction = {
  Create,
  ListAll,
  Update,
  Delete,
}

/*

const FindOne = (id: string) => {
  return useQuery([QUERY_KEY, id], () => ApiTransaction.findOne(id))
}

const Update = () => {
  const queryClient = useQueryClient()

  return useMutation(ApiTransaction.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY)
    }
  })
}

const Remove = () => {
  const queryClient = useQueryClient()

  return useMutation(ApiTransaction.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY)
    }
  })
}

const Delete = () => {
    const queryClient = useQueryClient()
  
    return useMutation(ApiTransaction.delete, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY)
      }
    })
  }

export const useTransaction = {
  Create,
  Update,
  FindOne,
  ListAll,
  Remove,
  Delete
} */