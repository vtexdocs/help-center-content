---
title: 'Error listing workspace dependencies" when trying to access an account'
id: 668VbRnIy8mdfMFyRH9ehX
status: PUBLISHED
createdAt: 2025-07-16T13:57:30.593Z
updatedAt: 2025-07-24T17:35:42.873Z
publishedAt: 2025-07-24T17:35:42.873Z
firstPublishedAt: 2025-07-16T13:57:31.816Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-listing-workspace-dependencies-when-trying-to-access-an-account
locale: en
kiStatus: Backlog
internalReference: 1260934
---

## Summary


When you try to access an account that has been a long time without access or has not been updated, you can see the following error:


    {"code": "route_map_error","message": "Error fetching source data for route map: Error listing workspace dependencies: (500 generic_error at http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Error listing workspace dependencies: Failed to get installed dependencies: Failed to read data from cache: Unable to fetch data from remote cache: got 4 elements in cluster info address, expected 2 or 3","requestId": ""}


This happens because the housekeeper doesn't update these accounts, since they are for a long time without access. The issue is related to an update on our cache infrastructure.


##

## Simulation


It is hard to simulate; you would need an old account. This issue will also prevent access to the admin of the account; it is not possible to log in using the CLI as well. It is something that is more likely to happen on franchise or seller accounts.


##

## Workaround


Open a ticket to PS Apps so we can perform the workaround for this.





