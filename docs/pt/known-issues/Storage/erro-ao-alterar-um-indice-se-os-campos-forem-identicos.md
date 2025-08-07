---
title: "Erro ao alterar um índice se os campos forem idênticos."
id: Ckic7QH3kKyW3IA92A3Cm
status: PUBLISHED
createdAt: 2023-07-03T18:48:49.070Z
updatedAt: 2023-07-03T18:48:49.971Z
publishedAt: 2023-07-03T18:48:49.971Z
firstPublishedAt: 2023-07-03T18:48:49.971Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: erro-ao-alterar-um-indice-se-os-campos-forem-identicos
locale: pt
kiStatus: Backlog
internalReference: 854634
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Uma atualização de um índice de esquema pode resultar em um erro 500 Internal Server quando não há alterações a serem feitas, o que significa que os valores de campo são idênticos aos atuais.
A execução de uma solicitação GET na API para verificar os índices revela que nenhuma atualização é necessária, pois o índice é idêntico ao corpo fornecido na solicitação PUT.

## Simulação



1. Envie uma solicitação PUT para atualizar um índice de esquema por meio da API, fornecendo a carga útil necessária no corpo da solicitação.
2. Verifique a resposta da API e observe se ela retorna um **500 Internal Server Error**.
3. Execute uma solicitação GET subsequente na API para recuperar os índices de esquema e compare-os com o corpo fornecido na solicitação PUT

## Workaround


N/A

