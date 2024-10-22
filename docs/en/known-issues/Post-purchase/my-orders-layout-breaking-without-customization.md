---
title: 'My Orders layout breaking without customization'
id: 6o2E1VOSaW2Yso0Cg0uU8Q
status: PUBLISHED
createdAt: 2017-05-26T15:03:53.391Z
updatedAt: 2019-12-31T15:18:57.122Z
publishedAt: 2019-12-31T15:18:57.122Z
firstPublishedAt: 2017-05-26T15:06:46.244Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_6
tag: My Orders
slugEN: my-orders-layout-breaking-without-customization
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

<div class="alert alert-success">
  <div><strong>Fix:</strong></div>
  <div>The problem has been corrected with the property <code>:root { font-size: 16px }</code> being delivered by My Orders itself.</div>
</div>

---

![Screen Shot 2017-05-26 at 12.01.58](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Post-purchase/my-orders-layout-breaking-without-customization_1.png)

If the layout of the new My Orders presents problems in your store _out of the box_, without any customization, it may be that your store's CSS is interfering with it.

Some versions of Bootstrap add the CSS `html {font-size: 10px}`, which interferes with the sizes of the elements of the new My Orders.

## Simulation

1. Access `{STORENAME}.com/account/orders`;
2. See the orders list.

## Workaround

Customize your store's CSS with the CSS property `html { font-size: 16px }` in My Orders, to restore the elements original proportion. 

