---
title: 'Configuring Customer Credit'
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2024-02-08T18:03:14.738Z
publishedAt: 2024-02-08T18:03:14.738Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slug: setting-up-the-app
locale: en
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
---

After installing the Customer Credit app, you must perform the following settings:

- [First access](#first-access)
- [App](#app-settings) 
- [Payment conditions](#payment-conditions)

## First access

To perform the initial Customer Credit settings, follow the steps below:

1. In the VTEX Admin, go to __Apps > Customer Credit > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Pending__ section, one or more of the settings listed below may be displayed:
<br>
<ul>
<br>
    	<li><b>Enable transactional emails on Message Center</b>: click in <b>Enable</b> to install the transactional email templates related to Customer Credit in <a href="https://help.vtex.com/pt/tutorial/conhecendo-o-message-center--tutorials_84">Message Center</a>.</li>
    	<li><b>Setting checkout payment conditions</b>: click in <b>Setting</b> to allow the definition of the store's deadline and installment rules.</li>
  	<li><b>Affiliation not authenticated</b>: click in <b>Authenticate</b> to be redirected to the configuration screen where you must fill in the information <b>Application Key</b> and <b>Application Token</b>. This action will allow payments made through Customer Credit to be processed in your store. Find out more at <a href="https://developers.vtex.com/docs/guides/authentication">Authentication</a>.</li>
</ul>

![CC Configuration 1 EN](https://images.ctfassets.net/alneenqid6w5/6cDl5QeEatvpLW3kYxV7Yd/25a43afef349f6443a55820be9f17616/CC_Configuration_1_EN.JPG)

## App settings

Then, still on the same VTEX Admin screen(__Apps > Customer Credit > Settings__), you should check the following settings options:

- [Tolerance](#tolerance)
- [Automatic account creation](#automatic-account-creation) 
- [My Credits page](#my-credits-page)
- [Payment instructions](#payment-instructions)
- [Identifying Information](#identifying-information)

### Tolerance

Activating this option allows a purchase to be completed even if its value exceeds the customer's available credit limit. When creating an account, it is possible to register an excess credit percentage (tolerance) for each customer.

For example, for an account created with a credit limit of $1,000.00 and a tolerance of 10%, the customer will be able to place an order with a maximum value of $1,100.00 using Customer Credit as a payment method. If the customer wishes to use the credit to pay for an order worth $1,250.00, the system will not allow the purchase to be completed.

>⚠️ Tolerance values are configured in decimal numbers, with 0 representing 0% and 1 representing 100%. Example: to use a tolerance of 5%, the value to be configured is 0.05.

![CC_Configuration_2_EN](https://images.ctfassets.net/alneenqid6w5/3kjEQ2OblMKqwumNWSFnSt/42de816c9685f31074c0637dcbd6c5f1/CC_Configuration_2_EN.JPG)

### Automatic account creation

This option allows any store customer to use Customer Credit as a payment method, even if you have not previously created an account for them in the Customer Credit app. When activating this functionality, you must also define the initial credit limit that can be used for orders placed by customers without a Customer Credit account.

![CC_Configurações_3_EN](https://images.ctfassets.net/alneenqid6w5/1TX1ArtNwm8toa84UqNCHZ/07a144ef285f845819fb1e12442b3f56/CC_Configuration_3_EN.JPG)

### My Credits page

By installing the __My Credits__ page, you will allow customers to view and manage information about the credits and titles available in their account.

The customer can access this page on your store's website at __My account > My Credits__.

![CC_Configuration_4_EN](https://images.ctfassets.net/alneenqid6w5/59SuH9h84mmgaHmcDB2Bbl/92daf3c995157e03887f1975d2cccbc8/CC_Configuration_4_EN.JPG)

### Payment Instructions 

This configuration allows you to insert instructions related to payment in the invoices issued by Customer Credit. To edit the message to be displayed in the invoice, enter the information in the test box and click `Update`.

>⚠️ The message registered in this configuration will be replicated on all invoices issued for all Customer Credit accounts. It is not possible to configure a unique message for each specific customer or invoice.

![CC_Configuration_5_EN](https://images.ctfassets.net/alneenqid6w5/6UkZi827KKQqH8Yk1mmPKj/cdf9331ac0d8e46d6537c8f265bc621b/CC_Configuration_5_EN.JPG)

### Identifying Information

This option allows you to select which store identification information should be displayed at the top of issued invoices.

![CC_Configuration_6_EN](https://images.ctfassets.net/alneenqid6w5/6ADAtBnrZQS6sCzkwPSqFt/94bce774843c23fa582f065689423087/CC_Configuration_6_EN.JPG)

![CC_Configuration_8_EN](https://images.ctfassets.net/alneenqid6w5/54WcXTGpAGppAyGxxoa8gx/7078eccb9c08d690fb0f453456f2dcaf/CC_Configuration_8_EN.JPG)

## Payment conditions

Once the Customer Credit settings are completed, it is necessary to indicate which term and installment options will be available to be displayed to customers on the Checkout screen.

To create payment conditions for Customer Credit invoices, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. On the __Payment Conditions__ tab, click the `+` button.
3. Select the option __Customer Credit__.
4. Fill in the field __Condition name__ with a name of your choice for identification.
5. Enable the condition in the __Status__ field.
6. In __Configure Due Date and Installment Rules__, indicate the number of installments, due period (in days) and the simple interest rate to be applied to each installment. To create more than one payment condition, click `Add new condition`.

![CC_Configuration_9_EN](https://images.ctfassets.net/alneenqid6w5/3P3JMnSiAPXNprYvgaNFNh/77399f912ebbb03ac5611682eca77c06/CC_Configuration_9_EN.JPG)

<blockquote><ui>7. If you wish, you can also configure <a href="https://help.vtex.com/en/tutorial/special-conditions--tutorials_456">payment special conditions</a>.</ui>

<blockquote><ui>8. Click <b>Save</b>.</ui>

>⚠️ It is not possible to set an interest rate for a payment condition created with just a single installment.
