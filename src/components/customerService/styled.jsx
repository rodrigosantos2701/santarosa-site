import React from "react";
import styled from "styled-components";


export const Container = styled.div`
  display: 'flex';
  flex-direction: 'column';
  padding: 0 10%;
  width: ${props => props.mobile? '100%' : '50%'};
  align-items: center;
  justify-content: space-between;
  width: 80%;

`
export const ContainerSimples = styled.div`
  display: flex;
  flex-direction: 'column';
  align-items: center;
  justify-content: center;
  min-width: 80%;

`
export const CardTab = styled.div`
      display: 'flex';
      justify-content: 'center';
      align-items: 'center';
      padding: 10px;
  svg {
      padding: 10px;
      font-size: 3.5rem;
  }
`;



