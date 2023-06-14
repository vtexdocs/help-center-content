---
title: 'How to handle catalog integration timeout errors?'
id: 41SucuGFjn1ndIN2iR1vvr
status: DRAFT
createdAt: 2019-03-20T21:50:15.029Z
updatedAt: 2022-08-24T18:35:53.247Z
publishedAt: 
firstPublishedAt: 2019-03-21T19:24:44.908Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 4iKDU1m0huXy1qFWff7vY5
slug: how-to-handle-catalog-integration-timeout-errors
locale: en
legacySlug: untitled-entry-2019-03-20-at-09-50-15
---

When registering products through [ERP (Enterprise Resource Planning)](https://help.vtex.com/en/tutorial/guia-de-integracao-de-erps-arquitetura-do-catalogo "Integration guide for ERPs - Catalog Architecture") in a store's catalogue, you may notice that the integration won't work at first. Instead, the [API (Application Programming Interface)](https://help.vtex.com/en/tutorial/--3SjAqQ0BeUqu2ge8AiIkmW "API (Application Programming Interface)") returns a `Timeout` error.

Sometimes the answer lies in a simple system issue, regardless of whether or not the integration was correctly configured. In other cases, the error occurs because of a coding problem.  

No matter the scenario, `Timeout` is a way for the system to inform the user that command took more time than expected to complete the required task.

Even though it is considered an "error", getting a `Timeout` is __foreseen__ within the integration flow. Because of this, the code should envision retries. If this were the case, repeat the product registration process normally.

If, even by doing so, the problem still persists, seek the assistance of our support team to evaluate the situation.

