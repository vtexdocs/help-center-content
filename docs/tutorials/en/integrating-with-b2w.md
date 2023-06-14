---
title: 'Integrating with SkyHub/B2W'
id: tutorials_408
status: DRAFT
createdAt: 2017-04-27T22:06:17.861Z
updatedAt: 2020-03-06T13:56:49.709Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.750Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integrating-with-b2w
locale: en
legacySlug: integrating-with-b2w
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

The integration with B2W occurs through SkyHub, an integrator that intermediates the information sent by VTEX and repasses them to B2W. This way, VTEX integrates with SkyHub, but in the end your products are addressed to B2W.


## B2W Integration Registry
Follow the steps below to begin the integration configuration:

1.	In the Admin menu, click on __Integrations__.
2.	Access the __Settings__ item.
3.	Look for the __B2W__ box and click on the __Integrate__ button.
4.	Fill out the __fields__ shown on the screen. Below, we will detail how to fill each one out. 
5.	With everything filled out correctly, click on __Save Configuration__.

### Field detailing
&bull; __SkyHub access Email*:__ Fill out this field with your SkuHub email.

&bull; __SkyHub access key*:__ This field should be filled out with the identification __token__ your store uses on the marketplace. This information should be obtained from SkyHub.

&bull; __Affiliate’s ID*__: This field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that does not yet exist in the registry for affiliates in Orders (old OMS). The ID only accepts three digits (all must be consonants). Suggestion: `BWW`. In case you have set up [integrations for multidomain](/en/tutorial/creating-multi-store-multi-domain), pay special attention to the affiliate’s ID, because this field has a different value for each domain. 

&bull; __Sales Policy*:__ The sales policy ID  that will be used for the integration with B2W. It’s the product of this sales policy that will sent to the marketplace. 

&bull; __Store URL__: This field should be filled out with your store’s URL.
<br />_`Ex:` www.minhaloja.com.br_

&bull; __Inform the name of your attributes used to create the variation of your products here__: Insert the SKUs’ specifications used in the store.

&bull; __Price Divergence Indicator* :__ Is the acceptance rate of the difference in value of an order. Any order that has a difference between the marketplace selling price and the price established by the seller [will be compared with this value](/en/faq/why-was-the-order-closed-with-the-wrong-price). If the divergence, in percentage points, is less than the value defined in this field, the order will be integrated normally. Otherwise, the order will not be integrated and you can see it in the [orders tab (within the integrations session in Admin)](/en/tutorial/checking-integrations-in-bridge).

&bull; __Emails for Notifications of Orders that are not Integrated*:__ Fill out with an email address. Remember to select the `+` button in order to add the email. 

_Subtitle:_<br />
`*` Mandatory fields.<br />

After saving the configuration, the integration automatically sends all products associated with determined sales policy over to SkyHub.

This is the _first step_ of the integration. In the next step, we will complete the registration of the API, which is needed for the integration to run correctly. 


## APIs registration
The integration automatically provides the API for freight inquiry. However, specific situations exist in which you will need to open a ticket with B2W, asking for the manual inclusion of the API onto the marketplace portal. 

### Freight API 
The implementation of the API allows that B2W inquires, in real-time, on the price and deadline for delivering your products (according to your ZIP code). Note that the term `{AccountName}` must be replaced by the name of your store’s environment. 

`http://simulation.vtexcommercestable.com.br/api/skyhubintegration/freight?an={accountName}`


After this step, your store will be completely integrated with B2W.



## Related articles
- [How the SkyHub integration works](/en/tutorial/how-the-skyhub-integration-works)
- [Integrar com marketplace](/en/tutorial/integrating-with-marketplace)

