---
title: 'Visão Geral da Loja'
id: P8ahguoRs0U3PzmXg2wuQ
status: PUBLISHED
createdAt: 2021-11-18T22:48:32.711Z
updatedAt: 2023-05-31T16:11:20.454Z
publishedAt: 2023-05-31T16:11:20.454Z
firstPublishedAt: 2021-11-18T22:53:28.982Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: store-overview
locale: pt
legacySlug: visao-geral-da-loja
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

Na página Visão Geral, os proprietários de lojas VTEX têm acesso às principais métricas que impactam a receita de suas lojas. Nesse painel, você pode acompanhar a evolução das suas vendas através dos recursos de análise de tendências de pedidos, taxa de conversão e gráficos de funil de vendas. Essa ferramenta está disponível no Admin VTEX. Para acessá-la, clique em __Dashboards > Visão Geral__ no menu de navegação, ou digite *Visão Geral* na barra de busca no topo da página.

![Store overview gif PT](https://images.ctfassets.net/alneenqid6w5/4vKmiLmTVUtaxn5vzpX5xq/b9a4a299f80286eadf1727cd5057a64c/Store_overview_gif_PT.gif)

A página de Visão Geral traz um resumo do seu negócio com a VTEX. Para consultar análises mais profundas das métricas da sua loja, acesse [Performance de Vendas](/pt/v4/docs/performance-de-vendas--6gx46RGRzWO8qgaVck7PRp).

## Dados

As métricas da página incluem dados sobre pedidos e navegação, que são captados de sistemas diferentes. 

* **Pedidos:** os dados sobre pedidos e receitas vêm do OMS, ou Sistema de Gerenciamento de Pedidos da VTEX e incluem pedidos realizados em todos os seus canais de venda. 
* **Navegação:** os dados de navegação vêm do sistema interno da plataforma que capta sessões dos usuários no storefront de lojas VTEX. Sessões são representadas pelo conjunto de visualizações das páginas acessadas por um mesmo comprador ao navegar em seu ecommerce, desconsiderando marketplaces, apps, VTEX Sales App e qualquer outro canal de venda. 

Não captamos dados de navegação para storefronts que não são VTEX, ou de sellers que somente anunciam produtos em marketplaces externos. Por isso os tipos de gráficos presentes na sua Visão Geral podem variar, dependendo se captamos dados de navegação da sua loja, ou não.

A tabela abaixo resume quais gráficos estão incluídos na página, para cada cenário de captação de dados da loja.

| Captação de dados da loja        | Gráficos incluídos                                                                  |
|----------------------------------|-------------------------------------------------------------------------------------|
| Com dados completos de navegação | Análise de tendências de pedidos<br>Taxa de conversão<br>Funil de vendas<br>Sessões |
| Com dados parciais de navegação  | Pedidos realizados<br>Pedidos cancelados<br>Funil de vendas<br>Sessões              |
| Sem dados de navegação           | Pedidos realizados<br>Pedidos cancelados<br>Categorias com maior receita            |

Apesar de buscarmos apresentar no máximo 3% de divergência com os dados do OMS da VTEX, por vezes, você pode encontrar discrepâncias entre os dados informados na Visão Geral e no OMS. Para que a página funcione de forma leve e seja atualizada diariamente, é preciso armazenar esses dados em grupos diferentes divididos em dados "online", ou de curto prazo (como por exemplo as métricas que acabaram de ser filtradas) e dados de longo prazo (como os dados exportados por planilha, que consomem mais informações). Esses grupos também são processados por sistemas diferentes, o que pode causar a diferença entre dados do OMS e a Visão Geral.

## Comparação de períodos

Os dados da página são atualizados a cada hora, portanto usuários podem esperar um delay de 10 a 80 minutos, dependo do horário em que acessaram a página. Ela permite ainda que os usuários filtrem dados com base no período selecionado e comparem as métricas da loja com datas passadas. A etiqueta `Atualizado` mostra a última vez que os dados da página foram atualizados. 

Para comparar dados de diferentes períodos, no topo da página, selecione a data no __primeiro menu suspenso__, depois selecione a segunda data no __segundo menu suspenso__. Os filtros de data incluem as seguintes opções: 

| Período         | Início                                        | Fim                                                                                                                                                                     |
|-----------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hoje            | 00:00 do dia atual                            | A última vez que os dados foram atualizados, quando o usuário acessou o painel de controle. Verifique a etiqueta `Atualizado` para ver o horário da última atualização. |
| Ontem           | 00:00 do dia anterior                         | 23:59 do dia anterior                                                                                                                                                   |
| Últimos 7 dias  | 00:00 dos oito dias anteriores ao dia de hoje | 23:59 do dia anterior ao dia de hoje                                                                                                                                    |
| Últimos 28 dias | 00:00 do 29° dia anterior ao dia atual        | 23:59 do dia anterior ao dia de hoje                                                                                                                                    |

## Métricas
![Store overview Métricas PT](https://images.ctfassets.net/alneenqid6w5/75FnGMAHaNQxfcHmKM7Jjf/efa916ff3c1f70906439c3f2f4adbf06/Me__tricas_PT.png)

A tabela abaixo descreve as principais métricas disponíveis no painel da página inicial. Todas as métricas se referem aos fluxos de compra realizados em lojas VTEX em um determinado período de tempo.

| Métrica                               | Descrição                                                                                                                                                                                                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Receita                               | Valor total determinado pelo valor final dos pedidos aprovados.                                                                                                                                                                                                                              |
| Pedidos                               | Número de pedidos realizados.                                                                                                                                                                                                                                                                |
| Ticket médio                          | Receita média por pedido.                                                                                                                                                                                                                                                                    |
| Sessões                               | Número de visitas à sua loja. Esta métrica só está disponível para lojas que capturam dados de navegação.                                                                                                                                                                                                                                                               |
| 
Pedidos cancelados                               | Número total de pedidos cancelados no período selecionado.                                                                                                                                                                                                                     |
| Produtos populares sem estoque        | Produtos muito vendidos que estão com baixo nível de estoque. Ao clicar nessa métrica, você verá uma janela com a lista de produtos sem estoque. Se você clicar em um item, você será redirecionado para a página de Gerenciamento de Estoque desse produto, onde poderá atualizar o estoque. |
| Pedidos com pagamentos em autorização | Pedidos que não foram realizados devido a problemas de autorização de pagamento. Ao clicar nessa métrica, você será redirecionado para a página Transações para revisar as autorizações de pagamento pendentes.                                                                               |
| Pedidos na última hora                | Pedidos feitos na sua loja na última hora. Ao clicar nessa métrica, você será redirecionado para a página [Todos os pedidos](/pt/v4/docs/todos-os-pedidos--6JHeydzIft46VY7JTEpbJT).                                                                                                                                                                   |

## Produtos com maior receita / Produtos com mais unidades vendidas
![Store overview Growing products PT](https://images.ctfassets.net/alneenqid6w5/5J5U85LjLuTt6MRFSaisZG/186c31b9b5632b5a106d3439dac945ec/Store_overview_Growing_products_PT.jpg)

Esse componente lista seus produtos com maior receita e os produtos com mais unidades vendidas no período selecionado. Você pode alternar entre as duas opções clicando no título, ou no ícone <i class="fas fa-chevron-down"></i>.

Saiba mais sobre as listas: 
- **Produtos com maior receita:** produtos que geraram a maior receita no período selecionado. Indica o valor recebido em receita e uma porcentagem indicando aumento ou diminuição de receita, comparando entre os períodos selecionados.  
- **Produtos com mais unidades vendidas:** produtos que venderam mais unidades no período selecionado. Indica a quantidade de itens vendidos e uma porcentagem indicando aumento ou diminuição de itens vendidos, comparando entre os períodos selecionados. 

## Pedidos realizados
![Store overview Pedidos realizados PT](https://images.ctfassets.net/alneenqid6w5/54DyQfUdOlf3VZdwIUdQjT/7f8f3d3bab538d4c680dcd09511f0984/Pedidos_realizados_PT.png)

Esse gráfico mostra o número de pedidos recebidos pela sua loja no período selecionado. A linha azul mais grossa indica os pedidos feitos no período mais recente. A linha cinza mais fina indica os pedidos feitos no período que está sendo comparado.   Ao passar o cursor, o gráfico mostra o número de pedidos captados para cada data. 

## Pedidos cancelados
![Store overview Pedidos cancelados PT](https://images.ctfassets.net/alneenqid6w5/2RUKzEeb2SvpktBvQJoUQk/3bb0e1ec615af3d38c6b10cdcf3a3370/Pedidos_cancelados_PT.png)
Esse gráfico mostra o número de pedidos cancelados na sua loja no período selecionado. A linha azul mais grossa indica os pedidos cancelados no período mais recente. A linha cinza mais fina indica os pedidos cancelados no período que está sendo comparado. Ao passar o cursor, o gráfico mostra o número de pedidos cancelados em cada data. 

## Análise de tendências de pedidos
![Store overview Order trend PT](https://images.ctfassets.net/alneenqid6w5/5c3eFasw5spgqeynh4Q9c5/9807c6b956c1b2a34d558046766d1120/Store_overview_Order_trend_PT.jpg)

Esse gráfico mostra o comportamento dos pedidos da sua loja, indicando o número de pedidos feitos pelos compradores no período selecionado.

A linha indica a curva de pedidos para o período selecionado. Ao passar o cursor, o gráfico mostra o valor da métrica para um dia ou horário específico. As sombras em torno da curva são intervalos de confiança indicando o comportamento de pedidos esperados em cada data. A tonalidade azul representa um intervalo com 90% de confiança, enquanto a tonalidade mais clara representa 99% de confiança. Os intervalos são calculados de acordo com os últimos 3 meses, e o algoritmo do gráfico considera a data e a hora para calcular a expectativa.

A etiqueta acima do gráfico indica se o número de pedidos está `normal`, `baixo` ou `alto` em comparação com o desempenho habitual da sua loja no período selecionado.

## Taxa de conversão
![Store overview Conversion rate PT](https://images.ctfassets.net/alneenqid6w5/1S5WA2yR00R1GuBU0NoKaZ/c974a11d3e708c5d40d0757ebfa95faf/Store_overview_Conversion_rate_PT.jpg)  

Esse gráfico mostra a taxa de conversão da sua loja nos períodos que você deseja comparar. 

A taxa de conversão é calculada dividindo o número total de pedidos pelo número total de sessões na sua loja. A linha azul mais grossa indica a taxa de conversão para o período mais recente. A linha cinza mais fina indica a taxa para o período que está sendo comparado.  Ao passar o cursor, o gráfico mostra a taxa de conversão para cada período comparado. 

## Funil de vendas
![Store overview sales funnel PT](https://images.ctfassets.net/alneenqid6w5/3jSzBfJ4nQa8iI2f1opyds/c00dbe392b24f5157350d6c037759837/Store_overview_sales_funnel_PT.jpg)

Esse gráfico acompanha e rastreia o volume de sessões nas etapas intermediárias do fluxo de compras e identifica oportunidades para otimizar a taxa de conversão da loja. A tabela abaixo descreve as etapas intermediárias do fluxo de compras.

| Etapa                          | Descrição                                                                 |
|--------------------------------|---------------------------------------------------------------------------|
| Total de sessões               | Número total de visitas à sua loja                                        |
| Sessões de página de produto   | Uma página de produto foi acessada pelo usuário durante a sessão          |
| Sessões de carrinho  | Um produto foi adicionado ao carrinho pelo usuário durante a sessão       |
| Sessões de envio             | As informações de entrega foram preenchidas pelo usuário durante a sessão |
| Sessões de pagamento           | Os dados de pagamento foram preenchidos durante a sessão                  |
| Pedido                        | Pedidos que foram realizados durante a sessão                       |

Cada barra azul no gráfico representa o volume de sessões que atingiram um determinado estágio do fluxo de compras. Esse volume é representado como um valor absoluto (acima), e como uma porcentagem do número de sessões (abaixo), juntamente com os pontos percentuais (p.p) de aumento ou diminuição no funil de vendas. Ao passar o cursor sobre a porcentagem, você pode ver mais detalhes sobre essa etapa intermediária.

## Categorias com maior receita
![Categorias PT](https://images.ctfassets.net/alneenqid6w5/1jkVQ63kTKC7EWYNpZ2M5i/18f8e56b4d93e7a89ca021153a73eb8e/Categorias_PT.png)

Este gráfico indica as dez categorias da sua loja que geraram mais receita no período selecionado. A barra azul indica a receita gerada na data mais recente, e a barra cinza indica a receita gerada no período comparado. Ao passar o cursor, o gráfico mostra a taxa de conversão para cada período comparado. Ao clicar no título do gráfico é possível mudar a visualização para __Categorias mais vendidas por pedido__.

