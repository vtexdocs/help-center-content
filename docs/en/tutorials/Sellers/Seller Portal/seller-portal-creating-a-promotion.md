---
title: 'Seller Portal: Creating a promotion'
id: kzNPEaiJE8EWkDzO9dbBI
status: PUBLISHED
createdAt: 2023-09-01T15:28:13.875Z
updatedAt: 2023-11-16T18:06:30.499Z
publishedAt: 2023-11-16T18:06:30.499Z
firstPublishedAt: 2023-09-01T16:58:54.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: seller-portal-creating-a-promotion
locale: en
legacySlug: seller-portal-creating-a-promotion
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

To create a new promotion as a seller in the Seller Portal, follow the steps below:

1. In the VTEX Admin, go to **Products > Promotions > Promotions **or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Complete the [Promotion fields](#promotion-fields).
4. Click `Save`.
5. Review your promotion configuration before publishing it.
![seller-portal-promo-revisao-en](https://images.ctfassets.net/alneenqid6w5/76ttKMrp8E1XlK2QZ6OAJQ/cde8b71b347ade7c49aed0056cb8f134/image.png)
6. After reviewing the details, click `Confirm`.

Then, the promotion will be activated and applied to your store.

>ℹ️ When multiple promotions apply to the same cart items, the Promotions module applies the one offering the highest discount to benefit the customer. 

## Promotion fields

### General

In this section, you need to configure your promotion's general information.

![seller-portal-promo-geral-en](//images.ctfassets.net/alneenqid6w5/33rywokDbzTvVS1VscDxvp/c1148e5222e0a6e990c10371a00547f0/image.png)

* **Name:** Promotion name.
* **Status:** Option that defines whether the promotion is active <i class="fas-toggle-on"></i> or inactive <i class="fas-toggle-off"></i>.
* **Description:** An internal description of the promotion. The purpose of this field is to be used as internal communication in your store to indicate whether the promotion comes from a campaign, clearance sale, etc.
* **Start date:** Start date of the promotion. You can set a future date for the promotion to start on your website. If that is the case, the promotion will be in the **scheduled** status until the start date is reached.
* **End date:** End date of the promotion. As long as the end date is valid, the promotion will maintain its active status. Once the end date is reached, the discount will be automatically deactivated.
* **Start time:** Start time of the promotion.
* **End time:** End time of the promotion.

### Discount type

Section that defines the discount type and amount that will be applied in the promotion. See the discount options below:

![seller-portal-promo-tipo-desconto-en](//images.ctfassets.net/alneenqid6w5/cvG0Q9A8BHoazDipvbnol/d9d72c7fc562111e4e454a4b2df35b09/image.png)

#### Price

* **Percentage:** Percentage discount that will be applied to the product price.
* **Maximum price per item:** The maximum price for each eligible item will be the price set above. This option will only apply to products priced higher than the amount configured.

#### Shipping

* **Free shipping:** Discount on the full shipping cost of the items eligible for the promotion.
* **Percentage:** Percentage discount that will be applied to the shipping cost.
* **Maximum shipping:** Sets a maximum amount for the shipping cost. If there is a shipping option cheaper than the maximum value configured, the lower cost will be charged.

### Eligible products

In this section, you need to choose whether the promotion will apply to all your store products or only specific products, as in the image below.

![seller-portal-promo-produtos-elegiveis-en](//images.ctfassets.net/alneenqid6w5/77OBxN704Khh9t2MqXq49k/dacb5c26ee3d3fd9f066617340a7d861/image.png)

* **All products:** Applies the promotion to your whole catalog.
* **Products that meet all the following rules:** Limits your promotion to specific products based on the following rules:
  * **Product, Category, Brand, SKU:** Option that defines the criterion for selecting products.
    * `is one of`: Includes the product selection criterion.
    * `is not one of`: Excludes the product selection criterion.

After defining the selection criteria, enter the name of the items to be included or excluded.

To add more than one selection rule, click `+ Add Rule`. If more than one rule is configured, only items that meet both rules will have the discount applied.

To remove a rule, click <i class="fas-trash-can"></i> `Remove rule`.

### Conditions

The order must meet all the conditions specified in this section for the promotion to apply.

![seller-portal-promo-condicoes-en](//images.ctfassets.net/alneenqid6w5/52hsesSaNHcwM7Ti6jKQL7/08cb480d481c4787c8e077b6055980a3/image.png)

* **Item price:** The discount will apply only to items within the specified price range.
* **Shipping method:** The discount will apply only if the customer selects the same shipping method specified in the promotion.
* **Shipping country:** The discount will apply to items shipped to the countries selected in this field.
* **Shipping postal code:** The discount will apply if the shipping postal code meets the configured rule. You can add more than one postal code range to include or exclude more zones.

### Restrictions

The promotion will be limited by the following criteria:

![seller-portal-promo-restricoes-en](//images.ctfassets.net/alneenqid6w5/1FG1nW6lJCXmHJtSdlERkc/8aab96f2312f7a40532d717b51e355bb/image.png)

* **Limit the number of eligible items per cart:** Defines the maximum number of items in the cart that will be affected by the promotion. If the cart has more items than the limit, the discount will only be applied to the number of items configured in this field.
