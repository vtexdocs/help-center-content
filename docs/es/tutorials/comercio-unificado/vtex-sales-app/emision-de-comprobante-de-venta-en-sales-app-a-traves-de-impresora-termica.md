---
title: 'Emisión de comprobante de venta en Sales App a través de impresora térmica'
id: 6GIUB1fVQVGZscsMoIsN1f
status: PUBLISHED
createdAt: 2025-08-01T19:46:33.357Z
updatedAt: 2025-08-01T20:19:18.600Z
publishedAt: 2025-08-01T20:19:18.600Z
firstPublishedAt: 2025-08-01T20:14:47.926Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: issuing-sales-receipts-in-sales-app-via-thermal-printer
legacySlug: emision-de-comprobante-de-venta-en-sales-app-a-traves-de-impresora-termica
locale: es
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

> ℹ️ Esta funcionalidad está disponible solo para Android e impresoras térmicas específicas, según se describe en la sección [Requisitos](#requisitos).

[VTEX Sales App](/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc) permite que los vendedores impriman los comprobantes de venta en una impresora térmica utilizando un teléfono celular a través de conexión bluetooth.

Así el vendedor no tiene que ir a la caja para generar el comprobante de venta, ya que lo puede emitir rápidamente por el teléfono celular y está disponible en el flujo de venta de **Sales App**. Esto aumenta la agilidad en el servicio y mejora la experiencia de compra de los clientes.

> ⚠️ La impresión del comprobante de venta en **Sales App** con una impresora térmica no es lo mismo que la facturación del pedido. La factura que se emite después, ya que depende de integraciones con conectores de pago y cuestiones logísticas, como el stock utilizado.

Si tu tienda desea emitir comprobantes con facturación automática para ventas de stock local (On Hands), recomendamos ponerte en contacto con el partner Neomode.

## Requisitos

Para que tu tienda emita comprobantes de venta en **Sales App** con una impresora térmica, debes cumplir los siguientes requisitos:

* Utilizar dispositivos Android.
* Disponer de una impresora térmica que utilice el protocolo ESC/POS.

El protocolo ESC/POS (Epson Standard Code for Point of Sale) es un conjunto de comandos desarrollado por Epson para el uso de impresoras de puntos de venta y otros dispositivos.

Para verificar si tu impresora térmica cumple con este requisito, busca el término "ESC/POS" en el manual del producto o en el sitio web del fabricante.

## Imprimir comprobante en impresora térmica

Para imprimir el comprobante de venta desde **Sales App**, sigue los pasos a continuación:

1. Activa la conexión bluetooth en el teléfono.
2. Conecta el celular a la impresora térmica vía bluetooth.

  > ℹ️ Si el teléfono no reconoce la impresora automáticamente, busca el driver en el sitio web del fabricante y sigue las instrucciones de instalación.

3. En la aplicación **Sales App**, en la pantalla final del pedido o después de seleccionar un pedido en la sección **Pedidos**, haz clic en `Imprimir pedido`.

  > ❗ La primera vez que se utiliza la funcionalidad se produce un error en este paso. Cierra la aplicación y sigue las instrucciones desde el comienzo. Si el error continúa, ponte en contacto con nuestro [Soporte](https://help.vtex.com/es/support).

4. Selecciona la impresora térmica deseada y la impresión se realizará inmediatamente.

El comprobante impreso incluirá los siguientes datos:

* Nombre e información de la tienda
* Identificación del cliente
* Detalles del pedido (por paquete)
* Información de envío del pedido
* Datos de pago

Para tiendas que tienen integraciones realizadas por partners como Neomode y que facturan las ventas On Hands inmediatamente, la factura se mostrará en el comprobante, como se ilustra a continuación:

![thermic_printer_receipt_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/comercio-unificado/vtex-sales-app/emision-de-comprobante-de-venta-en-sales-app-a-traves-de-impresora-termica_1.png)
