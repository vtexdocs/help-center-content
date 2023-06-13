---
title: The Transaction UI currently has a limitation where it cannot display logs from /interactions if the payload exceeds 5000 lines.
id: 1hfRLo1OBLqlsR70Os9J7L
status: PUBLISHED
createdAt: 2023-03-27T13:40:46.551Z
updatedAt: 2023-03-27T13:40:47.042Z
publishedAt: 2023-03-27T13:40:47.042Z
firstPublishedAt: 2023-03-27T13:40:47.042Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-transaction-ui-currently-has-a-limitation-where-it-cannot-display-logs-from-interactions-if-the-payload-exceeds-5000-lines
kiStatus: Backlog
internalReference: 778408
---

## Summary


Currently, the /interactions API can only retrieve a maximum of 5000 lines from the S3 file where all the data is stored. This can create an issue when a transaction generates logs that exceed this limit.


##

## Simulation


If a transaction generates logs exceeding the 5000-line limit, the /interactions API cannot retrieve all the data.


##

## Workaround


If you require the missing logs for investigating an issue, please get in touch with our support team to request an audit directly from the S3 file. Please note that this operation incurs a significant cost so our team will analyze and fetch this data when necessary.





