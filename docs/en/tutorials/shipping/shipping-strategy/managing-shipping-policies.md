---
title: 'Managing shipping policies'
id: 30nynylgbWieimhaMtGTIE
status: PUBLISHED
createdAt: 2024-01-30T16:15:33.582Z
updatedAt: 2024-01-31T13:48:35.723Z
publishedAt: 2024-01-31T13:48:35.723Z
firstPublishedAt: 2024-01-31T00:54:58.302Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: managing-shipping-policies
legacySlug: managing-shipping-policies
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping policy](/en/docs/tutorials/shipping-policy) is a set of rules and settings that define the shipping options displayed to customers at checkout. The relationship between shipping policy, [warehouse](/en/docs/tutorials/warehouse), and [loading dock](/en/docs/tutorials/loading-dock) makes up your [shipping strategy](/en/docs/tutorials/shipping-strategy) on VTEX, as shown in the image below:

![shipping_strategy_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/managing-shipping-policies_1.png)

This article explains how to monitor and manage your shipping policies. In the VTEX Admin, under **Shipping > Shipping Strategy**, the **Shipping Policies** tab is where you can do the following:

* [View the shipping policy list](#viewing-the-shipping-policy-list)
* [Search for shipping policies](#searching-for-shipping-policies)
* [Filter shipping policies](#filtering-shipping-policies)
* [View the carrier dashboard (optional)](#viewing-the-carrier-dashboard-optional)
* [Edit shipping policies](#editing-shipping-policies)
* [Activate or deactivate shipping policies](#activating-or-deactivating-shipping-policies)
* [Delete shipping policies](#deleting-shipping-policies)

You can also create shipping policies. Read the instructions in the [Creating a shipping policy](/en/docs/tutorials/creating-a-shipping-policy) article.

## Viewing the shipping policy list

In the VTEX Admin, by going to **Shipping > Shipping Strategy** in the **Shipping Policies** tab, you will see a list as shown in the image below:

![shipping_policy_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/shipping/shipping-strategy/managing-shipping-policies_2.png)

The information displayed on this page is described in the table below:

| **Column** | **Description** |
| :---: | :--- |
| Shipping Policy | Name that identifies your [shipping policy](/en/docs/tutorials/shipping-policy) for users with access to your VTEX Admin. Learn more in the [Creating a shipping policy](/en/docs/tutorials/creating-a-shipping-policy) article. |
| Shipping Method | [Shipping method](/en/docs/tutorials/how-does-the-type-of-delivery-work) is the name you set in the shipping policy displayed to customers at checkout. Thus, you should use intuitive names when creating a shipping policy.Example: `Express shipping` and `Standard shipping`. |
| Loading Docks | Identifies which [loading docks](/en/docs/tutorials/loading-dock) are associated with the [shipping policy](/en/docs/tutorials/shipping-policy). When you hover over the number in this column, you will see the names of all the loading docks associated with the shipping policy. |
| Status | Shipping policy activation status, which can be:<ul><li>**Active:** The shipping policy is activated and valid for the order shipping [calculation](/en/docs/tutorials/how-shipping-calculation-works).</li><li>**Inactive:** The shipping policy is deactivated and not valid for shipping.</li></ul> |
| Carrier (Brazil only) | This field only appears in the VTEX Admin for stores that have activated the [VTEX Shipping Network Correios](/en/docs/tutorials/vtex-shipping-network-correios-activation) or requested the [VTEX Shipping Network](/en/docs/tutorials/ready-to-dispatch). It uniquely identifies Correios. |
| Contract (Brazil only) | This field only appears in the VTEX Admin for stores that have activated the [VTEX Shipping Network Correios](/en/docs/tutorials/vtex-shipping-network-correios-activation).Possible values are:<ul><li>**VTEX:** The store has requested a Correios price list intermediated by VTEX.</li><li>**Store:** The store requested a price list on its own before activating the VTEX Shipping Network Correios.</li></ul> |

## Searching for shipping policies

In the search box with the magnifying glass icon <i class="fas fa-search"></i>, you can search for shipping policies by name. Typing a character into the search bar immediately initiates the search. To clear the search, click the close icon <i class="far fa-times-circle"></i>.

> ℹ️ If the search does not return any results, check the spelling used in the search and if a filter has been selected.

## Filtering shipping policies

You can filter shipping policies by their status, which can be `Active` or `Inactive`. See the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy** or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping policies** tab, click `Status`.
3. Select one of the status options:
    * **Active:** The shipping policy is activated and valid for the order shipping [calculation](/en/docs/tutorials/how-shipping-calculation-works).
    * **Inactive:** The shipping policy is deactivated and not valid for shipping. 
4. Click `Apply`.

To remove the applied filter, click `Status` and then `Clear`.

### Filter for contract types (Brazil only)

Stores that have requested the [VTEX Shipping Network](/en/docs/tutorials/ready-to-dispatch) or activated the [VTEX Shipping Network Correios](/en/docs/tutorials/vtex-shipping-network-correios-activation) can search by contract type:

  * `VTEX`: The store has requested a Correios price list intermediated by VTEX.
  * `Store`: The store has directly requested the Correios price list.

## Viewing the carrier dashboard (optional)

Stores that have requested the [VTEX Shipping Network](/en/docs/tutorials/ready-to-dispatch) or activated the [VTEX Shipping Network Correios](/en/docs/tutorials/vtex-shipping-network-correios-activation) will see the "Carriers Dashboard" button on the **Shipping Policies** page. By clicking it, the user will be redirected to the [VTEX Shipping Network](/en/docs/tutorials/vtex-shipping-network-dashboard) dashboard, where they can manage the carrier operations for their products.

## Editing shipping policies

To edit a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy** or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping Policies** tab, in the row for the shipping policy you want, click the menu icon <i class="fas fa-ellipsis-v"></i>. You can [search](#searching-for-shipping-policies) for policies or [filter by](#filtering-shipping-policies) certain criteria.
3. Click `Edit`.
4. Make the desired changes. For more information on the fields, read the [Creating a shipping policy](/en/docs/tutorials/creating-a-shipping-policy) article.
5. Click `Save Changes`.

## Activating or deactivating shipping policies

To activate or deactivate a shipping policy, follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy** or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping Policies** tab, in the row for the shipping policy you want, click the menu icon <i class="fas fa-ellipsis-v"></i>. You can [search](#searching-for-shipping-policies) for policies or [filter by](#filtering-shipping-policies) certain criteria.
3. Click `Activate` or `Deactivate`.
4. In the modal that opens, click `Activate` or `Deactivate` again.

## Deleting shipping policies

To delete a shipping policy, follow the steps below:

> ❗ Deleting a shipping policy is permanent and cannot be undone.

1. In the VTEX Admin, go to **Shipping > Shipping Strategy** or type **Shipping Strategy** in the search bar at the top of the page.
2. In the **Shipping Policies** tab, in the row for the shipping policy you want, click the menu icon <i class="fas fa-ellipsis-v"></i>. You can [search](#searching-for-shipping-policies) for policies or [filter by](#filtering-shipping-policies) certain criteria.
3. Click `Delete`.
4. In the modal that opens, click `Delete` again.

