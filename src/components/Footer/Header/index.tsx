import logo from '../../assets/logo.svg'
import * as S  from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: ()=>void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
    
    return(
        <S.Container>
            <S.Content>
                <img src={logo} alt="smart money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                
            </S.Content>
        </S.Container>
    )
}