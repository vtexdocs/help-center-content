---
title: "Navigation issues from the MyAccount Menu"
id: 32fJfkxOnaOIXmoATm6NGL
status: PUBLISHED
createdAt: 2025-04-11T16:28:13.873Z
updatedAt: 2025-04-11T16:28:14.746Z
publishedAt: 2025-04-11T16:28:14.746Z
firstPublishedAt: 2025-04-11T16:28:14.746Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: navigation-issues-from-the-myaccount-menu
locale: en
kiStatus: Backlog
internalReference: 1209822
---

## Summary


The VTEX Login App has a feature called accountOptionLinks, that allows to put customized redirect links to myaccount's sections inside the login popover. These links are exhibited once the user is logged in to the webstore. Example:

 ![](https://vtexhelp.zendesk.com/attachments/token/zosxLBGZVqOL0xNQkPDEfheBO/?name=image.png)

However, the navigation from these login popover links isn't working. After clicking, the URL changes in the browser's address bar, but the page isn't rendered. On the other hand, navigation from any other page to 'myaccount' works fine.


##

## Simulation



-

Login to a webstore that has the `accountOptionLinks` feature. Ex:



 ![](https://vtexhelp.zendesk.com/attachments/token/JdhPUya3LJeKRpxwhzfvEA9d3/?name=image.png)

- In the upper right corner, click on user name/avatar icon, a popover will show up. Then click on one of the redirect menu options (in the example below "pedidos"), you'll see that the browser URL will change, but the page won't.

 ![](https://vtexhelp.zendesk.com/attachments/token/plTb6qntOS6aZTxUIdMMfiEaK/?name=image.png)


##

## Workaround


There is no workaround available.




