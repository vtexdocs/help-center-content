---
title: 'Configuring Spin Pay gateway'
id: 3YuCJzFJV30COTjEs8Vyl3
status: PUBLISHED
createdAt: 2021-04-19T13:39:06.747Z
updatedAt: 2022-12-05T16:40:29.772Z
publishedAt: 2022-12-05T16:40:29.772Z
firstPublishedAt: 2021-04-19T14:13:34.952Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-spin-pay-gateway
legacySlug: configuring-spin-pay-gateway
locale: en
subcategoryId: 
---

You can now use the [Spin Pay](https://spinpay.com.br/) gateway to process payments in your VTEX store. This solution allows you to receive payments via PIX (Brazilian instant payment system) and the main digital wallets available on the market today.

> ⚠️ To use Spin Pay on VTEX, you must have an **Application Key (App Key)** and an **Application Token (App Token)**. You can get these keys after Spin Pay approves your registration and you sign the contract.

Once your registration has been approved and you have signed the contract, follow the steps below to configure Spin Pay in your store.

1. Go to the __Admin__.
2. Access the __Payments__ module.
3. Click on __Settings__.
4. In __Gateway Affiliations__, click on the green “__+__” button.
5. Search for the __Spin Pay__ option and select it.
6. In the __Affiliation name__ field, enter only __Spin Pay__.
7. In the __Application Key__ and __Application Token__ fields, enter the data that is available in your Spin Pay account dashboard. Follow the instructions described in [this documentation](https://spinpay.zendesk.com/hc/en-us/articles/5067562692247-Where-do-I-find-the-credentials-I-need-to-activate-Pix-in-my-virtual-shop-).
8. Click on __Save__.

Spin Pay will then be ready to process payments in your store. Follow the instructions below to set up the __payment conditions__.

### Configuring a payment condition

Once you have installed the gateway in your store, configure its [payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete) to ensure payments will be processed correctly.

1. Go to the __Admin__.
2. Access the __Payments__ module.
3. Click on __Settings__.
4. Select __Payment Conditions__ and click on the green "__+__" button.
5. Search for the __Spin Pay__ option and select it.
6. In the __Rule Name__ field, enter a name to identify the payment condition.
7. In __Status__, toggle the __Active__ option.
8. In __Process with affiliation__, select the __Spin Pay__ option that you have just configured.
9. If you have an anti-fraud solution, check the box next to __Use anti-fraud__ and choose an option.
10. Click on __Save__.

> ⚠️ Spin Pay is a brazilian instant payment solution in which debits are made directly to the consumer's bank account. For this reason, it doesn’t offer the option to pay in installments.

After completing all these steps, Spin Pay will be ready to process payments in your store.
