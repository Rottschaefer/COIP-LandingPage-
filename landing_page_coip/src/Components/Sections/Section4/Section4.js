import { StyledCallButton, StyledP, StyledSection4, StyledSubTitle, StyledTitle, StyledWhats } from "./StyledSection4"
import { callWhatsapp} from "../../../Content/content"
import whatsappLogo from "../../../Assets/whatsappLogo.png"

export const Section4 = () => {
    return (
        <StyledSection4>
            <StyledTitle>Agende sua consulta</StyledTitle>
            <StyledSubTitle>Fale com a nossa equipe!</StyledSubTitle>
            <StyledCallButton>
                <StyledWhats src={whatsappLogo} />
                <StyledP>{callWhatsapp}</StyledP>
            </StyledCallButton>
        </StyledSection4>
    )
}