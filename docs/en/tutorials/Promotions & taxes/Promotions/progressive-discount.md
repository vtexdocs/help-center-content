---
title: 'How the progressive discount works'
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2024-11-11T16:56:08.449Z
publishedAt: 2024-11-11T16:56:08.449Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: progressive-discount
locale: en
legacySlug: progressive-discount
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

This kind of promotion is used to grant a discount percentage for a certain amount of products added to the cart. For example, "Buy 5kg of feed and get a 5% discount. Add another 5kg, and receive 10% more".

## Fields

### What is the general data of this promotion?

- **Name:** Name of the promotion
- **Status:** Enables or disables the promotion
- **Description:** Internal description of the promotion. This field is used for internal communication at your store, in order to make clear if the promotion results from some campaign, stock clearance, etc.
- **Expiration Date:** Date and time of start and end of the promotion. A future date and/or time can be used to launch the promotion on the website. If configured this way, the promotion will have a scheduled status until the set date and time arrive. As long as the promotion is valid, it will have the enabled status and, at the end of the set date and time, the status will change to disabled automatically.
- **Specify days of the week for the enabling:** This option is displayed as a check box. When selected, it provides seven other check boxes, that represent the days of the week when the promotion can be offered. If you want the promotion to be offered on every day of the week, don't select this option.
- **Discount highlight:** Inserts a tag with the name of the promotion. Used at the product's window and page. This flag will only be inserted if you use the correct display control of the promotion on the template. `<vtex.cmc:discountHightLight/>`
- Seller: Selects the seller that will offer the discount. If you have a multistore, all the sellers registered on your account will appear. This option allows you to assign a different discount for each seller.

### Sales Policy

Selects the Commercial Policies that will offer the discount. All the policies registered at **Sales policies** section will be listed. This option allows you to offer different discount for each policy.

### Progressive discount

- **Collections:** Enter the name of the collections of products you want to relate to this type of discount. It is possible to enter more than one. The promotion will only be applied to products that are in the collections registered on this field.
- **SKUs:** Enter the name or Id of the SKUs to which you want to apply the discount. You can import a list of SKUs, which must be saved as a text file (.txt), with each Id on a different line. Obs.: If the products are not limited by collection or SKU, the platform will not allow the creation of the promotion.
- **Amount:** Amount of units of the same product required in the cart in order to grant the discount. This field is mandatory. Considering the example in the beginning of the article, here is where you should register the number 5 (for 5 kg).
- **Discount:** Discount to be applied if the amount required above is added to the cart.
- **Include "+" Button:** Used to add more lines to the progression of the discount, being possible to include a maximum of 10 lines, with different amounts and discounts. Considering the example in the beginning of the article, it would be necessary to include one more line, and enter 10 (5kg + % kg) on the amount field and 15 (5% + 10%) on the discount field.

### What are the conditions for the promotion to be valid?

- **Utm_source:** The discount will be granted if the browsing is performed through the utm_source that contains the registered value.
- **Utm_campaign:** The discount will be granted if the browsing is performed with the utm_campaign that contains the registered value.

### Restrictions and limitations of use

- **Only for the same items:** The discount will only be applied per SKU, once each one has a minimum amount registered. If you don't check this option, the discount will be applied to products from the collection or from the list of SKUs, without the necessity of reaching the minimum amount in the cart registered for each of them, being only considered the sum of the units of these products.
- **Allow combination with manual prices:** Allows the promotion to be applied to products whose prices have been manually input by a callcenter user. For the correct usability of this flag, a previous configuration is necessary to allow the manual prices input.
