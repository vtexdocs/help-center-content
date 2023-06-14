---
title: How to configure Mercado Pago Transparente in the Payments module?
id: tutorials_4570
status: DRAFT
createdAt: 2017-04-27T21:50:13.164Z
updatedAt: 2022-07-13T19:38:22.935Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.836Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-mercado-pago-transparente-in-the-payments-module
legacySlug: how-to-configure-mercado-pago-transparente-in-the-pci-module
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The purpose of this article is to describe the steps for adding and configuring the Mercado Pago Transparente connector.

First, you'll need to access the Payments module and click on **Settings**, at the right on the top bar.
![2017-01-26 19_04_37-Transações _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/6Gxdu2Z0NqyggYkEe8A8q0/7fd3e1c15fd89ec76c90473329ff1439/2017-01-26-19_04_37-Transa_C3_A7_C3_B5es-_-VTEX-PCI-Gateway-300x105.png)

After that, you'll have to click on **Gateway Affiliations** and then on the **+** icon, on the right. You'll see a collection of connectors and will just need to select the Mercado Pago Transparente card (__MercadoPagoV1__).
![2017-01-26 19_12_51-Conectores _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/69Wai0Un0A0S4C0EyuCsme/8bcdc06f9863147fb04c403e83125fea/2017-01-26-19_12_51-Conectores-_-VTEX-PCI-Gateway-300x245.png)

You will be redirected to the page where you have to edit the fields related to the connector. We recommend you to rename the field **Affiliation name**, so it will be easier to find in **Payment conditions**.
![2017-01-26 20_00_11-Mercado Pago Transparente - Nova configuração _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/3oiEcYJ3LGCGiGA0Uq2ucm/2e15790c707b2496e38d2d89fc88687f/2017-01-26-20_00_11-Mercado-Pago-Transparente-Nova-configura_C3_A7_C3_A3o-_-VTEX-PCI-Gateway-300x208.png)

You should then [configure the anti-fraud](/en/faq/how-to-configure-mercadopago-transparente) and [enter the credentials](/en/faq/where-can-i-see-my-mercado-pago-transparente-credentials/). Remember that the **Client Id** and **Client Secret** values must not start with **APP_USR**.

Last but not least, you have to choose the currency (using the field **Currency**), if you want registered payment slips (using the field **Boleto Registrado**), and if you want to ask the user a document to authorize the purchase (using the field **Solicitar documento ao comprador**).

Then, you'll have only to click on the **Save** button. The Mercado Pago Transparente will be avaiable in your store.
