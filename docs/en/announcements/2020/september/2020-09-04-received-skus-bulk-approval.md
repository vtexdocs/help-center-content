---
title: 'Received SKUs: Bulk approval'
id: PC9nNmPKePbiuH8pDoG9g
status: PUBLISHED
createdAt: 2020-09-04T19:13:19.581Z
updatedAt: 2021-03-26T15:49:22.429Z
publishedAt: 2021-03-26T15:49:22.429Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-09-04-received-skus-bulk-approval
locale: en
legacySlug: received-skus-bulk-approval
announcementImageID: 'undefined'
announcementSynopsisEN: 'Now you can select up to 25 SKUs in bulk on the Received SKUs dashboard. We also created a new API for that.'
---

Marketplaces manage their sellers' products from the [Received SKUs](/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) dashboard, where you can review and approve products sent by sellers. On the dashboard, you can bulk select SKUs, approving, or rejecting items all at once.

 ## What has changed?

You can now bulk select up to **25** items per page, while previously, you could only select up to 15 SKUs. This improvement provides faster operations that count on manual offer approval.     

In addition to the change in the Received SKUs dashboard, we have created a new API that follows the improvement. The previous [Match Suggestions](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-) API used to be responsible for the individual approval of SKUs, but we have now developed a [new API](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/matches/action/-actionName-), which approves up to 25 SKUs per call. Both APIs will be available for use, and maintained. 

## What do I need to do?

If your store has some integration that uses our Suggestions API, you will be able to use our new endpoint to make your operation more efficient. For more information, check our [Developer Portal documentation](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/matches/action/-actionName-).
This Received SKUs dashboard feature is already available in your VTEX Admin and does not change any configuration or data of your store. It is an improvement in the interface which makes the use of the dashboard easier in your team's daily routine.

To use it, follow the steps below: 

1. In the *Marketplace* module, click on the **Sellers** tab.  
2. Click on **Received SKUs**.  
3. In **Show rows**, at the end of the page, change the amount of items on the page to`25`.  
4. Check the **SKU** box.  
5. Click on the **Approve as new product**, or select the desired action among the options from the **More** button.  

