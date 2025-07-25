---
title: 'Configuring the Rede acquirer'
id: 4FEVcvYWC4uS4yoYS2WAIw
status: ARCHIVED
createdAt: 2018-02-22T20:21:54.730Z
updatedAt: 2022-12-23T20:20:11.414Z
publishedAt: 
firstPublishedAt: 2018-02-22T23:18:26.819Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: configuring-the-rede-acquirer
locale: en
legacySlug: configuring-the-rede-acquirer
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can integrate your store with the Rede acquirer. After you configure the __ERedev2__ connector, your store will be able to accept credit card payments from the main brands.

>ℹ️ **Warning**: currently there is a more updated version of Rede’s connector. For more details on how to configure this acquirer, read the article on [ERedeREST](https://help.vtex.com/en/tutorial/configurar-adquirente-rede-con-erederest?locale=en "ERedeREST").

To configure Rede, follow the steps below:

## Configuring ERedeV2 gateway affiliation

1. Access the __Payments__ module.
2. Click on __Settings__.
2. In the __Gateway Affiliations__ tab, click on the __+__ button.
3. Click on the __ERedeV2__ connector.
4. Fill in the registration fields with the data provided by Rede (fields *Código de filiação, Senha*).
5. In the __Soft Descriptor__ field, you can enter a custom string that will be printed on the customer invoice.
6. In the __Early security capture__ field, you must choose how long after payment approval the capture should occur.
7. Click on __Save__.

## Configuring payment conditions

In VTEX, the ERedeV2 connector processes mainly __credit cards__. To configure the payment methods Rede will process, [read our tutorial](/en/tutorial/how-to-configure-payment-conditions).
