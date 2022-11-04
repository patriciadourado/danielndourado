import styled from "styled-components";

export const FooterDnd = styled.footer`
  /* padding-bottom: 3rem; */
	font-size: 14rem;
	font-family: 'Cinzel', serif;
	font-style: normal;
	font-weight:400;
  background-color: var(--color-yellow);
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  /* margin-top: 200rem; */

  @media(max-width: 887px){
    font-size: 10rem;
    /* margin-top: 4vw; */
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  font-size: 12rem;
  width: 100%;
  font-family: 'Cinzel', serif;
  background-color: var(--color-black-dark);
  background: var(--color-contact);
  color: var(--color-white-light);
  padding-top: 30rem;
  margin-top: 50rem;
  padding-bottom: 15rem;
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  
  @media(max-width: 887px){
    padding-top: 15rem;
  }
 
`;

export const FooterRow = styled.div`
  width: 100%;
  /* max-width: 900px; */
  /* float: right; */
  text-align: center;
  /* color: var(--color-white-light); */
  /* margin-right: 5rem; */
  /* margin-top: -120rem; */
  /* margin-bottom: 70rem; */
  margin-top: 90rem;
  /* background-color: var(--color-very-green); */
  /* margin-bottom: 40rem; */

  @media(max-width: 887px){
    text-align: center;
    margin-top: 40rem;
    /* margin-top: -80rem;
    margin-bottom: 30rem; */
  }

`;

export const FooterSocial = styled.ul`
  display: inline-block;
	font-size: 20px;
	/* margin: 0 15px; */
	padding: 0;
	position: relative;
	/* top: -.3rem; */
  
  @media(max-width: 887px){
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const FooterItem = styled.li`
  display: inline-block;
  font-size: 25rem;
  color: var(--color-yellow);
	margin: 0 15px;
	padding: 0;

  @media(max-width: 887px){
    font-size: 22rem;
  }
`;