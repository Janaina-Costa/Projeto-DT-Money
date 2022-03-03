import * as S from "./style"
import logojana from "../../assets/Janaina.svg"
import insta from '../../assets/insta40x40.svg'
import github from '../../assets/git40x40.svg'
import linkd from '../../assets/lkd40x40s.svg'
export const Footer = ()=>{
    return (
        <S.Container>
            <img src={logojana} alt="" /> 
            <div> 
               <a href="https://www.instagram.com/janacosta_dev/"><img src={insta} alt="insta" id="insta"/> </a>
               <a href="https://github.com/Janaina-Costa"><img src={github} alt="github" id="github"/></a> 
               <a href="https://www.linkedin.com/in/janaina-costa-1193241b2/"><img src={linkd} alt="" id="linkd" /></a> 
            
            
            </div>
        </S.Container>
    )

}