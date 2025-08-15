---
title: 'Adding BIN information'
id: 7xvo4JJ53WM7aLzufdC4au
status: PUBLISHED
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2025-08-11T19:36:44.910Z
publishedAt: 2025-08-11T19:36:44.910Z
firstPublishedAt: 2024-05-02T19:44:35.388Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: adding-bin-information
legacySlug: adding-bin-information
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

The Bank Identification Number (BIN) consists of the first six or eight digits of a credit or debit card and identifies the card's issuing institution.

![BIN_image_digits_EN_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/payments-overview/adding-bin-information_1.png)

When a banking institution wants to create new card profiles or issue new cards for an existing model, new BINs are required. This also applies when a card [brand](https://help.vtex.com/en/tutorial/what-is-a-credit-card-brand--4bNba5QYuIwKEmac88KwyI) is acquired by another.

In such cases, VTEX must be notified to ensure that the new cards are correctly validated during the payment process for purchases made on the platform.

## Submitting an add BIN request

To add a new BIN or update an existing one on VTEX, please open a ticket with [VTEX Support](https://help.vtex.com/en/support).

> ⚠️ To ensure the security and legitimacy of the requested changes, it is mandatory to provide formal proof from the financial institution confirming ownership of the informed BINs. Requests without this validation cannot be processed.

In the ticket, you should attach a spreadsheet with the following information:

- __code__: New BIN to be added or existing BIN to be updated.
- __cardBrand__: Card brand of the BIN.
- __cardType__: Type of card (credit or debit).
- __country__: Country where the card will be used.
- __bank__: Issuing bank of the card.
- __cvvSize__: Number of characters in the CVV (Card Verification Value).
- __cardLevel__: Card category (e.g., Gold, Platinum, Black, among others).

Template example:

![Bin_spreadsheet](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/payments-overview/adding-bin-information_2.PNG)
