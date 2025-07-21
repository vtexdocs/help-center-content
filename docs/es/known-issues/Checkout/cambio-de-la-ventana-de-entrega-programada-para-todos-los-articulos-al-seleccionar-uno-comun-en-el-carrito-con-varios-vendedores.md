---
title: "Cambio de la ventana de entrega programada para todos los artículos al seleccionar uno común en el carrito con varios vendedores."
id: 1Dkdy8fr6AcV766gDgYgqp
status: PUBLISHED
createdAt: 2024-08-30T17:20:33.623Z
updatedAt: 2024-08-30T17:20:34.491Z
publishedAt: 2024-08-30T17:20:34.491Z
firstPublishedAt: 2024-08-30T17:20:34.491Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cambio-de-la-ventana-de-entrega-programada-para-todos-los-articulos-al-seleccionar-uno-comun-en-el-carrito-con-varios-vendedores
locale: es
kiStatus: Backlog
internalReference: 1089806
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando dos artículos de diferentes vendedores con entrega programada están en un carro, sus ventanas de entrega pueden solaparse. Si la fecha seleccionada para el primer artículo es anterior al periodo solapado, la interfaz de pago tendrá en cuenta la fecha del segundo artículo. Por ejemplo:

El artículo 1 ofrece el 30 de agosto y el 31 de agosto como ventana de entrega;
El artículo 2 ofrece el 31 de agosto como ventana de entrega;
Si selecciona el 30 de agosto para el artículo 1 y el 31 de agosto para el artículo 2, la interfaz de pago tendrá en cuenta el 31 de agosto, ya que ambos artículos pueden enviarse en esa fecha.



## Simulación



- Añada dos artículos al carro de diferentes vendedores;
- Ambos vendedores deben ofrecer entrega programada, pero el 1er artículo debe tener al menos una opción anterior (eche un vistazo al ejemplo en Resumen);
- Seleccione la ventana de entrega más temprana para el 1er artículo;
- Seleccione una ventana de entrega común entre ambos artículos para el 2º artículo;
- Vaya a Pago y compruebe que ambos artículos se enviarán en la misma fecha, seleccionada para el 2º artículo.


##

## Workaround


N/A




