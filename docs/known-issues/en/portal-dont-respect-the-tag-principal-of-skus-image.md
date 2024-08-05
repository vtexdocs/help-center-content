---
title: "Portal don't respect the tag "Principal' of SKU's Image"
id: 2ej5V3eIGgkUoo0Omgacc6
status: CHANGED
createdAt: 2017-04-17T18:35:42.842Z
updatedAt: 2022-12-08T15:17:57.223Z
publishedAt: 2022-12-08T15:17:50.706Z
firstPublishedAt: 2017-04-17T19:13:01.532Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: portal-dont-respect-the-tag-principal-of-skus-image
locale: en
kiStatus: Backlog
internalReference: 712443
---

## Summary


A store needs to configure the **Principal** image regardless of the order in which it was loaded into the system. Currently the system does not respect the **Principal** tag and ends up taking the first registered image as the main one.



##

## Simulation



1. Configure two imagens in the SKU.

2. Try to change de main image since the button **Principal** in the list of images.

3. Look in the store front if the change works.



##

## Workaround


Always set the image you want to Main as the first registered image for the SKU. It involves more work on having to erase the images and reload them.

