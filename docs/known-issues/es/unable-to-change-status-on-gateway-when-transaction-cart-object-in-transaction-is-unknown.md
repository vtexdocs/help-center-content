---
title: 'No se puede cambiar el estado en la pasarela cuando el objeto de carro de la transacción en /transacción es "desconocido".'
id: 3gWqk1T2xP3eRYZtXZLX3b
status: PUBLISHED
createdAt: 2023-03-23T14:27:16.116Z
updatedAt: 2023-03-23T14:27:16.706Z
publishedAt: 2023-03-23T14:27:16.706Z
firstPublishedAt: 2023-03-23T14:27:16.706Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: no-se-puede-cambiar-el-estado-en-la-pasarela-cuando-el-objeto-de-carro-de-la-transaccion-en-transaccion-es-desconocido
locale: es
kiStatus: Backlog
internalReference: 776837
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para cancelar o modificar un pedido en escenarios divididos, nuestra pasarela requiere un objeto de carrito. Sin embargo, si el proceso de pago a través de OMS envía un objeto de carrito nulo/desconocido, nuestra pasarela no puede procesar estas operaciones, lo que provoca un error de análisis de la biblioteca Newtonsoft utilizada en la pasarela.



## Simulación


Para reproducir el problema, actualice el objeto de carrito en la entidad /transaction con un valor nulo utilizando nuestra API para enviar datos adicionales.
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data



## Workaround


Si el objeto de carro inicial ya no está disponible, recuperarlo y enviarlo de nuevo a la entidad /transaction utilizando nuestra API para el envío de datos adicionales puede ser un proceso complicado. Si este es el caso, por favor póngase en contacto con el equipo de soporte de VTEX para obtener ayuda.





