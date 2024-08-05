---
title: "Settings UI doesn't update 'expiration period' of quotes"
id: 4CmuAYwDn7tcCiR9DQHSFb
status: PUBLISHED
createdAt: 2023-08-07T19:42:22.810Z
updatedAt: 2024-05-08T18:04:41.362Z
publishedAt: 2024-05-08T18:04:41.362Z
firstPublishedAt: 2023-08-07T19:43:56.788Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: settings-ui-doesnt-update-expiration-period-of-quotes
locale: en
kiStatus: Backlog
internalReference: 876576
---

## Summary


B2B Quote settings UI does not update the expiration period value; it is always 30.


##

## Simulation



- Access the B2B Quotes settings page and change the "expiration period".
- Refresh the page; no changes are applied.


##

## Workaround



- Access GraphQL IDE and select vtex.b2b-quotes-graphql;
- Use the query below to get the expiration date:

    { getAppSettings{ adminSetup { cartLifeSpan } }}

- Send a mutation to update the expiration date to a different value:

    mutation SaveAppSettings($input: AppSettingsInput!) { saveAppSettings(input: $input) { adminSetup { cartLifeSpan } }}{ "input": { "cartLifeSpan": }}





