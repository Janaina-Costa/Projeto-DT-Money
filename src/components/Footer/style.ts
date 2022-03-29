import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    position: static;
    img {
        z-index:1000;
        width:18.75rem;
        
    }

    div{
        display: flex;
        justify-content:center;
         #linkd,
         #insta,
         #github{
             margin:2px 10px;
             width: 1.5rem;             
             padding: 0;
             
         }         
    }
`