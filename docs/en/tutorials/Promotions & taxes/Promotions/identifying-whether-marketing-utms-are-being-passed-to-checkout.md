---
title: 'Identifying whether marketing UTMs are being passed to checkout'
id: 6kjHHfOWIgeI26qcQSU4Wg
status: ARCHIVED
createdAt: 2018-02-08T11:52:38.471Z
updatedAt: 2022-07-26T15:37:13.447Z
publishedAt: 
firstPublishedAt: 2018-02-08T18:18:09.369Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: identifying-whether-marketing-utms-are-being-passed-to-checkout
locale: en
legacySlug: identifying-whether-marketing-utms-are-being-passed-to-checkout
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

When the `utm_source`, `utm_campaign` or `utm_medium` parameter is used to load a store page, the system creates a cookie named __IPS__ whose value is equal to the value of the parameter.

The orderForm of orders closed by the user while this cookie doesn't expire will receive this cookie in the request header sent to the checkout.

That is, the moment the user clicks the buy button, the Buy Botton native control (`<vtex.cmc:BuyButton/>`) will perform a POST passing the value of the `utm_source` parameter to the checkout.

With that, checkout will be able to assemble the orderForm considering the marketingData used in the purchase.

### Simulation

To make sure the content of the `utm_source` parameter, for example, is being passed to the checkout, you can follow the steps below:
1. Access any page of the store with the utm in the querystring (eg: {AccountName}.com.br`?utm_source=facebook`)
2. Enter the __developer tools__ (F12 in Chrome, if you are in Windows, or Cmd+Opt+I on a Mac), go to the __Application__ tab, open the store's website cookies and look for the __IPS__ cookie.![utmSource1](//images.contentful.com/alneenqid6w5/2tGleKs2b2Gge8oEoquSGm/17efaf14e42cd655b037c2bd009eb0d6/utmSource1.png)
3. Enter a product page and insert a product into the cart.
4. Enter the cart.
5. Refresh the page, and on the developer tools __Network__ tab, monitor the requests.
6. Select the request __orderForm__.
7. In the preview, open the `marketingData` node.
8. Check the value of the `utmSource` field.![utmSource2](//images.contentful.com/alneenqid6w5/3k5685cAUwy4uk4S2I6qGm/6595f50415b17965047c2023ffb46658/utmSource2.png)

In the example above, note that the value of the `utm_source` parameter was correctly passed to the checkout, which entered this parameter in the orderForm, within the `utmSource` field.

But if the `utmSource` field of the orderForm is empty, it's because the value was not passed to the checkout.

When the value is not passed to the checkout, any benefits linked to the utm_source will __not__ be applied to the orders, and OMS will __not__ register these UTMs as order parameters.

### Why was not the value passed to the checkout?

One of the most common reasons that the marketing context is not passed to the checkout is the __customization of the purchase call__.

As previously stated, the native buy button control (`<vtex.cmc:BuyButton/>`) performs a POST passing all the data needed to the checkout, including the value of the `utm_source`, `utm_campaign` and `utm_medium `.

But if, instead of using this control, your store customized the call and therefore makes the POST of the purchase request on its own, you must remember to __send in this POST all the data that may be useful to assemble the orderForm__ , including the marketing context.

This value can be passed as a querystring or in the body of the request, in the `marketingData` field. For more information, access [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/why-are-the-utms-not-being-applied-to-the-cart).
