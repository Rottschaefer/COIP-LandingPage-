import styled from "styled-components"

export const StyledPictureTeam = styled.img`
    width: ${props=>props.isHoveredCard ? "250px" : "150px"};
    height:  ${props=>props.isHoveredCard ? "250px" : "150px"};
    border-radius: 50%;
    transition: all 0.7s;

  

    /* &:not(:hover){
      ${props=>props.isHoveredCard ? ("width: 250px; height: 250px"): ""}
    } */
`

// export const StyledPictureTeam = styled.img`
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//     transition: all 0.7s;

//     &:hover{
//       width: 250px;
//       height: 250px;
//       /* animation: showInfo 0.7s ease-in-out forwards alternate; */
//     }

//     &:not(:hover){
//       ${props=>props.isHoveredCard ? ("width: 250px; height: 250px"): ""}
//     }

//     /* @keyframes showInfo{
//       0%{
//         width: 250px;
//         height: 250px;
//       }
//       100%{
//         width: 400px;
//         height: 400px;
//       }
//     }

//       @keyframes hideInfo{
//       0%{
//         width: 400px;
//         height: 400px;
//       }
//       100%{
//         width: 250px;
//         height: 250px;
//       }
      
//     } */
// `

export const StyledTeamInfo = styled.div`
text-align: justify;
background-color: white;
width: auto;
height: auto;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

/* opacity: 0; */
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
width: ${props => props.isHoveredCard ? "32vw" : "0vw"};
height: auto;

background-color: white;
padding: ${props => props.isHoveredCard ? "25px" : "0px"};



transition: all 0.7s;
` 

export const StyledBlank = styled.div`
width: 200px;
height: 200px;
background-color: white;
`