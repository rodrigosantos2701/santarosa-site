import React from 'react';
import styled from 'styled-components'
import { Container, Section } from './styled'
import Typography from "@material-ui/core/Typography";
import  csi from "../../images/csi.png"
import  earj from "../../images/earj.png"
import  pa from "../../images/EscolaParque.jpeg"
import co from  "../../images/co.svg"
import li from "../../images/Liceu.png"
import csa from "../../images/logo-CSA.svg"



const isMobile = window.screen.width < 1024



const Footer = () => {

  const CopyRight = () => {
    return (
      <h5 style={{color: '#fff', justifyContent: 'center', display:'flex', opacity: '0.6'}}>
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </h5>
    );
  }


  return (

    <>
    {isMobile?
      <div style={{margin: '0 5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={csi} style={{maxWidth: '100%', marginBottom: '5px'}}/>
      <img src={earj} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      <img src={pa} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      <img src={co} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      <img src={li} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      <img src={csa} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      </div>
:
      <div style={{margin: '0% 0% 2% 10%'}}>
      <img src={csi} style={{maxWidth: '20%', marginRight: '10px'}}/>
      <img src={earj} style={{maxWidth: '10%', marginRight: '5px'}}/>
      <img src={pa} style={{maxWidth: '10%', marginRight: '5px'}}/>
      <img src={co} style={{maxWidth: '10%', marginRight: '5px'}}/>
      <img src={li} style={{maxWidth: '20%', marginRight: '5px'}}/>
      <img src={csa} style={{maxWidth: '10%', marginRight: '5px'}}/>
</div>


}
      <Section color='#336933'>
        <div style={{ display: 'flex', justifyContent: 'center',textAlign: 'center', color: '#fff', width: '90%' }}>
          Localização
          Rua Ceara, 336 - Praça da Bandeira Rio de Janeiro - RJ - Brasil CEP: 20270-160 Office: 21 3150-3135
        </div>
        <CopyRight />
      </Section>

    </>
  );
}

export default Footer;
