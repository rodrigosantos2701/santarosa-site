import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Section, TitleBigText, TitleComment, ContainerBigText, TextBigText, ButtonWhasApp } from './styled';
import HorizontalLine from '../simpleHorizontalLine'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from '@material-ui/core/IconButton';


const BigTextPages = (props) => {
    const [isMobile, setIsMobile] = useState('row')

    const screen = window.screen.width < 1024

    useEffect(() => {
        if (screen === true)
        setIsMobile('column')
    }, [])



    const { content } = props
    return (
        <div>
            <Section>
                <ContainerBigText>
                    <TitleBigText>{content.title}</TitleBigText>
                    <TitleComment>{content.comment}</TitleComment>
                </ContainerBigText>
            </Section>
            <ContainerBigText>
                <HorizontalLine text={content.title}></HorizontalLine>
                <TextBigText dangerouslySetInnerHTML={{ __html: content.text }}></TextBigText>
            </ContainerBigText>
            {content.whatsApp ?
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: isMobile }}>
                    <ButtonWhasApp>
                        <a href='https://whatsform.com/G9qhD2' target={'blank'}>
                            <WhatsAppIcon style={{ fontSize: '40', color: '#fff', padding: '5px' }} />
                        </a>
                    </ButtonWhasApp>
                    <img src={content.whatsApp.qr} alt='qrcode' style={{ width: '300px' }} />
                </div>

                : ''}
        </div>
    )
}
export default BigTextPages