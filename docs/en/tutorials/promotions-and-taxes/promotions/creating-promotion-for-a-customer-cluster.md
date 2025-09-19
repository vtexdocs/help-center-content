---
title: 'Creating a promotion for a customer cluster'
id: tutorials_342
status: PUBLISHED
createdAt: 2017-04-27T22:07:51.509Z
updatedAt: 2024-08-05T17:40:23.033Z
publishedAt: 2024-08-05T17:40:23.033Z
firstPublishedAt: 2017-04-27T23:03:15.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-promotion-for-a-customer-cluster
legacySlug: creating-promotions-for-a-cluster-of-customers
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promotion for a customer cluster is a promotion that is only valid for a group of customers previously determined in the Master Data module. This promotion will only apply to selected customers who are logged into the website, and it will only be displayed in the shopping cart.

Configuring customer clusters allows you to create a variety of promotions tailored to segmented audiences.

Before creating a promotion, you must define the property that determines whether a customer is part of the cluster. To do this, you can use fields that already exist in the customer profile (for example, `email`) or [create a customer cluster in the __Master Data__ module](/en/faq/como-criar-um-cluster-de-clientes/).

After configuring the property, follow the instructions below.

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Search for the promotion you would like to configure (or [create a new promotion](/pt/tutorial/como-criar-promocoes/)).
3. Go to the section **What are the conditions for the promotion to be valid?**
4. Check the box next to **Customer cluster**.
5. Select the criteria you would like to configure:
    *   **All of the following conditions:** the customer must meet all of the requirements to be included in the promotion.
    *   **At least one of the following conditions:** if the customer meets any of the listed criteria, they will be included in the promotion.
6. Fill in the field with the cluster you would like to link to the promotion. [See below for more information on how to fill in this field.](#filling-in-the-customer-cluster-field) You can add more than one cluster by clicking on the `+` button.
7. Click on `Save`.

> ℹ️ You can enter a maximum of 50 clusters in the **Customer cluster** option.

## Filling in the Customer cluster field

There are two possible criteria for selecting a cluster for the promotion, and, therefore, two options for completing the **Customer cluster** field: 

*   with an [equality function](#equality-function): `{propertyname}={value}`
*   with a [contains function](#contains-function): `{propertyname} contains {value}`

Note that, in both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in the Master Data.

### Equality function

The expression `{propertyname}={"value"}` must be used when the information contained in the customer profile for the given property must be exactly equal to the value entered in the expression.

In the configuration below, for example, only `employee` entries with the value `true` (used in a **[Boolean](/en/tutorial/criando-entidade-de-dados--tutorials_1265)** field, where values are always `true` or `false`) will receive the promotion.

You could also configure `employee=false`, where only `employee` entries with the value `false` in the field would receive the promotion.

![Campo funcionário Master Data EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/creating-promotion-for-a-customer-cluster_1.png)

![Cluster de clientes EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/creating-promotion-for-a-customer-cluster_2.png)

Given a field of type **[Varchar](/en/tutorial/criando-entidade-de-dados--tutorials_1265)**, we could configure `employee="yes"` so that only customers with the value `"yes"` in the field receive the promotion.

> ⚠️ For fields of type **Varchar**, the value entered in the **Customer cluster** section of the promotion is case-sensitive. This means that if you fill in the option **Customer cluster** in a way that differs from the one determined for the field in the Master Data, the promotion will not be applied.

Therefore, considering the above example of a field of type **Varchar** with the values `"yes"` and `"no"`, the entry in the promotion must be `employee="yes"`. When entering, for example, `employee="Yes"` in the promotion, the customer cluster will not receive the promotion.

### Contains function

The expression `{propertyname} contains {"value"}` must be used when the information in the customer profile for the given property must **contain** the `value` entered in the expression.

For example, if you want to create a cluster with only customers whose emails contain `@test.com`, the configuration will follow the example below.

![Campo Email Master Data](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/creating-promotion-for-a-customer-cluster_3.png)

![cluster email EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/creating-promotion-for-a-customer-cluster_4.png)

In this case, `email contains test.com` will be `true`, for example, when the value is `john@test.com`, and `false` when the value is `john@test.org`.
