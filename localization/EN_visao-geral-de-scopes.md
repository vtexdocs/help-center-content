---
title: 'Scopes overview'
createdAt: '2026-03-04T10:00:00.000Z'
updatedAt: '2026-03-04T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: en
---

> ⚠️ This feature is only available to stores using B2B Buyer Portal, which is currently available for selected accounts.

**Scopes** is the feature of the organization account that allows B2B companies to restrict attributes of **organizational units** (OU). This allows companies to control which information business unit buyers can view and use, limiting user access to what is necessary for their roles.

Each organizational unit has its own scope, not inherited from its parent unit but configured individually. See an example in the following image, which represents the entirety of the organization account dimensions for the ABC set and shows three child units:

![scopes-overview_1_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/scopes-overview_1_PT.png)

The scenarios are:

- **Organizational unit 1:** Has no scope configured and, therefore, has all dimensions of the organization account.
- **Organizational unit 2:** Has a scope configured and only has dimension A.
- **Organizational unit 3:** Has a scope configured and only has dimensions B and C.

## Dimension restrictions

The restrictions that can be imposed on **organizational units** are related to:

- Contracts
- [Payment methods and terms](https://help.vtex.com/en/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento)
- Credit cards
- [Collections](https://help.vtex.com/en/docs/tutorials/tipos-de-colecao)
- Addresses
- Accounting fields

> ℹ️ **Scopes** management via API is done using the [Organizational Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Storefront permissions

To view and manage the scope of an organizational unit, the user's [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-permissions) role must have the `View_Organization_Unit` and `Edit_Organization_Unit` resources.

> ℹ️ For more information, see the article [Buyer organization members](https://help.vtex.com/en/docs/tutorials/membros-da-organizacao-compradora).
