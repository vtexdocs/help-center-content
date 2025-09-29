---
title: 'Create a cluster of customers'
id: frequentlyAskedQuestions_1724
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2024-08-12T16:09:00.345Z
publishedAt: 2024-08-12T16:09:00.345Z
firstPublishedAt: 2019-01-24T22:05:41.666Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-can-i-create-cluster-of-customers
legacySlug: how-can-i-create-cluster-of-customers
locale: en
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Creating a cluster of customers is the same as segmenting them. These two approaches give the storeowner a better idea of the customer’s profile, and enable you to be more proactive in dealing with this user.

> ⚠️ This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use. <ul> <li> [ Master Data version characteristics ](/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/vtex-rest-api/docs/getting-started-1) </li> </ul>

These details, once obtained, are very useful for the company’s marketing and advertising. Each store can define its own clusters and the rules for a customer to be included in each of them.

The purpose of this article is to show how to configure your CRM to create a cluster.

<ol start="1">
    <li>The first step is to create a field in MasterData with the name of the desired cluster. Example: Resellers. This way, customers who are resellers will be highlighted, receiving an exclusive promotion, for example. [Access our manual on how to create a field.](/en/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

> ℹ️ For a cluster to work correctly in a promotion, define the newly created custom field as **searchable** and **filterable** in MasterData.

<ol start="2">
    <li>The second step is to create this field in the form so that it is possible to view the data. [For that, see our manual.](/en/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

So technically, a cluster in CRM is nothing more than a field.

To populate this field you can use an [import worksheet](/en/tutorial/importing-data-into-master-data--tutorials_1135 "How to import data into Master Data") or an API, or you can do it manually using the Customer form in CRM. Everything depends on the store’s strategy for clusterizing its customers.

## Learn more

- [Learn how to create a promotion for a cluster](/en/tutorial/creating-promotions-for-a-cluster-of-customers)
