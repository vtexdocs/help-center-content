---
title: 'What is the Minimum Value Insurance field?'
id: frequentlyAskedQuestions_158
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.626Z
updatedAt: 2020-01-08T20:24:05.826Z
publishedAt: 2020-01-08T20:24:05.826Z
firstPublishedAt: 2019-01-24T21:55:49.807Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: what-is-the-minimum-value-insurance-field
legacySlug: what-is-the-minimum-value-insurance-field
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
order: 1
---

The Minimum Value Insurance is a field of the freight table imported into the carrier, which works as a kind of insurance, based on the value of the products, taking into account the additional per price column. If the additional per price is less than the Minimum Value Insurance, you must consider the Minimum Value Insurance instead of the additional, and add it to the absolute value of the freight.

### Examples

- Cart: $100.00
- Additional per price: 10% or $10.00.
- Absolute freight: $10.00
- Freight charged considering additional per price: $20.00

If the value registered in Minimum Value Insurance is $15.00, **the freight will be $25.00.** Since it is more than the additional per price, this is the value that must be added to the R$ 10.00 of absolute freight.

If the value registered in Minimum Value Insurance was $5.00, **the freight would be $20.00** (absolute freight + additional per price), once the additional per price beats the minimum value required for insurance.
