---
title: 'Duplicate transactions being recorded in Google Analytics'
id: 3pBn0BG1cAAqkw6CMEywIs
status: PUBLISHED
createdAt: 2018-11-20T16:44:40.811Z
updatedAt: 2022-12-22T20:54:51.124Z
publishedAt: 2022-12-22T20:54:51.124Z
firstPublishedAt: 2018-11-20T17:05:24.189Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Checkout
slug: duplicate-transactions-being-recorded-in-google-analytics
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Transactions are recorded in Google Analytics based on the confirmed order page (_orderPlaced_). When the customer reaches the page an event is sent to the _Data Layer_, so Google Tag Manager captures this event and triggers the Google Analytics script.

If the customer visits this page over and over again, or even if they reload/update the page, the event is triggered and the data is re-sent to Google Analytics, creating repeated information.

## Simulation

1. Complete an purchase in the store;
2. Access the placed order page repeatedly;
3. Note that these multiple hits have been recorded as completed orders in Google Analytics.

## Workaround

There is no workaround for this type of integration.

One possibility is to avoid integrating frontend transactions with GTM/Javascript. Instead, work with a backend integration (middleware) between VTEX order APIs and the Google Analytics transaction APIs.

