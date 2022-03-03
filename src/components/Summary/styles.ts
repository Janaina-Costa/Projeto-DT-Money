import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    &>:last-child{
            background: var(--green);
            color: var(--shape)
        }

    div{
        background: var(--shape);
        margin-top:4.75rem;
        border-radius: 0.3125rem;
        padding: 1.5rem 2rem;
        color: var(--text-title);
       

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;

        }
        strong{
            display: block;
            margin-top:1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height:3rem;

        }
    }
`