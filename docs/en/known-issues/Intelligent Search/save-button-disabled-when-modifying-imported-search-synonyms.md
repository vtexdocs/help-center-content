---
title: 'Save button disabled when modifying imported search synonyms'
id: 1nb1JboRv5YuLyAT50YcYx
status: PUBLISHED
createdAt: 2022-04-27T14:50:02.276Z
updatedAt: 2022-11-25T21:57:47.416Z
publishedAt: 2022-11-25T21:57:47.416Z
firstPublishedAt: 2022-04-27T14:50:02.697Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: save-button-disabled-when-modifying-imported-search-synonyms
locale: en
kiStatus: Backlog
internalReference: 508893
---

## Summary


When trying to make any change in a synonym config that was previously imported by a csv file, the save button is always disabled, no matter what change:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)​

This is happening because when importing a file, locale information is not being automatically populated, as per the example below:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)​



## Simulation


Import a csv file containing a synonym, try to modify any information of the uploaded synonym in admin and see that you are not allowed to save.



## Workaround


Delete the imported synonym and create the same one manually.

