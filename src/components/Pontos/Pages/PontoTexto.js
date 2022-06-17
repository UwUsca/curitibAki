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
        backgroundColor: "#ffffff0D",
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
        default:
            return(
                <div style={textBlock}>
                    <h2 style={{fontFamily: "fontTextPontos", color: "white"}}><FontAwesomeIcon icon={faTriangleExclamation}/> SEM INFORMAÇÕES DISPONÍVEIS! <FontAwesomeIcon icon={faTriangleExclamation}/></h2>
                </div>
            )
    }
}
export default PontoConteudo;