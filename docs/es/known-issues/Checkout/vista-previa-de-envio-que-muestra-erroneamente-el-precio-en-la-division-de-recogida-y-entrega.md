---
title: "Vista previa de envío que muestra erróneamente el precio en la división de recogida y entrega"
id: 4Tp4x0C3XRjgtMdv8i1Y7o
status: PUBLISHED
createdAt: 2025-02-18T15:58:59.344Z
updatedAt: 2025-02-24T19:45:41.748Z
publishedAt: 2025-02-24T19:45:41.748Z
firstPublishedAt: 2025-02-18T15:59:00.738Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vista-previa-de-envio-que-muestra-erroneamente-el-precio-en-la-division-de-recogida-y-entrega
locale: es
kiStatus: Fixed
internalReference: 1181570
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El precio de entrega mostrado en la vista previa de envío (carrito) es incorrecto cuando hay una división entre recogida, ofrecida por el vendedor A, y entrega, ofrecida por el vendedor B, y ambos vendedores ofrecen un ANS de entrega con el mismo nombre. Por ejemplo:


- Artículo 1, ofrecido por el vendedor A, con ANS: recogida X y entrega X
- Artículo 2, ofrecido por el vendedor B, con ANS: recogida Y y entrega X

Al seleccionar "Recogida en tienda":

- El artículo 1 tiene recogida X
- El artículo 2 tiene entrega X con un precio superior al registrado en la tienda.


##

## Simulación



- Añade dos o más artículos al carrito, donde un vendedor diferente realiza cada artículo;
- Asegúrese de que uno de los artículos no está disponible para su recogida;
- Ambos vendedores deben ofrecer un SLA con el mismo nombre.



## Workaround


N/A




