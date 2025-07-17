---
title: "Save card doesn't work when 3DS2 is active"
id: 6rq9ndcI52WEW1onvc1uNd
status: PUBLISHED
createdAt: 2024-12-03T18:20:53.391Z
updatedAt: 2024-12-03T18:20:54.319Z
publishedAt: 2024-12-03T18:20:54.319Z
firstPublishedAt: 2024-12-03T18:20:54.319Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-when-3ds2-is-active
locale: en
kiStatus: Backlog
internalReference: 319708
---

## Summary


When customers attempt to add a new credit card in the MyAccount section of stores that utilize 3DS authentication (V1 or V2), they may encounter an error message stating, "There was an error while trying to save the card." This error occurs because the credit card has not yet been validated.

To validate the card, it must be associated with a payment condition. Once this association is established, a charge of 1.50 USD will be made to the card. However, this transaction is subsequently canceled, and the card is validated in the process.

In stores where acquirers employ 3DS authentication, this transaction triggers the authentication process and prompts a request for card validation. However, since it is not an actual purchase, the "challenge" step of the 3DS authentication cannot be completed, resulting in the aforementioned error when attempting to save the card.


##

## Simulation


To simulate the steps leading to the error, please follow the instructions outlined below:


1. Access the VTEX Admin platform.
2. Configure an acquirer that utilizes 3DS authentication. For V1, ensure it is properly set up. For V2, refer to our article "Setting up 3DS 2 authentication flow" for more detailed instructions.
3. Set up a credit card payment method (e.g., Mastercard, Visa, American Express) to be processed by the configured acquirer.
4. Visit your store's home page.
5. Log in by providing your email address and password.
6. Click on "MyAccount" to access your account settings.
7. Navigate to the "Credit cards" section.
8. Select the option to "Add new card."
9. Fill in all the required fields with the necessary card information.
10. Click on "Save new card" to proceed with saving the card details.
11. Following this process will result in an error being returned, indicating the issue encountered during the card addition.


##

## Workaround


You can resolve this error by adding a payment condition for a credit card associated with an acquirer that does not use 3-D Secure (V1 or V2)





