---
title: "API Match Multiple Received SKUs retornando 'Invalid sellerId'"
id: 60aL2Chds0Jo3m6XMkxmnG
status: PUBLISHED
createdAt: 2023-10-17T16:26:27.980Z
updatedAt: 2023-10-17T16:26:40.592Z
publishedAt: 2023-10-17T16:26:40.592Z
firstPublishedAt: 2023-10-17T16:26:28.466Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: api-match-multiple-received-skus-retornando-invalid-sellerid
locale: pt
kiStatus: Fixed
internalReference: 506660
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API Match Multiple Received SKUs (doc: https://developers.vtex.com/vtex-rest-api/reference/match-received-skus#matchmultiple) está retornando a mensagem de erro "Invalid sellerId" para qualquer tentativa de aprovação de novos produtos, mesmo que o vendedor esteja corretamente ativo no marketplace.

## Simulação


1. Copie o curl da documentação anterior;
2. Cole-o em sua ferramenta de API (postman, insomnia...);
3. Substitua os valores do objeto pelos dados do sku que você está tentando aprovar;
4. Verifique se o sellerId está ativo e é válido no gerenciamento de vendedores do marketplace;
5. A resposta da API não deve ser:

    "errorResponse": {"Code": 33, "Message": "Invalid sellerId" }


## Workaround


A API Match Received SKUs individually está funcionando corretamente e pode substituir a API anterior para aprovar novos produtos um a um.






