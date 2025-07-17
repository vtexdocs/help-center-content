---
title: 'Razões de cancelamento no relatório de pedidos'
id: 46wIwISm6Df2LJgNePpFYK
status: PUBLISHED
createdAt: 2021-05-28T15:59:23.942Z
updatedAt: 2022-08-29T23:27:11.506Z
publishedAt: 2022-08-29T23:27:11.506Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2021-05-28-reasons-for-cancellation-in-order-reports
locale: pt
legacySlug: razoes-de-cancelamento-no-relatorio-de-pedidos
announcementImageID: ''
announcementSynopsisPT: 'Acrescentamos a coluna Cancellation Data no relatório de pedidos para dar visibilidade sobre as razões de cancelamentos.'
---

Exportar relatórios de pedidos possibilita realizar ações externas como analisar o desempenho da loja e utilizar como romaneio para facilitar a logística.

Acrescentamos a coluna **Cancellation Reason** ao relatório de pedidos para dar mais visibilidade aos lojistas sobre as razões para cancelamentos solicitados por clientes.

## O que mudou?

O relatório de pedidos exportado pelo **Gerenciamento de pedidos** ou pela API de Orders não apresentava detalhes sobre o cancelamento de pedidos. Apenas a coluna **Cancellation Data** era exibida sempre com valores nulos. A informação desta coluna corresponde ao campo `cancelReason` apresentado na API de Orders.

Agora, o relatório contém a coluna **Cancellation Reason** que exibe a razão indicada pelo cliente final para o cancelamento do pedido. Antes, essa informação era exibida apenas na seção de interações na página de detalhes do pedido no Admin e no campo `Reason` do objeto `cancellationData` na API de Orders.

Caso o usuário não informe a razão no momento do cancelamento, a nova coluna estará vazia no relatório.

## Por que fizemos essa mudança?

Incluímos as razões para cancelamento no relatório de pedidos para facilitar que os lojistas extraiam esses dados e analisem as principais informações de cancelamento do pedido.

## O que precisa ser feito?

Nenhuma ação é necessária, a alteração é automática para todas as lojas VTEX. Todos os relatórios de pedidos gerados a partir de hoje já correspondem a essa modificação.

Para entender como realizar a exportação de pedidos, leia o tutorial [Exportação de pedidos no Gerenciamento de pedidos](/pt/tutorial/exportando-pedidos-no-gerenciamento-de-pedidos--tutorials_6417). Para saber mais sobre a estrutura do relatório de pedidos, confira o artigo [Relatório de pedidos](/pt/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).

