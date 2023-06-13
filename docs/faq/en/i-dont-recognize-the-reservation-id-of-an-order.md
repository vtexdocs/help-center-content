---
title: I don't recognize the reservation ID of an order. What's happened?
id: tja793G4XAWI2K8uIC4uW
status: PUBLISHED
createdAt: 2018-03-05T21:07:36.301Z
updatedAt: 2023-03-22T20:28:58.311Z
publishedAt: 2023-03-22T20:28:58.311Z
firstPublishedAt: 2018-03-05T22:28:55.349Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slug: i-dont-recognize-the-reservation-id-of-an-order
legacySlug: i-dont-recognize-the-reservation-id-of-an-order
---

This might be happening because the orders you are viewing have not yet entered on the Integration tool, responsible for monitoring and writes marketplaces interactions log. This way, the ID numbers you see in your Admin still being those used by the marketplace, not those represented in VTEX standard and recognized by you in your order.

When this happens, you may contact the marketplace or wait a bit longer to verify if the order information was updated. If it did not entered the in Integrations tool, it might have been canceled or failed to be created.

If you prefer, check your order reservation information via [API](https://developers.vtex.com/reference/reservations#createreservation).
