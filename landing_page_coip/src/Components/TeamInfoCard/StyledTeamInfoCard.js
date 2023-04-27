import styled from "styled-components"

export const StyledPictureTeam = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transition: all 0.7s;

    &:hover{
      width: 250px;
      height: 250px;
      /* animation: showInfo 0.7s ease-in-out forwards alternate; */
    }

    &:not(:hover){
      ${props=>props.isHoveredCard ? ("width: 250px; height: 250px"): ""}
    }

    /* @keyframes showInfo{
      0%{
        width: 250px;
        height: 250px;
      }
      100%{
        width: 400px;
        height: 400px;
      }
    }

      @keyframes hideInfo{
      0%{
        width: 400px;
        height: 400px;
      }
      100%{
        width: 250px;
        height: 250px;
      }
      
    } */
`

export const StyledTeamInfo = styled.div`
background-color: white;
width: auto;
height: auto;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
/* opacity: 1; */

/* transition: all 1s; */

opacity: 0;
/* transition: all 0.5s ease-in-out; */
animation: fadeIn 5s forwards;

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}


`
export const StyledNameInfo = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
font-size: 30px;
margin: 0px;
`

export const StyledPositionInfo = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
font-size: 15px;
`

export const StyledCROInfo = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
font-size: 15px;
`

export const StyledTeamInfoConteiner = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
border-radius: 10px;
box-shadow: 20px 20px;
width: 0vw;
height: auto;
/* margin-left: 80px; */

transition: all 0.7s;

&:hover{
/* animation: showCard 0.7s ease-in-out; */
background-color: white;
width: 32vw;
height: auto;
padding: 25px;
}



/* @keyframes showCard {

  0%{
    width: 0vw;
    height: 0vh;
    padding: 25px;
  }

  100%{
    background-color: white;
    width: 32vw;
    height: auto;
    padding: 25px;
  }
  
} */
` 

export const StyledBlank = styled.div`
width: 200px;
height: 200px;
background-color: white;
`