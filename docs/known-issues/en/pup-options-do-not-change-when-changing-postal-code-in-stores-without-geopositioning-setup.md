---
title: 'PUP options do not change when changing postal code in stores without geopositioning setup'
id: 6adZlmhb88zZsqifmWubO1
status: PUBLISHED
createdAt: 2022-08-30T20:06:15.411Z
updatedAt: 2022-11-25T21:50:10.149Z
publishedAt: 2022-11-25T21:50:10.149Z
firstPublishedAt: 2022-08-30T20:06:15.864Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pup-options-do-not-change-when-changing-postal-code-in-stores-without-geopositioning-setup
locale: en
kiStatus: Fixed
internalReference: 648604
---

## Summary



When the store does not use a geolocalization setup and the user changes the postal code in the PUP component, it sends only the zip code to our backend which does not affect the distance actually, because this value is calculated based on the geoCoordinates, thus, even though the postal code is different, it maintains the same pickupDistance calculated previously.

Furthermore, if the user chooses the PUP and changes the postal code, in addition to not calculating the new distance as mentioned, it also allows passing postal codes that were not previously accepted.



## Simulation



Go to a store without a geolocation setup and enter a valid postal code in the PUP. After that change the zip code to a new one, so you can see the distance doesn't change on the UI.



## Workaround



No workaround.

