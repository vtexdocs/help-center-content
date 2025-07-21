---
title: "Kit Weight can be Overritten by API/Webservice"
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
locale: en
kiStatus: No Fix
internalReference: 429993
---

## Summary


Currently, it is set in our catalog business rules that a KIT SKU's freight weight should be defined by the sum of its components - https://help.vtex.com/en/tutorial/cadastrando-kit--tutorials_215

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/kit-weight-can-be-overritten-by-apiwebservice_1.png)

However, it is currently possible to overwrite this weight calculation via API and or webservice where the value set is the one directly sent in the payload, not considering any component weightage.


## Simulation


1) Create an SKU KIT and components for it;

For example, the component's original weight can be 100g and the kit is composed of 6 items of this unique component. Consequently, its final weight should be 600g:

Even the input box is set as a readonly.

2) However, if in the SKUKIT structure, that is, the form that composes the kit's information, I fetch this data via API or webservice, such as:

`curl --location --request GET 'https://merch.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/310118469' \`
`--header 'Content-Type: application/json' \`
`--header 'Accept: application/json' \`
`--header 'VtexIdclientAutCookie: ' \`
`--header 'Cookie: janus_sid=361dacc3-e2b8-4ee1-8f5b-b2cf0529f39a' \`
`--data-raw ''`

3) And then directly update the related JSON property, sending it via PUT Method in the payload:

```json
`curl --location --request PUT 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/?an=' \`
`--header 'Content-Type: application/json' \`
`--header 'Accept: application/json' \`
`--header 'VtexIdclientAutCookie: ' \`
`--header 'Cookie: janus_sid=eee0b24c-f31b-4359-9bbd-5745b5b38d39' \`
`--data-raw '{`
`    "Id": 310118469,`
`    "ProductId": 35,`
`    "IsActive": true,`
`    "ActivateIfPossible": true,`
`    "Name": "Kit com 6",`
`    "RefId": "000806",`
`    "PackagedHeight": 1.0000,`
`    "PackagedLength": 3.0000,`
`    "PackagedWidth": 2.0000,`
`    "PackagedWeightKg": 0.300,`
`    "Height": null,`
`    "Length": null,`
`    "Width": null,`
`    "WeightKg": null,`
`    "CubicWeight": 0.0013,`
`    "IsKit": true,`
`    "CreationDate": "2021-09-14T09:20:00",`
`    "RewardValue": null,`
`    "EstimatedDateArrival": null,`
`    "ManufacturerCode": "",`
`    "CommercialConditionId": 1,`
`    "MeasurementUnit": "un",`
`    "UnitMultiplier": 1.0000,`
`    "ModalType": null,`
`    "KitItensSellApart": false,`
`    "Videos": []`
`}'`
```

The previous value that took into account the component's weight * amount is completely overwritten, consequently generating possible inconsistencies in the freight calculations.


## Workaround


Updating the component weights only and letting the application calculate the final kit weight by itself.

