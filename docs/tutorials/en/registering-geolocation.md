---
title: 'Registering geolocation'
id: tutorials_138
status: PUBLISHED
createdAt: 2017-04-27T22:17:36.462Z
updatedAt: 2023-08-25T14:52:20.340Z
publishedAt: 2023-08-25T14:52:20.340Z
firstPublishedAt: 2017-04-27T23:00:44.871Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: registering-geolocation
locale: en
legacySlug: registering-geolocation
subcategory: 5ckGPo3O5OG4AESKucmAaS
---

Geolocation is the registration of delivery locations based on the latitude and longitude of their addresses. So, we can draw polygons for a specific logistic service, typically used in rural and industrial areas, where the division is made by lots, for example, or in hazardous areas, where it becomes necessary to avoid determined sites.

Its structure is dynamic, and a polygon can easily and literally be drawn on the map area in order to be delimited. The created polygon will be used on the freight spreadsheet registered on the carrier section.

## How to generate a polygon

Access the [Generate your polygons with geojson.io](http://geojson.io/#map=2/20.0/0.0) link. Then, the map where you can draw the area you want to cover will appear. As the polygon is generated, the right side of the screen will display the JSON that represents the drawn area. It is with this JSON that the system will understand the area of delivery.

1. In the VTEX Admin, go to **Store settings > Shipping > Geolocation shipping**, or type *Geolocation* in the search bar at the top of the page.  
2. Click on the **Generate your polygons with geojson.io** link.
3. Find your delivery region on the map.
4. Select between **Draw a polygon** or **Draw a rectangle** options. These options are just below the magnifying glass, on the right side of the map.
5. Click on the map the place you want to be the first point of the polygon, then continue clicking to draw an area, so that the last line meets the first point.
6. With the polygon ready, copy the JSon created on the right side of the screen and save it to a file.

This JSON will be used to add the polygon to the platform, that will translate that language to understand which Zip Codes are included in your area.

>❗ When generating a polygon, it is not possible to delimit overlapping areas, meaning it is not possible to overlap geographic coordinates.

## How to add a polygon

When adding a polygon, name it in a way it can be identified later on the freight spreadsheet, enabling consultation by Zip Code.

1. In the VTEX Admin, go to **Store settings > Shipping > Geolocation shipping**, or type *Geolocation* in the search bar at the top of the page.    
2. Click on** Add New Polygon**.
3. Type on the **ID** field any information that represents the polygon and the area it covers (in string format - letter or number - without space). Example: `ZonaLeste1.`
4. On the Coordinates field, paste the JSON copied in the previous step, selecting from the second square bracket located after the item **coordinates**, so that in the beginning of code there are two brackets, as well as in the end. See example below.
5. Finally, click on **Save**.  

Example:

```
[
[-43.199872970581055,-22.95491586987507],
[-43.18270683288574,-22.950331824285765],
[-43.16760063171387,-22.959736853678606],
[-43.18777084350586,-22.973013428819623],
[-43.199872970581055,-22.95491586987507]
];
```

Done! Now just use this same ID in the freight spreadsheet, at the **PolygonName** column. 

>⚠️ It's important to pay attention to the filling, because this time the carrier will not use the **ZipCodeStart** and **ZipCodeStart** columns, which should be left blank.

On the [Checkout tab](https://help.vtex.com/en/tutorial/geolocalizacao-no-checkout/) at **Store Settings > Storefront > Checkout**, the API Key field must be filled in with the same key that was used to enable geolocation.

Please also enable all Google Cloud Platform APIs to ensure that the key works:

*   [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
*   [Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
*   [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

## How to edit a polygon

If you need to change some delivery area of a polygon that already exists, you can edit the polygon as simply as you created it.

1. In the VTEX Admin, go to **Store settings > Shipping > Geolocation shipping**, or type *Geolocation* in the search bar at the top of the page.    
2. Click to **Edit** the desired polygon.
3. Click on the **Generate your polygons with geojson.io** link.
4. Edit the picture on the map.
5. Copy the coordinates.
6. Click on the **Change coordinates** link, which is just below that field.
7. Paste the new values.
8. Click on **Save**.

Here the process is even simpler, because you don't need to change any information on the freight spreadsheet, since the system performs the search by ID.

<div class = "alert alert-warning"> If the carrier and freight worksheet were created before registering the Polygon, we recommend that you edit the carrier that has a link with this Polygon to update the relationship. With this after Creating or Modifying a Polygon, open the carrier and click Save, just to raise awareness of an update.
</div>
