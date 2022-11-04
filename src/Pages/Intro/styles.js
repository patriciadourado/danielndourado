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
  margin-bottom: 20px;
  transform: translateY(100px);

  animation: ${TextFade} 1s 0.5s forwards ease-in-out, 
  ${textSlide} 1s 0.5s forwards ease-in-out;
  opacity: 0;

  @media(max-width: 887px){
    font-size: 40rem;
  }  

  @media(max-width: 400px){
    font-size: 30rem;
  }  
`; 

export const Parag = styled.p`
  font-size: 28rem;
  line-height: 28px;
  text-align: justify;
  transform: translateY(300px);
  animation: slideUp .8s forwards ease-in-out .8s;
  height: auto;
  overflow: hidden;

  @media(max-width: 887px){
    font-size: 25rem;
  }  

  @media(max-width: 400px){
    font-size: 20rem;
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
    margin-top: 5px;
    font-size: 10px;
  }  

  @media(max-width: 400px){
    margin-top: 5px;
    font-size: 10px;
  }
`;

export const IntroBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  animation: expand .8s ease forwards;
  background-color: var(--secondary-color);
  position: relative;
  font-family: 'Libre Baskerville', serif;
  transition: all .8s ease;

  @media(max-width: 887px){
    height: 70vh;
    padding-top: 15px;
    font-size: 10px;
  }  

  @media(max-width: 525px){
    height: 80vh;
  }

  @media(max-width: 400px){
    height: 80vh;
    padding-top: 15px;
    font-size: 10px;
  }
`;

export const BoxContent = styled.div`
  width: 50%;

  @media(max-width: 887px){
    margin-top: -5px;
    font-size: 10px;
  }  

  @media(max-width: 400px){
    margin-top: 5px;
    font-size: 10px;
  }
`;

export const BoxEdge = styled.div`
  width: 80%;
  margin-left: 80px;

  @media(max-width: 887px){
    margin-top: -5px;
    font-size: 10px;
  }  

  @media(max-width: 400px){
    margin-top: 5px;
    font-size: 10px;
  }
`;

export const BoxImg = styled.div`
  margin: 50px;
  width: 50%;
  overflow: hidden;

  @media(max-width: 887px){
    height: auto;
    min-height: 80vw;
  }  

  @media(max-width: 400px){
    height: auto;
    min-height: 80vw;
  }
`;

export const IntroImg = styled.img`
  width: 500px;
  height: 700px;
  animation: slideIn 1.5s ease-in-out forwards;

  @media(max-width: 887px){
    width: 300px;
    height: 400px; 
  }  

  @media(max-width: 400px){
    width: 100px;
    height: 150px; 
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