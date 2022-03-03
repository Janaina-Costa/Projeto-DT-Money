import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue)
`

export const Content = styled.div`
    max-width:1120px;
    margin:auto;

    padding:2rem 1rem 12rem;
    display:flex;
    align-items: center;
    justify-content:space-between;

    button{
        font-size:1rem;
        color: var(--shape);
        background: var(--blue-light);
        height:3rem;
        border:0;
        border-radius:0.3125rem;
        padding:0 2rem;
        transition: filter .2s;

        &:hover{
            filter:brightness(.9);
        }

    }

`