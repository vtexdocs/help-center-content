---
title: 'Search has no products if seller 1 name in the Seller Management differs from trading name in Account Management when using B2B Suite'
id: 7a3bwqRmeSClHMoFmyIY2a
status: PUBLISHED
createdAt: 2023-12-01T20:06:13.492Z
updatedAt: 2023-12-01T20:15:07.659Z
publishedAt: 2023-12-01T20:15:07.659Z
firstPublishedAt: 2023-12-01T20:06:14.083Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: search-has-no-products-if-seller-1-name-in-the-seller-management-differs-from-trading-name-in-account-management-when-using-b2b-suite
locale: en
kiStatus: Backlog
internalReference: 946391
---

## Summary


B2B organizations use the sellers' names from the Seller Management. If an organization has seller 1 assigned, the name saved will be from Seller Management, but no products may be shown in the search if it differs from the trading name in Account Management.


##

## Simulation



- Have an account with seller 1 named in Seller Management different from the trading name in Account Management;
- Create a B2B Organization and assign the seller 1;
- Login to the account; no products are shown.


##

## Workaround



- Access GraphQL IDE and select vtex.b2b-organizations-graphql;
- Use the query below to get all the organization details:

    { getOrganizationById(id:"insert here the organization id"){ id name tradeName status collections{ id name } paymentTerms{ id name } priceTables customFields{ name type value dropdownValues{ value label } useOnRegistration } salesChannel sellers { id name } }}

- Send a mutation to update the seller name for seller 1 using the information retrieved above:

    mutation { updateOrganization( id: "" name: "" tradeName: "" status: "active" collections: [{ id: "" name: "" }] paymentTerms: [{ id: "" name: "" }] priceTables: [""] customFields: [] salesChannel: "" sellers: [{ id: "1", name: "trade name from Account Management" }] ){ id status message }}





