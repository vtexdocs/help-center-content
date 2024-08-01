---
title: 'Mensaje "Código postal no válido" en la interfaz de usuario de la caja cuando la dirección está en las direcciones disponibles con un país diferente.'
id: 4VggIx4xWPNW6OBIrQ0js4
status: PUBLISHED
createdAt: 2024-06-21T17:08:59.860Z
updatedAt: 2024-06-21T17:09:00.771Z
publishedAt: 2024-06-21T17:09:00.771Z
firstPublishedAt: 2024-06-21T17:09:00.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: mensaje-codigo-postal-no-valido-en-la-interfaz-de-usuario-de-la-caja-cuando-la-direccion-esta-en-las-direcciones-disponibles-con-un-pais-diferente
locale: es
kiStatus: Backlog
internalReference: 1053959
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Checkout UI utiliza el país registrado en su estado para validar la entrada del código postal.

Cuando las direcciones están registradas en direcciones disponibles, pero el orderForm se cambia a otro canal de venta, y este canal de venta tiene un país diferente para enviar, se muestra el mensaje "Código postal no válido" justo debajo de la entrada del código postal, no pudiendo seguir adelante con la compra.


##

## Simulación



- Montar un carrito y añadir una dirección;
- Cambie el canal de venta, donde envía a un país diferente;
- Intente añadir el nuevo código postal; se muestra "Código postal no válido".



## Workaround


N/A




