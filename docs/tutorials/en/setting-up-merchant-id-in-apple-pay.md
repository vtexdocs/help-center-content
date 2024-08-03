---
title: 'Setting up Merchant ID in Apple Pay'
id: 3pPmMlmexyKwWU6QckGiIC
status: DRAFT
createdAt: 2018-05-21T14:35:20.296Z
updatedAt: 2022-01-27T19:54:36.660Z
publishedAt: 
firstPublishedAt: 2018-05-23T19:25:49.127Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-merchant-id-in-apple-pay
locale: en
legacySlug: setting-up-merchant-id-in-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
This process will be simpler as soon as Apple validates integrations with VTEX platform. This article will then be updated to fit the new scenario.
</div>

In order for your store to begin receiving payments with __Apple Pay__, you will need to set __Merchant ID__ in your Apple developer account (`developer.apple.com`). 

## Creating the Merchant ID

First of all, you need to create the Merchant ID itself - your store's ID on Apple's system.

This account acts as your login to the Apple Pay setup with VTEX. More specifically, this Merchant ID will be entered in the gateway affiliation which will, in turn, process payments.

It's therefore important to choose an ID that's easy to remember. We recommend something similar to `merchant.yourStoreName.vtexpayments.com.br.apple`.

In addition, your Merchant ID will not be the same as that of other stores. Apple's system ensures that each ID is unique.

Let's now turn our attention to the step-by-step process below:

