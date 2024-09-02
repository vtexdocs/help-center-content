---
title: "Campo 'Url Logo' no campo 'Update Seller Request not Updating'."
id: 1WmNl3RgesWAUL8rjitJV1
status: PUBLISHED
createdAt: 2022-01-21T15:18:15.945Z
updatedAt: 2022-11-25T21:41:41.226Z
publishedAt: 2022-11-25T21:41:41.226Z
firstPublishedAt: 2022-06-06T18:41:25.659Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: campo-url-logo-no-campo-update-seller-request-not-updating
locale: pt
kiStatus: Fixed
internalReference: 271480
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Tentar atualizar o campo "UrlLogo" na rota /api/catalog_system/pvt/seller não está refletindo nenhuma mudança.

Além disso, o valor na API é sempre retornado como nulo, independentemente do valor definido no campo de interface.



## Simulação



- Envie uma solicitação com um valor válido no campo UrlLogo usando esta API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-post-seller
- Aguarde pelo cache (algo como 5 a 10 minutos) e verifique se este campo UrlLogo retornará como vazio: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller

Observe que o campo do logotipo URL não está sendo atualizado, ele sempre retorna um valor "nulo". (Mesmo depois de 1h+, não há nenhum cache)



## Workaround


n/d

