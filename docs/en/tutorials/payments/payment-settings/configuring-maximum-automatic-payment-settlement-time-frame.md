---
title: 'Configuring maximum automatic payment settlement time frame'
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2025-01-17T17:10:02.532Z
publishedAt: 2025-01-17T17:10:02.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-maximum-automatic-payment-settlement-time-frame
legacySlug: configuring-maximum-payment-capture-time-frame
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Firstly, it is important to understand the difference between three similar concepts used by payment providers on the platform, __settlement after payment confirmation__, __automatic settlement__ and __payment with anticipated settlement authorization__.

> ⚠️ The following information is valid for payments with credit cards.

## Settlement after payment confirmation

Settlement after payment confirmation is a VTEX internal [transaction flow](/en/tutorial/transaction-flow-in-payments--Er2oWmqPIWWyeIy4IoEoQ) stage that occurs after a customer has paid for an order, without direct customer involvement.

When an order is billed and its products are pending picking by the carrier, the gateway system triggers a settlement. This settlement happens because the order status is updated to show that payment has been successfully processed.

## Payment with anticipated settlement authorization

Payment with anticipated settlement authorization is an optional feature that allows retailers to establish that payment settlement will take place before the automatic settlement triggered by VTEX.

It is important to emphasize that the anticipated settlement authorization will only happen after the analysis of anti-fraud provider, if the client has this service.

## Automatic settlement

This is a security measure used to prevent payment authorization from not being made. 

When the authorization process begins, the system waits for a previously set maximum time limit to trigger the automatic settlement. This maximum time frame does not include the anti-fraud provider validation period.

The retailer and the acquirer agree on the time frame for the automatic settlement to be triggered. 

> ℹ️ The maximum time frame set for payment settlement is usually four days. However, this is **not** a rule. Each acquirer can define the period they find most appropriate.

See below an example of how to perform the above settings:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name of the provider in the search bar and click on it.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with your account information with the provider.
5. If you wish to modify the identification name to be displayed for the desired provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. Fill in the fields available on the form.
7. In the **Captura antecipada (em horas)** (Payment with anticipated capture authorization) field, select one of the available time options.
8. Fill in the **Alterar tempo máximo para captura** (Change maximum time for automatic payment capture) field with the period agreed with the acquirer. If you leave this field blank, the default time of 4 days will be considered.
9. Click `Save`.
