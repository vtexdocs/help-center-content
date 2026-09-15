---
title: 'Métricas de Novos Compradores da Marca (NCM) no VTEX Ads'
createdAt: 2026-09-10T00:00:00.000Z
updatedAt: 2026-09-10T00:00:00.000Z
contentType: tutorial
productTeam: Ads
slugEN: vtex-ads-new-to-brand-metrics
locale: pt
---

As métricas de **Novos Compradores da Marca (NCM)** mostram quantos dos compradores atribuídos às suas campanhas no [VTEX Ads](/pt/docs/tracks/retail-media) compraram produtos da sua marca pela primeira vez, e quanta receita esses compradores geraram. Elas ajudam a separar o que é aquisição de novos clientes do que é recompra de quem já conhecia a marca.

Este artigo explica o que cada métrica de NCM mede, como funcionam a janela de lookback e a janela de medição de 30 dias, em quais visões do dashboard as métricas aparecem e como interpretar os resultados.

> ⚠️ As métricas de NCM estão em fase beta e são exclusivas de contas de anunciante. Contas de publisher não têm acesso a essas métricas.

> ⚠️ As métricas de NCM ainda não estão disponíveis para campanhas de rede.

> ℹ️ Nenhum dado de NCM existe antes do mapeamento entre produtos e marcas. Antes de consultar as métricas, conclua o processo descrito em [Mapear produtos e marcas no catálogo do VTEX Ads](/pt/docs/tutorials/mapear-produtos-e-marcas-no-catalogo-do-vtex-ads).



## O que é um Novo Comprador da Marca

Um comprador é classificado como **Novo Comprador da Marca (NCM)** quando não realizou nenhuma compra de produtos daquela marca dentro da janela de lookback anterior à data da conversão atribuída.

A classificação segue estas regras:

