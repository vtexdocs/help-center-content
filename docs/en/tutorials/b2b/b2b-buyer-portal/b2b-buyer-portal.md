---
title: 'B2B Buyer Portal'
createdAt: '2026-04-06T10:00:00.000Z'
updatedAt: '2026-04-24T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-buyer-portal
locale: en
---

> ⚠️ **B2B Buyer Portal** is currently available for selected accounts.

**B2B Buyer Portal** is a VTEX solution that provides a self-service storefront for corporate purchasing. It enables buyer organizations to manage their own accounts, commercial agreements, spending controls, and purchasing workflows, reducing the operational burden for both retailers and their B2B customers.

This article summarizes the main **B2B Buyer Portal** features and redirects to the detailed documentation for each topic.

- [Contracts](#contracts)
- [Organizational management](#organizational-management)
  - [Organizational units](#organizational-units)
  - [Scopes](#scopes)
  - [Members and roles](#members-and-roles)
- [Finance and compliance](#finance-and-compliance)
  - [Budgets](#budgets)
  - [Buying policies](#buying-policies)
  - [Accounting fields](#accounting-fields)
- [Address and payment management](#address-and-payment-management)
- [Organization account](#organization-account)
- [Punchout](#punchout)

## Contracts

A [contract](https://help.vtex.com/docs/tutorials/b2b-contracts) defines the commercial relationship between your store and a buyer organization. It centralizes the terms of the agreement, including:

- Products the buyer can access (product assortments).
- Prices applied (price tables).
- The payment methods available.

Contracts are the foundation of the buyer experience. All the company's [organizational units](#organizational-units) inherit the contract conditions, ensuring consistency throughout the organization. The [Scopes](#scopes) feature can then control which of these attributes each unit can see and use.

To simplify contract management at scale, the [Contract Management Agent](https://help.vtex.com/docs/tutorials/contract-manager-agent) allows store operators to update contracts in bulk using natural-language instructions, such as adding collections or changing payment methods across hundreds of contracts at once.

## Organizational management

The **B2B Buyer Portal** allows buyer organizations to replicate their internal structure on the platform, so each department, branch office, or subsidiary can operate with its own rules while sharing a single contract.

### Organizational units

[Organizational units](https://help.vtex.com/docs/tutorials/organizational-units) represent subdivisions of a buyer organization, such as departments, regional offices, or subsidiaries. They follow a hierarchical tree model. A root unit represents the organization as a whole, and the child units reflect its internal areas.

Each unit can have specific settings for product visibility, payment methods, shipping addresses, accounting fields, and order approval rules, allowing the store to align with the buyer organization's internal policies without needing multiple contracts or accounts. Unit-specific settings are always subject to the contract conditions.

> ℹ️ Learn more about settings in [Adding or editing organizational units](https://help.vtex.com/docs/tutorials/adding-or-editing-organizational-units).

### Scopes

[Scopes](https://help.vtex.com/docs/tutorials/scopes-overview) control which organizational attributes are visible and available to each organizational unit. Admins can restrict access to contracts, payment methods, credit cards, collections, addresses, and accounting fields per unit, ensuring buyers see only what is relevant to their organizational unit.

### Members and roles

[Members](https://help.vtex.com/docs/tutorials/buyer-organization-members) of a buyer organization are assigned storefront roles that define what they can view and do in the store. Examples of predefined roles include:

- **Buyer:** Places orders.
- **Order Approver:** Approves or rejects orders in approval workflows.
- **Organizational Unit Admin:** Manages the unit's structure, users, and settings.
- **Budget Manager:** Creates and manages budgets and allocations.
- **Buying Policy Manager:** Configures purchase approval rules.

These and other available roles can be combined to meet each user's responsibilities, creating a granular permissions model for complex organizational structures. For the full list, see [Buyer organization members](https://help.vtex.com/docs/tutorials/buyer-organization-members).

## Finance and compliance

**B2B Buyer Portal** provides financial governance and purchasing compliance tools, allowing organizations to control spending and enforce internal procurement rules.

### Budgets

[Budgets](https://help.vtex.com/docs/tutorials/budgets-overview) enable organizations to set spending limits and distribute them into allocations associated with specific entities such as users, addresses, or accounting fields. The main features include:

- Defining total amounts and expiration dates for each budget.
- Splitting budgets into allocations for different departments or projects.
- Tracking remaining balances and transaction history.
- Configuring notifications when consumption reaches defined limits.

During checkout, the system automatically verifies applicable allocations, ensuring orders are financed based on the organization's financial rules.

> ℹ️ Learn more about settings in [Adding or editing budgets](https://help.vtex.com/docs/tutorials/adding-or-editing-budgets).

### Buying policies

[Buying policies](https://help.vtex.com/docs/tutorials/buying-policies-overview) are authorization rules that determine whether orders are auto-approved, denied, or sent for manual review. Organizations can configure:

- **Spending limits:** Orders above, below, or equal to certain amounts can trigger different approval requirements.
- **Approval workflows:** Up to five hierarchical approval levels, where final approval requires all levels' authorization.
- **Custom criteria:** Order approval rules based on budgets, order origin, and other factors.

This governance layer ensures purchasing activity complies with internal policies before orders are placed.

> ℹ️ Learn more about settings in [Adding or editing buying policies](https://help.vtex.com/docs/tutorials/adding-or-editing-buying-policies).

### Accounting fields

[Accounting fields](https://help.vtex.com/docs/tutorials/accounting-fields) capture additional business information during checkout, such as cost center, PO number, project codes, or expense classifications. Fields can be applied at the order, item, or address levels and configured as required or optional.

Organizations can also set default values per organizational unit to autocomplete checkout fields, reducing manual entry and ensuring data consistency in purchases.

> ℹ️ Learn more about settings in [Adding or editing accounting fields](https://help.vtex.com/docs/tutorials/adding-or-editing-accounting-fields).

## Address and payment management

**B2B Buyer Portal** supports managing multiple shipping and billing addresses per organization, including internal delivery points (such as loading docks or departments) and designated recipients who may be different from the user placing the order.

Payment cards can be stored at the contract level (shared across the organization) or individual buyer level, with tokenized storage for security.

> ℹ️ Learn more about settings in [Contract settings](https://help.vtex.com/docs/tutorials/contract-settings).

## Organization account

The [Organization account](https://help.vtex.com/docs/tutorials/organization-account) is the self-service interface where buyer organization admins manage all the settings mentioned above. On a single screen, they can:

- View and update contract details, including roles, addresses, payment methods, and product assortments.
- Manage users, roles, and organizational units.
- Configure budgets, buying policies, and accounting fields.

This centralized interface allows buyer organizations to manage their operations autonomously without relying on the merchant for routine administrative tasks.

## Punchout

Punchout allows integration with external procurement systems, enabling purchasing users to authenticate in the VTEX store and browse the catalog directly from their procurement platform. After selecting the products, buyers can transfer the cart back to the procurement system for internal approval.

This feature serves organizations that use centralized procurement software and need their suppliers' storefronts integrated into existing purchasing workflows.

> ℹ️ This feature is exclusively supported by the [Punchout API](https://developers.vtex.com/docs/api-reference/punchout-api#overview). Learn more in the [Punchout integration guide](https://developers.vtex.com/docs/guides/punchout).

## Learn more

- [Adding or editing organizational units](https://help.vtex.com/docs/tutorials/adding-or-editing-organizational-units)
- [Adding users to buyer organizations](https://help.vtex.com/docs/tutorials/adding-users-to-buyer-organizations)
- [B2B Buyer Portal integration overview](https://developers.vtex.com/docs/guides/b2b-buyer-portal-integration-overview) (developer documentation)
