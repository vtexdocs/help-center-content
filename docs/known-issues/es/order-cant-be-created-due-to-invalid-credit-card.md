---
title: 'El pedido no se puede crear debido a que la tarjeta de crédito no es válida'
id: 3vh1jvhIzEsC4ZLC1C4pJA
status: PUBLISHED
createdAt: 2022-06-29T18:59:46.795Z
updatedAt: 2022-11-25T21:52:02.248Z
publishedAt: 2022-11-25T21:52:02.248Z
firstPublishedAt: 2022-06-29T18:59:47.166Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pedido-no-se-puede-crear-debido-a-que-la-tarjeta-de-credito-no-es-valida
kiStatus: Backlog
internalReference: 607742
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La creación de un pedido puede fallar con la excepción genérica "_Se ha producido un error de comunicación con la pasarela y los datos de pago de la transacción {id} no se han recibido correctamente_", que tienen diferentes causas de origen. Una de ellas estará relacionada con la excepción interna "_La información de la cuenta solicitada no existe_", que puede verse en el historial de transacciones/pagos relacionado con el pedido incompleto.

La mencionada "información de la cuenta" está relacionada con una tarjeta de crédito que ya no existe en la plataforma. Aunque se ofrece en el orderForm (carrito) como opción, no se puede utilizar. En el perfil del cliente y/o en su orderForm ha quedado una referencia no válida.



## Simulación


Se desconoce la causa raíz de este tipo de escenario, por lo que no hay pasos claros para reproducir el problema.



## Workaround


Cuando se relaciona con esta causa raíz específica, el cliente debe cerrar la compra con otra tarjeta de crédito. La tarjeta de crédito inválida también puede ser eliminada manualmente del perfil del cliente mediante la página "mi cuenta", o incluso del orderForm específico (carrito) mientras está conectado, siempre por el propio cliente.

