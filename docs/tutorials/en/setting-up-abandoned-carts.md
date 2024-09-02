---
title: 'Setting up Cart Abandonment (Trigger)'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2024-08-09T13:03:53.859Z
publishedAt: 2024-08-09T13:03:53.859Z
firstPublishedAt: 2017-04-27T23:03:41.572Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: setting-up-abandoned-carts
locale: en
legacySlug: setting-up-abandoned-carts
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Abandoned cart is VTEX's functionality that sends emails to customers to remind them to checkout on a cart that has been assembled but not completed.

The abandoned cart configuration can be performed in two different ways, according to the store's operating environment:

- [Legacy CMS Portal](#configuration-for-legacy-cms-portal-stores): through various modules of the VTEX platform (CMS, Master Data and Message Center) and also on your host server.
- [VTEX IO](#configuration-for-vtex-io-stores): through the installation of the “Abandoned Cart” app, configuration of the email template in the Message Center, and the Trigger in the Master Data.

## Configuration for Legacy CMS Portal stores

This section presents the following topics for configuring the abandoned cart functionality in VTEX Legacy stores:

- [Configuring email template in CMS](#configuring-email-template-in-cms)
- [Configuring email template in Message Center](#configuring-email-template-in-message-center)
- [SPF release](#spf-release)
- [Configuring trigger](#configuring-trigger)

### Configuring email template in CMS

You can create your own custom email template or use the default template option for abandoned cart. To create a custom template, follow these steps:

1. In the VTEX Admin, go to __Storefront > Layout__, or type __Layout__ in the search bar at the top of the page.
2. Under __CMS > HTML__ Templates, click on the `new template` icon.
3. Add a name in the __Template Name__ field.
4. Fill in the __Template XHTML__ field with the template codes.
5. Click on `Save Template`.

![template xhtml](https://images.ctfassets.net/alneenqid6w5/44IZ7N3din2EELL15z5FeQ/d48bd1624a47451e2314e2296237992f/Template_XHTML.PNG)

<div class="alert alert-warning">
We recommend that template customization should be performed by professionals with experience in the CMS module, and preferably, who have already configured other page and shelf templates.
</div>

To use a standard template option, follow the steps below:

1. In the VTEX Admin, go to __Storefront > Layout__, or type __Layout__ in the search bar at the top of the page.
2. Under __CMS > HTML__ Templates, click on the `CEM-Abandoned-Cart` icon.
3. Check the information of the template codes present in the __Template XHTML__ field.

![CEM-Abandoned-Cart](https://images.ctfassets.net/alneenqid6w5/5ZBXBk2KNJVjekmT7P7RqQ/45690f27bc8825ff3819ac3204d168e8/CEM-Abandoned-Cart.PNG)

### Configuring email template in Message Center

Once the new email template has been created or the data from the default template has been used, access the Message Center to configure the email template. Follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Email Templates > Templates__, or type __Templates__ in the search bar at the top of the page.
2. Click on the `New Template` button.
3. Click on __New Template__ and type the same name used in the created or default email template in the CMS (Legacy stores).
4. Select __Enable Email Sending?__ and __Use Default Sender__.
5. Fill in the __Email Title__ field as desired.
6. Fill in the __Recipient (To)__ with {{email}}.
7. In __Html__, enter the created or default email template information.
8. Click on `Save`.

<div class = "alert alert-info">
The JSON Data field must not be filled or its data used in the email template. It only contains information to allow a preview of the format in which the data will be viewed in the email.
</div>

![New template - message center](https://images.ctfassets.net/alneenqid6w5/7nX1YnaZoesV51yG24Z3ls/72c7499b2fdc65ee661c3cb45a387a60/new_template.PNG)

### SPF Release

The SPF release is essential to avoid problems with email deliverability and must be performed according to this article on [SPF configuration](https://help.vtex.com/en/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI#).

As a good practice for configuring DNS for a generic domain (not mandatory), follow the example below:

![Hostnames - SPF](https://images.ctfassets.net/alneenqid6w5/4txj9x3nVeN7Z3WEZmSpev/1ca34737e3275712b51c45283ec5b0c5/Hostnames_-_SPF.PNG)

Learn more at [Setting up DNS pointing to VTEX](https://help.vtex.com/en/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280#).

### Configuring trigger

In this step, you must create a [trigger in Master Data](https://help.vtex.com/en/tutorial/criando-trigger-no-master-data--tutorials_1270 "trigger no Master Data"), which involves completing some values to determine the trigger and defining some filters:

- __Checkout:__ The trigger will be enabled if the checkout is not completed and is different from null, i.e., if the customer does not place the order.
- __Cart:__ Refers to the last products the customer added to the shopping cart. The trigger will be enabled if the value is different from null.
- __Last cart:__ Records the date and time the cart was created. The trigger will be enabled if the value is different from null.
- __Receives newsletter?:__ Ensures compliance with the <a href="https://help.vtex.com/pt/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM">rights of data subjects</a>, since only customers subscribed to the newsletter will receive abandoned cart emails. Subscription to your store's newsletter can be managed at checkout or in the <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#perfil">My Account</a> section of your store. The trigger will be enabled if the value is true.

For the trigger to be successfully activated, the filters must be completed following the instructions below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Master Data__.
2. In Master Data, click __Applications > Advanced Settings > Data structure__.
3. Click the __Trigger__ tab.
4. Click the `Add New` button.
5. Complete the following fields:

   * **Name:** Enter the trigger name.
   * **Data Entity:** Select the Customer entity.
   * **Status:** Check the __Enabled__ option.
6. On the **Rules** tab, select *An attribute value is changed*.
7. Under **Field**, select *Last session*.
8. Click `Add Filter` five times to display the filter fields. Select them and complete the information as shown below:

   - *Checkout - Different from - Completed - and*
   - *Checkout – Is not null – and*
   - *Cart - Is not null - and*
   - *Last cart - Is not null - and*
   - *Receives newsletter? - Equal to - true*

9. Click the __Schedule__ tab and select whether the email should be sent as soon as possible, on a specific date or on a dynamic date.
10. Click the __If Positive__ tab.
11. Complete the fields following the instructions below:

	* **Action:** Select _Send an email_.
	* **Recipient: Enter your email as a test, and click `Add Static Email`.
	* **Email body format**: Select _HTML_.
	* **Sender's name:** Enter your store name as you want it to be displayed as the email sender.
	* **Reply to:** Enter the email address to which the customer can reply.
	* __Content type:__ Select *URL content*.
	* __Subject:__ Enter the subject of the email.
	* __URL:__ Enter your store's address, including the folders where the layout of the abandoned cart was configured, followed by the cart tag `{!carttag_SCORE}`. Example: `storename.com.br/CEM/Abandoned-Cart?refs={!carttag_SCORE}`.
	* In **Add utm_source to all links with this value:** Enter *CEM* to facilitate the identification of purchases made via abandoned cart.
	* __Overwrite utm_source:__ Check this option.

12. Click `Save`.
13. Create a cart and close the page to test the trigger.

  <div class="alert alert-warning">
	<p>A page session expires in 30 minutes. Only after this time does Master Data start counting the time scheduled for the Abandoned Cart trigger. Therefore, the time until the email arrives corresponds to the session time (30 minutes) plus the time scheduled in the trigger.</p>
</div>

13. Once you have received the abandoned cart message in your email, in the __Recipient__ field (step 12), select the __CL:Email__ option and click `Add Dynamic Email`.
14. Click `Save`.

## Configuration for VTEX IO stores

To configure the abandoned cart functionality in VTEX IO stores, follow these steps:

1. Install the app [Abandoned Cart Service](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service) in your store.
2. Configure the email template in [Message Center](#configuring-email-template-in-message-center). JSON specifications are available at [Message Center Information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#message-center-information).
3. Perform the [SPF release](#spf-release).
4. [Configure the trigger](#trigger-configuration) the same way as in Legado stores up to Step 10. From Step 11 (__If positive__ tab), follow the instructions available at [Trigger configuration information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#trigger-configuration-information).

  ![If positive tab IO](https://images.ctfassets.net/alneenqid6w5/4kuuU7JySZQVklXS2jtfsp/1b177fab2726c1d05d39608727cc2057/If_positive_Tab_IO.PNG)

## Frequently Asked Questions (FAQ)

### My trigger settings are correct, but the test email address is not receiving emails. What must be checked? 

To ensure the correct trigger flow, check two details:

1. Is the template URL working?

 To ensure that the URL is working, test it directly in the browser. Replace the `{!carttag_SCORE}` value with the ID of a SKU that is active and available on the website. If the URL returns an error, triggers will not work correctly.

2. Is the Request Capture (RC) working properly?

 To check whether the RC is working, update the website homepage by monitoring requests through the browser's developer tool (using the F12 key in Chrome, for example). Find the **rc.js** request and check if it is returning the content. If the return is empty, please contact VTEX Support.

### Is the data captured by RC updating the records in Master Data?

To check this, go to your store's website and add a product to the shopping cart. Click on **complete purchase**, enter your email and confirm. Close the browser at any moment of checkout — from filling in your personal data to selecting the payment method. Wait 30 minutes, go to the Master Data module, check whether the email used appears as a new record and if the fields &#8220;Last browsing data&#8221; were updated.

If you already have a record in the store, go to the website and log in, add a product to the shopping cart, and close the browser. Wait 30 minutes, go to the Master Data module, and check whether the fields **Last browsing data** were updated.

### Can I have more than one abandonment cart template?

You can have as many email addresses as you want; you just need to inform all URLs and the frequency for each of them.

### Can I give you a discount via email? How can I do that?

Yes, you can offer a discount to customers who return to the store through this email. To do so, you must create a discount coupon to be emailed to the client or a promotion using UTM directly in the template.

### How can I get a report on the purchases recovered using this feature?

You will be able to monitor the recovery of these sales through your Analytics tool. 

### Are there any prerequisites to configure this feature in my store?

To configure the abandoned cart feature, your store must be in a production environment to update the Master Data fields. This feature is not available for development environments.

