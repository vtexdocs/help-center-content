---
title: 'Guía de Integración - Consumir información del catálogo para utilizar en un Servicio Externo'
id: 3j15zRDuismM42Y8SoGMO2
status: PUBLISHED
createdAt: 2018-08-20T19:03:13.609Z
updatedAt: 2022-10-05T00:09:39.562Z
publishedAt: 2022-10-05T00:09:39.562Z
firstPublishedAt: 2018-08-20T19:03:44.217Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: integration-guide-consuming-catalog-information-for-use-in-an-external-service
locale: es
legacySlug: guia-de-integracion-consumir-informacion-del-catalogo-para-utilizar-en-un-servicio-externo
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Este documento tiene como objetivo auxiliar en la integración de las informaciones existentes en el catálogo de una tienda VTEX con algún servicio externo.

Entre los casos de uso más comunes para esa integración, tenemos:

1. Integrar el catálogo de la tienda VTEX con marketplaces externos.
2. Enviar los datos de catálogo para herramientas de BI.
3. Generar informes externos utilizando la información del catálogo.

Siga los pasos a continuación para realizar la integración.

## Crear un afiliado

El afiliado funciona como un webhook que notificará el servicio externo sobre los cambios realizados en la información de un SKU, cambios en el inventario o cambios en los precios.

1. En el menú lateral del Admin, haga clic en __Gestión de pedidos__.
2. Haga clic en __Configuración__
3. Haga clic en la pestaña __Afiliados__.
4. Haga clic en el botón __Nuevo afiliado__.
5. Rellene los campos según se describe a continuación.
6. Haga clic en __Guardar__.

### Llenar los campos del panel Nuevo Afiliado

