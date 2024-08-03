---
title: 'Solicitudes de simulación innecesarias y componentes que se recargan'
id: 1qXJU1XC4r0e9KWxNUKp3L
status: PUBLISHED
createdAt: 2022-08-30T17:34:47.635Z
updatedAt: 2024-02-16T20:25:15.198Z
publishedAt: 2024-02-16T20:25:15.198Z
firstPublishedAt: 2022-08-30T17:34:48.111Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: solicitudes-de-simulacion-innecesarias-y-componentes-que-se-recargan
locale: es
kiStatus: No Fix
internalReference: 648298
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se pueden hacer múltiples solicitudes de simulación después de los cambios en el orderForm. Esto está relacionado con el cálculo de _lean shipping_ para calcular los paquetes de envío.

Dependiendo del cambio, como las solicitudes automáticas para registrar la información "paymentData", pueden considerarse innecesarias. Por lo tanto, la ralentización de la página, la sobrecarga de los servicios externos, y el cambio de estado de la interfaz de usuario a la espera de ellos.



## Simulación



- crear un carrito
- añadir un código postal en el componente de envío
- observe las solicitudes realizadas por la interfaz de usuario, que incluirán actualizaciones para "shippingData" y "paymentData", y también estas múltiples "simulaciones" después de cada una de ellas



## Workaround


N/A

