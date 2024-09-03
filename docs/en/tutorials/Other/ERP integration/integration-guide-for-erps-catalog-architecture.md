---
title: 'Integration guide for ERPs -  Catalog Architecture'
id: 4Dd3etdW3Y8oGAeAK8E82K
status: ARCHIVED
createdAt: 2017-09-13T18:36:05.041Z
updatedAt: 2020-06-04T01:08:49.683Z
publishedAt: 
firstPublishedAt: 2017-09-13T18:40:30.973Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: integration-guide-for-erps-catalog-architecture
locale: en
legacySlug: integration-guide-for-erps-catalog-architecture
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

Usually, inside the store the products are organized at marketing structures formed by:

1. **Department** - category whose id of father category is **null**,
2. **Category** - category whose id of father category is a **department**,
3. **Subcategory** - category whose id of father category is a **category**.

_Example:_

* Department/Category/SubCategory/Product
* Tools/Electric Tools/Drills/Super Drill

The registration of marketing structure must be done directly on the admin of the own store. To attend the integration came from the ERP, a standard department is created for products that comes from the ERP, what means that every product drops on the store's admin in this standard department and then at the moment of enrichment is placed in the desired category. 

### Brands

Creation of brands also must be done by the VTEX admin. To drop the product from the ERP, create a standard brand and then at the moment of enrichment, inside the VTEX admin, place in the correct brand.


### What's the difference between product and SKU?

**Product** is the most generic definition of something that is offered to the customer, for example, *Refrigerator*, *T-shirt*, *Ball*.

**SKU** are the initials of “stock keeping unit” in English, in Portuguese it is Unidade de Manutenção de Estoque, what means that a SKU defines a variation of a product, for example, *110V White Refrigerato*r, *Large Yellow T-Shirt*.

In the registration model of products and SKUs of VTEX, a SKU will always be a son of a product (there isn't SKU without product), even if this product doesn't have variations, and in this case will be 1 SKU to 1 product, for example product *Jabulani Ball* with the *Jabulani Ball SKU*.
