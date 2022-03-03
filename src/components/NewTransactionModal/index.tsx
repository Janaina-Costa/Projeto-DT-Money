import { FormEvent,  useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import Modal from  'react-modal'

import * as S from "./styles"

import iconclose from '../../assets/close.svg'
import iconUp from "../../assets/iconcome.svg"
import iconDown from "../../assets/outcome.svg"

interface NewTransactionModalProps{
    onRequestClose:()=>void,
    isOpen:boolean
}


export const NewTransactionModal =({onRequestClose, isOpen}:NewTransactionModalProps)=>{
    const {createTransaction} = useTransactions()
    const[type, setType] = useState('deposit')
    const[title, setTitle] = useState('')
    const[category, setCategory] = useState('')
    const[amounth, setAmounth] = useState(0)

    const handelCreateNewTransaction = async (e:FormEvent)=>{
        e.preventDefault()
       await createTransaction({
            title, 
            type,
            amounth, 
            category
        })
        setTitle('')
        setAmounth(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }
     

    return(
    
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className='react-modal-content'
            >
                <button type='button' className='close-modal' onClick={onRequestClose}>
                    <img src={iconclose} alt="fechar modal" />
                </button>
                <S.Container onSubmit={handelCreateNewTransaction} >
                    <h2>Cadastrar Transações</h2>

                    <input 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} />

                    <input 
                    type="number"
                    placeholder="Valor" 
                    value={amounth}
                    onChange={(e)=>setAmounth(Number(e.target.value))} 
                    />

                    <S.TransactionTypeContainer>
                        <S.RadioButton
                        type="button"
                        isActive = {type === 'deposit'}
                        activeColor = "green"
                        onClick={() =>{setType('deposit')}}
                        >
                            <img src={iconUp} alt="Entrada" />
                            <span>Entrada</span>
                        </S.RadioButton>

                        <S.RadioButton
                        type="button"
                        isActive = {type === 'withdrow'}
                        activeColor="red"
                        onClick={() =>{setType('withdrow')}}
                        >
                            <img src={iconDown} alt="Saida" />
                            <span>Saída</span>
                        </S.RadioButton>
                    </S.TransactionTypeContainer>

                    <input 
                    placeholder="Categoria" 
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)} 
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
                </S.Container>
           
                    
        </Modal>
     
        
    )
}