import styled, { keyframes ,css } from "styled-components"; // Make sure to install styled-components



export const fadeInImg = ({time ='2s', type="ease"} = {}) => 
css` animation: ${time} ${fadekeyframes} ${type};`


const fadekeyframes = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}


to {

    filter: blur(0);
    opacity: 1;
}
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const StyledContextTyeHotel = styled.div`
top: 330px;
position: absolute;
left: 0%;
width: 330px;
height: 170px;
right:-567px;
margin: auto;
z-index: 1000;
padding: 8px;
box-shadow: 17px 20px 40px rgba(0, 0, 0, .21);
background: #fff;
opacity: 0;
border-radius:  1.25rem;;
  animation: ${fadeIn} 0.8s ease forwards; // Apply the fadeIn animation
  &.fade-in {
    animation: ${fadeIn} 0.3s ease forwards; // Apply the fadeIn animation
  }
`;


export const StyledMenuItem = styled.div`
  padding:0px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
`;


export const StyledMenuItemNumber = styled.div`
  padding:0px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const StyledMenuItemButton = styled.div`
bottom: 0;
position: fixed;
align-items: center;
display: flex;
right: 6px;
left: 2px;
justify-content: center;
height: 50px;
border-top: 1px solid rgb(224, 224, 224);
`;

export const StyleTitleHotel = styled.span`
font-weight: 500;
`
export const StyleSpan = styled.span`
display: flex;
align-items: center;
font-weight: 300;

`
export const StyleNumberPeople = styled.input`
width: 18%;
text-align: center;
border: solid 1px #dbdde1;
height: 39px;
border-radius: 5px;
`

export const StyleSpanIcons = styled.span`
display: flex;
align-items: center
margin-right: 10px;
`

export const StyleGroup= styled.div`
`


export const MainProduct = styled.div`
width: 100%;
box-shadow: 17px 20px 40px rgba(0, 0, 0, .21) ;
justify-content: space-between;
align-items: center;
border-radius:25px;
@media(min-width: 1024) {
  dispaly: block;
}
`

export const ImginProduct = styled.img`
width: 100%;
object-fit: cover;
height:12rem;

${fadeInImg({time:"2s"})}

@media (max-width: 2000px) {
  border-bottom-left-radius:8%;
  border-top-left-radius: 8%;
}
@media (max-width: 1000px) {
  border-bottom-left-radius: 0px; 
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
}

@media (max-width: 480px) {
  border-bottom-left-radius: 0px; 
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
}
@media(max-width: 400px) {
  border-bottom-left-radius: 0px; 
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
}
`
export const SectionSearch = styled.section`
border-bottom: 1px solid rgb(224, 224, 224);

`
export const ContainerIcons = styled.div`
display: flex;
justify-content: space-between;
`
export const ContaineButton = styled.div`
width:100%%;
padding: 0.5rem;
`

export const ContainerHeader = styled.header`
border-bottom: 1px solid rgb(224, 224, 224);
`

export const  TextWidth = styled.div`
font-weight: 400;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 470px;

@media (max-width: 768px) {
  width: 90%;
}

@media (max-width: 480px) {
  width: 100%;
}
`

export const  ContainerFooter = styled.footer`
  border-top:1px solid rgb(224, 224, 224);
`


export const  BorderInput = styled.div`
border-left:1px solid rgb(224, 224, 224);
cursos:pointer;

@media(max-width: 1024px) {
  border-left:none;
  border-bottom: 1px solid rgb(224, 224, 224)
}
`

export const MainAccomodation = styled.main`

`


export const BorderSearch = styled.div`

@media(max-width: 1500px) {
  border-bottom: 1px solid rgb(224, 224, 224)
}
`


export const ContainerButtonSearch = styled.div`

@media(max-width: 1500px) {
 
}
`


export const ButtonSearch = styled.button`

border-radius: 10px;

@media(max-width: 1500px) {
  width:100%;
}
`