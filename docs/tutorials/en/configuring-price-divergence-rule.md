---
title: 'Configuring Price Divergence rule'
id: awAKP0sS5J8jgLs2g7pPe
status: PUBLISHED
createdAt: 2021-12-03T01:24:41.194Z
updatedAt: 2024-08-13T20:39:38.157Z
publishedAt: 2024-08-13T20:39:38.157Z
firstPublishedAt: 2021-12-03T01:31:08.666Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: configuring-price-divergence-rule
locale: en
legacySlug: configuring-price-divergence-rule
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

When the price defined by the seller is different from the price offered by the marketplace, orders may not be processed correctly. On VTEX, the order authorization flow allows you to control and automatically approve these orders by configuring [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). This article explains how sellers can create and edit Price Divergence rule and manually approve orders.

When no Price Divergence rule is created, the VTEX platform will behave differently for each scenario below:

- **Orders created through the Marketplace interface:** Will be automatically denied.
- **Orders created via API:** Will be automatically denied if the `isCreatedAsync` field is not sent.
- **Orders with Price Divergence related to manual discounts:** Will be automatically authorized.

To use the Order Authorization flow, in cases of price divergence, you need to send the `isCreatedAsync` field in the [Place Fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders) API, regardless of the type of connector used. This scenario is valid for VTEX marketplaces, external marketplaces, [certified connectors (partners)](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), or [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).

When a seller is integrated with a native connector, such as Amazon, but has not configured a Price Divergence rule, orders with price difference errors remain pending until the rule is created. You can track them in your VTEX Admin by clicking on **Marketplace > Connections > Orders**.

We recommend that the seller creates the Price Divergence rule before configuring the integration with a native connector. Not following this recommendation does not prevent the integration from being configured, however, orders with divergent prices are held until the Price Divergence rule is created.

## Creating Price Divergence rule

The [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) is composed of one or more order authorization rules, which correspond to ranges between 0% and 100% of the order price. The configuration is done so that each range is associated with an automatic processing action.

<div class = "alert alert-info">
To create a Price Divergence rule, the user must have a Super Admin (Owner) or OMS Full role. To ensure security in the management of your operations, please refer to the article Best practices for secure user management.
</div>

To create a price divergence rule, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Order Authorization**, or type *Order Authorization* in the search bar at the top of the page.
2. In the _Price Divergence_ section, click `CREATE RULES`.
3. On the new page, click `CREATE RULES`.

You will see the following screen:

![print_01_EN](//images.ctfassets.net/alneenqid6w5/6lp2IKdU8VvaFgOUhHv5GA/fa9641527537c42b23341371afd4952c/print_01_EN.png)

The **All** tab displays all configured authorization rules.

To create the first authorization rule, click on **CREATE RULES**. A new tab named **1st rule** will be displayed. Clicking on this tab will display the configuration options.

![print_02_EN](//images.ctfassets.net/alneenqid6w5/Q8TwzIWNwQPg13tcaALd6/624e56c9b13d8208d9415b0645b4745a/print_02_EN.png)

To configure the **1st rule**, you can increase or decrease the divergence percentage by dragging the ends of the bar. The > sign determines the start of the range, and the < sign determines its end. The range can be from 0% to 100%.

If you create a single authorization rule and it is less than 100%, orders with price variation outside the configured limit will not be integrated.

Once you have defined the authorization rule range, select one of the following options:

- **Automatically authorize:** Orders with a price difference within the defined range are automatically integrated.
- **Automatically deny:** Orders with a price difference within the defined range are automatically rejected and are not integrated.
- **Create a task in VTEX DO for approval:** For the configured range, the order is integrated, but remains in pending status, awaiting approval from an authorized user. In the **Authorized persons** field, you must enter the email addresses of the users who can [manually approve these orders](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually).

To configure a hierarchy of users responsible for approving orders, you must enter more than one email address and sort the registered users. You can change these users at any time by editing the order authorization rule. Please note that only users with the Super Admin (Owner) or OMS Full [roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) can edit the rule.

To create the **2nd rule**, click on the <i class="fas fa-plus" aria-hidden="true"></i> plus sign. The same applies to creating a third or fourth rule, and so on. Once you click on the icon, the following interface is displayed:

![print_03_EN](//images.ctfassets.net/alneenqid6w5/6Yxvh93ja2V69Yywn3CyWt/9c85616fd03154cf6130dc5addc22cc4/print_03_EN.png)

Configure the new authorization rule and, once you have configured all the rules you want, click on the **SAVE RULES** button. You will see the following message: _After saving, you can still edit or delete them at any time_. Click **OK** to confirm. Once this is done, the Price Divergence rule will be created.

<div class="alert alert-warning">
Once the Price Divergence rule is created, it is applied to all marketplaces where you act as a seller.
</div>

## Editing Price Divergence rule

You can edit Price Divergence rule at any time. To do this, log in to your VTEX Admin, go to **ORDERS > Order management > Order authorization > Price Divergence**, and click on **EDIT RULES**.

On this page, you can delete the price divergence rule by clicking on **DELETE RULES**. This causes all configured authorization rules to be permanently deleted.

<div class = "alert alert-info">
This action cannot be undone. If you want to reapply the rules, you need to configure them again. The same applies to the authorization rules that make up the Price Divergence rule.
</div>

On the same page, in the **All** tab, you can see the list of all the order authorization rules created. To delete an authorization rule, click on the **DELETE RULE** button next to the rule you want to delete.

If you want to edit an authorization rule, click on the tab corresponding to the rule you want to modify. The process for editing a rule is the same as for [creating a Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#creating-price-divergence-rule).

Once you have made the desired changes, click on the **SAVE RULES** button, and then on **OK**.

## Approving orders manually

When an authorization rule is configured with the option _Create a task in VTEX DO for approval_, this means that at least one user has been assigned to manually approve the order. [Managing orders with price divergence](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#managing-orders-with-price-divergence) is similar to managing orders from any other sales channel, such as a physical store or ecommerce.

<div class="alert alert-warning">
It is important to regularly track orders in <b>Orders</b> module. To do this, go to <b>Orders > All Orders</b>. If they require manual approval, orders with price divergence errors remain pending, awaiting approval by an authorized user, defined when the authorization rule was created. Having at least two users authorized to perform manual processing is a good practice.
</div>

There are two ways to manually approve an order with price divergence:

- [Approving orders via OMS](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-via-order-management)
- [Approving orders via VTEX DO](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-via-vtex-do)

### Approving orders via Orders module

This is done on the [All Orders page](https://help.vtex.com/en/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi). To do this, follow the steps below.

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Click on the order with the status `Waiting for manual authorization`.
3. Click on `Approve order`.

### Approving orders via VTEX DO

VTEX DO manages tasks created by the modules of the VTEX platform. It allows authorized users to manually perform tasks such as approving or canceling orders, among others. Learn more in the article [VTEX DO](https://help.vtex.com/en/tutorial/vtex-do--tutorials_203).

To approve an order with price divergence via VTEX DO, follow the steps below.

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. In the bottom right corner of the screen, click the VTEX DO component.
3. Click the order pending approval.
4. Click `Close`.
5. Click the `Authorize` option.

### Learn more

- [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [All Orders](https://help.vtex.com/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)
- [Marketplace strategies on VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

