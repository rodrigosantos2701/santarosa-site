import React, { useState } from 'react';
import styled from 'styled-components'
import { Container } from './styled'
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import MediaCard from './card';


const AtendenceTabs = () => {

    const CardsData = [
        {

            icon: (<FlipCameraAndroidIcon htmlColor='#336933' />),
            title: 'Assuntos Operacionais',
            text: "Horário de saída/chegada, informações gerais sobre o transporte.<br> <a href='mailto:contato@santarosatransporte.com.br'>contato@santarosatransporte.com.br</a>",
        },
        {
            icon: (<AttachMoneyIcon htmlColor='#336933' />),
            title: 'Financeiro',
            text: "Solicitar 2a via de boleto.<br> <a href='mailto:financeiro@santarosatransporte.com.br'>financeiro@santarosatransporte.com.br</a>",
        },
        {
            icon: (<PeopleIcon htmlColor='#336933' />),
            title: 'Assuntos Gerais',
            text: 'Dúvidas sobre tarifas e demais serviços ou solicitações (dias úteis) <br> Escritório: 21 3262-7672 | 21 99981-9457 | 21 99997-2771',
        }

    ]


    return (
            <MediaCard cards={CardsData}/>
    );
}


export default AtendenceTabs;
