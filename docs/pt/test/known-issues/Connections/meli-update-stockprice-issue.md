---
title: 'Atualização do MELI Problema de estoque/preço'
id: 7LQ81vG5nsbBn4Wj7Z9VJe
status: PUBLISHED
createdAt: 2023-12-12T10:22:28.961Z
updatedAt: 2024-01-10T17:51:59.853Z
publishedAt: 2024-01-10T17:51:59.853Z
firstPublishedAt: 2023-12-12T10:22:29.656Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: atualizacao-do-meli-problema-de-estoquepreco
locale: pt
kiStatus: Fixed
internalReference: 939329
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, temos um cenário muito específico que afeta alguns casos de SKUs que não conseguem atualizar o estoque no MELI.

## Simulação



O que acontece é que, em alguns casos, o campo seller_custom_field, que deveria ser preenchido com o SKU da VTEX, está realmente em branco e, portanto, a integração não consegue atualizar o estoque do MELI nesses casos

## Workaround


Preencha a planilha de migração com esses casos e envie para a equipe de produto para definir nosso SKU dentro do campo seller_custom_field.





