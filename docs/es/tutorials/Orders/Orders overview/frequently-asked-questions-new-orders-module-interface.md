---
title: 'Preguntas frecuentes sobre la nueva interfaz del módulo de pedidos'
id: 1mgSrqT2X3lxIkccEv8bLW
status: PUBLISHED
createdAt: 2022-12-08T18:26:26.850Z
updatedAt: 2023-01-05T18:01:01.354Z
publishedAt: 2023-01-05T18:01:01.354Z
firstPublishedAt: 2023-01-05T13:24:51.496Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: preguntas-frecuentes-nueva-interfaz-modulo-pedidos
locale: es
legacySlug: preguntas-frecuentes-sobre-la-nueva-interfaz-del-modulo-de-pedidos
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Hemos transformado el módulo **Todos los pedidos** del Admin VTEX para ofrecer una experiencia más intuitiva y completa. Una de las últimas mejoras es que ahora puedes [buscar pedidos sin límite de fecha](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192) sin la restricción de solamente en los últimos seis meses.

A partir del 17 de enero de 2023, la nueva interfaz será el estándar de todas las tiendas VTEX y no se podrá revertir a la versión anterior. Para facilitar la transición, creamos este documento que responde a las siguientes preguntas:

* [¿Qué pasó con el filtro de búsqueda de seis meses?](#que-paso-con-el-filtro-de-busqueda-de-seis-meses)
* [¿Cómo ver el diagrama de flujo del pedido?](#como-ver-el-diagrama-de-flujo-del-pedido)
* [¿Cómo facturar el pedido?](#como-facturar-el-pedido)
* [¿Cómo reenviar el último email al cliente?](#como-reenviar-el-ultimo-email-al-cliente)

En la imagen a continuación, puedes ver la correspondencia de secciones y campos entre la versión antigua de la página **Detalles del pedido** y la nueva versión:

![board_comparativo_interface_pedido_v2_es](//images.ctfassets.net/alneenqid6w5/30tYehAYOCvQoX0MpSIoNH/4a3658c6c470856c0dd37cd708761ff6/board_comparativo_interface_pedido_v2_es.png)

## ¿Qué pasó con el filtro de búsqueda de seis meses?

El filtro de seis meses fue sustituido por la búsqueda sin límite de fecha que devuelve los pedidos relacionados con el criterio utilizado, independientemente de la fecha de creación del pedido. Por ejemplo, puedes acceder al historial de compras completo de un cliente utilizando su nombre, email o documento. Aprende más en el artículo [Filtrar pedidos en Todos los pedidos](https://help.vtex.com/es/tutorial/como-filtrar-pedidos--tutorials_192).

>ℹ️ La búsqueda en todos los pedidos no puede asociarse a otros filtros, por lo que al remover el límite de fechas de búsqueda, los demás filtros se inactivan. Sin embargo, puedes combinar filtros y seleccionar el periodo personalizado de seis meses.

Para buscar en todos los pedidos, ingresa el término deseado en la casilla de búsqueda. Se mostrará la opción <i class="fas fa-toggle-off"></i> `Remover límite de fechas`. Solo tienes que activarla para iniciar la búsqueda.

![busca_sem_limite_data_all_es](//images.ctfassets.net/alneenqid6w5/7mDlDQAgphKCmH12REooCx/0a765124f8477dac5a676b872f2a2e7c/busca_sem_limite_data_all_es.png)

## ¿Cómo ver el diagrama de flujo del pedido?

En la nueva interfaz, el estándar es mostrar una línea de tiempo con los eventos de **Status del pedido** según ilustrado en la siguiente imagen:

![timeline_pedido_es](//images.ctfassets.net/alneenqid6w5/JID8bYMxBA94nRGXJQ3BI/60bd22f37e038db53247d83f3252efe1/timeline_pedido_es.png)

Si deseas ver el **Diagrama del pedido** como en la interfaz anterior, haz clic en `Ver diagrama` y aparecerá una ventana modal según se muestra en la imagen a continuación:

![diagrama_pedido_es](//images.ctfassets.net/alneenqid6w5/3to0oQYzjgz3Y5i4sDPIG3/c539ec37111500a217eb429e33a1c9e1/diagrama_pedido_es.png)

## ¿Cómo facturar el pedido?

En la sección **Ítems a facturar** de la nueva interfaz, se puede acceder a todas las acciones relacionadas con la facturación mediante el botón `Facturar`, que aparece tanto en esta sección como en la parte superior de la pantalla. Al hacer clic en `Facturar`, se muestran las siguientes opciones:

* **Enviar factura con la referencia de los ítems:** esta opción solo aparece en la nueva interfaz y permite emitir la factura total o parcial de determinados ítems, que se identifican por SKU, stock y precio. Ve un ejemplo en la siguiente imagen:

![faturar_referenciar_pedidos_final_es](//images.ctfassets.net/alneenqid6w5/3h0sV3Gq2dkJk3ZoT85SyG/2427b16f419457736699f1cae0cf3dd3/faturar_referenciar_pedidos_final_es.png)

* **Enviar una sola factura:** esta opción corresponde a la antigua _Enviar factura_ y permite facturar el valor total o parcial del pedido. La presentación de la página es diferente, pero los campos siguen siendo los mismos.

Para facturar un pedido, sigue los pasos a continuación:

1. En la sección **Ítems a facturar** o en la parte superior de la página **Detalles del pedido**, haz clic en `Facturar`.
2. Selecciona una de las opciones:
    * Enviar la factura con la referencia de los ítems
    * Enviar una sola factura
3. Rellena los campos.
4. Haz clic en `Guardar factura`.

## ¿Cómo reenviar el último email al cliente?

En la sección **Historial del pedido**, hay una línea de tiempo que presenta los eventos relacionados con el pedido, incluidos los emails enviados, que se identifican con el ícono <i class="fas fa-envelope"></i>. 

Para reenviar un email al cliente, haz clic en el evento de email enviado o en el ícono de flecha <i class="fas fa-angle-right"></i> para ver los detalles del evento, que aparecerán como se muestra en la siguiente imagen:

![enviar_email_es](//images.ctfassets.net/alneenqid6w5/5c2ZuqUC1b497RQdImDQ46/a4d25f7e071dd7f4c23cbcd157d8008a/enviar_email_es.png)

Haz clic en el botón Reenviar email y se reenviará el email inmediatamente al cliente y se mostrará el siguiente mensaje de confirmación: _El email se reenvió con éxito al cliente_.
