---
title: 'Scheduled automatic capture does not appear.'
id: 1cuvGbgUvd1ATeHEG6Il98
status: PUBLISHED
createdAt: 2024-10-22T19:54:53.978Z
updatedAt: 2024-11-01T13:58:03.201Z
publishedAt: 2024-11-01T13:58:03.201Z
firstPublishedAt: 2024-10-22T19:54:55.533Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: scheduled-automatic-capture-does-not-appear
locale: en
kiStatus: Backlog
internalReference: 1121837
---

## Summary


The option 'Scheduled: Schedules The Automatic Capture' does not appear in the settings for any Provider that has this configuration enable.
According to the 'Custom Auto Capture Feature' documentation, the 'Scheduled: Schedules The Automatic Capture' should be the configuration:
https://developers.vtex.com/docs/guides/custom-auto-capture-feature


##

## Simulation



1. Access the provider's page in the admin panel.
2. Check that there are only 4 options under Automatic Settlement, not 5. The missing option is 'Scheduled: Schedules The Automatic Capture'.


##

## Workaround



> **autoSettle:** The value 4 represents the scheduled capture option.

Here is the API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#put-/api/pvt/affiliations/-affiliationId-

    { "implementation": "Vtex.PaymentGateway.Connectors.TestConnector", "name": "Test Connector - KI", "configuration": [{ "name": "autoSettle", "value": "4", "valueKey": null }, { "name": "autoSettleDelay", "value": "20", "valueKey": null } ... << other configs>>> ...], "isdelivered": true, "isConfigured": true}






