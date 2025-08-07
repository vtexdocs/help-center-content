---
title: "Erro de deadlocked ao usar as APIs do Catalog"
id: 6A4jBKBKIzn87mxNQJ4YQN
status: PUBLISHED
createdAt: 2023-07-14T18:29:11.937Z
updatedAt: 2023-07-19T14:16:39.062Z
publishedAt: 2023-07-19T14:16:39.062Z
firstPublishedAt: 2023-07-14T18:29:13.088Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: erro-de-deadlocked-ao-usar-as-apis-do-catalog
locale: pt
kiStatus: Backlog
internalReference: 862626
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O uso constante de algumas APIs de catálogo, como "Add SKU to Subcollection" (Adicionar SKU à subcoleção) ou a tentativa de vincular produtos por meio do módulo de sugestões pode causar erros de bloqueio para o comerciante.

Os erros de deadlocked podem ocorrer quando há uma simultaneidade na gravação dos dados no banco de dados. Portanto, quando se solicita muito da API em um curto período de tempo, esses erros são mais evidentes.

## Simulação



1. Use, por exemplo, a API Add SKU to Subcollection (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) para adicionar muitos skus a uma coleção em um curto período de tempo;
2. Verifique se podem ocorrer erros, como um deadlocked

## Workaround


Tente fazer menos solicitações por minuto.





