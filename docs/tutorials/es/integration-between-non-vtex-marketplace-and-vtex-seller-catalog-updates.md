---
title: 'Integración entre Marketplace que no es VTEX y Seller VTEX - Acciones Referentes a la Actualización de Catálogo'
id: 5jwV8FJ1cNRmkkWnXTZEng
status: DRAFT
createdAt: 2019-09-16T12:50:28.649Z
updatedAt: 2023-04-20T15:01:37.625Z
publishedAt: 
firstPublishedAt: 2019-10-16T19:00:57.865Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integración-entre-marketplace-que-no-es-vtex-y-seller-vtex-actualización-de-catálogo
locale: es
legacySlug: integracao-entre-marketplace-nao-vtex-e-sellers-vtex-acoes-referentes-a
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Consulte la versión actualizada de esta <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guía de integración con marketplaces</a> en nuestro Developer Portal.
</div>

Uno de los pasos para integrar un Marketplace que no es VTEX a un Seller VTEX es permitir consultas al __Catálogo__ de VTEX con el objetivo de obtener informaciones de cambio de precio, inventario, catálogo y datos de flete.

Las siguientes tres acciones, referentes al Catálogo, son necesarias para que la integración funcione:

1. Recibir notificación de que hubo cambio en el precio, inventario o catálogo.
2. Obtener datos del SKU en el Seller.
3. Obtener precio, inventario y datos de flete en el Seller.

