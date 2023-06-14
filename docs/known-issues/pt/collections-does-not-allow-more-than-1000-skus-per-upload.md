---
title: 'Cobranças não permitem mais de 1000 SKUs por Upload'
id: 4XC2ZLCsBkQhexRB4YrNMn
status: PUBLISHED
createdAt: 2023-04-19T13:53:02.339Z
updatedAt: 2023-04-19T13:53:02.926Z
publishedAt: 2023-04-19T13:53:02.926Z
firstPublishedAt: 2023-04-19T13:53:02.926Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: cobrancas-nao-permitem-mais-de-1000-skus-por-upload
kiStatus: Backlog
internalReference: 793274
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o upload de itens para o novo módulo de coleções com uma lista que tem mais de 1000 SKUs não é possível, uma vez que o processo terá um timeout.




##

## Simulação



1. Ir para o novo módulo de coleções

2. Selecione a guia "Importar".

3. Utilize uma folha que tenha mais de 1000 SKUs (ou seja, 300 produtos com 50 skus, cada um)

4. A importação gerará um timeout.



##

## Workaround


Carregar gradualmente usando folhas menores, as coleções CMS legadas e/ou a SKU inserida na API de subcoleta https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





