---
title: 'Setting up payments with PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2025-08-18T13:11:08.593Z
publishedAt: 2025-08-18T13:11:08.593Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-pagseguro-v3
legacySlug: setting-up-pagseguro-v3
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider PagBankV3. Through this provider, your store can make sales via bank slip, PIX, Pagar com PagBank, debit and credit cards.

To configure PagBankV3, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **PagBankV3** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click on **Authorize via OAuth**. At this point, you will be redirected to the PagBank page, where you must access your account and authorize the connection of VTEX to your PagBank account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the PagBankV3 provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
9. In **Provider Fields**, configure the fields **Prazo para captura do pagamento**, **Gostaria de ativar o repasse do liable das transações para o seller com maior valor a receber?**, **Prazo de expiração do QR Code PIX**, **Ativar 3DS**, and **Nome da Loja - Descrição na fatura do comprador**  according to the provider's instructions.
10. Click **Save**.

> ⚠️ PagBank also offers the option of scheduled automatic capture for up to 5 days. If you wish to use it in your store, follow the steps indicated in this [documentation](/en/known-issues/scheduled-automatic-capture-does-not-appear--1cuvGbgUvd1ATeHEG6Il98).

To configure the payment methods to be processed by PagBankV3, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, PagBankV3 may take up to 10 minutes to appear at your store's checkout as a payment option.
