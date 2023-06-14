---
title: 'Google Shopping Ads setup'
id: 4H0V9Z4NkQUiS4y2K0I8IU
status: CHANGED
createdAt: 2018-10-30T22:36:53.918Z
updatedAt: 2020-11-27T19:40:21.348Z
publishedAt: 2020-02-13T15:34:48.598Z
firstPublishedAt: 2018-10-30T22:53:54.339Z
contentType: trackArticle
productTeam: Channels
slug: google-shopping-ads-set-up
trackId: 47kz5PRQPK0IEaqGqiIuA
trackSlugEN: how-to-campaign-through-google-ads
---

After installing the app, we will perform the initial settings. Follow the step-by-step below:

1. Open the app from the Admin sidebar in the __"Installed Apps"__ section;
2. In the app's interface, click __"Start"__.


## Defining the store that will use the app

In this step, you must define which store will use the app and which URL Google ads should redirect. It's important to pay extra attention at this stage, since any incorrect setting will cause your ads to point to the wrong URL or integrate products from the wrong account.

1. In the `Store` option select the sub-account that should be used for the app;
2. In the `URL` option select the URL corresponding to the account's website chosen in the previous step.

<div class="alert alert-warning">
<strong>NOTE:</strong> Make sure the chosen URL is the correct one, as the options will show any URL that is registered on <a href="https://help.vtex.com/en/tutorial/configurando-dominios-no-license-manager?locale=en">your domains</a>. <strong>Usually, the URL is the one that has WWW</strong>.
</div>

## Setting up an account at the Google Merchant Center

Google Merchant Center (GMC) is Google's platform where your products will be available for campaigns. You need to synchronize the products that are in your VTEX catalog with GMC. Shopping campaigns will only be made for products that are active and available in GMC.

The app gives you two options regarding the GMC account. Choose the option that best fits your needs and log in.

- __Create new:__ The app will create a new GMC account for you. When logging in, use an email that will have permission to access the GMC you created.

When you select __"Create new"__, it is very important to immediately [access the GMC](https://www.google.com/retail/solutions/merchant-center/) and set up your company's logo and data. You must log in with the same email you have set for this account. This data will be used to display remarketing ads.

- __Link existing:__ The app will use your already existing GMC account. When logging in, you need to use the same email that you use for the GMC you want to link.

<div class="alert alert-warning">
<strong>NOTE:</strong> The URL set in GMC must be <strong>exactly the same</strong> as the one previously chosen. Also, remember to take the protocol into account (http or https).
</div>

When you select __"Link to an existing GMC"__, you will have to define whether product integration with Google will be done through VTEX or through an external synchronization that you already use.

- __Synchronize with VTEX:__ the app will create a product integration via API that will send your catalog to the GMC. We will update prices and inventories instantly as they undergo changes in VTEX.

- __External Synchronization:__ The responsibility for sending and updating the product feed to GMC will not be placed on the app. It will depend solely on the process you use (be it XML or API).

We recommend using VTEX synchronization to ensure better integration control from within the platform.

## Setting the trade policy

You need to define which trade policy will be used for your Google ads. This definition will cover four main aspects: product assortment, inventory, price and website. This entails that your product availability and prices on a particular sales channel will be entirely based on the trade policy you choose.

As for the website, the chosen trade policy should be the same as the one used on the website/store that you have determined in during the previous steps. This is because Google ads redirect users to your website, where they will complete the purchase. Therefore, if the trade policy used in the app differs from the one on your website, you risk having scenarios in which price or inventory differ, for example.

After selecting the trade policy, click __"Continue"__. You'll be taken to the app's Terms of Service.

After agreeing to the terms of service, the app will enter a loading page, which may take a while, as it is applying all the settings you have chosen and assembled on GMC. You must wait and not leave this screen.

## Setting up a Google Ads account

The next step is to set up a Google Ads account – Google platform which is responsible for managing ad campaigns. Upon integration, VTEX Shopping Ads presents the user with two options related to the Google Ads account.

These two options are:

### Link existing

In this case, VTEX Shopping Ads uses the already existing Google Ads user account. All campaign configurations, such as payment method for example, are therefore kept the same.

If this option is selected, you will need to login with the email that has administrator access to the Google Ads account. Then, you must select the account ID that will be linked to VTEX Shopping Ads. Lastly, click on __Continue__.

### Create new

This option will allow VTEX Shopping Ads to create a new Google Ads account. When selecting this option, you will receive a credit with which to create your campaigns. At the end of the month, the value of the credit that was invested in ads will be added to your VTEX monthly fee.

In both cases, after selecting whichever option best addresses your business needs, VTEX Shopping Ads will redirect you to a *loading* page to finalize the setup. 

<div class=”alert alert-danger”>
You should not leave the <em>loading</em> page until fully completing the setup. Otherwise, the integration will not be done.
</div>

*__Done!__ After VTEX Shopping Ads finishes loading, you can start using it to create a campaign. Check out the next step for more details!*
