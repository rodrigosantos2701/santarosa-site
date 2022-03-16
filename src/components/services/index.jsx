import React from 'react';
import styled from 'styled-components';
import { Section, ContainerServices, TitleServices, TitleCommentServices } from './styled'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Service from './service';
import LogoEscolaParque from '../../images/EscolaParque.jpeg';
import LogoCSI from '../../images/csi.png';
import Contract from '../../images/Contrato-Escolas-2020.pdf'



const ServicesTab = (props) => {

    const EscolaParque =
    {

        title: 'Expresso Escola Parque',
        comment: '<p><strong>Linhas exclusivas </strong>para transporte dos alunos da Escola Parque das unidades Barra e Gávea, passando pela Lagoa, Orla, Jardim Botânico e Condomínios Península e Pedra de Itaúna, localizados na Barra da Tijuca.</p>',
        icon: `${LogoEscolaParque}`,
        text: "<p>Um transporte expresso, racional e barato, <strong>disponibilizando linhas exclusivas </strong> cujos itinerários são as ruas principais diretas para a escola, contemplando os bairros de maior densidade de alunos onde os pontos de parada sejam comuns.<p/>"
            + "<p><h2>Benefícios</h2><p/>"
            + "<p> - menos tempo no transporte até a escola;</p>"
            + "<p> - os pais ganham tempo e conforto no dia a dia pois podem optar pela utilização cotidiana ou intermitente do serviço;</p>"
            + "<p> - os pais levam seu filho ao ponto do ônibus mais próximo não tendo que pegar trânsito na entrada e saída da escola;</p>"
            + "<p> - você pode optar por ter o serviço à sua disposição como uma solução nos dias em que não possa leva-lo;</p>"
            + "<p> - opção de transporte bem mais em conta.</p>"

    }

    const EscolaCSI =
    {

        title: 'Expresso Colégio Santo Inácio',
        comment: '<p><strong>Linhas exclusivas </strong>para transporte dos alunos do Colégio Santo Inácio.</p>',
        icon: `${LogoCSI}`,
        text: "<p>Um transporte expresso, racional e barato, <strong>disponibilizando linhas exclusivas</strong> cujos itinerários são as ruas principais diretas para a escola, contemplando os bairros de maior densidade de alunos onde os pontos de parada sejam comuns.<p/>"
            + "<p><h2>Benefícios</h2><p/>"
            + "<p> - menos tempo no transporte até a escola;</p>"
            + "<p> - os pais ganham tempo e conforto no dia a dia pois podem optar pela utilização cotidiana ou intermitente do serviço;</p>"
            + "<p> - os pais levam seu filho ao ponto do ônibus mais próximo não tendo que pegar trânsito na entrada e saída da escola;</p>"
            + "<p> - você pode optar por ter o serviço à sua disposição como uma solução nos dias em que não possa leva-lo;</p>"
            + "<p> - opção de transporte bem mais em conta.</p>",
        values: [
            {
                local: 'Leblon e Gávea',
                price: '12 X R$ 490,00'
            },
            {
                local: 'Ipanema, Lagoa e Jardim Botânico',
                price: '12 X R$ 450,00'
            },
            {
                local: 'Humaitá e Botafogo',
                price: '12 X R$ 320,00'
            },

        ],
        contract: `${Contract}`,

    }


    const { content } = props

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <>
            <Section>
                <ContainerServices>
                    <TitleServices>{content.title}</TitleServices>
                    <TitleCommentServices>{content.comment}</TitleCommentServices>
                </ContainerServices>
            </Section>
            <ContainerServices style={{ padding: '20px', display: 'contents', flexDirection: 'column', alignItems: 'center', width: '80%'}}>
                <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} style={{marginLeft: '10%'}} >
                    <Tab label="Expresso Parque" />
                    <Tab label="Expresso Santo Inácio" />
                </Tabs>
                {value === 0 && <Service content={EscolaParque} ></Service>}
                {value === 1 && <Service content={EscolaCSI} ></Service>}
            </ContainerServices>
        </>

    )
}

export default ServicesTab;
