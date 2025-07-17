---
title: "Os caracteres de tubulação não são reconhecidos corretamente na nova interface do usuário do catálogo."
id: 4iKfIy23VbkugNknlUkfrm
status: PUBLISHED
createdAt: 2025-02-11T16:20:47.923Z
updatedAt: 2025-02-11T16:20:48.678Z
publishedAt: 2025-02-11T16:20:48.678Z
firstPublishedAt: 2025-02-11T16:20:48.678Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: os-caracteres-de-tubulacao-nao-sao-reconhecidos-corretamente-na-nova-interface-do-usuario-do-catalogo
locale: pt
kiStatus: Backlog
internalReference: 1177654
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar a nova interface do usuário do catálogo, que pode ser acessada em https://mystore.myvtex.com/admin/catalog-products, se o usuário tiver um produto e um SKU com o mesmo nome e/ou parte do mesmo nome, esses dados não serão exibidos se o usuário adicionar um pipe ( | ) ao nome do SKU: qualquer coisa após esse caractere fica oculta.

## Simulação



1. Crie um produto com o nome "Teste para o problema conhecido"
2. Crie uma SKU com o nome "| this is a Test for the known issue" (Este é um teste para o problema conhecido)
3. O nome da SKU, quando exibido na nova interface do usuário do catálogo, será mostrado como "| this is a

## Workaround


-





