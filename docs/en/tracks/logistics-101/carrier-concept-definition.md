---
title: 'What is a carrier?'
id: 3fLedVI57srjBDDxxGgOWe
status: ARCHIVED
createdAt: 2019-10-08T19:46:57.025Z
updatedAt: 2022-03-08T18:43:18.044Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:50:14.542Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: carrier-concept-definition
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---


A carrier is the company responsible for the distribution of SKUs sold by a store. Similar to the warehouse dock, the carrier is also one of the logistics route steps of a store, namely the last one.

Usually, a single store has several assigned carriers. However, in this case, carrier have distinct characteristics among themselves, which allows the store to customize its SKU shipping process. 

## Shipping options
Shipping options are attributes that makes each carrier unique. The characteristics are configured when carriers are added to the system.

### Package limits
The package limits are comprises of the sum of H+W+L, which determines the maximum dimensions a package shipped by that carrier can have.

If a product exceeds these dimensions, there are two shipping possibilities: either the order is split into more than one package or it's shipped by another carrier who accepts bigger or over-sized packages.

### Data Conversion
Converting data consists of the "shipping factor" and "use the cubed weight only if gross (weight) is more than" values. Both attributes are used to calculate the package's volumetric (cubed) weight - a measurement that taken the package weight and volume into account.

### Weekends and holidays
The value "Weekends and holidays" defines whether a carrier ships outside of business days or not. 

### Minimum items per package
For a delivery to be split into several packages, you'll need to set the minimum number of items that are needed for each package. The option "ship only if the number of items is multiple of" sets the minimum number of items needed to complete the delivery.

### Minimum item value
The last shipping options value refers to "the total amount cart value must be greater than x and less than y". It sets an optional range of allowable values for deliveries by the carrier and must be based on the store's business rule.

<div class=”alert alert-warning”>
Bear in mind that when any of the predefined shipping options are not met, the selected carrier will <strong>not</strong> handle that delivery.
</div>
