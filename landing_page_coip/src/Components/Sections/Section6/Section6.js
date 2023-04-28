import { StyledCallButton, StyledDivision, StyledImg, StyledMap, StyledMapsConteiner, StyledP, StyledSchedule, StyledScheduleSection, StyledSection6, StyledSubTitle, StyledTextSchedule, StyledTitle, StyledWhats } from "./StyledSection6"
import { callWhatsapp} from "../../../Content/content"
import whatsappLogo from "../../../Assets/whatsappLogo.png"
import teamPicture from "../../../Assets/teamPicture.jpg"

export const Section6 = () => {
    return (
        <StyledSection6>
            <StyledMapsConteiner>
                <StyledMap src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=COIP%20Icara%C3%AD+(COIP%20Icara%C3%AD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></StyledMap>
                <StyledMap src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Estrada%20dos%20Menezes,%20850%20-%20sala%20920%20Alc%C3%A2ntara+(COIP%20Alc%C3%A2ntara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></StyledMap>
            </StyledMapsConteiner>
            <StyledScheduleSection>
                <StyledTitle>Agende sua consulta</StyledTitle>
                <StyledSubTitle>Atendimento</StyledSubTitle>
                <StyledDivision></StyledDivision>
                <StyledSchedule>
                <StyledTextSchedule>Seg-Sex</StyledTextSchedule>
                <StyledTextSchedule>8:30 - 18:00</StyledTextSchedule>
                </StyledSchedule>
                <StyledCallButton>
                    <StyledWhats src={whatsappLogo} />
                    <StyledP>{callWhatsapp}</StyledP>
                </StyledCallButton>
                {/* <StyledImg src={teamPicture}/> */}

            </StyledScheduleSection>
        </StyledSection6>
    )
}

