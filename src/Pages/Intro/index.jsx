import React from 'react';
import './Intro.css';
import { BoxContent, BoxEdge, BoxImg, Button, IntroBox, IntroImg, Parag, Scroll, Shade, Title } from './styles';

import { Link } from 'react-scroll';

import aboutImg from '../../assets/about.JPG';

function Intro(){
    return(
        <>
            <IntroBox>
                <BoxContent>
                    <BoxEdge>
                        <Title>Daniel Nunes</Title>
                        <Parag>
                            Bem vindo ao meu site, acompanhe meus serviços, os trabalhos que desenvolvo e aqui tentarei dispor de informações 
                            atualizadas a respeito das últimas novidades e descobertas da farmácia.
                        </Parag>
                        <Scroll>
                            <Link to='about' smooth={true}><Button>Mais sobre mim</Button></Link>
                        </Scroll>
                    </BoxEdge>
                </BoxContent>
                <BoxImg>
                    <IntroImg src={aboutImg}  alt=""/>
                </BoxImg>
            </IntroBox>
            <Shade/>
        </>
    );
}

export default Intro;