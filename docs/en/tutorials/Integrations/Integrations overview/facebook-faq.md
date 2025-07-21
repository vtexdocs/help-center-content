---
title: 'Facebook: FAQ'
id: 3t2RoCcVfXgmGrQ70PmPxr
status: PUBLISHED
createdAt: 2021-06-16T19:36:32.098Z
updatedAt: 2021-06-16T19:43:11.993Z
publishedAt: 2021-06-16T19:43:11.993Z
firstPublishedAt: 2021-06-16T19:43:11.993Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: facebook-faq
locale: en
legacySlug: facebook-faq
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

This guide is intended to provide solutions to problems that may arise with Facebook Integration. Please use the table of contents below for navigation.

## [Ads and Products](#ads-and-products)
1.  [How to troubleshoot SKU issues with bridge errors. Error message: "Unsupported post request. Object with ID “XXXXX” does not exist.”](#how-to-solve-sku-problems-with-bridge-errors-error-message-unsupported-post-request-object-with-id-xxxxx-does-not-exist)
2.  [How to troubleshoot SKU issues with bridge errors. Error message: "The SKU does not have a sales price on VTEX. This is a required value”.](#how-to-solve-sku-problems-with-bridge-errors-error-message-the-sku-does-not-have-a-sales-price-on-vtex-this-is-a-required-value)

## [Settings](#settings)
1.  [How to redo the authentication process ?](#how-to-redo-the-authentication-process)
2.  [How to configure login with Facebook and Google?](#how-to-configure-login-with-facebook-and-google)

## Ads and Products
### How to solve SKU problems with bridge errors. Error message: "Unsupported post request. Object with ID “XXXXX” does not exist.”

It is necessary to confirm with the client if the information in the Facebook setup card, such as affiliate email or Business Manager Id, is valid.

### How to solve SKU problems with bridge errors. Error message: "The SKU does not have a sales price on VTEX. This is a required value”.

The first step in this scenario is to investigate whether the SKU in fact does not have a price added for Facebook’s trade policy.

If the SKU does have a price, check its status, as the error may also be related to its active/inactive status. The best way to do this is by performing a checkout simulation:

![face faq01](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Integrations%20overview/facebook-faq_1.JPG)

In this simulation, it is important to analyze the following fields:

1. Message
2. Price
3. Inventory

If everything is correct, open a ticket.

## Settings
### How to redo the authentication process

This process is recommended for authentication issues concerning the Facebook integration, or for permission errors when sending or updating the catalog.

#### Deleting VTEX integration app on Facebook 
1. Deleting VTEX integration app on Facebook 
2. In the upper right corner of the screen, **click the button** <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Integrations%20overview/facebook-faq_2.JPG" />
3.  Select **Settings and Privacy**, then click on **Settings**.
4.  Click on **Business integrations**.
5.  Select VTEX Integration and click **Remove**.

#### Deleting an existing VTEX catalog
1. Go to [Facebook Business Manager](https://business.facebook.com/).
2. Click on **Settings**.
3. Click on **Business Settings**.
4. Select the VTEX catalog you would like to delete and click on the trash can icon <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Integrations%20overview/facebook-faq_3.JPG" />
5. Click **Confirm**.

#### Deleting Facebook integration on VTEX
1. Log in to the Admin and click on **Integrations**.
2. Click **Settings**.
3. In the Facebook integration, click on the gear icon <i class="fas fa-cog"></i>
4. Choose the option **Edit config**.
5. Under Integration, select **Deactivate**.
6. Click **Save configuration**.

#### Reconfiguring the Facebook integration on VTEX
1. In the Admin menu, click on **Integrations**.
2. Click **Settings**.
3. In the Facebook card, click on **Integrate**.
4. Fill in the fields in the modal window (see [field details](/en/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc/747gwmk5oMkyb6FtwLo17B))
5. Click **Save configuration**.

When authenticating with Facebook, after reconfiguring the integration, it is important that the permissions requested by the APP are granted without exceptions.

### How to configure login with Facebook and Google

It is not necessary to create an account or log in to VTEX to make a purchase. However, if the customer wants to change the data informed during their first purchase, they need to confirm the email ownership.

The platform natively offers login options with email and password, and also login with an access code sent to the client's email. We also offer optional native integrations with Google and Facebook, which need to be set up.

#### Registering with the providers

Before setting up our Google and Facebook login integrations, you need to create OAuth 2.0 credentials (the protocol used for integration) in these services. To do this, follow the instructions in the articles below:

- [Facebook](/en/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/en/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

#### Setting up the integration in your store

After completing the Facebook and/or Google registration, you need to set up in your store the option to log in through these providers. In both cases, you need to have a `Client ID` and a `Client Secret` generated.

1. To access the VTEX ID module, in your store admin click on **Account Settings > Authentication**.
2. Select the provider and click **Edit**.
3. Fill out the form with the `Client ID` and `Client Secret`.
4. Enable the provider by clicking the toggle.

#### Validate the configuration

With everything set up, you can now test your configuration. We recommend that you test the configuration with the final URL through which users will access your store. When trying to log in, the options referring to the active providers must be available and the process should be carried out without problems.
