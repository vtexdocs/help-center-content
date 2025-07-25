---
title: 'Interacting with the address component while some data on the UI is still in a loading state changes the address insertion mode'
id: 7t3jzIpIppmZDAc9R2BgpS
status: PUBLISHED
createdAt: 2023-09-13T20:39:43.294Z
updatedAt: 2023-09-13T20:39:44.079Z
publishedAt: 2023-09-13T20:39:44.079Z
firstPublishedAt: 2023-09-13T20:39:44.079Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-address-component-while-some-data-on-the-ui-is-still-in-a-loading-state-changes-the-address-insertion-mode
locale: en
kiStatus: Backlog
internalReference: 423811
---

## Summary


When the user chooses to change their address while some respective data is still loading on the page, the address component changes from geolocation to the component with a dropdown. The data can be, for example, selecting a store to pick up. While the data loads in the interface, the user clicks on "change address", with that, the return address is in another component, not in the geolocation component.


##

## Simulation



- Configure an account to use geocoordinates at checkout;
- Search for an address in the shipping step;
- Click on Change while the page is loading;
- The address component will change and ask you to fill out the address information


##

## Workaround


N/A




