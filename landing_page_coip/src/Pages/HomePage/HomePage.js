import fotoHomePage from "../../Assets/fotoHomePage.png"
import { Section1 } from "../../Components/Sections/Section1/Section1"
import { Section2 } from "../../Components/Sections/Section2/Section2"
import { Section3 } from "../../Components/Sections/Section3/Section3"
import { Section4 } from "../../Components/Sections/Section4/Section4"
import { Section5 } from "../../Components/Sections/Section5/Section5"


import { StyledMain, StyledPictureHomePage } from "./StyledHomePage"
 

export const HomePage = () => {


    return (
        <StyledMain>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            {/* <StyledPictureHomePage src={fotoHomePage} /> */}
        </StyledMain>
    )
} 