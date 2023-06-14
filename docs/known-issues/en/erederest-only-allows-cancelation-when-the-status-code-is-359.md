---
title: ERedeRest only allows cancelation when the status code is 359
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2023-01-26T18:29:36.467Z
publishedAt: 2023-01-26T18:29:36.467Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erederest-only-allows-cancelation-when-the-status-code-is-359
kiStatus: Backlog
internalReference: 740084
---

## Summary


Our legacy connector ERedeRest performs a cancelation through a request to the provider and expects a statusCode=359 which means the cancelation was successful. Any other code means for our gateway that the status is undefined even though, in some cases, it means the refund/cancelation request was also successful, thus, leading us to retry the cancelation however getting stuck in this step since the cancelation has already been completed on the provider side.


##

## Simulation


It cannot be simulated as we depend on the provider's response.


##

## Workaround


Not available. The provider must respond with 359 on the first or subsequent requests.




