---
title: Permitir que en la nueva interfaz de administración de pedidos se devuelvan valores sin relacionar un artículo
id: 4mD1o81lDZEB5y35KRM6LW
status: PUBLISHED
createdAt: 2022-02-08T01:36:09.738Z
updatedAt: 2022-11-25T22:03:00.483Z
publishedAt: 2022-11-25T22:03:00.483Z
firstPublishedAt: 2022-02-08T01:36:10.568Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: permitir-que-en-la-nueva-interfaz-de-administracion-de-pedidos-se-devuelvan-valores-sin-relacionar-un-articulo
kiStatus: Fixed
internalReference: 519576
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para los flujos de devolución dentro de un pedido, es posible indicar qué productos serán devueltos y/o los valores asociados, como los gastos de envío o simplemente una parte del valor del pedido.

En este caso, el problema es que la validación se realiza en la nueva UI que requiere la asociación de al menos un artículo dentro del pedido para poder continuar con el proceso. Esto limita a los usuarios que sólo necesitan devolver valores, es decir, sin asociar productos.



## Simulación



- Para las cuentas que tienen la nueva interfaz de detalles del pedido, sería simplemente entrar en un pedido facturado e intentar una devolución de valor sin seleccionar ningún producto.
- El botón para continuar con el flujo de devolución (**Solicitar reembolso**) estará desactivado hasta que se seleccione al menos uno de los artículos del pedido.



## Workaround


Una solución será utilizar la versión anterior de la interfaz de usuario de los detalles del pedido para registrar **retornos de valores solamente** mientras se resuelve esta limitación en la nueva interfaz de usuario.

