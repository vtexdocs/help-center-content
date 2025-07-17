---
title: "No se puede abonar con MercadoPago Redirect y Vale en carrito con producto Seller"
id: 2WwCIW6chacwYakYUemOyQ
status: PUBLISHED
createdAt: 2017-11-15T14:46:42.109Z
updatedAt: 2022-12-22T15:06:24.179Z
publishedAt: 2022-12-22T15:06:24.179Z
firstPublishedAt: 2017-11-16T17:56:38.376Z
contentType: knownIssue
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Payments
slugEN: no-se-puede-abonar-con-mercadopago-redirect-y-vale-en-carrito-con-producto
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Comprando en un Marketplace y conteniendo en el carrito un producto de un seller, cuando un cliente intenta abonar con MercadoPago3P + Vale de Compra, al momento que se debe redireccionar a MercadoPago, el checkout arroja un aviso donde le comunica al cliente que no puede continuar la compra.

## Simulación

1. Agregar vale como forma de pago en checkout, pero efectuar un pago parcial.
2. Seleccionar MercadoPago3P para pagar la restante parte del pedido.
3. Hacer click en Comprar Ahora y aparecerá la advertencia que imposibilita continuar con el pago.

## Workaround

Es posible realizar una validación mediante JS al hacer click en el botón Finalizar Compra. En ese momento, se evalúa si se encuentra un Vale activado y a su vez se seleccionó MercadoPago Redirect. En ese caso, se debe informar al usuario de la restricción y las opciones alternativas.

