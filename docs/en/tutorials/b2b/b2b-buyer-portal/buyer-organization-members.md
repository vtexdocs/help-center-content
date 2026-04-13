---
title: 'Buyer organization members'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2026-04-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: en
---

In a B2B buyer organization, members are the people who interact with the store on behalf of the organization. Their actions are defined by roles and permissions assigned to them, as well as by how the organization uses **recipients** and **buyer information**. This article describes the types of members and related concepts to explain the actions different users can perform in your organization.

> ⚠️ This feature is only available for stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available to selected accounts.

## Storefront roles

Roles define what each user can do in the store, including managing the organization account. Each role has a set of permissions. When you assign one or more roles to a user, they acquire the combined capabilities of those roles. Applying permissions in the store allows restricting users to view and edit approved resources only.

The table below summarizes the main roles and their functions:

| Role | Purpose |
| --- | --- |
| **Organizational Unit Admin** | Full control over the organizational unit: manages organization and contract, users, buying policies, budgets, accounting fields, and credit cards. |
| **Super Buyer Admin** | Can manage all organizational units at the root level of the organization, beyond the limits of each unit. |
| **Buyer** | Can place orders in the store. |
| **Order Approver** | Can approve or reject orders following the configured approval flows. |
| **Order Modifier** | Can use the order change feature on orders they have access to. |
| **Address Manager** | Can add and manage addresses during checkout, and view saved addresses. |
| **Buyer Organization Manager** | Can view all orders within their organizational unit. |
| **Contract Manager** | Can view orders placed under the contract assigned to them. |
| **User Manager** | Can manage users and view user details within the organization. |
| **Buying Policy Manager** | Can create, edit, and delete buying policies and approval workflows, and view buying policies. |
| **Budget Manager** | Can create, edit, allocate, and delete budgets, and view budget details, allocations, limits, and spending history. |
| **Accounting Field Manager** | Can create, edit, and delete accounting fields, and view accounting field configurations. |
| **Credit Card Manager** | Can manage and view saved credit cards. |
| **Personal Cards User** | Can use a new credit card not saved in the contract by default at checkout. |

> ℹ️ Learn more about Storefront roles and resources in the developer guide [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles).

## Buyers

**Buyers** are users who can place orders and are associated with the buyer organization. Buyer details identify and describe the users in the store and in order flows, such as checkout and order history.

Buyer details are used by the store to identify who is placing the order and to apply the correct permissions, contracts, and policies.

To learn how to create and manage buyer details, see the [B2B Buyer Details API](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
