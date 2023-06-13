---
title: Amazon category implementation
id: 5drX2V0avfk1X2llMyTlK1
status: PUBLISHED
createdAt: 2022-03-25T11:33:04.920Z
updatedAt: 2022-12-02T18:00:24.056Z
publishedAt: 2022-12-02T18:00:24.056Z
firstPublishedAt: 2022-03-25T11:33:15.226Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: amazon-category-implementation
kiStatus: Backlog
internalReference: 549924
---

## Summary



We need to fix some categories issues for Amazon integration, need to implement category 167. 2668 and 5181



## Simulation



Inside bridge - product Menu for Amazon products you will see below error:


- Category 167 not found in browse node mapping for SKU's department specification, choose a more specific global category
- Category 2668 not found in browse node mapping for SKU's department specification, choose a more specific global category
- Category 5181 not found in browse node mapping for SKU's department specification, choose a more specific global category




## Workaround



As a workaround changing the global category inside the product may solve this issue.