Si desea ver el flujo general de la integración, consulte el artículo [Guía de integración para Marketplace no hospedado en la plataforma VTEX](https://help.vtex.com/es/tutorial/guia-de-integracion-para-marketplaces-marketplace-non-vtex--SMBUYFVEfZr0m0ttOULxj "Integração para Marketplace não VTEX").

## 1) Notificación de cambio en el precio, inventario o catálogo - Seller llama endpoint del Marketplace

Dentro de la tienda hospedada en VTEX (*Seller*), se registrará un *afiliado* (el **Marketplace**), que es el interesado en recibir el catálogo y las actualizaciones de precio e inventario. Es responsabilidad del __Seller__ hacer ese registro. 

El **Marketplace** debe implementar un endpoint para recibir notificaciones sobre alteraciones en los datos de SKUs del *Seller*.

Cada vez que un SKU del Seller sufre alguna alteración, el sistema de broadcasting de VTEX llama a ese endpoint del Marketplace, notificando que hubo un cambio.

### Ejemplo de llamada API REST:

Notifica al Marketplace que no es VTEX de que hubo un cambio en el precio, inventario o catálogo.

- Endpoint: `https://{endpointDoAfiliado}/api/notification/`
- Verbo: **POST**
- Content-Type: **application/json**
- Accept: **application/json**

| Parámetro     | Descripción      |
| ---------- | ---------- |
| endpointDelAfiliado   | Endpoint que el Marketplace debe construir para recibir notificaciones   |

#### Ejemplo de JSON de la notificación:

```json
{
    "IdSku" : "1634",
    "An" : "tiendaprueba",
    "IdAffiliate": "PRT",
    "StockModified": true,
    "PriceModified": true
}
```

| Campo     | Type     | Descripción     |
| ---------- | ---------- | ---------- |
| IdSku       | integer       | ID del SKU registrado en VTEX       |
| An       | string       |    account name del seller VTEX   |
| IdAffiliate       | string       | ID del afiliado registrado en el seller VTEX   |
| StockModified       | boolean       | Si es true, indica que hubo alteración de inventario; si es false, no hubo alteración de inventario       |
| PriceModified       | boolean       |  Si es true, indica que  hubo alteración en el precio del SKU; si es false, no hubo alteración en el precio del SKU       |

## 2) Búsqueda de datos del SKU en el Seller - Marketplace llama endpoint del Seller 

Cuando el **Marketplace** recibe una notificación de cambio en los datos de un  SKU (paso anterior), ese SKU ya puede estar catalogado en el Marketplace o no.

El **Marketplace**, entonces, busca los datos del SKU en el Seller por medio  de la llamada  API REST descrita a continuación para que luego pueda verificar si el SKU ya está en su catálogo (esta verificación debe hacerse utilizando una lógica interna del Marketplace). 

Si el SKU no está en su catálogo, el **Marketplace** debe decidir si desea agregarlo (también por medio de una lógica interna).

### Ejemplo de llamada API REST:

Accede a una tienda VTEX (o *Seller*) y busca datos de un SKU.

- Endpoint: `http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{idsku}`
- Verbo: **GET**
- Content-Type: **application/json**
- Accept: **application/json**

| Parámetro     | Descripción      |
| ---------- | ---------- |
| AccountName       | Account Name del Seller VTEX       |
| idsku       | ID del SKU registrado en el Seller VTEX. Este dato es informado en el body de la notificación del paso anterior       |

#### Ejemplo de body de respuesta:

```json
{
    "Id": 2,
    "ProductId": 2,
    "NameComplete": "Garzón Albariño Reserva 2018",
    "ProductName": "Garzón Albariño Reserva 2018",
    "ProductDescription": "",
    "ProductRefId": "",
    "TaxCode": "",
    "SkuName": "Garzón Albariño Reserva 2018",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155434-55-55/Garzon-Albariño-Reserva-2018.png?v=637037218769130000",
    "DetailUrl": "/garzon-albarino-reserva-2018/p",
    "CSCIdentification": null,
    "BrandId": "2000004",
    "BrandName": "Garzón",
    "Dimension": {
        "cubicweight": 1.0000,
        "height": 8.0000,
        "length": 32.0000,
        "weight": 1200.0000,
        "width": 8.0000
    },
    "RealDimension": {
        "realCubicWeight": 0.000,
        "realHeight": 0.0,
        "realLength": 0.0,
        "realWeight": 0.0,
        "realWidth": 0.0
    },
    "ManufacturerCode": "",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "2",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        },
      {
            "SellerId": "pedro",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "666",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        }
    ],
    "SalesChannels": [
        1,
        3
    ],
    "Images": [
        {
            "ImageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155434/Garzon-Albariño-Reserva-2018.png?v=637037218769130000",
            "ImageName": "TestImage",
            "FileId": 155434
        }
    ],
    "Videos": [],
    "SkuSpecifications": [],
    "ProductSpecifications": [
        {
            "FieldId": 26,
            "FieldName": "Uva",
            "FieldValueIds": [
                101
            ],
            "FieldValues": [
                "Albariño"
            ]
        },
        {
            "FieldId": 27,
            "FieldName": "País",
            "FieldValueIds": [
                108
            ],
            "FieldValues": [
                "Uruguay"
            ]
        },
        {
            "FieldId": 28,
            "FieldName": "Región",
            "FieldValueIds": [],
            "FieldValues": [
                "Maldonado"
            ]
        }
    ],
    "ProductClustersIds": "120, 129",
    "ProductCategoryIds": "/2/",
    "ProductGlobalCategoryId": 421,
    "ProductCategories": {
        "2": "Vinos Blancos"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0.0,
    "AlternateIds": {
        "RefId": "0002"
    },
    "AlternateIdValues": [
        "0002"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1.0000,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

| Campo     | Type     | Descripción     |
| ---------- | ---------- | ---------- |
| Id       | integer       | ID del SKU registrado en VTEX       |
| ProductId       | integer       | ID del producto relacionado a ese SKU conforme registrado en VTEX       |
| NameComplete | string   |  Nombre del producto y nombre del SKU concatenados  |
| ProductName       | string   | Nombre del producto registrado en  VTEX       |
| ProductDescription       | string  | Descripción del producto registrado en VTEX. Es permitido usar HTML. |
| ProductRefId  | string |  Código de referencia informado en el  registro del SKU  |
| TaxCode  | string  |  Tasa de impuesto asociada al SKU  |
| SkuName    | string    |   Nombre del SKU registrado en VTEX   |
| IsActive   | boolean    |   Indica si el SKU está activo     |
| IsTransported       | boolean    | *Campo obsoleto*    |
| IsInventoried       | boolean    | *Campo obsoleto*    |
| IsGiftCardRecharge | boolean |  Indica si la compra va a generar un vale de compra  |
| ImageUrl   | string       |  URL de la imagen del SKU     |
| DetailUrl       | string       | URL del producto relacionado a ese SKU   |
| BrandId       | string       |  ID de la marca del producto relacionado a ese SKU |
| BrandName       | string  | Nombre de la marca del producto relacionado a ese SKU  |
| Dimension   | objeto   | Contiene las dimensiones del SKU, incluyendo embalaje |
| cubicweight       | integer       | Peso cúbico del SKU, incluyendo embalaje  |
| height       | integer       |  Altura del SKU, incluyendo embalaje    |
| length       | integer       |  Longitud del SKU, incluyendo  embalaje   |
| weight       | integer       |  Peso del SKU, incluyendo embalaje      |
| width       | integer       |  Anchura del SKU, incluyendo embalaje    |
| RealDimension       | objeto       |  Contiene las dimensiones  reales del SKU   |
| realCubicWeight       | integer       | Peso cúbico real del SKU     |
| realHeight       | integer       | Altura real del SKU  |
| realLength       | integer       | Longitud real del SKU |
| realWeight       | integer       | Peso real del SKU  |
| realWidth       | integer       | Anchura real del SKU  |
| ManufacturerCode   | string   |  ID del proveedor del producto |
| IsKit   | boolean   |  Indica si el SKU es un kit   |
| KitItems       |  array      |  Contiene los componentes del kit, si es un kit    |
| Services       |  array   | Contiene los IDs de los servicios  relacionados al SKU |
| Categories       |  array  |  Contiene los IDs de las categorías relacionadas al SKU |
| Attachments   | array  |  Contiene los IDs de los anexos relacionados al SKU | 
| Collections | array |  Contiene los IDs de las colecciones  relacionadas al SKU  |
| SkuSellers | array de objetos |  Contiene datos sobre    |
| SellerId       | string       |  ID del Seller VTEX que vende ese SKU      |
| StockKeepingUnitId       | integer       |   Id del SKU en el Seller del que se obtienen los datos (es el mismo valor de `id`)     |
| SellerStockKeepingUnitId       | string       |   ID del SKU en un Seller tercero; es decir, que actúa como Seller del Seller de donde se obtienen los datos        |
| IsActive       | boolean       |  Indica si el SKU está activo en ese Seller      |
| FreightCommissionPercentage   | integer       |  Valor registrado de comisión sobre el valor del flete para ese Seller      |
| ProductCommissionPercentage   | integer       | Valor registrado de comisión sobre el valor del producto para ese Seller       |
| SalesChannels | array  |  Lista de los IDs de las Políticas Comerciales que se aplican a ese SKU  |
| Images  | array de objetos | Contiene informaciones de las imágenes vinculadas al SKU   |
| ImageUrl       | string       | URL de la imagen       |
| ImageName       | string       | Nombre de la imagen conforme registro en VTEX      |
| FileId       | integer       | ID de la imagen       |
| Videos  | array |  Contiene informaciones de los videos vinculados al SKU |
| SkuSpecifications       | array de objetos       |  Contiene las  especificaciones del SKU  |
| ProductSpecifications  | array de objetos   |  Contiene las  especificaciones del Producto |
| FieldId       | integer       | ID de la especificación de SKU  |
| FieldName       | string       |  Nombre de la especificación de SKU  |
| FieldValueIds | array de integers | Contiene los IDs de los valores de la especificación |
| FieldValues | array de strings  |  Contiene los valores de la especificación  |
| ProductClustersIds   | string   | IDs de las colecciones que contienen el SKU   |
| ProductCategoryIds   | string   | IDs del departamento, categoría y subcategoría a los cuales pertenece el producto, organizados  jerárquicamente como en el siguiente ejemplo: "/2/15/43/"  |
| ProductGlobalCategoryId | integer   | ID de la categoría global a la cual pertenece el producto |
| ProductCategories | objeto | Contiene el departamento, la categoría y la subcategoría a los cuales pertenece el producto, organizados por campo (ID de la categoría) y valor (Nombre de la categoría)  |
| CommercialConditionId | integer | ID de la condición comercial del SKU  |
| RewardValue    | integer | Valor de puntaje vinculado a este SKU, en caso de que exista un programa de puntos      |
| AlternateIds    | objeto | Contiene IDs alternativos para el SKU, como el EAN y el RefID  |
| AlternateIdValues   | array |  Contiene valores alternativos de IDs del SKU  |
| EstimatedDateArrival    | integer  |  Fecha estimada para entrada en catálogo, en el caso de productos fuera de catálogo con esa información registrada  |
| MeasurementUnit   | string   |  Unidad de medida del SKU    |
| UnitMultiplier   | integer |   Unidad de multiplicación del SKU   |
| InformationSource   | string   |  Dato de uso interno de VTEX    |
| ModalType  | integer   |  Tipo de modalidad vinculada al SKU   |

## 3) Buscar precio, inventario y datos de flete - Marketplace llama endpoint del Seller

El Marketplace debe entonces usar la __API de Fulfillment Simulation__ para obtener los datos actualizados del SKU: __precio__, __inventario__ y datos de __flete__.

Esa llamada simula un carrito en el Checkout de VTEX, devolviendo la versión más actualizada de esos datos.

<div class="alert alert-warning">
La llamada de Fulfillment Simulation debe ser usada por el Marketplace siempre que sea necesario obtener precio, inventario y datos de flete actualizados. Para ofrecer una integración en tiempo real y, como consecuencia, una experiencia de compra fluida, el Marketplace debe obtener esos dados en todas las etapas de la jornada del cliente en la tienda:<br>- Vitrina<br>- Página de producto<br>- Carrito<br>- Checkout<br>- Order Placed<br><br>Con eso, usted garantiza que el cliente no será sorprendido por posibles cambios en un SKU ocurridos en el Seller y no informados en el  Marketplace. 
</div>

### Ejemplo de llamada API REST:

Accede a una tienda VTEX (*Seller*) y busca precio, inventario y datos de flete de un SKU.

- Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`
- Verbo: **POST**
- Content-Type: **application/json**

| Parámetro     | Descripción     |
| ---------- | ---------- |
| AccountName       | Account Name del Seller VTEX       |
| idcanal       | Política Comercial que se debe considerar en la simulación del carrito |
| idafiliado       | Id del afiliado que se debe considerar en el  contexto de la simulación |

#### Ejemplo de body del request:

```json
{
    "postalCode": "10019",
    "country": "USA",
    "items": [
        {
            "id": "23",
            "quantity": 1,
            "seller": "1"
        },
        {
            "id": "25",
            "quantity": 2,
            "seller": "1"
        }
    ]
}
```

| Campo     | Type     | Descripción      |   ¿Obligatorio?  |
| ---------- | ---------- | ---------- | ---------- |
| postalCode       | string       |   Código postal para cálculo de flete   |   No   |
| country       | string       |   País para cálculo de flete  |   No    |
| items | array de objetos| Array de ítems deseados para la simulación   |  Sí  |
| id | string |   ID del SKU deseado    | Sí  |
| quantity       | integer       |   Cantidad del SKU deseado  |  Sí  |
| seller       | string       |   ID del seller que vende el SKU deseado. En el contexto de simulación de fulfillment, el seller debe ser siempre "1" - "seller 1" significa que es el mismo  fulfillment en cuestión.  |   Sí   |

<div class="alert alert-warning">
La simulación para obtener precio/disponibilidad solo debe hacerse con <strong>1 unidad</strong> del ítem específico. Las simulaciones de carrito deben naturalmente incluir todos los ítems deseados, para garantizar el contexto de esos ítems cuando están juntos en el carrito, lo cual es de especial importancia para el cálculo del flete.
</div>

#### Ejemplo de body de respuesta

```json
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
            "deliveryChannels": [
                {
                    "id": "delivery",
                    "stockBalance": 10
                }
            ]
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

| Campo     | Type     | Descripción     |
| ---------- | ---------- | ---------- |
| items | array de objetos |      |
| id | string |      |
| requestIndex   | integer    |      |
| quantity       | integer       |      |
| seller       | string       |      |
| merchantName       | integer    |      |
| priceValidUntil       | string       |      |
| price       | integer       |      |
| listPrice       | integer       |      |
| offerings       | array       |      |
| priceTags       | array       |      |
| measurementUnit       | string      |      |
| unitMultiplier       | integer      |      |
| attachmentOfferings       | array      |      |
| postalCode       | string      |      |
| geoCoordinates       | array      |      |
| country       | string      |      |
| logisticsInfo       | array de objetos     |      |
| itemIndex       | integer      |      |
| addressId       | integer      |      |
| selectedSla       | integer      |      |
| selectedDeliveryChannel       |  integer    |      |
| stockBalance       | integer      |      |
| quantity       | integer      |      |
| shipsTo       | array      |      |
| slas       | array      |      |
| deliveryChannels       | array de objetos     |      |
| id       | string      |      |
| stockBalance       | integer      |      |
| pickupPoints       | array      |      |
| messages       | array      |      |

