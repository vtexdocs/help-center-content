---
title: 'Setting up payments with Zoop'
id: 5bRYiUjX1sewZuON8HA6Ld
status: PUBLISHED
createdAt: 2023-02-13T18:17:14.240Z
updatedAt: 2023-02-13T18:57:07.275Z
publishedAt: 2023-02-13T18:57:07.275Z
firstPublishedAt: 2023-02-13T18:50:09.746Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-zoop
locale: en
legacySlug: setting-up-payments-with-zoop
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Zoop payment provider. With this connector, your store can make sales through credit cards and bank invoice.

To configure Zoop affiliation, follow the steps below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. In the __Gateway affiliations__ tab, click on the `+` button.
5. Click on the __Zoop__ connector.
6. Fill in the __Application Key__ and __Application Token__ fields with data provided by Zoop.
7. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>  8. In <b>Enable payout split and send payment recipients?</b>, select whether split payments will be available for the marketplace and sellers.</ui>

<ui>  9. Click on <b>Save.</b></ui>

To set up payment conditions, access [Configure special payment conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions).

After following the indicated steps, Zoop connector may take up to 10 minutes to appear at your store's checkout as a payment option.
