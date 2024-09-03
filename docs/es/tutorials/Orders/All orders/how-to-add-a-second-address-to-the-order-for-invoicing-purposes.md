---
title: 'Cómo añadir una segunda dirección al pedido para fines de facturación'
id: 6Mow9ibQPDOcEggNnujuA
status: ARCHIVED
createdAt: 2020-05-29T12:20:39.086Z
updatedAt: 2022-08-30T23:07:06.496Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:32:19.734Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-anadir-una-segunda-direccion-al-pedido-para-fines-de-facturacion
locale: es
legacySlug: como-anadir-una-segunda-direccion-al-pedido-para-fines-de-facturacion
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

En el caso de los negocios B2B, registrar una dirección en la factura que sea diferente de la registrada para la entrega es un escenario común, ya que muchas veces el lugar donde se recibe el producto difiere de la dirección de facturación.

El panel administrativo de VTEX le permite registrar una segunda dirección apenas en los casos de Puntos de Recogida; ya que, en este caso, consideramos que no habrá una dirección de entrega, sino una para la Factura.

Para otros escenarios, como los que se refieren al modelo B2B, sugerimos que la tienda registre esta opción mediante una modificación del objeto `orderForm`, del Checkout. 

`orderForm` es el principal conjunto de datos del proceso de checkout en VTEX. Se compone de varias secciones, cada una de estas con información útil a la que se puede acceder y se puede alterar. 

Entonces, vamos a modificar algunos datos del `orderForm` para ingresar una segunda dirección. Hay dos maneras de hacer esto: 
- Utilizando la biblioteca vtex.js.
- Por medio de un request a la API del Checkout de VTEX.

>⚠️ Aunque es posible crear una interfaz personalizada superpuesta a la de VTEX, que contiene el segundo campo de dirección, no recomendamos hacerlo.

## vtex.js

vtex.js es una biblioteca de funciones JavaScript que hará el request a la API por usted. La función utilizada para esto es `sendAttachment`. Consulte la documentación y las acciones requeridas en [la documentación específica de la biblioteca](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections).

## API REST

En el objeto `orderForm` hay un campo llamado `invoiceData`. Necesitamos acceder a este campo para incluir la segunda dirección. Dentro de `invoiceData` está el objeto `address`,  que será alimentado con los datos de la dirección.

Para acceder a este, haga un POST al siguiente endpoint, con un body como el del ejemplo de abajo:

`/api/checkout/pub/orderForm/{{orderFormId}}/attachments/invoiceData`

```json
{
    "address": {
        "postalCode": "22250-040",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BRA",
        "street": "Praia Botafogo",
        "number": "300",
        "neighborhood": "Botafogo",
        "complement": null,
        "reference": null,
        "geoCoordinates": [
            -43.18218231201172,
            -22.94549560546875
        ]
    }
}
```

El valor de `{{orderFormId}}`, en la URL de la llamada, debe reemplazarse con el ID del orderForm que se desea modificar. Y los datos de la dirección, como muestra el ejemplo, deben enviarse en el body del request.
