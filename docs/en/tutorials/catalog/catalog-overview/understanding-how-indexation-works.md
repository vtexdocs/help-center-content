---
title: 'How indexing works'
id: tutorials_256
status: PUBLISHED
createdAt: 2017-04-27T22:11:43.688Z
updatedAt: 2025-06-12T20:57:48.787Z
publishedAt: 2025-06-12T20:57:48.787Z
firstPublishedAt: 2017-04-27T23:03:11.322Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: understanding-how-indexation-works
legacySlug: understanding-how-indexation-works
locale: en
subcategoryId: 6jaCCq5pVL7VxL0WNWV0cF
---

> ⚠️ This tutorial is valid only for stores using [Legacy CMS Portal](/en/docs/tracks/legacy-cms-portal) search. If your store uses [Intelligent Search](/en/docs/tracks/overview-intelligent-search), check [Indexing History ](/en/docs/tutorials/indexing-history) to follow the indexing process.

Indexing is a process that prepares the general SKU data, such as catalogue data, prices and inventory, and updates the information to serve as a basis for searches and for setting up the site's product display shelves.

Every time product listing data is altered as shown below, the database is reindexed. 

- Changes in product or SKU data;
- Enabling/disabling of the product;
- Collection enabling/disabling;
- Price change;
- Change in inventory quantity.

Once a product is marked for reindexing, the text _pending indexing_ is included in the product listing in admin. The indexer places these products in a queue for processing, with a 2-minute waiting time. After the 2 minutes, the product is available for indexing. In this process, all the VTEX modules are consulted, with prices and availability updated for every sales policy. This process takes an average of 4 minutes.

![indexaçao.en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/catalog-overview/understanding-how-indexation-works_1.png)

## Indexing Report

The indexing report is a page in the admin panel which shows the products indexing status of your store. The path to access it is as follows:

1. In the VTEX Admin, go to **Catalog**, or type **Catalog** in the search bar at the top of the page.
2. Click on **Reports**.
3. Click on the tab **Indexed Products**.

The products are divided according to each step of the indexing process and to the periods during which they have been in this process:

- **Total Indexed**, **Not yet in queue** and **Total in Queue**: relate to the stages of the product in the process **Not yet in queue** are those that were changed in less than 2 minutes, and _Total na fila_ (Total in queue) are those that have started the indexing process, after these 2 minutes.
- **In queue from 1 to 2 hours** and **In queue from 2 to 4 hours**, **In queue from 4 to 8 hours**: represent the periods for which the products have been in the indexing process.

![Indexingreport](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/catalog-overview/understanding-how-indexation-works_2.png)

The indexing report also indicates the time the last item took to be reindexed. This is shown in the upper right side of the report (see the image above). 

## Retries

The number of tries for indexing items is limited. This means that, if a product cannot be indexed because it has exceeded the time limit three times, it is moved from the main queue to a subsidiary queue, where a further 7 attempts are made, one every 15 minutes. 

If the product is still not processed at the end of this time, it is removed from the subsidiary queue and not processed again until its next update, when it will reenter the flow.

The time limit can be reached because of the number of checks the product goes through. Each check is an event in the catalogue, calculated as follows:

SKU quantity for the product:
- **x** number of sales policies 
- **x** promotions in which the product appears 
- **x** number of geographical regions 
- **x** number of collections in which the product is featured.

## Additional information

[Why hasn't my product indexed?](/en/faq/--frequentlyAskedQuestions_1608)
