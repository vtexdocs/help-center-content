---
title: 'El peso del kit puede ser sobrescrito por la API/servicio web'
id: Dlrs4qgHsnwIHxqqV0Rmg
status: PUBLISHED
createdAt: 2022-06-28T16:55:40.711Z
updatedAt: 2024-02-16T20:29:08.522Z
publishedAt: 2024-02-16T20:29:08.522Z
firstPublishedAt: 2022-06-28T16:55:40.971Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-weight-can-be-overritten-by-apiwebservice
locale: es
kiStatus: No Fix
internalReference: 429993
---

## Sumario


>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés

Actualmente, las reglas de negocio de nuestro catálogo establecen que el peso de la carga de un KIT SKU debe ser definido por la suma de sus componentes - https://help.vtex.com/en/tutorial/cadastrando-kit--tutorials_215

 ![](https://vtexhelp.zendesk.com/attachments/token/jgbIT0VRNCLLOdiQO0CQrka5D/?name=inline-2098334185.png)

Sin embargo, actualmente es posible sobrescribir este cálculo de peso a través de la API y o del webservice, donde el valor establecido es el que se envía directamente en la carga útil, sin considerar el peso de ningún componente.

## Simulación


1) Crear un KIT SKU y componentes para el mismo;

Por ejemplo, el peso original del componente puede ser de 100g y el kit se compone de 6 artículos de este único componente. En consecuencia, su peso final debe ser de 600g:

Incluso la casilla de entrada está configurada como de sólo lectura.

2) Sin embargo, si en la estructura de SKUKIT, es decir, el formulario que compone la información del kit, obtengo estos datos a través de la API o webservice, como por ejemplo

`curl --location --request GET 'https://merch.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/310118469' ``
`--header 'Content-Type: application/json' \ ~ -
`--header 'Accept: application/json' \ ~ -
`--header 'VtexIdclientAutCookie: ' \ ~ -header 'VtexIdclientAutCookie: ' \ ~.
`--header 'Cookie: janus_sid=361dacc3-e2b8-4ee1-8f5b-b2cf0529f39a' \`
`--data-raw ''`

3) Y luego actualizar directamente la propiedad JSON relacionada, enviándola a través del método PUT en el payload:

```json
`curl --location --request PUT 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/?an=' \`
`--header 'Content-Type: application/json' \ ~ -
`--header 'Accept: application/json' \ ~ -
`--header 'VtexIdclientAutCookie: ' \ ~ -header 'VtexIdclientAutCookie: ' \ ~.
`--header 'Cookie: janus_sid=ee0b24c-f31b-4359-9bbd-5745b5b38d39' \`
`--data-raw '{``
` "Id": 310118469,`
` "ProductId": 35,`
` "IsActive": true,`
` "ActivateIfPossible": true,`
` "Nombre": "Kit com 6",`
` "RefId": "000806",`
` "PackagedHeight": 1.0000,`
` "PackagedLength": 3.0000,`
` "PackagedWidth": 2.0000,`
` "PackagedWeightKg": 0.300,`
` "Altura": null,`
` "Longitud": null,`
` "Ancho": null,`
` "PesoKg": null,`
` "CubicWeight": 0.0013,`
` "IsKit": true,`
` "CreationDate": "2021-09-14T09:20:00",`
` "RewardValue": null,`
` "EstimatedDateArrival": null,`
` "ManufacturerCode": "",`
` "CommercialConditionId": 1,`
` "MeasurementUnit": "un",`
` "UnitMultiplier": 1.0000,`
` "ModalType": null,`
` "KitItensSellApart": false,`
` "Videos": []`
`}'`
```

El valor anterior que tenía en cuenta la cantidad de peso del componente * se sobrescribe completamente, generando así posibles incoherencias en los cálculos de carga.


## Workaround


Actualizar sólo los pesos de los componentes y dejar que la aplicación calcule por sí misma el peso final del kit.

