---
title: 'The holiday is not shown in the list after using the API to create (PUT)'
id: WqzSTP6oFwk4MbGaO5mIU
status: PUBLISHED
createdAt: 2022-05-02T22:26:55.630Z
updatedAt: 2024-02-16T20:28:28.551Z
publishedAt: 2024-02-16T20:28:28.551Z
firstPublishedAt: 2022-05-02T22:26:56.888Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: the-holiday-is-not-shown-in-the-list-after-using-the-api-to-create-put
locale: en
kiStatus: No Fix
internalReference: 571040
---

## Summary



Holiday registration can be done both directly in our admin UI (`/admin/logistics/#/holidays`) as well as using our API.

In this case, the problem arises when using the API and making several requests at the same time _(more or less in the same second)_. This is generating inconsistency in the information caused by a problem in the indexing of the record once it is created.

To detail this scenario a little more, it is important to make a reference to the **individual registration** and the **processing of this registration to be shown in the list** and that our logistics system takes it into account _-confirming here that the holiday will only be taken into account in logistics calculations if in fact this day is shown in the list-_.

When this issue occurs, the individual record is kept, i.e. if they made a **GET by holiday ID**, they will get the details, however, when they made a **GET the list of holidays**, this record will not appear, which means that said record was left inconsistent and there is no way to recover it since each PUT made with the same ID will find an inconsistent record that will not generate an update or reprocessing.



## Simulation



To try to simulate this problem, it is necessary to register several holidays in the same account at the same time. It is possible that one or more of these holidays will be inconsistent.

After that, you can:

1. Validate with the GET by ID
2. Then validate with the GET of the list of holidays or directly in the UI.



## Workaround



We recommend reviewing the following comments:

- On the one hand, to validate the integration and the requests to this API, because for the registration of holidays in the same account it is recommended to have processes that **guarantee prudent time spaces between each PUT**, perhaps thinking about giving a **space of +-15 seconds or even minutes**.
- On the other hand, in case of presenting this behavior, it is possible to send a new record **(PUT) modifying the ID**. This will create a new record that if the previous point is respected, there will be no problem and it will be shown in the list.

