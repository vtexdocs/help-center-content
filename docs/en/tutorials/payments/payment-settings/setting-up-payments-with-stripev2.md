---
title: 'Setting up payments with StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-09-19T19:45:07.908Z
publishedAt: 2025-09-19T19:45:07.908Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
legacySlug: setting-up-payments-with-stripev2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can integrate with the payment provider StripeV2. Through this provider, your store can offer several payment methods, such as Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, Apple Pay, OXXO, Discover, Affirm, Klarna, ZIP, BLIK, Ideal, SPEI, Multibanco, Afterpay, Bancontact, EPS, FPX, Giropay, and P24.

For more information about the VTEX integration with Stripe, you can also access the [Vinneren documentation](https://sites.google.com/vinneren.com.mx/documentacion-publica/documentacion-publica).

## Operation modes

The StripeV2 provider can process payment transactions in VTEX stores in two different ways:

- **VTEX Native Checkout Experience**: Can be used for credit cards, debit cards, and payment methods developed with the [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). This option is recommended if you want to configure other payment gateways for different card brands or perform transactions using the native VTEX Checkout.

- **VTEX with Stripe Payment Element Experience**: Payment application based on the [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). This option is recommended if you plan to use Stripe exclusively to process all card brands or if you want access to [Stripe Link](https://stripe.com/payments/link), a solution that offers one-click access to multiple payment methods.

> ℹ️ The **VTEX with Stripe Payment Element Experience** uses the [Stripe Payment Elements Checkout](https://docs.stripe.com/payments/elements), providing access to current and future payment methods supported by Stripe. In this option, payment methods must be configured directly in the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).

> ℹ️ For information on the complete payment method list operated by each of the StripeV2's operating modes, please contact the [Vinneren](stripe-support@vinneren.com.mx) or [Stripe](https://support.stripe.com/contact/login) support teams.

After determining which mode you want to use for your store, follow the instructions for one of the options below:

- [Configuring VTEX Native Checkout Experience](#configuring-vtex-native-checkout-experience)
- [Configuring VTEX with Stripe Payment Element Experience](#configuring-vtex-with-stripe-payment-element-experience)

> ⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Stripe account for the latest information.

## Configuring VTEX Native Checkout Experience

> ⚠️ The Stripe team needs to enable RawPan payments in your account. Please contact your [Stripe advisor](https://support.stripe.com/?locale=en-US). If this option is not enabled in your account, you will not be able to make successful transactions.

Prerequisites:
- VTEX user with administrator permissions
- Active Stripe account

To use __VTEX Native Checkout Experience__ in your store, you need to:

- [Install Stripe apps](#install-stripe-apps)
- [Configure StripeV2 on VTEX](#configuring-stripev2-on-vtex)
- [Configure payment conditions](#configuring-payment-conditions)

### Install Stripe apps

To install the Stripe apps in your store, follow the steps below:

1. Install the [VTEX Native Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-native-checkout). During setup, make sure to enter your VTEX account name using only lowercase letters. For example, if your account name is "MyStore", enter it as "mystore".
2. Go to [Stripe Dashboard](https://dashboard.stripe.com/login?redirect=%2Fapikeys), copy and save the Publishable and Secret keys. It is important that you copy and save the keys for the mode (test or live) in which you installed the VTEX Native Checkout App on Stripe.

> ⚠️ Before installing the Payment Provider Framework app, check with the [Vinneren](stripe-support@vinneren.com.mx) or [Stripe](https://support.stripe.com/contact/login) support teams for the latest version of the app.

3. In the [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the following commands to install the Stripe apps:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configuring StripeV2 on VTEX

To configure the StripeV2 integration on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the provider page, click the `New Provider` button´.
3. Type __StripeV2__ in the search bar and click the provider's name.
4. In __App key__, enter the publishable key saved in the previous steps.
5. In __App token__, enter the secret key saved in the previous steps.
6. In __Basic Information__, in the __Name__ option, enter __StripeV2NativeCheckout__ to quickly identify the integration.
7. In __Provider fields__, in the __Mode__ option, select __Float__.
8. In __Test Mode__, select __False__ if the mode is __Live__ or __True__ if the mode is __Test__.
9. Click `Save`.

### Configuring anti-fraud script

To configure the anti-fraud script for StripeV2 on VTEX, follow the steps below:

1. Copy the script available on "[Integrate script into your VTEX store](https://sites.google.com/vinneren.com.mx/documentacion-publica/native-checkout/english)" section.
2. In the VTEX Admin, go to __Store Settings > Storefront > Checkout > Code__.
3. Click __New__ button and give it a descriptive name.
4. Paste the content of the script you copied previously.
5. Replace the "pk_test" information with your Stripe public key copied in the previous steps.
6. Click `Save`.

### Configuring payment conditions

To configure a payment condition for StripeV2 on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click the new payment method you want to use.
4. On the configuration page, activate the condition by clicking __Status__.
5. In __Process with provider__, select the __StripeV2NativeCheckout__ option.
6. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
7. If necessary, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
8. Click `Save`.

If you need more information on how to install the __VTEX Native Checkout Experience__, see the [Stripe documentation available on Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configuring VTEX with Stripe Payment Element Experience

Prerequisites:
- VTEX user with administrator permissions
- Active Stripe account

To use __VTEX with Stripe Payment Element Experience__ in your store, you need to:

- [Install Stripe apps](#install-stripe-apps-element-experience)
- [Configure StripeV2 on VTEX](#configuring-stripev2-on-vtex-element-experience)
- [Configure payment conditions](#configuring-payment-conditions-element-experience)
- [Configure webhooks on your Stripe account](#configuring-webhooks-on-your-stripe-account-element-experience)

### Install Stripe apps (Element Experience)

To install Stripe apps in your store, follow the steps below:

1. Install the [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) to obtain required Stripe keys.
2. Once the installation is complete, the Publishable Key (pk) and Restricted Key (rk) will be displayed. Copy and save them, as they will be used later.

> ⚠️ Before installing the Payment Provider Framework app, check with the [Vinneren](stripe-support@vinneren.com.mx) or [Stripe](https://support.stripe.com/contact/login) support teams for the latest version of the app.

3. In the [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the following commands to install the Stripe apps:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configuring StripeV2 on VTEX (Element Experience)

To configure the StripeV2 integration on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the provider page, click the `New Provider` button.
3. Type __StripeV2__ in the search bar and click the provider's name.
4. In __App key__, enter the publishable key that you obtained from the __VTEX Elements Checkout (Stripe App)__.
5. In __App token__, enter the RAK key you obtained from the __VTEX Elements Checkout (Stripe App)__(restricted API key).
6. In __Basic Information__, in the __Name__ option, enter __StripeV2Elements__ to quickly identify the integration. 
7. In __Provider fields__, in the __Mode__ option, select __Embedded__.
8. In __Test Mode__, select __False__ if the mode is __Live__ or __True__ if the mode is __Test__.
9. Click `Save`.
10. Add Stripe keys in the Provider App settings, as follows:
a. Go to **Applications > My applications > Stripe Payment Provider**.
b. Click **Settings**.
c. In **Publishable Key**, enter your key starting with **pk_**.
d. In **Secret Key**, enter your key starting with **rk_**.
e. Click **Save**.

### Configuring payment conditions (Element Experience)

To configure a payment condition for StripeV2 on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click the new payment method you want to use.
4. On the configuration page, activate the condition by clicking __Status__.
5. In __Process with provider__, select the __StripeV2Elements__ option.
6. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
7. If necessary, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
8. Click `Save`.

If you need more information on how to install __VTEX with Stripe Payment Element Experience__, see the [Stripe documentation available on Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configuring webhooks on your Stripe account (Element Experience)

To configure a webhook in your Stripe account, follow the steps below:

1. Access the [dashboard of your Stripe account](https://dashboard.stripe.com/).
2. Click the __Developers__ button.
3. Click the __Webhooks__ tab.
4. Click the __Add a connection point__ button.
5. In the __Connection point URL__ field, enter the URL of your VTEX store endpoint in the following format:  `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Replace {{account}} with the name of your VTEX account name.
6. Click __+ Select events__.
7. Click the categories and select the following events:
- **payment_intent.payment_failed**
- **payment_method.canceled**
- **payment_intent.succeeded**
- **payment_method.attached**

8. Click __Add events__.
9. Click the __Add Connection Point__ button.

## Configuring payment with Google Pay on StripeV2 (optional)

The StripeV2 provider allows you to process payments with Google Pay. To configure Google Pay in your store, follow the steps below:

1. If you have already completed the steps to install [VTEX Elements](#configuring-vtex-with-stripe-payment-element-experience), please proceed to Step 13.
2. Install the [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) to obtain required Stripe keys.
3. Once the installation is complete, the Publishable Key (pk) and Restricted Key (rk) will be displayed. Copy and save them, as they will be used later.
4. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
5. On the provider page, click the `New Provider` button.
6. Type __StripeV2__ in the search bar and click the provider's name.
7. In __Basic Information__, in the __Name__ option, enter __StripeV2Elements__ to quickly identify the integration.
8. In __App key__, enter the publishable key that you obtained from the __VTEX Elements Checkout (Stripe App)__.
9. In __App token__, enter the RAK key you obtained from the __VTEX Elements Checkout (Stripe App)__(restricted API key).
10. In __Provider fields__, in the __Mode__ option, select __Embedded__.
11. In __Test Mode__, select __False__ if the mode is __Live__ or __True__ if the mode is __Test__.
12. Click `Save`.
13. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
14. In the __Payment Conditions__ tab, click the `+` button.
15. Click the __Google Pay__ option.
16. On the configuration page, activate the condition by clicking __Status__.
17. In __Process with provider__, select the __StripeV2Elements__ option.
18. Click `Save`.

After completing these steps, Google Pay will display at the store's checkout as one of the available payment methods.

## Configuring payment with Apple Pay on StripeV2 (optional)

The StripeV2 provider allows you to process payments with Apple Pay. To configure Apple Pay in your store, follow the steps below:

1. If you have already completed the steps to install [VTEX Elements](#configuring-vtex-with-stripe-payment-element-experience), please proceed to Step 13.
2. Install the [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) to obtain required Stripe keys.
3. Once the installation is complete, the Publishable Key (pk) and Restricted Key (rk) will be displayed. Copy and save them, as they will be used later.
4. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
5. On the provider page, click the `New Provider` button.
6. Type __StripeV2__ in the search bar and click the provider's name.
7. In __Basic Information__, in the __Name__ option, enter __StripeV2Elements__ to quickly identify the integration.
8. In __App key__, enter the publishable key that you obtained from the __VTEX Elements Checkout (Stripe App)__.
9. In __App token__, enter the RAK key you obtained from the __VTEX Elements Checkout (Stripe App)__(restricted API key).
10. In __Provider fields__, in the __Mode__ option, select __Embedded__.
11. In __Test Mode__, select __False__ if the mode is __Live__ or __True__ if the mode is __Test__.
12. Click `Save`.
13. Access the [dashboard of your Stripe account](https://dashboard.stripe.com/) in the payment settings section.
14. In __Settings__, click __Payment Methods__.
15. Click __Apple Pay > Set Up__.
16. Click __Add to New Domain__ button.
17. Enter the public domain of your store's website.
18. Click __Add__.
19. Perform the actions described in [Stripe documentation](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) and then click __Download the domain association file__.
20. After getting the file, save the information and access the following URL  `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Replace {{account}} with the name of your VTEX account.
21. Enter the previously saved information in the field __Enter your Apple App Key__.
22. Click `Save`.
23. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
24. In the __Payment Conditions__ tab, click the `+` button.
25. Click __Apple Pay__.
26. On the configuration page, activate the condition by clicking __Status__.
27. In __Process with provider__, select the __StripeV2__ option.
28. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
29. Indicate whether you want to process payments in full or in installments.
30. If necessary, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
31. Click `Save`.

After completing these steps, Apple Pay will display at the store's checkout as one of the available payment methods.

## Configuring installment terms without interest (MSI) (optional)

> ⚠️ The interest-free installment payment condition (**MSI - Meses Sin Intereses**) is only available on Stripe for accounts based in Mexico.  

__MSI__ can be configured for both __VTEX Native Checkout experience__ and __VTEX with Stripe Payment Element Experience__. To configure it, follow the steps below based on the operating mode used in your store:

### Configuring MSI in VTEX Native Checkout Experience

1. Create a [Stripe](https://stripe.com/) account based in Mexico configured with the MXN currency.
2. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
3. Click one of the available payment methods that process payments with __MSI__ (Visa, Amex, and Mastercard cards).
4. On the payment method page, [configure the MSI conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#installments-without-interest) as desired.
5. In your Stripe dashboard, [configure the MSI conditions](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) using the same information as in the VTEX configuration (Step 4).

> ⚠️ If the information entered in steps 4 and 5 differs, the MSI condition may not work correctly.  

### Configuring MSI in VTEX with Stripe Payment Element Experience mode

1. Create a [Stripe](https://stripe.com/) account based in Mexico configured with the MXN currency.
2. [Configure the MSI conditions](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=en-US) in the dashboard of your Stripe account.
3. Contact your Stripe executive or the [Stripe support](https://stripe.com/mx/contact) team to request activation of this payment condition for your store.

