---
title: 'Definir medios de pago mostrados en VTEX Sales App'
id: jHQQcyX3WKeUFidwSjmY1
status: PUBLISHED
createdAt: 2021-09-27T20:54:02.947Z
updatedAt: 2026-03-02T17:16:01.041Z
publishedAt: 2023-07-05T17:16:01.041Z
firstPublishedAt: 2021-09-27T20:57:59.730Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-payment-methods-displayed-on-vtex-sales-app
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: vtex-sales-app-payments
order: 6
---

Después de configurar los medios de pago de tu tienda, es necesario crear filtros para ponerlos a disposición de los clientes en el checkout de **VTEX Sales App**.

Eso requiere incluir un bloque de código JavaScript en el archivo `checkout-instore-custom.js` de tu tienda. Las instrucciones están disponibles en la guía [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).

> ❗ Recomendamos que cualquier modificación en el archivo `checkout-instore-custom.js` sea realizada por una persona desarrolladora, ya que errores en esta etapa pueden causar problemas críticos para la tienda.

## Obtener el ID de la condición de pago

En uno de los pasos de configuración de `checkout-instore-custom.js`, es necesario ingresar los IDs de las condiciones de pago. Para identificarlos, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago** busca la opción deseada. Si lo deseas, filtra los resultados usando la barra de búsqueda.
3. El ID del medio de pago es el código numérico que aparece en la parte superior derecha. En el siguiente ejemplo, el ID de `Mastercard` con pagos de 1 a 10 cuotas es `4`:

![INSERT IMAGE](link)

> ℹ️ La información para definir los medios de pago mostrados en **VTEX Sales App** está disponible en la guía [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).
