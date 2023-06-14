---
title: 'Guía de integración de ERPs - Pedidos'
id: 3w09vFuYoUKcUyweWguoma
status: DRAFT
createdAt: 2017-09-11T22:24:49.039Z
updatedAt: 2020-06-04T01:06:08.130Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:36:11.243Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracion-de-erps-pedidos
locale: es
legacySlug: guia-de-integracion-de-erps-pedidos
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

La única razón para la existencia de una tienda es vender. Esto significa no sólo recibir pedidos hechos por los clientes, sino también hacer el cumplimiento de estos pedidos de manera eficiente.

Cuanto mayor sea la operación, mayor será la necesidad de una plataforma automatizada para manejar los pedidos recibidos por diferentes canales.

En este artículo, usted encontrará el método principal para la entrada de los pedidos recibidos por su tienda en su plataforma de fulfillment.

# Visión general

La integración de un pedido comprende cuatro momentos distintos, cada uno de ellos siendo un pequeño proceso por sí solo.

![ERP Orders 1](//images.contentful.com/alneenqid6w5/7MtCGP7jpKOO2gKa8muGwO/481c6346e0d216f1cbe0588dc79eb617/ERP_Orders_1.png) 

# Pasos de la integración de pedidos

Vamos a ver con más detalle cada uno de los pasos de la integración de pedido.

## Download de pedido

La primera cosa que usted necesita para descargar un pedido es saber el momento adecuado para hacerlo. Para ayudarle en esta tarea, VTEX ofrece el Feed de pedidos. Este servicio informa cambios importantes en el workflow del pedido, especialmente cambios en el status de los pedidos.

Después de decidir que es hora de llevar un pedido a su plataforma de fulfillment, sólo tiene que descargar los detalles de ese pedido y decirle al feed que no tiene que enviar ese evento de nuevo, una vez que su interés en él terminó.

Al final, para los pedidos procesados, usted envía al OMS un mensaje de "Start Handling".

![ERP Orders 2](//images.contentful.com/alneenqid6w5/3SUWupt48gSG2iqM2q8qEA/28a578fa22944fac74f7f9d9121506ca/orders-integration-download.png) 

### Llamadas de API


__1. Take feed event:__

[https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus)

```
curl --request GET \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed?maxlot={{maxLot}}' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}’
```

__2. Get order detail:__

[https://developers.vtex.com/reference/orders#getorder](https://developers.vtex.com/reference/orders#getorder)
```
curl --request GET \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__3. start-handling:__

[https://developers.vtex.com/reference/orders#starthandling](https://developers.vtex.com/reference/orders#starthandling)

Usted también verá esta llamada en otros pasos del proceso de integración, con el cambio sólo del evento objetivo.

Es muy importante llamar a la transición "start-handling", ya que esa es la operación que conecta el pedido y el conteo de stock con la reserva de stock en el módulo de logística de VTEX. En este paso el pedido va a ser cambiado de "Listo para el manejo", va a pasar en "Iniciar manoseo" y va a parar en "Preparando Entrega".

```
curl --request POST \
  --url 'http://{{accountname}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/start-handling' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__4. Ack feed:__

[https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus)
```
curl --request POST \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
    "handles":[
        "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
    ]
}
```'
```

## Factura

Ahora el pedido está siendo procesado por su plataforma de fulfillment. Durante este proceso, es posible que tenga que realizar cambios en el pedido original, ya sea por la ruptura de stock, ya sea por cualquier otra razón. Es posible que desee quitar, agregar o cambiar ítems, causando o no cambios en el valor del pedido.

Cuando esté listo para la entrega del pedido, es el momento de informarle a VTEX. Así, la autorización de pago podrá ser capturada y el consumidor será notificado sobre el progreso.

![ERP Orders 3](//images.contentful.com/alneenqid6w5/5UGtFvC0UwoEoEcqQk8kGa/249a691293a7f195257f5c161565cf5c/ERP_Orders_3.png)

### Llamadas de API

__1. Enviar cambios a la tienda:__

[https://developers.vtex.com/reference/orders#registerchange](https://developers.vtex.com/reference/orders#registerchange)

```
curl --request POST \
  --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/changes' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '{
  "reason": “Promotion by phone.”,
  "discountValue": 1000,
  "incrementValue": 0,
  "itemsRemoved": [
    {
      "id": "234794",
      "price": 600,
      "quantity": 2
    }
  ],
  "itemsAdded": [
    {
      "id": "234788",
      "price": 200,
      "quantity": 1
    }
  ]
}’
```

__2. Enviar factura a la tienda:__

[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)
```
curl --request POST \
    --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
    --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
    --data '{
  "type":"Output",
  "issuanceDate":"2010-01-31",
  "invoiceNumber":"9999",
  "invoiceValue":"10000",
  "invoiceKey": null,
  "invoiceUrl": null,
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
}’
```

## Rastreo de pedido

La última etapa de su gestión de pedidos es enviar información de rastreo del pedido a VTEX.

Aunque no es un paso necesario para que el pedido llegue al consumidor, esta es una de las features más importantes para una buena experiencia del usuario. No hay nada como saber con precisión la ubicación del producto comprado.

No hay límite para el número de mensajes de rastreo que se pueden agregar a una factura. Normalmente, se añade un mensaje para cada evento de rastreo hasta que los ítems se entreguen al comprador. En el caso de productos digitales, este último evento sería la URL para download.

Es importante resaltar que esa información es, en realidad, un conjunto de atributos de una factura. Por lo tanto, puede ser enviada junto a la factura, en el momento de envío a la tienda, si usted tiene esa información en esa etapa.

![ERP Orders 4](//images.contentful.com/alneenqid6w5/1v0Mk0y5a0uAmgcGmgAks4/6d416ec4b79faa89330d683a32c6905c/ERP_Orders_4.png) 

### Llamadas de API

__1. Enviar información de entrega a la tienda:__

[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)
```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
 "type":"Output",
 "issuanceDate":"2010-01-31",
 "invoiceNumber":"9999",
 "invoiceValue":"10000",
 "invoiceKey": null,
 "invoiceUrl": null,
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
}’


__2. Enviar mensajes de rastreo a la tienda:__

[https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber)

```
curl --request PATCH \
  --url https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice/{{invoiceNumber}} \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
  "trackingNumber": "87658",
  "trackingUrl": null,
  "courier": null
}
```

## Paso extra: Cancelación de pedido

Cuando, por algún motivo operativo, tenga que cancelar el pedido que se está procesando, usted puede enviar un mensaje de cancelación al workflow del OMS. Si el pedido está en un status que no permite la cancelación, aparecerá un error.

__Atención__: los pedidos con factura no se pueden cancelar.

### Llamada de API


[https://developers.vtex.com/reference/orders#cancelorder](https://developers.vtex.com/reference/orders#cancelorder)

```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/cancel' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
  ```
