---
title: "A simulação de checkout com uma grande quantidade do mesmo item recebe um tempo limite de logística"
id: 753MDZbcyN9BTHAaSTpOlY
status: PUBLISHED
createdAt: 2024-06-18T12:42:44.404Z
updatedAt: 2024-06-18T12:42:45.419Z
publishedAt: 2024-06-18T12:42:45.419Z
firstPublishedAt: 2024-06-18T12:42:45.419Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: a-simulacao-de-checkout-com-uma-grande-quantidade-do-mesmo-item-recebe-um-tempo-limite-de-logistica
locale: pt
kiStatus: No Fix
internalReference: 330775
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Temos um erro no serviço de logística ao tentar simular uma compra com milhares de unidades da mesma SKU. Esse erro ocorre porque a solicitação para dividir o pacote leva muito tempo.

O detalhe do erro na API é: "A operação foi cancelada".

## Simulação



1. Tente fazer uma **Simulação de checkout** ou uma simulação no **Carrinho de compras** com milhares de unidades do mesmo SKU (como 50 mil)
2. Analise os detalhes na resposta da API e você provavelmente verá um erro ao processar essa solicitação (**timeout**

## Workaround


Recomendamos aumentar os limites de pacote da transportadora para acomodar as unidades em um único pacote. Isso forneceria uma solicitação mais rápida e não retornaria um tempo limite.






