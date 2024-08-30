---
title: 'Mejoras en la API del Checkout - Parte 1'
id: 5RMSc6Va4YJwczJ5kd7Y97
status: DRAFT
createdAt: 2019-01-30T19:31:35.982Z
updatedAt: 2022-07-21T12:53:16.650Z
publishedAt: 
firstPublishedAt: 2019-01-30T19:33:55.811Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 62vZqGGY3y5ptmG8gYo2r9
slug: que-partes-de-la-api-de-checkout-pueden-ser-reemplazadas-en-la-proxima-version
locale: es
legacySlug: que-partes-de-la-api-de-dheckout-se-pueden-reemplazar-en-la-proxima-version
---

Nuestro equipo de desarrollo está constantemente mejorando el rendimiento de nuestras APIs. Esto significa que algunas partes que se consideran superadas pueden ser eliminadas en las próximas versiones.

En este artículo se enumeran todas las partes de la API V2 de Checkout que probablemente no van a estar en el próximo release.

>⚠️ Este artículo va a estar en permanente actualización hasta el lanzamiento de la API V3 del Checkout. Sin embargo, usted necesita estar atento a los cambios no descritos aquí y que se pueden implementar en la V3.

>⚠️ El objetivo de este artículo es permitir que usted ya empiece el proceso de actualización de las integraciones y personalizaciones de su tienda, pensando en las nuevas soluciones ofrecidas por el sistema. Por eso, le recomendamos que esté atento y no deje para realizar los cambios de última hora.


## Dirección en el carrito y en el pedido

- __Qué va a ser descontinuado:___ campo `address` dentro del `shippingData`.

- __Motivo:__ hoy en día es posible que un carrito con varios artículos tenga más de una dirección (por ejemplo, una de entrega y otra de pickup).

- __Nueva forma:__ dentro del `shippingData` ahora existe el campo `selectedAddresses`, que contiene una lista de todas las direcciones usadas en el carrito. En el `logisticsInfo` de cada ítem, hay también el campo `addressId`, que indica cuál es la dirección usada en la compra.

__Exemplo: __

```
"shippingData": {
			"logisticsInfo": [
			  {
				"itemIndex": 0,
				"addressId": "3064755158330",
				...
			  }
			],
			"selectedAddresses": [
			  {
				"addressType": "residential",
				"receiverName": "Gui****** ********",
				"addressId": "3064755158330",
				"postalCode": "******040",
				"city": "Rio ** *******",
				"state": "RJ",
				"country": "BRA",
				"street": "Pra** ** *****ogo",
				"number": "***",
				"neighborhood": "Bot*****",
				"complement": null,
				"reference": null,
				"geoCoordinates": []
			  }
			],
			...
		}
```

## Lista de pedidos del usuario

- __Qué va a ser descontinuado:___ ruta del Checkout (__GET__ `{host}/api/checkout/pub/orders`) para obtener la lista de pedidos del usuario.

- __Motivo:__ la nueva ruta permite paginación y filtros. Además, es más rápida, ya que utiliza la misma indexación de la pantalla de pedidos del Admin (antiguo OMS).

- __Nueva forma:__ utilice la ruta __GET__ `{host}/api/oms/user/orders/?page=1` con los cookies de autenticación del usuario. La respuesta contiene una lista de pedidos (con un resumen de sus datos), datos de paginación y de sumarización.

__Exemplo: __
  
```
	{
	  "list": [
	    ... 
	  ],
	  "facets": [],
	  "paging": {
		"total": 37,
		"pages": 3,
		"currentPage": 1,
		"perPage": 15
	  },
	  "stats": {
		"stats": {
		  "totalValue": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  },
		  "totalItems": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  }
		}
	  }
	}
```
