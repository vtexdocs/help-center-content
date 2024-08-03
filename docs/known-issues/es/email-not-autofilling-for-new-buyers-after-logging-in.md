---
title: 'El correo electrónico no se rellena automáticamente para los nuevos compradores después de iniciar sesión'
id: 2H6REXZGS6utlWmYKoPmGq
status: PUBLISHED
createdAt: 2023-10-17T16:22:21.667Z
updatedAt: 2023-11-03T17:17:12.530Z
publishedAt: 2023-11-03T17:17:12.530Z
firstPublishedAt: 2023-10-17T16:22:22.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-correo-electronico-no-se-rellena-automaticamente-para-los-nuevos-compradores-despues-de-iniciar-sesion
locale: es
kiStatus: Fixed
internalReference: 920634
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un nuevo comprador inicia sesión y procede al pago, el correo electrónico no se rellena automáticamente, lo que requiere que el cliente vuelva a introducir su correo electrónico. Esto también ocurre utilizando APIs y enviando cabeceras con las cookies del comprador.



## Simulación



- Inicie sesión con un correo electrónico nunca antes utilizado en la tienda;
- Añadir productos al carrito;
- Ir a la caja;
- El email no se rellenará, y deberá escribirse de nuevo.



## Workaround


N/A




