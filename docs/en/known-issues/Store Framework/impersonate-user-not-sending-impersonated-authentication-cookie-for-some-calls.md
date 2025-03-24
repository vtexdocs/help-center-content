---
title: 'Impersonate user not sending impersonated authentication cookie for some calls'
id: 3e5CZqPbsTRbhDz8W1c0p4
status: PUBLISHED
createdAt: 2023-04-13T21:24:06.328Z
updatedAt: 2023-04-13T21:24:06.788Z
publishedAt: 2023-04-13T21:24:06.788Z
firstPublishedAt: 2023-04-13T21:24:06.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: impersonate-user-not-sending-impersonated-authentication-cookie-for-some-calls
locale: en
kiStatus: Backlog
internalReference: 790185
---

## Summary


When you are in telemarketing access and try to impersonate access of a user that has an access to a trade policy with restrictions, some graphql layers are not sending the impersonated user cookie, causing a forbidden access response from APIs


##

## Simulation



1. Create an admin user with call center access
2. Create a TP with a restriction
3. Create a user into the account and grant access to the closed TP condition through the master data
4. Log into the account with the call center user-created at step 1
5. Impersonate the user created at step 3
6. Check any PDP

The expected behavior is not found on page, due to the authentication used is not allowed to access impersonated's user TP and we are not sending the impersonated session for some Graphql calls


##

## Workaround




1. Create a user in the store with the same email from the admin's access
2. Grant access to the tp condition for the admin's email

With that, you will be able to access impersonated's user conditions





