import styled from "styled-components";


export const StyledPictureHomePage = styled.img`
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  position: relative;
`;

export const StyledInfo = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 2%;
right: 55%;
margin-left: 80px;
`
export const StyledWhats = styled.img`
    width: 25px;
    height: 25px;
`


export const StyledTitle = styled.p`
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 800;
font-size: 50px;
`

export const StyledP = styled.p`
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
font-size: 14.5px;
margin-right: 15px;
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