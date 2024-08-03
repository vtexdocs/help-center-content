---
title: 'Cotação de frete MELI para múltiplos officialStoreIDs'
id: 4KdPYtRbDdsBrn2k0dz7oc
status: PUBLISHED
createdAt: 2024-02-07T11:19:11.169Z
updatedAt: 2024-06-19T11:43:56.663Z
publishedAt: 2024-06-19T11:43:56.663Z
firstPublishedAt: 2024-02-07T11:19:12.139Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: cotacao-de-frete-meli-para-multiplos-officialstoreids
locale: pt
kiStatus: Fixed
internalReference: 978358
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, temos um problema com a integração do MELI em relação à API de cotação de frete do MELI, que se aplica apenas a vendedores que usam vários officialStoreIDs no MELI, mas usam apenas uma conta na VTEX usando o mesmo sellerID no MELI

## Simulação



Se esse cenário for aplicado, a cotação de frete do MELI retornará um erro e o MELI redirecionará o vendedor para a planilha de frete em vez de usar a API de frete.

## Workaround


manter a planilha de frete atualizada para evitar inconsistências entre a VTEX e o MELI





