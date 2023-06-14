---
title: 'How to add customized information to the order and manipulate it'
id: 7tDi1jQQ51ufARcRm8NUnC
status: DRAFT
createdAt: 2020-05-29T12:05:23.571Z
updatedAt: 2022-07-25T18:20:29.230Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:20:21.210Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: how-to-add-customized-information-to-the-order-and-manipulate-it
locale: en
legacySlug: how-to-add-customized-information-to-the-order-and-manipulate-it
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

When the end customer enters the checkout process at a VTEX store, we create the `orderForm` object, which contains information about the order.

However, in B2B transactions, whose sale context is more complex, the store often needs this object to contain extra information, such as order type and purchase order number.

To include those, you must use the `customData` field in the `orderForm`. This field’s purpose is to be populated with custom information necessary for the store’s specific operation.

To work with this field, you must use VTEX’s Checkout API. Three steps are required:

1. Creating apps and fields through the configuration request.
2. Using the API to record/update/query the data (via `orderForm` and `placeOrder`).
3. Finding the desired data in the created order.


## 1. Creating apps and fields through the configuration request

Before populating the `customData` field, you need to use the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) call to create an app. This app will contain custom fields that will be populated during checkout.

<div class="alert alert-warning">
The Update orderForm configuration defines settings that apply to all orderForms generated in your account. This means that, from the moment you add an app through it, all the store’s orders will contain the extra fields defined in that app. To create an app and its fields, this call only needs to happen once.
</div>

Here is an example of an `app` object sent in the body of the request Update orderForm configuration:

```json
"apps": [
        {
            "fields": [
                "order-type",
                "po-number"
            ],
            "id": "cart-b2b-context"
        }
]
```

With this object in the body, the request will create an app whose ID will be `cart-b2b-context` and which will contain two fields: `order-type` and `po-number`.

If the call is successful (answer `200 OK`), the orderForm of your store's orders will now contain these two new fields.


## 2. Use the API to record/update/query the data

After creating the fields, we need to save the data in them. This can be done with a single call: [Set multiple custom field values](https://developers.vtex.com/reference/custom-data#setmultiplecustomfieldvalues).

Through this call, you inform the ID of the app you want to change (in the URL), as well as the names of the fields and the values you want to save in each of these fields (in the body).

Using our previous example, we could make the following request:

URL:
`https://{accountName}.myvtex.com.br/api/checkout/pub/orderForm/{orderFormId}/customData/cart-b2b-context`

Body:
```json
{
“order-type”: “abc”,
"Po-number": “9870234”
}
```

In this example, we are populating the new extra fields of the orderForm identified in the URL by `{orderFormId}`.


## 3. Find the desired data in the created order

Finally, it is necessary to implement access to the data saved in the orderForm’s extra fields. To do this, use the [Get Order](https://developers.vtex.com/reference/orders#getorder) API, appending the order ID to the URL.

The fields and their respective values will be inside the `customData` object.
