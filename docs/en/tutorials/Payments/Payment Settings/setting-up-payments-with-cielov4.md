---
title: 'Setting up payments with CieloV4'
id: 7M2CqJxprwpDtbgLZHBoiI
status: ARCHIVED
createdAt: 2022-07-20T14:25:28.188Z
updatedAt: 2023-09-19T14:27:43.425Z
publishedAt: 
firstPublishedAt: 2022-07-20T17:07:25.186Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cielov4
locale: en
legacySlug: setting-up-payments-with-cielov4
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the CieloV4 gateway. With this connector, your store can make sales with credit, debit, and private labels cards. 

To configure the CieloV4 affiliation, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the __+__ button.
3. Click on the __CieloV4__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Cielo.
5. In __Provider__, select the acquirer to be used with the CieloV4 connector.
6. In __IsSplit__, choose whether the split option will be available.
7. In __UseMpi__, choose whether transactions will be authenticated. If you select “Yes”, go to Step 10. If you select “No”, go to Step 11.
8. Fill in the __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__, and __MpiEstablishmentCode__ fields with you Mpi access data.
9. In __Enable payout split and send payment recipients?__, select whether split payments will be available for the marketplace and sellers.
10. Click on __Save__.

## Setting up the payment condition

To set up payment by credit or debit cards, go to [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento#). 

To set up payment by private label cards, go to [Setting up Private Label payments](https://help.vtex.com/en/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456#).

After following the steps indicated, the CieloV4 connector may take up to 10 minutes to appear at your store checkout as a payment option.
