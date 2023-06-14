---
title: '¿Por qué pedidos no se asociaron a una lista?'
id: 1Ksug2wESM5kpANvTdjJNe
status: PUBLISHED
createdAt: 2019-01-29T18:03:47.228Z
updatedAt: 2019-12-31T14:24:14.246Z
publishedAt: 2019-12-31T14:24:14.246Z
firstPublishedAt: 2019-01-29T18:05:13.013Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_59
slug: por-que-pedidos-no-se-asociaron-a-una-lista
legacySlug: por-que-pedidos-no-se-asociaron-a-una-lista
---

Si los pedidos realizados en su tienda no se asocian a sus respectivas listas, es posible que el botón de compra de su página tenga sido personalizado.

En los botones de finalización de compra que no utilizan el control nativo de VTEX, es necesario pasar el parámetro `&gr={listId}` para asociar el pedido a la lista deseada por el cliente.

Utilizando el [control nativo de VTEX](/es/tutorial/control-del-boton-de-compra) (`<vtex.cmc:BuyButton/>`) para hacer el botón de compra, el pedido se asocia normalmente a la lista deseada.
