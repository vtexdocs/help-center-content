---
title: 'Error when viewing the Call center operator profile (restricted orders view)'
id: 7aKQPtGvzYBaRksiuBa4YJ
status: PUBLISHED
createdAt: 2024-11-05T16:34:35.960Z
updatedAt: 2024-11-05T16:34:37.230Z
publishedAt: 2024-11-05T16:34:37.230Z
firstPublishedAt: 2024-11-05T16:34:37.230Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-when-viewing-the-call-center-operator-profile-restricted-orders-view
locale: en
kiStatus: Backlog
internalReference: 1129938
---

## Summary


To limit a telesales user's access to orders created by the user, you need to give the user the following profile “`Call center operator (restricted orders view)`” However, when you access the profiles screen you will notice that the associated resource “`Only show orders created by the user (via call center)`” is not selected, which gives the impression that the profile does not meet your expectations, but when you validate it by accessing the admin with a user with this profile we see that the behavior is correct, restricting the user's access to orders created by him.


##

## Simulation



Access the New Role screen

Search for `Call center operator (restricted orders view)`_ _

When you access the profile details, you will see that the option “`Only show orders created by the user (via call center)`” is not checked;

Associate a user with this profile;

Now when you access the OMS with the user you associated with the profile in the previous step, you will see that his access is limited to orders that he himself created, exactly as expected, even if in the license manager UI this option is not being displayed correctly.


##

## Workaround


There is no Workaround for this scenario, but the impact is only visual, as the functionality is still ok





