---
title: 'Post Mortem OMS - Novembro 2017'
id: dCyxZuPKPC2ckccoMKqk4
status: PUBLISHED
createdAt: 2017-11-15T03:34:25.106Z
updatedAt: 2019-12-31T15:13:52.527Z
publishedAt: 2019-12-31T15:13:52.527Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slug: post-mortem-oms-novembro-2017
locale: pt
legacySlug: post-mortem-oms-novembro-2017
announcementImageID: ''
announcementSynopsisPT: 'Este post tem o objetivo de explicar o incidente ocorrido nesta última sexta-feira'
---

Estimados clientes,

Este post tem o objetivo de explicar o incidente ocorrido nesta última sexta-feira, 10 de novembro, com nosso módulo OMS.

Tal incidente provocou a **interrupção dos serviços de integração e interrupção das visualizações dos pedidos no painel de controle da VTEX**, o nosso Admin. **A captação de vendas não foi afetada**, e o checkout funcionou normalmente durante todos os dias. Não tivemos relatos de interrupções nas vendas de nenhum cliente durante o incidente.

A VTEX sempre empreendeu um esforço - que se destaca por estar bastante acima dos padrões de mercado - para garantir que os sistemas de missão crítica tenham alta disponibilidade, elasticidade e segurança. Chamamos de sistemas de missão crítica aqueles responsáveis pelo fechamento do pedido e pelo workflow do pedido ao longo do processo de fulfillment. 

Exemplos de sistemas de missão crítica são o Portal, o Gateway de Pagamentos, o Sistema de Promoções, o Pricing e o Checkout.

Quando algum desses sistemas falha, ele se recupera automaticamente em até 10 minutos, ou então é capaz de se recuperar com poucas intervenções manuais de nossos engenheiros. Para conseguir esse nível de confiabilidade, elasticidade e durabilidade, utilizamos em nossa infraestrutura soluções de armazenamento do tipo NoSQL, os chamados *Key-Value stores*.

No caso dos sistemas que não são de missão crítica, admitimos tempos de recuperação maiores e mais processos manuais para a recuperação. Para estes casos, nosso target de recuperação é de até 4 horas.

Essa disponibilidade pontencialmente menor vem acompanhada de benefícios para esses sistemas. Permite-nos construir features mais sofisticadas e elaboradas. Além de o nosso ciclo de desenvolvimento se tornar bem mais rápido. Exemplos de sistemas que não são de missão crítica são o nosso Admin, a API de busca do nosso OMS e o VTEX Insights.

Na última sexta-feira, tivemos dois grandes acidentes: um deles atingiu uma API que não classificamos como missão crítica, e outro atingiu um serviço de missão crítica. 

Abaixo, detalhamos os acidentes e nosso plano de ação para mitigá-los.

## Acidente 1 - Interrupção da API de busca do OMS

- API de classificação __não crítica__.
- Tempo esperado de recuperação em caso de disruptura: __4 horas__.  
- Tempo que demoramos para recuperação parcial na sexta-feira: __20 horas__.

Como todo acidente, este aconteceu devido a uma série de incidentes que não foram propriamente atacados no momento em que ocorreram.

Os servidores responsáveis pela busca dos pedidos tiveram, durante quase todo o ano, pequenas interrupções de funcionamento. Estas interrupções eram recuperadas rapidamente por meio de manobras simples, como leves otimizações, restarts, escalonamento vertical dos servidores etc.

Apesar de as manobras terem surtido efeito de recuperação no momento das interrupções, olhando para trás, percebemos que não fomos suficientemente rigorosos na identificação da causa raiz desses pequenos incidentes.

Na sexta-feira, essa falta de rigor cobrou a conta: todas as pequenas manobras cabíveis foram executadas, além de outras mais radicais, mas nenhuma delas foi suficiente para recuperar a infraestrutura da busca de pedidos. 

