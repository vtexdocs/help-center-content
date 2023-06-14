---
title: VTEX Invoice Notifier
id: 5yEdNF95nwbJBbWst128pL
status: DRAFT
createdAt: 2019-08-05T14:15:29.750Z
updatedAt: 2020-04-08T14:40:07.701Z
publishedAt: 
firstPublishedAt: 2019-08-05T16:04:44.610Z
contentType: tutorial
productTeam: Post-purchase
author: 3uCjaRpzeMieQWwWycYAMG
slug: vtex-invoice-notifier
legacySlug: vtex-invoice-notifier
subcategory: 54gbzsku02c4bKmgFbp3v3
---

## Instalación del app - VTEX Invoice Notifier

Usuario debe hacer instalación del APP a través de VTEX App Store - apps.vtex.com

*O hacerla por CLI de VTEX IO - vtex install vtex.invoice-notifier@0.x*

Al realizar la instalación, se mostrará una página de configuración donde el usuario ingresa el endpoint de comunicación con el sistema responsable de emitir las notas fiscales.

## OMS notificar facturador

Con el endpoint registrado en el APP, el OMS comienza a reconocer que se habilitó para esa tienda la posibilidad de notificar a un sistema externo de facturación.

El operador debe, en el pedido, seleccionar el paquete o los ítems que desea facturar y generar una nueva notificación:

