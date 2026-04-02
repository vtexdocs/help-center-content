---
title: 'B2B Buyer Portal'
createdAt: '2026-04-07T10:00:00.000Z'
updatedAt: '2026-04-07T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-buyer-portal
locale: en
---

> ⚠️ B2B Buyer Portal is currently available to selected accounts.

**B2B Buyer Portal** is a VTEX solution that provides a self-service storefront designed for corporate purchasing. It enables buyer organizations to manage their own accounts, commercial agreements, spending controls, and procurement workflows, reducing operational overhead for both merchants and their B2B customers.

This article summarizes the main capabilities of **B2B Buyer Portal** and directs you to the detailed documentation for each topic.

- [Contracts](#contracts)
- [Organization management](#organization-management)
  - [Organizational Units](#organizational-units)
  - [Scopes](#scopes)
  - [Members and roles](#members-and-roles)
- [Finance and compliance](#finance-and-compliance)
  - [Budgets](#budgets)
  - [Buying policies](#buying-policies)
  - [Accounting fields](#accounting-fields)
- [Addresses and payment management](#addresses-and-payment-management)
- [Organization account](#organization-account)
- [Punchout](#punchout)

## Contracts

A [contract](https://help.vtex.com/en/docs/tutorials/b2b-contracts) defines the commercial relationship between your store and a buyer organization. It centralizes the terms of the agreement, including:

- Which products the buyer can access (product assortments).
- Which prices apply (price tables).
- Which payment methods are available.

Contracts serve as the foundation of the buyer's experience. All [organizational units](#organizational-units) within the company inherit the contract's conditions, ensuring consistency across the entire organization. The [scopes](#scopes) feature can then control which of these attributes each unit can see and use.

To streamline contract management at scale, the [Contract Manager Agent](https://help.vtex.com/en/docs/tutorials/contract-manager-agent) allows store operators to update contracts in bulk using natural language instructions, such as adding collections or changing payment methods across hundreds of contracts at once.

## Organization management

B2B Buyer Portal allows buyer organizations to replicate their internal structure within the platform, so each department, branch, or subsidiary can operate with its own rules while sharing a single contract.

### Organizational Units

[Organization Units](https://help.vtex.com/en/docs/tutorials/organization-units) represent the subdivisions within a buyer organization, such as departments, regional offices, or subsidiaries. They follow a hierarchical tree model. A root unit represents the organization as a whole, and child units reflect its internal areas.

Each unit can have specific configurations for product visibility, payment methods, delivery addresses, accounting fields, and order approval rules, allowing the store to align with the buyer company’s internal policies without requiring multiple contracts or accounts. Unit-specific settings are always subject to the contract conditions.

### Scopes

[Scopes](https://help.vtex.com/en/docs/tutorials/scopes-overview) control which organization-level attributes are visible and available to each organizational unit. Administrators can restrict access to contracts, payment methods, credit cards, collections, addresses, and accounting fields per unit, ensuring that buyers only see what is relevant to their organizational unit.

### Members and roles

[Members](https://help.vtex.com/en/docs/tutorials/buyer-organization-members) of a buyer organization are assigned storefront roles that define what they can see and do in the store. Examples of predefined roles include:

- **Buyer:** Places orders.
- **Order Approver:** Approves or rejects orders in approval workflows.
- **Organizational Unit Admin:** Manages the unit's structure, users, and settings.
- **Budget Manager:** Creates and manages budgets and allocations.
- **Buying Policy Manager:** Configures purchase approval rules.

These and other available roles can be combined to match each user's responsibilities, creating a granular permission model that supports complex organizational structures. For the full list, see [Buyer organization members](https://help.vtex.com/en/docs/tutorials/buyer-organization-members).

## Finance and compliance

B2B Buyer Portal provides tools for financial governance and purchasing compliance, allowing organizations to control spending and enforce internal procurement rules.

### Budgets

[Budgets](https://help.vtex.com/en/docs/tutorials/budgets-overview) let organizations define spending limits and distribute them across allocations tied to specific entities, such as users, addresses, or accounting fields. Key capabilities include:

- Setting total amounts and validity periods for each budget.
- Subdividing budgets into allocations for different departments or projects.
- Tracking remaining balances and transaction history.
- Configuring notifications when consumption reaches defined thresholds.

During checkout, the system automatically checks applicable allocations, ensuring orders are funded according to the organization's financial rules. Learn how to set up budgets in [Adding or editing budgets](https://help.vtex.com/en/docs/tutorials/adding-or-editing-budgets).

### Buying policies

[Buying policies](https://help.vtex.com/en/docs/tutorials/buying-policies-overview) are authorization rules that determine whether orders are automatically approved, denied, or sent for manual review. Organizations can configure:

- **Spending thresholds:** Orders above, below, or equal to certain amounts can trigger different approval requirements.
- **Approval workflows:** Up to five hierarchical approval levels, where final approval requires sign-off from all levels.
- **Custom criteria:** Rules based on budgets, order origin, and other factors.

This governance layer ensures that purchasing activity complies with internal policies before orders are placed. Learn how to configure them in [Adding or editing buying policies](https://help.vtex.com/en/docs/tutorials/adding-or-editing-buying-policies).

### Accounting fields

[Accounting fields](https://help.vtex.com/en/docs/tutorials/accounting-fields) capture additional business information during checkout, such as cost center, PO number, project codes, or expense classifications. Fields can be applied at the order, item, or address level and configured as required or optional.

Organizations can also set default values per organizational unit to pre-fill checkout fields, reducing manual input and ensuring data consistency across purchases. Learn how to configure them in [Adding or editing accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields).

## Addresses and payment management

B2B Buyer Portal supports managing multiple shipping and billing addresses per organization, including internal delivery points (such as docks or departments) and designated recipients who may differ from the user placing the order.

Payment cards can be stored at the contract level (shared across the organization) or at the individual shopper level, with tokenized storage for security.

Learn how to configure these settings in [Contract settings](https://help.vtex.com/en/docs/tutorials/contract-settings).

## Organization account

The [Organization account](https://help.vtex.com/en/docs/tutorials/organization-account) is the self-service interface where buyer organization administrators manage all of the above settings. From a single screen, admins can:

- View and update contract details (profile, addresses, payment methods, product assortment).
- Manage users, roles, and organizational units.
- Configure budgets, buying policies, and accounting fields.

This centralized interface empowers buyer organizations to manage their operations autonomously, without depending on the merchant for routine administrative tasks.

## Punchout

Punchout enables integration with external eprocurement systems, allowing procurement users to authenticate into the VTEX store and browse the catalog directly from their procurement platform. After selecting products, buyers can transfer the cart back to the eprocurement system for internal approval.

This capability supports organizations that use centralized procurement software and need their supplier storefronts integrated into existing purchasing workflows.

## Learn more

- [Adding or editing organizational units](https://help.vtex.com/en/docs/tutorials/adding-or-editing-organizational-units)
- [Adding users to a buyer organization](https://help.vtex.com/en/docs/tutorials/adding-users-to-buyer-organization)
- [B2B Buyer Portal integration overview](https://developers.vtex.com/docs/guides/b2b-buyer-portal-integration-overview) (developer documentation)
