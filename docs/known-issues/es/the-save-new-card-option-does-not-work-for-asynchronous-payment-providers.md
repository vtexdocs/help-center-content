---
title: 'La opción "Guardar nueva tarjeta" no funciona para los proveedores de pago asíncronos'
id: 3B4gVSNrSeCc8EBXwk5sAu
status: PUBLISHED
createdAt: 2022-03-11T17:54:35.664Z
updatedAt: 2022-11-25T22:06:23.711Z
publishedAt: 2022-11-25T22:06:23.711Z
firstPublishedAt: 2022-03-11T17:54:36.273Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-opcion-guardar-nueva-tarjeta-no-funciona-para-los-proveedores-de-pago-asincronos
locale: es
kiStatus: Backlog
internalReference: 308892
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el cliente intenta añadir una nueva tarjeta en la sección Mi cuenta de las tiendas cuyas afiliaciones no devuelven una respuesta sincrónica, el sistema devolverá _se ha producido un error al intentar registrar la tarjeta_ y puede generarse un cargo indebido de R$1,50.

Este error se produce porque Mis tarjetas esperan una respuesta sincrónica de los adquirentes de tarjetas de crédito y la mayoría de ellos no devuelve una respuesta inmediata.



## Simulación



1. Vaya a la sección VTEX **Admin.**
2. Configurar el adquirente Mundi.
3. Configure un método de pago con tarjeta de crédito -como Mastercard, Visa, American Express, etc.- para que sea procesado por la entidad adquirente.
4. Vaya a la página de inicio de su tienda.
5. Inicie sesión introduciendo su dirección de correo electrónico y su contraseña.
6. Haga clic en **Mi cuenta**.
7. Vaya a la sección **Tarjetas de crédito**.
8. Pulse en **Añadir nueva tarjeta**.
9. Rellena todos los campos y pulsa en **Guardar nueva tarjeta**.
10. Este proceso devolverá un error y al cliente se le cargará el importe de R$ 1,50, que podrá o no ser devuelto automáticamente posteriormente.



## Workaround


N/A

