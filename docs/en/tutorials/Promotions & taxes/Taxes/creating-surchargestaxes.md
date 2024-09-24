---
title: 'How to create surcharges/taxes'
id: tutorials_321
status: PUBLISHED
createdAt: 2017-04-27T22:08:49.745Z
updatedAt: 2023-10-26T13:20:22.531Z
publishedAt: 2023-10-26T13:20:22.531Z
firstPublishedAt: 2017-04-27T23:03:14.603Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: creating-surchargestaxes
locale: en
legacySlug: creating-surchargestaxes
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

A surcharge is the opposite of a promotion, that is, it is an additional percentage added to the product price in order to increase the value. A surcharge can be configured on the basis of a range of conditions, such as postal code (CEP) range, department, the brand of the products, the customer cluster, and so on. The surcharge is added only in the shopping cart, in the area marked **Tax**.

The surcharge is applied in accordance with the registration done on the seller. So if your store’s shopping cart has another seller’s product, the surcharge to be applied to that product will be the one registered on the admin of the seller that owns the product. Surcharges registered in the Pricing module will not be taken into account, even if this surcharge is associated with this product.

## How to create them

1. In the VTEX Admin, go to *Promotions > Taxes*, or type *Taxes* in the search bar at the top of the page.
2. Click on **New Tax**.
3. Fill out the fields according to each type described below.
4. Click on **Save**.

## Fields

### What is the general information of this tax?

- **Name**: name of the surcharge.
- **Status**: activates or deactivates the surcharge.
- **Description**: internal description of the surcharge This field is intended for communication within your store, to make it clear whether the surcharge is based on some special rule, for example.
- **Expiration Date**: date and time of the start and finish of the surcharge. Future dates and times can be used to schedule the application of the surcharge on the site. If it is configured in this manner, the surcharge will be shown as scheduled, until the date and time indicated are reached. While the surcharge is in effect, it will have active status and, when the defined date and time run out, the status will automatically change to inactive.
- **What kind and amount of Tax?**:
  - **Percentage Tax**: a percentage of the value of the product to be added to the amount.
  - **Formula-based Tax Value**: the surcharge will apply the calculation entered in the field.
  - **Shipping percentual tax**: percentage increase over freight value.
  - **Nominal tax**: additional tax with a predefined value.
- **Sales Policy**: select the sales policies to which the surcharge will apply.

### To what items will this tax apply?

- **Categories, Brands, Collections and Products:** it must meet all the conditions registered. E.g.: if a category and a brand are registered, the product must meet both conditions.

### What are the conditions for the tax to be valid?

- **Aggregate value of purchases**: the surcharge will be applied if the total of all purchases previously made by the customer meets this minimum.
- **Marketing Tags**: field used to restrict the activation of the campaign if the purchase is made by the VTEX recurrence system.
- **Affiliates**: marketplace order identifier
- **Customer cluster**: the surcharge will be applied if the customer is registered in the selected cluster.
- **Shipping to postal code should**: the surcharge will be applied where the postal code meets the rule configured.
- **Shipping Method**: the surcharge will be applied if the type of shipping is as registered.

## Scheduling

Scheduling of a surcharge occurs when it is created with an expiration date and time, beginning after the current one. Visually, it is possible to identify these surcharges on the home page of the Promotions & Taxes module by an orange strip in the upper right-hand corner of the surcharge card with the word ‘scheduled’. See below an example of how the surcharge card looks when scheduled.

![agendamento.en](//images.ctfassets.net/alneenqid6w5/6XrW3s1vW86EPSvcMufVcg/3b64aad76af6a36adc278405163fc7aa/agendamento.en.png)
