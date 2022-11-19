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
  
`;


export const BlogTitle = styled.h1`
  color: var(--color-yellow);
  font-size: 25px;
  font-style: normal;
	font-weight: 700;
  font-family: 'Libre Baskerville', serif;
  
	line-height: 1.875;
  margin-bottom: 30rem;
	letter-spacing: .4rem;
  
  text-align: center;
  position: relative;
  margin-top: 20rem;
  
  transform: translateY(50px);

  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  
  @media(max-width: 887px){
    padding: 0 20rem 5rem;
    font-size: 25px;
    /* text-align: center; */
    /* margin: auto; */
    margin-left: 30rem;
    /* width: 249px; */
    height: auto;
  }

  @media(max-width: 580px){
    margin-left: 10rem;
    /* margin-right: 2rem; */
  }

  @media(max-width: 505px){
    margin: auto;
  }

  @media(max-width: 400px){
    padding-top: 5rem;
    padding-bottom: 50rem ;
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
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  object-fit: cover;
  //opacity: 0.85;
  
  &:hover{
    background-color: var(--color-white);
    opacity: 0.4;

    & > ${BlogButton} {
        opacity: 0.85;
    }
  }

  @media(min-width: 1260px){
    margin-top: 10px;
    display: block;
    background-repeat: no-repeat;
    background-size: 95%;
    width: auto;
    height: 105vh;
  }

  @media(min-width: 1260px){
    margin-top: 10px;
    display: block;
    background-repeat: no-repeat;
    background-size: 85%;
    width: auto;
    height: 100vh;
  }
  
  @media(max-width: 825px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${blogmImg});
    width: auto;
    height: 105vh;
  }

  @media(max-width: 785px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${blogmImg});
    width: auto;
    height: 102vh;
  }

  @media(max-width: 730px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${blogmImg});
    width: auto;
    height: 95vh;
  }

  @media(max-width: 670px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${blogmImg});
    width: auto;
    height: 90vh;
  }

  @media(max-width: 500px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    width: auto;
    height: 70vh;
  }

  @media(max-width: 475px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    width: auto;
    height: 62vh;
  }

  @media(max-width: 467px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 60vh;
  }

  @media(max-width: 425px){
    display: block;
    background-size: 100%;
    background-repeat: no-repeat;
    width: auto;
    height: 55vh;
  }
`;

export const BlogBox = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 45% 10rem;


  @media(max-width: 400px){
    padding: 0;
  }

`;
