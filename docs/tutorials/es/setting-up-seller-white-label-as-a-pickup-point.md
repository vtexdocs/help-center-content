---
title: 'Configurar Seller White Label como punto de recogida (Pickup Point)'
id: 6fSUE2O0taaoKieAaiuc4e
status: PUBLISHED
createdAt: 2018-09-04T14:22:05.290Z
updatedAt: 2023-03-29T18:58:34.411Z
publishedAt: 2023-03-29T18:58:34.411Z
firstPublishedAt: 2018-09-05T20:38:04.270Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: configurar-seller-white-label-como-punto-de-retirada-pickup-point
locale: es
legacySlug: configurar-seller-white-label-como-punto-de-retirada-pickup-point
subcategory: 1c5Btie9ou2Gg2iUo0ggqM
---

El objetivo de este artículo es orientar al usuario de la plataforma VTEX para configurar un __Seller White Label__ como __punto de recogida__. Esta característica forma parte del alcance de estrategias de Omnichannel de una tienda, volviéndose una importante evolución en la logística de entregas y gestión de stock.

## Cuentas Franquicias y Sellers White Label

Como se explica en el artículo [Definiciones de Cuenta Franquicia y Seller White Label](https://help.vtex.com/es/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa), toda Cuenta Franquicia creada en VTEX se asocia automáticamente como Seller White Label de la cuenta principal.

De esta manera, el punto de recogida configurado en la Cuenta Franquicia __servirá para atender las entregas de los pedidos realizados en la Cuenta Principal__. En este escenario, la Cuenta Franquicia actúa como __Seller White Label__ de la cuenta principal.

<div class="alert alert-danger">
Las configuraciones se deben realizar en la cuenta del seller White Label. Los ítems estarán disponibles para la recogida en el checkout del cliente final  solamente si el SKU está disponible en el stock de la cuenta principal y de la cuenta del seller White Label.
</div>

## Configuración inicial
Para configurar Seller White Label como punto de recogida, es necesario crear en el Admin VTEX:

- [Pickup point](https://help.vtex.com/es/tutorial/creating-pickup-points--2R5ClQiwe4KoSQgsuiOw4E): con la dirección del seller white label.    
- [Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140): Para mostrar el Punto de Recogida en el checkout, es necesario configurar una política de envío y vincular un punto de recogida registrado.  
- [Muelle](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW): debe configurar un muelle y vincular a Política de envío registrada con el punto de recogida.   
- [Almacén](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque): debe configurar un almacén y vincular a Política de envío registrada con el punto de recogida.   

## Completar cantidad en Inventario

Después de configurar el __Punto de Recogida__, la __Política de envío__, el __Muelle__ y el __Inventario__, es necesario rellenar la cantidad de ítems en inventario. Como la Cuenta Franquicia no tiene un catálogo propio, habiendo heredado la información de Productos y SKUs de la __Cuenta Principal__, será necesario incluir las cantidades a través de la __importación y exportación de la planilla de inventario.

Para saber cómo exportar e importar esta planilla, ingrese a nuestro artículo [Importar y exportar planilla de inventario](/es/tutorial/importando-y-exportando-planilla-de-stock).

Para saber en detalle cómo llenar los campos de la plantilla, ingrese a nuestro artículo [Rellenar campos de la plantilla de flete](/es/tutorial/como-montar-la-plantilla-de-flete/).

## Validar configuración

Si la configuración del punto de recogida se ha efectuado correctamente en la Cuenta Franquicia, los SKUs con __stock disponible y precio__ podrán venderse en la Cuenta Principal, donde la Cuenta Franquicia actuará como un __Seller White Label__ y la Cuenta Principal funcionará como un __Marketplace__.

### Seller White Label/Cuenta Franquicia

Para validar si el seller white label está realizando la entrega de un SKU a través del punto de recogida registrado, usted debe hacer un `POST` en la ruta de fulfillment: 

`http://{{franchise-accountName}}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?affiliateid=SLR&sc={{salesChannel}}`

A continuación, sigue un ejemplo del `body` necesario para el `POST`:

```json
  {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```
Si la configuración se ha realizado correctamente, la llamada devolverá la información de entrega del SKU enviada en el contexto de `body`. Así, basta verificar si la entrega está siendo hecha por el pickup point registrado. A continuación, sigue un ejemplo de respuesta de la llamada:

```json
{
    "items": [
        {
            "id": "2000270",
            "requestIndex": 0,
            "quantity": 1,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-09-05T14:42:12Z",
            "price": 5500,
            "listPrice": 5500,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "un",
            "unitMultiplier": 1,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "85001",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 5,
            "quantity": 1,
            "shipsTo": [
                "USA"
            ],
            "slas": [
                {
                    "id": "Normal (1cc6116)",
                    "deliveryChannel": "pickup-in-point",
                    "name": "Normal (1cc6116)",
                    "deliveryIds": [
                        {
                            "courierId": "1cbb75a",
                            "warehouseId": "1318516",
                            "dockId": "1b3d781",
                            "courierName": "Fast Shipping",
                            "quantity": 1
                        }
                    ],
                    "shippingEstimate": "20bd",
                    "dockEstimate": "5bd",
                    "availableDeliveryWindows": [],
                    "price": 53200,
                    "pickupStoreInfo": {
                        "isPickupStore": true,
                        "friendlyName": "Locker Arizona",
                        "address": {
                            "addressType": "pickup",
                            "receiverName": null,
                            "addressId": "1cc6116",
                            "postalCode": "85004",
                            "city": "Phoenix",
                            "state": "AZ",
                            "country": "USA",
                            "street": "North 3rd Street",
                            "number": "752",
                            "neighborhood": "Downtown",
                            "complement": "",
                            "reference": null,
                            "geoCoordinates": [
                                3345.231544494628906,
                                -11206.918148040771484
                            ]
                        },
                        "additionalInfo": "Bring your ID",
                        "dockId": "1b3d781"
                    },
                    "pickupPointId": "1cc6116",
                    "pickupDistance": 8.0277872085571289,
                    "polygonName": null
                }
            ],
            "deliveryChannels": [
                {
                    "id": "pickup-in-point",
                    "stockBalance": 5
                }
            ]
        }
    ],
    "pickupPoints": [
        {
            "friendlyName": "Locker Arizona",
            "address": {
                "addressType": "pickup",
                "receiverName": null,
                "addressId": "1cc6116",
                "postalCode": "85004",
                "city": "Phoenix",
                "state": "AZ",
                "country": "USA",
                "street": "North 3rd Street",
                "number": "752",
                "neighborhood": "Downtown",
                "complement": "",
                "reference": null,
                "geoCoordinates": [
                    3345.231544494628906,
                    -11206.918148040771484
                ]
            },
            "additionalInfo": "Bring your ID",
            "id": "1cc6116",
            "businessHours": []
        }
    ],
    "messages": []
}
```
### Marketplace/Cuenta Principal

Para validar si el Marketplace está incluyendo correctamente el SKU del seller white label en el carrito, usted debe hacer un `POST` en la ruta de checkout:

`http://{{main-accountName}}.{{environment}}.com.br/api/checkout/pub/orderforms/simulation`

A continuación, sigue un ejemplo del `body` necesario para el `POST`:
```json
  {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```

Si la configuración se ha realizado correctamente, la llamada devolverá la información de checkout, incluyendo en el carrito el SKU enviado en el contexto del `body`.

Así, basta con buscar en el json de respuesta si la entrega del SKU puede ser hecha por el pickup point registrado.

