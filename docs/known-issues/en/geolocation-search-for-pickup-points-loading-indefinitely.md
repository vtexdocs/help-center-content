---
title: Geolocation search for pickup points loading indefinitely
id: 9HACCiPSeJY9174Qh9FQb
status: PUBLISHED
createdAt: 2021-09-08T18:11:35.333Z
updatedAt: 2021-10-19T13:09:47.890Z
publishedAt: 2021-10-19T13:09:47.890Z
firstPublishedAt: 2021-09-08T19:28:29.303Z
contentType: knownIssue
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slug: geolocation-search-for-pickup-points-loading-indefinitely
kiStatus: Fixed
internalReference: 
---

## Summary

At checkout, if the customer's location is obtained from the browser, the map keeps loading indefinitely. It displays the message "Awaiting permission to get your current location".


## Simulation

To simulate a scenario that requires changing the location identified by the browser, we recommend using the browser's override geolocation. If you are using Google Chrome, see the article [Chrome's override geolocation](https://developer.chrome.com/docs/devtools/device-mode/geolocation/).

After making sure your browser meets the said condition, follow the steps below:

1. Access the store.
2. Add products to the shopping cart.
3. Proceed to checkout.
4. Enable geolocation tracking in your browser.
5. At checkout, select the **pickup point** delivery option. 
6. Note that the page is stuck on loading, displaying the message "Awaiting permission to get your current location".

![erro EN](//images.ctfassets.net/alneenqid6w5/4MVL2ctjpB3TRIfQt1ht3O/22bc5539ee83ef63668f4ad01c7e0933/erro_EN.png)

## Workaround

There is no workaround for this scenario. 


