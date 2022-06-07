import React from "react";
import styled from "styled-components";
import HorizontalLine from "../simpleHorizontalLine";
import Questions from "./question";
import { Container } from "./styled";


export const ImportantQuestions = () => {

    const DataQuestions = [
        {

            question: 'Como solicito a inclusão do meu filho no transporte?',
            answer: 'Basta preencher nosso formulário de cadastro informando a Escola, bairro e informações de contato. Nosso equipe operacional irá analisar as localidades de embarque e desembarque de seu filho e iremos entrar em contato para informar a possibilidade de inclusão em um dos nosso roteiros.',
            close: 'true'
        },
        {
            question: 'Quais os bairros atendidos?',
            answer: 'Atendemos em princípio a toda Zona Sul, Barra e Recreio. Porém estamos ampliando nossas rotas para outros bairros de acordo com a necessidade dos pais e das escolas atendidas. Preencha nosso cadastro que entraremos em contato para consolidar as informações.',
            close: 'true'
        },
        {
            question: 'Quais as escolas atendidas pelo transporte escolar?',
            answer: 'Atendemos as instituições Escola Parque (Barra e Gávea, com os serviços Expresso para a unidade Gávea), Escola Americana (Gávea), Colégio Santo Agostinho, Liceu Franco Brasileiro, e Escola Alemã (passeios), além de oferecer outros serviços de transporte para eventos, passeios e ponto a ponto entre suas unidades.',
            close: 'true'
        },
        {
            question: 'Como fazer se meu Bairro ou escola do meu filho ainda não é atendido pelo Grupo?',
            answer: 'Preencha nosso formulário de solicitação marcando em "Escola" e/ou "Bairro" que não é atendido. Nossa equipe irá analisar a viabilidade de elaborar um roteiro a partir da quantidade de solicitações. Caso já exista um grupo de alunos interessados informe no campo "Observações".',
            close: 'true'
        },
        {
            question: 'Como realizo o pagamento das mensalidades?',
            answer: '"Adotamos o Gateway de pagamentos GerenciaNet."',
            close: 'true'
        },


    ]    

    const isMobile = window.screen.width < 1024

    return (
        <Container isMobile={isMobile}>
            <HorizontalLine text={'Perguntas Frequentes'} />
            <Questions DataQuestions={DataQuestions}/>
        </Container>
    )
}

export default ImportantQuestions;