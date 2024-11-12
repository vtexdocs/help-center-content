---
title: "Why doesn't my benefit work for a client cluster?"
id: 4I7FRBu5zj9JYs0xBwg5aR
status: PUBLISHED
createdAt: 2019-02-22T18:12:54.910Z
updatedAt: 2020-09-17T18:15:55.021Z
publishedAt: 2020-09-17T18:15:55.021Z
firstPublishedAt: 2019-02-22T18:16:10.272Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 5Bd75kMNAzARxg0DCUjwal
slugEN: why-doesnt-my-benefit-work-for-a-client-cluster
locale: en
legacySlug: 
---

Within VTEX platform, you may apply a [benefit](/tutorial/creating-promotions-for-a-cluster-of-customers?locale=en) to only one given [cluster](/tutorial/how-can-i-create-cluster-of-customers?locale=en). That is, for only a specific group of customers.

There are cases, however, where this benefit is not viewed by some customers.

Here we show some scenarios in which this error can happen and describe solutions for each of them. They are all related to the value of the cluster that must be inserted in the platform.

## Absence of value

This can happen if the benefit is applied to more than one cluster and you forget to apply its respective value.

You need to apply the promotional value to all clusters. If, for example, the value is applied only to clusters A and B, considering that the discount participants are groups A, B and C, the last group will not see the benefit on the website.

Make sure the value has been entered by following these steps:

1. Enter __Promotions & Taxes__;
2. Click __Benefits__;
3. Select which __benefit__ you want to edit;
4. Go to the session __"What are the conditions for the benefit to be valid?"__;!
5. Check which clusters are registered in __"Customers Cluster"__;

![EN - 7GcSb6BuF6JKnmGAggO3uA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

6. Enter the "new data";
7. Click __Save__;

## Error in the value registration

Each value activates a different action, however similar they may be (case sensitive).

Let's say the value for a cluster is "GOLD". If the value entered in the platform is "Gold", the system will not interpret the action command properly.

Therefore, the customer does not see the benefit. The same goes for other similar spellings, like "gold" or "Golds".

To work around this scenario, follow the same steps as the scenario where there's no value and correct possible typos in the value.

## Use of two or more values

Values are associated with both customers and benefits.

For example, a benefit was linked to the values "Platinum" and "Platinum2". Only customers who have these two commands will have access to the benefit.

If Mary uses the value "Platinum" and Anna, the value "Platinum2", neither will be able to participate in the benefit. That's because only customers who are related to both values, at the same time, may finish the purchase with the discount.

The workaround here is the same as in the previous cases. You should access "Customers Cluster" to understand which values have been registered for a particular benefit. It is up to each customer to decide how many and which clusters to include in the benefit.

With this, the benefit will be properly presented to your customers.
