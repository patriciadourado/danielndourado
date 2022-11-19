import styled from "styled-components";
import blogImg from "./../../assets/nblogScreen.png";
import blogmImg from "./../../assets/mblogScreen.png";


export const BlogButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: var(--color-primary);
  color: white;
  width: 50%;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 100rem 50rem;
  font-family: 'Cinzel', serif;
  font-size: 15rem;
  font-weight: 700;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  &:hover{
    animation: slideIn 1.5s ease-in-out forwards;
  }

  @keyframes slideIn {
   0% {
    transform: translateX(500px) scale(.2);
   }
   100% {
    transform: translateX(0px) scale(1);
   }
 }

  @keyframes expand {
    0% {
      transform: translateX(1400px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  
 
`;


export const BlogWrapper = styled.section `
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-attachment: local;
  max-width: 100%;
  max-height: 100%;
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  background-image: url(${blogImg}) ;
  background-size: cover;
  background-color: black;

  object-fit: cover;
  //opacity: 0.85;

  @media(min-width: 1060px){
    margin-top: 10px;
  }
  
  @media(max-width: 880px){
    background-image: url(${blogmImg});
    width: 80%;
    height: 70%;
  }

  @media(max-width: 670px){
    background-image: url(${blogmImg});
    width: 70%;
    height: 70%;
  }

  /*@media(max-width: 400px){
    margin: 0 10px;
  }*/

  
  &:hover{
    background-color: var(--color-primary);
    opacity: 0.4;

    & > ${BlogButton} {
        opacity: 0.85;
    }
  }


`;

export const BlogBox = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
 // margin-top: 80rem;
  padding: 45% 10rem;

  /* width: 60%; */

  /*@media(min-width: 770px){
    padding: 66rem 20%; 
  }*/

  @media(max-width: 400px){
    padding: 0;
  }

`;
