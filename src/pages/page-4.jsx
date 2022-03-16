import React from 'react';
import ServicesTab from '../components/services';

const  Page4 = () =>  {

  const Content = 
  {

      title: 'Serviços',
      comment: 'Conheça nossos serviços',
      text: "<p>O <strong>Grupo Santa Rosa</strong> vem ao longo destes anos adaptando e qualificando os seus serviços.<br>"
        +"Hoje atendemos instituições de ensino de excelente qualidade as quais temos como clientes:<p/>"

  }
  
  return (
    <ServicesTab content={Content}/>
    )
}

export default Page4;



