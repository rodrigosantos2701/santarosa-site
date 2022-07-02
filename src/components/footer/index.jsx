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
import es from "../../images/siss.jpeg"
import br from "../../images/br.jpeg"
import sap from "../../images/sap.jpeg"
import jap from "../../images/jap.jpeg"




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
      <img src={csi} style={{maxWidth: '85%', marginBottom: '5px', height: '70px'}}/>
      <img src={earj} style={{maxWidth: '25%', marginBottom: '5px', height: '100px'}}/>
      <img src={pa} style={{maxWidth: '50%', marginBottom: '15px', height: '70px'}}/>
      {/* <img src={co} style={{maxWidth: '25%', marginBottom: '5px'}}/>
      <img src={li} style={{maxWidth: '25%', marginBottom: '5px'}}/> */}
      {/* <img src={csa} style={{maxWidth: '25%', marginBottom: '20px', height: '100px'}}/> */}
      <img src={es} style={{maxWidth: '50%', marginBottom: '5px'}}/>
      <img src={br} style={{maxWidth: '100%', marginBottom: '5px', height: '150px'}}/>
      <img src={sap} style={{maxWidth: '50%', marginBottom: '5px', height: '100px'}}/>
      <img src={jap} style={{maxWidth: '50%', marginBottom: '5px', height: '100px'}}/>

      </div>
:
      <div style={{margin: '0% 0% 5% 5%'}}>
      <img src={csi} style={{maxWidth: '20%', marginRight: '10px', height: '70px'}}/>
      <img src={earj} style={{maxWidth: '10%', marginRight: '5px', height: '100px'}}/>
      <img src={pa} style={{maxWidth: '10%', marginRight: '5px', height: '100px'}}/>
      {/* <img src={co} style={{maxWidth: '10%', marginRight: '5px'}}/>
      <img src={li} style={{maxWidth: '20%', marginRight: '5px'}}/> */}
      {/* <img src={csa} style={{maxWidth: '10%', marginRight: '15px', height: '100px'}}/> */}
      <img src={es} style={{maxWidth: '20%', marginRight: '10px' }}/>
      <img src={br} style={{maxWidth: '20%', marginRight: '5px', height: '150px'}}/>
      <img src={sap} style={{maxWidth: '20%', marginRight: '5px', height: '100px'}}/>
      <img src={jap} style={{maxWidth: '20%', marginRight: '5px', height: '100px'}}/>



</div>


}
      <Section color='#336933'>
        <div style={{ display: 'flex', justifyContent: 'center',textAlign: 'center', color: '#fff', width: '80%', marginLeft: '5%', marginRight: '10%' }}>
          Localização
          Rua Ceara, 336 - Praça da Bandeira Rio de Janeiro - RJ - Brasil   -  Cep:20270-160 Office: 21 3150-3135
        </div>
        <CopyRight />
      </Section>

    </>
  );
}

export default Footer;
