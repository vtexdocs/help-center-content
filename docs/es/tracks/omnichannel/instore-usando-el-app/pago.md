---
title: 'Pago'
id: 2xxwfe7UQhd33nPTIRF9Yw
status: PUBLISHED
createdAt: 2021-08-05T14:37:01.824Z
updatedAt: 2023-05-31T14:45:11.158Z
publishedAt: 2023-05-31T14:45:11.158Z
firstPublishedAt: 2021-08-05T14:46:59.026Z
contentType: trackArticle
productTeam: Shopping
slugEN: payment
locale: es
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: instore-usando-el-app
order: 15
---

En el paso de pago de VTEX Sales App, las [opciones de pago que se han configurado](/es/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) aparecerán en su tienda.

![instore-payment-es](//images.ctfassets.net/alneenqid6w5/1Kka7eQvf03YXWR5DA2NEJ/b91142c0f767502f5e68f91830032fcb/Screenshot_2022-10-21_at_15-02-51_VTEX_VTEX Sales App_Checkout.png)

La barra superior de la pantalla de pago muestra las siguientes opciones:

- __Compartir:__ compartir un enlace de pago con el cliente.
- __Cupón:__ Añade un cupón de descuento.
- __Vale de regalo:__ añada un vale de regalo al pedido.
- __CPF:__ cambiar el número de CPF que aparecerá en la factura del pedido.

VTEX Sales App le permite seleccionar varios pagos. Por ejemplo, al elegir __Pago en efectivo__ y luego hacer clic en `Agregar otro pago`, el cliente puede hacer parte del pago en efectivo y parte en tarjeta de crédito o débito.

Para continuar, es necesario seleccionar uno o más métodos de pago deseados y hacer clic en `Finalizar venta`.

## Medios de pago disponibles

Durante la configuración de VTEX Sales App, se pueden agregar los siguientes medios de pago:

- [Efectivo](#efectivo)
- [Pix (Brasil)](#pix-brasil)
- [Boleto (Brasil)](#boleto-brasil)
- [Tarjeta de crédito](#tarjeta-de-credito)
- [Tarjeta de débito](#tarjeta-de-debito)

Para configurar un medio de pago, sigue las instrucciones de la guía[ VTEX Sales App - Pagos](/es/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

### Efectivo

El cliente debe seleccionar la opción **Efectivo** y hacer clic en `Finalizar venta`.

![instore-dinheiro-es](//images.ctfassets.net/alneenqid6w5/1Tz1XMpd6ObLZbyBcluOti/12ee090451235610a53ec937f8af2b69/Screenshot_2022-10-21_at_15-03-02_VTEX_VTEX Sales App_Checkout.png)

Luego, el cliente debe realizar la transacción con el vendedor. La aprobación de la venta puede ser [manual o automática](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), dependiendo de la configuración de la tienda.

### Pix (Brasil)

El cliente debe seleccionar la opción **Pix** y hacer clic en `Finalizar venta`.

![instore-pix-es](//images.ctfassets.net/alneenqid6w5/1A1uD4bC5JfDii4ih7gdED/2f9ad65f84c36686f1e9f06ed94a69ed/Screenshot_2022-10-21_at_15-03-27_VTEX_VTEX Sales App_Checkout.png)

Después de finalizar la venta, se mostrará el código QR en la pantalla de VTEX Sales App. El cliente debe escanear el código QR con el celular para realizar el pago.

![instore-pix2-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/instore-usando-el-app/pago_1.png) 

Después de que el cliente realice el pago, la venta será procesada y finalmente confirmada en la página del pedido, como se muestra en la imagen a continuación.

![instore-pix3-es](//images.ctfassets.net/alneenqid6w5/4lRaRqYX4eqB07IMj7IGay/3d4621cb3e131300d783dae3b5531f73/Screenshot_2022-10-21_at_15-03-58_VTEX_VTEX Sales App_Checkout.png)

### Boleto (Brasil)

El cliente debe seleccionar la opción **Boleto** y hacer clic en `Finalizar venta`.

![instore-boleto-es](//images.ctfassets.net/alneenqid6w5/3OonA4B8NNyKrINN0SY2Q/e0800b0dc8dec484040eb5980a888adc/Screenshot_2022-10-21_at_15-02-56_VTEX_VTEX Sales App_Checkout.png)

El boleto se enviará al email del cliente. Después de que se confirme el pago del boleto, la venta será confirmada.

### Tarjeta de crédito

El cliente debe seleccionar la opción **Tarjeta de crédito**, seleccionar el número de cuotas de la compra y hacer clic en `Finalizar venta`.

 ![instore-credito-es](//images.ctfassets.net/alneenqid6w5/4GGFgdlEpYIKYbdjG74C4g/ede072361e0b860a57134816109a34e7/Screenshot_2022-10-21_at_15-03-20_VTEX_VTEX Sales App_Checkout.png)

VTEX Sales App mostrará una pantalla de espera mientras se realiza el pago en la máquina de tarjetas de la tienda. Una vez que el sistema reconozca el pago, la venta será confirmada.

### Tarjeta de débito

El cliente debe seleccionar la opción **Tarjeta de débito** y hacer clic en `Finalizar venta`.

![instore-debito-es](//images.ctfassets.net/alneenqid6w5/6XEmL7UR7K7L3YdfsPLY8q/4574ff7ac0657f38ccc46ecfcb7200e7/Screenshot_2022-10-21_at_15-03-13_VTEX_VTEX Sales App_Checkout.png)

VTEX Sales App mostrará una pantalla de espera mientras se realiza el pago en la máquina de tarjetas de la tienda. Una vez que el sistema reconozca el pago, la venta será confirmada.

