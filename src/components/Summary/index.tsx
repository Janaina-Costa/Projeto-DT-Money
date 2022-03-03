import iconUp from "../../assets/iconcome.svg"
import iconDown from "../../assets/outcome.svg"
import iconTotal from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"

import * as S from "./styles"


export const Summary = ()=>{
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type==='deposit'){
            acc.deposites += transaction.amounth
            acc.total += transaction.amounth

        }else{
            acc.withdrows += transaction.amounth
            acc.total -= transaction.amounth

        }

        return acc
    },{
        deposites:0,
        withdrows:0,
        total:0
    })
    
    
    return(
        <S.Container>
           <div>
               <header>
                   <p>Estradas</p>
                   <img src={iconUp} alt="icone entrada" />
               </header>
               <strong>
               {new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                }).format(summary.deposites)}  
                                   
                </strong>
           </div>
           <div>
               <header>
                   <p>Saídas</p>
                   <img src={iconDown} alt="icone entrada" />
               </header>
               <strong>
                -
               {new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                }).format(summary.withdrows)}  
                   
                </strong>
           </div>
           <div>
               <header>
                   <p>Total</p>
                   <img src={iconTotal} alt="icone entrada" />
               </header>
               <strong>
               {new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                }).format(summary.total)}  
            
                   
                </strong>
           </div>
        </S.Container>
    )
}