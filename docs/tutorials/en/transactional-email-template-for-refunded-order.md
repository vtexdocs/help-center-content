---
title: 'Transactional email template for refunded order'
id: 5uy6FCBb6DLyIJlSDeM10G
status: PUBLISHED
createdAt: 2020-09-08T12:27:15.441Z
updatedAt: 2020-10-05T12:51:52.381Z
publishedAt: 2020-10-05T12:51:52.381Z
firstPublishedAt: 2020-09-08T12:51:39.203Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: transactional-email-template-for-refunded-order
legacySlug: transactional-email-template-for-refunded-order
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

When the amount paid for an order is refunded to the customer, VTEX automatically sends an email to that customer, notifying them that the refund was successful. You can disable or customize the template for this email in the [Message Center](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH).

## Template customization

To do this, enter the Message Center and search for the **Order Refund Customer** template. Or search for the template key: `vtexcommerce-order-refunded`. Read our [Message Center guide](https://help.vtex.com/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO) to learn how to customize transactional email templates.

## Email trigger event

The refunded order email is triggered when the store sends a return invoice notification. This sending takes place through the API call [Order Invoice Notification](https://developers.vtex.com/reference/invoice#invoicenotification), with the `type` field containing the value `input`.

In the Admin, this event is triggered when the **Return items** button is clicked on the order details screen.
