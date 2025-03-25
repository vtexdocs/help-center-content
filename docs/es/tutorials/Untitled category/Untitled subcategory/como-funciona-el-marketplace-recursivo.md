---
title: 'Cómo funciona el Marketplace Recursivo '
id: 6Cfx9xrJb61RZFc2GZaxCv
status: ARCHIVED
createdAt: 2019-03-12T21:51:12.693Z
updatedAt: 2019-12-31T15:27:53.350Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slugEN: how-recursive-marketplace-works
locale: es
legacySlug: como-funciona-el-marketplace-recursivo
subcategoryId: unknown-subcategory
---

Para que una tienda VTEX consiga vender los productos de sus franquicias en un marketplace externo, era necesario configurar la integración de todas las tiendas franquicias, es decir, de todos los sellers, con el marketplace deseado.

Esta estructura, además de no ser escalable, desperdicia la capacidad omnichannel de VTEX como el uso del _change seller_, funcionalidad que otorga autonomía a los marketplaces para el cambio de seller, eso es, para el cambio de quien realiza la entrega del pedido.

Con el __Marketplace Recursivo__, todas las [cuentas franquicias](/tutorial/que-son-cuenta-franquicia-y-seller-white-label?locale=es) están completamente integradas a la cuenta principal. Esto significa que cuando la cuenta principal configura una integración con un marketplace externo, las cuentas franquicia se integran automáticamente a él, ya que no es necesario administrar cada franquicia individualmente para configurar su integración al marketplace.

Al permitir que todo el inventario de una red de tiendas físicas sea integrado a marketplaces externos sin esfuerzo, la funcionalidad de Marketplace Recursivo crea los __pedidos de cadena__, es decir, pedidos de agentes intermediarios cuyo flujo es llevar el pedido de su origen ([marketplace](/tutorial/que-es-un-marketplace?locale=es)) a su destino ([seller](/tutorial/que-es-un-seller?locale=es)).

Para entender mejor el escenario, suponga que una cuenta franquicia quiera vender sus productos en un marketplace externo. La cuenta principal actuará como _seller_ del marketplace en cuestión y, al mismo tiempo, como _marketplace_ de su cuenta franquicia. Por lo tanto, los pedidos de cadena tienen características tanto de _marketplace_, por asumir el papel de marketplace de un seller, así como de _seller_, por ser también sellers de un marketplace.

Con eso:

- __Cuando una tienda VTEX es la fuente de un pedido__: pedido de Marketplace con Checkout Workflow.

- __Cuando una tienda VTEX es el destino de un pedido__: pedido de Seller con Fulfillment Workflow.

- __Cuando una tienda VTEX es intermediaria en el flujo de un pedido__: pedido de cadena con __Chain Workflow__:

![marketplace-recursivo-chain-order-workflow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Untitled%20category/Untitled%20subcategory/como-funciona-el-marketplace-recursivo_1.png)


## Configuración

Para utilizar esta funcionalidad, es necesario que la tienda que asumirá el papel de marketplace en el flujo de pedido (el enlace más cercano al cliente) ajuste sus __APIs de Checkout__.

Además de los nuevos campos `marketplaceServiceEndpoint` y `marketplaceOrdergroup`, la API de placeOrder del Checkout recibirá el `marketplacePaymentValue`, así como la API de Fulfillment lo recibía hasta hoy, con la información que el afiliado le debe. Esto quita la obligación de transacción en el pedido.

Además, una ruta fue creada para el progreso del pedido después de la aprobación del marketplace. El marketplace también debe soportar una ruta para ser notificado de la cancelación del seller (o del agente de cadena) y de la factura del seller (o del agente de cadena).


#### PlaceOrder

Llamada de lectura para __inserción del pedido__:

- Método: `PUT`

- URL: `{host}api/checkout/pvt/orders?sc={sc}&affiliateId={affiliateId}`

>Ej.:

```
{
    "items": [
{
    "id": "8",
    "quantity": 1,
    "seller": "1",
    "price": 12
},
{
    "id": "36",
    "quantity": 1,
    "seller": "1",
    "price": 120
}
    ],
    "clientProfileData": {
"email": "sicrano@mailinator.com"
    },
    "shippingData": {
"attachmentId": "shippingData",
"logisticsInfo": [
    {
        "itemIndex": 0,
        "selectedSla": "Retirada (14b25e5)",
        "selectedDeliveryChannel": "pickup-in-point",
        "price": 0
    },
    {
        "itemIndex": 1,
        "selectedSla": "Normal",
        "selectedDeliveryChannel": "delivery",
        "price": 0
    }
],
"selectedAddresses": [
    {
        "addressId": "-4581767308704"
    }
]
    },
	"marketplacePaymentValue":1550,
	"marketplaceOrderGroup":"testeSchirmer10",
	"marketplaceServicesEndpoint":"http://portal.vtexcommerce.com.br/api/oms?an=qamarketplace"
}
```

- __Tenga en cuenta que `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` y `marketplaceServicesEndpoint` son los nuevos campos obligatorios. El campo `paymentData` ya no es obligatorio.__


#### Marketplace Order Authorization 

Ruta para que el marketplace notifique el pedido de cadena que su progreso fue aprobado:

- Método: `POST`

- URL: `{host}/api/checkout/pvt/orders/{orderId}/receipts/marketplace-order-authorization`

>Ej.:

```
{
"marketplaceOrderGroup": "{ ID o ordergroup del pedido de marketplace}",
"authorizationReceipt":  {
        "date": "{fecha deseada}",
        "receipt": "{recibo}"
    }
}
```
- __Tenga en cuenta que `orderId` es el ID del pedido de cadena.__

#### Cancel notification

Ruta del marketplace para que el pedido de cadena pueda informarle sobre la cancelación de un pedido:

- Método: `POST`

- URL: `{host}/pvt/orders/order-group/{orderGroup}/notifications`

>Ej.:

```
{ 
"id":"sellerOrderCancelled", 
"sellerOrderId": {ID del pedido en nuestro system}
}
```

- __Tenga en cuenta que `orderGroup` es el ID o ordergroup del pedido de marketplace.

#### Invoice 

Ruta del marketplace para que el pedido de cadena informe sobre la factura del pedido:

- Método: `POST`

- URL: `{host}/pub/orders/order-group/{orderGroup}/invoice`

>Ej.:

```
{
	\"invoiceNumber\":\"7999972\",
	\"invoiceValue\":7450,
	\"issuanceDate\":\"2019-02-07T02:00:00.000Z\",
	\"invoiceUrl\":\"http://www.invoiceu.rl\",
	\"invoiceKey\":\"799\",
	\"trackingNumber\":\"9997LUX\",
	\"trackingUrl\":\"http://www.trackingu.rl\",
	\"courier\":\"Todos los códigos postales\",
	\"items\": [
				{
			     \"id\": \"1231\",
			     \"price\": 7450,
			     \"quantity\": 1
}
          
```   

Ejemplo de _response_:

```
{
"date": "2018-11-21T11:50:09.9994509-02:00",
"orderId": "876053333998-01",
"receipt": "95233cf2078d418ba77155380c18f398"
}

```

