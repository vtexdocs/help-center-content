---
title: 'Buying policies'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buying-policies
locale: en
---

> ⚠️ The **Buying policies** feature is only available for the **B2B Buyer Portal**.

**Buying policies** is a feature that allows users to configure mechanisms and define criteria to automatically authorize or deny orders. It operates as a control layer in the purchasing process, allowing users to create customized order review workflows.

The solution increases organizational governance and ensures compliance with buying policies. Its mechanisms allow combining various types of rules:

- **Spending threshold:** Spending limits per order, ensuring that orders above, below, or equal to certain amounts require approval.
- **Buying criteria:** Specific rules that determine whether an order requires approval, based on multiple factors (thresholds, budgets, order origin, among others).
- **Approval flow:** A multi-level approval process, which may vary according to organizational complexity.
- **Management of orders under approval:** Monitoring orders awaiting approval to ensure they only proceed in the flow after approval.

## How it works

The steps to configure a buying policy are:

1. The user configures the order review criterion.
2. This criterion is associated with an action, which can be:
   - Approve order
   - Deny order
   - Require manual approval
3. For manual approval, the user configures one to five levels of hierarchical approval. While any level can deny an order, final approval requires authorization from all levels.

## Storefront permissions

To configure buying policies, the user's [Storefront permissions](https://developers.vtex.com/docs/guides/storefront-permissions) role must have the `ManageBuyingPolicies` resource. To manually approve orders, the `ApproveOrders` resource is required.

## Configuring buying policies

Users can add, edit, or remove buying policies through the organizational unit interface. For more information, see the article [Adding or editing buying policies](link).

> ℹ️ To manage order authorization rules via API, see the [Buying Policies API](https://developers.vtex.com/docs/api-reference/buying-policies-api) and the developer guide [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
