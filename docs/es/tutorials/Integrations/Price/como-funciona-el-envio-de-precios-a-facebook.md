---
title: 'Cómo funciona el envío de precios a Facebook'
id: 4RIY6Z51u8OEYqIQgmiKKK
status: ARCHIVED
createdAt: 2019-01-24T20:45:35.019Z
updatedAt: 2020-03-06T14:00:04.857Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:43.360Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-to-send-prices-to-facebook
locale: es
legacySlug: como-funciona-el-envio-de-precios-a-facebook
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

La integración de VTEX envía a Facebook el JSON con la siguiente información:

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

La propiedad `price` equivale al __Precio de lista__ registrado para el SKU. Este es el antiguo `Precio de` del Pricing v1.

La propiedad `sale_price` equivale al __Precio base__ registrado para el SKU. Este es el antiguo `Precio por` del Pricing v1.

Si el SKU no tiene __Precio de lista__ registrado, el valor de la propiedad `price` será el valor del __Precio Base__.

Por lo tanto, es posible ver los dos precios en Facebook.
