---
title: Get seller List respondendo com UrlLogo vazio
id: 1kKsre07DDa56hsEgXnYCz
status: PUBLISHED
createdAt: 2022-02-25T13:28:50.337Z
updatedAt: 2022-11-25T21:42:53.617Z
publishedAt: 2022-11-25T21:42:53.617Z
firstPublishedAt: 2022-02-25T13:28:50.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-seller-list-respondendo-com-urllogo-vazio
kiStatus: Fixed
internalReference: 387508
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o caminho `/api/catalog_system/pvt/seller/list` está respondendo com uma propriedade UrlLogo vazia para todos os vendedores, independentemente de eles terem ou não um arquivo de logotipo válido.




## Simulação


1) Em um vendedor, tente inserir um arquivo de logotipo via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

2) Verifique a resposta de, especificamente a API getSellerList https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller-list.

A propriedade do logotipo URL não será atualizada, apesar dos dados enviados na carga útil. (O API get seller, para obter dados de um vendedor individual, ainda funciona como pretendido: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller)






## Workaround


Obtenção dos dados para vendedores individuais (obtenha o vendedor por ID: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller ).

