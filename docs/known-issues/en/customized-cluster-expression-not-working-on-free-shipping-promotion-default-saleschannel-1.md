---
title: Customized cluster expression not working on free shipping promotion + Default saleschannel (1)
id: 27QJfNVhuPNiRxqQiXPRt2
status: PUBLISHED
createdAt: 2022-03-16T19:36:36.102Z
updatedAt: 2022-11-25T22:12:51.339Z
publishedAt: 2022-11-25T22:12:51.339Z
firstPublishedAt: 2022-03-16T19:36:36.504Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: customized-cluster-expression-not-working-on-free-shipping-promotion-default-saleschannel-1
kiStatus: Backlog
internalReference: 334027
---

## Summary


Currently customized cluster expressions are not working on free shipping type promotions.








## Simulation


1) Create a customized cluster expression on MasterData

2) Create a cluster promotion (https://help.vtex.com/pt/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342) in which the promotion type is a Free Shipping benefit.

3) The promotion should use a SC that is not the default of the store.

4) Try to log with an user that is valid for this cluster and add a valid product for it on the cart (the benefit will not be applied).






## Workaround


Use a default cluster expression on the promotions settings, like isCorportate.

