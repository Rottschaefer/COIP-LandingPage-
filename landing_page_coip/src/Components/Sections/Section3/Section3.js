import { team } from "../../../Content/content"
import { TeamInfoCard } from "../../TeamInfoCard/TeamInfoCard"
import { StyledSection3, StyledTeamInfoSection, StyledTitleSection3 } from "./StyledSection3"

export const Section3 = () => {
    return (
        <StyledSection3>
            <StyledTitleSection3>Conheça nosso time!</StyledTitleSection3>
            <StyledTeamInfoSection>
                {team.map((worker) => {
                    return (
                        <TeamInfoCard name={worker.name} photo={worker.photo} position={worker.position} CRO={worker.CRO} info={worker.info} />
                    )
                })}
            </StyledTeamInfoSection>
        </StyledSection3>)
}