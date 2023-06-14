---
title: 'A API de Inserção/Atualização de Produto permite "\n" no campo de textoLink.'
id: 5TfUw5tTxBEu9HkL3ypBKw
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.325Z
updatedAt: 2022-11-25T21:44:48.430Z
publishedAt: 2022-11-25T21:44:48.430Z
firstPublishedAt: 2022-06-28T16:55:54.138Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-de-insercaoatualizacao-de-produto-permite-n-no-campo-de-textolink
kiStatus: Backlog
internalReference: 486459
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, as APIs para a inserção ou atualização de produtos do Catálogo permitem o caractere "\n" no textoLink





## Simulação


1) Use a API do produto GET para buscar dados de um produto https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-get-product

2) Atualizar os dados do produto via API inserindo um caractere "\n" no campo textLink: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-put-product

3) Abra a URL do produto dado, você receberá uma resposta de 404.





## Workaround


Ao salvar estes dados via UI (Produto.aspx), os dados são salvos corretamente, permitindo que a página do produto seja renderizada corretamente.

