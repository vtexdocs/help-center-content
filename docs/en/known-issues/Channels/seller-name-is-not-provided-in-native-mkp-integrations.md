---
title: "Seller's Name is not provided in native mkp integrations"
id: bPx7CPZEXecgMe2Sscg6k
status: PUBLISHED
createdAt: 2017-12-28T15:21:09.238Z
updatedAt: 2022-12-22T15:10:41.565Z
publishedAt: 2022-12-22T15:10:41.565Z
firstPublishedAt: 2017-12-28T17:27:56.106Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Connections
slugEN: seller-name-is-not-provided-in-native-mkp-integrations
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When downloading the orders that are sold by the store, the field *"sellers"* is displayed with the fields *"Id"* and *"Name"* filled out. For example: *sellers: [{id: "1", name: "mitienda", logo: ""}]*

But in the orders integrated by MercadoLibre only the *"Id"* of the seller is diplayed, since the *"Name"* field comes back null: *sellers: [{id: "1", name: null, logo: null}]*

With the implementation of multiple sellers for vendors engaged in dropshipping, it is necessary to handle logistics for each individual seller. To identify each one, you can use the field *"Name"* to make it more user friendly, but this value is not provided when it originates from, for example, an order downloaded from MercadoLibre.

## Simulation

1. Download an order from the store with the GetOrder API and it will show that the *Name* value is filled out. For example: *sellers: [{id: "1", name: "mitienda", logo: ""}]*
2. Download a MercadoLibre order with the GetOrder API and it will show that the *Name* value is not filld out and the value is null. For example: *sellers: [{id: "1", name: null, logo: ""}]*

## Workaround

You can identify each seller by ID and then display the user-friendly name you want in the integration of the internal side.

