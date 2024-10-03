---
title: 'Formatar la hora de facturación del pedido a través de API'
id: HTD83Y8FMswUAgc4YaeYa
status: ARCHIVED
createdAt: 2017-12-18T18:14:17.484Z
updatedAt: 2022-08-30T22:01:56.346Z
publishedAt: 
firstPublishedAt: 2017-12-18T21:12:57.335Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: formatting-the-order-invoicing-time-via-api
locale: es
legacySlug: formatar-la-hora-de-facturacion-del-pedido-a-traves-de-api
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Al enviar los datos de la factura a un marketplace a través de la API, tenga en cuenta el formato correcto del JSON:

```
{
 "type":"Output",
 "issuanceDate":"2017-10-05T11:32:11",
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

La propiedad responsable de informar la fecha y la hora de la facturación es `issuanceDate`.

Este campo sigue la zona horaria UTC 0. Si desea incluir una hora con una zona horaria específica (por ejemplo, "UTC -3"), debe utilizar el siguiente formato:

`"issuanceDate": "2017-10-05T11:32:11-0300"`

Tenga en cuenta que las integraciones que buscan datos de pedidos en el sistema VTEX también deben fijarse en la zona horaria y realizar los ajustes necesarios.

__Atención__: no introduzca ningún espacio en la fecha.

Vea en nuestra [documentación técnica](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber) los detalles de cómo se debe formatear el request.
