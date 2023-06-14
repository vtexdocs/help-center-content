---
title: 'Integración entre Marketplace que no es VTEX y Seller VTEX - Acciones Referentes al Envío y Procesamiento de Pedidos'
id: 5AiW7dZ4nGMDI9TAg43zmf
status: DRAFT
createdAt: 2019-09-16T12:52:46.627Z
updatedAt: 2022-02-03T19:17:44.983Z
publishedAt: 
firstPublishedAt: 2019-10-16T14:43:50.013Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integracion-entre-marketplace-que-no-es-vtex-y-seller-vtex
legacySlug: integración-entre-marketplace-que-no-es-vtex-y-seller-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Consulte la versión actualizada de esta <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guía de integración con marketplaces</a> en nuestro Developer Portal.
</div> 

El último paso para integrar un  Marketplace que no es VTEX a un Seller VTEX es permitir la comunicación con el Seller sobre __pedidos__ realizados en el  Marketplace.

Seis acciones de integración a través de  API REST son parte de esta etapa:

1. Buscar precio, inventario y datos de flete del SKU (Simulación de Carrito).
2. Implementar rutina que ingrese pedido en el Seller.
3. Implementar rutina que autoriza despacho de pedido en el Seller.
4. Informar factura.
5. Informar código de rastreo de la transportadora (si existiera).
6. Recibir solicitud de cancelación (si sucediera).

Si desea ver el flujo general de la integración, consulte el artículo [Guía de integración para Marketplace no hospedado en la plataforma VTEX] ().

## 1) Buscar precio, inventario y datos de flete - Marketplace llama endpoint del Seller

<div class="">
Este es el mismo request utilizado en la última fase de  <a href="">integración con el catálogo del Seller</a>.
</div>

Cuando un producto se ingresa en el carrito del **Marketplace** o se hace alguna edición en el carrito, el **Marketplace** debe realizar una consulta de simulación de carrito en el *Seller* para verificar si los datos de precio, inventario y flete actualmente aplicados continúan válidos.

Luego, cuando el cliente va a pagar, se debe realizar otra simulación de carrito, nuevamente para verificar si los datos del SKU siguen siendo válidos.

### Ejemplo de llamada  API REST:

Buscar precio, inventario y datos de flete del SKU en el Seller y simular un carrito con estos datos.

