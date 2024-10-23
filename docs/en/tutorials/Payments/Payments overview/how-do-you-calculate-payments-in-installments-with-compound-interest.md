---
title: 'How do you calculate payments in installments with compound interest?'
id: frequentlyAskedQuestions_4758
status: CHANGED
createdAt: 2019-01-24T20:46:01.816Z
updatedAt: 2021-03-30T14:40:30.092Z
publishedAt: 2020-09-16T18:58:19.340Z
firstPublishedAt: 2019-01-24T22:15:15.153Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: how-do-you-calculate-payments-in-installments-with-compound-interest
locale: en
legacySlug: how-do-you-calculate-payments-in-installments-with-interest
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

There are two possible configurations for collecting installment payments with compound interest:
- Collection at the **beginning of the period**;
- Collection at the **end of the period**.

## Beginning of the period

Collection at the beginning of the period is calculated as follows:

1. i = Interest rate
2. n = Number of installments
3. PV = Present Value (total amount of the purchase without interest)
4. Installment = ![juros-inicio-periodo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/how-do-you-calculate-payments-in-installments-with-compound-interest_1.png)

## End of the period

Collection at the end of the period is calculated as follows:

1. i = Interest rate
2. n = Number of installments
3. PV = Present Value (total amount of the purchase without interest)
4. Cash Flow Multiplier =![cash-flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/how-do-you-calculate-payments-in-installments-with-compound-interest_2.png)
5. Installment = `PV x Cash Flow Multiplier`

## Examples

### Beginning of the period

1. i = 1%
2. n = 12
3. PV = 1000
![conta0](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/how-do-you-calculate-payments-in-installments-with-compound-interest_3.png)

### End of the period

1. i = 1%
2. n = 12
3. PV = 1000
4. ![conta1](//images.contentful.com/alneenqid6w5/4CaAz5DKdaUSY0OwaGEsUu/4afb38b8c7a78977d011f2d6333800d6/conta1.png)![conta2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payments overview/how-do-you-calculate-payments-in-installments-with-compound-interest_4.png)
