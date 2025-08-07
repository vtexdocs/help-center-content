---
title: "B2B Organizations Detail UI only shows 100 first sellers"
id: 6gZm70bIF0p92u6WtDZqdO
status: PUBLISHED
createdAt: 2024-01-15T21:29:19.105Z
updatedAt: 2024-08-26T13:48:07.233Z
publishedAt: 2024-08-26T13:48:07.233Z
firstPublishedAt: 2024-01-15T21:29:19.660Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-detail-ui-only-shows-100-first-sellers
locale: en
kiStatus: Fixed
internalReference: 966450
---

## Summary


B2B Organizations Detail UI only shows 100 first sellers; the UI doesn't have pagination, making it impossible to select a seller if not in the first page


##

## Simulation



- Make sure the account has more than 100 sellers registered;
- Access the seller tab in B2B Organizations Detail UI;
- Only the 100 first sellers will be shown.


##

## Workaround



- Perform a getOrganizationById via graphQL using the app:

    { getOrganizationById(id:""){ id name tradeName status collections { id } paymentTerms { id } priceTables customFields { name type value useOnRegistration } salesChannel sellers { id name }}}

- Perform a mutation using the data from the previous graphQL:

    mutation { updateOrganization ( id: "", name: "" tradeName: "" status: "active" collections: [] paymentTerms: [] priceTables: [] customFields: [] salesChannel: null sellers: [{ id: "", name: "" }] ) { id }}





