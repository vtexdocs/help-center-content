---
title: "Checkbox for 'Apply discount only with selected carrier' does not persist in UI"
id: 2gcsCgGhE4V1Hbp4ZkNO78
status: PUBLISHED
createdAt: 2024-08-21T20:17:29.685Z
updatedAt: 2024-08-21T20:17:30.499Z
publishedAt: 2024-08-21T20:17:30.499Z
firstPublishedAt: 2024-08-21T20:17:30.499Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: checkbox-for-apply-discount-only-with-selected-carrier-does-not-persist-in-ui
locale: en
kiStatus: Backlog
internalReference: 1085241
---

## Summary


There is an issue in the tax module where the option "Apply the discount only when one of the above carriers is selected by the customer" does not remain checked in the UI, even though it is correctly set via API.


##

## Simulation



1. Navigate to the tax module in the admin.
2. Attempt to check the option "Apply the discount only when one of the above carriers is selected by the customer."
3. Save the changes and observe that the checkbox does not remain selected.
4. Verify via the API that the option is correctly marked as `true`.


##

## Workaround


The issue is purely visual. The checkbox state is correctly reflected via the API, and the discount is applied as expected during checkout. Therefore, no workaround is necessary, as the functionality is not impaired.





