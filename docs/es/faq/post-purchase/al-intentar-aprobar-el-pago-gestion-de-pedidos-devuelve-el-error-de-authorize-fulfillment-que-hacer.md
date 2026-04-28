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

![error authorize fulfillment](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/post-purchase/al-intentar-aprobar-el-pago-gestion-de-pedidos-devuelve-el-error-de-authorize-fulfillment-que-hacer_1.png)

Para confirmar que el problema es este, en la [página de detalles del pedido](/es/docs/tutorials/pagina-de-detalles-del-pedido), haga clic en `Ver interacciones` para ver los detalles del pedido.

Si hay un error como "La reserva solicitada *00-abc* no pudo ser garantizada para el pedido *00-xyz*", es porque algun de los SKUs incluidos en el carrito no tiene stock disponible, lo que inviabiliza que la compra sea aprobada. En este caso, corregir el inventario debe permitir que el pedido siga su flujo.

Sepa más en [Verificar detalles de errores en los pedidos](/es/docs/tutorials/como-verificar-detalles-de-errores-en-los-pedidos).
