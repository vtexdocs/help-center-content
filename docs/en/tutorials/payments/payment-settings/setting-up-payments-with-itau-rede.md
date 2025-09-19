---
title: 'Setting up payments with Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-12-13T22:40:46.028Z
publishedAt: 2024-12-13T22:40:46.028Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
legacySlug: setting-up-payments-with-itau-rede
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Itaú Rede payment provider. With this provider, your store can make sales through credit and debit cards, such as, Mastercard, Visa, Hiper, Elo, Diners, Sorocred, American Express, Hipercard, JCB, Banescard, Cabal, Mais, Credz, and co-branded cards.

The following actions are required depending on the payment method you want to offer in your store:

- __Credit, debit or co-branded cards__

   1. [Obtain credentials in the Rede Portal](#obtain-credentials-in-the-rede-portal)
   2. [Setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex)
   3. [Setting up the card payment condition](#setting-up-the-card-payment-condition) 

- __PIX__

   1. [Obtain credentials in the Rede Portal](#obtain-credentials-in-the-rede-portal)
   2. [Setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex)
   3. [Enable PIX on Rede](#enable-pix-on-rede)
   4. [Setting up the PIX payment condition](#setting-up-the-pix-payment-condition)  

> ⚠️ Configurations made in an environment external to VTEX may be discontinued or modified without prior notice. Check your Itaú Rede account for updated information.

## Obtain credentials in the Rede Portal

To start the process of integrating your store into the Userede environment, send an email to ecommerce@userede.com.br requesting accreditation of Rede e-commerce solutions. The estimated turnaround time is up to 1 business day.

> ℹ️ Once accreditation is completed, you will receive by email your membership number (PV) and access instructions to the Rede Portal.

After receiving the access information, you or someone else with an administrator profile on your Rede account (__master user__) must generate the integration key according to the steps below:

<blockquote><ui>1. Access the [Rede Portal](#https://meu.userede.com.br/login) with your Itaú Rede account information.</ui>

<blockquote><ui>2. Select the account in which you want to transact payments at VTEX and click **Aplicar**. Save the account number, as it must be used in the **App key** field in the [Setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex).</ui> 

![Itaú Rede_1_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_1.png)

<blockquote><ui>3. After the screen updates to the desired account, in the **para vender** menu, select the **e-commerce** option.

![Itaú Rede_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_2.PNG)

<blockquote><ui>4. On the **e-commerce** page, click on the **chave de integração** card.

![Itaú Rede_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_3.png)

<blockquote><ui>5. After reading the "chave de integração" information, click **li, estou ciente**.

![Itaú Rede_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_4.png)

<blockquote><ui>6. Click the **gerar nova chave** button.

![Itaú Rede_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_5.png)

<blockquote><ui>7. Check the information described in the **gerar nova chave de integração** window and click **gerar nova chave**.

![Itaú Rede_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_6.png)

<blockquote><ui>8. After creating the new key, click **copiar** and preserve the information in a safe location. This key must be used in the **Token de aplicação** field in the section [Setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex).

<blockquote><ui>> ⚠️ If you lose access to the integration key information, you will need to repeat the previous steps to generate a new key. After obtaining the new key for the same membership number (PV), it will also be necessary to update the information in all integrations associated with the PV. Integrations that are not updated with the new key may have an impact on operations.</ui></blockquote>

## Setting up Itaú Rede on VTEX

To configure Itaú Rede, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ItauRede__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ field with your membership number (PV) and the __App token__ field with the integration key. This option is currently not available for this provider.
5. If you wish to modify the identification name to be displayed for the Itaú Rede provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following option:
<br>
<ul>
<br>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>     
   		<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

<blockquote><ui>8. In **merchantName**, enter the name of your store.</ui>

<blockquote><ui>9. In **SoftDescriptor**, describe the identification message to be displayed on your customer's card statement. You must use the same information registered in Soft Descriptor on the Rede Portal.</ui>

<blockquote>> ℹ️ If you have not yet enabled **Soft Descriptor**, access the Rede Portal to enable it or if you prefer not to use this functionality, just do not fill in this field.  

<blockquote><ui>10. In the **delayToAutoSettle** field, enter the period for the order to be settled. Remember that the value of this field must be in accordance with the rule determined in the **Automatic settlement** field.</ui>

<blockquote><ui>11. Click `Save`.</ui></blockquote>

## Setting up the card payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on the name of the desired credit card brand.
4. Activate the condition in the __Status__ field.
5. In __Process with provider__, select the __ItauRede__ option.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
7. If you want, you can also [configure special payment conditions](/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

After following the indicated steps, Itaú Rede may take up to 10 minutes to appear at your store's checkout as a payment option.

## Payments with PIX

Through the Rede and VTEX integration, you can also offer PIX in your store, allowing you to receive payments via QR Code PIX, carry out total or partial refund operations, and receive transaction status notifications.

Before carrying out the steps below, make sure that you have already [obtained credentials in the Rede Portal](#obtain-credentials-in-the-rede-portal) and [setting up Itaú Rede on VTEX](#setting-up-itau-rede-on-vtex).

### Enable PIX on Rede

> ℹ️ Only users with an administrator profile (**master user**) can enable Pix on Rede.

To enable the Pix key, access the Rede Portal and follow the steps:

<blockquote><ui>1. Access the [Rede Portal](#https://meu.userede.com.br/login) with your Itaú Rede account information.</ui>

<blockquote><ui>2. Select the account in which you want to transact payments at VTEX and click **Aplicar**.</ui> 

![Itaú Rede_1_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_7.png)

<blockquote><ui>3. After the screen updates to the desired account, in the **para vender** menu, select the **pix** option.

![Itaú Rede_7_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_8.png)

<blockquote><ui>4. Click **Habilitar Pix na Rede**.</ui>  

![Itaú Rede_8_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_9.png)

<blockquote><ui>5. Select the Itaú account where you want to receive your sales with Pix and click**Escolher conta**.</ui></blockquote>    

![Itaú Rede_9_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-itau-rede_10.png)

### Setting up the PIX payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. In __Instant payment__, click __Pix__.
4. Activate the condition in the __Status__ field.
5. In __Process with provider__, select the __ItauRede__ option.
6. Click `Save`.

After following the steps indicated, the PIX option with the provider Itaú Rede may take up to 10 minutes to appear in your store's Checkout as a payment option.   

