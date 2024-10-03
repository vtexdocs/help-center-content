---
title: "Erro 'Field Group not found in the category' ao criar uma especificação via API usando um grupo que pertence à categoria principal"
id: 2xkVJw4JcfdhgV1Ag2HdGu
status: PUBLISHED
createdAt: 2024-10-01T19:01:14.594Z
updatedAt: 2024-10-01T19:01:15.471Z
publishedAt: 2024-10-01T19:01:15.471Z
firstPublishedAt: 2024-10-01T19:01:15.471Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-field-group-not-found-in-the-category-when-creating-specification-via-api-using-group-that-belongs-to-parent-category
locale: pt
kiStatus: Backlog
internalReference: 1109219
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


É possível criar uma especificação usando a seguinte API:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification

O campo "FieldGroupId" é o ID do grupo de especificações que contém a nova especificação. No entanto, quando o grupo pertence a uma categoria pai, que não é a categoria usada para criar a especificação, o erro Field Group not found in the category é retornado.

## Simulação



1. Criar uma categoria de grupo em uma categoria pai
2. Use a API acima para criar uma nova especificação em uma categoria filha
3. Preencha o campo FieldGroupId com o groupId da categoria pai
4. Verifique se o erro aparece

## Workaround


Crie a especificação por meio da interface do usuário, crie a especificação na categoria principal ou crie um grupo na categoria secundária a ser usada.





