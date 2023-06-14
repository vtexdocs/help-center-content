---
title: Why isn’t the order canceled on Walmart?
id: frequentlyAskedQuestions_680
status: DRAFT
createdAt: 2017-04-27T22:30:09.292Z
updatedAt: 2020-01-09T15:46:16.410Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:27.310Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-isnt-the-order-canceled-on-walmart
legacySlug: why-isnt-the-order-canceled-on-walmart
---

When the marketplace integrates with Walmart, order integration is the responsibility of the Walmart integrator. So, when an order is canceled, Walmart receives notification, but there may be a breakdown in communication.

When this happens, the order retains the status of Iniciando cancelamento na VTEX and when another attempt is made to cancel it, the following message is retuned:

`System.AggregateException: One or more errors occurred. ---&gt; System.InvalidOperationException: **The character set provided in ContentType is invalid. Cannot read content as string using an invalid character set.** ---&gt; System.ArgumentException: **'"UTF-8"' is not a supported encoding name. **at System.Globalization.EncodingTable.internalGetCodePageFromName(String name) at System.`

To correct this type of scenario, the order has to be directly aligned with the Walmart technical team, so that VTEX can then try to cancel it again.

