---
title: 'Setting up Mundipagg gateway'
id: 6C9412jePCUMGguq0YWU8M
status: PUBLISHED
createdAt: 2018-04-18T18:01:44.533Z
updatedAt: 2023-03-29T00:36:17.690Z
publishedAt: 2023-03-29T00:36:17.690Z
firstPublishedAt: 2018-04-18T20:58:03.675Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-mundipagg-gateway
locale: en
legacySlug: setting-up-mundipagg-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Mundipagg is a [gateway](/en/tutorial/what-is-a-payment-gateway) that processes payments made with bank slips, bank transfers and major credit card brands.

To configure Mundipagg, follow the steps below:

## Setting up Mundipagg gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Mundipagg__ connector.
4. Fill in the __Merchant Key__ field with the key registered in Mundipagg. It consists of 36 characters, including letters, numbers and hyphens.
5. In __Pais__ ("Country"), choose the country of your store.
6. The __Register Url Post Notification at Mundipagg__ field gives an address for you to set up the receiving of notifications about payment statuses. In the link `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification`, replace `{sellerhost}` with your store's account name. Then, send the final URL to Mundipagg to complete the registration.
7. In __Instruções no boleto ao Caixa (Max 350 characters)__ ("Register in the ticket to cashier"), write the instructions that will be printed on the ticket. The text must not exceed 350 characters.
8. In the __Banco do boleto__ ("Bank of ticket"), indicate the bank that will generate the ticket and then validate the reconciliation with Mundipagg.
9. Under __Tipo de Estorno__ ("Type of cash back"), choose between the automatic process or the manual request (in this case, Mundipagg will send you an e-mail notifying you of the pending cash back).
10. In __Dias de expiração do Boleto__ ("Ticket expiration days"), select the number of days to pay before the ticket expires.
11. In __Boleto Registrado__ ("Registered ticket"), inform whether the ticket is registered or not.
12. In __Captura de segurança antecipada__ ("Early security capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
13. Click __Save__.

<div class = "alert alert-info">
The steps indicated in steps <strong>8</strong>, <strong>9</strong>, <strong>11</strong> and <strong>12</strong> must be completed if you want to offer bank slips as payment conditions in your store.
</div>

## Setting up the payment condition
After following the steps indicated above, Mundipagg will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Mundipagg). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
