---
title: 'Configurar pagos con Pagaré'
id: 5pW7avTwtyQcMu4uiW8quQ
status: PUBLISHED
createdAt: 2018-06-21T20:20:24.484Z
updatedAt: 2023-03-26T21:50:26.482Z
publishedAt: 2023-03-26T21:50:26.482Z
firstPublishedAt: 2018-06-25T15:42:31.515Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-pagare
legacySlug: configurar-pagos-con-pagare
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, su tienda puede recibir pagos a través de pagarés. Para habilitar esta opción, debe realizar los siguientes pasos:

1. [Configurar la afiliación de gateway](#configurar-la-afiliacion-de-gateway)
2. [Configurar Pagaré](#configurar-pagare)
3. [Configurar las condiciones de pago](#configurar-las-condiciones-de-pago)

## Configurar la afiliación de gateway

Para configurar una afiliación de gateway, acceda a [Registrar afiliaciones de gateway](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444#).

<div class="alert alert-warning">
Verifique que la afiliación de gateway deseada admita el procesamiento de pagos de pagarés.
</div>

## Configurar Pagaré

Después de configurar una de las afiliaciones de gateway indicadas, debe configurar el pago personalizado del __Pagaré__.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la pestaña __Pagos Personalizados__. 
3. En __Pagarés__, haga clic en una de las 5 cajas de configuración de pago.
4. Rellene los siguientes campos con la información correspondiente:

- __Nombre:__ es el nombre que se utilizará para identificar el pago.
- __Descripción:__ ingrese los detalles de la condición de pago.
- __Validez de la promisoria (pagaré):__ Plazo límite que su cliente tendrá para pagar el pagaré antes de que caduque.
- __Autorizar automáticamente:__ seleccione si desea autorizar los pagos automáticamente. Recomendamos esta opción solo en casos en los que el pago que se realiza durante la entrega o recogida del pedido en la tienda. Si selecciona «Yes», el status del pedido cambia automáticamente a Preparando entrega sin pasar por ninguna verificación de pago.
- __Change margin:__ es el margen porcentual permitido para la modificación del importe del pago realizado con un pagaré. Para algunos clientes, puede ser importante permitir cambios en los pedidos ([change order](https://help.vtex.com/es/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete)). En este caso, debe rellenar el campo «Change margin» para determinar el porcentaje de margen de cambio permitido.
- __Activar la división de pago:__ indique si utilizará la solución de [split de pagos](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete). Si selecciona esta opción, cuando la venta involucre tiendas del marketplace, el pagaré se dividirá entre los sellers y el marketplace.
- __Facturación automática:__ Número de días para la facturación automática del pagaré después de la autorización. 
Los pagarés se facturan en el momento de la autorización del pago. Al configurar este campo, la facturación no se producirá al momento de la autorización, sino después del número de días que establezca.<br>

<ul>
5. Haga clic en <b>Salvar</b> para guardar los cambios.
  </ul>

## Configurar las condiciones de pago

Después de completar todos los pasos, el pago con pagaré está configurado y listo para ser utilizado en su tienda.

Para asociarlo a una condición de pago, siga el artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
