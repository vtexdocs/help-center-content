---
title: 'Unable to pause seller'
id: 4s4VLWa93cnfOhf8faOXjU
status: PUBLISHED
createdAt: 2022-10-20T18:31:59.458Z
updatedAt: 2023-05-11T16:54:08.548Z
publishedAt: 2023-05-11T16:54:08.548Z
firstPublishedAt: 2022-10-20T18:32:00.462Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: en
kiStatus: Fixed
internalReference: 682151
---

## Summary


Sometimes the marketplace is unable to pause the seller via admin or via API.

The error message is generic via UI. However, if the error via API is:
{
"error": "Invalid channel",
"data": {
    "code": "SRAPI-408"
}
}

Then the error is happening because the affiliate validation (channel validation) is failing.

If the seller deletes the affiliate (or changes the affiliate id) on their side, the marketplace won't be able to pause the seller.



## Simulation



1. On the seller account, delete the affiliate of the marketplace;
2. On the marketplace account try to pause the seller on the Admin;
3. Check that a generic error message was send.
4. Try to pause the same seller using the update seller API;
5. Verify if the error message is similar/equal as the error above;



## Workaround


In order to be able to pause the seller there are 3 workarounds:

1. Delete the `affiliate Id`and `Trade Policy` information on the seller section called "Integration" on the UI ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketplace/unable-to-pause-seller_1.png)
2. Ask the seller to create again the affiliate as it was before and after that pause the seller. (after the seller can delete the affiliate again);
3. Use the old seller management UI to proceed with this action: www.myaccount.myvtex.com/admin/site/seller.aspx

