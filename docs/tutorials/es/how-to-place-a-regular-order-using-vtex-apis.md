---
title: 'Hacer un pedido regular utilizando las APIs de VTEX'
id: 5NEGP7hofS4eMMSWgeAY82
status: DRAFT
createdAt: 2017-12-29T14:54:18.987Z
updatedAt: 2021-10-25T23:51:41.642Z
publishedAt: 
firstPublishedAt: 2017-12-29T14:56:06.826Z
contentType: tutorial
productTeam: Others
author: 5Hp3cEFKikMGWycwa42QuG
slug: hacer-un-pedido-regular-utilizando-las-apis-de-vtex
locale: es
legacySlug: hacer-un-pedido-regular-utilizando-las-apis-de-vtex
subcategory: 1vwB9FtTSQmcSewQw02QoW
---

En este tutorial, usted aprenderá a hacer un simple pedido **REGULAR** (hecho, pagado y entregado bajo la responsabilidad de un solo agente).

¡Vamos a empezar!

<div class="alert alert-warning">
<strong>Importante:</strong> para cualquier autenticación requerida por las APIs presentadas en este tutorial, usted debe proporcionar un <b>AppToken</b> y un <b>AppKey</b> válidos registrados en el módulo <b>License Manager</b> de su cuenta y habilitados con permisos suficientes.
</div>

**PERMISOS NECESARIOS**

La tabla siguiente muestra el conjunto mínimo de permisos necesarios.

| Producto | Permiso |
| ---------- | ---------- |
| Checkout | Permite el acceso a todos los carritos; Permite el acceso a todos los pedidos; Cancelación de pedidos |
| Pagos | Hacer Pagos; Ver Datos de Pago |
| VTEX Fulfilment | Crear Pedidos; Obtener información de compra |
| OMS | Notificar Pagos; Ver Pedidos; Cancelar Pedidos |
| Checkout (al hacer el pedido para __usuarios existentes__) | Permite el acceso a todos los carritos; Permite el acceso a todos los pedidos; Cancelación de pedidos |

# Simular carrito

La primera cosa que usted debe hacer es comprobar si el Seller (en este caso, su propia tienda) puede hacer el fulfillment de un determinado carrito. Así, un request de **simulación** es exactamente como su sistema sabrá qué opciones de entrega y pago están disponibles, si las hay.

Para hacer esto, sólo tiene que enviar un request **POST** al siguiente endpoint:
`https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orderforms/simulation`
(si es necesario, usted puede especificar una **política comercial** utilizando el parámetro **"sc"**)

con los headers:
```
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

y también una **cart description** ("descripción de carrito") dentro de su payload.
Por ejemplo, para simular el pedido de **una** unidad del producto con **SKU ID** "1" para el código postal 33301 en los Estados Unidos:

>__Nota__: usted debe utilizar un código ISO ALPHA-3 para el valor de país (**"country"**).

```json
{
  "items": [
    {
      "id": "1", 
      "quantity": 1,
      "seller": "1"
    }
  ],
  "postalCode": "33301",
  "country": "USA"
}
```

Si todo está bien y usted recibió un código de respuesta **200 OK** sin ningún **mensaje de error**, podemos proseguir.

Del contenido de la respuesta, usted utilizará principalmente los bloques **items**, **"logisticsInfo"** y **"paymentData"**. Más información sobre cada uno de ellos se proporcionará en los próximos pasos.

## Comprobar si un cliente ya existe en su base de datos
Cada vez que intenta hacer un pedido, debe proporcionar una dirección de correo electrónico para identificar al cliente. Una vez que una solicitud se realiza correctamente, la dirección de correo electrónico proporcionada se asigna a un perfil de cliente de su tienda.
>**Importante:** su sistema sólo podrá **reutilizar** o **actualizar** un perfil de cliente existente haciendo un **nuevo pedido** si las credenciales usadas en este momento tienen los permisos de **Checkout** enumerados al principio de este tutorial.

Por lo tanto, es posible que desee comprobar si una determinada dirección de e-mail ya está vinculada a un cliente suyo, para evitar cualquier problema de permiso y también recuperar cualquier información guardada.

Para comprobar una dirección de e-mail para perfiles existentes, basta con enviar un request **GET** al siguiente endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/profiles?email={{emailAddress}}`

Si la respuesta a este request devuelve cualquier contenido, significa que la dirección de e-mail ya está asignada a un perfil. En este caso, sería interesante tener alguna información guardada, como **"userProfileId"** y **"addressId"** (en el array **"availableAddresses"**), que se utilizará en el siguiente paso.

## Construir el **"orderForm"**
El **orderForm** de un pedido **simple** consiste en **cinco** elementos principales:

1. **"items"**.
2. **"clientProfileData"**.
3. **"shippingData"** - **"address"**.
4. **"shippingData"** - **"logisticsInfo"**.
5. **"paymentData"**.

### "items"
Este es el núcleo de su pedido. Se trata de una array que contiene los **productos (SKUs)** del pedido.

De la respuesta de simulación de carrito obtenida a partir del primer paso de este tutorial, utilice el bloque **"items"** para obtener la información necesaria.

