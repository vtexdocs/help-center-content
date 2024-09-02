---
title: '"Product Specification" filter on Collection Module assuming incorrect values'
id: 2vg3t5kp7j4Ttla53pVjck
status: PUBLISHED
createdAt: 2023-10-26T22:22:44.895Z
updatedAt: 2023-10-26T22:22:45.413Z
publishedAt: 2023-10-26T22:22:45.413Z
firstPublishedAt: 2023-10-26T22:22:45.413Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-specification-filter-on-collection-module-assuming-incorrect-values
locale: en
kiStatus: Backlog
internalReference: 926593
---

## Summary


On the Collection Module, the Product Specifications filter is not working properly when the specification has the type "Text" and "Large Text". When this kind of specification is selected, a text box is opened to insert the possible values separated by a comma, tab, or enter. However, when typing only one character, the system assumes it as a value even without separating the terms.


##

## Simulation



1. Create a Product Specification with the type "Text"
2. Go to Collection Module, click on the "More" filter, select "Product Specification"
3. Localize the specification you've created and type anything, see that even one character will become a term of search


##

## Workaround


Continue to type until the term is completed and then delete the incorrect terms





