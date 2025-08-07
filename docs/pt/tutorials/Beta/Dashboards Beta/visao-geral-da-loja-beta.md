---
title: 'Visão geral da loja (Beta)'
id: 7i8wNsQQgbbFhYMYbQ5X46
status: PUBLISHED
createdAt: 2023-06-14T17:43:51.256Z
updatedAt: 2023-11-09T19:56:54.060Z
publishedAt: 2023-11-09T19:56:54.060Z
firstPublishedAt: 2023-06-15T14:16:58.510Z
contentType: tutorial
productTeam: Management
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: store-overview-beta
legacySlug: visao-geral-da-loja-beta
locale: pt
subcategoryId: QPnz120TdtLcXSh65c4Gs
---

<div class="alert alert-info"> 
A versão atualizada da página Visão Geral da Loja (Beta) está disponível para uso gratuito no Admin VTEX durante seu período Beta, ou até decidido pela VTEX. É importante observar que podem ser aplicadas taxas extras no futuro. Além disso, a página Visão Geral atualmente presente no Admin VTEX continuará disponível para uso por enquanto.
</div>

A página Visão Geral (Beta) em seu Admin VTEX fornece um acompanhamento em tempo real da sua operação no dia atual, oferecendo visibilidade sobre indicadores para que você e sua equipe tenham um feedback rápido das ações realizadas na loja e possam atuar prontamente em melhorias. 

Essa ferramenta está disponível no Admin VTEX, na página de início. Para acessá-la, clique em **Dashboards > Visão Geral** no menu de navegação, ou digite _Visão Geral_ na barra de busca no topo da página.

