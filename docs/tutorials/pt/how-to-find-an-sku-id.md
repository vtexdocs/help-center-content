---
title: 'Descobrir o ID de um SKU'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2023-03-29T18:17:03.976Z
publishedAt: 2023-03-29T18:17:03.976Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: descobrir-o-id-de-um-sku
locale: pt
legacySlug: descobrir-o-id-de-um-sku
subcategory: pwxWmUu7T222QyuGogs68
---

O ID do SKU é o número que identifica um determinado SKU. Esta informação pode ser utilizada em chamadas de API e em investigações de cenários envolvendo um determinado SKU, por exemplo. 

Este número identificador é extremamente importante para qualquer ação que você deseje tomar em relação a um determinado SKU.

Existem algumas maneiras de descobrir o ID de um SKU:

## Admin VTEX

Para descobrir o ID de um SKU pelo Admin, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Todos os produtos__.
  Você verá uma lista com todos os Produtos e SKUs cadastrados em sua loja. Na coluna central, estão listados todos os SKUs.
4. Vá até o SKU desejado e verifique o número informado entre parênteses. Este número é o ID do seu SKU.

### Exemplo

No exemplo abaixo, o ID do SKU é __18__.

![skuId-1](https://images.contentful.com/alneenqid6w5/3CEFOn0h8Ac6ciGgi6gmEK/2d64944b8added0ec12d5cdc7ebe9d9c/skuId-1.png)

## URL de cadastro do SKU

Para descobrir o ID de um SKU pela URL de cadastro do SKU, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Todos os produtos__. Você verá uma lista com todos os Produtos e SKUs cadastrados em sua loja.
3. Clique no nome do SKU desejado.
4. Observe a URL da página carregada. Você verá uma URL com o seguinte formato: `https://{accountName}.myvtex.com/admin/Site/SkuForm.aspx?IdSku={number}`
 O ID do SKU será o número exibido no lugar de `{number}`.

>❗ Para garantir que itens adicionados ao estoque fiquem disponíveis para venda na loja, o [ ID do SKU ](https://help.vtex.com/pt/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW) não deve conter **o número zero à esquerda**. O sistema não reconhece, por exemplo, IDs no formato `01`, `02`, `021`, pois é esperado o formato  `1`, `2`, `21`.
