---
title: 'Los pedidos con un "Error de creación" permanecen atascados en estado "cancelado".'
id: gP4woBDBX0FsUC6sdMHED
status: PUBLISHED
createdAt: 2024-08-29T20:28:41.531Z
updatedAt: 2025-04-08T12:55:56.231Z
publishedAt: 2025-04-08T12:55:56.231Z
firstPublishedAt: 2024-08-29T20:28:42.413Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: los-pedidos-con-un-error-de-creacion-permanecen-atascados-en-estado-cancelado
locale: es
kiStatus: Backlog
internalReference: 1089344
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Escenario1:
En algunas órdenes que presentan un error en el momento de la creación (**Creation Error -** `cancellationData.reason`), se espera que estas órdenes alcancen automáticamente el estado **Cancelled**, ya que son órdenes que estaban incompletas de alguna forma (_aunque la_ _propiedad_ `isCompleted` _sea_ `true`), o con un error en la comunicación entre los sistemas, principalmente en la comunicación con el Gateway, y acaban siendo canceladas.


    "cancellationData": {"requestedByUser": false, "requestedBySystem": true, "requestedBySellerNotification": null, "requestedByPaymentNotification": null, "reason": "Error de creación", "cancellationDate": "2024-08-13T17:40:23.8875213Z", "cancellationRequestId": null},


En este caso, el problema es que actualmente, algunas órdenes con **error de creación permanecen atascadas en estado "cancelado "**, sin poder avanzar a cancelación.


    curl --location 'https://.vtexcommercestable.com.br/api/orders/pvt/document/' \--header 'Accept: application/json' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: ***' \--header 'Cookie: janus_sid=71df74ec-7639-443a-ad33-4f9de2053cba'



    "status": "cancel",



    "workflowData". "instances". "name": "Mercado""workflowData". "instances". "currentStepName": "end""workflowData". "instances". "name": "Fulfillment""workflowData". "instances". "currentStepName": "cancelar"


Lo importante en estos casos es poder validar que la transacción ya ha sido cancelada y que no hay problemas con la reserva de los artículos del pedido.

Escenario 2:
En el escenario 2, el pedido pudo continuar, incluso después de recibir la solicitud de cancelación a través de Checkout/gateway. En este escenario, el pedido está bloqueado en "Comprobando factura", mientras que la transacción está en estado "Cancelando".
Como resultado, no es posible continuar con el pedido de factura, ni tampoco cancelarlo.


##

## Simulación



Si el pedido está en estado "**cancelado**" y no ha avanzado a "**cancelado**":

1. Realiza un GET del pedido y valida la siguiente información:
  - "status"
  - "cancellationData"
  - "workflowData"
2. Si la información del primer paso es la misma que la mostrada en el resumen de este problema, es porque su pedido no podrá pasar al estado "**cancelado**".



## Workaround



Por el momento no disponemos de una solución para este problema.






