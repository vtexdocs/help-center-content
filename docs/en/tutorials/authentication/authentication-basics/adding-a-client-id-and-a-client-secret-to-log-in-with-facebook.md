---
title: 'Adding Client ID and Client Secret for Facebook Login'
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-10-20T21:29:11.632Z
publishedAt: 2023-10-20T21:29:11.632Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-facebook
legacySlug: registering-a-client-id-and-a-client-secret-for-login-with-facebook
locale: en
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

To enable login via Facebook, in your VTEX Admin, go to **Account Settings > Authentication** and complete the **Client ID** and **Client Secret** fields, as described in the [Configuring login with Facebook and Google](/en/docs/tutorials/configuring-login-with-facebook-and-google) article.

![Facebook OAuth EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_1.PNG)

To get these credentials, follow the instructions below:

1. [Create an app](#1-creating-an-app)
2. [Configure Facebook Login in the app](#2-configuring-facebook-login-in-the-app)
3. [Configure the app's basic settings](#3-configuring-the-apps-basic-settings)

## 1. Creating an app

To begin, you need to create a Facebook application by following the steps below:

1. Access the [Meta for Developers](https://developers.facebook.com/) website.
2. Create a Facebook developer account.
3. Once logged in, click **My Apps** in the top bar.
4. Click `Create App`.
5. Click **Allow people to log in with their Facebook** account from the options shown below.

   ![2-login-fb-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_2.png)

6. Click `Next`.
7. Enter the app name and the email address of the person in charge of the app in the fields illustrated below.

   ![3-login-fb-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_3.png)

8. Click `Create app`.

## 2. Configuring Facebook Login in the app

The next step is to set up the Facebook Login product in the app you created. To do this, follow the instructions below:

1.	Click **Products** in the side menu or the Meta for Developers **Dashboard**, as in the image below.

   ![4-login-fb-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_4.png)

2. Click `Configure` and select `Settings`.

   ![5-login-fb-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_5.png)

3. Set the options as in the image below:

   ![Configuração URI OAuth Facebook EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_6.png)

   Insert the following URLs in **Valid OAuth Redirect URIs**, replacing `{{HOST_URL}}` with your store's base URL and e `{{accountName}}` with your VTEX account name as described in the store's Admin:

      * `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
      * `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
      * `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

4. At the bottom of the page, click the `Save Changes` button.

## 3. Configuring the app's basic settings

Finally, you must complete specific information about the app to finish the registration process. In this step, you will obtain the **Client ID** and **Client Secret**. These will be used when configuring the Facebook login settings in the VTEX Admin. Please follow the steps below:

1.	In the Meta for Developers side menu, go to **App settings** and click **Basic:**

   ![7-login-fb-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook_7.png)

2. Copy the value from the **App ID** field. You must enter this value in the **Client ID** field when [configuring Facebook Login in the VTEX Admin](/en/docs/tutorials/configuring-login-with-facebook-and-google).
3. Under **App Secret**, click the **Show** button, and then copy the value from the field. You must enter this value in the **Client Secret** field when [configuring Facebook Login in the VTEX Admin](/en/docs/tutorials/configuring-login-with-facebook-and-google).
4. Add the link to your store's terms of service in the **Terms of Service URL** field.
5. Under **App Icon (1024 x 1024)**, add an icon of exactly 1024x1024 pixels and a transparent background for your app.
6. **Choose a Category**. For stores, we recommend using **Shopping**.
7. Below in this form, complete the **Data Protection Officer Contact Information** with the details of the company running the store.
8. At the bottom of the page, click `Save Changes`.

Once you have completed all these steps, you can use the **Client ID** and **Client Secret** you obtained to configure Facebook Login in your store, as detailed in the [Configuring login with Facebook and Google](/en/docs/tutorials/configuring-login-with-facebook-and-google) article.
