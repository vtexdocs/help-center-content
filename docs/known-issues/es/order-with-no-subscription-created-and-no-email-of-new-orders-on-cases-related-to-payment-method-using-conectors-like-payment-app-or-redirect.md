---
title: Pedido sin suscripción Creado y sin correo electrónico de Nuevos Pedidos en Casos relacionados con el método de pago utilizando conectores como Payment App o Redirect.
id: 747TGL3sy1mmM1LnVkEjuO
status: PUBLISHED
createdAt: 2022-02-21T20:54:35.174Z
updatedAt: 2022-11-25T22:03:15.831Z
publishedAt: 2022-11-25T22:03:15.831Z
firstPublishedAt: 2022-05-18T18:43:19.767Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedido-sin-suscripcion-creado-y-sin-correo-electronico-de-nuevos-pedidos-en-casos-relacionados-con-el-metodo-de-pago-utilizando-conectores-como-payment-app-o-redirect
kiStatus: Backlog
internalReference: 529143
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para los pedidos con método de pago que utilizan conectores como la aplicación de pago o la redirección no hay ningún GatewayCallback para Checkout que sea responsable de crear la suscripción y enviar un correo electrónico de nuevo pedido.
Y por eso Checkout no envía el evento Finished Order Group, que indica que el pedido se ha completado.


Así que para los pedidos que utilizan este tipo de método de conectores de pago, hay dos escenarios o uno que incluye ambos.

1 - Orden Comunitaria - No se enviará ningún correo electrónico de la plantilla de la nueva orden.
2 - Orden responsable de generar la suscripción - No creará la suscripción y no enviará el primer correo electrónico de nueva orden.




## Simulación



## Workaround



