---
title: 'WhatsApp Integration'
id: 33sM0SVrwffWhAhAgiGrZb
status: DRAFT
createdAt: 2022-08-23T15:11:28.551Z
updatedAt: 2024-01-05T17:14:09.083Z
publishedAt: 
firstPublishedAt: 2022-08-23T17:47:05.529Z
contentType: trackArticle
productTeam: Shopping
slug: whatsapp-integration
locale: en
trackId: 5UZ9BdvwwtZm2t9QTXcbZs
trackSlugEN: conversational-commerce
---

Currently, the VTEX Conversational Commerce integrates only with the WhatsApp messaging application. To start using it, you must create an integration with the messaging application. The store requires a centralized phone number to interact with its customers, available only for a Business account. You will also need to create a [WhatsApp Business](https://business.whatsapp.com/) account. 

We recommend that your store has a WhatsApp Business phone number dedicated to sales, since you can have more than one number associated with an account, dedicated to customer relations, for example. If your store does not yet have a WhatsApp Business account or has one but is being managed by another partner, it will be necessary to create a new account, which can be done by [VTEX itself in the name of the store (OBO)](#created-by-vtex) or [by the client via the VTEX Admin](#created-by-the-client-via-the-vtex-admin).

To create a WhatsApp Business account you need:

* To have a [Business Manager](https://www.facebook.com/business/tools/business-manager) account, a platform that manages all advertising and marketing activities on Facebook. This information is mandatory.
* To create a phone number that will be associated with WhatsApp Business and used by customers who want to make contact via WhatsApp. This information is mandatory. The number must meet the criteria below: 
    * Have country and area code, like a landline or mobile phone.
    * Belong to the company.
    * Be enabled to receive voice calls or SMS.
    * Should not be a short code, such as numbers used for contact by SMS with few numbers.
    * Has not been used on WhatsApp Business Platform previously.

## Created by VTEX

In order for VTEX to integrate with WhatsApp Business in the name of the store, in addition to the information described above, it is necessary to send the following data [in a support ticket](https://support.vtex.com/hc/en-us/requests):

* The identification of your company in [Business Manager](https://www.facebook.com/business/tools/business-manager) that will be associated with the WhatsApp Business account. To find the identification, follow the steps in this [article](https://www.facebook.com/business/help/1181250022022158?id=180505742745347). The administrator of this profile will need to be available to make the WhatsApp Business creation approvals that will arrive via Business Manager. The process usually takes an average of 3 business days. 
* The WhatsApp Business name and the profile that will be displayed for the customers and the logo to be used.
* Phone number to be used.

In addition to sending this information, the administrator must authorize the following data via [Business Manager](https://pt-br.facebook.com/business/tools/business-manager):

* Permission for VTEX to send messages in the name of the company.
* The name that will be used for the account and that will appear in the conversation with the customer.
* Phone number.

We also recommend [checking your store with Meta](https://www.facebook.com/business/help/1095661473946872?id=180505742745347). This step is optional for integration, but is mandatory if:

* You want to initiate conversations, such as product tracking warnings, for your customers through WhatsApp.
* You want your business account to be [official](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=BR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation%23official-business-account&event_type=click&last_nav_impression_id=0txQ0CoZfJfxi7cez&max_percent_page_viewed=44&max_viewport_height_px=869&max_viewport_width_px=1794&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Ftranslation%26path1%3Dwhatsapp%26path2%3Doverview%26path3%3Dbusiness-accounts&region=latam&scrolled=true&session_id=2nAsnwfEzmFrzLZoM&site=developers), which allows the display of the name of the store instead of the phone number on the list and with the seal <img src="//images.ctfassets.net/alneenqid6w5/4DNjQiVYTI24Wjt3t9CRfG/8e1ec0ab6bb167b4ff0de2547243354f/101835379_284952909300321_643050663994982400_n.png" alt="selo oficial whatsapp" width="25"/>.

## Created by the client via the VTEX Admin

If you need to create WhatsApp Business through the VTEX Admin, contact VTEX support to install the VTEX Conversational Commerce app in your store account. This will require:

* Confirming the account that will be used for the channel.
* Allowing the app installation.

After installing the app, VTEX will share the VTEX Conversational Commerce Admin URL for setting up WhatsApp Business. To complete the configuration, you need to provide the following information:

* [Business Manager](https://en-gb.facebook.com/business/tools/business-manager) account associated with WhatsApp Business.
* Phone number created for VTEX Conversational Commerce. It needs to be a mobile phone number for the validation.

Then, follow the steps below:

1. Log in to the VTEX Admin using the URL provided by the support team. You will be directed to the screen below:
![Track 101 - Conversational Commerce 1 - PT](https://images.ctfassets.net/alneenqid6w5/Zg2VTR41pSMleFi6bpcLT/cf9fb66691f9ec8f18a184099c70f3bf/Screenshot_2022-10-04_at_18-05-46_Track_101_-_Conversational_Commerce.png)
2. Click the `Configure WhatsApp Business Account` button.
3. A Facebook window will open for configuration. Log in with the desired Business Manager Admin profile.
4. Select the `Create a WhatsApp Business Account` option.
5. Enter the account name for your WhatsApp profile.
6. Select the category and enter the account description. 
![Track 101 - Conversational Commerce 2 - PT](https://images.ctfassets.net/alneenqid6w5/1DbUwuYgXSleNYBzDnS72n/e935883f195905d78f9c2209b1cc324b/Screenshot_2022-10-04_at_18-07-00_Track_101_-_Conversational_Commerce.png)
7. Check the phone number you want to associate with the account via the code sent to the phone.
8. Notify VTEX support to complete the configuration.

Once the configuration is complete, the alert below will be displayed in the Admin. 

![Track 101 - Conversational Commerce 3 - PT](https://images.ctfassets.net/alneenqid6w5/3RkQDfGaL3r5KV7j8uTXRH/6f32bb6973f7762a6eb06f12cd596e32/Screenshot_2022-10-04_at_18-07-47_Track_101_-_Conversational_Commerce.png)

