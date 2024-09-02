---
title: 'Informações do canal de vendas divergentes entre a interface do usuário e a API'
id: 66bWccTAGpRbodBXvmIlHK
status: PUBLISHED
createdAt: 2023-05-04T15:30:18.265Z
updatedAt: 2023-05-08T18:33:43.359Z
publishedAt: 2023-05-08T18:33:43.359Z
firstPublishedAt: 2023-05-04T15:30:18.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: informacoes-do-canal-de-vendas-divergentes-entre-a-interface-do-usuario-e-a-api
locale: pt
kiStatus: Backlog
internalReference: 802560
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, as informações sobre o canal de vendas podem ser diferentes, dependendo de onde o cliente está verificando.

## Simulação


Esse cenário não acontece o tempo todo. Geralmente é quando a indexação falha ou não é uma indexação recente.

Verifique o canal de vendas ao qual o produto pertence por meio da interface do usuário.
Verifique o canal de vendas ao qual o produto pertence por meio da API:
https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}
 ![](https://vtexhelp.zendesk.com/attachments/token/F8f1Y1fSQVsq5JubtoILmeZjz/?name=image.png)

## Workaround


Indexar o produto.





