---
title: 'Descobrir o ID de um SKU'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2025-06-25T19:23:02.945Z
publishedAt: 2025-06-25T19:23:02.945Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Management
author: authors_59
slugEN: finding-a-sku-id
legacySlug: descobrir-o-id-de-um-sku
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

Na VTEX, o SKU (Stock Keeping Unit) corresponde tanto à unidade física de estoque do produto quanto ao nível mais específico para lidar com a variação desse produto. Por exemplo, se o produto é uma camiseta, o SKU poderia ser uma camiseta branca P. A partir do ID do SKU, você pode [editar o SKU](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN) ou realizar outras ações.

Para descobrir o ID de um SKU, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. Para exibir os [SKUs adicionados ao produto](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), clique na seta para baixo ao lado do nome do produto.
3. Identifique a sequência numérica que antecede o nome do SKU. Este é o seu ID.

No exemplo abaixo, o produto "Camiseta Corebiz Preta" está associado ao SKU "Camiseta Preta Unisex", e o ID do SKU é `310119261`:

![finding_sku_id_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/produtos-e-skus/descobrir-o-id-de-um-sku_1.png)

## Identificar ID do SKU pela URL

Quando você clica em um SKU e acessa sua [página de edição](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), a URL no seu navegador apresenta o seguinte formato: 

`https://{nomeConta}.myvtex.com/catalog-products/product/{IDproduto}/sku/{IDsku}`

A sequência numérica que aparece ao final da URL corresponde ao ID do SKU.

> ℹ️ Para descobrir o ID de SKUs pela **Catalog API**, utilize o endpoint [List all SKU IDs](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitids).

