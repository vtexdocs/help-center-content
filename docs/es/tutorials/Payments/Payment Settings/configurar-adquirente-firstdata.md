---
title: 'Configurar adquirente FirstData'
id: 4mW6gU343eWY6c8m6ocO0i
status: ARCHIVED
createdAt: 2018-04-26T21:04:20.319Z
updatedAt: 2024-03-18T18:23:46.570Z
publishedAt: 
firstPublishedAt: 2018-04-26T22:08:51.029Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-firstdata-acquirer
locale: es
legacySlug: configurar-adquirente-firstdata
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

En VTEX es posible la integración con FirstData. Con este proveedor tu comercio podrá realizar ventas mediante tarjetas de crédito, débito y Plan Ahora (sistema de pagos argentino).

Para configurar FirstData, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __FirstData__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Complete los campos solicitados con la siguiente información:

- __UserName__: ID del usuario que tiene permiso para acceder a la API de Web Service. Esta información es necesaria para realizar la autorización básica.
- __Contraseña para autorización básica__: Contraseña general del usuario de FirstData (la misma que fue citada en el campo «Nombre de usuario»), que se utilizará en la autorización.
- __ID de tienda__: Código que se envía en el archivo .XML de las llamadas. 
- __País__: País de origen de la cuenta.
- __Moneda__: Moneda del país de origen.
- __Descripción de la transacción__: Texto que identificará la compra en el extracto de su cliente.
- __Contraseña del certificado privado__: Contraseña del certificado en su tienda.
- __Certificado privado (.p12)__: Realice la carga de un certificado privado válido (generado por usted, utilizando un certificador o un software especializado), con extensión .p12 y clave.
- __Plan Ahora__: Si activó las opciones de plan de gobierno Ahora con FirstData, elija «True», de lo contrario, elija «False». Para más detalles sobre el plan Ahora, [haga clic aquí](http://planesahora.gob.fiservargentina.com/).
  -   __Plan Ahora 3__: Para los descuentos de pago en 3 cuotas.
  -   __Plan Ahora 6__: Para los descuentos de pago en 6 cuotas.
  -   __Plan Ahora 10__: Para los descuentos de pago en 10 cuotas.
  -   __Plan Ahora 12__: Para los descuentos de pago en 12 cuotas.
  -   __Plan Ahora 18__: Para los descuentos de pago en 18 cuotas.
  -   __Plan Ahora 24__: Para los descuentos de pago en 24 cuotas.
  -   __Plan Ahora 30__: Para los descuentos de pago en 30 cuotas.

- __Auto Settle__: Configure esta opción para definir cuándo se realizará la captura automática del pago.

  -  __Inmediatamente__: La captura se realizará tras la autorización del pago.
  -  __1 - 30 días__: La captura se realizará después de la autorización del pago, teniendo en cuenta el número de días seleccionado.
  -  __Desactivado__: La captura automática estará desactivada y no tendrá el comportamiento estándar de la plataforma (4 días para la captura). De esta forma, el pedido solo se captará en el momento en que se factura, o si la [captura manual](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/settlement-request) se habilita.

- __Change Margin__: Defina el margen porcentual para que un pago se modifique a un valor superior al autorizado inicialmente. Por ejemplo, si la compra se cerró y autorizó por USD 100, pero hay un [cambio en el pedido](https://help.vtex.com/es/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190) a un valor superior antes de la captura, este conector permite que el aumento sea de hasta un 20% del valor que se autorizó inicialmente.

<ul>
5. Guarde la configuración realizada.
  </ul>

Para configurar los métodos de pago a procesar por FirstData, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials).

Para definir condiciones especiales sobre los métodos de pago, acceda a [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorial).

Después de seguir los pasos indicados, el conector FirstData puede tardar hasta 10 minutos en aparecer en la caja de tu tienda como opción de pago.
