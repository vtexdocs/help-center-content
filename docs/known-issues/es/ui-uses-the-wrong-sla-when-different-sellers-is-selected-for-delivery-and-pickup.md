---
title: 'La interfaz de usuario utiliza el SLA incorrecto cuando se seleccionan vendedores diferentes para la entrega y la recogida.'
id: 1FidTQU7qfHsuJLUbPTe7w
status: PUBLISHED
createdAt: 2023-04-25T21:52:00.104Z
updatedAt: 2023-05-08T18:04:36.712Z
publishedAt: 2023-05-08T18:04:36.712Z
firstPublishedAt: 2023-04-25T21:52:00.579Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-usuario-utiliza-el-sla-incorrecto-cuando-se-seleccionan-vendedores-diferentes-para-la-entrega-y-la-recogida
kiStatus: Backlog
internalReference: 797023
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se pueden seleccionar diferentes marcas blancas de vendedor para entregar los productos cuando se utilizan diferentes direcciones para la entrega y la recogida. La interfaz de usuario tiene en cuenta el ANS incorrecto al cambiar entre entrega y recogida.
Por ejemplo, al cambiar de entrega a recogida en el carro, la interfaz de usuario aplicará la dirección de recogida y seleccionará el Id. de SLA de recogida que estaba disponible para la dirección de entrega, que ya no está disponible y no mostrará/seleccionará las nuevas recogidas.



## Simulación



- Configure dos etiquetas blancas de vendedor para direcciones diferentes;
- Añadir productos disponibles para ambos vendedores;
- Añadir una dirección de entrega en el carrito;
- Cambiar a recogida y añadir una dirección diferente;
- Pasar a entrega y volver a recogida;
- No se seleccionará recogida y se mostrará el mensaje "Envío no disponible para su ubicación".



## Workaround


NO DISPONIBLE




