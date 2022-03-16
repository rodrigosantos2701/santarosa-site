import React, { useState } from 'react';
import styled from 'styled-components'
import { Icon, ContainerTab, Title, Text } from './styled'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BuildIcon from '@material-ui/icons/Build';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HorizontalLine from '../simpleHorizontalLine';


const Tabs = () => {

    const TabsData = [
        {

            icon: (<AirportShuttleIcon htmlColor='#336933' />),
            title: 'Frota moderna 100% assegurada',
            text: 'Veículos assegurados, higienizados, equipados com ar condicionado e portas em ambas as laterais.',
        },
        {
            icon: (<BuildIcon htmlColor='#336933' />),
            title: 'Manutenção própria, veículos e equipe reserva',
            text: 'Manutenção em oficina própria garantindo rapidez e eficiência com a disponibilização de veículos, motoristas e monitores reservas.',
        },
        {
            icon: (<VerifiedUserIcon htmlColor='#336933' />),
            title: 'Investimento continuo em Tecnologia e Seriços',
            text: 'TI totalmente integrada a estratégia de negócio proporcionando melhoria continua nos serviços.',
        }

    ]


    return (
        <ContainerTab>
            <HorizontalLine text={'Diferenciais Santa Rosa'} />
            {TabsData.map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ padding: ' 0px 20px' }}>{item.icon}</div>
                    <div>
                        <Title>{item.title}</Title>
                        <Text>{item.text}</Text>
                    </div>
                </div>
            ))}
        </ContainerTab>
    );
}


export default Tabs;
