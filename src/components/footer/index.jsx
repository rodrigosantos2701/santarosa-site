import React from 'react';
import styled from 'styled-components'
import { Container, Section } from './styled'
import Typography from "@material-ui/core/Typography";



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
