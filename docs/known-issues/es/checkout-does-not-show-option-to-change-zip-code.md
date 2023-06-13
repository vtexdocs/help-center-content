---
title: El pago no muestra la opción de cambiar el código postal
id: 23xS5PVwwuDm5NhSZN65sU
status: PUBLISHED
createdAt: 2022-04-18T14:04:04.407Z
updatedAt: 2022-11-25T21:50:05.024Z
publishedAt: 2022-11-25T21:50:05.024Z
firstPublishedAt: 2022-04-18T14:04:04.826Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-no-muestra-la-opcion-de-cambiar-el-codigo-postal
kiStatus: Fixed
internalReference: 321598
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para los artículos que están restringidos a la recogida en la tienda a determinadas direcciones, la opción de cambiar el código postal está desapareciendo mientras el usuario está en la pestaña de entrega, en el carrito .
Como resultado, el cliente no tiene un flujo claro para buscar la entrega en otros códigos postales.



## Simulación



1- Añade un artículo a tu cesta que tenga la opción de retirar y enviar
2- Inserta un código postal que no tenga la opción de "entrega" y que sólo tenga la opción de "recogida".
3- En este paso, la interfaz de usuario mostrará el siguiente mensaje "Su artículo no está disponible para ser recibido en su dirección.
Puedes recogerlo en un punto cercano".
4- Ahora, en este mismo paso, pulsa sobre el código postal para modificarlo
5- Observa que la opción de editar el código postal desaparecerá.



## Workaround



No se conoce ninguna solución.
Sin embargo, si el usuario cambia entre retirar/recibir el campo de código postal se mostrará de nuevo para introducir un nuevo valor.

