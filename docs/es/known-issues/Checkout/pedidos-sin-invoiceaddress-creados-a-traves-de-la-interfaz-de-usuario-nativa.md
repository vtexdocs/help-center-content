---
title: "Pedidos sin invoiceAddress creados a través de la interfaz de usuario nativa"
id: 1XjNZhcTJ5rZJP4w3kJtcW
status: PUBLISHED
createdAt: 2022-01-24T20:21:07.893Z
updatedAt: 2023-12-19T21:34:15.743Z
publishedAt: 2023-12-19T21:34:15.743Z
firstPublishedAt: 2022-06-27T19:49:05.878Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pedidos-sin-invoiceaddress-creados-a-traves-de-la-interfaz-de-usuario-nativa
locale: es
kiStatus: Fixed
internalReference: 306140
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


Hasta ahora los pasos conocidos para reproducir el escenario son:


1. Acceder a la tienda sin estar logueado/identificado.
2. Poner un producto en el carrito
3. En el carrito haz clic en Cerrar pedido
4. En la pantalla de correo electrónico poner un correo electrónico de un comprador existente - el usuario probablemente será dirigido al paso de pago
5. Haga clic para editar el paso de entrega y seleccione "retirada"
6. No rellene la dirección de la nota
7. Haga clic para editar los "Datos personales"
8. Se le pedirá que inicie sesión.
9. Después de iniciar sesión, en el paso de edición de "Datos personales" aparecerá el botón para ir directamente al pago, aunque no se haya rellenado la dirección de facturación.

Además de lo anterior, el comportamiento se puede observar cuando el usuario se encuentra en la etapa de envío y al recargar la página, es llevado automáticamente al pago sin llenar los datos de la Factura.
Otro escenario que induce el comportamiento es cambiar entre la lista de direcciones previamente registradas y una nueva dirección, lo que permite al usuario proceder al pago sin rellenar el código postal (de una nueva dirección).



## Workaround


No se conoce ninguna solución para evitar el escenario raíz.





