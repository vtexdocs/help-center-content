---
title: "Pedidos MELI FULL não criam fatura na VTEX"
id: 6SNkDcqCWeDDPm01RrM0FQ
status: PUBLISHED
createdAt: 2024-02-05T11:14:30.020Z
updatedAt: 2024-02-05T11:14:31.187Z
publishedAt: 2024-02-05T11:14:31.187Z
firstPublishedAt: 2024-02-05T11:14:31.187Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: pedidos-meli-full-nao-criam-fatura-na-vtex
locale: pt
kiStatus: Backlog
internalReference: 976614
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente temos um problema com os pedidos MELI FULL, se o pedido apresentar algum erro durante a criação na VTEX, como erro de SLA, falta de estoque, etc., o processo de criação da fatura na VTEX não é executado. Basicamente, o XML dentro da embeddedInvocie do OMS não está sendo criado nesses casos.

## Simulação



Se a ordem apresentar algum erro durante sua criação, o XML não será colocado dentro do VTEX OMS

## Workaround


Para evitar esse erro, as ordens não devem ser armazenadas no VTEX Bridge, para isso, sempre configure os SLAs necessários para evitar esse erro





