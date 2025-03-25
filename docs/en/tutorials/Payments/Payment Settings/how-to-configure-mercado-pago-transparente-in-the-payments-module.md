---
title: 'How to configure Mercado Pago Transparente in the Payments module?'
id: tutorials_4570
status: ARCHIVED
createdAt: 2017-04-27T21:50:13.164Z
updatedAt: 2022-07-13T19:38:22.935Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.836Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-mercado-pago-transparente-in-the-payments-module
locale: en
legacySlug: how-to-configure-mercado-pago-transparente-in-the-pci-module
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

The purpose of this article is to describe the steps for adding and configuring the Mercado Pago Transparente connector.

First, you'll need to access the Payments module and click on **Settings**, at the right on the top bar.
![2017-01-26 19_04_37-Transações _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-configure-mercado-pago-transparente-in-the-payments-module_1.png)

After that, you'll have to click on **Gateway Affiliations** and then on the **+** icon, on the right. You'll see a collection of connectors and will just need to select the Mercado Pago Transparente card (__MercadoPagoV1__).
![2017-01-26 19_12_51-Conectores _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-configure-mercado-pago-transparente-in-the-payments-module_2.png)

You will be redirected to the page where you have to edit the fields related to the connector. We recommend you to rename the field **Affiliation name**, so it will be easier to find in **Payment conditions**.
![2017-01-26 20_00_11-Mercado Pago Transparente - Nova configuração _ VTEX PCI Gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-configure-mercado-pago-transparente-in-the-payments-module_3.png)

You should then [configure the anti-fraud](/en/faq/how-to-configure-mercadopago-transparente) and [enter the credentials](/en/faq/where-can-i-see-my-mercado-pago-transparente-credentials/). Remember that the **Client Id** and **Client Secret** values must not start with **APP_USR**.

Last but not least, you have to choose the currency (using the field **Currency**), if you want registered payment slips (using the field **Boleto Registrado**), and if you want to ask the user a document to authorize the purchase (using the field **Solicitar documento ao comprador**).

Then, you'll have only to click on the **Save** button. The Mercado Pago Transparente will be avaiable in your store.
