import React from "react";
import BigTextPages from "../components/BigTextPages";
import Atendence from "../components/customerService";
import QrCode from '../images/qr.png'

const Page6 = () => {


  const Content =
  {

    title: 'Atendimento',
    comment: 'Envie sua dúvida, crítica ou sugestão!',
    text: "<p>E-mail: <a href='mailto:contato@santarosatransporte.com.br'>contato@santarosatransporte.com.br</a><p/>"
      + "Escritório: 21 3150-3135 "
      + "Celular:  21 99981-6384 | 21 99981-9457 | 21 99997-2771"
      + "<p>Dúvidas sobre tarifas e demais serviços ou solicitações (dias úteis). </p>",
    whatsApp: 
      {
        link: '',
        qr: `${QrCode}`
      }
  }


  return (
    <>
      <BigTextPages content={Content} />
    </>
  )
}

export default Page6;
