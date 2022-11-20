import styled, { keyframes } from 'styled-components';

export const TextFade = keyframes`
0%{
  opacity: 0;
  transform: translateY(-10px);
}

80%{
  opacity: 0.5;
  transform: translateY(-10px);
}

100%{
  opacity: 1;
  transform: translateY(0px);
}
`;

export const textSlide = keyframes`
  0%{
    tranform: translateX(-20px);
  }

  100%{
    transform: translateX(0px);
  }

`;

export const slideIn = keyframes`
  0% { transform: translateX(500px) scale(.2); }
  100% { transform: translateX(0px) scale(1); }
`;

export const slideUp = keyframes`
  0% { transform: translateY(300px); }
  100% { transform: translateY(0px); }
`;

export const expand = keyframes`
  0% { transform: translateX(1400px); }
  100% { transform: translateX(0px); }
`;

export const Title = styled.h1`
  font-size: 50rem;
  color: var(--color-yellow);
  margin-top: 10rem;
  margin-bottom: 20px;
  transform: translateY(100px);
  animation: ${TextFade} 1s 0.5s forwards ease-in-out, 
  ${textSlide} 1s 0.5s forwards ease-in-out;
  opacity: 0;

  @media(max-width: 844px){
    font-size: 35rem;
    margin-top: 45px;
    position: relative;
  }  

  @media(max-width: 400px){
    font-size: 30rem;
    margin-top: 30px;
    position: relative;
  }  

  @media(max-width: 375px){
    font-size: 20rem;
    margin-top: 55px;
    position: relative;
  }  
`; 

export const Parag = styled.p`
  font-size: 28rem;
  line-height: 28px;
  margin-right: 40rem;
  text-align: justify;
  transform: translateY(300px);
  animation: slideUp .8s forwards ease-in-out .8s;
  height: auto;
  overflow: hidden;

  @media(max-width: 844px){
    font-size: 20rem;
    padding-top:10rem;
  }  

  @media(max-width: 400px){
    font-size: 20rem;
  }  

  @media(max-width: 375px){
    font-size: 15rem;
  }  
`;

export const Scroll = styled.div`
  height: 100%;
  position: relative;
  width: 150px;
  overflow: hidden;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid var(--color-yellow);
  border-radius: 50px;
  padding: 8px 12px;
  color: var(--color-yellow);
  font-size: 16px;
  text-transform: uppercase;
  position: fixed;
  cursor: pointer;
  margin-top: 15px;
  outline: none;
  transform: translateY(50px);
  animation: slideUp .8s ease-in-out  forwards 1s;

  @media(max-width: 887px){
    margin-top: 30px;
    font-size: 10px;
  }  

  @media(max-width: 400px){
    margin-top: 30px;
    font-size: 10px;
  }

  @media screen and (min-width: 375), 
    screen and (min-height: 667px) {
      margin-top: 20rem;
      margin-bottom: 20rem;
  }

`;

export const IntroBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  animation: expand .8s ease forwards;
  background-color: var(--color-secondary);
  position: relative;
  font-family: 'Libre Baskerville', serif;
  transition: all .8s ease;

  @media(max-width: 887px){
    padding-top: 15px;
    font-size: 10px;
    display: flex;
  }  

  @media(max-width: 525px){
    font-size: 10px;
    display: block;
  }

  @media(max-width: 400px){
    padding-top: 15px;
    font-size: 10px;
    //display: inline-table;
  }

  @media screen and (min-width: 375px), 
    screen and (min-height: 667px) {
      margin-bottom: 20rem;
      height: 140vh;
  }

  @media screen and (max-width: 375px), 
    screen and (max-height: 590px) {
      margin-bottom: 20rem;
      height: 140vh;
  }
`;

export const BoxEdge = styled.div`
  width: 80%;
  margin-left: 80px;

  @media(max-width: 887px){
    margin-top: -5px;
    font-size: 10px;
  }  

  @media(max-width: 525px){
    display: block;
    align-items: center;
    justify-content: center ;
  }  

  @media(max-width: 400px){
    margin-top: 5px;
    font-size: 10px;
  }
`;

export const BoxImg = styled.div`
  margin: 50px;
  //width: 50%;
  overflow: hidden;

  @media(max-width: 887px){
    //width: 100%;
    //margin: 10px;
    //height: 100%;
    //min-height: 80vw;
  }  

  @media(max-width: 400px){
    height: auto;
    margin: 25px 50px -10px;
    min-height: 60vw;
  }
`;

export const IntroImg = styled.img`
  width: 500px;
  height: 700px;
  animation: slideIn 1.5s ease-in-out forwards;
	background: url("../images/logo.png") no-repeat center;
	background-size: 92px 15px;
  
  object-fit: contain;

  @media(max-width: 505px){
    width: auto;
    padding-top: 5rem;
		padding-left: 30px;
		padding-right: 30px;
  }
  
  @media(max-width: 980px){
    width: 100%;
    height: auto; 
    position: relative;
    //margin: auto 40rem;
  }  

  @media(max-width: 400px){
    width: 100%;
    height: 100%;
    position: relative;
    //margin: 20rem 40rem;
  }  
`;

export const Shade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: -10;
  background-color: var(--color-yellow);
`;