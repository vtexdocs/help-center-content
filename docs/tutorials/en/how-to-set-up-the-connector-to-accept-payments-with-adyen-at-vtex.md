---
title: 'How to set up the connector to accept payments with Adyen at VTEX'
id: tutorials_2337
status: PUBLISHED
createdAt: 2017-04-27T21:55:10.101Z
updatedAt: 2023-03-24T14:56:13.138Z
publishedAt: 2023-03-24T14:56:13.138Z
firstPublishedAt: 2017-04-27T23:03:52.166Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-set-up-the-connector-to-accept-payments-with-adyen-at-vtex
legacySlug: how-to-configure-the-adyen-gateway-on-vtex
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">The configurations documented in this article are performed in an environment external to VTEX and, therefore, may be discontinued without prior notice.</div>

If Adyen is your chosen affiliate, follow the necessary configuration in the step-by-step below for a seamless communication between Adyen and VTEX. 

## Adyen configuration

This configuration to accept payments requires a few adjustments being done on both VTEX and Adyen's side. The setup instructions and necessary information related to a posterior setup in VTEX are found below.

<ui>1. Log in to Adyen's dashboard:

  - Adyen Test Environment: https://ca-test.adyen.com/ca/ca/login.shtml 
  - Adyen Live Environment: https://ca-live.adyen.com/ca/ca/login.shtml</ui>

<ui>2. Click on **Developers** in the side menu.</ui>

<ui>3. Click on **Webhooks**.</ui>

<ui>4. Click on the **+ Webhook** button at the top of the screen.</ui>

<ui>5. Click on the **Add** button next to **Standard Notification**.</ui>

<ui>6. Fill in the **URL** value with `https://{accountName}.vtexpayments.com.br/adyen/panel-notification`.

  - Remember that `{accountName}` must be replaced with your VTEX store's name.</ui>

<ui>7. Access **Additional Settings** and perform the required configurations:

  - The SSL version must be TLSv1.2
  - The "Accept expired", "Accept self-signed" and "Accept untrusted Root Certificates" must be left unchecked
  - Ensure that Alias is `signed.adyen.com`
  - The Active field must be selected
  - Service Version = 1
  - Method = JSON
  - Populate SOAP Action header must not be selected
  - Expand the "Additional Settings" boxes, then **only** select the following fields:
    - Add Acquirer Result
    - Add Raw Acquirer Result
    - Include Acquirer Reference
    - Include Card Bin</ui>

<ui>8. Click on **Save Configuration**.</ui>

Following this setup, we created the VTEX Payments endpoint connection with Adyen. Your store is now more secure.

Next, you'll just need to collect information from Adyen to register on VTEX. Still on the Adyen panel, proceed as follows:

1. Access **Developers** in the side menu.
2. Click on **API credentials**.
3. Click on the **Create new credential** button.
4. In the **User type** field, select the **Web Service** type user.
5. Remember to write down the username and password that appear in the Password field, since it can't be viewed again!
6. Click on the **Save** button, located in the page footer.
7. By following these steps, your user will be successfully set up. In the image below number 1 (highlighted in red) is the username and number 2 is the password that you will have to enter on VTEX’s environment.
![Adyen - Image 2](//images.ctfassets.net/alneenqid6w5/7jtKskh7uYiUuMnI6t7UqJ/ea01c037ad5c541a26fdef50b1a0d4fd/image2.png)
8. Send an email to Adyen support (suporte@adyen.com), requesting the permissions listed in the model below:

> Subject: Setting VTEX web-service user permissions for `{accountName}`
>
> Email Body: Adyen Support, I send this email to ask you to grant the necessary permissions to the user `username@Company.companyname` so that it can be used on the VTEX platform. Thank you in advance!

Only after confirmation from Adyen will you be ready to perform configurations on the VTEX platform.

### Additional anti-fraud analysis steps with manual order review 

If you intend Adyen's platform to manually revise the anti-fraud analysis of important orders, follow the steps below:

<ui>1. Access Adyen's panel.</ui>

<ui>2. Look for the **Risk** menu and select **Risk settings**.</ui>

<ui>3. In the **Case Management behavior** section, apply **Send notifications** to:

  - Accept
  - Reject</ui>

<ui>4. In "expire", select **Reject** in the **Notification** field.</ui>

<ui>5. The configuration should appear as in the image below. Don't forget to click on **Save configuration** to save the changes.</ui>

![Adyen - Image 1](//images.ctfassets.net/alneenqid6w5/1K5aqITpHU74XYQ5eO7wKc/a29d285086d15dd28a596ab344d72763/image1.png)

## VTEX Configuration

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the **Gateway Affiliations** tab.
3. Click on **Adyen**.
4. Fill out the form fields with the data obtained from Adyen and click on **Save**:

- **Username** - Adyen username (**Adyen's configuration** 5th step)
- **Password** - Adyen password (**Adyen's configuration** 5th step)
- **Account** - Adyen Merchant Account (which can be checked in the Adyen panel by clicking on _Accounts_ > _Merchant Accounts_)
- **Currency** - currency
- **"Boleto" issuing bank** - Bank that issues the "boleto" (Brazilian off-line payment method)
- **"Boleto" instructions** - instructions that will be applied to "boleto" (Brazilian off-line payment method)
- **Skin HPP Code** - should be left blank`*`
- **Language** - filled in with your checkout's language
- **HMAC HPP firm Key** - should be left blank`*`
- **Early safety capture** - early capture
- **Use antifraud** - option that allows the use of antifraud

`*` - These fields should only be used for HPP integrations, such as Multibanco, in Portugal. For further information, refer to [Adyen's documentation](https://docs.adyen.com/payments-fundamentals/payment-glossary#hosted-payment-pages-hpp).
