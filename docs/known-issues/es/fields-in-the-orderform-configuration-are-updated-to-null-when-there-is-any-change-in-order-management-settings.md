---
title: 'Los campos de la configuración de orderForm se actualizan a null cuando se produce algún cambio en la configuración de la gestión de pedidos.'
id: jKGnwUGdfmCXtKjGPe6hj
status: PUBLISHED
createdAt: 2023-02-06T21:00:09.224Z
updatedAt: 2024-05-09T12:44:51.823Z
publishedAt: 2024-05-09T12:44:51.823Z
firstPublishedAt: 2023-02-06T21:00:09.753Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-campos-de-la-configuracion-de-orderform-se-actualizan-a-null-cuando-se-produce-algun-cambio-en-la-configuracion-de-la-gestion-de-pedidos
locale: es
kiStatus: Fixed
internalReference: 748404
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al actualizar cualquier información en la configuración de la gestión de pedidos (en el administrador), los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` se establecen como `null` en la configuración de orderForm



## Simulación



- Establezca los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` en la configuración de orderForm a través de la API.
- Cambiar cualquier cosa en la configuración de gestión de pedidos (admin)
- Cuando obtenga la configuración de orderForm, verá esos campos como "nulos".



## Workaround


Guarde la configuración del formulario de pedido con los valores correctos para los campos `paymentSystemToCheckFirstInstallment` y `defaultPaymentSystemToApplyOnUserOrderForm` después de cambiar la configuración de la gestión de pedidos.




