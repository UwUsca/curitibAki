import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleInfo, faClock, faMap, faTicket, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function PontoConteudo(Local){
    const textSobre = {
        width: "95%",
        height: "fit-content",  
        fontFamily: "fontTextPontos",
        fontSize: "17px",
        color: "white"
    }
    const textBlock = {
        maxWidth: "100%",
        marginBottom: "10px",
        backgroundColor: "rgb(28,28,28,0.5)",
        padding: "10px 20px 10px 20px",
        borderRadius: "15px",
    }

    switch(Local){
        case("museuoscarniemeyer"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>O Museu Oscar Niemeyer (MON), patrimônio estatal vinculado à Secretaria de Estado da Comunicação Social e da Cultura do Paraná, localizado em Curitiba (PR), abriga referenciais importantes da produção artística nacional e internacional, com mais de 9 mil obras nas áreas de artes visuais, arquitetura e design. É considerado o maior museu de arte da América Latina, com um espaço de cerca de 35 mil metros quadrados de área construída e mais de 17 mil metros quadrados de área para exposições.
                                    <br></br><br></br>
                                    Inaugurado em 22 de novembro de 2002, o projeto é de autoria do reconhecido arquiteto brasileiro que leva seu nome. Com um total de 12 salas expositivas, a cada ano são realizadas mais de 20 mostras, que juntas recebem um público superior a 360 mil visitantes.
                                    <br></br><br></br>
                                    Com uma equipe multidisciplinar, que visa aproximar e aperfeiçoar a experiência dos visitantes com as artes visuais, o MON possui os setores Educativo, Planejamento Cultural, Acervo e Conservação, Documentação e Referência, Gestão Museológica, Comunicação, Design, Jurídico e Eventos, além da área administrativa.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Terça a Domingo, das 10h às 17h30 (permanência até 18h)
                                    <br></br><br></br>
                                    Venda de ingressos e acesso às salas de exposição até 17h30
                                    <br></br><br></br>
                                    Acesso à exposição Da Vinci Experience até 17h30
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faTicket}/> INGRESSOS</h2>
                                <p>R$ 30,00 (inteira)
                                    <br></br><br></br>
                                    R$ 15,00 (meia-entrada para professores e estudantes com identificação; doadores de sangue; pessoas com deficiência; titulares da ID Jovem; portadores de câncer com documento comprovatório)
                                </p>
                        </div> 
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.842031586088!2d-49.26938724886844!3d-25.410097838251467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41fa86f6915%3A0xf5f24c5f00323bee!2sMuseu%20Oscar%20Niemeyer!5e0!3m2!1spt-BR!2sbr!4v1650573682559!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Marechal Hermes, 999 – Centro Cí́vico <br></br>
                                CEP 80530-230 – Curitiba/PR<br></br>
                                Fone: 55 41 3350-4400</p>
                        </div>
                    </div>
            )
        case("operadearame"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Ópera de Arame é um teatro brasileiro, localizado na cidade de Curitiba, capital do estado do Paraná. Seu nome deriva do estilo construtivo, feito de tubos de aço e estruturas metálicas, coberto com placas transparentes de policarbonato, lembrando a fragilidade de uma construção em arame.
                                <br></br><br></br>
                                De forma circular, a edificação é quase toda cercada por um lago artificial, de maneira que o acesso ao auditório é feito por uma passarela sobre as águas. O projeto é do arquiteto Domingos Bongestabs, professor do departamento de Arquitetura e Urbanismo da UFPR e mesmo autor do projeto da Unilivre. As estruturas metálicas tubulares, totalizando 360 toneladas de aço, e os 2.400 bancos de tela de arame foram fornecidas pela Brafer Construções Metálicas, empresa de Araucária, na Região Metropolitana de Curitiba.
                                <br></br><br></br>
                                Foi montada em apenas 75 dias e inaugurada em 18 de março de 1992. Passou por uma reforma para manutenção e melhorias na segurança, concluída em meados de 2006.
                                <br></br><br></br>
                                O auditório tinha capacidade física para 2,1 mil espectadores, mas após a reforma de 2006, limitou-se a entrada para um máximo de mil pessoas (a capacidade total é de 1.572 espectadores), visando a preservação da estrutura.
                                <br></br><br></br>
                                Nas proximidades da ópera está a Pedreira Paulo Leminski, aberta em 1990. Juntos, formam o Parque das Pedreiras.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Terça a Domingo, das 10h às 18h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faTicket}/> INGRESSOS</h2>
                                <p>R$ 15,00 (inteira)
                                    <br></br><br></br>
                                    R$ 7,50 (meia-entrada)
                                </p>
                        </div> 
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.1520391396609!2d-49.277042158462514!3d-25.3844458479361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce7682b135bf5%3A0x2e7bb1984e204490!2s%C3%93pera%20de%20Arame%20-%20Vale%20da%20M%C3%BAsica!5e0!3m2!1spt-BR!2sbr!4v1654127033786!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua João Gava, 920 - Abranches <br></br>
                                CEP 82130-010 – Curitiba/PR<br></br>
                                Fone: 55 41 99191-5412</p>
                        </div>
                    </div>
            )
        case("jardimbotanico"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O residencial Jardim Botânico se espalha pelo Jardim Botânico de Curitiba, com uma estufa tropical de 3 cúpulas, uma área arborizada com trilhas e um jardim sensorial. O time de futebol local do Paraná Clube joga no Estádio Vila Capanema. Bares descontraídos que servem lanches locais são lotados por estudantes da Universidade Federal do Paraná, enquanto restaurantes italianos e lanchonetes estão espalhados pela Av. Prefeito Omar Sabbag.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Segunda a Domingo, das 6h às 19h30
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14411.399250135797!2d-49.247017!3d-25.4432842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce500d5e96635%3A0x1a2d5ec5fddc5654!2sJardim%20Bot%C3%A2nico%20de%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1654128075332!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Engo. Ostoja Roguski – Jardim Botânico <br></br>
                                CEP 80210-390 – Curitiba/PR<br></br>
                                Fone: 55 41 3362-1800</p>
                        </div>
                    </div>
            )
        case("ruaxvdesetembro"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Rua XV de Novembro é um dos logradouros mais importantes do município de Curitiba, a capital do estado do Paraná. Foi batizada para homenagear a data da Proclamação da República. Em seu trecho turístico, entre a Avenida Luiz Xavier e a Rua Presidente Faria, cujo pavimento é exclusivamente de petit-pavè, é conhecida como "Rua das Flores". Esta intervenção a tornou primeira via pública exclusiva para pedestres do Brasil, implantada e inaugurada em 1972 na gestão do então prefeito Jaime Lerner.
                                <br></br><br></br>
                                A rua tem seu início no Centro da cidade e após o fim do "calçadão", na esquina com a Rua Presidente Faria, a rua mantém seu espaço para os carros, estendendo-se até o bairro do Alto da XV.
                                <br></br><br></br>
                                Seu calçadão é caracterizado por edifícios e sobrados centenários, com bares, lojas e restaurantes e canteiros de flores em toda a sua extensão. Um dos seus prédios mais notáveis é o Palácio Avenida e ao final do calçadão esta localizado uma das principais entidades do estado: a Associação Comercial do Paraná.
                                <br></br><br></br>
                                A Rua XV de Novemrbo é um patrimônio tombada como Paisagem por lei estadual do Paraná desde 1974.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Aberto 24 horas
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7206.252391215756!2d-49.27514177483141!3d-25.434044185146103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5b6a274e113%3A0x641d47f64b6fddbb!2sCalcad%C3%A3o%20da%20XV!5e0!3m2!1spt-BR!2sbr!4v1654128988846!5m2!1spt-BR!2sbr"></iframe>                            
                            <p>Rua Voluntários da Pátria, 347-323 – Centro <br></br>
                                CEP 82590-300 – Curitiba/PR<br></br>
                            </p>
                        </div>
                    </div>
            )
        case("mercadomunicipal"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>Fundado em 02 de agosto de 1958, o Mercado Municipal  de Curitiba é o principal e mais tradicional endereço para compras de Curitiba.
                                <br></br><br></br>
                                Nas bancas de hortigranjeiros,  nas lojas de delicatessens e setor orgânico, o consumidor encontra produtos como: bebidas, queijos e vinhos de diversas procedências, ervas medicinais, temperos e especiarias, iguarias, conservas, pescados, embutidos, carnes exóticas e com cortes especiais.
                                Além também de produtos de decoração, utensílios domésticos, produtos de limpeza, armarinhos, presentes, entre outros.
                                <br></br><br></br>
                                Pode-se curtir momentos agradáveis nos restaurantes étnicos na praça da alimentação, onde é ponto de encontro dos curitibanos de diversas gerações e ainda, participar de eventos realizados regularmente dentro do Mercado.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Terça à sábado: 8h às 18h 
                                    <br></br><br></br>
                                    Domingo: 8h às 13h (restaurantes até 15h)
                                    <br></br><br></br>
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1027571265686!2d-49.256979099999995!3d-25.4348279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce444ea512a41%3A0x593e724cbecca7cb!2sAv.%20Sete%20de%20Setembro%2C%201865%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080060-070!5e0!3m2!1spt-BR!2sbr!4v1654129232548!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. Sete de Setembro, 1865 – Batel <br></br>
                                CEP 80060-070 – Curitiba/PR<br></br>
                                Fone: 55 41 3363-3764</p>
                        </div>
                    </div>
            )
        case("passeiopublico"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Passeio Público é o parque mais central e o primeiro de Curitiba. Inaugurado em 1886 com cerca de 70 mil m² de mata natural, nas margens do rio Belém. Na época sua iluminação era feita por lampiões alimentados por azeite de peixe.
                                <br></br><br></br>
                                No século 19, foi por algum tempo o Jardim Botânico de Curitiba. Foi, também, o primeiro zoológico e, até hoje, possui alguns animais em cativeiro, além de um aquário.
                                <br></br><br></br>
                                O Passeio Público é um santuário ecológico em pleno centro de Curitiba. Tem lago com ilhas, uma gruta, ponte pênsil, palco flutuante e é cortado pela malha cicloviária da cidade.
                                <br></br><br></br>
                                Localizado entre as ruas Presidente Carlos Cavalcante,  Presidente Faria e av. João Gualberto, no Centro.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Terça à Domingo: 6h às 20h 
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.4074966734775!2d-49.27008638498598!3d-25.424636533790913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41476b2bc55%3A0x9e583478722cb1de!2sPasseio%20P%C3%BAblico!5e0!3m2!1spt-BR!2sbr!4v1654129585342!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Presidente Calos Cavalcanti – Centro <br></br>
                                CEP 80030-010 – Curitiba/PR<br></br>
                                Fone: 55 41 3350-9940</p>
                        </div>
                    </div>
            )
        case("memorialdecuritiba"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Memorial de Curitiba é um espaço moderno, concebido para abrigar atividades culturais múltiplas, incluindo exposições e apresentações cênicas e musicais, e preservar e expor a história da cidade. O espaço também é utilizado para seminários, palestras, oficinas, congressos, lançamentos de livros, entre outras atividades. Suas instalações compreendem salas de exposições (Salão Paranaguá, Salão Paraná e Salão Brasil), um auditório de 144 lugares (Teatro Londrina), o Mirante do Marumbi e uma praça interna para grandes eventos (Praça do Iguaçu).</p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Terça à Sexta: 9h às 12h e 13h às 18h
                                <br></br><br></br>
                                Sábado, Domingo e Feriado: 9h às 15h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3155115091104!2d-49.274903884985804!3d-25.42771318378944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41269436a29%3A0x97b2946b6242ac49!2sMemorial%20de%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1654129997103!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Dr. Claudino dos Santos, 79 – São Francisco <br></br>
                                CEP 80020-170 – Curitiba/PR<br></br>
                                Fone: 55 41 3321-3313</p>
                        </div>
                    </div>
            )
        case("centrohistorico"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Conjunto das mais antigas edificações da cidade, delimitado por decreto municipal de 1971. Entre essas construções estão a Casa Romário Martins, do século XVIII e a Igreja da Ordem Terceira de São Francisco, de 1737, além dos exemplares arquitetônicos de inspiração alemã, datados da segunda metade do século XIX.
                                <br></br><br></br>
                                Nas manhãs de domingo, as velhas pedras do Largo da Ordem e o calçadão de acesso à Praça Garibaldi, com a Igreja do Rosário, o Relógio das Flores, a Fonte da Memória e a Società Giuseppe Garibaldi, formam o cenário da Feira de Artesanato, animado ponto de encontro com música ao vivo.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Aberto 24 horas
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d900.8267593640647!2d-49.2724789!3d-25.4279966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce412451404e7%3A0x1fb057edfa6cad72!2sCentro%20Hist%C3%B3rico%20de%20Curitiba%20Largo%20da%20Ordem!5e0!3m2!1spt-BR!2sbr!4v1654130275785!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua José Bonifácio, 33 – Centro <br></br>
                                CEP 82510-070 – Curitiba/PR<br></br>
                                Fone: 55 41 3350-8484</p>
                        </div>
                    </div>
            )


        case("parquesaolourenco"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O São Lourenço, que desde 1972 é sinônimo de cultura, criação e natureza, passou a ter mais um equipamento público municipal que confirma sua vocação: o Memorial Paranista, a partir de 2020. Nele foi instalado o Jardim das Esculturas, com 15 peças gigantes, em bronze, de João Turin, mestre neste ofício e um dos fundadores da Escola de Belas Artes do Paraná.
                                <br></br><br></br>
                                No parque o verde se distribui entre remanescentes de Floresta com Araucária, canela, pau-de-bugre, pitangueira e outras espécies que servem de abrigo para preás, gambás, roedores silvestres, além de pica-paus, corujas, gaviões.
                                <br></br><br></br>
                                Seus equipamentos para atividades físicas ao ar livre incluem pista de caminhada, canchas de futebol e de vôlei. Os playgrounds infantis dispõem de brinquedos inclusivos – que podem ser desfrutados com segurança por crianças com deficiência ou não. A ciclovia que circunda o lago serve como ponto de interligação a quem faz o percurso entre o Parque da Barreirinha, ao norte, e o Bosque João Paulo II, no centro da cidade.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Todos os dias: 6h às 20h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.6894189672994!2d-49.26912184886897!3d-25.38172353712522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6c211eec2b5%3A0xe017a165c1da729e!2zUGFycXVlIFPDo28gTG91cmVuw6dv!5e0!3m2!1spt-BR!2sbr!4v1654804293615!5m2!1spt-BR!2sbr"></iframe>
                            <p>R. José Brusamolin – São Lourenço <br></br>
                                CEP 82200-000 – Curitiba/PR<br></br>
                                Fone: 55 41 3255-3824</p>
                        </div>
                    </div>
            )
        case("parquebarigui"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Barigui, maior parque de Curitiba, ocupa 140 hectares do território de quatro bairros e fica aberto ininterruptamente, todos os dias do ano. É imbatível na preferência dos curitibanos – mesmo em dias de garoa e neblina - para desfrutar da natureza, fazer passeios, e principalmente para atividades esportivas.
<br></br><br></br>
Tanta regularidade na frequência explica-se porque o parque tem uma localização próxima ao centro, um relevo interessante cercado de bela paisagem (com árvores, flores, lago, cidade ao fundo, que vão se revezando em todo seu circuito de mais de 3 km), e ainda porque disponibiliza os mais diferentes equipamentos aos seus usuários.  
<br></br><br></br>
O lugar, uma antiga área de terras (sesmaria) pertencente ao desbravador Mateus Martins Leme, foi transformado em parque, em 1972, pelo então prefeito Jaime Lerner. O nome Barigui tem origem indígena e significa "rio do fruto espinhoso", em alusão às pinhas das araucárias nativas, ainda encontradas por ali.
<br></br><br></br>
Seus 140 hectares abrigam três bosques, com vegetação constituída por capões de floresta primária nativa e por florestas secundárias, presentes a erva-mate, canelas, aroeiras, bromélias e orquídeas, que servem de refúgio para animais (como preás e gambás) e ajudam a regular a qualidade do ar.
<br></br><br></br>
O imenso lago, com 230.000m2, ajuda a conter as enchentes do Rio Barigui, tão comuns antigamente, e é por onde deslizam patinhos e marrecos, e as garças-brancas buscam alimento em suas margens, até que volte a ser período de migração.  
                               </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Aberto 24 horas
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142.6201953496675!2d-49.307009168213426!3d-25.423439484657152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3df88cb5fa7%3A0x64ed421a45cf1e53!2sParque%20Barigui!5e0!3m2!1spt-BR!2sbr!4v1655492882647!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. Cândido Hartmann, S/N - Bigorrilho<br></br>
                             CEP: 82025-160 - Curitiba - PR <br></br>
                             Fone: 55 41 3350-9891
                             </p>
                        </div>
                    </div>
            )
        case("parquetingui"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Parque Tingui reúne em sua área a Praça Brasil 500 Anos, que celebra a chegada dos portugueses ao país, e o Memorial Ucraniano, em homenagem aos imigrantes desta que é uma etnia com marcante presença em Curitiba.   
<br></br><br></br>
A Praça Brasil 500 Anos, inaugurada em 19 de abril de 2000, em comemoração aos 500 anos do descobrimento do Brasil, foi revitalizada em 2021. Com o formato de um disco de 15 metros de diâmetro e a rosa dos ventos, o espaço destaca a importância dos antigos descobridores, exemplos de conhecimento, ousadia, coragem e espírito empreendedor.
<br></br><br></br>
Às véspera dos 199 anos da Independência do Brasil, em 7 setembro, a praça ganhou novo paisagismo, reforma das estruturas, recuperação do seu calçamento e do alto mastro para hasteamento da bandeira. Uma estátua de Tindiquera, cacique da tribo tingui – que deu nome ao parque – deixou uma das entradas e foi instalada na praça, passando a representar o povo que primeiro habitou não só a região de Curitiba, mas o território nacional.
                                    </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Segunda à domingo: 6h às 20h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.073885254126!2d-49.30934043470185!3d-25.402337286034026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce11863885b9b%3A0x106542d72278f3e!2sParque%20Municipal%20Tingui%20-%20Memorial%20Ucraniano!5e0!3m2!1spt-BR!2sbr!4v1655493072470!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. Fredolin Wolf, 1870 - Pilarzinho<br></br>
                                CEP 82030-600 – Curitiba/PR<br></br>
                                Fone: 55 41 3338-1442</p>
                        </div>
                    </div>
            )
        case("bosquealemao"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Bosque Alemão, antiga chácara da família Schaffer com 38 mil m² de área, foi inaugurado em 1996 na cidade de Curitiba, capital do estado brasileiro do Paraná. Localiza-se no bairro Vista Alegre e é formado por mata nativa densa.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Todos os dias: 8h às 20h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0104039360062!2d-49.290310048868506!3d-25.404462338027642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb07d9d589c5%3A0x60ee41a3bc9704d0!2sBosque%20Alem%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1655493297242!5m2!1spt-BR!2sbr"></iframe>
                            <p>R. Nicolo Paganini, s/n - Pilarzinho<br></br>
                                CEP 81720-300 – Curitiba/PR<br></br>
                                Fone: 55 41 3568-1087</p>
                        </div>
                    </div>
            )
        case("bosquepapajoaopauloii"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Também chamado de Bosque do Papa, pelos curitibanos, a área integra beleza e tradição, em harmonia com a natureza, e representa o agradecimento da cidade à presença do imigrante polonês e todo o seu significado, a partir de 1871.
<br></br><br></br>
Em comemoração aos 150 anos da chegada das primeiras famílias a Curitiba, o Memorial da Imigração Polonesa, formado por casas de troncos de pinheiros encaixados, típicos daquele país, e dispostas em forma de aldeia, tem novas atrações. As casas, construídas por vota de 1878, foram remontadas naquele espaço, quando da implantação do Bosque.
<br></br><br></br>
Nelas os visitantes encontram (desde 10 de outubro de 2021) o testemunho da história que teve início com 34 famílias, vindas da região da Silésia, no bairro Pilarzinho. Usos e costumes estão registrados em fotografias, documentos e objetos que integram os acervos do Museu Paranaense e do Arquivo Público do Estado do Paraná. A exposição, que vai até dezembro de 2022, conta com uma coleção de trajes típicos, especialmente cedida por particular. Os oito manequins têm belas vestimentas coloridas, que representam diferentes regiões da Polônia. O Memorial é coordenado pela Fundação Cultural de Curitiba - FCC e a Associação Cultural Brasil-Polônia - BRASPOL. 
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Todos os dias: 6h às 18h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14415.522069980572!2d-49.2702598!3d-25.4088098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86c500c629ec8e8e!2sBosque%20Papa%20Jo%C3%A3o%20Paulo%20II!5e0!3m2!1spt-BR!2sbr!4v1655493424149!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Wellington de Oliveira Viana, 33 - Centro Cívico <br></br>
                                CEP 80540-310 – Curitiba/PR<br></br>
                                Fone: 55 41 3313-7194</p>
                        </div>
                    </div>
            )

        case("shoppingpalladium"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O shopping conta com mais de 350 lojas, sendo 20 lojas-âncora, cerca de 80 quiosques, um charmoso Boulevard com 8 restaurantes – cada um deles com capacidade para acolher 150 pessoas – mais 4 restaurantes e outras 26 opções de fast-food para atender a todos os gostos, numa imensa Praça de Alimentação, com mais de 1.200 lugares sentados.
                                <br></br><br></br>
Tudo foi minuciosamente pensado para garantir que os mais de 1,5 milhão de consumidores que passam por aqui todo mês, sintam-se como se estivessem em casa, com a maior variedade em opções de compras, alimentação, serviços e lazer da cidade. As lojas-âncora do Shopping Palladium Curitiba são 20 grandes marcas, que completam o maior e melhor mix de lojas de Curitiba.
<br></br><br></br>
O empreendimento tem uma área construída de 154.600 m², conta com 18 escadas rolantes, 13 elevadores e três amplos pisos de estacionamento (além de área descoberta) para 20 mil veículos/dia. O Shopping possui um fluxo de 1,5 milhão de consumidores mês. No entorno do shopping circulam, por dia, mais de 80 mil veículos, além de 4.200 ônibus/dia.
<br></br><br></br>
Imagine um espaço em Curitiba, onde você possa encontrar tudo o que você desejar em compras, lazer e serviços. Não precisa imaginar mais! O Shopping Palladium Curitiba é um shopping multiuso, conta com uma estrutura ampla, moderna e inteligente, pensada e construída para você.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas: <br></br>
                                Segunda à Sexta: 11h às 23h<br></br>
                                Sábado: 10h às 22h<br></br>
                                Domingo: 14h às 20h<br></br>
                                <br></br><br></br>
                                Alimentação: <br></br>
                                Segunda à Sexta: 11h às 23h<br></br>
                                Sábado: 10h às 23h<br></br>
                                Domingo: 11h às 22h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8179709670917!2d-49.2909558!3d-25.477752999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35db9b9dc5b%3A0xb729c0f7d53a01ac!2sAv.%20Pres.%20Kennedy%2C%204121%20-%20Port%C3%A3o%2C%20Curitiba%20-%20PR%2C%2080610-270!5e0!3m2!1spt-BR!2sbr!4v1655493717307!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. Pres. Kennedy, 4121 - Portão<br></br>
                                 CEP 80610-270 – Curitiba/PR<br></br>
                                Fone: 55 41 3212-3500</p>
                        </div>
                    </div>
            )
        case("shoppingcuritiba"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Inaugurado em 25 de setembro de 1996, localizado no antigo imóvel militar do século XIX, o Shopping Curitiba é um dos shoppings mais queridos pelo público curitibano. Em 2007, um grande processo de revitalização se iniciou para deixá-lo ainda melhor. O Curitiba é o shopping mais prático, rápido e bem organizado da cidade, que oferece tudo o que você precisa com a satisfação de ter feito as escolhas certas em um ambiente agradável, onde você sempre se sente à vontade. Cerca de 9 milhões de pessoas passam pelo Shopping Curitiba no ano, 750 mil ao mês, o equivalente a metade da população de Curitiba! Seja muito bem-vindo!                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas: <br></br>
                                Segunda a Sábado: 10h às 22h<br></br>
                                Domingo: 14h às 20h
                                <br></br><br></br>
                                Alimentação: <br></br>
                                Segunda a Domingo: 10h às 22h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14411.67384912826!2d-49.2773706!3d-25.4409894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89a919fef0a7fb10!2sShopping%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1655493922651!5m2!1spt-BR!2sbr"></iframe>
                            <p>R. Brg. Franco, 2300 - Centro<br></br>
                                CEP 80250-030 – Curitiba/PR<br></br>
                                Fone: 55 41 3026-1000</p>
                        </div>
                    </div>
            )
        case("shoppingestacao"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                O Shopping Estação foi inaugurado em 14 de novembro de 1997 em prédio anexo ao Museu Ferroviário, que reúne a memória sobre a antiga estação ferroviária de Curitiba, atraindo o público com uma extensa lista de atrações para o curitibano. Localizado em região central e cercado por grandes avenidas, o empreendimento tornou-se referência na cidade.
<br></br>Passou pela sua primeira expansão e revitalização em 2002, agregando operações de peso como Renner, Riachuelo, Americanas e Marisa. Em 2007 foi adquirido pelo grupo BRMALLS, maior empresa de shopping centers do país, passando por um processo constante de qualificação. Atualmente opera como centro de compras sem perder sua herança de lazer, apresentando diversas opções para o entretenimento em família e amigos.                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas: <br></br>
                                Segunda a Sábado: 10h às 22h<br></br>
                                Domingo: 14h às 20h
                                <br></br><br></br>
                                Alimentação: <br></br>
                                Segunda a Quinta: 10h às 22h
                                Sexta e Sábado: 10h às 23h
                                Domingo: 11h às 22h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.012411212287!2d-49.2673983!3d-25.4381598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f96264373029feb!2zU2hvcHBpbmcgRXN0YcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1655494134081!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. Sete de Setembro, 2775 - Rebouças<br></br> 
                                CEP 80230-010 – Curitiba/PR<br></br>
                                Fone: 55 41 3094-5300</p>
                        </div>
                    </div>
            )
        case("shoppingpark"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Com mais de 300 lojas nacionais e internacionais, você tem bons motivos para fazer ser incrível o seu Dia das Mães, Dia dos Pais, Dia dos Namorados, ou até aquela data que você adora: o Dia Em Que Eu Me Presenteio.
                                <br></br><br></br>
Você também pode fazer uma tarde entre amigos ser realmente incrível no PKB.
<br></br><br></br>
Se isso tudo já traz novos sabores para o seu dia, espere até passar pela Praça de Alimentação e pelos restaurantes do Park Gourmet. Você vai viver uma experiência gastronômica incrivelmente completa.
<br></br><br></br>
Mas para ter certeza de que o ParkShoppingBarigüi foi cuidadosamente pensado para quebrar sua rotina com detalhes incríveis, repare na iluminação natural, nos 23 mil m2 de mata nativa preservada, nos lounges para descanso e na comodidade de serviços como: Concierge, Espaço Família e Banheiro Teen.
<br></br><br></br>
Agora, se você quer se sentir ainda mais perto do shopping que já faz parte da sua vida, descubra as vantagens do nosso programa de relacionamento, o MultiVocê. Ao participar do programa, você terá acesso a benefícios exclusivos para transformar os passeios no PkB em experiências ainda mais incríveis.                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas: <br></br>
                                Segunda a Sábado: 10h às 22h<br></br>
                                Domingo: 12h às 20h
                                <br></br><br></br>
                                Alimentação: <br></br>
                                Segunda a Sábado: 10h às 22h
                                Domingo: 12h às 20h
                                </p> 
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.33548171653!2d-49.3160701!3d-25.4354594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c5a176a37a77a48!2sParkShoppingBarig%C3%BCi!5e0!3m2!1spt-BR!2sbr!4v1655494309680!5m2!1spt-BR!2sbr"></iframe>
                            <p>R. Prof. Pedro Viriato Parigot de Souza, 600 - Mossunguê<br></br>
                                CEP 81200-100 – Curitiba/PR<br></br>
                                Fone: 55 41 3317-6150</p>
                        </div>
                    </div>
            )
        case("shoppingjockey"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Um mix completo de lojas, com marcas inéditas e internacionais e uma vasta opção gastronômica fazem do Jockey Plaza Shopping um empreendimento único.
                                <br></br><br></br>
Inaugurado no dia 5 de junho de 2019, o grandioso shopping center possui mais de 200 mil m² de área construída e comporta mais de 400 lojas e 30 opções na praça de alimentação, além de um boulevard gastronômico com oito restaurantes e vista panorâmica para a pista de corridas do Jockey Club do Paraná.
<br></br><br></br>
Para quem busca diversão um espaço para jogos e lazer, o complexo Cinépolis oferece cinco salas tradicionais Multiplex Stadium, uma sala Macro XE (maior sala de cinema de Curitiba) e duas salas VIPs garantem a diversão e tornam o Jockey Plaza Shopping ainda mais completo.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas: <br></br>
                                Segunda a Sexta: 11h às 23h<br></br>
                                Sábado: 10h às 22h<br></br>
                                Domingo/Feriados: 14h às 20h
                                <br></br><br></br>
                                Alimentação: <br></br>
                                Segunda a Sexta: 11h às 23h
                                Sábado: 10h às 23h
                                Domingo: 11h às 22h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14413.147371438901!2d-49.2147448!3d-25.428672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5323193c213574c2!2sJockey%20Plaza%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1655494489341!5m2!1spt-BR!2sbr"></iframe>
                            <p>R. Konrad Adenauer, 370 - Tarumã<br></br>
                                CEP 82821-020 – Curitiba/PR<br></br>
                                Fone: 55 41 3216-1600</p>
                        </div>
                    </div>
            )
        case("shoppingbatel"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                                <p>
                                Entretenimento, cultura, lazer e compras em um lugar único inspirado no charme da inovação curitibana. Pátio Batel é Grupo Soifer.
                                <br></br><br></br>
O Pátio Batel é um centro de compras inovador projetado para proporcionar memórias inesquecíveis ao exigente mercado curitibano: entretenimento, lazer, cultura e marcas nacionais e internacionais – algumas inéditas e exclusivas na Região Sul do país.
<br></br><br></br>
E essa nova experiência também é possível graças a sua arquitetura contemporânea e elegante, marcada por um grande vão central que une os ambientes internos. O charme da iluminação natural encontra o aconchego das áreas verdes a céu aberto e dos espaços de convivência em um projeto compacto distribuído em nove pavimentos. Definitivamente uma nova experiência.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>
                                Lojas:<br></br>
                                Segunda a sábado: 10h às 22h <br></br>
                                Domingos/feriados: 14h às 20h
                                <br></br><br></br>
                                Restaurantes:<br></br>
                                Segunda a sábado: 10h às 22h<br></br>
                                Domingos e feriados: 11h às 22h
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.856991702983!2d-49.29160587483103!3d-25.44065398513389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38ee8c33a55%3A0x495f31d65af081a6!2sP%C3%A1tio%20Batel!5e0!3m2!1spt-BR!2sbr!4v1655494755133!5m2!1spt-BR!2sbr"></iframe>
                            <p>Av. do Batel, 1868 - Batel<br></br> , Curitiba - PR, 
                                CEP 80420-090 – Curitiba/PR<br></br>
                                Fone: 55 41 3069-8301</p>
                        </div>
                    </div>
            )
        default:
            return(
                <div style={textBlock}>
                    <h2 style={{fontFamily: "fontTextPontos", color: "white"}}><FontAwesomeIcon icon={faTriangleExclamation}/> SEM INFORMAÇÕES DISPONÍVEIS! <FontAwesomeIcon icon={faTriangleExclamation}/></h2>
                </div>
            )
    }
}
export default PontoConteudo;