Por lo tanto, considerando sólo un ítem en el carrito, cree un bloque con la siguiente estructura:

```json
"items": [{
  "id": "1",
  "quantity": 1,
  "seller": "1",
  "price": 10000,
  "rewardValue": 0,
  "offerings": [],
  "priceTags": [],
  "isGift": false
}]
```

### "clientProfileData"
Este objeto contiene la información sobre el cliente que hizo la compra.

Considerando que usted va a hacer el pedido para un **nuevo cliente**, utilice el siguiente ejemplo:

```json
"clientProfileData": {
  "email": "email@domain.com",
  "firstName": "Testing",
  "lastName": "VTEX",
  "document": "078051120",
  "documentType": "ssn",
  "phone": "1234567890",
  "corporateName": null,
  "tradeName": null,
  "corporateDocument": null,
  "stateInscription": null,
  "corporatePhone": null,
  "isCorporate": false
}
```

>**Nota:** si está haciendo el pedido para un usuario existente (y tiene todos los permisos necesarios), usted puede enviar el valor **"email"** en el **"clientProfileData"**. Además, si desea actualizar cualquier información, puede simplemente enviarla también.

### "shippingData" - "address"
Este objeto contiene información de dirección. Tendrá la misma estructura para usos de envío o facturación.

Consulte el ejemplo siguiente para crear su propio objeto **"address"**.

```json
"address": {
  "addressType": "residential",
  "receiverName": "Testing VTEX",
  "postalCode": "33301",
  "city": "Fort Lauderdale",
  "state": "FL",
  "country": "USA",
  "street": "110 East Broward Blvd",
  "number": null,
  "neighborhood": null,
  "complement": "Suite 1700",
  "reference": null,
  "geoCoordinates": []
}
```

>**Nota:** si desea utilizar una información de dirección recuperada de un perfil de usuario existente, basta con enviar su valor **"addressId"** dentro de este objeto **"address"**.

### "shippingData" - "logisticsInfo"
El **"logisticsInfo"** es una array que contiene la opción de entrega seleccionada (con costos de flete detallados) para cada objeto presente en la array **"items"** indicada por el valor **"itemIndex"**.

Como sólo tenemos un producto en el carrito en este ejemplo, sólo habrá un objeto en la array **"logisticsInfo"**.

A continuación, considerando una entrega no programada, en la array **"logisticsInfo"** de la respuesta de simulación del carrito, elija una opción dentro de la array **"slas"**.

A partir de la opción elegida, obtenga los valores **"id"** y **"price"** y cree un bloque **"logisticsInfo"**, como el del ejemplo siguiente, donde el valor **"selectedSla"** es el **"id"** del objeto **"slas"** seleccionado.

```json
"logisticsInfo": [{
  "itemIndex": 0,
  "selectedSla": "Regular",
  "price": 100
}]
```
>**Nota:** el valor **"itemIndex"** representa la posición del referido **"item"** en la categoría **"items"**.

### "paymentData"
Este bloque informa el método de pago y las opciones de parcelación (si está disponible) seleccionadas para el pedido.

>**Nota:** para este tutorial, consideraremos un **método de pago único** con **una parcela** y **sin intereses**.

En la array **"installmentOptions"** del objeto **"paymentData"** devuelto en la respuesta de simulación de carrito, navegue hasta el sistema de pago deseado (utilice el valor **"paymentName"** como referencia) y verifique si hay un objeto dentro de la array **"installments"** con el valor **"count"** de **"1"**. Si es así, tome su valor **"paymentSystem"**.

Con esta información, cree el **"paymentData"** como en el ejemplo siguiente.
Una vez que no tenemos intereses aplicados ni múltiples parcelas, los valores **"referenceValue"** y **"value"** serán los mismos, y el valor de **"installments"** será **"1"**.
>**Nota:** el valor total del **"paymentData"** debe ser la **suma** de los ítems y de los precios de las opciones de entrega seleccionadas.

```json
"paymentData": {
  "id": "paymentData",
  "payments": [{
    "paymentSystem": "1",
    "referenceValue": 10100,
    "value": 10100,
    "installments": 1
  }]
}
```

## Hacer el pedido
El último paso antes de hacer el pedido, es compilar todos los componentes anteriores en un **"orderForm"**. Así, usando todos los ítems presentados como ejemplo en este tutorial, su **"orderForm"** debe quedar así:
```json
{
  "items": [{
    "id": "1",
    "quantity": 1,
    "seller": "1",
    "price": 10000,
    "rewardValue": 0,
    "offerings": [],
    "priceTags": [],
    "isGift": false
  }],
  "clientProfileData": {
    "email": "email@domain.com",
    "firstName": "Testing",
    "lastName": "VTEX",
    "document": "078051120",
    "documentType": "ssn",
    "phone": "1234567890",
    "corporateName": null,
    "tradeName": null,
    "corporateDocument": null,
    "stateInscription": null,
    "corporatePhone": null,
    "isCorporate": false
  },
  "shippingData": {
    "id": "shippingData",
    "address": {
      "addressType": "residential",
      "receiverName": "Testing VTEX",
      "postalCode": "33301",
      "city": "Fort Lauderdale",
      "state": "FL",
      "country": "USA",
      "street": "110 East Broward Blvd",
      "number": "110",
      "neighborhood": "Broward",
      "complement": "Suite 1700",
      "reference": null,
      "geoCoordinates": []
    },
    "logisticsInfo": [{
      "itemIndex": 0,
      "selectedSla": "Regular",
      "price": 100
    }]
  },
  "paymentData": {
    "id": "paymentData",
    "payments": [{
      "paymentSystem": "1",
      "referenceValue": 10100,
      "value": 10100,
      "installments": 1
    }]
  }
}
```
>**Nota:** el objeto **"shippingData"** contiene los objetos **"address"** y **"logisticsInfo"**. Además, tiene el valor **"id"** como **"shippingData"**.

