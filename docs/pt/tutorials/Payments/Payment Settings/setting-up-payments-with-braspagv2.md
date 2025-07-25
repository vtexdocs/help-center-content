---
title: 'Setting up payments with BraspagV2'
id: 6gaw7zu9wlItgjfDVndRPn
status: ARCHIVED
createdAt: 2022-01-20T19:41:22.154Z
updatedAt: 2023-09-19T14:27:03.358Z
publishedAt: 
firstPublishedAt: 2022-01-21T16:38:10.049Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-braspagv2
locale: en
legacySlug: setting-up-payments-with-braspagv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Braspagv2 gateway. With this connector, your store can make sales with credit, debit, and voucher cards. To configure BraspagV2, follow the steps below:

## Setting up BraspagV2 gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the __+__ button.
3. Click on the __BraspagV2__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by BraspagV2.
5. In __Provider__, select the acquirer to be used with the BraspagV2 connector.
6. In __IsSplit__, choose whether the split option will be available.
7. In __UseMpi__, choose whether transactions will be authenticated. If you select “Yes”, go to Step 10. If you select “No”, go to Step 11.
8. Fill in the __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__, and __MpiEstablishmentCode__ fields with you Mpi access data.
9. In __Enable payout split and send payment recipients?__, select whether split payments will be available for the marketplace and sellers.
10. Click on __Save__.

## Setting up the payment condition

To configure the means of payment to be processed by the Braspagv2 gateway at VTEX, access our [tutorial](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
