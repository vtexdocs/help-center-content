---
title: 'Enabling 3DS2 for Redsýs V2 integration'
id: 1ixji2XORg9p0UoW8gBtUG
status: ARCHIVED
createdAt: 2021-03-08T14:53:08.780Z
updatedAt: 2024-03-18T19:54:47.084Z
publishedAt: 
firstPublishedAt: 2021-03-08T16:29:32.443Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: enabling-3ds2-for-redsys-v2-integration
locale: en
legacySlug: enabling-3ds2-for-redsys-v2-integration
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

The 3DS2 feature is now available for payments made with credit cards and processed by the [Redsýs](https://help.vtex.com/en/tutorial/configurar-gateway-redsys--7xRnMyzZS0kQoIG2ISagY8) payment gateway.

3DS2 is a security solution that requires cardholder authentication in the issuing bank, ensuring greater security for your online transactions. 

For more details, please see our article [3DS2 authentication flow: accept online payments more securely](https://help.vtex.com/en/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl).

>❗ Before enabling the 3DS2 feature, make sure Redsýs is already configured in your store and that the established business partnership enables 3DS2 for your account.

In this tutorial, you will learn how to add the 3DS2 authentication to the Redsýs V2 integration via the VTEX Admin. 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the __Gateway Affiliations__ tab, and click on the green tab with the “__+__” sign.
3. Click on the __Redsýs V2__ affiliation card.
4. Scroll down the screen and select __Yes__ for the __3DS Enabled__ option.
5. Click on __Save__.

![RedsysV2 EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/enabling-3ds2-for-redsys-v2-integration_1.png)

It’s done! Now the solution is enabled for Redsýs’s transactions with credit cards.

