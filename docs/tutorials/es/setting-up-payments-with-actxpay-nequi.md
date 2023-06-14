---
title: 'Configurar pago con actXpay-Nequi'
id: 1Kqx4Q2tJgk6tP6vocDn0l
status: DRAFT
createdAt: 2022-05-05T17:19:13.381Z
updatedAt: 2022-12-23T19:51:33.076Z
publishedAt: 
firstPublishedAt: 2022-05-05T17:59:50.717Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-actxpay-nequi
legacySlug: configurar-pago-con-actxpay-nequi
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos actXpay-Nequi. Con este conector, tu tienda puede realizar ventas a través de __Nequi__ (sistema de pago colombiano).

Para configurar la afiliación actXpay-Nequi, siga los pasos a continuación:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
5. Haga clic en el conector __Actxpay-nequi__.
6. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por actXpayments.
7. Haga clic en __Guardar__.

## Configurar condición de pago
1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. Haga clic en la pestaña __Pagos Personalizados__. 
5. En __Pagarés__, haga clic en una de las 5 cajas de configuración de pago.
6. Rellene los siguientes campos con la información correspondiente:
- __Nombre:__ es el nombre que se utilizará para identificar el pago (actXpay-Nequi).
- __Descripción:__ ingrese los detalles de la condición de pago.
- __Validez de la promisoria (pagaré):__ Plazo límite que su cliente tendrá para pagar el pagaré antes de que caduque.
- __Autorizar automáticamente:__ seleccione si desea autorizar los pagos automáticamente. Recomendamos esta opción solo en casos en los que el pago que se realiza durante la entrega o recogida del pedido en la tienda. Si selecciona «Yes», el status del pedido cambia automáticamente a Preparando entrega sin pasar por ninguna verificación de pago.
- __Change margin:__ es el margen porcentual permitido para la modificación del importe del pago realizado con un pagaré. Para algunos clientes, puede ser importante permitir cambios en los pedidos ([change order](https://help.vtex.com/es/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete)). En este caso, debe rellenar el campo «Change margin» para determinar el porcentaje de margen de cambio permitido.
- __Activar la división de pago:__ indique si utilizará la solución de [split de pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete). Si selecciona esta opción, cuando la venta involucre tiendas del marketplace, el pagaré se dividirá entre los sellers y el marketplace.
- __Facturación automática:__ Número de días para la facturación automática del pagaré después de la autorización. 
Los pagarés se facturan en el momento de la autorización del pago. Al configurar este campo, la facturación no se producirá al momento de la autorización, sino después del número de días que establezca.<br>

<ul>
7. Haga clic en <b>Salvar</b> para guardar los cambios.
  </ul>

Después de seguir los pasos indicados, actXpay-Nequi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

Para obtener más información sobre el sistema de pagos de Nequi, visite el sitio web de [actXpayments](https://www.actx.com.co/actxpayments).
