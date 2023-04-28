import { callWhatsapp, textSection2, titleSection2 } from "../../../Content/content"
import whatsappLogo from "../../../Assets/whatsappLogo.png"
import fotoSection2Option from "../../../Assets/fotoSection2Option.jpg"
import { StyledInfoSection2, StyledPictureSection2, StyledSection2, StyledTextSection2, StyledTitleSection2, StyledCallButton, StyledP, StyledWhats, StyledTextBackGround } from "./StyledSection2"

export const Section2 = () => {
    return (
        <StyledSection2>
            <StyledTitleSection2>{titleSection2}</StyledTitleSection2>
            <StyledInfoSection2>
                {/* <StyledTitleSection2>{titleSection2}</StyledTitleSection2> */}
                {/* <StyledTextBackGround/> */}
                <div>
                <StyledTextSection2>{textSection2}</StyledTextSection2>
                <StyledCallButton>
                    <StyledWhats src={whatsappLogo} />
                    <StyledP>{callWhatsapp}</StyledP>
                </StyledCallButton>
                </div>
                <StyledPictureSection2 src={fotoSection2Option} />
            </StyledInfoSection2>
            {/* <StyledPictureSection2 src={fotoSection2Option} /> */}
        </StyledSection2>
    )
}