1. Access your Apple __developer account__ at `https://developer.apple.com/account/#/overview/`;
2. Select the __Certificates, IDs & Profiles__ option.
![AP1](https://images.ctfassets.net/alneenqid6w5/6LeAGbVL1w66i4QeoUikfC/912141350c1d591a9bb057d791e2f8d5/AP1.PNG)
3. Select __Identifiers__;
 ![AP2](https://images.ctfassets.net/alneenqid6w5/23SE1jYWfCN6ZXTgQFYc1o/19fbe5f704aee658dd5a77f8e2f3b161/AP2.PNG)
4. Next to Identifiers, click on the __blue + button__;
![AP3](https://images.ctfassets.net/alneenqid6w5/4JGlrzDtI0BL3MDChr5gfn/2fb71b0a4dfc498baff3acb0546e5476/AP3.PNG)
5. Select the __Merchant IDs__ option;
6. Click on the blue __Continue__ button; ![AP4](https://images.ctfassets.net/alneenqid6w5/6OyfJq6Eeped4gNItoqD93/19edd37b12bb72d24d55058f5aa265bf/AP4.PNG)
7. Fill on the __description__ field;
8. Fill in the __identifier__ field;
9. Click on __continue__; ![AP5](https://images.ctfassets.net/alneenqid6w5/7cPYdu8tLJsQWH7FFemIxb/8d710da870e18a5db33e46f29d484882/AP5.PNG) 

You will have created your __Merchant ID__.

## Creating the certificate to process payments

Now you've created your Merchant ID, you'll need a certificate to activate it.

This certificate is created by VTEX. Therefore, the retailer needs to [open a ticket](https://help.vtex.com/en/tutorial/open-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM) with support for the team responsible for integrations to send you the file.

Thereafter, the retailer can submit the file to Apple Pay's system.

Follow the instructions below to proceed to this step:

1. On the left-hand side, open __Certificates__ from the menu; ![AP6](https://images.ctfassets.net/alneenqid6w5/6F1QMQhaeedUplo0gYGaHd/bbc1c07ad0f8541f33a797b09224543a/AP6.PNG)
2. Type in your newly created __Merchant ID__ in the search bar;
3. Select the desired __Merchant ID__; ![AP7](https://images.ctfassets.net/alneenqid6w5/6McxWOZA6ZGUtsoxsRoVKb/d0f133d66267606fa998be562b57570b/AP7.PNG)
4. Under __Apple Pay Payment Processing Certificate__, click the __Create Certificate__ button. 
![AP8](https://images.ctfassets.net/alneenqid6w5/3Rp2Dt49HkCwzFHjScLjV/a83399b2270e638f3d480e4f885cc8d6/AP8.PNG)
5. Ensure that the question *"Will payments associated with this Merchant ID be processed exclusively in China?"* is ticked with the __default option (No)__.
![AP9](https://images.ctfassets.net/alneenqid6w5/Sp9juhAMuWRA1vHgk6pZ9/8eda99f583b842bb94a52d729fd4066a/AP9.PNG)

You'll then be redirected to a screen with instructions on creating the Certificate Signing Request (CSR). 

This is the time to open a ticket with the certificate request. The VTEX team will send you a file entitled `{{merchantID}}.Csr` and with it saved on your computer, you must click on __Continue__.

After this step, you will be redirected once again, this time to the upload screen. 

With the {{merchantID}}.csr. that you've received, complete the following:

1. Click on __Choose File__;
2.  Select the desired __CSR file__;
3.  Click on __Continue__; 
![AP10](https://images.ctfassets.net/alneenqid6w5/3hECpP7iFDlIO6PatZCOEY/d38bfb6be71f867c1f3182616a6fcb4b/AP10.PNG)
4. Click on __Download__;
![AP11](https://images.ctfassets.net/alneenqid6w5/5LZH1cD0JOe4dHN1noRbUE/2de89d38d2fde3f870c4274d32092c83/AP11.PNG)
5. Click on __Done__.

## Adding domains to Merchant ID

The next step is to link the domains used by your store to the Merchant ID that you've just created.

Firstly, you need to validate each of the desired URLs. Once this step is correctly completed, Apple's own system will create a `.txt` file and point to which domain this document should be linked to.

Lastly, you need to import this file to VTEX's system through Postman - an [API](https://help.vtex.com/en/tutorial/introduction-to-vtex-apis--3SjAqQ0BeUqu2ge8AiIkmW "APIs") management tool.

<div class="alert alert-warning">
<strong>Important:</strong>nThis validation can only be done one domain at a time. This means that if your store uses 10 different domains, the process will have to be repeated 10 times.
</div>

Follow these steps:

1. Search for the recently created __MerchantID__ in the search bar;
![AP12](https://images.ctfassets.net/alneenqid6w5/4RnNU5b0rsfCpEKkj9dFnj/3ddb803ff21d56c9f54d214d9b8bf56f/AP12.PNG)
2. Click on the desired __MerchantID__;
3. In the __Merchant Domain__ module, click on __Add Domain__;
![AP13](https://images.ctfassets.net/alneenqid6w5/7pPoN1yAltfTpHQVQRzvb9/61da4650bae649475637cf185a228c4f/AP13.PNG)
4. Add the domain in the __Enter the domain you wish to register__ field;  5. Click on __save__.

Thereafter, to upload the `.txt` file by API, follow these instructions:

1. Click on __Download__ and make no changes to the file.
![AP14](https://images.ctfassets.net/alneenqid6w5/20a92ocy0wEVTY6zXqfa5w/56b96dc4d0fe44c322065a10af594980/AP14.PNG)
2. Open the `.txt` file and __copy__ all the content.

Then, start a Postman session. You perform a call to VTEX's CDN using the POST method:

1. Configure the route __POST__ `https://{{yourdomain}}/.well-known/raw/{token}`, 
2. Ensure that __all the contents__ of the `.txt` file is in __quotation marks__ and without any __line breaks__; 
3. Add the __X-VTEX-API-AppKey__ and the __X-VTEX-API-AppToken__ to the header.

Now, when making the _POST_ call, the response will inform you that your certificate will be saved for 60 minutes. During this time, you should complete the domain validation.

Head back to the Apple's website. On the same screen where you downloaded the `.txt` file, click on __Verify__.
![AP15](https://images.ctfassets.net/alneenqid6w5/2rG0fF8Bvo5TqsDqAHqL4j/92c7bc8601572cd80caf4bea8b101208/AP15.PNG)

If you've followed the step-by-step correctly, your domain will be registered with the __verified__ status. If you want, you can repeat the process to add more domains by using the __Add Domain__ button in the __Merchant Domains__ section. 

## Creating a Merchant Identity Certificate

Lastly, you must generate a Merchant ID certificate, which will be used every time Apple shows the Apple Pay screen to your customers. To complete the steps of this process, it's important that to have a Mac computer available.

To complete the action, you'll need to create a password to protect the exported data.

<div class="alert alert-info">
Notice: we recommend an easy to remember password, since it will be filled into the Apple Merchant Password field upon configuring the gateway affiliation on VTEX's platform.
</div>  

1. Access the __Certificate, Identifiers & Profilers__ module;
2. From the left side menu, choose __Identifiers__;
3. In the upper right corner, filter by __Merchant IDs__; ![AP16](https://images.ctfassets.net/alneenqid6w5/5XBSpBP20NFq5HRQKpxQjS/e8f662462087cd43d0c8a5b7f7bdd4c3/AP16.PNG)
4. Select the desired __Merchant Identifier__;
5. Click on __Create Certificate__; ![AP17](https://images.ctfassets.net/alneenqid6w5/33Mm1jF8PBhIjj7X7LjAxc/181c7490381f754c0580d847da2c120d/AP17.PNG)
6. Follow the __instructions__ displayed on the screen to create a certificate;
7. Click on __Continue__;  ![AP18](https://images.ctfassets.net/alneenqid6w5/zY9tykCxck32wV3c9w1V8/bcacdf765e787fb104b8f7f70677c2df/AP18.PNG)
8. Click on __Download__.  ![AP19](https://images.ctfassets.net/alneenqid6w5/3VMp9diaN7L7M8dsopkWQo/6fa0b54d0a7310bfb7dd0cd183c2a56e/AP19.PNG)

After the file has been downloaded, double-click it to install it in Keychain Access.

Afterwards, proceed to the following steps:

1. Open __Keychain Access__;
2. Locate the __certificate__ created in step 4 above;
3. Right click on the __key__ icon; ![AP20](https://images.ctfassets.net/alneenqid6w5/1PqNUvHOaSVXkc4FfeMIEQ/cc421cbd0e0cfaff6f7763c861d84baf/AP20.PNG) 
4. Click on __Export__;
5. Give the __certificate__ a name;
6. Select the __.p12__ export format;
7. Click on __OK__.

As a final step, save the certificate on your computer. This file should be loaded in the gateway affiliation setting's __Apple Merchant Certificate (.p12)__ field, affiliation that will process Apple Pay in your VTEX store.

After completing all the steps above, you will have a Merchant ID set up for Apple Pay, a `.p12` certificate saved on your computer, and an access password. All this data will be requested during the process of setting up the gateway affiliation that will process payments with Apple Pay. 

To learn how to do this, access [this Help article](/en/tutorial/setting-up-rede-acquirer-with-erederest).

### Related articles
- [Setting up payments with Apple Pay](/en/tutorial/setting-up-payments-with-apple-pay)
- [Setting up Rede acquirer with ERedeRest](/en/tutorial/setting-up-rede-acquirer-with-erederest)
