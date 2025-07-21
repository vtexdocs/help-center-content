---
title: "Infinite Login Loop in Pick and Pack"
id: 6BHXEZeLc4ZIo9XJ6abfng
status: PUBLISHED
createdAt: 2025-04-07T20:57:54.309Z
updatedAt: 2025-04-08T00:37:20.769Z
publishedAt: 2025-04-08T00:37:20.769Z
firstPublishedAt: 2025-04-08T00:37:20.769Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: infinite-login-loop-in-pick-and-pack
locale: en
kiStatus: Backlog
internalReference: 1206772
---

## Summary


An issue was observed where the **Pick and Pack** app login would remain stuck in a loading state, preventing users from accessing the system. After investigation, no errors were found in the application or backend. The issue was related to **locally stored browser data** such as cookies, cache, or local storage.


##

## Simulation



- Access the app at: https://picking.pickingnpacking.com/
- Attempt to log in using valid credentials.
- The login screen remains loading and does not complete.
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-b69bd53f-4385-4f00-94f7-299f63b07c7d/image.png)


##

## Workaround


Yes, the following actions can help resolve the issue:

- Clear **cookies** and **site data** (including cache and local storage).
- Use the browser in **Incognito/Private mode**.
- Try accessing from a different **browser or device**.
- Ensure the **system time and time zone** are correctly set.
These steps refresh the authentication environment and allow successful access.





