---
title: 'Pago'
id: 2xxwfe7UQhd33nPTIRF9Yw
status: PUBLISHED
createdAt: 2021-08-05T14:37:01.824Z
updatedAt: 2025-11-12T14:45:11.158Z
publishedAt: 2023-05-31T14:45:11.158Z
firstPublishedAt: 2021-08-05T14:46:59.026Z
contentType: trackArticle
productTeam: Shopping
slugEN: payment
locale: es
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: vtex-sales-app-using-the-app
order: 15
---

En el paso de pago de VTEX Sales App, las [opciones de pago que se han configurado](/es/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) aparecerán en su tienda.

La barra superior de la pantalla de pago muestra las siguientes opciones:

- **Compartir:** compartir un enlace de pago con el cliente.
- **Cupón:** Añade un cupón de descuento.
- **Vale de regalo:** añada un vale de regalo al pedido.
- **CPF:** cambiar el número de CPF que aparecerá en la factura del pedido.

VTEX Sales App le permite seleccionar varios pagos. Por ejemplo, al elegir **Pago en efectivo** y luego hacer clic en `Agregar otro pago`, el cliente puede hacer parte del pago en efectivo y parte en tarjeta de crédito o débito.

Para continuar, es necesario seleccionar uno o más métodos de pago deseados y hacer clic en `Finalizar venta`.

## Medios de pago disponibles

Durante la configuración de VTEX Sales App, se pueden agregar los siguientes medios de pago:

- [Efectivo](#efectivo)
- [Pix (Brasil)](#pix-brasil)
- [Boleto (Brasil)](#boleto-brasil)
- [Tarjeta de crédito](#tarjeta-de-credito)
- [Tarjeta de débito](#tarjeta-de-debito)

Para configurar un medio de pago, sigue las instrucciones de la guía [VTEX Sales App - Pagos](/es/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

### Efectivo

El cliente debe seleccionar la opción **Efectivo** y hacer clic en `Finalizar venta`.

Luego, el cliente debe realizar la transacción con el vendedor. La aprobación de la venta puede ser [manual o automática](/es/docs/tracks/facturar-un-pedido), dependiendo de la configuración de la tienda.

### Pix (Brasil)

El cliente debe seleccionar la opción **Pix** y hacer clic en `Finalizar venta`.

Después de finalizar la venta, se mostrará el código QR en la pantalla de VTEX Sales App. El cliente debe escanear el código QR con el celular para realizar el pago.

Después de que el cliente realice el pago, la venta será procesada y finalmente confirmada en la página del pedido, como se muestra en la imagen a continuación.

### Boleto (Brasil)

El cliente debe seleccionar la opción **Boleto** y hacer clic en `Finalizar venta`.

El boleto se enviará al email del cliente. Después de que se confirme el pago del boleto, la venta será confirmada.

### Tarjeta de crédito

El cliente debe seleccionar la opción **Tarjeta de crédito**, seleccionar el número de cuotas de la compra y hacer clic en `Finalizar venta`.

VTEX Sales App mostrará una pantalla de espera mientras se realiza el pago en la máquina de tarjetas de la tienda. Una vez que el sistema reconozca el pago, la venta será confirmada.

### Tarjeta de débito

El cliente debe seleccionar la opción **Tarjeta de débito** y hacer clic en `Finalizar venta`.

VTEX Sales App mostrará una pantalla de espera mientras se realiza el pago en la máquina de tarjetas de la tienda. Una vez que el sistema reconozca el pago, la venta será confirmada.
