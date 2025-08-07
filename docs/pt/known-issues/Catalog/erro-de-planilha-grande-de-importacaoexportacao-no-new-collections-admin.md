---
title: "Erro de planilha grande de importação/exportação no New Collections Admin"
id: 6xbBVR2Z7CCpIC0iCAKHgN
status: PUBLISHED
createdAt: 2023-02-16T19:04:08.298Z
updatedAt: 2023-12-12T21:08:23.871Z
publishedAt: 2023-12-12T21:08:23.871Z
firstPublishedAt: 2023-02-16T19:04:08.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: erro-de-planilha-grande-de-importacaoexportacao-no-new-collections-admin
locale: pt
kiStatus: Fixed
internalReference: 362017
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o carregamento de itens para o novo módulo de coleções com uma lista com mais de 1.000 SKUs é impossível, pois o processo atingirá o tempo limite. Ele retorna uma resposta de erro não específica:
"Seu arquivo não foi importado. Tente importar esse arquivo novamente.`"

## Simulação



1. Vá para o novo módulo de coleções
2. Selecione a guia "Import" (Importar)
3. Use uma planilha que tenha mais de 1.000 SKUs (ou seja, 300 produtos com 50 SKUs cada)
4. A importação gerará um tempo limite

## Workaround


Faça o upload gradualmente usando planilhas menores, as coleções legadas do CMS e/ou a API de inserção de SKU na subcoleção https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





