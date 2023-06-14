---
title: API do catálogo Criar arquivo SKU só funciona com uma URL
id: 2rbU28Rw8AESiAvzuc6cWf
status: PUBLISHED
createdAt: 2022-10-26T13:30:57.669Z
updatedAt: 2022-11-25T21:41:36.443Z
publishedAt: 2022-11-25T21:41:36.443Z
firstPublishedAt: 2022-10-26T13:30:58.226Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: api-do-catalogo-criar-arquivo-sku-so-funciona-com-uma-url
kiStatus: Fixed
internalReference: 503153
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O Catálogo API Criar arquivo SKU só funciona com a Opção 1 ( envie uma imagem através de URL)
`https://{accountName}.{environment}.``com.br/api/catalog/pvt/stockkeepingunit/skuId/file`



## Simulação



- Ir para https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-file#catalog-api-post-sku-file
- Em `BODY PARAMS `selecione a `Opção 2` e carregue uma imagem
- Copie a CURL e envie o POST
- Receba a mensagem de resposta:

    {"Mensagem": "Campo Url é obrigatório"}


## Workaround


Não há solução

