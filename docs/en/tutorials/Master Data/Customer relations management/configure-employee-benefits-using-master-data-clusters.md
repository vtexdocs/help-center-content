---
title: 'Configure employee benefits using Master Data clusters'
id: 58SNGrUE08Ya2GWTqKUi5m
status: PUBLISHED
createdAt: 2020-08-25T20:16:20.744Z
updatedAt: 2023-03-28T23:14:03.969Z
publishedAt: 2023-03-28T23:14:03.969Z
firstPublishedAt: 2020-08-28T15:15:56.627Z
contentType: tutorial
productTeam: Master Data
author: 4ubliktPJIsvyl1hq91RdK
slugEN: configure-employee-benefits-using-master-data-clusters
locale: en
legacySlug: configure-employee-benefits-using-master-data-clusters
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

In VTEX, a benefit or discount can be applied to a group of customers. This group of customers can be defined by properties that they have in common. 

<div class="alert alert-warning">
This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Master Data version characteristics
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
</a>
</li>
</ul>
</div>

This article shows how to configure a benefit for employees. It is considered that the employees are a group of customers, so they are identified using Master Data clusters.

Since customer data is stored as documents of the CL (Client or Cliente) data entity in Master Data, the content of the fields will decide if the customer belongs to that group. 

## What is a cluster?
In Master Data, a cluster is a field with a determined value for a data entity. One or more clusters define this group of customers with common properties in the CL data entity.

Here, the common property of the clients will be that they are also employees of the store. More information about clusters of customers can be found in the article [Create a cluster of customers](/en/tutorial/how-can-i-create-cluster-of-customers--frequentlyAskedQuestions_1724).

This article assumes that the employees are properly registered with a boolean field `isEmployee` set to true in their respective documents for the CL data entity, as shown in the figure below. 

If they are not, check the article [Creating a field in Master Data](/en/tutorial/how-can-i-create-field-in-master-data) to create a field that identifies the employees and properly configure it for each document corresponding to the employees.
![Employee field](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Customer%20relations%20management/configure-employee-benefits-using-master-data-clusters_1.png)

<div class="alert alert-info" role="alert">There are many details to completely configure a benefit. If you need additional information on this matter, check out the article <a href="https://help.vtex.com/en/tutorial/creating-promotions-2">Creating promotions</a>.</div>

With the field configured, the benefit can be created by following the steps below:

1. In the left panel of Admin, access **Promotions** > **Promotions**.
2. With the **Promotions** menu open, click on the **New Benefit** button in the top right corner.
3. Choose the desired type of benefit from the available options.
4. Fill the required fields to set up the benefit. There are many fields (e.g.: Name, Expiration date, kind and amount of discount, etc.) and some of them are specific to the selected type of benefit. More information about configuring the benefits can be found in the article [Creating promotions](/en/tutorial/creating-promotions-2).
5. To apply the benefit only to the employees, inside section 3 (What are the **conditions** for the benefit to be valid?), check the **Customer cluster** mark
6. In the box below the **Customer cluster** mark, write the cluster that identifies the customers that are employees (a pair `{field}={value}`). In this case it is used `isEmployee=true`.
7. In the end of the page, click on the **Save** button.

After that, the benefit should already be working as configured. The discount is shown only in the shopping cart. The image below shows an example with 99% off.
![Shopping cart with discount](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Customer%20relations%20management/configure-employee-benefits-using-master-data-clusters_2.png)
