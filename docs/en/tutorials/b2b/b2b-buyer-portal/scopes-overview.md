---
title: 'Scopes overview'
createdAt: '2026-03-10T10:00:00.000Z'
updatedAt: '2026-03-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: en
---

> ⚠️ This feature is exclusive to stores using B2B Buyer Portal, currently available for selected accounts.

**Scopes** are the Organization Account feature that allows buyer organizations to restrict the attributes of **Organizational Units** (OU). This enables companies to control which information buyers from a business unit can view and use, limiting user access to what is necessary for their function.

Each organizational unit has its own scope, which is not inherited from the organizational unit it is subordinate to, but configured individually. See an example in the image below, which represents the full set of dimensions of the Organization Account for group ABC and shows three child units:

![scopes-overview_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/b2b-buyer-portal/scopes-overview_1_EN.png)

The scenarios shown are:

- **Organizational unit 1:** has no scope configured and therefore has access to all dimensions of the Organization Account.
- **Organizational unit 2:** has a scope configured and has access only to dimension A.
- **Organizational unit 3:** has a scope configured and has access only to dimensions B and C.

## Dimension restrictions

The restrictions that can be applied to **Organizational Units** are related to:

- Contracts
- [Payment methods and conditions](https://help.vtex.com/en/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento)
- Credit cards
- [Collections](https://help.vtex.com/en/docs/tutorials/tipos-de-colecao)
- Addresses
- Accounting fields

> ℹ️ **Scopes** management via API is done through the [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Storefront permissions

To view and manage the scope of an organizational unit, the user's [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-permissions) profile must have the `View_Organization_Unit` and `Edit_Organization_Unit` resources.

> ℹ️ For more information, see the article [Buyer organization members](https://help.vtex.com/en/docs/tutorials/membros-da-organizacao-compradora).
