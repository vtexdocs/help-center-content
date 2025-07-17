---
title: "El correo electrónico de reembolso de pedidos no se envía cuando se reembolsa un importe adicional mediante la nueva interfaz de usuario (OMS)."
id: 4nQanqQiHuAN6dT7iYYO26
status: PUBLISHED
createdAt: 2022-04-19T15:27:27.050Z
updatedAt: 2023-03-08T18:00:57.430Z
publishedAt: 2023-03-08T18:00:57.430Z
firstPublishedAt: 2022-04-19T15:27:27.634Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: el-correo-electronico-de-reembolso-de-pedidos-no-se-envia-cuando-se-reembolsa-un-importe-adicional-mediante-la-nueva-interfaz-de-usuario-oms
locale: es
kiStatus: Fixed
internalReference: 563300
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un pedido es devuelto por Marketplace a través de la "nueva UI" y se inserta un valor "adicional" en la "nueva UI", se genera una giftcard erróneamente y con ello, Checkout devuelve un error diciendo "que no hay valor a revertir y el email transaccional "vtexcommerce-order-refunded" no es enviado al cliente final.


##

## Simulación


Para simular este caso, es necesario realizar un reembolso, añadiendo un valor extra a través de "Nuevo_UI".
No se identificará el envío del email transaccional "vtexcommerce-order-refunded" al cliente final.



## Workaround


En estos casos en los que el reembolso se ha producido en "New_UI", no tenemos ninguna solución. Si es necesario realizar un reembolso, es posible hacerlo a través de Old_UI.





