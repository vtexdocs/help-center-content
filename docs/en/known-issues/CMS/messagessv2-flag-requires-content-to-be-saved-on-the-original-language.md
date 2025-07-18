---
title: "MessagessV2 flag requires content to be saved on the original language"
id: 4mQuhUYT5zcMddid8mcWMl
status: PUBLISHED
createdAt: 2025-07-18T12:52:26.344Z
updatedAt: 2025-07-18T12:52:27.187Z
publishedAt: 2025-07-18T12:52:27.187Z
firstPublishedAt: 2025-07-18T12:52:27.187Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: messagessv2-flag-requires-content-to-be-saved-on-the-original-language
locale: en
kiStatus: Backlog
internalReference: 1260018
---

## Summary



When a multilanguage store has the MessagesV2 Enable New Page Translation Configuration flag, an issue happens on the site editor. If the client tries to save content in one of the locales that is not the main one, it might receive an error of: Something Went Wrong.
 ![](https://vtexhelp.zendesk.com/attachments/token/QOndCdSMiZtiGHYTBf0sYstQd/?name=image.png)
This error is related to the message: "Original content not found".

But with this flag active, this content is not required to be saved in the original locale for use. So it should not be required to save the content.


##

## Simulation



- Have a store with multiple locales under the same binding
- Try saving a content in a locale that is not the main one.
- If you open the Network tab in the Dev Tools it will show the "Original content not found" in an request.


##

## Workaround


We have an beta version of the pages-graphQL, please open a ticket to request its installation.





