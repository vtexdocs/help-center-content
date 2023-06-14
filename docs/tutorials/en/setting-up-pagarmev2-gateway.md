---
title: Setting up PagarMeV2 gateway
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2023-03-26T21:04:07.182Z
publishedAt: 2023-03-26T21:04:07.182Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-pagarmev2-gateway
legacySlug: setting-up-pagarmev2-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PagarMeV2 is the latest version of the [Pagar.me gateway](https://help.vtex.com/pt/tutorial/o-que-e-um-gateway-de-pagamentos) affiliation. Follow the steps below to configure it:

## Setting up PagarMeV2 gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In __Gateway Affiliations__, click on the green “__+__” button.
3. Search for __PagarMeV2__ and select its card.
4. Fill in the fields with the following information:<br>
<ul>
<li><b>Application Key</b> e <b>Application Token</b>: enter the information provided by Pagar.me.</li>
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
