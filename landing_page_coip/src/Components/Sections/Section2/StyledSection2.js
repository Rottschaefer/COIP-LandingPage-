import styled from "styled-components";


export const StyledSection2 = styled.div`
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */
background-color: #b3d143;
padding: 3vw 80px;
align-items: center;
margin-top: -4px;
align-items: flex-start;
`

export const StyledInfoSection2 = styled.div`
gap: 5vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
/* align-items: center; */
flex-direction: row;
/* padding-right: 100px; */
`

export const StyledTitleSection2 = styled.p`
color: white;
text-shadow: 2px 1.5px 1px rgba(0, 0, 0, 0.35);
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 45px;
font-weight: 600;
margin-bottom: 5px;
width: 500px;
`

export const StyledPictureSection2 = styled.img`
    width: 30vw;
    height: 30vw;
    border-radius: 10px;
    align-self: center;
`
// export const StyledTextBackGround = styled.div`
// position: absolute;
// top: 0;
// left: 0;
// width: 50vw;
// height: 50vh;
// background-color: white;
// transform: rotate(45deg);
// `

export const StyledTextSection2 = styled.p`
width: 40vw;
position: relative;
color: #503521;
font-size: 24px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
/* text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); */
background-color: #ffebdd;
padding: 2vw;
border-radius: 10px;
box-shadow: 10px 10px;
`

export const StyledCallButton = styled.button`
display: flex;
align-items: center;
justify-content: space-around;
background-color: white;
border: none;
width: 220px;
height: 50px;
border-radius: 50px;
transition: all 0.5s;

&:hover{
  width: 240px;
  height: 60px;
}
`

export const StyledWhats = styled.img`
    width: 25px;
    height: 25px;
`
export const StyledP = styled.p`
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
font-size: 14.5px;
margin-right: 15px;
`