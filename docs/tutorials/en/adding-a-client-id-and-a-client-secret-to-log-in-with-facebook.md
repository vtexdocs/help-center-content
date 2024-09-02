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
slug: adding-a-client-id-and-a-client-secret-to-log-in-with-facebook
locale: en
legacySlug: registering-a-client-id-and-a-client-secret-for-login-with-facebook
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

To enable login via Facebook, in your VTEX Admin, go to **Account Settings > Authentication** and complete the **Client ID** and **Client Secret** fields, as described in the [Configuring login with Facebook and Google](https://help.vtex.com/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513) article.

![Facebook OAuth EN](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/7daac156505a588b95fc0e90fbc08e2d/1-login-fb-en.PNG)

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

   ![2-login-fb-en](https://images.ctfassets.net/alneenqid6w5/3zv1li5neUPsSK8VhPaRy0/18115fc2fab3b2efa194681f5f46d1cc/2-login-fb-en.png)

6. Click `Next`.
7. Enter the app name and the email address of the person in charge of the app in the fields illustrated below.

   ![3-login-fb-en](https://images.ctfassets.net/alneenqid6w5/1Yg8Du8HKxU7rW15ZsL6vD/6a66ed67c5576d710573f0ab9642b9eb/3-login-fb-en.png)

8. Click `Create app`.

## 2. Configuring Facebook Login in the app

The next step is to set up the Facebook Login product in the app you created. To do this, follow the instructions below:

1.	Click **Products** in the side menu or the Meta for Developers **Dashboard**, as in the image below.

   ![4-login-fb-en](https://images.ctfassets.net/alneenqid6w5/2wNKd6gswgFQAghpNdvEVq/ee51c9db1b9c5d6c8f9298a901b74d5c/4-login-fb-en.png)

2. Click `Configure` and select `Settings`.

   ![5-login-fb-en](https://images.ctfassets.net/alneenqid6w5/vMQDtOfYgSZfo7EOYuNel/0c913b1d202594789f0986427c404a7e/5-login-fb-en.png)

3. Set the options as in the image below:

   ![Configuração URI OAuth Facebook EN](https://images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/ef5ad727b07d41fdd907cef762788dd6/configuracoes_Oauth_EN.png)

   Insert the following URLs in **Valid OAuth Redirect URIs**, replacing `{{HOST_URL}}`  with your store's base URL and e `{{accountName}}` with your VTEX account name as described in the store's Admin:

      * `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
      * `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
      * `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

4. At the bottom of the page, click the `Save Changes` button.

## 3. Configuring the app's basic settings

Finally, you must complete specific information about the app to finish the registration process. In this step, you will obtain the **Client ID** and **Client Secret**. These will be used when configuring the Facebook login settings in the VTEX Admin. Please follow the steps below:

1.	In the Meta for Developers side menu, go to **App settings** and click **Basic:**

   ![7-login-fb-en](https://images.ctfassets.net/alneenqid6w5/4rhVhY9V6N117s3XwZ59No/a572a3a7fea37cbec1cded5f5bd95ca4/7-login-fb-en.png)

2. Copy the value from the **App ID** field. You must enter this value in the **Client ID** field when[ configuring Facebook Login in the VTEX Admin](https://help.vtex.com/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513).
3. Under **App Secret**, click the **Show** button, and then copy the value from the field. You must enter this value in the **Client Secret** field when [configuring Facebook Login in the VTEX Admin](https://help.vtex.com/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513).
4. Add the link to your store's terms of service in the **Terms of Service URL** field.
5. Under **App Icon (1024 x 1024)**, add an icon of exactly 1024x1024 pixels and a transparent background for your app.
6. **Choose a Category**. For stores, we recommend using **Shopping**.
7. Below in this form, complete the **Data Protection Officer Contact Information** with the details of the company running the store.
8. At the bottom of the page, click `Save Changes`.

Once you have completed all these steps, you can use the **Client ID** and **Client Secret** you obtained to configure Facebook Login in your store, as detailed in the [Configuring login with Facebook and Google](https://help.vtex.com/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513) article.
