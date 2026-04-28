---
title: 'Error 404 when trying to cancel order. What to do?'
id: 7re22Xm5MswgmkgKiyiygE
status: PUBLISHED
createdAt: 2018-02-19T19:22:21.391Z
updatedAt: 2023-03-22T20:05:41.355Z
publishedAt: 2023-03-22T20:05:41.355Z
firstPublishedAt: 2018-02-19T19:36:07.899Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slugEN: error-404-when-trying-to-cancel-order
locale: en
legacySlug: error-404-when-trying-to-cancel-order
---

When attempting to cancel an order at the **Orders** module, sometimes the system returns error 404. We will see in this article:

- How to identify the error
- What to do when this error happens

### How to identify the error

As explained in the article [Checking error details in the orders](/en/docs/tutorials/how-to-check-error-details-in-the-orders), you access the order, as shown below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Click the desired order.
3. Click `View Interactions`.

Verify that in the `Starting Cancellation` status, the message contains an error in the following format:

`The 'abc' call to the 'xyz' service has returned status HTTP '404 (NotFound)'`

It means that the request to the resource of an external service has returned an HTTP '404 (NotFound)' status.

### What to do when this error happens

If an error message like the one mentioned is displayed in the order detail, it's because the API of the service integrated to VTEX is returning a 404 error for the order you are trying to cancel.

That is, the operation can not be completed because the external service does not return the expected result, therefore, the order status cannot change at VTEX.

In such case, you should contact this external service.
