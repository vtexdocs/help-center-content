---
title: 'XML - Currency symbol in the "Installment"'
id: 4s7hBA1MAUgeEC2Q4K8gKM
status: PUBLISHED
createdAt: 2017-06-26T15:22:31.980Z
updatedAt: 2022-12-22T20:48:49.927Z
publishedAt: 2022-12-22T20:48:49.927Z
firstPublishedAt: 2017-06-26T23:18:58.653Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: xml-currency-symbol-in-the-installment
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When you set a currency in an XML, it applies to all fields except the **Parcelamento** field.

The **Parcelamento** field always shows the currency "R$", regardless of whether the currency is set differently.

![Parcelamento](//files.slack.com/files-pri/T02BCPD0X-F5WHSHM5E/image.png)

## Simulation

1. Access the "Catalog" module;
2. Access the "Configuration" menu;
3. Access the "XML";
4. Click **New XML** (or modify an existing one by clicking the **Change** button);
5. Assign a value other than "R$" to the "Símbolo de moeda nos preços" field;
6. Check "Display content" in the "Parcelmento" field;
7. Tag the "Parcelmento" field;
8. Click on the __Save__ button;
9. Review the created XML.

## Workaround

Currently, to change the currency in the field **Parcelamento** there is no palliative solution.

