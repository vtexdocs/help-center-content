---
title: "Transactions filter by date in Admin not working"
id: 3uBT1svILMV964MvuDAUUO
status: PUBLISHED
createdAt: 2025-02-17T15:39:00.833Z
updatedAt: 2025-02-17T15:39:01.488Z
publishedAt: 2025-02-17T15:39:01.488Z
firstPublishedAt: 2025-02-17T15:39:01.488Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-filter-by-date-in-admin-not-working
locale: en
kiStatus: Backlog
internalReference: 1180441
---

## Summary


When a date filter is selected at Transactions Admin, all transactions with that date not null are shown as a response, proving that the filter doesn't work as expected.


##

## Simulation


1. Go to any store admin > orders > transactions;
2. Select the icon to filter the transactions;

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Payments/transactions-filter-by-date-in-admin-not-working_1.png)

3. Select any option from "Date" menu. In this case, it was selected "Cancellation Date > Yesterday";

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Payments/transactions-filter-by-date-in-admin-not-working_2.png)

4. You will see that the list returns all transactions that have a "cancellation date", regardless of the "yesterday" filter.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Payments/transactions-filter-by-date-in-admin-not-working_3.png)

##

##

## Workaround


There is no workaround for this KI.





