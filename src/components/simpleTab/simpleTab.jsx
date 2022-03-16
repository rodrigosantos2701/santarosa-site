import React from 'react';
import styled from 'styled-components'
import Image from '../../images/img-diferenciais-02.jpeg'
import HorizontalLine from '../simpleHorizontalLine';
import { Img, Container, ContainerSimpleTab } from './styled'
import Tabs from './tabs'



const ImageTab = () => {

    const isMobile = window.screen.width < 1024


    return (
        <Container mobile={isMobile}>
            <ContainerSimpleTab>
                <Img src={Image} alt={'image'} mobile={isMobile} />
            </ContainerSimpleTab>
            <ContainerSimpleTab mobile={isMobile}>
                <Tabs />
            </ContainerSimpleTab>
        </Container>
    );
}

export default ImageTab;
