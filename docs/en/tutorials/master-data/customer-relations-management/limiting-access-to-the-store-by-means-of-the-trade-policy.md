---
title: 'How to limit access to the store using a trade policy'
id: tutorials_3063
status: PUBLISHED
createdAt: 2017-04-27T21:52:28.228Z
updatedAt: 2024-05-24T19:16:43.055Z
publishedAt: 2024-05-24T19:16:43.055Z
firstPublishedAt: 2017-04-27T23:03:54.732Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: limiting-access-to-the-store-by-means-of-the-trade-policy
legacySlug: limiting-access-to-the-store-by-means-of-the-sales-policy
locale: en
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

You can limit access to a store for a number of different reasons, such as when it has a B2B site on which only registered, authorized companies may browse, or when it is an environment for exclusive customers.

This can be achieved by using Master Data v1 and the store’s sales policy.

> ⚠️ This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use. <ul> <li> [ Master Data version characteristics ](/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/docs/guides/master-data-v2-basics) </li> </ul>

## Creating a cluster of customers

The first step is to create a cluster which will identify those customers that can access the store. [To learn how to create a cluster of customers, read our manual](/en/docs/tutorials/how-can-i-create-cluster-of-customers/).

## Changing a trade policy

After creating a cluster, you must include a rule in the trade policy allowing access to the site only to customers in that cluster.

1. In the VTEX Admin, click **Store Settings** > **Channels** > **Trade Policies**.
2. In the sales policy used, click __Alter__.
3. In the **Conditional Rule** field, enter the value **ClusterName=”true”**. Note that the value **ClusterName** must be changed to the name of the field in the data entity.
4. Click on the **Save** button.

![Catalog EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/master-data/customer-relations-management/limiting-access-to-the-store-by-means-of-the-trade-policy_1.png)

In the above configuration, only customers with the value “true” (using a Boolean field – where values are either true or false) can access the site.

However there are other possibilities for configuration. For instance, you can configure **ClusterName="false"** – where only customers with the field value **false** can access the site, or **ClusterName="silva"** – where only customers with the value **silva** in the field used for the cluster can access the site.

## Registering customers with access

In the case of B2B, where the store does not know which customers may have access, a form will have to be created for them to register their details. The store will then use Master Data to verify the details and decide whether or not to grant access. [For this configuration, see our manual for B2B stores](/en/docs/tutorials/setting-up-b2b-on-vtex/).

## Learn more

- [Marketplace strategies at VTEX](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete)
- [How trade policies work](/en/docs/tutorials/how-trade-policies-work)
- [Creating a trade policy](/en/docs/tutorials/creating-a-trade-policy)
- [Configuring a marketplace trade policy](/en/docs/tutorials/configuring-a-marketplace-trade-policy)
