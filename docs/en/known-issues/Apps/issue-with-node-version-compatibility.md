---
title: "Issue with Node Version Compatibility"
id: PIg1G3zoOXoVH2GQntcqG
status: PUBLISHED
createdAt: 2025-07-08T14:32:38.708Z
updatedAt: 2025-07-08T14:32:39.524Z
publishedAt: 2025-07-08T14:32:39.524Z
firstPublishedAt: 2025-07-08T14:32:39.524Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: issue-with-node-version-compatibility
locale: en
kiStatus: Backlog
internalReference: 1256617
---

## Summary


Currently, our builder hub runs on image 16.X, meaning that it is only possible to build libraries supported up to that version. Apps using builder 7 run on node 20, however the problem arises when building, as the builder hub is running on version 16, causing an incompatibility issue.


##

## Simulation


When trying to build an app in VTEX. For example, the error is the following:

    @vendor/app@1.X.X: The engine "node" is incompatible with this module. Expected version ">=18.0.0". Got "16.X.X"Found incompatible module.


The module requires Node version 18.0.0 or higher, but the current version being used by the builder is 16.X.X.


##

## Workaround


Since builder-hub is limited to Node 16.X, you need to use packages that have the engine as node >= 16.X. If you're using a specific library, you need to downgrade the library version to a compatible one.





