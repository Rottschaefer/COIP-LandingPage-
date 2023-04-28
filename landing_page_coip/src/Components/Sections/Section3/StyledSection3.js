import styled from "styled-components";


export const StyledSection3 = styled.div`
display: flex;
position: relative;
align-items: space-around;
/* flex-wrap: wrap; */
flex-direction: column;
justify-content: flex-start;
background-color: #24b7f1;
height: 50vh;
padding: 0px 80px;

transition: all 2s;

&:hover{
  height: 66vh;
} 

`
export const StyledTitleSection3 = styled.p`
/* position: absolute;
top: 0%; */
color: white;
align-self: center;
margin-bottom: 00px;
font-size: 50px;
font-weight: 700;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
z-index: 1;
`

export const StyledText = styled.p`
text-align: center;
color: white;
display: flex;
text-shadow: 1px 1px black;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 20px;
font-weight: 600;
align-self: center;
z-index: 1;
`

export const StyledTeamInfoSection = styled.div`
z-index: 0;
/* position: relative;
top: 0%; */
display: flex;
flex-wrap: wrap;
/* flex-direction: column; */
justify-content: space-around;
background-color: #24b7f1;
height: 100vh;
/* width: 100vw; */
margin-top: 20px;
/* padding-left: 100px; */
`

