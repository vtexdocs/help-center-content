---
title: 'Configuring the connector'
id: 5OP69kHWKca01wLH0w10jX
status: PUBLISHED
createdAt: 2021-02-08T19:26:40.865Z
updatedAt: 2022-01-27T18:14:48.306Z
publishedAt: 2022-01-27T18:14:48.306Z
firstPublishedAt: 2021-02-08T20:10:36.973Z
contentType: trackArticle
productTeam: Channels
slug: configuring-the-connector-facebook
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: facebook-integration
---

The native connector used for integrating with Facebook must be configured in the Admin. To set it up, follow the instructions below:

1. Access the Admin.
2. In the _MARKETPLACE_ module, click on `Integrations`.
3. Then, click on `Settings`.
4. Under the Facebook card, click on `Integrate`.
5. Fill in the fields in the modal window according to the descriptions below, then click on the `Save configuration` button. Fields marked with an asterisk are mandatory.

- **Integration (if you deactivate the integration, then all settings, including the authentication and affiliates, will be deleted)*:** toggle the _Activate_ option to enable the integration.
- **Affiliate ID*:** Identification code for creating an [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) that is not yet registered in your system. The code must consist of three consonants, repeated or not. Vowels are not accepted. Suggestion: FCB. Once the connector is created, the affiliate is automatically created.
- **Affiliate email*:** fill in an email address for the affiliate you are creating. Notifications about the integration will be sent to this email address.
- **Trade policy*:** the ID of the trade policy that will be used in the integration. All products linked to this trade policy will be sent to Facebook.
- **Product display name*:** determines the rule for naming SKUs on Facebook. You can choose between two options.
   * **Product Name - SKU Name:** names will be generated from the _Product name_ and _SKU name_ fields.
   * **Product name:** names will be generated from the _Product name_ field.

- **Business Manager ID*:** code assigned to your profile on Facebook Business Manager. It’s a number sequence. It can be found in the account settings.
- **Store URL*:** your store website. This field is used to generate the complete URL of the product that will be submitted to Facebook.
<br></br>
Example: `https://www.yourstore.com`

- **Category*:** all the products sent to Facebook must belong to a category. There are two ways to identify your product category:
   * **Less specific:** corresponds to the main category in your category tree.
   * **More specific:** corresponds to the deepest subcategory in your category tree.
<br></br>
Example: your product is a t-shirt. Let’s say it is listed in the _Apparel_ category, within the _Shirts_ subcategory. If you select the _Less specific_ option, your product will appear on Facebook under the _Apparel_ category. If you select _More specific_, the product will appear on Facebook under the _Shirts_ category.
