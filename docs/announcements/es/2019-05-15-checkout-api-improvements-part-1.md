---
title: 'Mejoras en la API del checkout - Parte 1'
id: 5B4Qb4ffB5JgGrJNY3572l
status: DRAFT
createdAt: 2019-05-15T19:18:26.652Z
updatedAt: 2022-07-21T12:54:15.866Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: authors_59
slug: mejoras-en-la-api-del-checkout-parte-1
locale: es
legacySlug: mejoras-en-la-api-del-checkout-parte-1
announcementImageID: ''
announcementSynopsisES: 'Sepa sobre las mejoras implementadas en la API del checkout y cómo adaptarse a las nuevas funcionalidades'
---

Nuestro equipo de desarrollo está constantemente mejorando la performance de nuestras APIs, tornándolas más eficientes y agregando nuevas funcionalidades. Esto significa que algunos comportamientos y funcionalidades considerados deprecados se pueden eliminar en la siguiente versión major de la API del Checkout.

Con la comunicación de estas mejoras, queremos permitir que usted ya empiece el proceso de actualización de las integraciones y personalizaciones de su tienda, pensando en las nuevas soluciones ofrecidas por nuestro sistema.

<div class="alert alert-warning">
El layout actual de la API del Checkout sigue funcionando con normalidad. Sin embargo, es muy importante que la implementación de las mejoras descritas a continuación sea hecha desde ahora. Todavía no hay previsión para el lanzamiento de la nueva mayor de la API del Checkout. Sin embargo, en esta próxima versión, los puntos descontinuados que se describen a continuación ya no funcionarán.
</div>

## Dirección en el carrito y en el pedido

__Lo que se va a descontinuar:__
Campo `address` dentro del `shippingData`.

__Motivo:__
Hoy, ya es posible que un carrito con varios ítems tenga más de una dirección (una dirección para entrega y algunas de pickup).

__Nuevo formato:__
Dentro del `shippingData` ahora existe el campo `selectedAddresses`, que contiene una lista de todas las direcciones usadas en el carrito. En el `logisticsInfo` de cada ítem, hay también el campo `addressId`, que informa cuál es la dirección usada en la compra de este ítem.

__Ejemplo:__

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
				"receiverName": "Ju** ********",
				"addressId": "3064755158330",
				"postalCode": "******040",
				"city": "Pu**la",
				"state": "PUE",
				"country": "MEX",
				"street": "Ca*** ** *ur",
				"number": "***",
				"neighborhood": "Barr** ** *****ago",
				"complement": null,
				"reference": null,
				"geoCoordinates": []
			  }
			],
			...
		}
```

## Lista de pedidos del usuario

__Lo que se va a descontinuar:__
Ruta del Checkout (__GET__ `{host}/api/checkout/pub/orders`) para obtener la lista de pedidos del usuário.

__Motivo:__
La nueva ruta permite paginación y filtros. Además, es más rápida, ya que usa la misma indexación del sistema de pedidos.

__Nuevo Formato:__
Use la ruta __GET__ `{host}/api/oms/user/orders/?page=1`con las cookies de autenticación de usuario. La respuesta contiene una lista de pedidos con informaciones resumidas, datos de paginación y sumarización.

__Ejemplo:__

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

## Acceso al carrito utilizando cookie
__Lo que se va a descontinuar:__
Cookie `aspxauth` para obtener acceso al carrito de compras.

__Motivo:__
Hoy, la herramienta del [carrito compartido](/tutorial/que-es-el-carrito-compartido--3oKJZfoAoUm8g0ukCIGsUu) permite que más de un cliente agregue, retire o actualice ítems e informaciones de un mismo carrito, a través de un parámetro de identificación en su URL. Con eso, la cookie `aspxauth` de acceso al carrito se volvió obsoleta en la respuesta de la API, manteniéndose apenas por cuestiones de compatibilidad.

__Nuevo formato:__
La próxima versión mayor de la API del Checkout no trae la cookie en su respuesta.

## Acceso al pedido en la pantalla de cierre de compra (Order Placed) utilizando cookie

__Lo que se va a descontinuar:__
Cookie `Vtex_CHKO_Auth` para acceder a la pantalla de __order placed__.

__Motivo:__
La cookie descontinuada no tenía un nombre amigable, que informase correctamente su función. La nueva cookie ahora tiene un nombre más coherente.

__Nuevo formato:__
Para acceder a los datos de la pantalla de order placed a través de la API, es necesaria la lectura de la cookie `CheckoutDataAccess`. Esta cookie viene en la respuesta de la ruta `/transaction`, que tiene el dato del id del `order-group` y debe ser pasado en el header para API de `pub/orders/order-group/order-group-id` por un usuario anónimo.

__Ejemplo:__
La cookie se debe pasar en el header con el siguiente formato:`CheckoutDataAccess=VTEX_CHK_Order_Auth={{token}}`

## Múltiples entregas

__Lo que se va a descontinuar:__
En la versión actual, sin el recurso de **múltiples entregas** habilitado, la API del Checkout solo proporciona las formas de entrega en común para todos los ítems de un carrito. Cuando no se puede crear ninguna intersección de formas de entrega de los ítems de un carrito, para no imposibilitar la compra, la API convierte las diferentes formas de entrega como si fueran las mismas. Este comportamiento se descontinuará.

__Motivo:__
Este comportamiento de forzar diferentes formas de entrega como si fueran las mismas puede causar problemas en la integración de los pedidos con los ERPs. Con la funcionalidad de múltiples entregas, esta intersección forzada de formas de compras ya no se hace necesaria.

__Nuevo formato:__
Cuando no existe ninguna intersección entre las formas de entrega de los ítems, la API del Checkout escoge las formas de entrega específicas para cada ítem, permitiendo el cierre de la compra. Para que esto suceda, es necesario solicitar la activación de las múltiples entregas en la API del Checkout.

## Lanzamiento de nueva major de la API del Checkout

El anuncio de las mejoras se realizará en diversas etapas, ya que otras nuevas features están en camino. Cuando tengamos una fecha para el lanzamiento de la nueva versión major del Checkout, se le comunicará con la anticipación necesaria.
