---
title: 'Al intentar aprobar el pago, Gestión de Pedidos devuelve el error de "authorize-fulfillment". ¿Que hacer?'
id: 1cbaJI69pSMWkugoUkmQ8O
status: PUBLISHED
createdAt: 2017-12-21T14:02:07.873Z
updatedAt: 2023-03-31T12:47:47.903Z
publishedAt: 2023-03-31T12:47:47.903Z
firstPublishedAt: 2017-12-21T14:35:13.955Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slugEN: when-trying-to-approve-payment-orders-managment-returns-authorize-fulfillment-error-what-to-do
locale: es
legacySlug: al-intentar-aprobar-el-pago-oms-devuelve-el-error-de-authorize-fulfillment-que-hacer
---

Un error común en la aprobación de pago, en el módulo **Pedidos**, es el de falta de stock para determinado SKU incluido en el carrito. Puede ocurrir cuando se aprueba un pedido y la reserva del itam ya se ha liberado anteriormente.

En este caso, al intentar aprobar el pago en **Pedidos**, usted verá el siguiente error:

![error authorize fulfillment](https://images.contentful.com/alneenqid6w5/5Wvwem2kucqsOIYKq4WW00/23b0ffb4209565da148382c3299e2bac/error_authorize_fulfillment.png)

Para confirmar que el problema es este, en la [página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), haga clic en `Ver interacciones` para ver los detalles del pedido.

Si hay un error como "La reserva solicitada *00-abc* no pudo ser garantizada para el pedido *00-xyz*", es porque algun de los SKUs incluidos en el carrito no tiene stock disponible, lo que inviabiliza que la compra sea aprobada. En este caso, corregir el inventario debe permitir que el pedido siga su flujo.

Sepa más en [Verificar detalles de errores en los pedidos](/es/faq/como-verificar-detalles-de-errores-en-los-pedidos).
