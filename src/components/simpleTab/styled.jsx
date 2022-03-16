import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.mobile? '' : 'flex'};
  padding: ${props => props.mobile? '0%' : '0% 15%'};
  width: ${props => props.mobile? '100%' : '50%'};
  align-items: center;
  justify-content: space-between;

`
export const Img = styled.img`
  width: ${props => props.mobile? '75%' : '75%'};
  height: ${props => props.mobile? '200px' : '250px'};
`

export const ContainerSimpleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  padding: 5% 0;

`

export const ContainerTab = styled.div`
  display:  flex;
  flex-direction: column;
  padding: 10px;
  width: 80%;
  align-items: center;
  justify-content: space-between;

`

export const Icon = styled.img`
  padding: 5%;
  width: 30px;
  height: 30px;
`

export const Title = styled.text`
font-size: 18px;
color: #333333;
text-align: center;
display: flex;
width: 100%;
`

export const Text = styled.text`
font-size: 14px;
color: #666666;
text-align: center;
display: flex;
margin: 5px 0px 25px 0px;
`