---
title: 'En algunos casos, Checkout-UI no muestra el importe correcto que debe abonarse con el Crédito de cliente para 1x plazo'
id: 3YsvVet6LKw1buFapSwFWm
status: PUBLISHED
createdAt: 2023-02-06T20:00:37.983Z
updatedAt: 2023-02-06T20:00:38.568Z
publishedAt: 2023-02-06T20:00:38.568Z
firstPublishedAt: 2023-02-06T20:00:38.568Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: en-algunos-casos-checkoutui-no-muestra-el-importe-correcto-que-debe-abonarse-con-el-credito-de-cliente-para-1x-plazo
locale: es
kiStatus: Backlog
internalReference: 748320
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para un escenario donde el Crédito de Cliente es usado para pagar una cantidad menor que el valor total del carrito; muestra, para 1x cuota en el desplegable, la cantidad total ignorando débitos considerados como pagar con otro método de pago como una tarjeta de regalo.

Se trata únicamente de un problema del lado del cliente, por lo tanto, si el usuario realiza un pedido utilizando esta opción del menú desplegable, la API de pago enviará el valor correcto a la pasarela.


##

## Simulación



- Asegúrese de que la cuenta tiene condiciones de pago con 1x plazo para el crédito del cliente;
- Vaya a la parte de pago en el proceso de pago, luego elija crédito de cliente como método de pago junto con una tarjeta de regalo. Por lo tanto, observe que el valor en el desplegable aparece incorrectamente.



## Workaround


N/A





