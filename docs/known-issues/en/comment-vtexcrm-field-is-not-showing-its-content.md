---
title: 'Comment vtexcrm field is not showing its content'
id: 2jI4W9GOzuxyWbHApDVtI5
status: PUBLISHED
createdAt: 2022-04-25T14:19:28.685Z
updatedAt: 2022-11-25T22:12:58.716Z
publishedAt: 2022-11-25T22:12:58.716Z
firstPublishedAt: 2022-04-25T14:19:29.153Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: comment-vtexcrm-field-is-not-showing-its-content
kiStatus: Backlog
internalReference: 565919
---

## Summary



Currently, when saving data in the "Comentar" field in a Master Data form, the inputted comments are not being shown upon saving and refreshing the page.









## Simulation





1. Go to mystore.vtexcrm.com.br
2. Open a CL document (any will do)
3. Open the comment field


 ![](https://vtexhelp.zendesk.com/attachments/token/tUX7c40L6Mucgl7J60Ba4Ysn5/?name=image.png)


4. Try inserting any data in it and save
5. Refresh the page, nothing will be there, albeit the API is showing content.








## Workaround



Create a new field for this data entity as a text type and name it Comment.

Then insert it in the form and you will have a "clone" comment field that is functional.

