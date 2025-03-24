---
title: 'Productos en el `product-list` se duplican cuando se aumenta la cantidad y tienen un `itemAttachment`'
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
slugEN: products-in-the-productlist-that-have-an-itemattachment-duplicate-when-the-quantity-is-increased
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Si una tienda utiliza el componente [`product-list`](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-list) de [Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-3), utilizado en el [`minicart`](https://vtex.io/docs/components/all/vtex.minicart@2.61.1/), los ítems del carrito pueden duplicarse al aumentar la cantidad de un ítem que tiene un [anexo](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#) (`itemAttachment`).

Esto se debe a que la solicitud de API que actualiza los ítems del carrito tiene por defecto el comportamiento de `noSplitItem` como `false`.

## Simulación

1. En tu tienda, añade al carrito un ítem que tenga la opción de anexo;
2. Incluye un anexo en el ítem añadido al carrito;
3. Aumenta la cantidad de este ítem con la solicitud de actualización de ítems del carrito, enviando el siguiente cuerpo:
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
4. Observa que la API devuelve la lista de ítems con el producto duplicado, en vez de aumentar la cantidad.

## Workaround

No hay ningún workaround para este escenario.

