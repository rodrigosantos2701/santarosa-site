import React from 'react';
import styled from 'styled-components'

export const Section = styled.section`
  padding: 1em;
  background: #336933;
  width: 100vw;
  color: #fff;
`

export const ContainerBigText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1% 5%;
`;

export const TitleBigText = styled.text`
    font-size: 36px;
`;

export const TitleComment = styled.text`
    font-size: 14px;
`;

export const TextBigText = styled.div`
    font-size: 14px;
    color: #666666;
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-self: center;
    width: 80%;
`;

export const ButtonWhasApp = styled.button`
    background-color: #a4c639;
    width: 100px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 12px;
    :hover{
        opacity: 0.6;
    }
    `;