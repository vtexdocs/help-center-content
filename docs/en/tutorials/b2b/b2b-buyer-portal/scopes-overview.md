---
title: 'Scopes overview'
createdAt: '2026-03-04T10:00:00.000Z'
updatedAt: '2026-03-30T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: en
---

> ⚠️ This feature is only available to stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available for selected accounts.

**Scopes** is the feature of the organization account that allows B2B companies to restrict attributes of **organizational units** (OU). This allows companies to control which information business unit buyers can view and use, limiting user access to what is necessary for their roles.

Each organizational unit has its own scope, not inherited from its parent unit but configured individually. See an example in the following image, which represents the entirety of the organization account dimensions for the ABC set and shows three child units:

![scopes-overview_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/b2b-buyer-portal/scopes-overview_1_EN.png)

The scenarios are:

- **Organizational unit 1:** Has no scope configured and, therefore, has all dimensions of the organization account.
- **Organizational unit 2:** Has a scope configured and only has dimension A.
- **Organizational unit 3:** Has a scope configured and only has dimensions B and C.

## Dimension restrictions

The restrictions that can be imposed on **Organizational Units** are related to:

- Contracts
- [Payment methods and conditions](https://help.vtex.com/en/docs/tutorials/difference-between-payment-methods-and-payment-conditions)
- Credit cards
- [Collections](https://help.vtex.com/en/docs/tutorials/collection-types)
- Addresses
- Accounting fields

> ℹ️ **Scopes** management via API is done using the [Organizational Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Storefront Roles

To view and manage the scope of an organizational unit, the user's [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles) profile must have the `View_Organization_Unit` and `Edit_Organization_Unit` resources.

> ℹ️ For more information, see the article [Adding users to buyer organizations](https://help.vtex.com/en/docs/tutorials/adding-users-to-buyer-organizations).
