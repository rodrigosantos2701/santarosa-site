import React from "react";
import styled from "styled-components";


export const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  padding: 5% 10%;
  width: ${props => props.mobile? '100%' : '50%'};
  align-items: center;
  justify-content: space-between;
  width: 80%;

`

export const QuestCard = styled.div`
      display: 'flex';
      flex-direction: 'row';
      justify-content: 'center';
      align-items: 'center';
      padding: 10px;
`;

