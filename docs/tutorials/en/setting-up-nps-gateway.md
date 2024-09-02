---
title: 'Setting up Ingenico ePayments (NPS) gateway'
id: 4DtjieyNQIQeI2O2kymEgq
status: DRAFT
createdAt: 2018-04-18T13:22:00.721Z
updatedAt: 2024-03-18T19:00:20.612Z
publishedAt: 
firstPublishedAt: 2018-04-18T15:09:45.694Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-nps-gateway
locale: en
legacySlug: setting-up-nps-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

Ingenico ePayments (NPS) is a [gateway](/en/tutorial/what-is-a-payment-gateway) with a strong presence in Latin America which allows your store to accept various payment conditions.

To set up NPS, follow the steps below:

## Setting up Ingenico ePayments (NPS) gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __NPS__ connector.
4. Fill in the __Id de la Tienda__ field ("Store ID") with the data provided by NPS.
5. In __Pais__ ("Country"), choose the country where your store operates.
6. In the __Moneda de transaccion__ field ("Currency of transaction"), define which currency will be used in your store transactions.
7. In __Llave secreta__ ("Secret key"), enter your password registered in NPS.
8. In the __Método__ field ("Method"), choose the type of integration that will be used.
9. In __Tipo de Comercio__ ("Type of Commerce"), indicate in which category your business fits.
10. In __Dias para captura de seguridad después de Autorizado__ ("Days for security capture after authorized"), enter how long you want the security capture to take place after authorization.
11. In __Change Margin__, set the percentage margin in which it will be allowed to change the payment amount.
12. In __Early security capture__, choose how long you want the capture to take after the transaction approval and the anti-fraud analysis. You can also disable this function.
13. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, Ingenico ePayments (NPS) will be configured in your store. So while you're entering a payment condition, it will be available in the __Process with affiliation__ field (provided the payment method is NPS-compliant). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
