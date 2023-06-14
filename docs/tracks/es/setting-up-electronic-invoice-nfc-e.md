---
title: Configurar impresión de factura de consumidor electrónica (NFC-e)
id: 3v0HJIbYdWIsQggoQgUYsg
status: DRAFT
createdAt: 2018-06-25T22:29:30.122Z
updatedAt: 2021-08-24T20:47:32.245Z
publishedAt: 
firstPublishedAt: 2018-06-25T22:40:47.613Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-impresion-de-factura-de-consumidor-electronica-nfc-e
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Utilizando inStore usted puede vender los productos de su tienda física recibiendo con la máquina de tarjeta y generando la NFC-e en el mismo momento. Para realizar la impresión de la NFC-e dependemos de dos etapas:

- Generar la NFC-e
- Imprimir la NFC-e y los recibos de la tarjeta

## Generar la NFC-e

Para generar la NFC-e usted dependerá del servicio de un socio VTEX que realizará toda la configuración necesaria para la facturación. Recomendamos los socios e-Millenium y Webbsys.

> __IMPORTANTE__: Si usted está en un estado en que el uso del SAT Fiscal sea obligatorio, como en el caso de São Paulo, usted también necesitará ese equipo.


## Imprimir la NFC-e y los recibos de la tarjeta

__IMPORTANTE__: Puede que necesite la ayuda de un profesional de infraestructura para configurar su red y un desarrollador para cambiar la configuración de inStore en JavaScript.

1. Conecte la impresora térmica no fiscal USB al equipo Windows donde el programa de facturación de nuestro socio se está ejecutando.
2. Instale y ejecute inStore en ese equipo Windows (baje en http://instore.vtex.com/download).
3. Establezca un IP fijo en ese equipo de Windows para utilizarse como dirección de impresión.
4. Suponiendo que haya configurado inStore usando __Easy Setup__, agregue el siguiente código en el archivo `checkout-instore-custom.js` (disponible en el admin del Portal):
 
```
/* Print configurations (uncomment for invoice on each sale) */

const IP_GLOBAL = '127.0.0.1' // Replace for correct internal IP on your network

window.ORDER_PLACED_HOOK_GLOBAL = {
 url: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 cancelUrl: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 invoiceEndpoints: {
   Output: 'http://' + IP_GLOBAL + ':6060/api/vtex/order',
   Input: 'http://' + IP_GLOBAL + ':6060/api/vtex/cancela',
 },
 // printImmediately: false, // If true, it prints the receipt as soon as the "Order placed" screen is opened. If undefined the behavior is to print after a sale and to not print when visiting past orders
}
```

5) Reemplace el valor de `IP_GLOBAL` presente en el código de configuración expuesto anteriormente por el IP fijo del equipo Windows.
