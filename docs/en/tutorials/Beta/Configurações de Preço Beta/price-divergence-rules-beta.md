---
title: 'Price divergence rule (Beta)'
id: 3CKxNtngadl7WA9fRDDhsl
status: ARCHIVED
createdAt: 2021-07-16T20:31:14.633Z
updatedAt: 2021-12-25T20:50:19.890Z
publishedAt: 
firstPublishedAt: 2021-07-19T15:29:43.169Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: price-divergence-rules-beta
locale: en
legacySlug: price-divergence-authorization-rules-for-sellers
subcategoryId: 4ZBiXqnPntLbsijZ0djFcD
---

<div class="alert alert-info" >
  <p>This feature is in Beta stage, meaning we are working to improve it. If you have any questions, please contact <a href = "https://support.vtex.com/hc/en-us/requests">our Support Center</a>.</p>
</div>

Integrations between VTEX sellers and [native connectors](https://help.vtex.com/en/tutorial/integrando-com-marketplace--tutorials_402#integrating-with-a-native-connector-vtex) can present divergences between the prices configured on the VTEX platform and the ones displayed in the marketplace, which can generate errors in the Order Management System (OMS).

Orders whose price difference is greater than the values configured in the integration are not automatically sent to the OMS. This causes orders to remain on “error” status in the `Orders` section, in the *INTEGRATIONS* module of the Admin, waiting to be manually approved.

![divergenciadepreçosEN-01](https://images.contentful.com/alneenqid6w5/4mjfgTHC1DrhmprHMU4akp/7085908f63fefc87357e95f6bb363dd9/divergenciadepre__osEN-01.gif)

To send orders with price divergence to the OMS, we have created the price divergence rule (Beta). According to this rule, all orders that diverge in price are sent to the OMS and must be manually approved by the individual in charge — the person whose email address is listed under *Account management > Accounts*. You can add more than one email address.

Once you have created a price divergence rule, orders that diverge in price will be sent to the OMS, which will ensure their stock reservation and classify them into the status `Waiting for manual authorization`.

You can manage and manually approve orders via OMS or [VTEX DO](https://help.vtex.com/en/tutorial/vtex-do--tutorials_203), and only authorized users can approve orders. 

The default configuration in a price divergence rule is to `automatically deny` orders that present a divergence percentage from 0% to 30%. But you can change this configuration or even create new rules.

>ℹ️ If you have a price divergence rule (Beta) configured, you no longer need to configure the Price Divergence field in the marketplace integration. If the Price Divergence field has already been configured in your integration, it will no longer be valid.

## Configuring the price divergence rule (Beta)

You can configure the price divergence rule by:

- [Creating rules](#creating-rules)
- [Editing rules](#editing-rules)

### Creating rules

![barra regradivergenciaEN](https://images.contentful.com/alneenqid6w5/DqcEZulHBr5XuNbF8LWDn/3aa409e8d104ed4beb73a5dd33886d97/barra_regradivergenciaEN.JPG)

To create a rule, follow the steps below:

1. Access the Admin.
2. In the *ORDERS* module, click on `Orders management`.
3. Click on `Orders authorization`.
   * If this option does not appear in your Admin, access the URL `https://{accountname}.myvtex.com/admin/order-auth`, and replace {accountname} with the name of your store.
4. Under *PRICE DIVERGENCE*, click on `CREATE RULES`.
5. Then click on `CREATE RULES` at the bottom of the page.
   * The system automatically configures a rule with a percentage of divergence between 0% and 30%, corresponding to the light blue bar.
6. hoose one of the following options for the authorization rule: `Automatically authorize`, `Automatically deny`, or `Create a VTEX DO task to approve`.
7. To increase or decrease the divergence percentage, click on the bar and drag its extremities considering the symbols "<" (less than) and ">" (greater than).
8. To create the second rule, click on the icon <img class="shadow-4" src="https:////images.ctfassets.net/alneenqid6w5/7E2BhdEapQ5Lmm4fLRKxpp/2770eaaa5af9653a71416c2f9677eb37/__cone_regras.JPG" /> and repeat steps 6 and 7.
9. Click on `Save rules`.

During the process of creating rules, you will see the following tabs:
   * **All:** If you create a single rule, only this tab will be available on the page. As you create more rules, they will be grouped in this tab.
   * **1st rule:** If you create an additional rule, you can configure it in this tab.
   * **2nd rule and subsequent rules:** You can use this tab for configuring two or more rules, and it will only be displayed after you configure previous rules.

### Editing rules

To edit existing rules, follow the steps below:

1. Access the Admin.
2. In the *ORDERS* module, click on `Orders management`.
3. If this option does not appear in your Admin, access the URL `https://{accountname}.myvtex.com/admin/order-auth`, and  replace {accountname} with the name of your store.
4. Under *PRICE DIVERGENCE*, click on `EDIT RULES`.
5. Edit the rule you want by changing the percentage bar.
6. Then click on `Save rules`.

![divergenciadepreçosEN-02](https://images.contentful.com/alneenqid6w5/19JIIISSI8aKitR5Alvzfy/9f0135552d26f4353df30374a361c6a6/divergenciadepre__osEN-02.gif)

## Order authorization

You can approve orders with the status `Waiting for manual authorization` by:
- [Manually authorizing orders in the OMS](#manually-authorizing-orders-in-the-oms)
- [Authorizing orders via VTEX DO](#authorizing-orders-via-vtex-do)

>⚠️ You must have permission from the account owner to authorize requests, otherwise, the following message will be displayed: 
> “You do not have authorization rules yet. Then all cases of divergences are automatically denied.”

### Manually authorizing orders in the OMS

To authorize orders manually, follow the steps below:

1. Access the Admin.
2. In the *ORDERS* module, click on `Orders management`.
3. Select `All orders`.
4. Select the order with the status `Waiting for manual authorization` that you want to approve. 
5. Click on `Approve order`.

![divergenciadepreçosEN-03](https://images.contentful.com/alneenqid6w5/5HVasmtuyHSGDmVAlPnl8T/3f1e507a2f00ca82e1ebc43dcdc5809c/divergenciadepre__osEN-03.gif)

### Authorizing orders via VTEX DO

[VTEX DO](https://help.vtex.com/en/tutorial/vtex-do--tutorials_203) manages tasks generated in the platform modules that require to be manually reviewed.  To authorize orders via VTEX DO, follow the steps below: 

1. Access the Admin.
2. In the *ORDERS* module, click on `Orders management`.
3. Select `All orders`.
4. Click on VTEX DO (the inbox icon at the bottom right corner of the page).
5. Select the order you want to authorize.
6. Click on `Close`.
7. Click on `Authorize`.

![divergenciadepreçosEN-04](https://images.contentful.com/alneenqid6w5/4Hy0li6MdpqLRQiDqkQOyi/055b6a1120bc50793625319db6aa30d4/divergenciadepre__osEN-04.gif)
