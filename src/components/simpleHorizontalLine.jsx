import React from 'react';
import styled from 'styled-components'



const HorizontalLine = (props) => {

    const isMobile = window.screen.width < 1024

    const LineContaiber = styled.div`
        width: 90%;
        display: flex;
        flex-direction: column;
        padding: 0px 20px;
        margin-top: 20px;
        margin-bottom: 20px;

    `;

    const Line = styled.hr`
        border: 1px solid #ccc;
        width: 100%;
        display: flex;
    `;

    const TitleText = styled.text`
        font-size:22px;
    `;


    return (
        <LineContaiber>
            <TitleText>{props.text}</TitleText>
            <Line isMobile={isMobile} />
        </LineContaiber>
    );
}

export default HorizontalLine;
