---
title: Create a product
id: NgqTfNOte6KMsmWgasMIo
status: DRAFT
createdAt: 2018-05-02T20:51:24.416Z
updatedAt: 2020-05-21T23:48:43.076Z
publishedAt: 
firstPublishedAt: 2018-05-02T20:51:51.794Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: create-a-product
trackId: 7sORw9I7QIka24MCQaIO2g
trackSlugEN: vtex-getting-started
---

Before anything else, it's important to understand the difference between SKU and product. This difference concerns the VTEX platform, but also the way most of e-commerce operations treat these concepts.

<div class="alert alert-info">
<strong>SKU:</strong> the smallest possible unit of items sold in the store. Stock and price, for example, are SKU properties.
</div>

<div class="alert alert-info">
<strong>Product:</strong> SKUs aggregator.
</div>

See the following examples:

| Produto     | SKU 1     | SKU 2     | SKU 3     |
| ---------- | ---------- | ---------- | ---------- |
| __Jeans__       | Jeans S       | Jeans M       | Jeans L       |
| __Orange juice__       | Orange juice 300ml       | Orange juice 600ml       | Orange juice 1L       |

In the shop window, the customer will see only the product __Jeans__, not three separate SKUs: "Jeans S", "Jeans M" and "Jeans L".
The management of your inventory sees each of the SKUs that make up this product separately. So it can know, for example, that you have 50 Jeans M in stock, but only 2 Jeans L.

<div class="alert alert-info">
<strong>Atention</strong>: Whenever you create an SKU, you need to create the product first.
</div>

Let's see how to create the product.

---

In the __Catalog__ module, follow the steps below:

1. Hover your mouse over the __Product Management__ tab.
2. Go to the __Products and SKUs__ option and click __Product and SKUs Management__ .
3. Click the button __Add Product__.

You will be taken to the product registration screen.

- Fill in the field __Name__ with the name you want for the product.
- Fill in __Substitute Words__ with names that can be mistakenly used by customers in internal searches or search engines, or words that should point to this product. For example: the product name may be "Blue shirt", but you may wish that if someone searches for the "Blue t-shirt" it also points to this product.
- Fill in __textLink__ with the text that will form the product URL on the site. No spaces or accents are allowed.
- Fill in __Type Title (Title)__ with the title that will appear in the browser tab when the user is on the product page.
- In the __Brand__ field, enter the brand name of that product (possibly the one you created in the [previous step](/en/getting-started/create-a-brand)) or click __Advanced Search__ to look for it.
- Under __Category__, click __Select category__ and then click the name of the category to which this product belongs.
- Check the flag __Show on site__ so that the exhibition of the product in the store is active.

To see the complete list of available fields on this screen, see the article [Fill in product registration fields](/en/tutorial/product-registration-fields).

After you have finished filling in the fields, you will find two saving options:
- __Save:__ the product registration is saved, but it still won't appear on the site, because there is no SKU assigned to it.
- __Save and Register:__ the product registration ends, and you are taken to the [SKU configuration](/en/getting-started/create-an-sku) screen to create an SKU that will be linked to the product you just created.
