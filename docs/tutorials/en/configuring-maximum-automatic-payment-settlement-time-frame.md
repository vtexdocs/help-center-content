---
title: Configuring maximum automatic payment settlement time frame
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2023-03-26T21:34:20.532Z
publishedAt: 2023-03-26T21:34:20.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configuring-maximum-automatic-payment-settlement-time-frame
legacySlug: configuring-maximum-payment-capture-time-frame
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

In this article, you'll learn how to configure the maximum payment settlement time frame feature that is currently available for [Braspag](https://help.vtex.com/en/tutorial/configurar-o-gateway-braspag--7tQmfLMvtYEsWoaaAaeKSC "Braspag"), [Cielo V3](https://help.vtex.com/en/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu "Cielo V3"), [SiTef](https://help.vtex.com/en/tutorial/setting-up-sitef-gateway-with-pre-auth--2ZH4DLmZpKw022aSGcGYag "Sitef") and [e-SiTef](https://help.vtex.com/en/tutorial/configurar-gateway-e-sitef--6UEi0QAlU6BXz5RgWj34Ac) connectors. 

It is important to clarify the differences between __settlement after payment confirmation__, __automatic settlement__, and __payment with anticipated settlement authorization__ - three concepts from the payments market. For some payment connectors in the platform, these terms are referred to as __capture after payment confirmation__, __payment with anticipated capture authorization__ and __automatic capture__.

<div class="alert alert-warning">
The following information is valid for payments with credit cards.
</div>

## Settlement after payment confirmation

Settlement after payment confirmation is a VTEX internal[ transaction flow](https://help.vtex.com/en/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ "transaction flow") stage that occurs after a customer has paid for an order, without direct customer involvement.

When an order is billed and its products are pending picking by the carrier, the Gateway system triggers a settlement. This settlement happens because the order status is updated to show that payment has been successfully processed.

## Payment with anticipated settlement authorization

Payment with anticipated settlement authorization is an optional feature that allows retailers to establish that payment settlement will take place before the automatic settlement triggered by VTEX.

It is important to emphasize that the anticipated settlement authorization will only happen after the analysis of anti-fraud (if the client has this service).

## Automatic settlement

This is a security measure used to prevent payment authorization from not being made. 

When the authorization process begins, the system waits for a previously set maximum time limit to trigger the automatic settlement. This maximum time frame does not include the anti-fraud validation period.

The retailer and the acquirer agree on the time frame for the automatic settlement to be triggered. 

<div class="alert alert-info">
The maximum time frame set for payment settlement is usually four days. However, this is <strong>not</strong> a rule. Each acquirer can define the period they find most appropriate.
</div>

To configure the automatic settlement feature, follow the step-by-step instructions below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. At the top of the page, click on __ Gateway Affiliations__.
3. Click on the __“+” button __.
4. In the __Others section__, select the __afiliation__ you want to configure.
5. On the left side of the screen, fill in the __Affiliation name__ field.
6. Activate the __Live / Production__ mode.
7. Fill out the __form__.
8. In the __Payment with anticipated capture authorization__ field, select one of the available time options.
9. Fill in the __Change maximum time for automatic payment capture__ field with the period agreed with the acquirer. __If you leave this field blank, the default time of 4 days will be considered. __

![captura_automatica_EN](https://images.ctfassets.net/alneenqid6w5/4OXaQvc9dAoPs1lsPXmigk/3351cf6cd959943406edcf967ad4492c/image.png)
10. Click on __Save__ 

The new payment settlement feature will then be implemented in your store.
