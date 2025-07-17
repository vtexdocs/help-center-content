---
title: "XML - Installment currency does not apply"
id: 7kPbxbGnpqeqU8XCD576hZ
status: PUBLISHED
createdAt: 2024-02-02T19:16:59.053Z
updatedAt: 2024-07-01T18:49:23.913Z
publishedAt: 2024-07-01T18:49:23.913Z
firstPublishedAt: 2024-02-02T19:16:59.992Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-installment-currency-does-not-apply
locale: en
kiStatus: No Fix
internalReference: 976295
---

## Summary


When setting up a currency in an XML, it applies to all fields except the "Installment" field.

The "Installment" field always displays the currency as "R$", regardless of the configured currency.


##

## Simulation



1. Create/Update a XML with a currency different from "R$" and enable the Installment field.
2. Check that all price fields on XML are correctly returning the currency, except the Installment.


##

## Workaround


N/A





