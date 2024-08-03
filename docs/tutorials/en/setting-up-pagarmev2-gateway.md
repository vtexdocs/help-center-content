---
title: 'Setting up PagarMeV2 gateway'
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2024-01-23T19:19:58.174Z
publishedAt: 2024-01-23T19:19:58.174Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-pagarmev2-gateway
locale: en
legacySlug: setting-up-pagarmev2-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to process payments with the PagarMe provider through V2 and V3 integrations.

<div class="alert alert-warning">
If you want to configure the V3 version of Pagarme in your store, go to <a href="https://help.vtex.com/en/tutorial/setting-up-payments-with-pagarmev3--5PMavdamrVijwIrHas9ndE">Setting up payments with PagarMeV3</a>.
</div>

To configure PagarMeV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagarMeV2__ in the search bar and click on the name of the provider.
4. Fill in the fields with the following information:<br>
<ul>
<li><b>App Key</b> e <b>App Token</b>: enter the information provided by Pagar.me.</li>
<li><b>Payment capture:</b>: select one of the following options:<br><br>
    <ul>
    	<li><b>Use behavior recommended by the payment processor</b>: acapture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior.).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic capture immediately after anti-fraud analysis</b>: capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in the behavior *Automatic capture immediately after payment authorization*.</li>
   		<li><b>Deactivated: Not automatically captured</b>: capture is only performed after the order has been invoiced. Please note that the payment will not be processed if invoicing is delayed and exceeds the capture period agreed with the payment provider.</li>
    </ul>
  </li>
</ul>

5. __Business name__: Enter the name that will identify your store on the customer's invoice.
6. __Enable split and send recipients?__: If you want to use the Split Payment solution, select __Yes__ and fill in the requested information according to what has been negotiated with Pagar.me.<br><br>
<ul>
  <li><b>Responsibility for payment fees</b>: Choose from Marketplace, Markeplace + Sellers or Sellers.</li>
  <li><b>Responsibility for chargebacks</b>: Choose from Marketplace, Markeplace + Sellers or Sellers.</li>
</ul>
7. Click on __Save__.

## Setting up the payment condition

After completing the previous steps, __PagarMeV2__ is ready to be used in your store.
If you want to associate it with a payment condition that is compatible with PagarMeV2, check out our article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
