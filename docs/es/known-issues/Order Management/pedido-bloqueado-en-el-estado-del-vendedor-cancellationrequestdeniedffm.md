---
title: "Pedido bloqueado en el estado del vendedor cancellation-request-denied-ffm"
id: 5hBeTQMKmo5C63QRAOSvT2
status: PUBLISHED
createdAt: 2024-03-22T17:50:37.946Z
updatedAt: 2024-03-22T17:50:38.822Z
publishedAt: 2024-03-22T17:50:38.822Z
firstPublishedAt: 2024-03-22T17:50:38.822Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedido-bloqueado-en-el-estado-del-vendedor-cancellationrequestdeniedffm
locale: es
kiStatus: Backlog
internalReference: 1004978
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hemos identificado que algunos vendedores, en la estructura de vendedores y marketplace de VTEX, cuando solicitan la cancelación, luego deniegan esta cancelación a través de la UI, o llaman a la API "cancellation-request-denied-ffm", esto es como si denegaran la propia solicitud de cancelación, por alguna razón, la solicitud de denegar la cancelación se solapa con la solicitud de cancelar.
Como resultado, el pedido se queda atascado en el vendedor, en el estado "cancellation-request-denied-ffm".
Y en algunos casos, el propio mercado intenta solicitar la cancelación, como resultado, el mercado también está atascado en el estado "solicitud de cancelación".
Por otro lado, tenemos el caso en el que el marketplace no recibe esta notificación de cancelación y continúa con su pedido hasta el estado "Facturado".
En todos los casos, no podemos cambiar el estado de estos pedidos.


##

## Simulación


1- Crear un pedido, con marca blanca del vendedor;
2- En el pedido del vendedor, adelantar el estado a "tramitación";
3- Todavía en el vendedor, solicitar la anulación del pedido;
4- En el pedido del vendedor, tendremos el mensaje, "acepta o rechaza la cancelación", pulsa en la opción rechazar del vendedor o utiliza la API, verás que el pedido del vendedor pasará al estado "cancelación-solicitud-denegada-ffm".
5- En el pedido del Mercado, haga clic en cancelar;
6- El pedido del Marketplace se atascará en "Pedido-Cancelar";

Puede ocurrir que el pedido del Marketplace continúe con el pedido y pase a factura, cuando envíe la factura.



## Workaround


Esto no es una solución, sino una orientación a las cuentas, una vez que el vendedor solicita la cancelación, no rechazar la solicitud en sí.






