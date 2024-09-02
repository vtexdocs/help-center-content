---
title: 'La vista previa del envío muestra el código postal de recogida para el envío cuando hay un paquete dividido para la recogida y el envío.'
id: 7gGu9EUZGGXp4dRCCGipsA
status: PUBLISHED
createdAt: 2024-06-26T20:36:39.627Z
updatedAt: 2024-06-26T20:36:40.541Z
publishedAt: 2024-06-26T20:36:40.541Z
firstPublishedAt: 2024-06-26T20:36:40.541Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-vista-previa-del-envio-muestra-el-codigo-postal-de-recogida-para-el-envio-cuando-hay-un-paquete-dividido-para-la-recogida-y-el-envio
locale: es
kiStatus: Backlog
internalReference: 938124
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la vista previa del envío, cuando se selecciona recoger en tienda, pero no todos los artículos están disponibles para esa recogida, la dirección mostrada para el envío es la de la recogida elegida, y no es posible cambiarla. Sin embargo, en el formulario de pedido, la dirección seleccionada para el envío es correcta.



## Simulación



- Añadir artículos al carrito donde al menos uno no está disponible para su recogida;
- Añadir un código postal al carrito;
- Cambiar a recogida en tienda;
- El código postal mostrado para el envío es el de la recogida elegida.



## Workaround


Cambie el código postal en el paso de envío.



