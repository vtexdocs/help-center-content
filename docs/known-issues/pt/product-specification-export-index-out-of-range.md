---
title: 'Exportação de Especificação do produto retorna Index Out of Range'
id: 2Qu9QCZvfcjmNfAh3uvPkf
status: PUBLISHED
createdAt: 2022-02-25T12:22:04.014Z
updatedAt: 2022-11-25T21:45:45.357Z
publishedAt: 2022-11-25T21:45:45.357Z
firstPublishedAt: 2022-02-25T12:22:04.405Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: exportacao-de-especificacao-do-produto-retorna-index-out-of-range
locale: pt
kiStatus: Backlog
internalReference: 481095
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar exportar, utilizando a IU: , dados das especificações do produto, se eles não tiverem campos válidos registrados diretamente na categoria a ser exportada, o processo falhará com uma mensagem "Index out of Range".





## Simulação


1) Ir para a IU de exportação de SPecification do produto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Clique com o botão direito em uma categoria na qual não há nenhum campo de especificação de produto registrado

3) Uma mensagem de erro de "Index out of bonds" será solicitada.






## Workaround


Exportar os pais ou filhos da categoria desejada

ou

Use a API de obtenção de especificações de produto para buscar dados: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification

