---
title: 'Setting up geolocation at checkout'
id: tutorials_4345
status: PUBLISHED
createdAt: 2017-04-27T21:50:59.353Z
updatedAt: 2023-03-24T14:20:33.982Z
publishedAt: 2023-03-24T14:20:33.982Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: geolocation-at-checkout
locale: en
legacySlug: geolocation-at-checkout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

The purpose of this tutorial is to show you the steps needed to use geolocation at your store checkout. 

This function permits deliveries to use a geographical point as a basis (latitude and longitude) instead of a postal code.

### How does this improve my store?

The geolocation function lets your customers manage their own searches for the required delivery address.

In other words, on checkout they can use a tool with the ability to find addresses on Google Maps with an icon marking the position.

This gives the user visual confirmation that the order will be delivered at the required address. The location information will be completed automatically as soon as the point is loaded on the map.

This function is especially useful in regions where the postal code system is not very accurate.

### Setting up the logistics

To use this function, proceed as follows:

First of all, you must get a Javascript API Key for Google Maps, to permit integration with the Google geolocation service. You can read more about how to do this at:

[https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

Once you have an API Key, proceed as follows:

1. In the VTEX Admin, go to __Store Settings > Shipping > Geolocation Shipping__, or type __Geolocation Shipping__ in the search bar at the top of the page.
2. Enter the API Key in the field indicated and click on __Register Key__.

![Geolocalizacao 1 EN](//images.ctfassets.net/alneenqid6w5/6pPXB9VKz6aQIA8YUWyyKk/ae4f7acd4ed20feac7edf6d27960c902/Geolocalizacao_1_EN.png)

<div class="alert alert-info">
In some countries, Google Maps does not provide high quality mapping. Therefore it is possible that some addresses will be written wrongly, or Google may indicate an incorrect address. In these cases, you must correct the address on the map itself.
  </div>

### Setting up the polygon

For this function to work correctly, you must register the polygons corresponding to the required delivery areas on the map. Then you must associate them with the transport companies making the deliveries, by including the IDs of these polygons in the freight charges table. To this, see the article [Registering geolocation](/en/tutorial/registering-geolocation/).

### Setting up the Checkout

Once you've created the polygon and entered your ID in the shipping worksheet, you'll need to enter the Google Key API in the Checkout settings:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Checkout__.
4. In the __Google Maps API Key__ field insert the API Key given in the logistics step.

![Google map keys](//images.ctfassets.net/alneenqid6w5/5Fly0uJ3DE9SmlK6I1oRNx/a0449abd0a356e5afa7cbb87a7101fc5/google_maps_api_key_en.PNG)

Once the API Key has been included in the Checkout configuration, the geolocation will be visible in your store checkout.

### How does the freight charges search work?

With geolocation at checkout, the freight charges calculation will always give priority to this option, using the polygons including the coordinates of the selected destination. 

So, even if your client wants to use the postal code, geolocation will be the parameter used by the system to calculate the freight charges.
