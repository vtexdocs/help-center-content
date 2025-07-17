---
title: "Catalog Inativar o producttid usando a API não está inativando o SKU"
id: 4RLMpCxYNtCz4WkAiwL8ws
status: PUBLISHED
createdAt: 2025-01-03T17:38:07.670Z
updatedAt: 2025-07-17T19:33:18.513Z
publishedAt: 2025-07-17T19:33:18.513Z
firstPublishedAt: 2025-01-03T17:38:08.681Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-inativar-o-producttid-usando-a-api-nao-esta-inativando-o-sku
locale: pt
kiStatus: Backlog
internalReference: 1157944
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A inativação do producttid usando a API não está inativando a SKU
O produto continua disponível no PDP

## Simulação



✅️ Produto inativo
❌️ SKU UI ativo
❌️ Sku disponível no PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://vtexhelp.zendesk.com/attachments/token/FVMLGum8BwYRG5crfDPmb0Gef/?name=image.png

## Workaround


Sempre que o produto inteiro, incluindo seus SKUs, quiser ser inativado, o comerciante precisará inativar os SKUs




