---
title: 'Como funciona o envio de preços para o Facebook'
id: 4RIY6Z51u8OEYqIQgmiKKK
status: ARCHIVED
createdAt: 2019-01-24T20:45:35.019Z
updatedAt: 2020-03-06T14:00:04.857Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:43.360Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: como-funciona-o-envio-de-precos-para-o-facebook
locale: pt
legacySlug: como-funciona-o-envio-de-precos-para-o-facebook
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

A integração da VTEX envia para o Facebook o JSON com as informações abaixo:

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

A propriedade `price` equivale ao __Preço de lista__ cadastrado para o SKU. Este é o antigo `Preço de` do Pricing v1.

A propriedade `sale_price` equivale ao __Preço base__ cadastrado para o SKU. Este é o antigo `Preço por` do Pricing v1.

Caso o SKU não tenha __Preço de lista__ cadastrado, o valor da propriedade `price` será o valor do __Preço Base__.

Portanto, é possível exibir os dois preços no Facebook.
