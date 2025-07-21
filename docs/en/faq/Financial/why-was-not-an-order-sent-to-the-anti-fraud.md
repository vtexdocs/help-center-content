---
title: 'Why was not an order sent to the anti-fraud?'
id: 5zznO7GMtUYKCkIKyc84II
status: PUBLISHED
createdAt: 2018-02-16T15:50:02.020Z
updatedAt: 2019-12-31T14:25:21.793Z
publishedAt: 2019-12-31T14:25:21.793Z
firstPublishedAt: 2018-02-16T16:16:00.358Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: why-was-not-an-order-sent-to-the-anti-fraud
locale: en
legacySlug: why-was-not-an-order-sent-to-the-anti-fraud
---

Whenever a payment is made, the payment gateway connector performs some initial validations to proceed with the payment. At this point, the connector waits for responses regarding its validations.

After several attempts, if you don't get the expected responses, the payment and the order are both canceled. Orders in this situation are not sent to the anti-fraud.

<div class = "alert alert-warning">
You can not resubmit a canceled order to the anti-fraud.
</div>