- __Nombre__: Rellene con el nombre del sistema afiliado.
- __ID__: Código de identificación del afiliado de 3 dígitos. El ID debe contener __apenas consonantes__.
- __Política Comercial__: ID de la política comercial que tendrá su información enviada al afiliado.
- __E-mail de Follow Up__: Dirección de correo electrónico que recibirá información cuando el afiliado sea notificado.
- __Endpoint de Search__: URL de la aplicación que [recibirá notificaciones](#actualizar-los-datos-de-los-skus) sobre los SKUs, sus precios y sus stocks. Esta URL debe ser desarrollada por el sistema externo para que VTEX pueda notificar los cambios en esta ruta.
- __Versión del Endpoint de Search__: Mantenga este campo rellenado con la información __1.x.x__
- __Usar mi medio de pago__: Si tiene sentido para su integración que el servicio externo reciba las informaciones de medios de pago de su tienda, marque esta flag.

## Realizar la primera carga con los datos de los SKUs

Después de crear el endpoint que recibirá la información de los productos y haber configurado correctamente el afiliado, usted debe realizar una primera carga para obtener los datos del catálogo y guardarlos en la base de datos de su servicio externo. Para ello, siga las instrucciones que aparecen a continuación.

### 1 - Obtener los datos de ID de los SKUs de su tienda

Haga um `GET` en la ruta `http://{accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitids?page={page}&pagesize={page_size}` para obtener como respuesta un array con los IDs de los SKUs existentes en su tienda.

__Parámetros de la API__:

`{accountName}`: Nombre de la cuenta de su tienda en VTEX.

`{page}`: En qué página se está haciendo el request. Usted debe pasar por todas las páginas hasta que la respuesta del request sea un array vacío (`[]`).

`{page_size}`: La cantidad de identificadores de SKU que se devuelven por página. Recomendamos devolver un máximo de 1000 IDs por página.

__Ejemplo de respuesta__:

```JSON
[
    1
    2
    3
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
```

### 2 - Obtener los datos sobre las propiedades de los SKUs

Utilizando los IDs de los SKUs obtenidos en el request anterior, usted debe hacer un `GET` en la ruta `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}` para obtener información sobre las propiedades de los SKUs. La respuesta de este request devolverá la información que caracteriza el SKU, como __Nombre__, __Marca__, __Categoría__, __Coleciones__, __Imagen__, si el SKU está __Activo o Inactivo__ y __Políticas Comerciales__, por ejemplo. La información de precio y de stock aún no se obtiene en esta etapa.

__Parámetros de la API__:

`{{accountName}}`: Nombre de la cuenta de su tienda en VTEX.

`{{skuId}}`: ID del SKU que se va a consultar.

__Ejemplo de respuesta__:

```
{
    "Id": 20,
    "ProductId": 18,
    "NameComplete": "Newest Iron 220",
    "ProductName": "Newest Iron",
    "ProductDescription": "Newest iron",
    "TaxCode": "",
    "SkuName": "220",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438-55-55/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
    "DetailUrl": "/newest-iron-18/p",
    "CSCIdentification": null,
    "BrandId": "2000000",
    "BrandName": "Brand name",
    "Dimension": {
        "cubicweight": 0.0002,
        "height": 1,
        "length": 1,
        "weight": 1,
        "width": 1
    },
    "RealDimension": {
        "realCubicWeight": 0,
        "realHeight": 0,
        "realLength": 0,
        "realWeight": 0,
        "realWidth": 0
    },
    "ManufacturerCode": null,
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "20",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        },
        {
            "SellerId": "jbsusaqa",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "888898",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 10
        }
    ],
    "SalesChannels": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "Images": [
        {
            "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
            "ImageName": null,
            "FileId": 155438
        }
    ],
    "SkuSpecifications": [],
    "ProductSpecifications": [],
    "ProductClustersIds": "137,139",
    "ProductCategoryIds": "/1/2/",
    "ProductGlobalCategoryId": 783,
    "ProductCategories": {
        "1": "Choir & Voice",
        "2": "For Men"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0,
    "AlternateIds": {
        "RefId": "888898"
    },
    "AlternateIdValues": [
        "888898"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

### 3 - Obtener los datos de precio y stock de los SKUs

En el caso de que se produzca un error en el sistema, se debe hacer un `POST` en la ruta `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}` para obtenerse los datos de __precio, stock y SLA de entrega__ de los SKUs. Esta llamada simula un carrito en el Checkout de VTEX, devolviendo la información más actualizada de precio, stock y SLA de entrega.

__Parámetros de la API__:

`{accountName}`: Nombre de la cuenta de su tienda en VTEX.

`{salesChannel}`: Política comercial a considerar en la simulación.

`{afiliadoId}`: ID del afiliado a ser considerado en el contexto de la simulación.

__Ejemplo de BODY que se rellenará en el POST__:

```
{
    "postalCode":"10019", //required field if the country field is filled
    "country":"USA",      //required field if postalCode is filled
    "items": [            //required field: must contain at least one item
        {
            "id":"23",    //required field (string): SKU id you want to use in the simulation
            "quantity":1, //required field (int): quantity of the item you want to simulate
            "seller":"1"  //id of the main store: always use the value 1
        },
        {
            "id":"25",
            "quantity":2,
            "seller":"1"
        }
    ]
}
```

__Ejemplo de respuesta__:

```
{
    "items": [
        {
            "id": "23",
            "requestIndex": 0,
            "quantity": 0,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-08-17T19:40:26Z",
            "price": 13900,
            "listPrice": 15900,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "kg",
            "unitMultiplier": 1.5,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "10019",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 0,
            "quantity": 0,
            "shipsTo": [
                "USA",
                "ROU",
                "BRA",
                "GBR"
            ],
            "slas": [],
            "deliveryChannels": []
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

Combinando los tres tipos de request mostrados arriba, usted será capaz de realizar la __primera carga__ de datos del catálogo de VTEX para grabar en la base de datos de un servicio externo.

## Actualizar los datos de los SKUs

En caso de cambios en algún producto, VTEX notificará al endpoint del afiliado sobre la información de __todos los SKUs del producto modificado, incluso si uno de los SKUs no ha cambiado__, realizando un POST. A continuación se muestra un ejemplo del payload enviado por VTEX al endpoint:

```json
{
  "IdSku": "15", // ID de SKU
  "An": "accountname", // Account Name
  "IdAffiliate": "SPT", // Affiliate Id
  "DateModified": "2018-08-20T15: 11: 28.1978783Z", // Fecha de modificación
  "IsActive": false, // Indica el status del SKU, si está activo o inactivo
  "StockModified": false, // Indica si se ha modificado la acción del SKU
  "PriceModified": false, // Indica si se ha modificado el precio del SKU
  "HasStockKeepingUnitModified": true, // Indica si alguna información del SKU se ha cambiado (con excepción de precio y stock)
  "HasStockKeepingUnitRemovedFromAffiliate": false // Indica si el SKU se ha eliminado del afiliado
}
```

Recibiendo este payload, el integrador debe utilizar esta información para decidir qué llamadas debe hacer para actualizar la información de los SKU:

- Si se ha producido un cambio de precio o de stock, el integrador debe llamar a la ruta `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`, como se describe en la sección [Obtener los datos de precio y stock de los SKUs](#3-obtener-los-datos-de-precio-y-stock-de-los-skus).
- Si se ha producido un cambio en el SKU que no sea de precio o de stock, el integrador debe llamar a la ruta `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`, como se describe en la sección [Obtener los datos sobre las propiedades de los SKUs](#2-obtener-los-datos-sobre-las-propiedades-de-los-skus).

>⚠️ Si se inserta un nuevo SKU en el catálogo, se le notificará en el endpoint de cada afiliado. Por tratarse de un nuevo SKU, es necesario realizar el llenado de los datos de este nuevo SKU en la base de datos del servicio externo. El integrador debe comprobar si el SKU notificado aún no existe en la base de datos del servicio externo. Si se trata de un nuevo SKU, el integrador debe seguir los mismos pasos descritos en la sección **Realizar la primera carga con los datos de SKUs**. Si es un SKU ya existente, el integrador debe seguir los pasos de la sección **Actualizar los datos de SKUs**.

>ℹ️ Si desea integrar las formas de pago de un seller VTEX con un marketplace externo, [acceda a nuestra documentación](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
