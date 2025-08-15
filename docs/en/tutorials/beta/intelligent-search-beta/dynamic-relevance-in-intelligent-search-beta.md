---
title: '​​Dynamic relevance in Intelligent Search (Beta)'
id: rFaW7JPnBKNDBFzMxpBn8
status: PUBLISHED
createdAt: 2023-09-01T17:14:43.241Z
updatedAt: 2024-01-05T17:24:55.378Z
publishedAt: 2024-01-05T17:24:55.378Z
firstPublishedAt: 2023-09-01T18:59:54.853Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: dynamic-relevance-in-intelligent-search-beta
legacySlug: dynamic-relevance-in-intelligent-search-beta
locale: en
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ This feature is in closed beta, which means that only specific customers can access it now. If you want to implement it in the future, please contact [our support](https://support.vtex.com/hc/pt-br/requests). For selected customers, the functionality is available for free use in the VTEX Admin during its Beta period, or until decided by VTEX. Extra fees may apply in the future.

Relevance is the feature that defines the ranking of products in search results. This configuration allows you to set weights and prioritize certain criteria, such as popularity, release date, and participation in promotions. Intelligent Search determines the relevance of each product by combining weights and priorities defined by each merchant.

In Intelligent Search, you can configure your search relevance in two ways:

* [Manually](#manual-relevance)
* [Dynamically](#dynamic-relevance)

Only one of these is applied to your store at a time, and you can [change the relevance type configured](#changing-relevance-type). If you change the relevance from manual to dynamic, all the manual rules you have set will remain saved.

> ℹ️ Manual relevance is the store default setting.

## Manual relevance

Manual relevance is configured by distributing the weights on the **Relevance Rules** page. To enable manual relevance, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Intelligent Search >** **Relevance Rules** or type **Relevance Rules** in the search bar at the top of the page.
2. Select the **Manual Relevance** option.
![relevancia-manual-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/dynamic-relevance-in-intelligent-search-beta_1.png)
3. Click `Save`.

To configure manual relevance, see the [Relevance](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) article.

## Dynamic relevance

Dynamic relevance is a VTEX feature that uses artificial intelligence to find patterns in customer behavior based on their searches and the result rankings they click or buy. It can improve search results by increasing the relevance of products that are growing in popularity.

For example, dynamic relevance can identify which products increase conversion on a new arrivals page, without any configuration by the merchant.

It can also reposition results that are not relevant to your customers within a specific search.

To enable dynamic relevance, follow these steps:

1. In the VTEX Admin, go to **Storefront > Intelligent Search > Relevance Rules** or type **Relevance Rules** in the search bar at the top of the page.
2. Read the information about dynamic relevance and click `Next`.
3. Select the **Dynamic Relevance** option.
![relevancia-dinamica-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/dynamic-relevance-in-intelligent-search-beta_2.png)
4. Click `Save`.
5. Wait for the loading bar to reach 100%. This process may take a few hours. You will receive an email when the loading is complete.
6. Click `Enable`.

## Changing relevance type

To change the relevance type, follow the steps below:

> ⚠️ We do not recommend constantly changing the relevance type used by your store. The system needs a week to settle.

1. In the VTEX Admin, go to **Storefront > Intelligent Search > Relevance Rules** or type **Relevance Rules** in the search bar at the top of the page.
2. Click `Change`.
3. Choose the type of relevance you want to apply.
4. Click `Save`.
