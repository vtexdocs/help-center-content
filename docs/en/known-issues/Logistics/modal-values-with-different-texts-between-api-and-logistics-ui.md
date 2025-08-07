---
title: "Modal values with different texts between API and Logistics UI"
id: 3tW7Dr2nyHyvqiPMVtykAC
status: PUBLISHED
createdAt: 2023-03-22T14:06:50.812Z
updatedAt: 2023-03-22T14:12:21.578Z
publishedAt: 2023-03-22T14:12:21.578Z
firstPublishedAt: 2023-03-22T14:06:51.980Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: modal-values-with-different-texts-between-api-and-logistics-ui
locale: en
kiStatus: Backlog
internalReference: 775800
---

## Summary


On the General Settings screen of the logistics module, when configuring the available modes for use in the catalog, the user will see a list of available values, these values when selected enable a selection option on the Advanced Settings screen of the SKU, but these values are not translated into the API and thus the values of the catalog UI may not have strings equal to the value of the logistics UI, because the value displayed in the catalog UI is exactly the API value.


##

## Simulation


Enter the General Settings Logistics screen area

Use a language other than EN

Enable a Modal option

Go to Catalog module - SKU Advanced Settings

Notice that the value available in the modal list does not have the same text selected in the General Settings Logistics screen.


##

## Workaround


When enabling each modal value in logistics, it is necessary to validate its equivalence with the Catalog UI.

