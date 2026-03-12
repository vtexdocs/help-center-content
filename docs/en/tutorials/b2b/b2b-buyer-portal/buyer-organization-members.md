---
title: 'Buyer organization members'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2025-03-03T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: en
---

In a B2B buyer organization, members are the people who interact with the store on behalf of the organization. Their actions are defined by roles and permissions assigned to them, as well as by how the organization uses **contact details** and **buyer information**. This article describes the types of members and related concepts to explain the actions different users can perform in your organization.

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

## Permission roles

Roles define what each user can do in the store, including managing the organization account. Each role has a set of permissions. When you assign one or more roles to a user, they acquire the combined capabilities of those roles. Applying permissions in the store allows restricting users to view and edit approved resources only.

The table below summarizes the main roles and their functions:

| Role                           | Purpose                                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Organizational unit admin**  | Full control over the organizational unit: manages organization and contract, users, buying policies, budgets, accounting fields, quotes, and organization hierarchy. |
| **Super buyer admin**          | Can manage all organizational units at the root level of the organization, beyond the limits of each unit.                                                                            |
| **Buyer**                      | Can place orders in the store.                                                                                                                                                        |
| **Order approver**             | Can approve or reject orders following the configured approval flows.                                                                                                                 |
| **Order modifier**             | Can use the order change feature on orders they have access to.                                                                                                                       |
| **Address manager**            | Can add addresses during checkout, save them to the contract or organizational unit, update address information at checkout, and view saved addresses.                                |
| **Buyer organization manager** | Can view all orders for their organizational unit, manage authentication settings, view payment cards, and view addresses.                                                            |
| **Contract manager**           | Can view orders placed under the contract assigned to them.                                                                                                                           |
| **Contract viewer**            | Can view saved addresses (read-only).                                                                                                                              |
| **Buying Policy Manager** | Can create, edit, and delete purchase policies and approval workflows, and view purchase policies. |
| **Budget Manager** | Can create, edit, allocate, and delete budgets, and view budget details, allocations, limits, and spending history. |
| **Accounting Fields Manager** | Can create, edit, and delete accounting fields. |
| **Quote Manager** | Can create, edit, and delete quotes. |
| **Personal card user**         | Can use a new credit card not saved in the contract by default at checkout.                                                                                                           |

## Contact details

**Contacts** are the people who can be selected as order recipients — the people who'll receive the shipment. The order contact may be different from the user who placed the order. When placing an order, the buyer can choose the contact (recipient) the order is for.

Contact details are managed at the organization level. Contacts can be linked to addresses so that, when selecting a shipping address, the user can choose from the contacts associated with that address. This keeps recipient information centralized and reusable between orders.

For technical details on how to create, update, and integrate contact details via APIs, see the [B2B Contact Details API](https://developers.vtex.com/docs/api-reference/b2b-contact-information-api).

## Buyers

**Buyers** are users who can place orders and are associated with the buyer organization. Buyer details identify and describe the users in the store and in order flows, such as checkout and order history.

Buyer details are used by the store to identify who is placing the order and to apply the correct permissions, contracts, and policies.

To learn how to create and manage buyer details, see the [B2B Buyer Details API](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
