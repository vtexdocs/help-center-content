---
title: 'Inconsistency in transactional email date of orders closed after midnight'
id: 3D3FSEGDPykoUosW4wcwQS
status: PUBLISHED
createdAt: 2018-04-24T20:17:05.814Z
updatedAt: 2022-12-22T14:43:40.128Z
publishedAt: 2022-12-22T14:43:40.128Z
firstPublishedAt: 2018-04-24T20:28:37.511Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Checkout,Message Center,Order Management
slugEN: inconsistency-in-transactional-email-date-of-orders-closed-after-midnight
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Orders that are made after midnight UTC may present an extra day in the transactional e-mails of __Order closed__ and __Payment Approved__.

This scenario happens because of UTC time which may vary according to the local time zone.

## Simulation

- Close an order on 04/23/2018 at 11:56 PM, Brazil time.
- Note that the transactional e-mail address will be dated 04/24/2018. Your test will have one day more the the actual date.
- The approved payment email, which is the one that has the delivery date, will also have one more day.
- In the API, while doing the `Get Order`, the information will also have UTC date and time, for example: `"creationDate": "2018-04-13T02:57:19.2571842+00:00"`

## Workaround

Today there is no workaround for this problem, but we're working to adjust the scenario.


