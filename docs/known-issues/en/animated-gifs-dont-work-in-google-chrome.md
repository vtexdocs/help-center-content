---
title: 'Animated GIFs don’t work in Google Chrome'
id: 62tEP9HJo4e4i202mmi0W0
status: PUBLISHED
createdAt: 2017-08-16T21:33:58.098Z
updatedAt: 2022-12-22T14:55:57.949Z
publishedAt: 2022-12-22T14:55:57.949Z
firstPublishedAt: 2017-08-16T21:49:12.726Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal
slug: animated-gifs-dont-work-in-google-chrome
kiStatus: Fixed
internalReference: 
---

## Summary

In compatible browsers, the site images are converted into a WEBP format. The format allows more compacting without serious loss of quality, and lets the pages load more quickly. Conversion is done before the files are delivered (server side).

GIF files with animation are presenting problems for conversion, with only the first frame being shown and the animation being lost.

## Simulation

1. Upload an animated GIF;
2. Access via Google Chrome.

## Workaround

So as to avoid losing context when there is no animation, we suggest that the first frame of the GIF should be a complete image, serving as fallback if the above problem occurs.

A looped GIF, for example, can have a frame in the middle of the animation as the first in the sequence, so that the animation can start being shown in the middle, but without affecting the idea being presented.

### Updating: problem resolved

As an immediate measure, do not convert GIF to WEBP, and in this way you can avoid these problems. The animated WEBP format exists and is supported, and may be made available at some future time.

Since these are static files the images have an indefinite time cache as long as they are not altered. Because of this, the GIFs existing in the system will be delivered in WEBP as soon as there is a cache.

To force cache renewal, you must resend the image file through the CMS (upload of images). One hour after the upload the cache will expire and the GIF will no longer be supplied as WEBP.

