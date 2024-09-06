---
title: 'Produtos no `product-list` duplicam quando se aumenta a quantidade e possuem `itemAttachment` '
id: 2rKPKD21uXZ8iSIq8wNiVf
status: PUBLISHED
createdAt: 2021-09-17T14:25:17.638Z
updatedAt: 2022-12-22T20:41:07.695Z
publishedAt: 2022-12-22T20:41:07.695Z
firstPublishedAt: 2021-09-17T14:30:26.084Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout,VTEX IO
slug: produtos-no-productlist-duplicam-quando-se-aumenta-a-quantidade-e-possuem-itemattachment
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Se uma loja usa o componente [`product-list`](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-list) do [Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-3), usado no [`minicart`](https://vtex.io/docs/components/all/vtex.minicart@2.61.1/), itens do carrinho podem ser duplicados quando se aumenta a quantidade de um item que tenha [anexo](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#) (`itemAttachment`).

Isso acontece porque a requisição de API que atualiza itens de carrinho tem o comportamento padrão de `noSplitItem` como `false`.

## Simulação

1. Na sua loja, adicione ao carrinho um item que tenha opção de anexo;
2. Inclua um anexo no item adicionado ao carrinho;
3. Aumente a quantidade desse item com a requisição de atualização de itens do carrinho, enviando o body a seguir:
    ```json
    {
        "orderItems": [
            {
                "index": 0,
                "quantity": 2
            }
        ]
    }
    ```
4. Confira que a API retorna a lista de itens com o produto duplicado, ao invés de aumentar a quantidade.

## Workaround

Atualmente não existe workaround.

