import { StyledHeader, StyledInsta, StyledLogo } from "./StyledHeader"
import instaLogo from "../../Assets/instaLogo.png"
import coipLogo from "../../Assets/coipLogo.png"



export const Header = () => {

    return(
        <StyledHeader>
            <StyledLogo src={coipLogo}/>
            <a href="https://www.instagram.com/coip.odontopediatria/" target="blank">
            <StyledInsta src={instaLogo}/>
            </a>
        </StyledHeader> 
    )
}