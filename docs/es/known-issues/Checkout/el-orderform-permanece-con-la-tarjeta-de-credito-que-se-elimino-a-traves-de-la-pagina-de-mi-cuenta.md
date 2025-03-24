---
title: 'El OrderForm permanece con la tarjeta de crédito que se eliminó a través de la página de mi cuenta'
id: 4wcp7SdlHPTRSHxsDxZ1Xr
status: PUBLISHED
createdAt: 2022-05-03T11:47:35.874Z
updatedAt: 2022-11-25T21:51:16.383Z
publishedAt: 2022-11-25T21:51:16.383Z
firstPublishedAt: 2022-05-03T11:47:36.417Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-remains-with-credit-card-that-were-removed-via-myaccount-page
locale: es
kiStatus: Fixed
internalReference: 276823
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La eliminación de una tarjeta de crédito a través de la página de mi cuenta no actualiza el orderForm, que mantendría una tarjeta de crédito que ya no existe.

El cliente no puede finalizar las compras con una tarjeta de crédito eliminada, pero la tarjeta de crédito no válida no se resalta ante el cliente.



## Simulación


- crear un carrito y seguir hasta el paso de pago, con un perfil completo que haya guardado una tarjeta de crédito
- elimine esta tarjeta de crédito utilizando la cuenta de usuario
- tenga en cuenta que la tarjeta de crédito se quedó en el orderForm, y no puede terminar las compras con ella



## Workaround


El cliente debe cerrar la compra con otra tarjeta de crédito. Un nuevo orderForm no presentará la tarjeta de crédito que ya fue eliminada de su perfil. También pueden excluir la tarjeta de crédito directamente del carrito en el paso de pago, después de haber iniciado sesión.

