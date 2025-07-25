---
title: "The promotion wasn't applied to the customer cluster"
id: 1fQEKdmWwIAPfDQAbuP3Kr
status: PUBLISHED
createdAt: 2025-02-28T18:00:30.100Z
updatedAt: 2025-02-28T19:31:52.785Z
publishedAt: 2025-02-28T19:31:52.785Z
firstPublishedAt: 2025-02-28T19:31:52.785Z
contentType: tutorial
productTeam: Others
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-promotion-wasnt-applied-to-the-customer-cluster
locale: en
legacySlug: the-promotion-wasnt-applied-to-the-customer-cluster
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Promotions, Cluster, Customer profile, Master Data
---

A [custom promotion](/en/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342) can be configured for a specific group of users in your store, such as a [customer cluster](/en/tutorial/how-can-i-create-cluster-of-customers--frequentlyAskedQuestions_1724). However, there may be situations where the promotion is not displayed correctly for this targeted audience. The main reasons are:

- The cluster value is missing or incorrectly configured in the promotion.
- Inconsistency between the values added to the promotion and those in the customer profiles.

## Solution

Below are some solutions that can help ensure the promotion is displayed to the desired customer cluster.

### Check the configured cluster value in the promotion

To identify whether a customer cluster is associated with a promotion, follow the steps below:

<blockquote><ui>1. In the VTEX Admin, go to <b>Promotions > Promotions</b>, or type <b>Promotions</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. Click the promotion you want to check.</ui>

<blockquote><ui>3. In the section <b>“What are the conditions for the promotion to be valid?”</b>, check if the option <b>Customer cluster</b> is selected and that the field is completed with the correct <a href="https://help.vtex.com/en/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field">value of the respective cluster</a>.</ui>

![Cluster_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/Store%20operations/the-promotion-wasnt-applied-to-the-customer-cluster_1.png)  

<blockquote><ui><div class="alert alert-warning">
  The value entered in this field must be exactly the same as the value previously assigned to the customer cluster, as the system interprets differences between upper and lower case letters (case sensitive). For example, if the value entered for a given cluster identifier is <code>employee=true</code> and in the promotion it's <code>Employee=true</code> or <code>Employee=True</code>, the promotion won't be visible to users in that cluster.
</div></blockquote>

<blockquote><ui>4. If necessary, add or change the value for the desired cluster.</ui>

<blockquote><ui>5. Click <code>Save</code>.</ui>

<blockquote><ui><div class="alert alert-info">
  To ensure that the same promotion is applied simultaneously to customer clusters with different values, select the condition <b>At least one of the following</b> and configure all the cluster values in the promotion.
</div></blockquote>

### Check the value assigned to the customer profile

In a scenario where the promotion has more than one value in the field available in __Customer cluster__, and the selected condition is __All the following__, customers in the cluster must meet all the defined criteria.

For example, if a promotion is configured with the condition __All of the following__ and completed with `Employee=true` and `code=platinum`, it will only apply to customers whose profile meets both criteria: __employee__ and __platinum code__. Customers who meet only one of the requirements won't be able to use the promotion.

To solve it, you can do one of the following:

- Change the __Customer cluster__ condition to __At least one of the following__, allowing customers identified as __employee__ or with the __platinum__ code to access the promotion.

- Keep the __Customer cluster__ condition as __All the following__ and update the records of the desired customers in [Master Data](/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) to include both criteria: being an __employee__ and classified in the __platinum__ category.

- Keep the __Customer cluster__ condition as __All the following__ and declare other values currently assigned to the customers you want to display the promotion to.