- **Cálculo por marca:** o mesmo comprador pode ser novo para uma marca e recorrente para outra.
- **Cálculo por publisher:** a classificação considera o histórico de compras dentro de cada publisher, e não entre publishers diferentes.
- **Atribuição last touch:** a conversão considerada na classificação é a atribuída por [last touch](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#prioridade-de-atribuicao-last-touch).
- **Atualização diária (D+1):** as métricas não são calculadas em tempo real.

> ℹ️ Em inglês, a métrica se chama **New to Brand (NTB)**. Os dois nomes se referem ao mesmo conceito, e o rótulo exibido depende do idioma configurado na sua conta.



## As quatro métricas de NCM

A tabela a seguir descreve o que cada métrica de NCM mede e como é calculada:


| Métrica           | O que mede                                                                                                 | Fórmula                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **NCM**           | Número de compradores únicos atribuídos à campanha que compraram produtos daquela marca pela primeira vez. | -                                             |
| **% NCM**         | Proporção de novos compradores da marca sobre o total de compradores atribuídos à campanha.                | (NCM / Total de compradores atribuídos) × 100 |
| **Receita NCM**   | Receita total gerada pelos novos compradores da marca atribuídos à campanha.                               | -                                             |
| **% Receita NCM** | Proporção da receita atribuída que veio de novos compradores da marca.                                     | (Receita NCM / Receita total atribuída) × 100 |




## Janela de lookback

A **janela de lookback** é o período de histórico de compras que a plataforma consulta para decidir se um comprador é novo para a marca. Se o comprador não comprou aquela marca em nenhum momento dentro da janela, ele é contado como NCM.

Você pode escolher entre três janelas, de acordo com a frequência de compra da sua categoria:


| Janela de lookback | Recomendada para                            |
| ------------------ | ------------------------------------------- |
| 3 meses            | Categorias de alta frequência de compra.    |
| 6 meses            | Categorias de frequência intermediária.     |
| 12 meses           | Categorias de baixa frequência ou sazonais. |


Quanto maior a janela, mais rigoroso é o critério: um lookback de 12 meses exige um ano sem compras da marca para que o comprador seja considerado novo.

### Como alterar a janela de lookback

Na tabela de campanhas, o indicador **Look back NTB** mostra a janela em uso, por exemplo `Look back NTB: 12 meses`. Para alterá-la:

1. Clique no indicador `Look back NTB` na tabela de campanhas.
2. Na janela que se abre, selecione uma das três opções disponíveis.

A alteração pode ser feita a qualquer momento.

Não existem janelas de lookback menores que três meses. Com um lookback igual ou menor que a janela de 30 dias usada na medição, todos os compradores seriam classificados como novos, o que não traria informação analítica útil.

## Janela de medição de 30 dias

O percentual de NCM não é calculado sobre o número de **Conversões** exibido na tela. Ele é calculado sobre as conversões dos últimos 30 dias fixos da campanha até a data final selecionada, independentemente do período filtrado no dashboard.

As duas métricas usam bases de cálculo diferentes:

- **Conversões:** pedidos com evento de interação com o anúncio nos 14 dias anteriores à compra, dentro do período filtrado no dashboard. Se o filtro selecionado é de sete dias, as conversões refletem esses sete dias.
- **NCM:** do total de conversões dos últimos 30 dias fixos da campanha até a data final selecionada, quantos compradores não compraram a marca dentro da janela de lookback.



### Por que o NCM pode ser maior que as Conversões

Como o NCM pode enxergar uma janela maior que o período filtrado, ele pode contar compradores que converteram antes do início desse período. Veja um exemplo com o período 20/08 a 27/08 selecionado no dashboard, ou seja, sete dias:


| Métrica na linha da campanha | Valor exibido | Período de cálculo              |
| ---------------------------- | ------------- | ------------------------------- |
| **Conversões**               | 6             | 20/08 a 27/08 (filtro aplicado) |
| **NCM**                      | 12            | 28/07 a 27/08 (30 dias fixos)   |


Nos 30 dias que o NCM considera, 12 compradores compraram a marca pela primeira vez. Desses 12, apenas seis tiveram interação com o anúncio nos 14 dias anteriores à compra, que ocorreu dentro entre 20/08 e 27/08 e, por isso, aparecem em **Conversões**. Os outros seis converteram antes de 20/08 e continuam dentro da janela de 30 dias do NCM, mas ficam fora do período filtrado.

Esse comportamento é esperado e não indica erro nos relatórios.

> ℹ️ **Recomendação de análise:** para comparar o NCM com o total de conversões, selecione um período de 30 dias no dashboard. Nesse caso, as bases de cálculo das duas métricas se aproximam, os números ficam mais comparáveis e o NCM não supera as **Conversões**. O NCM é uma métrica de ciclo, mais útil na leitura mensal do que no acompanhamento diário.



## Disponibilidade por visão do dashboard

A regra geral é que o NCM só está disponível onde existe um identificador local de comprador confiável, ou seja, dentro de um publisher específico. Visões que agregam múltiplos publishers não exibem NCM. A tabela a seguir mostra a disponibilidade em cada visão:


| Visão do dashboard                                         | NCM disponível | Detalhe                                                                                                        |
| ---------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| **Visão geral:** gráfico e cards sem publisher selecionado | Não            | As métricas de NCM não aparecem nessa visão consolidada.                                                       |
| **Visão geral:** aba **Publishers**                        | Sim            | Uma linha por publisher, com as métricas calculadas dentro daquele publisher. Não é um agregado de publishers. |
| **Dentro de um publisher:** aba **Campanhas**              | Sim            | No agregado do publisher e por linha de campanha, ao lado das métricas tradicionais.                           |
| **Dentro de um publisher:** aba **Anúncios**               | Sim            | No agregado do publisher e por linha de anúncio.                                                               |


Nas visões em que estão disponíveis, as quatro colunas exibidas são **NCM**, **% NCM**, **Receita NCM** e **% Receita NCM**. Na aba **Campanhas** de um publisher, o gráfico de série temporal também oferece **NCM** e **Receita NCM** como opções selecionáveis, o que permite acompanhar a variação das métricas ao longo do tempo.

## Dados indisponíveis nas colunas de NCM

Ao visualizar as colunas de métricas de NCM, um traço (-) indica dado indisponível, e não erro. O painel Admin do VTEX Ads pode exibir um traço nos seguintes casos:

- A campanha não tem produtos vinculados a uma marca.
- A campanha não estava ativa no período selecionado.
- O dado ainda está em processamento.
- A campanha roda em múltiplos publishers simultaneamente.

Se a campanha tem produtos vinculados, estava ativa no período, é veiculada em um único publisher e não é uma campanha de rede, o traço indica que o dado ainda está em processamento. Nesse caso, aguarde o próximo ciclo de atualização diária.

## Campanhas multimarca

Em campanhas que anunciam produtos de mais de uma marca, o NCM é calculado por marca e depois agregado na campanha. Um comprador que é novo em duas marcas da mesma campanha é contado uma vez para cada marca, resultando em dois NCM.

Isso dificulta a identificação da marca que traz mais compradores novos. Para uma leitura mais limpa do NCM por marca, crie campanhas separadas por marca. Não é necessário pausar o que já está em veiculação: a mudança vale para os próximos ciclos de campanha.

## Atualização dos dados

As métricas de NCM são atualizadas diariamente (D+1) e ficam disponíveis às 7h com os dados do dia anterior. Elas não são atualizadas em tempo real.

Depois de vincular um produto a uma marca no **Catálogo de produtos**, as métricas de NCM daquele produto aparecem no dashboard no dia seguinte, desde que o produto esteja em alguma campanha ativa. Produtos vinculados a uma marca, mas fora de campanhas ativas, não geram métricas de NCM.

## Saiba mais

- [Mapear produtos e marcas no catálogo do VTEX Ads](/pt/docs/tutorials/mapear-produtos-e-marcas-no-catalogo-do-vtex-ads)
- [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads)
- [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media)

