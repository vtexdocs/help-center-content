---
title: 'Cancelación del pedido solicitada por el cliente'
id: 3wEI6DUNtecooG2Ki4Akqo
status: PUBLISHED
createdAt: 2019-01-24T21:42:57.276Z
updatedAt: 2024-04-01T15:51:58.098Z
publishedAt: 2024-04-01T15:51:58.098Z
firstPublishedAt: 2019-01-24T21:42:57.707Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-cancellation-requested-by-the-customer
legacySlug: como-funciona-la-cancelacion-de-pedido-solicitada-por-el-cliente
locale: es
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Hay situaciones en las que los clientes pueden solicitar la cancelación de un pedido. Puede ser la [cancelación automática dentro de la ventana](/es/tutorial/cancelacion-de-pedido-solicitada-por-el-cliente--3wEI6DUNtecooG2Ki4Akqo#cancelacion-en-la-ventana-de-cancelacion) de **cancelación** o, después de ese periodo, la cancelación [aprobada por el administrador de la tienda](/es/tutorial/cancelacion-de-pedido-solicitada-por-el-cliente--3wEI6DUNtecooG2Ki4Akqo#cancelacion-aprobada-por-el-administrador-de-la-tienda). 

> ❗ Después que se cancela el pedido, no se le puede cambiar el status.

> ⚠️ No es posible [cancelar](/es/docs/tutorials/como-cancelar-pedido) pedidos [parcialmente facturados](/es/docs/tracks/facturas-parciales). Si el cliente desea sustituir o remover ítems del pedido, es posible [modificar el pedido](/es/docs/tutorials/cambiar-items-de-un-pedido-finalizado).

## Cancelación en la ventana de cancelación

Cuando el cliente solicita la cancelación durante la [ventana de cancelación](/es/docs/tutorials/configurar-el-tiempo-de-espera-para-cancelar-el-pedido), el pedido se cancela automáticamente sin necesidad de autorización de la tienda. Hasta ese momento, según el [flujo del pedido](/es/docs/tutorials/flujo-y-status-de-pedidos), el administrador de la tienda aún no ha realizado ninguna acción sobre ese pedido.

* Esta acción la realiza el cliente en __Mis pedidos__, al hacer clic en `Solicitar cancelación del pedido`.

> ℹ️ Cuando el cliente solicita la cancelación del pedido durante la ventana de cancelación, la notificación de esta acción se envía únicamente al usuario con [perfil de acceso](/es/docs/tutorials/roles) de Titular de la cuenta (usuario master).

## Cancelación aprobada por el administrador de la tienda

Este es el caso cuando el cliente solicita la cancelación fuera de la ventana de cancelación presentando una justificación a la tienda. Esto requiere que el administrador de la tienda apruebe la cancelación. Para que el administrador de la tienda realice la aprobación, la plataforma presenta la solicitud de cancelación a la tienda de las siguientes maneras:

* En la pantalla de flujo de pedidos, la tienda recibe la solicitud de cancelación con el motivo indicado por el cliente y el status el pedido cambia a «Cancelación solicitada». 
* La plataforma envía un _email_ para informar a la tienda sobre la solicitud de cancelación. Esta es una tarea de [VTEX DO](/es/tutorial/vtex-do--tutorials_203) que se llama `Cancelación solicitada`. Con VTEX DO, el administrador de la tienda gestiona las solicitudes de cancelación que están pendientes. 

El administrador de la tienda debe aprobar o denegar la cancelación. Si el administrador de la tienda no aprueba la cancelación, recomendamos informar al cliente que no se puede cancelar el pedido.

Incluso si el cancelamiento solicitado por el cliente es negado por el administrador de la tienda utilizando [VTEX DO](/es/docs/tutorials/vtex-do-interface), es necesario que el administrador proceda con la [facturación](/es/docs/tutorials/como-facturar-manualmente-un-pedido) del pedido, ya que esto es lo que hace que el pedido siga su curso.

> ⚠️ Si la funcionalidad [Cambio de pedido](/es/tutorial/cambio-de-pedido--2IK9mwQjBKseQmE8K8saO8#como-activar-la-funcionalidad) está activada, los pedidos pueden ser modificados o cancelados en cualquier momento, incluso después de la ventana de cancelación.

## Motivo de la cancelación

Al cancelar el pedido, el consumidor puede informar el motivo de la cancelación. Esta configuración es personalizable, con algunas opciones por defecto. 

Para cambiar las opciones, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**, o escribe *Checkout* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Storefront*.
2. En la tarjeta del sítio web deseado, haga clic en el ícono engrenaje.
3. Haz clic en la pestaña __Pedidos__.
4. Seleccione la pestaña del idioma deseado.
5. Edite las opciones disponibles o agregue una nueva opción haciendo clic en "Agregar otro motivo".
6. Haga clic en __Guardar__.

## Artículos relacionados

- [¿Por qué un pedido fue cancelado?](/es/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493)
- [Configurar el tiempo de espera para cancelar el pedido](/es/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido)
- [¿Por qué el pedido fue cancelado en VTEX y no en el marketplace?](/es/faq/por-que-el-pedido-fue-cancelado-en-la-vtex-e-no-en-el-marketplace--frequentlyAskedQuestions_678)
- [Cambio de pedido](/es/docs/tutorials/cambio-de-pedido)

