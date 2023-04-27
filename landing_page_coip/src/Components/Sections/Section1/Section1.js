import { callWhatsapp, titleSection1, } from "../../../Content/content"
import fotoHomePage from "../../../Assets/fotoHomePage.png"
import whatsappLogo from "../../../Assets/whatsappLogo.png"
import { StyledCallButton, StyledInfo, StyledP, StyledPictureHomePage, StyledTitle, StyledWhats } from "./StyledSection1"


export const Section1 = () => {

    return (
        <div>
            <StyledPictureHomePage src={fotoHomePage} />
            <StyledInfo>
                <StyledTitle>{titleSection1}</StyledTitle>
                <div>
                    <StyledCallButton>
                        <StyledWhats src={whatsappLogo} />
                        <StyledP>{callWhatsapp}</StyledP>
                    </StyledCallButton>
                </div>
            </StyledInfo>
        </div>
    )
}