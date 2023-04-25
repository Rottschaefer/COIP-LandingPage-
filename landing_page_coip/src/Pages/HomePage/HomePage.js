import fotoHomePage from "../../Assets/fotoHomePage.png"
import whatsappLogo from "../../Assets/whatsappLogo.png"
import { StyledInsta } from "../../Components/Header/StyledHeader"


import { StyledCallButton, StyledFotoHomePage, StyledInfo, StyledMain, StyledP, StyledTitle, StyledWhats } from "./StyledHomePage"


export const HomePage = () => {
    return (
        <StyledMain>
            <StyledFotoHomePage src={fotoHomePage} />
            <StyledInfo>
                <StyledTitle>Há mais de 30 anos transformando famílias e sorrisos</StyledTitle>
                <div>
                    <StyledCallButton>
                        <StyledWhats src={whatsappLogo} />
                        <StyledP>Agende uma consulta</StyledP>                    
                        </StyledCallButton>
                </div>
            </StyledInfo>
        </StyledMain>
    )
} 