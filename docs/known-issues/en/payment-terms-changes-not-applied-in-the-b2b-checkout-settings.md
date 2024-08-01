---
title: 'Payment Terms changes not applied in the B2B Checkout Settings'
id: 12PfZx6O0MIUSIFdpQdUdI
status: PUBLISHED
createdAt: 2024-04-18T19:07:22.743Z
updatedAt: 2024-07-25T21:47:29.442Z
publishedAt: 2024-07-25T21:47:29.442Z
firstPublishedAt: 2024-04-18T19:07:23.644Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: payment-terms-changes-not-applied-in-the-b2b-checkout-settings
locale: en
kiStatus: Fixed
internalReference: 1019548
---

## Summary


Updating the Payment Terms in Organization Details UI for an organization doesn't apply to B2B Checkout Settings.

This behavior occurs because the update occurs only for the organization, but the B2B Checkout Settings uses information from the cost center, which is not updated by the Organization Details UI.


##

## Simulation



- Create an organization;
- In the Organization Details UI, update the Payment Terms;
- Access the website, assemble a cart, and access checkout; the Payment Terms will remain the same.


##

## Workaround



- Access GraphQL IDE and select vtex.b2b-organizations-graphql;
- Use the query below to get the cost center details:

    { getCostCenterById (id:"insert here the cost center id"){ name addresses{ addressId addressType addressQuery postalCode country receiverName city state street number complement neighborhood geoCoordinates reference } phoneNumber businessDocument customFields{ name type value dropdownValues{ value label } useOnRegistration } stateRegistration paymentTerms{ id name } }}

- Use the query below to get the payment terms from the organization:

    { getOrganizationById(id:"insert here the organization id"){ paymentTerms{ id name } }}



- Send a mutation to update the cost center, adding the payment terms from the organization to the response from the cost center:

    mutation updateCostCenter($id: ID!, $input: CostCenterInput!) { updateCostCenter( id: $id input: $input ){ id status }}{ "id": "", "input": { "name": "", "addresses": [{ "addressId": "", "addressType": "", "addressQuery": "", "postalCode": "", "country": "", "receiverName": "", "city": "", "state": "", "street": "", "number": "", "complement": null, "neighborhood": "", "geoCoordinates": [], "reference": null } ], "phoneNumber": "", "businessDocument": "", "customFields": [], "stateRegistration": "", "paymentTerms": [{ "id": "", "name": "" }, { "id": "", "name": "" }] }}






