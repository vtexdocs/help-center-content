---
title: 'Adding BIN information'
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2026-11-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: adding-bin-information
locale: en
hidden: false
---

The Bank Identification Number (BIN) consists of the first six or eight digits of a credit or debit card and identifies the card's [issuing institution](/en/docs/tutorials/financial-agents-in-the-payment-flow#issuing-bank). In the following example, the first six digits, in blue and marked above the number, form the six-digit BIN. Together with the next two digits, in pink, they form the eight-digit BIN, marked below the number.

![Sample card with the number 5502 0912 3456 7890, the first six digits marked in blue above the number and the first eight digits marked in pink below it](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-methods-and-conditions/cards-benefits-and-gift-cards/adding-bin-information_1.png)

New BINs are created when the issuing institution launches new card profiles or issues new cards for an existing model, and also when one [card network](/en/docs/tutorials/financial-agents-in-the-payment-flow#card-network) is acquired by another.

When a BIN isn't registered or is outdated on VTEX, checkout may identify the card with the wrong card network or issuing institution, or may not recognize it at all. Promotions, payment conditions, and installment options configured for the issuing institution may not appear or may differ from what was configured, and payment may be declined or return a generic error only for cards from that institution. In these cases, notify VTEX so the cards can be validated correctly at payment.

## Requesting the addition or update of BINs

To add a new BIN or update the information of a BIN already registered on VTEX, follow the steps below:

1. Ask the issuing institution that owns the BINs for an official PDF document that explicitly confirms this ownership.

   > ⚠️ To ensure the security and legitimacy of changes, VTEX only processes requests accompanied by this document. .EML files, screenshots, and email conversations are not accepted as proof, even when sent by an employee of the issuing institution.

2. Fill out a spreadsheet with the following information:
   - __code__: new BIN to be added, or existing BIN to be updated.
   - __cardBrand__: card network corresponding to the BIN.
   - __cardType__: card type, credit or debit.
   - __country__: country where the card is used.
   - __bank__: card's issuing institution.
   - __cvvSize__: number of characters in the CVV (Card Verification Value).
   - __cardLevel__: card classification (Gold, Platinum, Black, among others).

   The following image shows an example of a filled-out spreadsheet:

   ![Sample spreadsheet with the columns code, cardBrand, cardType, country, bank, cvvSize, and cardLevel, and one row filled in with a BIN for a Mastercard Gold credit card issued in Brazil](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-methods-and-conditions/cards-benefits-and-gift-cards/adding-bin-information_2.PNG)

3. Open a ticket at [VTEX Support](https://supporticket.vtex.com/support) and attach the spreadsheet and the PDF document.
