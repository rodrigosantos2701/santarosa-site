import React from "react";
import BigTextPages from "../components/BigTextPages";

const Page3 = () => {


  const Content = 
    {

        title: 'Escolas',
        comment: 'Conheça quem atendemos',
        text: "<p>O <strong>Grupo Santa Rosa</strong> vem ao longo destes anos adaptando e qualificando os seus serviços.<br>"
          +"Hoje atendemos instituições de ensino de excelente qualidade as quais temos como clientes:<p/>"
          +"<p>Escola Parque – Unidade Gávea e Barra</p>"
          +"<p>Escola Suíço-Brasileira</p>"
          +"<p>Escola Americana do Rio de Janeiro – Unidade Gávea</p>"
          +"<p>Colégio Santo Inácio</p>"
          +"<p>Escola SAP</p>"
          +"<p>No trajeto diário, contamos com profissionais treinados e capacitados, além de uma frota moderna e bem equipada.</p>"
    }


  return (
    <BigTextPages content={Content}/>
    )
}

export default Page3;
