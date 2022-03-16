import React from "react";
import styled from "styled-components";
import HorizontalLine from "../simpleHorizontalLine";
import AtendenceTabs from "./atendenceTab";
import { Container, ContainerSimples } from "./styled";


export const Atendence = () => {

    const isMobile = window.screen.width < 1024

    return (
        <Container isMobile={isMobile}>
            <HorizontalLine text={'Atendimento'} />
            <AtendenceTabs />
        </Container>
    )
}

export default Atendence;