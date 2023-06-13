---
title: La condición de pago único no aparece en el checkout.
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2023-01-04T13:54:59.054Z
publishedAt: 2023-01-04T13:54:59.054Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-condicion-de-pago-unico-no-aparece-en-el-checkout
kiStatus: Backlog
internalReference: 605568
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se registra una condición de pago en la que sólo hay un plazo, esta información no aparece en la caja.



## Simulación



- Crear una condición de pago a plazos única.
- La información se carga correctamente en paymentData.
- Comprueba que la opción del desplegable de cuotas no aparece en la cardUI de la caja. Sólo "Total - $ xx.xx".
- Aun con la información en la UI de solo Total, al cerrar la compra se hace con las cuotas registradas en la condición comercial



## Workaround


No hay ninguna solución.

