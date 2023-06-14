---
title: Configuring Affirm
id: 4VED6U3u1LYAJaIMCy5xlN
status: DRAFT
createdAt: 2021-06-07T19:54:24.353Z
updatedAt: 2022-12-23T19:52:41.014Z
publishedAt: 
firstPublishedAt: 2021-06-07T20:02:47.377Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configuring-affirm
legacySlug: configuring-affirm
subcategory: 
---

[Affirm](https://www.affirm.com/) is a payment solution that offers loan financing.

When customers make a purchase and choose Affirm as a payment method, they will undergo a credit analysis. Based on their score, the tool will release the amount to pay for that transaction. After that, the client will pay the amount owed (the amount borrowed plus the interest, as defined at the time of the purchase) directly to Affirm.

<div class="alert alert-warning">
You can install the Affirm app using VTEX IO, a low-code development platform that allows programmers to develop applications and new components for VTEX stores. Access the documentation <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install">Installing VTEX IO's CLI</a> and download the platform and its components before moving on to the next steps.
</div>

To configure Affirm, you have to:

1.  [Install the app](#installing-the-app)    
2.  [Configure the app](#configuring-the-app)    
3.  [Install and configure the gateway](#installing-and-configuring-the-gateway)    
4.  [Install the snippet](#installing-the-snippet)    
5.  [Configure a payment condition](#configuring-a-payment-condition)

## Installing the app

Once you have configured VTEX IO, check out the documentation [Installing Affirm Payment App](https://developers.vtex.com/vtex-rest-api/docs/installing-affirm-payment-app-1) and follow the steps to install the app on your store.

## Configuring the app

After installing the application, follow the steps below to fill in the configuration fields:

1.  Go to the VTEX **Admin**.    
2.  In the section **Account settings**, go to the **Apps** module and click on **My apps**.   
3.  In the **Affirm Payment** card, click on **Settings**.    
4.  Fill in the following fields with the information provided by Affirm.

    - **Enable Katapult:** Katapult is a feature that offers a lease-purchase transaction for customers who do not qualify for regular Affirm financing. If you want to use it, please contact Affirm support and request them to approve Katapult for your account before enabling it.

    - **Company Name:** If you have more than one site operating under a single Affirm account, you can replace the external company/brand name that will be displayed for customers. You can also leave it blank to use the default company name stored in your Affirm account.

    - **Public API Key for promotional components:** the public API provided by Affirm.

    - **Interval to use for the following three settings:** set the time unit (minutes, hours, days) that will be applied to the following settings:  

        - **Delay to automatic payment capture:** minutes/hours/days until payments authorized by Affirm are automatically captured.

        - **Delay to automatic payment capture after anti-fraud analysis:** minutes/hours/days until payments authorized by Affirm are automatically captured upon anti-fraud approval.

        - **Delay to cancel:** minutes/hours/days until payments are automatically canceled.  

     - **Katapult public token (optional):** public key provided by Affirm for your Katapult account, if you choose to use this feature.

     - **Katapult private token (optional):** private key provided by Affirm for your Katapult account, if you choose to use this feature.

<ul>
5.  Click on <b>Save</b>.
  </ul>

## Installing and configuring the gateway

Once the app is configured, follow the steps below to set up the gateway in your store:

1.  Go to the VTEX **Admin**.    
2.  Access the **Payments** module.    
3.  Click on **Settings**.    
4.  In **Gateway Affiliations**, click on the green “**+**” button.    
5.  Search for the **Affirm** option and select it.    
6.  In the **Affiliation name** field, enter **Affirm**.    
7.  In the **Application Key** and **Application Token** fields, enter the data provided by Affirm.
8. In **Payment capture**, select one of the following options:

   - **Use behavior recommended by the payment processor:** capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior.)

   - **Automatic capture immediately after payment authorization:** capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.

   -  **Automatic capture immediately after anti-fraud analysis:** capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in Automatic capture immediately after payment authorization.

   - **Deactivated: Not automatically captured:** capture takes place only when the order is invoiced. Please note that the payment will not be processed if invoicing is delayed and exceeds the capture period agreed with the payment provider.

<ul>
9. Click on <b>Save</b>.
  </ul>

## Installing the snippet

After installing Affirm, you need to enter its snippet on the product page and in your store's checkout. We recommend that a developer sets it up for you.

[Click here](https://docs.affirm.com/affirm-developers/docs/checkout-web) to access the snippet and share it with the developer or agency responsible for the service.

**![](https://lh5.googleusercontent.com/j4HQljuVCKh71Yd27JPeYVqiJQwhit8qEW7F_rKnYXQZvLsAgcM6e3oeaUPx7Um-4ClJtQKDfpe_UWxe_wzdKUDwu5AHV5rp-OdTuCcGrVjpVfT3T7OqraMvg_kkYX7Vxbskwc0D)**

## Configuring a payment condition

Once you have completed the steps above, Affirm will be ready to be used in your store.

If you want to associate it with a compatible payment condition, check out our article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
