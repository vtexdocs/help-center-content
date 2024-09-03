---
title: 'Setting up PayU gateway'
id: 36zWOAFHmwIAoWIEU2Y08q
status: ARCHIVED
createdAt: 2018-03-27T15:25:04.654Z
updatedAt: 2024-03-18T20:27:28.378Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:13:40.899Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payu-gateway
locale: en
legacySlug: setting-up-payu-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

PayU is a [gateway](/en/tutorial/what-is-a-payment-gateway) that offers a number of solutions to make transactions in your store easier and safer. With [PCI certification](/en/faq/what-is-the-pci-ssc), this solution is exclusive for Argentina, Brazil, Chile, Colombia, Mexico, Panama and Peru.

To set PayU up, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PayU__ in the search bar and click on the name of the provider.
4. Fill in the registration fields with the data provided by PayU (fields _API Login_, _API Key_, _Account Id_ and _Merchant Id_).
5. In the __Authorization method__ field, choose how you want to authorize transactions.
6. In __Currency__ , select the currency that will be used in the transactions.
7. In __Language__ , set the language of preference.
8. In the __Country of payment__ field , choose your store's country.
9. In __Expiration of ticket in days__ , set the time your customer will have to pay the ticket.
10. The __Use Referenced Bank__ field  is exclusively for Colombian stores.
11. Under __Return Type__ , choose between the automatic process or the email notification (in this case, an email will be sent, advising that you should request the outstanding reversal on the PayU control panel).
12. The __PartnerId__ field is already populated with the VTEX ID in PayU.
13. On __Use protected card__ , select _Yes_ if your store has hired JustClick (PayU's one-click purchase service).
14. In __First retry for query__ , set the time interval (in minutes) for the new query in PayU.
15. In __Financing by operator__ , choose between not applying or leaving the calculation to the financial institution.
16. In the __Registered ticket__ field , enter whether or not the ticket has been registered.
17. Under __Early Security Capture__ , choose how long you want the capture to take (after approval of the transaction and antifraud analysis). You can also disable this function.
18. In the __Use anti-fraud__ field , indicate whether you want to use anti-fraud.
19. Click __Save__.

## Setting up the payment condition
After following the steps above, PayU will be configured in your store. Thus, when you enter a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is compatible with PayU). In order to learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
