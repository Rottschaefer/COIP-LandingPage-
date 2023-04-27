import styled from "styled-components";




export const StyledSection3 = styled.div`
display: flex;
position: relative;
/* align-items: start; */
/* flex-wrap: wrap; */
flex-direction: column;
justify-content: space-around;
background-color: #24b7f1;
height: 40vh;
padding: 80px;

transition: all 2s;

&:hover{
  height: 100vh;
}

`
export const StyledTitleSection3 = styled.p`
position: absolute;
top: 0%;
color: white;
align-self: center;
margin-bottom: 00px;
font-size: 50px;
font-weight: 700;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
z-index: 1;

`

export const StyledTeamInfoSection = styled.div`
z-index: 0;
position: relative;
top: 10%;
display: flex;
flex-wrap: wrap;
/* flex-direction: column; */
justify-content: space-around;
background-color: #24b7f1;
height: 100vh;
padding: 80px;
`

