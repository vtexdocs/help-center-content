---
title: 'Bucle en la ventana emergente de autenticación cuando la primera condición de pago requiere autenticación'
id: 7fU6wnrTjS0aJqRmertSFg
status: PUBLISHED
createdAt: 2023-06-14T17:54:36.973Z
updatedAt: 2023-12-21T15:50:16.992Z
publishedAt: 2023-12-21T15:50:16.992Z
firstPublishedAt: 2023-06-14T17:54:37.537Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: bucle-en-la-ventana-emergente-de-autenticacion-cuando-la-primera-condicion-de-pago-requiere-autenticacion
locale: es
kiStatus: Backlog
internalReference: 844192
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La ventana emergente de autenticación entra en bucle cuando la primera condición de pago tiene `requiresAuthentication: true`. Continuar la compra sólo será posible si se recarga la página.


##

## Simulación



- Configure una condición de pago con `requiresAuthentication: true`;
- Asegúrese de que la condición de pago es la primera;
- Utilice un email existente en el checkout para identificarse;
- Vaya al paso Pago y a la ventana emergente de autenticación;
- Inicie sesión utilizando una de las opciones y observe que la ventana emergente no se cierra.



## Workaround



- Cambie el orden de la condición de pago garantizando que la primera opción no sea la que tiene `requiresAuthentication: true`;
- Establecer el parámetro "defaultPaymentSystemToApplyOnUserOrderForm" en la configuración del orderForm vía API para uno sin autenticación, como una tarjeta de crédito.



