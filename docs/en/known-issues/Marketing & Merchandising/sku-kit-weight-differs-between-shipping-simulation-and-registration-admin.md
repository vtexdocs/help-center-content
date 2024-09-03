---
title: 'SKU KIT weight differs between shipping simulation and registration (admin)'
id: 4YAWHxWpPOAoyi0O8MuEeC
status: PUBLISHED
createdAt: 2017-09-29T12:52:49.738Z
updatedAt: 2022-12-22T20:45:55.001Z
publishedAt: 2022-12-22T20:45:55.001Z
firstPublishedAt: 2017-09-29T13:16:34.258Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sku-kit-weight-differs-between-shipping-simulation-and-registration-admin
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

A SKU KIT should weigh the sum total of its components. When a KIT is being created, the system should increment the weight of each component to the weight of the KIT, however, this is only happening when the KIT (Parent) is edited and updated. The main impact is seen in the shipping simulation, since the KIT often appears as having a much heavier weight than in reality.

![shipping simulation](https://images.contentful.com/alneenqid6w5/3nD8BM0a7ecKKoWEUewoQa/d6ecf51e491b6a54fdc4dc6f3240a75a/simulacao.png)

## Simulation

To simulate, manually create a SKU KIT through admin. This article describes each step needed when registering a KIT: [Kit Registration](http://help.vtex.com/pt/tutorial/--tutorials_215)

## Workaround

To overcome this behavior, as soon as you notice this divergence, access the SKU KIT (Parent) through admin and click on the save button (either by applying changes or not). The same process can be done by spreadsheet. After this step, wait a few moment for the indexation to finish.