![PT Visão geral Beta](//images.ctfassets.net/alneenqid6w5/5C2Na8YDkwgIsMHqp28oGv/62aceefab415f246a39fcd604a89f080/PT_Visa__o_geral_Beta.png)

Neste artigo, apresentamos as principais seções e ações presentes na página. Saiba mais sobre:

* [Dados na página](#dados-na-pagina)
* [Analisar resultados e saúde da operação](#analisar-resultados-e-saude-da-operacao)
* [Comparar períodos](#comparar-periodos)
* [Visualização](#visualizacao)
* [Monitoramento](#monitoramento)
* [Métricas](#metricas)

## Dados na página

As métricas da página incluem dados sobre pedidos e navegação, que são captados de sistemas diferentes.

<div class ="alert alert-warning">
É provável que existam diferenças entre as métricas de receita e ticket médio registradas no OMS e no Performance de Vendas, por exemplo. Isso ocorre porque o Performance de Vendas considera o valor dos itens, enquanto o OMS também considera os descontos, frete, taxas e promoções sobre o pedido - o que pode aumentar ou diminuir seu valor final. 
</div>

* **Pedidos e receitas:** os dados sobre pedidos e receitas vêm do OMS, ou Sistema de Gerenciamento de Pedidos da VTEX e incluem pedidos realizados em todos os seus canais de venda.
* **Sessões:** os dados de navegação vêm do sistema interno da plataforma que capta sessões dos usuários no storefront de lojas VTEX. Sessões são representadas pelo conjunto de visualizações das páginas acessadas por um mesmo usuário  ao navegar em seu ecommerce, desconsiderando marketplaces, apps, Sales App e qualquer outro canal de venda.

### Restrições nos dados

Não captamos dados de navegação para storefronts que não são VTEX, ou de sellers que somente anunciam produtos em marketplaces externos. Por isso os tipos de gráficos presentes no [Monitoramento](#monitoramento) podem não estar disponíveis, dependendo se captamos dados de navegação da sua loja, ou não.

Apesar de buscarmos apresentar no máximo 3% de divergência com os dados do OMS da VTEX, por vezes, você pode encontrar discrepâncias entre os dados informados na Visão Geral e no OMS. 

### Atualização de dados

Os dados da página são atualizados com frequências diferentes. Os gráficos na seção de [Monitoramento](#monitoramento) se atualizam em até três minutos, dependendo da [Visualização](#visualizacao), enquanto as outras seções da página são atualizadas a cada 15 minutos. A etiqueta  <i class='fas fa-circle-notch blue-color'></i>  1 min mostra a última vez que os dados da página foram atualizados. 

## Analisar resultados e saúde da operação

É possível utilizar diferentes [métricas](#metricas) e gráficos de [monitoramento](#monitoramento) para sua análise de resultados, dependendo de qual aspecto deseja explorar. A tabela abaixo pode guiar a sua análise. Clique em cada métrica listada na tabela para saber mais sobre seu cálculo e funcionamento. 

| O que deseja explorar  | Quais métricas e gráficos analisar                                                                                                                                                                                                                                                           |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Engajamento da ação    | - [Novas sessões](#monitoramento) <br>- [Produtos com mais unidades vendidas](#metricas)                                                                                                                                                                                                                                     |
| Resultados financeiros | - [Receita captada](#monitoramento) <br>- [Ticket Médio](#metricas)<br>- [Produtos com maior receita](#metricas)                                                                                                                                                                                                                         |
| Conversão              | - [Taxa de Conversão](#metricas) <br>- [Funil de vendas](#funil-de-vendas) <br>- [Pedidos captados](#monitoramento), comparando com o número de Pedidos cancelados. Dependendo do resultado, isso pode direcionar sua equipe a identificar problemas operacionais no fulfillment ou atendimento ao consumidor que causaram os pedidos cancelados. |

<div class="alert alert-info"> 
Note que enquanto os gráficos em Monitoramento são atualizados em até três minutos, as Métricas são atualizadas de quinze em quinze minutos, o que pode influenciar a sua análise de resultados. Saiba mais em <a href="#atualizacao-de-dados">Atualização de dados</a>.
</div>

### Analisar resultados de campanhas

Caso deseje analisar os resultados gerados por campanhas, promoções ou lançamentos de novos produtos ocorridos em uma data passada, siga as instruções abaixo: 

1. Selecione a **Loja** onde a ação ocorreu.
2. Selecione a **data** da campanha para [comparar o período](#comparar-periodos) com a data de hoje.
3. Selecione a [visualização](#visualizacao) `Acumulada`.
4. Acompanhe a performance hora a hora das métricas.

![PT visão geral acumulado](//images.ctfassets.net/alneenqid6w5/44wg1PRlF5WHD5I6R5Cu8o/93f86ef067d3c7630ba6b545a8811a8b/PT_visa__o_geral_acumulado.png)

### Acompanhar impactos de mudanças na loja

Para manter a estabilidade da saúde da sua operação é importante identificar se "deploys", campanhas, ou alterações de configurações impactaram negativamente o número de pedidos, sessões ou conversão de clientes nos momentos imediatos após a sua aplicação.

Caso deseje ver o impacto de mudanças feitas na loja, para identificar um possível impacto negativo ou alterações na saúde do negócio, siga as instruções abaixo. 

1. Selecione a **Loja** onde a ação ocorreu.
2. Selecione a [visualização](#visualizacao) `Últimas horas`.
3. Avalie o pulso nas métricas, ou pontos de inflexão no gráfico, ocorridos nas últimas duas horas. 
4. Compare os horários dos pontos de inflexão, com as mudanças geradas para identificar sua causa e impacto. 

![PT visão geral últimas duas horas](//images.ctfassets.net/alneenqid6w5/6JA6a85eBz6dMN5Cg1EAQi/a069a0657d521f68a7be3a4221b70036/PT_visa__o_geral_u__ltimas_duas_horas.png)

## Comparar períodos

É possível filtrar dados com base no período selecionado e comparar as métricas da loja com datas passadas. Para comparar dados de diferentes períodos, no topo da página, selecione a data ao lado de `Comparar hoje com:`, depois selecione entre as seguintes opções:

| Período       | Início                                                                                   | Fim                                  |
|---------------|------------------------------------------------------------------------------------------|--------------------------------------|
| Ontem         | 00:00 do dia anterior                                                                    | 23:59 do dia anterior                |
| 7 dias atrás  | 00:00 dos oito dias anteriores ao dia de hoje                                            | 23:59 do dia anterior ao dia de hoje |
| 28 dias atrás | 00:00 do 29° dia anterior ao dia atual                                                   | 23:59 do dia anterior ao dia de hoje |
| Personalizado | Marque no calendário a Data de comparação desejada, com um limite de 13 meses no passado | 23:59 do dia anterior ao dia de hoje |

## Visualização

Ao clicar no botão `Visualização:` dentro da seção [Monitoramento](#monitoramento), é possível alternar entre as seguintes opções:

* **Acumulado:** valor total acumulado no dia para cada métrica de monitoramento, desde 00:00h até a última atualização. Os dados nessa visualização são atualizados a cada três minutos. 
* **Últimas horas:** valor recebido nas últimas duas horas para cada métrica de monitoramento. Essa visualização não exibe a comparação com outros períodos nem a porcentagem de crescimento ou decrescimento da métrica. Os dados nessa visualização são atualizados a cada minutos. 

Também é possível filtrar por loja selecionando pelo menu suspenso.  

## Monitoramento

Cada gráfico contém os seguintes elementos:

* O eixo X apresenta o horário, enquanto o eixo Y apresenta o valor da métrica de monitoramento.
* Número absoluto de cada métrica, podendo ser `Acumulada` ou nas `Últimas horas`. Saiba mais em [Visualização](#visualização). 
* A linha azul mais grossa indica a evolução de valores no dia de hoje. 
* A linha cinza pontilhada indica a taxa para o período que está sendo comparado. 
* Ao passar o cursor, o gráfico mostra o valor absoluto para cada período comparado.

A tabela abaixo descreve os gráficos incluídos na seção _Monitoramento_ da página. 

| Métrica          | Descrição                                                                                                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Receita captada  | Valor total determinado pelo valor final dos pedidos captados, indicando o valor que a loja recebeu de receita, comparando o dia de hoje com um período específico selecionado. |
| Pedidos captados | Número de pedidos recebidos pela sua loja no dia de hoje comparado com o período selecionado.                                                                                   |
| Ticket médio     | Receita média por pedido captado no dia de hoje comparado com o período selecionado.                                                                                            |
| Novas Sessões    | Número de novas visitas ou interações à sua loja, dependendo do tipo de [Visualização](#visualizacao) escolhida. Esta métrica só está disponível para lojas que [capturam dados de navegação](#dados-na-pagina).     |

## Métricas

![PT métricas](//images.ctfassets.net/alneenqid6w5/6kxOvmmLfGYnhFiBvOtrOV/5757d545cae0367ad8a8e784532252f8/PT_me__tricas.png)

A tabela abaixo descreve as métricas disponíveis no painel da página inicial. Todas as métricas se referem aos fluxos de compra realizados em lojas VTEX no período selecionado.

| Métrica                             | Descrição                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ticket Médio                        | Média do valor pago por pedidos captados no período selecionado. Essa métrica acompanha o ícone <i class='fa fa-caret-down'></i> para baixo e <i class='fa fa-caret-up'></i> para cima, para demonstrar a porcentagem de crescimento ou decrescimento do ticket médio.                                                                                                                                                                  |
| Taxa de conversão                   | Porcentagem calculada dividindo o número total de pedidos pelo número total de sessões na sua loja. Ao clicar no ícone de seta <i class='fa fa-chevron-down'></i>,  você expande o Funil de vendas.                                                                                                                                             |
| Produtos com maior receita          | Produtos que geraram a maior receita no período selecionado. Indica o valor recebido em receita e uma porcentagem indicando aumento ou diminuição de receita, comparando entre os períodos selecionados. Ao clicar no ícone de seta <i class='fa fa-chevron-down'></i>, você alterna entre essa métrica e Produtos com mais unidades vendidas.  |
| Produtos com mais unidades vendidas | Produtos que venderam mais unidades no período selecionado. Indica a quantidade de itens vendidos e uma porcentagem indicando aumento ou diminuição de itens vendidos, comparando entre os períodos selecionados. Ao clicar no ícone de seta <i class='fa fa-chevron-down'></i>, você alterna entre essa métrica e Produtos com maior receita.  |

### Funil de vendas

Na métrica de _Taxa de conversão_, ao clicar no ícone de seta <i class='fa fa-chevron-down'></i>,  você expande o **Funil de vendas**. Esse gráfico acompanha e rastreia o volume de sessões nas etapas intermediárias do fluxo de compras e identifica oportunidades para otimizar a taxa de conversão da loja. A tabela abaixo descreve as etapas intermediárias do fluxo de compras.

| Etapa     | Descrição                                                                 |
|-----------|---------------------------------------------------------------------------|
| Sessões   | Número total de visitas à sua loja                                        |
| Produto   | Uma página de produto foi acessada pelo usuário durante a sessão          |
| Carrinho  | Um produto foi adicionado ao carrinho pelo usuário durante a sessão       |
| Envio     | As informações de entrega foram preenchidas pelo usuário durante a sessão |
| Pagamento | Os dados de pagamento foram preenchidos durante a sessão                  |
| Pedidos   | Pedidos que foram realizados durante a sessão                             |

Cada barra azul no gráfico representa o volume de sessões que atingiram um determinado estágio do fluxo de compras. Esse volume é representado como um valor absoluto, e como uma porcentagem do número de sessões, juntamente com os pontos percentuais de aumento ou diminuição no funil de vendas. 

