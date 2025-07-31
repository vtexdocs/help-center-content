---
title: "Legacy Collections (CMS) Special Character Validation diverges from New Collections"
id: 2Pc1VACj7VF9n1IDtO6Mr4
status: PUBLISHED
createdAt: 2022-10-31T20:38:49.460Z
updatedAt: 2022-12-20T16:28:44.401Z
publishedAt: 2022-12-20T16:28:44.401Z
firstPublishedAt: 2022-10-31T20:38:50.012Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collections-cms-special-character-validation-diverges-from-new-collections
locale: en
kiStatus: Backlog
internalReference: 450569
---

## Summary



Currently, If a user creates a collection using the new collection admin using special characters, this same data is listed on the legacy, CMS application.

However, upon attempting to edit a subcollection with this given name on the UI, there's a validation that prevents the user from saving any names with special characters which does not exists in the new application.

This behavior might lead the user to mistakenly think it items were added to the collection via UI action.


* * *


#

## Simulation


1) Create a new collection via the Collections tab (beta admin)

2) In its name, use special characters, such as **%!@#$%**3) After creating this collection go to CMS --> Procut Clusters (Collections) --> Select the automatically created collection

4) Attempt to insert any new data in it and then click save

5) A special character validation prompt will be shown and no data will be saved

 ![](https://vtexhelp.zendesk.com/attachments/token/pwqKP9iXeEaIFRjUGN93jwOOw/?name=inline773082053.png)



* * *


#

## Workaround


Change the subcollection names after their creation to values without any special characters and then save.

OR

Insert new items via the legacy collections APIs https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-subcollection#catalog-api-post-subcollection-sku

