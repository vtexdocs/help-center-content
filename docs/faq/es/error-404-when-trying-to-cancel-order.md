---
title: Error 404 al intentar cancelar pedido. ¿Que hacer?
id: 7re22Xm5MswgmkgKiyiygE
status: PUBLISHED
createdAt: 2018-02-19T19:22:21.391Z
updatedAt: 2023-03-22T20:05:41.355Z
publishedAt: 2023-03-22T20:05:41.355Z
firstPublishedAt: 2018-02-19T19:36:07.899Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slug: error-404-al-intentar-cancelar-pedido
legacySlug: error-404-al-intentar-cancelar-pedido
---

Al intentar cancelar un pedido en el módulo **Pedidos**, a veces el sistema devuelve un error 404. Vamos a ver en este artículo:

- Cómo identificar el error
- Qué hacer cuando ocurre este error

### Cómo identificar el error

Como se explica en el artículo [Verificar detalles de errores en los pedidos](https://help.vtex.com/es/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718), usted debe entrar en el pedido, conforme descrito abajo:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el pedido deseado.
3. Haz clic en `Ver interacciones`.

`La llamada al recurso 'abc' do servicio 'xyz' devolvió el status HTTP '404 (NotFound)'`

Esto quiere decir que la llamada al recurso de un servicio externo devolvió el status HTTP '404 (NotFound)'.

### Qué hacer cuando ocurre este error

Si un mensaje de error como el del ejemplo anterior aparece en el detalle del pedido, es porque la API del servicio integrado a VTEX está devolviendo 404 para el pedido que usted está intentando cancelar.

Es decir, la operación no se puede completar porque el servicio externo no devuelve el resultado esperado, y el status del pedido queda bloqueado en VTEX.

En este caso, es necesario ponerse en contacto con este servicio externo.
