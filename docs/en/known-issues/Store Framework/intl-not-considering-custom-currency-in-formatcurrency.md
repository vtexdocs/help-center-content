---
title: 'Intl not considering custom currency in formatCurrency'
id: 6uzuilnzwSZ4oQBJqqoZmd
status: PUBLISHED
createdAt: 2023-01-19T15:45:59.663Z
updatedAt: 2023-01-19T15:46:00.490Z
publishedAt: 2023-01-19T15:46:00.490Z
firstPublishedAt: 2023-01-19T15:46:00.490Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: intl-not-considering-custom-currency-in-formatcurrency
locale: en
kiStatus: Backlog
internalReference: 736695
---

## Summary



In some store locales, the Intl formatter displays the wrong currency symbol, not considering the one passed through the culture


https://github.com/vtex-apps/format-currency/blob/master/react/formatCurrency.ts


##

## Simulation


Set a trade policy locale and a custom currency and call the function formatCurrency from format-currency, it will not display properly because intl uses the locale to define (it happens more often in mobile)


##

## Workaround


It is possible to implement custom price components with a different currency symbol.

