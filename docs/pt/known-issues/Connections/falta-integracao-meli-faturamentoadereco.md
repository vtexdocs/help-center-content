---
title: "Falta integração MELI FaturamentoAdereço"
id: 7xYni5vYpSn6bicq4e6f2K
status: PUBLISHED
createdAt: 2023-03-15T13:06:41.866Z
updatedAt: 2023-03-15T13:06:42.285Z
publishedAt: 2023-03-15T13:06:42.285Z
firstPublishedAt: 2023-03-15T13:06:42.285Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: falta-integracao-meli-faturamentoadereco
locale: pt
kiStatus: Backlog
internalReference: 771418
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente em nossa integração nativa ao Mercado Livre, não estamos trazendo o BillingAddress fornecido pela MELI. Alguns vendedores precisam dessa informação dentro da OMS Get Orders, a fim de enviar os valores corretos para a MELI no fluxo da fatura.


##

## Simulação



Dentro da OMS GET Order estamos atualmente trazendo apenas o endereço de envio, e não o BillingAddress, isto pode ser visto dentro do GET Order API


##

## Workaround


n/d





