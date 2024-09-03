---
title: 'Crear campos personalizables en el carrito por API'
id: YeX7AzNYyGCuwsQiImI0i
status: ARCHIVED
createdAt: 2019-01-24T20:45:43.946Z
updatedAt: 2020-10-29T00:19:05.391Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:02:31.448Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: crear-campos-personalizables-en-el-carrito-por-api
locale: es
legacySlug: crear-campos-personalizables-en-el-carrito-por-api
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Durante el proceso de checkout, algunas tiendas tienen la necesidad de solicitar al cliente datos que no forman parte del conjunto estándar de objetos de orderForm. Por ejemplo: género, número de celular, edad, etc.

Para ello, usted puede utilizar las dos llamadas de Custom Data: una para crear campos adicionales en el orderForm y otra para definir el valor de cada uno de estos campos.

Estos datos estarán disponibles dentro del Pedido, en las APIs de _orders_ (Gestión de pedidos).

Consulte la [aquí la documentación completa de la API de Custom Data](https://developers.vtex.com/reference/custom-data).

## Crear campos personalizables

Para crear campos personalizados en el orderForm, utilice la llamada siguiente:

&bull; URL: `https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`

&bull; Método: `POST`

A continuación se muestra un ejemplo del JSON que debemos pasar en el body de esta llamada.

```json
{
	"paymentConfiguration": 
	{
		"requiresAuthenticationForPreAuthorizedPaymentOption": false
	},
	"minimumQuantityAccumulatedForItems": 1,
	"decimalDigitsPrecision": 2,
	"minimumValueAccumulated": 0,
	"apps": 
	[
		{
			"id":"profile",
			"fields":
			[
				"edad",
				"genero"
			]
		},
		{
			"id":"direccion",
			"fields":
			[
				"telefono2"
			]
		}
	]
}
```

El objeto `apps` es el que define los campos personalizables que se insertarán en el orderForm de la tienda.

Al hacer la llamada pasando el body del ejemplo anterior, se crearán dos aplicaciones, que funcionan como grupos de campos: una de ID `profile` y otra de ID `direccion`.

En la app __profile__, tendremos dos campos:
- `edad`
- `genero`

En la app  __direccion__, tendremos un campo:
- `telefono2`

## Definir el valor de campos personalizables

Después de que los campos se crean con la llamada explicada anteriormente, usted puede enviar valores a ellos también por API.

Para ello, utilice la siguiente llamada:

&Bull; URL: `https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orderForm/{{orderFormId}}/customData/{{appName}}/{{appFieldName}}`

&Bull; Método: `PUT`

A continuación se muestra un ejemplo de JSON que debemos pasar en el cuerpo de esa llamada.

```json
{
  "expectedOrderFormSections":
  [
    "items",
    "gifts",
    "totalizers",
    "clientProfileData",
    "shippingData",
    "paymentData",
    "sellers",
    "messages",
    "marketingData",
    "clientPreferencesData",
    "storePreferencesData",
    "customData"
  ],
  "value":{{appFieldValue}}
}
```

En la URL de la llamada, debe pasar los siguientes parámetros:
- `{{orderFormId}}`: ID del orderForm a donde se enviarán los valores.
- `{{appName}}`: nombre de la aplicación (es decir, del grupo de campos definido en la llamada anterior) a donde se enviarán los valores.
- `{{appFieldName}}`: nombre del campo para el que se establece el valor. En el ejemplo de los campos creados en la llamada anterior, podría ser `edad`, `genero` o `telefono2`.

En el body, se debe pasar el `{{appFieldValue}}`, que es el valor que se va a enviar.
