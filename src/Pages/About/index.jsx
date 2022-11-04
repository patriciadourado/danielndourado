import React from 'react';
import {
  AboutWrapper,
  AboutTitle,
  AboutIntro,
  AboutP,
  AboutInfo,
  AboutPic,
  PicContainer,
  AboutLabel,
  AboutContainer,
} from './styles';
import pic1 from '../../assets/format.png';
import pic2 from '../../assets/picLab.jpeg';

function About() {
  return (
    <AboutWrapper id='about'>
      <AboutIntro>
        <AboutTitle>Academia</AboutTitle>
        <AboutInfo>
          <PicContainer>
            <AboutPic src={pic1} alt='graduated' />
          </PicContainer>
          <AboutContainer>
            <AboutLabel>
              Farmacêutico pela Universidade Federal de Ouro Preto
            </AboutLabel>
            <AboutP>			  			  
              Iniciou carreira acadêmica a partir do curso de Agronomia pelo Instituto Federal de Ciência e Tecnologia em 2013/2014. Ingressou no curso de Engenharia Mecânica pela <strong> Universidade Federal do Vale do São Francisco </strong> entre os anos de 2014 e 2016
              contribuindo e atuando em Iniciação Científica na síntese e caracterização de hidroxiapatita pelo Laboratório de Caracterização de Materiais estratégicos.
              Formou-se em Farmácia no ano de 2022 pela UFOP.
            </AboutP>
          </AboutContainer>
        </AboutInfo>

        <AboutInfo>
          <PicContainer>
            <AboutPic src={pic2} alt='labs' />
          </PicContainer>
          <AboutContainer>
            <AboutLabel>Laboratórios</AboutLabel>
            <AboutP>
            Durante a Iniciação cientifica atuou no tratamento e manutenção de modelo animal canino e murino através do laboratório de Imunopatologia da UFOP. 
            Atualmente, também em iniciação científica trabalha no laboratório de toxicologia da UFOP, na avaliação da toxicidade de agrotóxicos utilizando modelo animal zebrafish.
            </AboutP>
          </AboutContainer>
        </AboutInfo>

      </AboutIntro>
    </AboutWrapper>
  );
}

export default About;
