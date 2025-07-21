---
title: "Checkout doesn't consider locale to translate API errors"
id: 4JbEQJhiodzeWdXx66aNpT
status: PUBLISHED
createdAt: 2025-01-24T18:40:15.876Z
updatedAt: 2025-01-24T18:40:16.605Z
publishedAt: 2025-01-24T18:40:16.605Z
firstPublishedAt: 2025-01-24T18:40:16.605Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-doesnt-consider-locale-to-translate-api-errors
locale: en
kiStatus: Backlog
internalReference: 1168499
---

## Summary


The system looks for the language set in `clientPreferencesData.locale` to translate the checkout pages. The errors returned in the API aren't translated if the sales channel related to the language is not sent as a parameter in the API request.


##

## Simulation


In a store with a multi-language configuration, access the checkout using a locale different from the main sales channel.
Force an error such as adding more quantity of an item as it has for inventory.
A pop-up error will be shown not translated for the chosen locale.


##

## Workaround


Send the sales channel related to the chosen locale as a parameter for all API requests in the checkout UI.





