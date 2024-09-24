---
title: 'Configurar pagos con Mercado Pago'
id: 2FPdhTma6QywUmwEcEUGoS
status: PUBLISHED
createdAt: 2018-03-08T21:11:28.158Z
updatedAt: 2024-01-23T11:46:52.226Z
publishedAt: 2024-01-23T11:46:52.226Z
firstPublishedAt: 2018-03-08T22:43:32.092Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-mercado-pago
locale: es
legacySlug: configurar-pagos-con-mercado-pago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Además de un subadquirente para procesar transacciones realizadas con diversas condiciones de pago, Mercado Pago también ofrece un servicio de [cartera digital](/es/faq/que-es-una-cartera-digital). Para habilitar esta condición de pago, primero usted debe configurar una de las afiliaciones de gateway compatibles:

- MercadoPago
- [MercadoPagoV1](https://help.vtex.com/es/tutorial/configurar-o-subadquirente-mercadopagov1#)
- [MercadoPagoV2](https://help.vtex.com/es/tutorial/configurar-o-subadquirente-mercadopagov2#)

A continuación se muestran las configuraciones para el conector __Mercado Pago__.

## Configurar gateway MercadoPago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __MercadoPago__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro con las credenciales proporcionadas por MercadoPago (campos _Client id_ y _Client secret_), recordando que no deben comenzar con __APP\_USR__.
5. En el campo __País__, seleccione el país de su tienda.
6. En __Time Zone__, indique la región que define su horario local.
7. En __orderExpirationHours__, defina por cuántas horas el sistema debe comprobar el estado del pedido antes de su expiración. Cuando esta opción no se llena, se adopta el valor predeterminado de 192 horas.
8. En el campo __maxInstallments__, elija la cantidad máxima de parcelas enviadas a MercadoPago.
9. En __Categoría Principal__, elija la categoría que más se ajuste a su tienda.
10. Acceda al enlace `http://developers.mercadopago.com/documentation/instant-payment-notifications` y haga clic en el botón __Configure the URL where you want to receive notifications__.
11. Acceda al dominio `vtexpayments` a través del enlace `https://{AccountName}.vtexpayments.com.br/mp/payment/notifications` para configurar las notificaciones que van a ser enviadas por MercadoPago.
12. En el campo __Tipo de estorno__ ("Tipo de retorno"), elija entre el proceso automático o la solicitud manual (en este caso, MercadoPago enviará un e-mail avisando del retorno pendiente).
13. Haga clic en __Guardar__.

>⚠️ El paso indicado en el item **11** es realizado en ambiente externo a VTEX. Por lo tanto, el proceso indicado puede ser actualizado sin previo aviso.

## Configurar la condición de pago MercadoPago
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración > Planes de pago**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __MercadoPago__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
6. Seleccione entre __efectivo__ o __parcelado__. Más información sobre estas opciones pueden ser encontradas [en este artículo](/es/tutorial/condiciones-de-pago).
7. También es posible configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, MercadoPago aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, su cliente se dirigirá al ambiente de la cartera digital, donde deberá seguir los pasos de autenticación.
