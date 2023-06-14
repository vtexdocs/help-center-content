---
title: 'Cómo mostrar la vitrina con productos de un único seller'
id: 6mMXWCrxGEYegIoSkSmiOQ
status: DRAFT
createdAt: 2019-01-10T14:06:30.745Z
updatedAt: 2020-07-28T16:48:10.306Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:39.211Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: como-mostrar-la-vitrina-con-productos-de-un-unico-seller
locale: es
legacySlug: 
subcategory: 54gbzsku02c4bKmgFbp3v3
---

__Trabajando con VTEX Session y el concepto de Región para proporcionar una navegación personalizada__

Ahora es posible determinar una Región que considere un seller específico o un conjunto de sellers.


RESTRICCIÓN


Esta región incluye necesariamente al seller principal (e-commerce).

Es necesario tener instalado VTEX Session.


Sin embargo, es posible no considerar en la vitrina el inventario de este seller principal. Utilizando el recurso de la política comercial, el administrador de la tienda puede configurar la navegación para una nueva política comercial en la que el inventario del seller principal no exista para esta política.

Así, cuando el cliente esté navegando se mostrarán los productos disponibles en la política comercial X para la región.


__[ seller principal, seller escogido ]__


Como el `seller principal` no tendrá inventario para esta política, estaremos  considerando apenas al *seller escogido*.


Esta funcionalidad está restringida para sellers que usan el recurso White Label.


--


Ejemplo de uso:

A un minorista le gustaría permitir que sus clientes seleccionen una tienda específica para navegar.

Digamos que una familia está yendo al centro comercial y, de antemano, podría navegar por los productos disponibles en aquella tienda.

Este escenario implica que al entrar en el e-commerce del minorista existirá la opción de escoger la tienda (seller). 

En el momento en que el usuario elige el sitio también debe cargar la nueva política comercial.

Aquí puede haber aún más personalizaciones, como una UI específica a través del recurso de multitienda - loja.varejista.com.br

br

En el momento de elegir la tienda el front debe cargar el sitio pasando por un parámetro de querystring `?regionId={{valor}}` donde el valor debe ser codificado como base64 y seguir el estándar.

*SW#sellerPrincipal;sellerEscolhido*

Este querystring será reconocido por el app de VTEX Session. El Session realiza toda la gestión de la sesión y posee dos cookies. Segment y Session.

Tenemos un artículo que explica en detalle el VTEX Session.

Una de las funciones de Session, al crear la Región, es informar al Portal las condiciones de exhibición de productos y de esta forma el Portal mostrará solo los productos disponibles para la región definida.

La simulación que el Portal realiza en el checkout es similar a ésta:

__POST__ http://{{accountName}}.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation?rnbBehavior=0&sc=2


    {

  "items": [ 

  {

  "id": "61628",

  "quantity": 1,

  "seller": "1" 

  }

       ],

  "country": "BRA",

   "postalCode": "22291070",

  "geoCoordinates": [],

  "shippingData": {


      "logisticsInfo": [

  {

      "itemIndex": 0,

      "regionId": "U1cjbG9qYWFuaW1hbGU7YW5pbWFsZW9zY2FyZnJlaXJl"

  }

      ]


     }

}


En el ejemplo anterior, el SKU 61628 solo tiene inventario en el seller. En la tienda principal, para el sc=2 este producto no tiene inventario disponible.