Após algumas horas de tentativas malsucedidas, decidimos tomar caminhos ainda mais radicais, como o da simulação de um desastre, a recriação de toda a infraestrutura do zero e em seguida a repopulação com os dados dos pedidos originais. Novamente, nenhuma dessas medidas teve o efeito desejado; os loads nos servidores estavam maiores que o normal, assim como o nível das CPUs e memórias.

Em paralelo, outro time de engenheiros estava construindo uma infraestrutura mais moderna, com práticas melhores e mais recentes. Foi somente com essa tentativa que começamos a ter sucesso no processo de recuperação.

A recuperação de desastres para todos os nossos ambientes de busca segue um padrão de três ondas que sempre tentamos seguir: primeiro, recuperamos todos os itens alterados nas últimas 24 horas; depois todos os itens alterados no ano corrente; e, por fim, todos os itens do domínio que devem permanecer buscáveis.

A primeira onda começou perto das 22h (BRT), e durou aproximadamente 3 horas. A segunda terminou por volta das 15h (BRT) do sábado. Decidimos não executar a terceira onda em sua plenitude até depois da Black Friday, tendo como única justificativa o objetivo de mitigar um risco potencial (se você vier a ser afetado por essa decisão, por favor, entre em contato conosco).

A feature de exportação de pedidos foi reativada hoje, 14 de novembro, e está limitada aos pedidos que estão em nossa infra de busca (atualmente, o ano de 2017; e durante a semana, a partir do ano de 2016).

Todos os seus pedidos estão armazenados em nosso repositório NoSQL. __Não houve perda de dados originais nem corrupção dos mesmos__. Por enquanto, é possível acessá-los somente via API, por meio dos IDs dos pedidos. Como dito antes, esta é uma situação que durará apenas até depois da Black Friday.

Como descrito acima, falta de disciplina e uma série de manobras malsucedidas fizeram o tempo de recuperação da infraestrutura de busca de pedidos tomar um tempo extremamente maior que o mínimo razoável num cenário de crise e instabilidade. Nunca é demais dizer o quanto nos ressentimos por termos falhado na sexta-feira, e a única maneira de nos sentirmos melhores em relaçao a esse acidente é usando-o como aprendizado e exemplo de como não agir no futuro.

Segue abaixo, portanto, uma lista das ações que implementaremos a partir do aprendizado vindo com essa falha:

1. Vamos, após a Black Friday, refazer a infra de busca utilizando as melhores práticas e conhecimentos disponíveis.
2. Teremos uma estratégia mais consciente dos tamanhos de cada shard em nosso sistema.
3. Vamos monitorar mais de perto a geração de logs desses sistemas e tentar identificar anomalias o mais cedo possível.
4. Vamos monitorar mais de perto a latência desse serviço, sempre analisando os padrões das requisições mais custosas, além de simplificar as features de buscas do OMS, focando seu uso na operação e abandonando seu uso como ferramenta de report, que é como muitos a utilizam atualmente. Com o tempo, vamos fortalecer a capacidade do Insights em detrimento das capacidades do Admin do OMS.
5. Ampliaremos a janela de recuperação da primeira onda - de 24 horas para 7 dias -, de modo que o sistema consiga atender a maioria dos casos após a primeira onda.
6. Criaremos formas de a primeira onda ser processada mais rapidamente, com mais escala, na metade do tempo em que foi processada na sexta-feira.
7. No médio prazo (+1 ano), vamos migrar a busca para uma infraestrutura mais homogênea em relação aos sistemas da VTEX, de modo a termos mais experts disponíveis em situações de crise.

Para nossa cultura, fica a lição de que todo problema empurrado para baixo do tapete repetidamente volta na forma de um fantasma, que assombra a todos nós.

## Acidente 2 - Interrupção do processamento do workflow dos pedidos

- Serviço de classificação __crítica__.
- Tempo esperado de recuperação em caso de disruptura: __10 minutos__.
- Tempo que demoramos para recuperação do serviço na sexta-feira: __6 horas__.  

