---
title: 'Setting up payments with OderoPay'
createdAt: 2026-10-27T00:00:00.000Z
updatedAt: 2026-10-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-oderopay
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the OderoPay payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, Visa Electron, Mastercard Debit, and Maestro.

To configure OderoPay, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **OderoPay** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your OderoPay account.
5. If you wish to modify the identification name to be displayed for the OderoPay provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement**, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
9. In **Provider Fields**, fill in the **pspIntegrationMode**, **paymentsUrl**, **oderoBaseUrl**, **oderoMerchantId**, **oderoMerchantSecret**, **oderoApiToken**, **oderoSubmerchantExtId**, **oderoSubmerchantName**, **oderoDescription**, **oderoSaveCard**, **oderoRecurring**, **checkSignatureOnCallback**, **pspAuthHeaderName**, **pspAuthHeaderValue**, **pspStaticHeadersJson**, **pspAuthorizationHeadersJson**, **pspExtraPayloadJson**, **pspPayloadTemplateJson**, **pspAuthorizationPayloadTemplateJson**, **pspHttpMethod**, **pspSendBody**, **pspRequireSecureProxy**, **useSecureProxyTokensURL**, **pspSecureProxyProtocol**, **pspDefaultAcquirer**, **pspAcquirerFields**, **pspApprovedStatuses**, **pspDeniedStatuses**, **pspUnknownStatusBehavior**, **pspRedirectBehavior**, **pspStatusFields**, **pspTidFields**, **pspAuthorizationIdFields**, **pspNsuFields**, **pspRequestIdFields**, **pspCodeFields**, **pspMessageFields**, **pspRedirectUrlFields**, **pspPaymentUrlFields**, **pspDelayToCancelFields**, **pspDelayToAutoSettleFields**, **pspDelayToAutoSettleAfterAntifraudFields**, **pspValueFields**, **pspDefaultDelayToCancel**, **pspHttpErrorCodePrefix**, **pspAuthorizationDeniedMessage**, **pspIncludeReturnUrl**, **pspIncludeMiniCart**, **pspIncludeRecipients**, **pspIncludeFullVtexPayload**, **pspRequestContentType**, **pspAcceptHeader**, **pspUserAgent**, **pspIdempotencyHeaderName**, **pspTimeoutMs**, **pspRetryDelaysMs**, **pspAuthorizationFailureCacheTtlMs**, **pspCancellationUrl**, **pspCancellationHeadersJson**, **pspCancellationHttpMethod**, **pspCancellationSendBody**, **pspCancellationExtraPayloadJson**, **pspCancellationPayloadTemplateJson**, **pspRefundUrl**, **pspRefundHeadersJson**, **pspRefundHttpMethod**, **pspRefundSendBody**, **pspRefundExtraPayloadJson**, **pspRefundPayloadTemplateJson**, **pspSettlementUrl**, **pspSettlementHeadersJson**, **pspSettlementHttpMethod**, **pspSettlementSendBody**, **pspSettlementExtraPayloadJson**, and **pspSettlementPayloadTemplateJson** fields according to the provider's instructions.
10. Click `Save`.

To configure the payment methods to be processed by OderoPay, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, OderoPay may take up to 10 minutes to appear at your store's checkout as a payment option.