Endpoint: `https://{AccountName}.[vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`](http://vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=%7bidcanal%7d&affiliateId=%7bidafiliado%7d%60)  

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parámetro | Descripción  |  
| ---------- | ---------- |  
| AccountName | Account Name del Seller VTEX |  
| idcanal | Política Comercial que se debe considerar en la simulación del carrito |  
| idafiliado | Id del afiliado que se debe considerar en el contexto de la simulación |  

Ejemplos de body del request y de la respuesta, así como la descripción de cada campo, pueden encontrarse en la tercera etapa del [artículo sobre integración con el  catálogo del Seller]().  

## 2) Ingresar pedido en el Seller - Marketplace llama endpoint en el Seller  

Cuando un pedido se cierra en el **Marketplace**, este llama un endpoint del Seller a través de la __API de Place Order__ para ingresar el pedido en el Seller.

### Ejemplo de llamada API REST:  

Endpoint: `https://{AccountName}.[vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc={idCanal}&affiliateId={idAfiliado}`](http://vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=%7bidCanal%7d&affiliateId=%7bidAfiliado%7d%60)  

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parámetro | Descripción |  
| ---------- | ---------- |  
| AccountName | Account Name del Seller VTEX |  
| idCanal | ID de la Política Comercial registrada en VTEX |  
| idAfiliado | ID del afiliado registrado en el Seller VTEX |  

#### Ejemplo de body del request:  

```json  
[  
{  
"marketplaceOrderId": "956",  
"marketplaceServicesEndpoint": "[https://urlmarketplace/](https://urlmarketplace/)",  
"marketplacePaymentValue": 16080,  
"items": [  
{  
"id": "2",  
"quantity": 1,  
"seller": "1",  
"commission": 0,  
"freightCommission": 0,  
"price": 9990,  
"bundleItems": [],  
"itemAttachment": {  
"name": null,  
"content": {}  
},  
"attachments": [],  
"priceTags": [],  
"measurementUnit": null,  
"unitMultiplier": 0,  
"isGift": false  
}  
],  
"clientProfileData": {  
"id": "clientProfileData",  
"email": "[32172239852@gmail.com](mailto:32172239852@gmail.com)",  
"firstName": "Julio",  
"lastName": "Cáceres Olivares",  
"documentType": null,  
"document": "CACG791122HSLBDN05",  
"phone": "5551301958",  
"corporateName": null,  
"tradeName": null,  
"corporateDocument": null,  
"stateInscription": null,  
"corporatePhone": null,  
"isCorporate": false,  
"userProfileId": null  
},  
"shippingData": {  
"id": "shippingData",  
"address": {  
"addressType": "Residencial",  
"receiverName": "Julio Cáceres Olivares",  
"addressId": "Casa",  
"postalCode": "06000",  
"city": "Ciudad de México",  
"state": "CX",  
"country": "MEX",  
"street": "CALLE DE LA PALMA",  
"number": "38",  
"neighborhood": "CENTRO HISTÓRICO DE LA CDAD. DE MÉXICO",  
"complement": null,  
"reference": "Ciudad de México / al lado de Hotel NH Collection",  
"geoCoordinates": []  
},  
"logisticsInfo": [  
{  
"itemIndex": 0,  
"selectedSla": "Correos",  
"lockTTL": "8d",  
"shippingEstimate": "7d",  
"price": 1090,  
"deliveryWindow": null  
}  
]  
},  
"paymentData":null,  
"openTextField": null  
}  
]  
```  

| Campo | Type | Descripción | ¿Obligatorio? |  
| ---------- | ---------- | ---------- | ---------- |  
| marketplaceOrderId | string | | |  
| marketplaceServicesEndpoint | string | | |  
| marketplacePaymentValue | integer | | |  
| items | array de objetos | Contiene los datos de venta de los SKUs del pedido | |  
| id | string | ID del SKU conforme registrado en VTEX | |  
| quantity | integer | Cantidad del ítem en el carrito | |

#### Ejemplo de body de la respuesta:  

```json  
[  
{  
"marketplaceOrderId": "956",  
"orderId": "MMX-956",  
"followUpEmail": "[9762a2a9028a4b5d8eb9a8ff909d15ce@ct.vtex.com.br](mailto:9762a2a9028a4b5d8eb9a8ff909d15ce@ct.vtex.com.br)",  
"items": [  
{  
"id": "2",  
"quantity": 1,  
"seller": "1",  
"priceTable": null,  
"commission": 0,  
"freightCommission": 0,  
"price": 13890,  
"bundleItems": [],  
"priceTags": [],  
"measurementUnit": "un",  
"unitMultiplier": 1.0000,  
"isGift": false  
}  
],  
"clientProfileData": {  
"email": "[fba45537f5c84d4092cf064da742fe3d@ct.vtex.com.br](mailto:fba45537f5c84d4092cf064da742fe3d@ct.vtex.com.br)",  
"firstName": "Julio",  
"lastName": "Cáceres Olivares",  
"documentType": "curp","document": "CACG791122HSLBDN05”,  
"phone": "5551301958",  
"corporateName": null,  
"tradeName": null,  
"corporateDocument": null,  
"stateInscription": null,  
"corporatePhone": null,  
"isCorporate": false,  
"userProfileId": null  
},  
"shippingData": {  
"isFOB": false,  
"address": {  
"addressType": "Residencial",  
"receiverName": "Julio Cáceres Olivares",  
"addressId": "Casa",  
"postalCode": "06000",  
"city": "Ciudad de México",  
"state": "CX",  
"country": "MEX",  
"street": "CALLE DE LA PALMA",  
"number": "38",  
"neighborhood": "CENTRO HISTÓRICO DE LA CDAD. DE MÉXICO","complement": null,  
"reference": "Ciudad de México / al lado de Hotel NH Collection",  
"geoCoordinates": []  
},  
"selectedAddresses": [  
{  
"addressType": "Residencial",  
"receiverName": "Julio Cáceres Olivares",  
"addressId": "Casa",  
"postalCode": "06000",  
"city": "Ciudad de México",  
"state": "CX",  
"country": "MEX",  
"street": "CALLE DE LA PALMA",  
"number": "38",  
"neighborhood": "CENTRO HISTÓRICO DE LA CDAD. DE MÉXICO",  
"complement": null,  
"reference": "Ciudad de México / al lado de Hotel NH Collection",  
"geoCoordinates": []  
}  
],  
"logisticsInfo": [  
{  
"itemIndex": 0,  
"selectedSla": "Correos",  
"addressId": "Casa",  
"selectedDeliveryChannel": "delivery",  
"deliveryIds": [  
{  
"warehouseId": "1_1",  
"dockId": "1"  
}  
],  
"lockTTL": "8d",  
"shippingEstimate": "7d",  
"price": 1090,  
"deliveryWindow": null  
}  
],  
"trackingHints": []  
},  
"paymentData": null,  
"customData": null  
}  
]  
```  

| Campo | Type | Descripción |  
| ---------- | ---------- | ---------- |  
| marketplaceOrderId | string | ID del pedido ingresado por el Marketplace. Debe ser definido por el propio Marketplace. |
| orderId | string 	| 	|  
| followUpEmail | string 	| 	|  
| items | array de objetos | |  
| id | string | |  
| quantity | integer | |  
| seller | string | |  
| priceTable | string | |  
| commission | integer | |  
| freightCommission | integer | |  
| price | integer | |  
| bundleItems | array | |  
| priceTags | array | |  
| measurementUnit | string | |  
| unitMultiplier | integer | |  
| isGift | boolean | |  
| clientProfileData | objeto | |  
| email | string | |  
| firstName | string | |  
| lastName | string | |  
| documentType | string | |  
| document | string | |  
| phone | string | |  
| corporateName | string | |  
| tradeName | string | |  
| corporateDocument | string | |  
| stateInscription | string | |  
| corporatePhone | string | |  
| isCorporate | boolean | |  
| userProfileId | string | |  
| shippingData | objeto | |  
| isFOB | boolean | |  
| address | objeto | |  
| addressType | string | |  
| receiverName | string | |  
| addressId | string | |  
| postalCode | string | |  
| city | string | |  
| state | string | |  
| country | string | |  
| street | string | |  
| number | string | |  
| neighborhood | string | |  
| complement | string | |  
| reference | string | |  
| geoCoordinates | array | |  
| selectedAddresses | array de objetos | |  
| addressType | string | |  
| receiverName | string | |  
| addressId | string | |  
| postalCode | string | |  
| city | string | |  
| state | string | |  
| country | string | |  
| street | string | |  
| number | string | |  
| neighborhood | string | |  
| complement | string | |  
| reference | string | |  
| geoCoordinates | array | |  
| logisticsInfo | array de objetos | |  
| itemIndex | integer | |  
| selectedSla | string | |  
| addressId | string | |  
| selectedDeliveryChannel | string | |  
| deliveryIds | array de objetos | |  
| warehouseId | string | |  
| dockId | string | |  
| lockTTL | string | |  
| shippingEstimate | string | |  
| price | integer | |  
| deliveryWindow | string | |  
| trackingHints | array | |  
| paymentData | string | |  
| customData | string | |  

## 3) Autorizar despacho de pedido en el Seller - Marketplace llama endpoint en el  Seller  

Una vez que se completa el pago del pedido en el **Marketplace**, este necesita hacer una llamada al *Seller* con el objetivo de autorizar el despacho del pedido.  

### Ejemplo de chamada API REST:  

Endpoint: `https://{AccountName}.[vtexcommercestable.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill?sc={idCanal}&affiliateId={idAfiliado}`](http://vtexcommercestable.com.br/api/fulfillment/pvt/orders/%7BorderId%7D/fulfill?sc=%7bidCanal%7d&affiliateId=%7bidAfiliado%7d%60)  

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parámetro | Descripción |  
| ---------- | ---------- |  
| AccountName | Account Name del Seller VTEX |  
| orderId | ID del pedido, compuesto por el ID del afiliado (es decir del Marketplace) + el `marketplaceOrderId`, informado en la llamada de ingreso del pedido (ver paso anterior). Si, por ejemplo, el ID del afiliado es `MMX` e o `marketplaceOrderId` es `956`, el `orderId` é `MMX-956` |  
| idCanal | ID de la Política Comercial registrada en VTEX |  
| idAfiliado | ID del afiliado registrado en el Seller VTEX |  

#### Ejemplo de body del request:  

```json  
{  
"marketplaceOrderId": "956"  
}  
```  

| Campo | Type | Descripción | ¿Obligatorio? |  
| ---------- | ---------- | ---------- |---------- |  
| marketplaceOrderId | string | ID del pedido ingresado por el Marketplace. Debe ser igual al informado en el body de la llamada de ingreso de pedido en el  Seller. | Sí |  

#### Ejemplo de body de la respuesta:  

```json  
{  
"orderId": "MMX-958",  
"marketplaceOrderId": "958",  
"receipt": "5c54532d-da9d-4140-a1e7-323009f977cc",  
"date": "2019-10-01T18:50:13.7394634Z",  
"items": [  
{  
"id": "4"  
},  
{  
"id": "13"  
}  
],  
"shippingData": {  
"logisticsInfo": [  
{  
"itemIndex": 0,  
"selectedSla": "Normal",  
"selectedDeliveryChannel": "delivery",  
"shippingEstimateDate": "2019-10-08T18:50:13.217302Z"  
},  
{  
"itemIndex": 1,  
"selectedSla": "Express",  
"selectedDeliveryChannel": "pickup-in-point",  
"shippingEstimateDate": "2019-10-09T15:23:10.242501D"  
}  
]  
}  
}  
```  

| Campo | Type | Descripción |  
| ---------- | ---------- | ---------- |  
| orderId | string | ID del pedido, formado por la unión del ID del afiliado con el `marketplaceOrderId`. |  
| marketplaceOrderId | string | ID del pedido creado por el Marketplace en el paso de ingreso del pedido en el seller |  
| receipt | string | ID genérico que sirve opcionalmente como referencia para control |  
| date | string | Momento en que el despacho fue autorizado |  
| items | array de objetos | Contiene los IDs de los SKUs del pedido |  
| id | string | ID del SKU |  
| shippingData | objeto | Contiene datos de envío del pedido |  
| logisticsInfo | array de objetos | Contiene datos logísticos del envío del pedido |  
| itemIndex | integer | Se refiere a cada ítem dentro de `ítems`. Dentro de `logisticsInfo`, el objeto de `itemIndex` = `0` se refiere al primer ítem del array `ítems`; el objeto de `itemIndex` = `1` se refiere al segundo ítem del array `ítems`; y así sucesivamente. |  
| selectedSla | string | Tipo de entrega conforme registrado en el módulo de Inventario y Envío |  
| selectedDeliveryChannel | string | Indica si es un envío normal (`delivery`) o se recoge en tienda (`pickup-in-point`) |  
| shippingEstimateDate | string | Fecha y hora estimadas para el envío |  

## Marketplace Services Endpoint  

<div class="alert alert-info">  
El <strong>Marketplace Services Endpoint</strong> es un endpoint que debe ser creado por el Marketplace, con el objetivo de recibir tres informaciones diferentes enviadas por el Seller:<br>- Factura<br>- Código de rastreo de la transportadora (si existiera)<br>- Solicitación de cancelación (si sucediera)  
</div>  

Para los tres próximos pasos de la integración, el Marketplace necesita:

1. Implementar ese endpoint de su lado, preparándolo para recibir un payload como el del siguiente ejemplo.  

2. Informar ese endpoint anteriormente en el request de ingreso del pedido, por medio del campo `marketplaceServicesEndpoint` (vea el paso 2 de este artículo).  

### Ejemplo de llamada API REST:  

Endpoints:  
- Para informar datos de la Factura o código de rastreo: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`  
- Para solicitar cancelación del pedido: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`  

El `{marketplaceServicesEndpoint}` debe ser implementado por el Marketplace. El siguiente fragmento (`/pvt/orders/{marketplaceOrderId}/invoice` o `/pvt/orders/{marketplaceOrderId}/cancel`) es ingresado por VTEX, formando las rutas que deben esperarse por el Marketplace en cada caso.  

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parámetro | Descripción |  
| ---------- | ---------- |  
| marketplaceOrderId | ID del pedido en el Marketplace. Debe ser igual al informado en el body de la llamada de ingreso de pedido en el Seller. |  

#### Ejemplo de body del request:  

```json  
{  
"type": "Output",  
"invoiceNumber": "Fra-00001",  
"courier": "",  
"trackingNumber": "753573",  
"trackingUrl": "[http://www.carriertrackingurl.com](http://www.carriertrackingurl.com/)",  
"items": [  
{  
"id": "345117",  
"quantity": 1,  
"price": 9003  
}  
],  
"issuanceDate": "2013-11-21T00:00:00",  
"invoiceValue": 9508  
}  
```  

| Campo | Type | Descripción |  
| ---------- | ---------- | ---------- |  
| type | string | Si es `Output`, significa que se trata de una venta; si es `Input`, se trata de una devolución |  
| invoiceNumber | string | Número de la Factura |  
| courier | string | Nombre de la transportadora responsable por el envío |  
| trackingNumber | string | Código de rastreo del envío (cuando la llamada es para informar la Factura, este campo viene vacío) |  
| trackingUrl | string | URL para rastreo del envío (cuando la llamada es para informar la Factura, este campo viene vacío) |  
| items | array de objetos | Ítems del pedido que constan en la Factura |  
| id | string | ID del ítem |  
| quantity | integer | Cantidad del ítem |  
| price | integer | Precio del ítem |  
| issuanceDate | string | Fecha de emisión de la Factura |  
| invoiceValue | integer | Valor de la Factura |  

## 4) Recibir información de Factura - Seller llama endpoint del Marketplace (Marketplace Services Endpoint)  

Al emitir la Factura referente a un pedido, el Seller necesita enviar los dados de esa  Factura para el Marketplace. Esto lo hace a través del request enviado al __Marketplace Services Endpoint__, explicado anteriormente.  

Para recibir información de la Factura, el endpoint final esperado debe ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`  

## 5) Recibir código de rastreo de la transportadora - Seller llama endpoint del Marketplace (Marketplace Services Endpoint)  

Una vez que el despacho es autorizado, el seller emite la Factura y entrega los productos a la transportadora. Con esto, la transportadora puede generar un código de rastreo del envío e informarlo al Seller.

El Seller debe, entonces, enviar esta información al  Marketplace, para que este, a su vez, informe el código de rastreo al cliente que realizó la compra.

El vendedor envía el código y la URL de rastreo al __Marketplace Services Endpoint__ a través de los siguientes campos del request explicado anteriormente:

```json  
"courier": "",  
"trackingNumber": "753573",  
"trackingUrl": "[http://www.carriertrackingurl.com](http://www.carriertrackingurl.com/)"  
```  

| Campo | Type | Descripción |  
| ---------- | ---------- | ---------- |  
| courier | string | Nombre de la transportadora |  
| trackingNumber | string | Código de rastreo de la transportadora |  
| trackingUrl | string | URL de rastreo de la transportadora, donde el cliente final acompaña el estado del envío |  

Para recibir el código de rastreo, el endpoint final esperado debe ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`  

<div class="alert alert-info">  
Aunque la ruta para recibir el código de rastreo sea la misma donde el Marketplace recibe la Factura (<code>.../invoice</code>), estos dos procesos ocurren en dos etapas. Es decir, en una primera llamada, el Seller envía los datos de la Factura; y, en una segunda llamada, envía los datos de rastreo.</div>

## 6) Recibir solicitud de cancelación - Seller llama endpoint del Marketplace (Marketplace Services Endpoint)  

A veces el seller necesita solicitar la cancelación de un pedido. Hace esto también a través de un request enviado al __Marketplace Services Endpoint__.  

Para recibir una solicitud de cancelación de pedido, el endpoint final esperado debe ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`  

__Importante__: para que la cancelación funcione, el Marketplace debe enviar una respuesta a la llamada del seller, de acuerdo al formato del siguiente ejemplo.  

### Ejemplo de respuesta:  

```json  
{  
"orderId": "564041714680-01",  
"receipt": "5342fde6-86d1-4220-a83b-9a992145b547",  
"date": "2015-10-08T20:36:51.2390821+00:00"  
}  
```  

| Campo | Type | Descripción | ¿Obligatorio? |  
| ---------- | ---------- | ---------- | ---------- |  
| orderId | string | ID del pedido, formado por el ID del afiliado + el `marketplaceOrderId`, que es el ID del pedido en el Marketplace, informado por este en el body de la llamada de ingreso de pedido en el Seller. | Sí |  
| receipt | string | ID genérico que puede servir como referencia para control | |  
| date | string | Fecha y hora en que se produjo la cancelación | |