![notify-invoicer1](//images.ctfassets.net/alneenqid6w5/1pTJ8sEgLo7cpyYcVFQKxR/7a0b066fc646d1941f3ac704023ea5f7/notify-invoicer1.png)

![notify-invoicer2](//images.ctfassets.net/alneenqid6w5/59qqed77NuvF0rrlpdABe9/1108b18f8eba54bf25c6766803578b42/notify-invoicer2.png)

Cuando el usuario del OMS presione el botón __Request Invoice__, el app realizará un request POST en el endpoint registrado en el APP con el siguiente BODY, ejemplo:

```json
{
  "orderId": "123",
  "notificationId": "fd3f5e70-8b60-11e8-b707-1195e463c587",
  "callbackUrl": "https://instore.myvtex.com/_v/invoice-notifier/123/invoice"
}
```

El facturador debe responder __200, 201, 202 o 204__ para esta llamada, de forma que el OMS entienda que la notificación fue realizada con éxito, de lo contrario, la UI mostrará un mensaje de falla de comunicación con el sistema facturador.

## CallbackUrl property

La propiedad *callbackUrl* es una __propiedad__ que especifica cuál dirección debe utilizarse para el __envío del invoice generado__. Este flujo se describe en la imagen inicial del flujo.

Esta propiedad debe utilizarse para saber a cuál dirección enviar el Invoice.

Una vez que se notifica con éxito, el APP graba en la Base de Datos (VBASE) esa notificación.

## Facturador obtener detalles de la nota fiscal

Con la notificación en manos el Facturador debe obtener los detalles de este Invoice (notificación) en la base de datos (VBASE). Pues la API de comunicación pasa apenas el pedido y el id de la notificación.     

__GET__

```
http://{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/:notificationId
```

__HEADERS__

```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’
 
o
 
‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```

__RESPONSE__

```
{
  "orderId": "123",
  "notification": {
    "id": "fd3f5e70-8b60-11e8-b707-1195e463c587",
    "items": [
      {
        "itemIndex": 0,
        "quantity": 1
      }],
    "changedItems": [ {
	"200342",
	 "230298"
	} ],
     "observation": "AGO2019"
  }
}
```

- orderId == id del pedido
- notification.id == hash que identifica esa solicitación de picking en la BD.
- `items[0]` == array que contiene el índice del ítem en el pedido y la cantidad  de ese ítem presente en esa notificación
- `changedItems[0]` == array de skus que se ingresaron en el pedido después del cierre del mismo 
- observation == string que recibe un mensaje de observación escrita en la interfaz

Además de buscar la Notificación completa, es necesario todavía obtener el pedido completo, para tener todos los detalles de cada ítem y en seguida incluso buscar en el catálogo cualquier detalle fiscal, como NCM.

Hay una API específica para obtener todas las notificaciones de un pedido en caso de que el Facturador quiera incluir la validación más completa:

__GET__

```
{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/
```

## Obtener datos completos del pedido

Al ser notificado de un nuevo pedido, y con los detalles del invoice en manos, será necesario buscar el pedido completo, pues la notificación guarda solamente el índice del ítem que se facturará. Índice del array de ítems  presente en el pedido.

## GET ORDER

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}
```

El response de esta API contiene los datos completos del pedido. Para emitir el invoice es necesario algunas partes del objeto, como datos del cliente, datos  de entrega, totalizadores de ítems - flete - descuentos, datos del ítem, CNPJ.

Se recomienda que el backend realice una validación si el pedido ya contiene nota fiscal, si ya está facturado (es posible que haya una facturación parcial).

## Obtener datos NCM de cada producto

VTEX tiene un campo en el registro de producto - TaxCode - que debe recibir el NCM del producto. Este campo está presente en los detalles del pedido y puede usarse para que el motor de parametrizaciones fiscales realice el cálculo de impuestos.

Algunos administradores de tienda no usan este campo y pasan el NCM como especificación de producto. En este modelo es necesario un request adicional al catálogo para recoger esos detalles:

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/products/{{productId}}/specification
```

__RESPONSE__

```
[
   {
       "Value": [
           "6914.10.00"
       ],
       "Id": 19,
       "Name": "NCM"
   }
]
```

## Identificar tipo de entrega del pedido

Un pedido puede ser de dos tipos, __Delivery__ o __Pickup-in-point__.

Un pedido delivery tiene los datos del cliente; es decir, tiene todos los datos de identificación para encuadrarse en el escenario de Nota Fiscal Electrónica (para los estados que exigen NFe y SAT).

Pedidos de Pickup pueden contener la identificación del cliente o no. Un pedido realizado en el inStore puede hacerse de forma anónima; es decir, sin identificación. En este caso, es obligatorio emitir una NFCe – Nota Fiscal del Consumidor Electrónica (para los estados específicos).

La forma básica de identificar si un pedido es Delivery o Pickup es a través del objeto __shippingData.logisticsInfo[0].deliveryChannel__

## Ingresar nota fiscal en el pedido

Una vez que haya enviado con éxito la Nota Fiscal para SEFAZ, es necesario incluir esa NOTA/CUPÓN en el OMS y para esto enviar para la dirección de la propiedad __callbackUrl__.

El payload enviado debe ser el siguiente:

__POST__ `{{callbackUrl}}`

Ejemplo de callbackUrl: `https://{{account}}.myvtex.com/_v/invoice-notifier/{{orderId}}/invoice`

```
{
 "type":"Output",
 "issuanceDate":"2018-01-31",
 "invoiceNumber":"9999",   // número de la NF
 "invoiceValue":"10000",  // valor final de la NF
 "invoiceKey": null,  // clave de acceso a la NF
 "invoiceUrl": null,  // link para danfe o cupón 
 "courier": null,
 "trackingNumber": null,
 "trackingUrl": null,
 "items": [
   {
     "id": "1234",
     "price": 10000,
     "quantity": 1
    }
  ]
 }
 ```
 
- id == id del sku (disponible en el GET ORDER `items[0].id`)
- invoiceNumber == número de la Nota Fiscal
- invoiceValue == sumatoria del sellingPrice de los skus presentes en esa - - nota fiscal + valor de flete prorrateado de estos ítems
- invoiceKey == clave de la Nota Fiscal

El OMS acepta múltiples Invoices, y el pedido alcanza el status FACTURADO apenas cuando el total de la suma de todos los invoices es igual al total del pedido.

El OMS __no__ guarda el XML de la nota fiscal, apenas el link para visualización.

## Borrar notificación de invoice de la BD

Después de incluir con éxito la Nota Fiscal en el pedido es necesario EXCLUIR la notificación de la base de datos VBase. Este paso es necesario para que no ocurra el siguiente escenario: que un usuario del OMS se confunda y excluya la notificación e intente notificar nuevamente. 

__DELETE__
`https://{{accountName}}.myvtex.com/_v/invoice-notifier/{{orderId}}/{{notification.id}}`

__HEADERS__
```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’
ou
‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```
 
## Facturación parcial de pedido

Es común el escenario de ruptura; es decir, que uno o más ítems no estén disponibles para la entrega. En este escenario, el operador del OMS puede facturar parcialmente un pedido.

En casos de facturación parcial es importante prestar atención al prorrateo del Flete.
El comportamiento correcto es seguir el prorrateo del valor del flete referente a los ítems de esta factura parcial.

En el JSON del pedido, dentro de logisticsInfo existe un  array con la información de flete para cada producto (cada índice de productos).

El prorrateo se realiza por producto; es decir, si hay una cantidad X de ese mismo producto y la factura parcial es una cantidad inferior a X, es necesario hacer el prorrateo de ese valor por la cantidad de ítems.

Ej.: Digamos que estuviésemos facturando apenas 1 unidad del producto, en lugar de todas las 3. El valor del flete de este producto (2,50) se dividiría entre 3 unidades:

```
"logisticsInfo": [
                "itemIndex": 0,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",
            },
            {
                "itemIndex": 1,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",
              }
        ]
        
## Notificación de devolución

La notificación hecha para generar una Nota Fiscal de devolución es del tipo output. 
"type": "Output"
Sin embargo, hay dos modelos de devolución posibles. Cuando se realiza una devolución en la propia tienda física donde se realizó la compra original y aún está en tiempo hábil de efectuar el extorno por la propia máquina de la tarjeta, llamamos a esta operación de cancelación.
En otros casos, puede hacerse la operación de devolución de un pedido realizado en otra localidad. En esta situación, la notificación tomará en consideración esta información dentro del campo observation.

__DEVOLUCIÓN__
{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore: { \"tradeAccount\": \"lojafarmgavea\" }",
   "items": [...],
}

__CANCELACIÓN__

{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore",
   "items": [...],
}


