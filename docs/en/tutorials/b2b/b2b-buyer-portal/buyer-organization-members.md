---
title: 'Buyer organization members'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2025-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: en
---

In a B2B buyer organization, members are the people who interact with the store on behalf of the organization. Their actions are determined by the roles and permissions assigned to them, and by how the organization uses **contact information** and **buyer data.** This article explains the types of members and related concepts so you can understand who can do what in your organization.

## Permission-based roles

Roles define what each user can do in the storefront, including Organization Account management. Each role has a set of permissions. When you assign one or more roles to a user, they gain the combined capabilities of those roles. Permissions are enforced in the storefront so that users only see and use the features they are allowed to.

The table below summarizes the main roles and what they are for:

| Role | Purpose |
|------|---------|
| **Organizational Unit Admin** | Full control over the organizational unit: organization and contract settings, users, buying policies, budgets, accounting fields, quotes, and organization hierarchy. |
| **Super Buyer Admin** | Can manage across all organizational units at the root organization level, bypassing unit boundaries. |
| **Buyer** | Can place orders in the store. |
| **Order Approver** | Can approve or reject orders according to your approval workflows. |
| **Order Modifier** | Can use the change-order feature for orders they have access to. |
| **User Manager** | Can create, edit, and remove users in the organization. |
| **Address Manager** | Can add addresses during checkout, save them for the contract or organization unit, change address information at checkout, and view saved addresses. |
| **Buyer Organization Manager** | Can view all orders in their organizational unit, manage authentication settings, view payment cards, and view addresses. |
| **Contract Manager** | Can view orders placed under their assigned contract. |
| **Contract Viewer** | Can view saved addresses (read-only). |
| **Buying Policy Manager** | Can create, edit, and delete buying policies and approval workflows, and view buying policies. |
| **Budget Manager** | Can create, edit, allocate, and delete budgets, and view budget details, allocations, limits, and spending history. |
| **Accounting Field Manager** | Can create, edit, and delete accounting fields. |
| **Quote Manager** | Can create, edit, and delete quotes. |
| **Personal Cards User** | Can use a new credit card at checkout that is not saved to the contract by default. |


## Contact information

**Contact information** refers to the people who can be selected as recipients for orders. For example, the person who will receive the shipment. The contact for an order can be different from the user who placed the order: when a shopper places an order, they can choose which contact (recipient) the order is for.

Contact information is managed at the organization level. Contacts can be linked to addresses so that when a user selects a delivery address, they can choose from the contacts associated with that address. This keeps recipient data centralized and reusable across orders.

For technical details on how to create, update and integrate contact information via APIs, see the [B2B Contact Information API](https://developers.vtex.com/docs/api-reference/b2b-contact-information-api).

## Buyers (shopper/buyer data)

**Buyers** are users who can place orders and are associated with the buyer organization. Buyer data is the information that identifies and describes these users in the context of the storefront and order flows. For example, for checkout and order history.

Buyer data is used by the store to know who is placing the order and to apply the right permissions, contracts, and policies.

To learn how to create and manage buyer data, see the [B2B Buyer Data API](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
