import { Footer } from '../Footer'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import * as S from './styles'

export const Dashboard = ()=>{
    return(
        <S.Container>
            <Summary/>
            <TransactionsTable/>
            <Footer/>
        </S.Container>
    )
}