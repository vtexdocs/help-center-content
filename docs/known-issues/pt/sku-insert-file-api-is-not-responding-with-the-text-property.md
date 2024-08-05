---
title: "A API SKU Insert File não está respondendo com a propriedade 'Text'."
id: 2rPsyAkpGNCVIM4yGlcMBw
status: PUBLISHED
createdAt: 2024-04-10T14:59:14.341Z
updatedAt: 2024-07-22T19:38:40.304Z
publishedAt: 2024-07-22T19:38:40.304Z
firstPublishedAt: 2024-04-10T14:59:15.416Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-sku-insert-file-nao-esta-respondendo-com-a-propriedade-text
locale: pt
kiStatus: Fixed
internalReference: 1014787
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a API para criar um arquivo sku https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file não está respondendo corretamente à propriedade "Text".

Os dados desse campo são aceitos e enviados ao banco de dados, mas o corpo de resposta de qualquer método do arquivo SKU (GET, PUT, POST) está sempre respondendo ao corpo de resposta JSON que contém a propriedade "Text" como nulo, mesmo quando ela tem um valor salvo.

## Simulação


1 - Usando a API mencionada anteriormente, envie um corpo de solicitação para uma imagem válida que tenha um campo "Text" com um dado não nulo.
2 - Verifique o corpo da resposta dessa API ou use uma solicitação GET para buscar os dados desse arquivo, o campo Text será nulo.
3 - No entanto, se você acessar o administrador da loja, em https://VTEX.myvtex.com/admin/Site/SkuForm.aspx?IdSku=, verá que o texto exibe os dados do campo enviado

## Workaround


Busque dados para o campo Text no administrador, nas planilhas ou nas APIs de pesquisa.





