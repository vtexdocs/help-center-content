---
title: 'How to send prices to Facebook'
id: 4RIY6Z51u8OEYqIQgmiKKK
status: DRAFT
createdAt: 2019-01-24T20:45:35.019Z
updatedAt: 2020-03-06T14:00:04.857Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:43.360Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: how-to-send-prices-to-facebook
locale: en
legacySlug: how-to-send-prices-to-facebook
subcategory: 3pGCbMh80UueoeSqoAgSuS
---

VTEX integration sends to Facebook a JSON with the information below:

```json
{
    "method": "CREATE",
    "retailer_id": "8500",
    "data": {
        "availability": "in stock",
        "brand": "My Brand",
        "category": "My Category",
        "currency": "USD",
        "description": "My Description.",
        "image_url": "http://{storename}.vteximg.com.br/arquivos/ids/959752-600-600/my-image.jpg",
        "name": "Product Name",
        "price": 6990,
        "sale_price": 4990,
        "url": "http://www.{storename}.com.br//product-url/p",
        "retailer_product_group_id": "fb-520"
    }
}
```

The `price` property is the __List price__ registered for the SKU. This is the old `Price from` of Pricing v1.

The `sale_price` property is equivalent to the __Base price__ registered for the SKU. This is the old `Price for` of Pricing v1.

If the SKU doesn't have a __List price__, the value of the property `price` will be the one of __Base price__.

Therefore, you can display the two prices on Facebook.
