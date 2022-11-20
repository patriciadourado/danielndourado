import React from 'react';
import './Intro.css';
import { BoxEdge, BoxImg, Button, IntroBox, IntroImg, Parag, Scroll, Shade, Title } from './styles';

import { Link } from 'react-scroll';

import aboutImg from '../../assets/Internship.jpeg';

function Intro(){
    return(
        <>
            <IntroBox id='home'>
                <BoxImg>
                    <IntroImg src={aboutImg}  alt=""/>
                </BoxImg>
                <BoxEdge>
                    <Title>Daniel Nunes</Title>
                    <Parag>
                        Bem vindo ao meu site, acompanhe meus serviços, os trabalhos que desenvolvo e aqui tentarei dispor de informações 
                        atualizadas a respeito das últimas novidades e descobertas da indústria farmacêutica.
                    </Parag>
                    <Scroll>
                        <Link to='about' smooth={true}><Button>Mais sobre mim</Button></Link>
                    </Scroll>
                </BoxEdge>
            </IntroBox>
            <Shade/>
        </>
    );
}

export default Intro;