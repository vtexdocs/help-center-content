---
title: 'Regions API não calcula corretamente o "seller 1" ao solicitar sellers que não são white label'
id: 20sT9AMMi7Ob5IZc7FeiCB
status: PUBLISHED
createdAt: 2022-03-28T20:45:27.687Z
updatedAt: 2022-11-25T21:53:57.112Z
publishedAt: 2022-11-25T21:53:57.112Z
firstPublishedAt: 2022-03-28T20:45:28.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: regions-api-nao-calcula-corretamente-o-seller-1-ao-solicitar-sellers-que-nao-sao-white-label
locale: pt
kiStatus: Backlog
internalReference: 551402
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A API para recuperar a regiãoId para um determinado endereço não está fazendo corretamente a estimativa de remessa solicitação interna para o "vendedor 1", que é incluída ao declarar "tipo de vendedor desejado" para os vendedores sem marca branca.

Como resultado, o "vendedor 1" pode aparecer por não ter cobertura de remessa para o endereço dado.



## Simulação



- para consultar um endereço válido na API "GET /api/checkout/pub/regiões?country=XXX&postalCode=YYYYY&sc=1&desiredSellerType=Default"
- notar que o "vendedor 1" não pode ser devolvido



## Workaround



N/A

