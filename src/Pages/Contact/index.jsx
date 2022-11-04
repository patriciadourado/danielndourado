import React from 'react';
import { ContactContainer, ContactIntro, ContactWrapper, Intro, ContactLabel, ContactTitle, ContactP, ContactInfo, Info, ContactBox } from './styles';
import Footer from '../../components/Footer'
import { FooterRow, FooterSocial, FooterItem } from "../../components/Footer/styles.js";
import Link from "../../components/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

function Contact(){

  return(
    <ContactBox>  
      <ContactIntro>
        <Intro>
          <ContactTitle>Contato</ContactTitle>
          <ContactP>Para discutir ideias, propostas ou contratação, entre em contato.</ContactP>
        </Intro>
      </ContactIntro>
      <ContactContainer>
        <ContactWrapper>
          <ContactInfo>
            <Info>
              <FontAwesomeIcon className='fas fa-map' icon={faMapMarker}/>
              <ContactLabel>Onde me encontrar</ContactLabel>
              <ContactP>Ouro Preto, Minas Gerais</ContactP>
            </Info>
            <Info>
              <FontAwesomeIcon className='fas fa-envelope' icon={faEnvelope}/>
              <ContactLabel>Email</ContactLabel>
              <ContactP>contact@danielndourado.com</ContactP>
            </Info>
            <Info>
              <FontAwesomeIcon className='fas fa-phone' icon={faPhone}/>
              <ContactLabel>Telefone</ContactLabel>
              <ContactP>(+55) 31 xxxxx-xxxx</ContactP>
            </Info>
          </ContactInfo>
          <FooterRow>
            <FooterSocial>
              <FooterItem>
                <Link
                  href="https://whats.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-whatsapp' icon={faWhatsapp}/>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link
                  href="https://www.linkedin.com/in/daniel-nunes-a0706910b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-linkedin' icon={faLinkedinIn}/>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-instagram' icon={faInstagram}/>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-facebook' icon={faFacebook}/>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-twitter' icon={faTwitter}/>
                </Link>
              </FooterItem>
            </FooterSocial>
          </FooterRow>
        </ContactWrapper>
      </ContactContainer>
      <Footer />
    </ContactBox>
  );
}

export default Contact;