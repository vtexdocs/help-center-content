---
title: 'La falta de coincidencia de AddressId provoca el error "dirección no válida para un artículo".'
id: 5bSac85eHb9NmrOhcTjHNw
status: PUBLISHED
createdAt: 2024-03-01T19:28:52.074Z
updatedAt: 2024-03-01T19:28:52.875Z
publishedAt: 2024-03-01T19:28:52.875Z
firstPublishedAt: 2024-03-01T19:28:52.875Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-falta-de-coincidencia-de-addressid-provoca-el-error-direccion-no-valida-para-un-articulo
locale: es
kiStatus: Backlog
internalReference: 992503
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El adjunto del carrito `shippingData` soporta el campo `addressId` dentro de algunos objetos diferentes: `logisticsInfo`, `address`, y `selectedAddresses`.
El campo `addressId` también se mantiene en las direcciones guardadas del usuario, dentro de la entidad AD de Master Data.

Al realizar un pedido, la API de pago compara la dirección de envío seleccionada en el formulario de pedido con las direcciones disponibles en el perfil del usuario.
Si se produce una coincidencia, el `addressId` de `address` y `selectedAddresses` del formulario de pedido se sustituye por el valor existente en su perfil.

Sin embargo, en un punto posterior de las validaciones de la API, también se comparará este `addressId` con el del objeto `logisticsInfo`.
Como el objeto `logisticsInfo` no ha sido sustituido por el proceso anterior, es posible que no coincidan, y esta validación posterior fallará.
Esto desencadena un "**dirección inválida para un artículo**" / "endereço inválido para um ítem", impidiendo que se complete la compra.



##

## Simulación



- Guardar dos direcciones diferentes dentro del perfil de un usuario, y tomar nota de sus valores `addressId`.
- Cree una solicitud de pedido. Utiliza una de las direcciones creadas en el paso anterior, pero utiliza el `addressId` de la otra.
- Envíe la solicitud. La respuesta contendrá el mensaje de error "dirección no válida para un artículo".



## Workaround


Cuando envíe la solicitud de realización de pedido con una dirección previamente guardada, asegúrese de que el valor utilizado para `addressId` coincide con los datos reales de la dirección.
También puede omitir `addressId` en la solicitud.