Ahora que tiene toda la información necesaria para hacer el pedido, usted debe enviar este **"orderForm"** a través de un request **PUT** al siguiente endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orders`
(también, si es necesario, puede especificar una **política comercial** utilizando el parámetro **"sc"**)

con el header:
```
Accept: application/json
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

>**Nota:** tenga en cuenta que casi todos los datos de productos, envío y pago utilizados en este tutorial son **sólo un ejemplo** para una tienda ficticia. Así, utilizar exactamente el **"orderForm"** presentado en este paso probablemente **no** funcionará en su propio ambiente.

Si el request tiene como respuesta el código **"201 Creado"**, usted debe tomar nota de cuatro informaciones del contenido de esa respuesta:

1. **"orderId":** uno de los valores de la raíz en cada objeto a partir de la array **"orders"**.
2. **"transactionId":** uno de los valores de la raíz dentro del objeto **"paymentData"**.
3. **"addressId":** si está utilizando la misma dirección de envío y cobro, tome este ID del objeto **"shippingData"**.
4. **"Vtex_CHKO_Auth":** un cookie de autenticación que se envía con la respuesta.

>**Atención:** a partir de este momento, usted tiene **5 minutos** para completar el proceso de pago. En caso contrario, el pedido será automáticamente **cancelado** y marcado como **"Incompleto"**.

## Enviar información de pago

Con los valores **"orderId"** y **"transactionId"** en manos, usted debe informar a la plataforma VTEX los datos de pago que se deben utilizar para resolver el pago del pedido.

Para este paso, debe hacer un request **POST** para el siguiente endopint:
`https://{{AccountName}}.vtexpayments.com.br/api/pub/transactions/{{transactionId}}/payments`

con el header sólo identificando el valor **"Content-Type"**:
```
Content-Type: application/json
```

enviando un payload con base en el contenido del **"paymentData"** presente en el **"orderForm"**.

Para la mayoría de los casos, quedará más o menos así:
```json
[
  {
    "paymentSystem": 1,
    "paymentSystemName": "American Express",
    "group": "creditCardPaymentGroup",
    "installments": 1,
    "installmentsInterestRate": 0,
    "installmentsValue": 10100,
    "value": 10100,
    "referenceValue": 10100,
    "fields": {
      "holderName": "Testing VTEX",
      "cardNumber": "4444 3333 2222 1111",
      "validationCode": "1234",
      "dueDate": "10/20",
      "addressId": {{addressId}}
    },
    "transaction": {
      "id": {{transactionId}},
      "merchantName": {{YOUR-ACCOUNT-NAME}}
    },
    "currencyCode": "USD"
  }
]
```
>**Nota #1:** en el objeto **"fields"**, usted puede enviar un **"addressId"** para usar una dirección existente o un nuevo objeto **"address"**.
>
>**Nota #2:** asegúrese de que todos los valores **"value"** correspondan a la información enviada al realizar el pedido.

## Solicitar procesamiento de pago

Finalmente, cuando todo está configurado, sólo tiene que solicitar al módulo de pagos para procesar las transacciones asignadas al pedido.

Para ello, tome el **"Vtex_CHKO_Auth"** y envíe un request __POST__ al siguiente endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/{{orderGroup}}`

con el header abajo:
```
Content-Type:application/json
Accept:application/json
Cookie:Vtex_CHKO_Auth={{Vtex_CHKO_Auth}}
```

>**Nota #1:** el **"orderGroup"** es el **"orderId"** sin el *prefijo* después del símbolo "-".
> Este valor también está presente en la respuesta del Order Place.
>
**Nota #2:** tenga en cuenta que este proceso utilizará los conectores de gateway configurados en su ambiente VTEX. Tenga cuidado para evitar cualquier obligación no deseada o denegación de pago inesperado.

## Comprobar los resultados

**Muy bien! Llegamos al final.**

Para comprobar si todo está bien, usted puede simplemente acceder al módulo OMS en el Admin o solicitar la información del pedido utilizando nuestra API del **OMS**:
`http://{{AccountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}`

Si el pago se ha procesado correctamente (independientemente del resultado), el status del pedido ya no debe ser **"payment-pending"**. Y usted debe poder continuar con el pedido según sus reglas de negocio.

Ya está.
¡Nos vemos!
