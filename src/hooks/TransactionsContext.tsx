import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from '../services/api'

interface TransactionsTableProps{
    id:number,
    title:string,
    type:string,
    amounth:number,
    category:string,
    createAt:string,
}
// pode ser assim: interface exemplo{
//     title:string,
//     type:string,
//     amounth:number,
//     category:string,
// }

/*pode ser assim(preferivel por term menos codigo):*/
type TransictionsInput = Omit<TransactionsTableProps, 'id'| 'createAt'>

//ou assim : type Exemplo = Pick<TransactionsTableProps, 'title'| 'type'|'amounth'| 'category'>

interface TransactionsProviderProps{
    children:ReactNode
}

interface TransactionsDataContext{
    transactions:TransactionsTableProps[]
    createTransaction:(transaction: TransictionsInput)=>Promise<void>
}

export const TransactionsContext = createContext<TransactionsDataContext>(
    {} as TransactionsDataContext
)


export function TransactionsProvider({children}:TransactionsProviderProps){
    const[transactions, setTransictions] = useState<TransactionsTableProps[]>([])
    useEffect(()=>{
        api.get('transactions')
            .then(response=>setTransictions(response.data.transactions))
    },[])

    async function createTransaction(transactionInput:TransictionsInput){
         const response = await api.post('/transactions', {
             ...transactionInput,
               createAt: new Date()
            })        
         const{transaction} = response.data

         setTransictions([
             ...transactions,
             transaction,
         ])
        
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
