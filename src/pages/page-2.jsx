import React from "react";
import BigTextPages from "../components/BigTextPages";

const Page2 = () => {


  const Content = 
    {

        title: 'A Empresa',
        comment: 'Conheça o Grupo Santa Rosa',
        text: "<p>Empresa especializada em transporte de escolares, ocupando uma posição de líder e referência no segmento dentro do estado do Rio de Janeiro."
              +"Possui sede (garagem) e oficina (manutenção) própria. Conta com mais de 50 colaboradores em seu quadro de funcionários e uma frota com mais de 30 veículos."  
              +"É conhecida no mercado por ter soluções logísticas, facilitando a atividade da Instituição para qual trabalha," 
              +"bem como o dia a dia dos pais neste mundo globalizado dos dias de hoje.<p/>"
              
              +"<p><strong>UMA EMPRESA DE HISTÓRIA E CONSOLIDAÇÃO</strong></p>"

              +"<p>A <strong>Santa Rosa</strong> foi criada em 1969.</p>"

              +"<p>Seus donos, auxiliados por seus diretores, até os dias de hoje presidem e direcionam as atividades da empresa de maneira cotidiana." 
              +"Hoje temos o orgulho de poder transportar os filhos de quem um dia já foi transportado por nós.</p>"

              +"<p>Os anos de experiência serviram para aperfeiçoar ainda mais os serviços prestados, os quais se pautam pelos seguintes pilares:"
              +"segurança, confiança, carinho, pontualidade, pessoalidade, treinamento e logística.</p>"

              +"<p>De maneira pioneira, contamos com excelente infra-estrutura que faz refletir exatamente na qualidade da prestação do serviço.</p>"
              +"<p>Hoje, nossa administração é moderna, com setores bem definidos: Direção, operacional, financeiro, tecnologia da informação,"
              +"oficina mecânica, dep. pessoal etc e a recém implantada área de Tecnologia de Informação 100% integrada com a estratégia de negócios da empresa.</p>"
              
              +"<p>Nossa oficina possui profissionais especializados em ônibus, micro-ônibus, vans e afins."
              +"Nossa garagem é situada a 5 minutos da Zona Sul, na Praça da Bandeira, local de fácil acesso para a prestação dos serviços"
              +"e até eventuais reuniões em nosso escritório-sede. Temos também um ponto de apoio logístico na Barra da Tijuca,"
              +"onde fica parte de nossa frota, no objetivo de facilitar a nossa atividade por essa região.</p>"

              +"<p>Contamos com uma equipe de motoristas e acompanhantes da mais alta confiança. Todos criteriosamente selecionados,"
              +"treinados e especializados para o atendimento de escolares.</p>"
              
              +"<p>Temos a real noção de que prestamos esse serviço pelo AMOR que temos na atividade.</p>"
              +"<p><strong>Para nós, é uma verdadeira honra transportar o filho de um cliente, pois sabemos que este é o seu maior valor!</strong></p>"
    }


  return (
    <BigTextPages content={Content}/>
    )
}

export default Page2;
