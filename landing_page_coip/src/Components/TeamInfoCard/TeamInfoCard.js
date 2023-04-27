import { useState } from "react"
import { StyledBlank, StyledCROInfo, StyledNameInfo, StyledPictureTeam, StyledPositionInfo, StyledTeamInfo, StyledTeamInfoConteiner } from "./StyledTeamInfoCard"

export const TeamInfoCard = ({photo, name, position, CRO, info}) => {

    const [isHoveredCard, setIsHoveredCard] = useState(false)
    const [showInfo, setshowInfo] = useState(false)

    const handleIsHoveredCard = () => {
        setIsHoveredCard(!isHoveredCard)
    }


    const handleShowInfo = () =>{
        setTimeout(setshowInfo(true), 1000)
        console.log(showInfo)
    }


    return (

        <StyledTeamInfoConteiner onTransitionEndCapture={handleShowInfo} isHoveredCard={isHoveredCard} onMouseEnter={()=>setIsHoveredCard(true)} onMouseLeave={()=>{setIsHoveredCard(false); setshowInfo(false)}}>
            <StyledPictureTeam onMouseEnter={()=>setIsHoveredCard(true)} src={photo} isHoveredCard={isHoveredCard} />
            {(isHoveredCard) &&
                <div>
                    <StyledNameInfo>{name}</StyledNameInfo>
                    <StyledPositionInfo>{position}</StyledPositionInfo>
                    <StyledCROInfo>CRO {CRO}</StyledCROInfo>
                   {isHoveredCard ? showInfo &&
                    <StyledTeamInfo isHoveredCard={isHoveredCard}>{info}</StyledTeamInfo>
                    :
                    <StyledBlank></StyledBlank>
                   }
                 </div>}
        </StyledTeamInfoConteiner>
    )
}