Este acidente foi mais impactante para os nossos clientes em geral que o primeiro. Durante 6 horas, os pedidos de nossos clientes não andaram no workflow, ou seja, não foram enviados ao antifraude e ao ERP, e não seguiram em frente ao receberem a notificação de shipping.

Ao contrário do que normalmente ocorre, este acidente foi gerado por poucos incidentes bastante específicos, com origem no fato de que os servidores que implementam a lógica do workflow de pedidos eram os mesmos que alimentam o servidor de busca. 

Durante o acidente 1, uma manobra utilizada regularmente era o desligamento desse farm de servidores com o objetivo de aliviar a carga nos servidores de busca. Como os dois serviços estavam implementados na mesma infraestrutura, quando se desligava um serviço, desligava-se o outro também, sem que nossos engenheiros se atentassem a esse fato.

Naturalmente, grande parte dos nossos clientes começou a abrir chamados se queixando de que os pedidos não estavam "caindo" no ERP. E foi aí que se encadeou outro incidente: existe um grupo de clientes, aparentemente grande, que faz a integração com o ERP usando o serviço de busca de pedidos, em lugar de usar os feeds, que não dependem da busca. 

Os primeiros clientes a se queixarem faziam parte desse grupo que usa a busca. O time de Customer Care, com o objetivo de dar espaço para os engenheiros trabalharem no problema, respondeu a todos que a integração voltaria a funcionar apenas quando o serviço de busca retornasse ao normal. Em um ambiente de crise como esse, onde a comunicação deve ser pouca e efetiva, esta ficou sendo a verdade do momento.

Tratava-se, no entanto, de uma ilusão, que apenas se tornou verdade porque se encadeou com o incidente anterior. Moral da história: ao longo de todo o problema, nenhum engenheiro se deu conta de que o serviço do workflow estava desligado, e nenhum agente do time de Customer Care tomou a decisão de pedir a um engenheiro que restabelecesse um serviço que, em princípio, é completamente desacoplado do serviço de busca.

Com o encadeamento desses dois incidentes, muitos de nossos clientes ficaram prejudicados em suas operações a custo de muito pouco.

Os aprendizados, com suas respectivas ações, neste caso, são:
1. Vamos separar os serviços de workflow do serviço de alimentação da busca de pedidos e colocá-los em servidores separados.
2. Vamos fortalecer o mindset de que serviço crítico não pode parar. Ponto.
3. Incentivaremos os agentes do Customer Care a abordarem sem ressalvas o time de produto durante crises, destacando a dor do cliente para toda a empresa. O atrito entre agendas levemente diferentes, neste caso, é saudável e importante para o equilíbrio das prioridades durante uma crise, e lidaremos melhor com ele.
4. Faremos um sprint de divulgação e conscientização das melhores práticas de integração para os clientes, incentivando-os a usarem o feed de integração, que é nossa recomendação para missões críticas. (Para mais informações sobre a integração via feed, consulte nosso [Guia de integração de ERPs - Pedidos](/pt/tutorial/guia-de-integracao-de-erps-pedidos).

Apesar de o acidente de sexta-feira não ter afetado as vendas de nossos clientes, ele impactou negativamente as operações de fulfillment. Temos consciência de que devemos tratar essa etapa do processo de venda com tanta seriedade quanto a captação, sobretudo num cenário em que temos clientes cujas vendas crescem 100% ao ano. Cada minuto conta na hora do fulfillment, e é preciso sempre nos lembrarmos desse fato. Além disso, estamos vendo crescerem entre nossos clientes cada vez mais cenários omnichannels, em que a entrega expressa é o grande fator diferencial.

Novamente, sentimos muito por não termos alcançado um nível de excelência em nosso serviço na sexta-feira. Esperamos compensar essa falha coletando informações sobre cada um dos erros cometidos e transformando-as em aprendizado e ações para uma melhoria significativa de nossa tecnologia e nossos processos.
