---
title: 'LINK SERVICE VALUES TO SKUS planilha que retorna apenas os serviços ativos'
id: 1FqAokiJLWwWnsPodyTMKY
status: PUBLISHED
createdAt: 2023-08-23T17:51:58.839Z
updatedAt: 2023-08-23T17:51:59.677Z
publishedAt: 2023-08-23T17:51:59.677Z
firstPublishedAt: 2023-08-23T17:51:59.677Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: link-service-values-to-skus-spreadsheet-only-returning-active-services
locale: pt
kiStatus: Backlog
internalReference: 886486
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao exportar valores de serviços de uma categoria específica no admin, o resultado está trazendo apenas os serviços ativos. Não permitindo que o comerciante ative serviços anteriormente inativos por planilha.

## Simulação



1. Crie um serviço e associe-o a um sku;
2. Inative o serviço no sku;
3. Exportar a planilha LINK SERVICE VALUES TO SKUS;
4. Verifique se o serviço anterior não foi devolvido

## Workaround


Use a API ou vá diretamente para o sku - administrador de serviços para atualizar o serviço:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-





