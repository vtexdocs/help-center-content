---
title: 'Obter a Lista de Ofertas Combinadas API não funciona corretamente'
id: 7mxrjTDYB8yLeKmQkB5D9h
status: PUBLISHED
createdAt: 2022-03-31T13:49:41.374Z
updatedAt: 2024-07-01T18:48:12.526Z
publishedAt: 2024-07-01T18:48:12.526Z
firstPublishedAt: 2022-03-31T13:49:42.277Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: obter-a-lista-de-ofertas-combinadas-api-nao-funciona-corretamente
locale: pt
kiStatus: No Fix
internalReference: 553456
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API Get Matched Offers List , documentada aqui: https://developers.vtex.com/vtex-rest-api/reference/getofferslist, não está funcionando corretamente quando o usuário tenta inserir os parâmetros de consulta sugeridos.

O resultado traz apenas um produto.



## Simulação



1. Utilizar o API sem nenhum parâmetro: GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers
2. O resultado trará apenas 1 produto, como esperado.
3. Use a consulta param "filas": GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers?rows=20
4. O resultado não vai mudar



## Workaround


Use APIs similares para obter as informações um produto de cada vez:
https://developers.vtex.com/vtex-rest-api/reference/getproductoffers

