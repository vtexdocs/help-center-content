---
title: 'Setting up payments with StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-05-30T14:58:59.497Z
publishedAt: 2025-05-30T14:58:59.497Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
legacySlug: setting-up-payments-with-stripev2
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you can integrate with the payment provider StripeV2. Through this provider, your store can offer several payment methods, such as Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, Apple Pay, OXXO, Discover, Affirm, Klarna, ZIP, BLIK, Ideal, SPEI, Multibanco, Afterpay, Bancontact, EPS, FPX, Giropay, and P24.

## Operation modes

The StripeV2 provider can process payment transactions in VTEX stores in two different ways:

- __VTEX Checkout Experience__: Can be used for credit cards, debit cards, and payment methods developed with the [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). This option is recommended if you want to configure other payment gateways for different card brands or perform transactions using the native VTEX Checkout.

- __VTEX with Stripe Payment Element Experience__: Payment app based on the [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). This option is recommended if you plan to use Stripe exclusively to process all card brands or if you want access to [Stripe Link](https://stripe.com/payments/link), a solution that offers one-click access to multiple payment methods.

<div class="alert alert-info">
  The <b>VTEX with Stripe Payment Element Experience</b> uses the <a href="https://docs.stripe.com/payments/elements">Stripe Payment Elements</a> Checkout, providing access to current and future payment methods supported by Stripe. In this option, payment methods must be configured directly in the <a href="https://dashboard.stripe.com/settings/payment_methods">Stripe Dashboard</a>.
</div>

<div class="alert alert-info">
PFor information on the complete payment method list operated by each of the StripeV2 operating modes, please contact the <a href="stripe-support@vinneren.com.mx">Vinneren</a> or <a href="https://support.stripe.com/contact/login">Stripe</a> support teams.
</div>

After determining which mode you want to use for your store, follow the instructions for one of the options below:

- [Configuring VTEX Checkout Experience](#configuring-vtex-checkout-experience)
- [Configuring VTEX with Stripe Payment Element Experience](#configuring-vtex-with-stripe-payment-element-experience) 

<div class="alert alert-warning">
Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Stripe account for updates.
</div>

## Configuring VTEX Checkout Experience

To use __VTEX Checkout Experience__ in your store, you need to:

- [Install Stripe apps](#installing-stripe-apps)
- [Configure StripeV2 on VTEX](#configuring-stripev2-on-vtex)
- [Configure payment conditions](#configuring-payment-conditions)

### Instalar apps da Stripe

To install the Stripe apps in your store, follow the steps below:

<blockquote><ui>1. Access the dashboard of your <a href="https://dashboard.stripe.com/login">Stripe account</a> and install the <a href="https://marketplace.stripe.com/apps/VTEX-payments-plugin-v2">VTEX Payments Plugin V2</a> app to obtain an OAuth 2.0-type key.</ui>

<blockquote><ui>2. Uninstall any previous versions of Stripe plugins from your store.</ui>

<blockquote><div class="alert alert-warning">
Before installing the Payment Provider Framework app, check with the <a href="stripe-support@vinneren.com.mx">Vinneren</a> or <a href="https://support.stripe.com/contact/login">Stripe</a> support teams for the latest version of the app.
</div></blockquote>

<blockquote><ui>3. In the <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, run the following commands to install the Stripe apps:</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. The information {{current-app-version}} must be replaced with the current version of the app, for example: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>

### Configuring StripeV2 on VTEX

To configure the StripeV2 integration on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the provider page, click the `New Provider` button
3. Type __StripeV2__ in the search bar and click the provider's name.
4. In __Provider fields__, under __Mode__, select __Float__.
5. In __Test Mode__, select the __True__ or __False__ option.
6. Click `Save`.

### Configuring payment conditions

To configure a payment condition for StripeV2 on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click the new payment method you want to use.
4. On the configuration page, activate the condition by clicking __Status__.
5. In __Process with provider__, select the __StripeV2__ option.
6. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
7. If necessary, you can also [configure special payment conditions](https://help.vtex.com/pt/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

If you need more information on how to install the __VTEX Checkout Experience__, see the [Stripe documentation available on Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configuring VTEX with Stripe Payment Element Experience

To use VTEX with __Stripe Payment Element Experience__ in your store, you need to:

- [Install Stripe apps](#installing-stripe-apps)
- [Configure StripeV2 on VTEX](#configuring-stripev2-on-vtex)
- [Configure payment conditions](#configuring-payment-conditions)
- [Configure webhooks on your Stripe account](#configuring-webhooks-on-your-stripe-account)

### Installing Stripe apps

To install the Stripe apps in your store, follow the steps below:

<blockquote><ui>1. Access the <a href="https://dashboard.stripe.com/login">dashboard of your Stripe account</a> and install the <a href="https://marketplace.stripe.com/apps/vtex-elements-checkout">VTEX with Stripe Payment Element Experience</a> to obtain a RAK key (restricted API key).</ui>

<blockquote><ui>2. Uninstall any previous versions of Stripe plugins.</ui>

<blockquote><div class="alert alert-warning">
Before installing the Payment Provider Framework app, check with the <a href="stripe-support@vinneren.com.mx">Vinneren</a> or <a href="https://support.stripe.com/contact/login">Stripe</a> support teams for the latest version of the app.
</div></blockquote>

<blockquote><ui>3. In the <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, run the following commands to install the Stripe apps:</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. The information {{current-app-version}} must be replaced with the current version of the app, for example: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>  

### Configuring StripeV2 on VTEX

To configure the StripeV2 integration on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the provider page, click the `New Provider` button.
3. Type __StripeV2__ in the search bar and click the provider's name.
4. In __App key__, enter the publishable key you obtained from the RAK app (publishable key).
5. In __App token__, enter the secret key you obtained in the RAK app (limited API key).  
6. In __Provider fields__, under __Mode__, select __Embedded__.
7. In __Test Mode__, select the __True__ or __False__ option.
8. Click `Save`.

### Configuring payment conditions

To configure a payment condition for StripeV2 on VTEX, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click the new payment method you want to use.
4. On the configuration page, activate the condition by clicking __Status__.
5. In __Process with provider__, select the __StripeV2__ option.
6. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
7. If necessary, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

If you need more information on how to install __VTEX with Stripe Payment Element Experience__, see the [Stripe documentation available on Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configuring webhooks on your Stripe account

To configure a webhook in your Stripe account, follow the steps below:

1. Access the [dashboard of your Stripe account](https://dashboard.stripe.com/).
2. Click the __Developers__ button.
3. Click the __Webhooks__ tab.
4. Click the __Add a connection point__ button.
5. In the __Connection point URL__ field, enter the URL of your VTEX store endpoint in the following format:  `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Replace {{account}} with the name of your VTEX account.
6. Click __+ Select events__.
7. Click the categories and select the following events:
<blockquote> - <b>payment_intent.succeeded</b></blockquote>
<blockquote> - <b>payment_method.attached</b></blockquote>

8. Click __Add events__.
9. Click the __Add Connection Point__ button.  

## Configuring payment with Google Pay on StripeV2 (optional)

The StripeV2 provider allows you to process payments with Google Pay. To configure Google Pay in your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click the __Google Pay__ option.
4. On the configuration page, activate the condition by clicking __Status__.
5. In __Process with provider__, select the __StripeV2__ option.
6. Click `Save`.

After completing these steps, Google Pay will display at the store's checkout as one of the available payment methods.

## Configuring payment with Apple Pay on StripeV2 (optional)

The StripeV2 provider allows you to process payments with Apple Pay. To configure Apple Pay in your store, follow the steps below:

1. Access the [dashboard of your Stripe account](https://dashboard.stripe.com/) in the payment settings section.
2. In __Settings__, click __Payment Methods__.
3. Click __Apple Pay > Set Up__.
4. Click __Add to New Domain__ button.
5. Enter the public domain of your store's website.
6. Click __Add__.
7. Perform the actions described in [Stripe documentation](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) and then click __Download the domain association file__.
8. After getting the file, save the information and access the following URL  `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Replace {{account}} with the name of your VTEX account.
9. Enter the previously saved information in the field __Enter your Apple App Key__.
10. Click `Save`.
11. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
12. In the __Payment Conditions__ tab, click the `+` button.
13. Click __Apple Pay__.
14. On the configuration page, activate the condition by clicking __Status__.
15. In __Process with provider__, select the __StripeV2__ option.
16. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
17. Indicate whether you want to process payments in full or in installments.
18. If necessary, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
19. Click `Save`.

After completing these steps, Apple Pay will display at the store's checkout as one of the available payment methods.

## Configuring installment terms without interest (MSI) (optional)

<div class="alert alert-warning">
  The interest-free installment payment condition (<b>MSI - Meses Sin Intereses</b>) is only available on Stripe for accounts based in Mexico.
</div>  

__MSI__ can be configured for both __VTEX Checkout experience__ and __VTEX with Stripe Payment Element Experience__. To configure it, follow the steps below based on the operating mode used in your store:

### Configuring MSI in VTEX Checkout Experience mode

1. Create a [Stripe](https://stripe.com/) account based in Mexico configured with the MXN currency.
2. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
3. Click one of the available payment methods that process payments with __MSI__ (Visa, Amex, and Mastercard cards).
4. On the payment method page, [configure the MSI conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#installments-without-interest) as desired.
5. In your Stripe dashboard, [configure the MSI conditions](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) using the same information as in the VTEX configuration (Step 4).

<div class="alert alert-warning">
  If the information entered in steps 4 and 5 differs, the MSI condition may not work correctly.
</div>  

### Configuring MSI with Stripe Payment Element Experience mode

1. Create a [Stripe](https://stripe.com/) account based in Mexico configured with the MXN currency.
2. [Configure the MSI conditions](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=en-US) in the dashboard of your Stripe account.
3. Contact your Stripe executive or the [Stripe support](https://stripe.com/mx/contact) team to request activation of this payment condition for your store.

