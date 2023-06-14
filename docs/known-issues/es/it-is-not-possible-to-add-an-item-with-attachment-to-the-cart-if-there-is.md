---
title: 'No es posible añadir un ítem con anexo al carrito si ya existe otra unidad de este ítem sin anexo en el carrito'
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2022-01-28T16:36:23.041Z
publishedAt: 2022-01-28T16:36:23.041Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slug: no-es-posible-anadir-un-item-con-anexo-al-carrito-si-ya-existe-otra-unidad
kiStatus: Backlog
internalReference: 412041
---

## Sumario

Durante el proceso de compra, si el cliente añade un ítem que ya ha sido incluido en el carrito previamente y que en la nueva inclusión tiene algún [tipo de anexo](https://help.vtex.com/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w), el ítem no se añade al carrito.

Por ejemplo, si durante una compra el cliente añade un SKU al carrito y luego otra unidad del mismo SKU pero con una garantía ampliada, el último ítem añadido (ítem con garantía ampliada) no estará disponible en el carrito. 


## Simulación

Para realizar la simulación, asegúrate de que hay ítems con anexos en tu tienda.

1. Accede a la tienda;
2. Añade un producto al carrito;
3. Vuelve a añadir el producto y incluye un anexo al ítem (una personalización o una garantía ampliada, por ejemplo);
4.  Consulta el carrito y comprueba que no se ha añadido el ítem con el anexo. 

Lo que ocurre es que cuando añades dos ítems iguales pero el segundo contiene un anexo, la plataforma no lo añade al carrito porque interpreta que se trata de un ítem repetido.


## Workaround

No hay ningún workaround para este escenario.


