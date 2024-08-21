---
title: 'How order Authorization works'
id: 59otf1ZTweLmtZ07hIR854
status: DRAFT
createdAt: 2019-03-12T16:37:03.426Z
updatedAt: 2020-03-05T18:16:51.131Z
publishedAt: 
firstPublishedAt: 2019-03-12T16:38:58.550Z
contentType: tutorial
productTeam: Post-purchase
author: 523NSmHfn2IKEoiy2Q44YS
slug: how-order-authorization-workss
locale: en
legacySlug: untitled-entry-2019-03-12-at-04-37-03
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

In the Order Management module, __Order Authorization__ allows you to control approvals for orders in your store that have a price divergence.

![autorização-de-pedidos EN](https://images.ctfassets.net/alneenqid6w5/2lbMgKkD1d4Bm7jJwPECqg/a8959ca6d3690c3a53d2e6a34fbc4fa6/autoriza____o-de-pedidos__EN.png)

This divergence in price between orders may occur in two main scenarios:

### Manual Discounts

When the order originated in the store itself using manual discounts, applied by the sales reps of that store, for example.

### Price Divergence

When the order originated in an external [marketplace](https://help.vtex.com/tutorial/what-is-a-marketplace--680lLJTnmEAmekcC0MIea8), with a different price than that registered with the [seller](https://help.vtex.com/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w).

To avoid a loss in revenue due to integration errors or orders which has their prices manually altered, the order Authorization allows for rules to be set for each variation percentage rate that exists in your store, such as:

- From 0% to 5% variation, the order will be approved automatically.
- From 5,01% to 30% variation, the order will be sent to the user 'user@example.com' for approval.
- From 30,01% to 100% variation, the order will be automatically denied.

To configure the second rule, granting users [permissions](https://help.vtex.com/tutorial/how-to-create-an-access-profile--tutorials_526) to approve orders is necessary.

In such cases, the user registered as responsible receives a notification for each new order  `waiting-for-manual-authorization`, through VTEX DO.

When notified, the user should:

1. Access the details of the desired order in <strong>All orders</strong>, located in the <strong>Orders Management</strong> module;
2. Select the <strong>Approve order</strong> button;
3. Confirm agreeing to the impact of their actions.

The remaining orders, classified in the variation % rates with automatic rules will be automatically processed by the system.

>⚠️ It's not possible to configure order Authorization to approve orders hierarchically or by approval chain, but instead by a single user.
