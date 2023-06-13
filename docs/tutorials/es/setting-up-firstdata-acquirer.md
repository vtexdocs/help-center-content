---
title: Configurar adquirente FirstData
id: 4mW6gU343eWY6c8m6ocO0i
status: PUBLISHED
createdAt: 2018-04-26T21:04:20.319Z
updatedAt: 2023-03-21T18:04:57.904Z
publishedAt: 2023-03-21T18:04:57.904Z
firstPublishedAt: 2018-04-26T22:08:51.029Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-firstdata
legacySlug: configurar-adquirente-firstdata
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

FirstData, es un adquirente que está disponible exclusivamente para el mercado brasileño y argentino.

Para configurar la solución, realice los siguientes pasos:

1. Acceda al __Admin__ VTEX.
2. En el módulo __Pagos__, haga clic en __Configuración__.
3. Acceda a __Afiliaciones__ y haga clic en el botón verde “__+__”
4. Busque __FirstData__ y seleccione el conector.
5. Complete los campos solicitados con la siguiente información:

- __Nombre de usuario:__ ID del usuario que tiene permiso para acceder a la API de Web Service. Esta información es necesaria para realizar la autorización básica
- __Contraseña para autorización básica:__ Contraseña general del usuario de FirstData (la misma que fue citada en el campo «Nombre de usuario»), que se utilizará en la autorización.
- __Store ID:__ Código que se envía en el archivo .XML de las llamadas. 
- __País:__ País de origen de la cuenta.
- __Moeda:__ Moneda del país de origen.
- __Soft Descriptor:__ Texto que identificará la compra en el extracto de su cliente.
- __Contraseña del certificado privado:__ Contraseña del certificado en su tienda.
- __Certificado privado (.p12):__ Realice la carga de un certificado privado válido (generado por usted, utilizando un certificador o un software especializado), con extensión .p12 y clave.
- __Plan Ahora:__ Si activó las opciones de plan de gobierno Ahora con FirstData, elija «True», de lo contrario, elija «False». Para más detalles sobre el plan Ahora, [haga clic aquí](http://planesahora.gob.fiservargentina.com/).
  -   __Plan Ahora 3:__ Para los descuentos de pago en 3 cuotas.
  -   __Plan Ahora 6:__ Para los descuentos de pago en 6 cuotas.
  -   __Plan Ahora 10:__ Para los descuentos de pago en 10 cuotas.
  -   __Plan Ahora 12:__ Para los descuentos de pago en 12 cuotas.
  -   __Plan Ahora 18:__ Para los descuentos de pago en 18 cuotas.
  -   __Plan Ahora 24:__ Para los descuentos de pago en 24 cuotas.
  -   __Plan Ahora 30:__ Para los descuentos de pago en 30 cuotas.

- __Auto Settle:__ Configure esta opción para definir cuándo se realizará la captura automática del pago.

  -  __Inmediatamente:__ La captura se realizará tras la autorización del pago.
  -  __1 - 30 días:__ La captura se realizará después de la autorización del pago, teniendo en cuenta el número de días seleccionado.
  -  __Desactivado:__ La captura automática estará desactivada y no tendrá el comportamiento estándar de la plataforma (4 días para la captura). De esta forma, el pedido solo se captará en el momento en que se factura, o si la [captura manual](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/settlement-request) se habilita.

- __Change Margin:__ Defina el margen porcentual para que un pago se modifique a un valor superior al autorizado inicialmente. Por ejemplo, si la compra se cerró y autorizó por USD 100, pero hay un [cambio en el pedido](https://help.vtex.com/es/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190) a un valor superior antes de la captura, este conector permite que el aumento sea de hasta un 20% del valor que se autorizó inicialmente.

<ul>
6. Guarde la configuración realizada.
  </ul>

### Configurar condiciones de pago

Después de realizar todos los pasos, FirstData estará configurada y lista para utilizarse en su tienda.

Para asociarla a una condición de pago, lea el artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
