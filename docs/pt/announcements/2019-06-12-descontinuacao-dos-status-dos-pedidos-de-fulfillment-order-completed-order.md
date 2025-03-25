---
title: 'Descontinuação dos status dos pedidos de Fulfillment `order-completed`, `order-create-error` e `order-creation-error`'
id: 4AJyu9fJNSKNpL4g4dfgcp
status: PUBLISHED
createdAt: 2019-06-12T18:05:37.415Z
updatedAt: 2020-04-02T16:45:58.231Z
publishedAt: 2020-04-02T16:45:58.231Z
contentType: updates
productTeam: Reliability
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-12-discontinuation-of-order-completed-order-create-error-and-order-creation
locale: pt
legacySlug: descontinuacao-dos-status-dos-pedidos-de-fulfillment-order-completed-order
announcementImageID: ''
announcementSynopsisPT: 'Status dos pedidos de Fulfillment `order-completed``order-create-error` e `order-creation-error` vão ser descontinuados'
---

A partir de 24 de junho de 2019, os status dos pedidos de Fulfillment `order-completed`, `order-create-error` e `order-creation-error` vão ser descontinuados.

Os pedidos de origem Fulfillment são aqueles relacionados às etapas de entrega ou retirada de um pedido. Podemos associar os pedidos que têm esta origem ao processo que um seller realiza para efetuar a entrega ou a retirada de um pedido.

>⚠️ O status dos pedidos de origem Marketplace não serão alterados.

## Por que a VTEX está tomando esta ação

Os workflows dos pedidos, isto é, o andamento das etapas de entrega dos pedidos, não serão mais gerados no processo de fechamento de compra. Eles serão criados em um processamento posterior, depois que os pedidos tiverem todos os dados para serem considerados completos.

Com esta mudança, o sistema de workflow sairá do caminho crítico do fechamento de compra. Assim, o sistema se torna mais resiliente, mitigando riscos ao retirar um processo não obrigatório do caminho do fechamento de compra. Isso tornará o fechamento de compras mais rápido. Dessa maneira, apenas pedidos completos vão ter um processamento posterior dos seus respectivos workflow.

## O que o você precisa fazer

De uma maneira geral, a descontinuação destes status não deve impactar nenhuma integração. Estes status foram criados para serem utilizados pelo próprio sistema da VTEX nas etapas de pré-processamento de compras e possíveis retries. Como não são status relacionados a alguma etapa de negócio ou à operação de entrega de pedidos, eles não precisam ser consumidos por integrações externas.

De qualquer forma, recomendamos que você revise sua integração para confirmar que esses status não estão sendo usados realmente.
