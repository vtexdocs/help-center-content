---
title: 'Setting up Cart Abandonment (Trigger)'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2024-06-24T14:49:04.124Z
publishedAt: 2024-06-24T14:49:04.124Z
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
- [VTEX Legacy](#configuration-for-vtex-legacy-stores): through various modules of the VTEX platform (CMS, Master Data and Message Center) and also on your host server.
- [VTEX IO](#configuration-for-vtex-io-stores): through the installation of the “Abandoned Cart” app, configuration of the email template in the Message Center, and the Trigger in the Master Data.

### Configuration for VTEX Legacy stores

This section presents the following topics for configuring the abandoned cart functionality in VTEX Legacy stores:

- [Configuring email template in CMS](#configuring-email-template-in-cms)
- [Configuring email template in Message Center](#configuring-email-template-in-message-center)
- [SPF release](#spf-release)
- [Trigger configuration](#trigger-configuration)

#### Configuring email template in CMS

You can create your own custom email template or use the default template option for abandoned cart. To create a custom template, follow these steps:

1. In the VTEX Admin, go to __Storefront > Layout__, or type __Layout__ in the search bar at the top of the page.
2. Under __CMS > HTML__ Templates, click on the `new template` icon.
3. Add a name in the __Template Name__ field.
4. Fill in the __Template XHTML__ field with the template codes.
5. Click on `Save Template`.

![template xhtml](https://images.ctfassets.net/alneenqid6w5/44IZ7N3din2EELL15z5FeQ/d48bd1624a47451e2314e2296237992f/Template_XHTML.PNG)

>⚠️ We recommend that template customization should be performed by professionals with experience in the CMS module, and preferably, who have already configured other page and shelf templates.

1. In the VTEX Admin, go to __Storefront > Layout__, or type __Layout__ in the search bar at the top of the page.
2. Under __CMS > HTML__ Templates, click on the `CEM-Abandoned-Cart` icon.
3. Check the information of the template codes present in the __Template XHTML__ field.

![CEM-Abandoned-Cart](https://images.ctfassets.net/alneenqid6w5/5ZBXBk2KNJVjekmT7P7RqQ/45690f27bc8825ff3819ac3204d168e8/CEM-Abandoned-Cart.PNG)

#### Configuring email template in Message Center

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

#### SPF Release

The SPF release is essential to avoid problems with email deliverability and must be performed according to this article on [SPF configuration](https://help.vtex.com/en/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI#).

As a good practice for configuring DNS for a generic domain (not mandatory), follow the example below:

![Hostnames - SPF](https://images.ctfassets.net/alneenqid6w5/4txj9x3nVeN7Z3WEZmSpev/1ca34737e3275712b51c45283ec5b0c5/Hostnames_-_SPF.PNG)

Learn more at [Setting up DNS pointing to VTEX](https://help.vtex.com/en/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280#).

#### Trigger configuration

In this configuration, you have to create a [trigger in Master Data](https://help.vtex.com/en/tutorial/criando-trigger-no-master-data#). The process consists in filling in some values to determine the trigger. 

These include three additional filters, such as:

- Checkout
- Shopping cart
- Last shopping cart

The "Checkout" filter sets one of the conditions to trigger. In the example below, the trigger will be released when the shopping cart is not finalized and other than null. So, when the customer does not complete the purchase and has not added anything else to the shopping cart. 

In addition, we also have the "Cart" and "Last Cart" filters. Although they seem to be similar, their behavior is different. The "Cart" refers to the last products a customer added to the shopping cart. The "Last Cart" consists of the date and time when the cart was created. 

<div class="alert-warning">In order for the trigger to be triggered, the three filters must be filled in according to the example below.
</div>

<blockquote><ui>1. In the VTEX Admin, access <b>Store Settings</b> > <b>Storefront</b> > <b>Master Data.</b></ui>

<blockquote><ui>2. In Master Data, click <b>Aplications</b> > **Data structure.</b></ui>

<blockquote><ui>2. Click on the <b>Trigger</b> tab.</ui>

<blockquote><ui>3. Click on the <b>Add New</b> button.</ui>  

<blockquote><ui>4. Enter the name of the trigger.</ui>

<blockquote><ui>5. In <b>Data Entity</b>, select the <b>Client</b> (Customer) value.</ui>

<blockquote><ui>6. In <b>Status</b>, check <b>Enabled</b>.</ui>  

<blockquote><ui>7. In <b>Trigger Rule</b>, select <b>O valor de um atributo for alterado</b> (The value of an attribute has been changed).</ui>

<blockquote><ui>8. In <b>Field</b>, select <b>Última sessão</b> (Last session).</ui>

<blockquote><ui>9. Click in <b>Add filter</b> (5x) to enable the fields. Select and fill in as indicated and illustrated below.</ui>   

<blockquote><blockquote><ui>-> Checkout - Diferente - Finalizado - and (Checkout - Different from - Completed - and)</ui>

<blockquote><blockquote><ui>-> Checkout - Não está nulo - and (Checkout - is not null - and)</ui>

<blockquote><blockquote><ui>-> Carrinho - Não está nulo - and (Cart - is not null - and)</ui>

<blockquote><blockquote><ui>-> Último Carrinho - Não está nulo (Last cart - is not null)</ui>   

![Filter master data 2](https://images.ctfassets.net/alneenqid6w5/6aME0zp72kjwJiulRdoRNl/6408ac4ab3b36d015790bcf1b1b5d667/Filter_Master_Data.PNG)

>⚠️ In addition to the filters indicated above, it is recommended to insert another filter in the following format: `Receives newsletter? - Equal to - True`. This ensures compliance with [data subject rights](https://help.vtex.com/en/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM), as only customers subscribed to the newsletter will receive abandoned cart emails. Subscription to your store's newsletter can be managed at checkout or in the [My Account](https://help.vtex.com/en/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#profile) section of your store.

<blockquote><ui> 10. Click on the <b>Schedule</b> tab and select whether to send the email on a specific date or on a dynamic date.</ui>

![Schedule date](https://images.ctfassets.net/alneenqid6w5/3SiaNvXMctzVtBzSjzsg3E/6956b67734b6b7c3970d193c03e8fefc/Schedule_date.PNG)

<blockquote><ui>11. In the <b>If positive</b> tab:</ui>

<blockquote><blockquote><ui>a. In Action, select <b>Send an email</b>.</ui>

<blockquote><blockquote><ui>b. In <b>Recipient</b>, to perform a system test, enter your email and click <b>Add Static email</b>.</ui>

>⚠️ Once you have completed the other settings below and verified that you have received the abandoned cart message in your email, return to this step, select the option **CL**: **Email**, click in **Add Dynamic email**, and then in **Save**.

<blockquote><blockquote><ui>c. In <b>Email body format</b>, select <b>Html</b>.</ui>

<blockquote><blockquote><ui>d. In <b>Sender's name</b>, enter your store name.</ui>

<blockquote><blockquote><ui>e. In <b>Reply to</b>, fill in the email address where the customer can respond if they have questions.</ui>

<blockquote><blockquote><ui>f. In <b>Content type</b>, select <b>URL content</b>.</ui>

<blockquote><blockquote><ui>g. Fill in the field <b>Subject</b>.</ui>  

<blockquote><blockquote><ui>h. In <b>URL</b>, enter your store’s address, including the folders in which the layout of the abandoned cart was set up, followed by the cart tag (?refs={!carttag_SCORE}). Ex.: storename.com/CEM/Abandoned-Cart?refs={!carttag_SCORE}.</ui>  

![PastasCarrinhoAbandonado](https://images.ctfassets.net/alneenqid6w5/4DSsVaeDvWmaaw2iwySCOy/b579eb818e0bcda140dba0ae96ecc90f/PastasCarrinhoAbandonado.png)  

>⚠️ The URL address must be the real one of the store, not the URL with vtexcommercestable.

<blockquote><blockquote><ui>i. In <b>Add utm_source to all links whose value is</b>, fill with "CEM", to facilitate the identification of purchases by abandoned cart.</ui>

<blockquote><blockquote><ui>j. Select the option <b>Overwrite utm_source</b>.</ui>

<blockquote><blockquote><ui>k. Click on the <b>Save</b> button.</ui>  

<div class="alert-warning">A page’s session expires in 30 minutes. Only after that time, the system schedules the abandoned cart trigger. In other words, the time to be considered is the session's time + the trigger schedule.
</div>  

![If positive tab](https://images.ctfassets.net/alneenqid6w5/2GDAJ2St3ayiKjcWoONDRc/44d05312148341427e720b76d8a1f24f/If_positive_Tab.PNG)  

### Configuration for VTEX IO stores

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

