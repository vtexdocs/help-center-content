---
title: 'Organization Units'
createdAt: '2026-03-06T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: organization-units
locale: en
---

> ⚠️ This feature is available only for stores using B2B Buyer Portal, currently available for select accounts.

In B2B operations, the buyer is a company rather than an individual consumer. Each company is represented by a buyer organization that maintains a commercial relationship with the store.

Companies usually have multiple branches, departments, cost centers, and internal approval workflows. Each of these areas may have purchasing autonomy, its own budget, or specific financial rules. **Organization Units** allow this structure to be represented within a VTEX store operating in B2B.

## Buyer organization structure

A VTEX store operating in B2B can contain multiple buyer organizations. Each organization:

* Has its own contract  
* Operates independently from other organizations  
* Can have multiple internal subdivisions (Organization Units)

Organization Units are used to model the internal structure of a single buyer organization.

The operational hierarchy follows the model below:

![organization-units_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/b2b-buyer-portal/organization-units_1.png)

An **Organization Unit** is a hierarchical subdivision within a specific buyer organization. This structure defines how commercial rules and access permissions are applied.

Instead of creating multiple accounts or multiple buyer organizations to represent internal areas of the same company, you can organize the hierarchy internally through Organization Units and apply different rules for each area while maintaining a single buyer organization.

## Hierarchical structure of Organization Units

The structure of Organization Units follows a tree model. Every buyer organization has a **root unit**, which represents the organization as a whole. From it, **child units** can be created to represent subdivisions such as branches, departments, or cost centers.

![organization-units_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/b2b-buyer-portal/organization-units_2.png)

The root unit is the highest level of the hierarchy. Child units can exist at multiple levels, reflecting the company's real organizational structure. General rules are defined in the [contract](#contract), but each unit can have [specific rules](#organization-unit-settings) according to its position in the hierarchy.

## Contract

Each buyer organization has its own B2B contract. This contract is associated with the organization's **root unit**.

The commercial conditions defined in the contract are inherited by child units. This means that prices, policies, and commercial agreements negotiated with the company apply to the entire structure. After this inheritance, it is possible to define [unit-specific settings](#organization-unit-settings), enabling internal segmentation without the need for multiple contracts or separate accounts.

To understand how contracts are configured and managed, see:

* [B2B contracts](https://help.vtex.com/en/docs/tutorials/b2b-contracts)

## Organization Unit settings

Even when sharing the same contract, each unit can operate with its own rules. Among the configurations that may vary by Organization Unit are:

* Visible product assortment  
* Payment methods and conditions  
* Delivery and billing addresses  
* Accounting fields  
* Order approval rules

This segmentation allows the store's operation to align with the internal policies of the buyer company.

Learn more in the following documentation:

* [Buying Policies](https://help.vtex.com/en/docs/tutorials/buying-policies-overview)  
* [Budgets overview](https://help.vtex.com/en/docs/tutorials/budgets-overview)  
* [Accounting fields](https://help.vtex.com/en/docs/tutorials/accounting-fields)

## Organization Unit users

The unit to which a user is linked defines how they operate within the platform. When logging in to the store, the platform identifies the user’s Organization Unit and automatically applies the rules configured for that unit.

## Storefront roles and permissions

The scope of actions available to a user who is a member of an Organization Unit in a B2B store is defined by the combination of two elements:

* **Organization Units**, which determine the group the user belongs to.  
* **Storefront roles**, which define the user’s role in the organization by grouping specific permissions that allow actions in the storefront.

Learn more in [Buyer organization members](https://help.vtex.com/en/docs/tutorials/buyer-organization-members).

## Purchasing experience

Organization Units ensure that the browsing and purchasing experience reflects the organizational structure of the buyer company.

Each area of the company operates with:

* Appropriate commercial rules  
* Permissions compatible with its role  
* Governance and autonomy

This way, the platform allows a single B2B company to operate with multiple internal structures while maintaining contractual consistency and operational control.