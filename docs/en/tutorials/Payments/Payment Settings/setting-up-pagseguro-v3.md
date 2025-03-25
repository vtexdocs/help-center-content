---
title: 'Setting up payments with PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2024-03-14T18:59:12.645Z
publishedAt: 2024-03-14T18:59:12.645Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-pagseguro-v3
locale: en
legacySlug: setting-up-pagseguro-v3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider PagBankV3. Through this provider, your store can make sales via bank slip, PIX, debit and credit cards.

To configure PagBankV3, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagBankV3__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, click on __Authorize via OAuth__. At this point, you will be redirected to the PagBank page, where you must access your account and authorize the connection of VTEX to your PagBank account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the PagBankV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. Under __Payment Control__, in the __Automatic Settlement__ field, select one of the following options:
<br>
<ul>
<br>
    	<li><b>Use behavior recommended by the payment processor</b>: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li><b>Automatic capture immediately after payment authorization</b>: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li><b>Automatic capture immediately after anti-fraud analysis</b>: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li><b>Disabled</b>: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. In __Provider Fields__, in the __Prazo para captura do pagamento__ field, select the desired period to capture the payment.
9. Click __Save__.

To configure the payment methods to be processed by PagBankV3, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagBankV3 may take up to 10 minutes to appear at your store's checkout as a payment option.
