---
title: 'O Matcher não funciona como esperado quando o nome do Produto/SKU contém caracteres especiais'
id: 1kRjFExdSRMAJMgFgC7Bbj
status: PUBLISHED
createdAt: 2023-10-19T15:37:17.652Z
updatedAt: 2023-10-19T15:37:18.601Z
publishedAt: 2023-10-19T15:37:18.601Z
firstPublishedAt: 2023-10-19T15:37:18.601Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: o-matcher-nao-funciona-como-esperado-quando-o-nome-do-produtosku-contem-caracteres-especiais
locale: pt
kiStatus: Fixed
internalReference: 736164
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao integrar produtos que têm caracteres especiais no nome, como `. - + # /` , o Matcher dá uma pontuação de 50% e faz com que os produtos fiquem em Pending. Com isso, os produtos dependem de aprovação manual ou via API.


## Simulação



1. Por meio de um vendedor VTEX, envie uma SKU que contenha caracteres especiais no nome
2. Na página SKU Received (SKU Recebida), veja que a SKU em questão terá uma pontuação de 50%, na guia Pending (Pendente)



## Workaround


Para resolver o cenário, é indicado que o vendedor altere o nome do SKU/produto, removendo os caracteres especiais. Se isso não for possível, o marketplace pode usar a API https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/api.vtex.com/-accountName-/suggestions/matches/action/-actionName- para fazer a correspondência entre os produtos





