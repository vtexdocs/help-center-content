---
title: 'Descontinuação dos status dos pedidos de Marketplace waiting-for-seller-confirmation e order-completed'
id: 7jnFwL3cIqwdTu7yb4LXwj
status: CHANGED
createdAt: 2019-06-28T13:57:39.046Z
updatedAt: 2020-11-27T19:40:14.278Z
publishedAt: 2020-04-02T16:47:32.151Z
contentType: updates
productTeam: Channels
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-28-discontinuation-of-waiting-for-seller-confirmation-and-order-completed
locale: pt
legacySlug: descontinuacao-dos-status-dos-pedidos-de-marketplace-waiting-for-seller
announcementImageID: 'undefined'
announcementSynopsisPT: 'Os status dos pedidos de Marketplace `waiting-for-seller-confirmation` e `order-completed` vão ser descontinuados'
---

A partir de 15 de Julho de 2019, os status dos pedidos de Marketplace `waiting-for-seller-confirmation` e `order-completed` vão ser descontinuados.

Os pedidos de origem Marketplace são aqueles relacionados às etapas de fechamento de pedido dentro do ambiente de uma loja. Podemos associar os pedidos que têm esta origem ao processo de checkout, onde o cliente final inclui os dados de pagamento para realizar uma compra.

## Por que a VTEX está tomando esta ação

Os workflows dos pedidos, isto é, o andamento das etapas de entrega dos pedidos, não serão mais gerados no processo de fechamento de compra. Eles serão criados em um processamento posterior, depois que os pedidos tiverem todos os dados para serem considerados completos.

Com esta mudança, o sistema de workflow sairá do caminho crítico do fechamento de compra. Assim, o sistema se torna mais resiliente, mitigando riscos ao retirar um processo não obrigatório do caminho do fechamento de compra. Isso tornará o fechamento de compras mais rápido. Dessa maneira, apenas pedidos completos vão ter um processamento posterior dos seus respectivos workflow.

## O que você precisa fazer

De uma maneira geral, a descontinuação destes status não deve impactar nenhuma integração. Estes status foram criados para serem utilizados pelo próprio sistema da VTEX nas etapas de pré-processamento de compras e possíveis retries. Como não são status relacionados a alguma etapa de negócio, eles não precisam ser consumidos por integrações externas.

De qualquer forma, recomendamos que você revise sua integração para confirmar que esses status não estão sendo usados realmente.

> ℹ️ A ação de tirar o workflow do caminho crítico do fechamento de compra para pedidos de origem Fulfillment já foi realizado. Acesse nosso artigo para saber mais sobre esta [retirada do workflow nos pedidos de origem Fulfillment.](https://help.vtex.com/pt/announcements/descontinuacao-dos-status-dos-pedidos-de-fulfillment-order-completed-order--4AJyu9fJNSKNpL4g4dfgcp)
