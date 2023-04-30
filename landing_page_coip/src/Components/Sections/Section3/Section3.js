import { useState } from "react"
import { team } from "../../../Content/content"
import { TeamInfoCard } from "../../TeamInfoCard/TeamInfoCard"
import { StyledSection3, StyledTeamInfoSection, StyledText, StyledTitleSection3 } from "./StyledSection3"

export const Section3 = () => {

    // const [isHoveredCard, setIsHoveredCard] = useState(false)
    // const [showInfo, setshowInfo] = useState(false)

    return (
        <StyledSection3>
            <StyledTitleSection3>Conheça nosso time!</StyledTitleSection3>
            <StyledText>Clique na foto para conhecer mais sobre cada profissional!</StyledText>
            <StyledTeamInfoSection>
                {team.map((worker) => {
                    return (
                        <TeamInfoCard name={worker.name} photo={worker.photo} position={worker.position} CRO={worker.CRO} info={worker.info}/>
                    )
                })}
            </StyledTeamInfoSection>
        </StyledSection3>)
}

// isHoveredCard={isHoveredCard} showInfo={showInfo} setIsHoveredCard={setIsHoveredCard} setshowInfo={setshowInfo}