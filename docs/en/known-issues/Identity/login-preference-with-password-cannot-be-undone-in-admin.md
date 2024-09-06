---
title: 'Login preference with password cannot be undone in Admin'
id: 5OPVJusw14TQzKdAVS71wx
status: PUBLISHED
createdAt: 2024-04-22T13:30:15.401Z
updatedAt: 2024-05-06T20:40:26.631Z
publishedAt: 2024-05-06T20:40:26.631Z
firstPublishedAt: 2024-04-22T13:30:16.436Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: login-preference-with-password-cannot-be-undone-in-admin
locale: en
kiStatus: Backlog
internalReference: 1020548
---

## Summary


When a user logs on to the VTEX platform for the first time (Admin), they are asked to choose their login preference for the next time they log on. They can then choose between entering their e-mail address and password, or entering a code that will be sent to their e-mail address;

However, when the user chooses to enter their e-mail address and password, they are unable to undo this choice, as it is an irrevocable choice at UI level, and a systemic action is required to undo this choice.


##

## Simulation


**NOTE**: To simulate this scenario, you must be logging in for the first time;

Log in to admin

Enter your e-mail address and create a password;

At this point you will be asked if you want to continue receiving the access code or if you want the system to always ask for your e-mail address and password.

Request that you always log in using your e-mail address and password.

The next time you log in, you won't be able to undo your login choice and you will always be asked for your e-mail address and password.


##

## Workaround


In order for the user to be able to make a new choice, it is necessary to ask the engineering team to revoke the preference saved in the user's profile, so that on their next login they will be asked again about their login preference and can make a new choice




