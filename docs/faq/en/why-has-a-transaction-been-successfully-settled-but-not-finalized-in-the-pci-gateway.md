---
title: Why has a transaction been successfully settled but not finalized in the Payments?
id: 5kOSpUYvTyuUKOOws2A8Me
status: PUBLISHED
createdAt: 2017-05-22T17:47:40.705Z
updatedAt: 2023-03-31T18:32:08.359Z
publishedAt: 2023-03-31T18:32:08.359Z
firstPublishedAt: 2017-06-13T15:25:12.427Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: why-has-a-transaction-been-successfully-settled-but-not-finalized-in-the-pci-gateway
legacySlug: why-has-a-transaction-been-successfully-captured-but-not-finalized-in-the-pci-gateway
---

To answer this question, we have to understand the difference between `Approved` and `Finished` status in the Payments. A transaction appears as `Approved` when the risk has been analyzed and the transaction approved. 

After approval, the amount of the transaction is settled. However, the status of the transaction does not then automatically change to `Finished`. For this to happen, the Tax Receipt for the order has to be entered in the **Orders** module.

After this has been done, the **Orders** module communicates with Payments, which alters the status to `Finished`.
