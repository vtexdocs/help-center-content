---
title: Mis créditos no muestran la factura de PaymentLink aunque el campo esté configurado
id: YQ2hkDciJqNZiAfqdNO4t
status: PUBLISHED
createdAt: 2022-03-18T21:29:25.136Z
updatedAt: 2022-11-25T22:04:43.897Z
publishedAt: 2022-11-25T22:04:43.897Z
firstPublishedAt: 2022-03-18T21:29:25.618Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: mis-creditos-no-muestran-la-factura-de-paymentlink-aunque-el-campo-este-configurado
kiStatus: Fixed
internalReference: 546267
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El enlace del campo paymentLink no se está mostrando en la página de Mis Créditos, dentro de MiCuenta, a pesar de que ha sido configurado y está disponible en la página de Facturas de Crédito de Cliente, dentro de la Administración.


## Simulación



1. Utilice el punto final de Cambiar Factura del Portal de Desarrolladores para configurar un `enlace de pago` para una factura suya existente
2. Actualice la página de la factura y el enlace estará disponible en el campo `Comentarios`.
3. Vaya a la tienda e inicie sesión
4. Vaya a la página de Mis Créditos, en Mi Cuenta
5. El campo `comentarios` estará vacío



## Workaround


Aunque se sabe que no es la mejor solución, una posible solución es enviar el campo "observación" con el enlace, utilizando el punto final de Cambiar factura. El campo `observaciones` también se añade en el campo `Comentarios` pero se puede ver dentro de la página Mis créditos.

