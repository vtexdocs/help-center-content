---
title: 'Setting up Mundipagg Fraud Prevention gateway'
id: yFbysX42GW2wawu82q6QA
status: CHANGED
createdAt: 2018-04-18T21:01:40.512Z
updatedAt: 2024-03-18T18:40:56.708Z
publishedAt: 2024-02-16T12:17:04.418Z
firstPublishedAt: 2018-04-18T21:23:11.844Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-mundipagg-fraud-prevention-gateway
legacySlug: setting-up-mundipagg-fraud-prevention-gateway
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

> ❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

Mundipagg offers a version of its [gateway](/en/tutorial/what-is-a-payment-gateway) with anti-fraud functionality. Mundipagg Fraud Prevention brings even more security to the processing of purchases made with bank slips, bank transfers and major credit card brands.

To configure Mundipagg Fraud Prevention, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Mundipagg Fraud Prevention__ in the search bar and click on the name of the provider.
4. Fill in the __Merchant Key__ field with the key registered in Mundipagg. It consists of 36 characters, including letters, numbers and hyphens.
5. In __País__ ("Country"), choose the country of your store.
6. The __Register Url Post Notification em Mundipagg__ field gives an address for you to set up the receiving of notifications about payment statuses. In the `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification` link, replace `{sellerhost}` with your store's account name. Then, send the final URL to Mundipagg to complete the registration.
7. In __Instruções no boleto ao Caixa (Max 350 caracteres)__ ("Register in the ticket to cashier"), write the instructions that will be printed on the ticket. The text must not exceed 350 characters.
8. In the __Banco do boleto__ ("Bank of ticket") field, indicate the bank that will generate the ticket and then validate the reconciliation with Mundipagg.
9. Under __Tipo de Estorno__ ("Type of cash back"), choose between the automatic process or the manual request (in this case, Mundipagg will send you an e-mail notifying you of the pending cash back).
10. In __Dias de expiração do Boleto__ ("Ticket expiration days"), select the number of days for payment before the ticket expires.
11. In __Boleto Registrado__ ("Registered ticket"), inform whether the ticket is registered or not.
12. In __Captura de segurança antecipada__ ("Early security capture"), choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
13. In __Use Anti-fraud__, state whether you've hired the anti-fraud functionality from Mundipagg.
14. Click __Save__.

<div class "alert alert-info">
The steps **8**, **9**, **11** and **12** must be completed if you want to offer bank slip as a payment condition in your store.
</div>

## Setting up the payment condition
After following the steps indicated above, Mundipagg Fraud Prevention will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with Mundipagg Fraud Prevention). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
