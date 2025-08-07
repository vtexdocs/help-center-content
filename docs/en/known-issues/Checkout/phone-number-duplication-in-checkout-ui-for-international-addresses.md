---
title: "Phone Number Duplication in Checkout UI for International Addresses"
id: 2BKELWWj8lhLf47Zt1FpZx
status: PUBLISHED
createdAt: 2025-07-11T21:06:14.660Z
updatedAt: 2025-07-11T21:06:15.438Z
publishedAt: 2025-07-11T21:06:15.438Z
firstPublishedAt: 2025-07-11T21:06:15.438Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: phone-number-duplication-in-checkout-ui-for-international-addresses
locale: en
kiStatus: Backlog
internalReference: 1259047
---

## Summary


It has been identified that in the ARG store, when an international phone number (e.g., 3454 15402807) is entered in the checkout, the phone number field is shown duplicated in the checkout user interface after completing the personal information step. The duplication is present only in the display of the checkout UI; the stored value in the orderForm remains correct, with no duplication. The issue was observed for Argentine numbers but may occur in similar international cases.


##

## Simulation



1. Add random items to the cart and proceed to checkout.
2. In the personal information step, enter an international phone number, such as 3454 15402807.
3. Continue to the shipping step.
4. Notice that the phone number appears duplicated on the checkout screen.
5. If you reload the page, the number displays correctly again.
6. In the orderForm, the stored number does not show duplication.


##

## Workaround


N/A





