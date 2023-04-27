import { Eight, Five, Four, One, Seven, Six, StyledLogo, StyledPhotoGrid, StyledSection5, StyledSubTitle, StyledTitle, Three, Two } from "./StyledSection5"
import estarSG from "../../../Assets/consultorio/estarSG.png"
import consultorio1SG from "../../../Assets/consultorio/consultorio1SG.png"
import consultorio2SG from "../../../Assets/consultorio/consultorio2SG.png"
import consultorioIca1 from "../../../Assets/consultorio/consultorioIca1.png"
import consultorioIca2 from "../../../Assets/consultorio/consultorioIca2.png"
import recepcaoIca from "../../../Assets/consultorio/recepcaoIca.png"
import recepcaoSG from "../../../Assets/consultorio/recepcaoSG.png"
import sorria from "../../../Assets/consultorio/sorria.png"
import coipLogo from "../../../Assets/coipLogo-removebg.png"


export const Section5 = () => {
    return(
        <StyledSection5>
            {/* <StyledTitle>Clínica de Odontopediatria Irma Paula</StyledTitle> */}
            <StyledSubTitle>{" Espaço "}
            <StyledLogo src={coipLogo}/>
            </StyledSubTitle>
            <StyledPhotoGrid>
            <One src={estarSG}/>       
            <Two src={consultorio2SG}/>       
            <Three src={consultorioIca1}/>       
            <Four src={sorria}/>       
            <Five src={recepcaoIca}/>       
            <Six src={consultorio1SG}/>       
            <Seven src={recepcaoSG}/>       
            <Eight src={consultorioIca2}/> 
            </StyledPhotoGrid>     
        </StyledSection5>
    )
}