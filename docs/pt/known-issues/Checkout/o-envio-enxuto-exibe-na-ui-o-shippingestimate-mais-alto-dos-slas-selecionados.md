---
title: 'O envio enxuto exibe na UI o shippingEstimate mais alto dos SLAs selecionados'
id: 1EYi8qK6pHwBU9Yqlxa9jm
status: PUBLISHED
createdAt: 2024-10-30T16:05:02.385Z
updatedAt: 2024-10-30T16:05:03.305Z
publishedAt: 2024-10-30T16:05:03.305Z
firstPublishedAt: 2024-10-30T16:05:03.305Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
locale: pt
kiStatus: Backlog
internalReference: 1126188
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em carrinhos que têm uma fenda de pacote entre a entrega e a retirada, o Lean Shipping exibe no UI o shippingEstimate mais alto dos SLAs selecionados. Por exemplo: há quatro produtos no carrinho e três deles têm a retirada como SLA selecionado e 4hs de shippingEstimate. O último item será entregue pela loja e tem 3bd de shippingEstimate. Na interface de usuário do checkout, o shippingEstimate será:

-pickup package: 3bd
-pacote de entrega: 3bd

A estimativa de remessa para retirada é de 3bd, mesmo que essa não seja a informação correta.

## Simulação


1- Crie um carrinho com produtos do mesmo vendedor e canais de entrega distintos.
2- Insira o código postal
3- Tente selecionar um ponto de coleta

## Workaround


N/A





