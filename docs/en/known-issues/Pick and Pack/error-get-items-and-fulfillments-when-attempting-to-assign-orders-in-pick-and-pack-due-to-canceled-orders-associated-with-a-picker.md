---
title: "“Error get items and fulfillments” when attempting to assign orders in Pick and Pack due to canceled orders associated with a Picker"
id: 5nLx5LYiu1cGHBMlHVmkK
status: PUBLISHED
createdAt: 2025-07-22T14:13:07.224Z
updatedAt: 2025-07-24T17:48:47.600Z
publishedAt: 2025-07-24T17:48:47.600Z
firstPublishedAt: 2025-07-22T14:13:07.800Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: error-get-items-and-fulfillments-when-attempting-to-assign-orders-in-pick-and-pack-due-to-canceled-orders-associated-with-a-picker
locale: en
kiStatus: Backlog
internalReference: 1263897
---

## Summary



When attempting to assign new orders to a specific Picker in the Pick and Pack module, the system displays the error message: “Error get items and fulfillments.” This issue is caused by canceled orders that remain associated with the Picker. Even if the order being processed is not canceled, the mere presence of canceled orders linked to the Picker’s profile triggers the error, preventing the assignment of new orders. Other Pickers, without such canceled order associations, do not experience this issue.


##

## Simulation




1. Log in to VTEX admin as the affected Picker.
2. Access the Pick and Pack module.
3. Attempt to assign a new order to the Picker.
4. The system returns the error message “Error getting items and fulfillment.”
5. Assigning orders to other Pickers (not linked to canceled orders) functions as expected.


##

## Workaround


We currently don't have a workaround for this issue. A product ticket needs to be opened.

- Use alternative Pickers not associated with canceled orders to assign and process new orders, as the error is specific to Pickers with canceled orders attached.
- If it is necessary to use the affected Picker, contact VTEX Support, providing evidence (HAR file and/or video) showing the error scenario, and the Picker details.
- There is no definitive workaround as of now; in urgent cases, temporarily reassign tasks to other Pickers while awaiting support intervention.





