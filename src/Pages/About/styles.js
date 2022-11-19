import styled from 'styled-components';

export const AboutWrapper = styled.section`
  /* display: block; */
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  padding: 20rem;

  @media(max-width: 887px){
    display: block;
    height: auto;
    min-height: 80vw;
  }  

  @media(max-width: 400px){
    height: auto;
    min-height: 80vw;
  }
`;

export const AboutIntro = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  margin-top: 20rem;
  margin-bottom: 10px;
  @media(max-width: 887px){
    margin-top: 13px;
  }
`;

export const AboutTitle = styled.h1`
  color: var(--color-yellow);
  font-size: 25px;
  font-style: normal;
	font-weight: 700;
  font-family: 'Libre Baskerville', serif;
  
	line-height: 1.875;
  margin-bottom: 3rem;
	letter-spacing: .4rem;
  
  transform: translateY(50px);

  @-moz-document url-prefix() {
    font-weight: lighter;
  }

`;

export const AboutP = styled.p`
  color: var(--color-black);
  font-style: regular;
	font-weight: 450;
	font-size: 16rem;
  font-family: 'Libre Baskerville', serif;
  text-align: justify;
  line-height: 1.5;
  padding: 5rem 20rem 0;
  margin-left: 50rem;


  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  /* @media(max-width: 1080px){
    font-size: 13rem;
    padding: 6rem 20rem 5rem;
    margin: auto;
  } */

  @media(max-width: 887px){
    font-size: 13rem;
    padding: 12rem 20rem 5rem;
    /* margin: auto; */
    margin-left: 30rem;
  }

  
  @media(max-width: 580px){
    margin-left: 10rem;
    /* margin-right: 2rem; */
  }
  
  @media(max-width: 505px){
    margin: auto;
  }
`;

export const AboutContainer = styled.div`
  display: block;
  
  @media(max-width: 887px){
    padding-top: 10rem;
  }
`;

export const AboutLabel = styled.h4`
  /* position: relative;
	padding-bottom: 5rem; */

  position: relative;
  font-style: normal;
	font-weight: 700;
	font-size: 20rem;
  font-family: 'Libre Baskerville', serif;
  text-align: justify;
  line-height: 1.5;
  padding: 0 20rem 20rem;
  margin-left: 50rem;


  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  &::after{
    content: '';
    display: block;
    height: 3px;
    width: 50px;
    /* background: rgba(0, 0, 0, 0.2); */
    background: var(--color-yellow);
    position: absolute;
  }
  
  @media(max-width: 887px){
    padding: 0 20rem 5rem;
    font-size: 16rem;
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

  /* @media(max-width: 661px){
    display: block;
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 10rem;
		padding-right: 10rem;
  } */

  @media(max-width: 505px){
    margin: auto;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  position: relative;
	margin-top: 35rem;
	margin-bottom: 6rem;
  padding: 20rem 80rem;
  /* background-color: var(--color-blue-baby); */

  @media(max-width: 781px){
    /* display: block; */
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 20px;
		padding-right: 20px;
  }

  @media(max-width: 661px){
    /* display: block; */
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 10rem;
		padding-right: 10rem;
  }

  @media(max-width: 505px){
    display: block;
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 20px;
		padding-right: 20px;
  }

`;

export const AboutPic = styled.img`
  width: 249px;
  height: 200px;
  object-fit: contain;

  @media(max-width: 505px){
    width: auto;
    padding-top: 5rem;
		padding-left: 30px;
		padding-right: 30px;
  }
`;

export const PicContainer = styled.div`
  display: block;
  background-color: var(--color-white);
  /* width: auto; */
  height: 100%;
  /* float: right; */
  /* object-fit: contain; */

  @media(max-width: 887px){
    padding-bottom: 5rem;
    /* align-items: center; */
  }
`;

