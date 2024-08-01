---
title: 'Setting up payments with PagosWEB'
id: 2qKIeEPUBKqEGo2OyikyQw
status: DRAFT
createdAt: 2018-04-05T15:48:50.151Z
updatedAt: 2024-03-18T19:12:24.950Z
publishedAt: 
firstPublishedAt: 2018-04-05T22:01:49.141Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-pagosweb
locale: en
legacySlug: setting-up-payments-with-pagosweb
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

You can set up PagosWEB to receive payments in your store. With it, your customer chooses PaymentsWEB __payment method__ to make the purchase.

To enable payments with PagosWEB, follow the steps below:

## Setting up PagosWEB gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway affiliations__ tab, click the __+__ button.
3. Click the __PagosWeb__ connector.
4. Fill in the registration fields with the data provided by PagosWEB (fields _Id Cliente_, _Numero Factura_, _Llave 3_, _Palabra Clave_ and _Nombre del Usuario_).
5. In the __Moneda__ field ("Currency"), choose the currency that will be used in your store transactions.
6. Under __Tipo de Compra OCA__, define whether purchases made with OCA brand cards will be made through credit or points (called Metros).
7. In __Días a esperar el pago__ ("Days to wait for payment"), fill in the same number of days defined in the PagosWEB registration.
8. After filling in all the fields, you must set up 3 URLs in your PagosWEB account. They are: __Aprobada__ ("Approved") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/aprobada`, __Rechazada__ ("Rejected") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/rechazada` and __Cancelada__ ("Canceled") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/cancelada`.
9. Click __Save__.

## Setting up PagosWEB payment condition
1. Within Payments __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select __PagosWeb__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. The __Process with affiliation__ field will already be filled by the _PagosWeb_ option.
6. If there is an anti-fraud system set up in your store, you can activate it for this payment condition by checking the box __Use Anti-Fraud__.
7. Choose whether you want payments to be made in cash or installments.
8. If you wish, you can also opt for a [special payment condition](/en/tutorial/special-conditions).
9. Click __Save__.

After following the steps indicated above, PagosWEB will appear at your store checkout as a payment option for your customers to use.
