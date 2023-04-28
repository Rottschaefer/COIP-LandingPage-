import styled from "styled-components";

export const StyledSection5 = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
background-color: #ffd94f;
padding: 50px;
`

export const StyledTitle = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 900;
text-shadow: 2px 3px 1px rgba(0, 0, 0, 0.35);
margin-top: 0px;
margin-bottom: 0px;
color: white;
font-size: 50px;
`

export const StyledSubTitle = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: 500;
text-shadow: 2px 3px 1px rgba(0, 0, 0, 0.35);
margin-top: 0px;
margin-top: 30px;
color: white;
font-size: 34px;
background-color: #604532;
border-radius: 10px;
padding: 10px;
padding-left: 25px;
box-shadow: 5px 5px black;
display: flex;
align-items: center;
`

export const StyledLogo = styled.img`
width: 200px;
height: auto;
margin-left: -15px;
`

export const StyledPhotoGrid = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(3,1fr);
/* grid-auto-rows: auto(150px, auto); */
grid-gap: 10px;
/* width: auto; */
`

export const One = styled.img`
grid-column: 1/2;
grid-row: 1/2;
width: 100%;
height: 23.9vw;
object-fit: cover;

transition: all 0.5s;

&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}

`

export const Two = styled.img`
grid-column: 2/5;
grid-row: 1/2;
width: 100%;
height: 23.9vw;

transition: all 0.5s;


&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`

export const Three = styled.img`
grid-column: 5/8;
grid-row: 1/2;
width: 100%;
height: 23.9vw;


transition: all 0.5s;

&:hover{
    width: auto;
    height: 27vw;
    /* padding-right: 100px; */
    z-index: 2;
}
`

export const Four = styled.img`
grid-column: 1/3;
grid-row: 2/3;
width: 100%;
height: 23.9vw;


transition: all 0.5s;


&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`

export const Five = styled.img`
grid-column: 3/6;
grid-row: 2/3;
width: 100%;
height: 23.9vw;


transition: all 0.5s;

&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`

export const Six = styled.img`
grid-column: 6/8;
grid-row: 2/3;
width: 100%;
height: 23.9vw;


transition: all 0.5s;

&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`
export const Seven = styled.img`
grid-column: 1/4;
grid-row: 3/4;
width: 100%;
height: 23.9vw;


transition: all 0.5s;


&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`

export const Eight = styled.img`
grid-column: 4/8;
grid-row: 3/4;
width: 100%;
height: 23.9vw;


transition: all 0.5s;


&:hover{
    width: auto;
    height: 27vw;
    z-index: 2;
}
`