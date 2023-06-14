---
title: 'Pedidos sin invoiceAddress creados a través de la UI nativa'
id: 1XjNZhcTJ5rZJP4w3kJtcW
status: PUBLISHED
createdAt: 2022-01-24T20:21:07.893Z
updatedAt: 2022-11-25T21:52:06.721Z
publishedAt: 2022-11-25T21:52:06.721Z
firstPublishedAt: 2022-06-27T19:49:05.878Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-sin-invoiceaddress-creados-a-traves-de-la-ui-nativa
locale: es
kiStatus: Backlog
internalReference: 306140
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos todavía es posible crear pedidos sin `invoiceAddress` a través de la interfaz de usuario de la caja.
La dirección de la factura debe ser obligatoria en la UI de todas las tiendas que tengan la funcionalidad activada.



## Simulación


Hasta ahora los pasos conocidos para reproducir el escenario son:


1. Acceder a la tienda sin estar conectado/identificado
2. Poner un producto en el carrito
3. En el carrito haga clic en cerrar el pedido
4. En la pantalla de correo electrónico poner un correo de un comprador existente - el usuario probablemente será dirigido al paso de pago
5. Haga clic para editar el paso de entrega y seleccione "retirada"
6. No rellene la dirección de la nota
7. Haga clic para editar los "Datos personales"
8. Se le pedirá que inicie sesión.
9. Después de iniciar la sesión, en el paso de edición de "Datos personales" aparecerá el botón para ir directamente al pago, aunque no se haya rellenado la dirección de la factura.

Además de lo anterior, el comportamiento se puede observar cuando el usuario está en la etapa de envío y al recargar la página, se le lleva automáticamente al pago sin llenar los datos de la factura.
Otro escenario que induce el comportamiento es cambiar entre la lista de direcciones previamente registradas y una nueva dirección, lo que permite al usuario proceder al pago sin rellenar el código postal (de una nueva dirección).



## Workaround


No hay ninguna solución conocida para evitar el escenario de la raíz.

