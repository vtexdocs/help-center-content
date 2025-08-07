---
title: "Error message displayed when adding or removing collections in Promotions"
id: 5AsFQ2TTsThgMDDIQumcGO
status: PUBLISHED
createdAt: 2024-09-10T12:49:19.503Z
updatedAt: 2024-09-10T12:49:21.587Z
publishedAt: 2024-09-10T12:49:21.587Z
firstPublishedAt: 2024-09-10T12:49:21.587Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-message-displayed-when-adding-or-removing-collections-in-promotions
locale: en
kiStatus: Backlog
internalReference: 1095440
---

## Summary


When adding or removing collections in promotions, an error message is displayed in the UI: "Erro - Can’t create search criteria!" Despite the error message, the changes are saved successfully, and a "Promoção salva com sucesso!" message appears beneath the error. The problem is observed specifically when using the "_Different from:"_ selector with more than one collection listed. Notably, the error does not occur when saving a promotion with the _"Different from:"_ selector and only one collection listed.


##

## Simulation



1. Access the promotions management area in the admin interface.
2. Create or edit a promotion.
3. Use the "_Different from:"_ selector to add more than one collection.
4. Attempt to save the promotion.
**Expected Behavior**: The promotion should save without error messages.
**Observed Behavior**: An error message "Erro - Can’t create search criteria!" appears, but the promotion is saved successfully.
5. Test the scenario with only one collection listed under the "_Different from:"_ selector.
**Observed Behavior**: The error does not occur, and the promotion saves without issues.


##

## Workaround


The promotion is actually saved correctly despite the error message. Users can ignore the error message and validate that the changes were applied by reopening the promotion settings.





