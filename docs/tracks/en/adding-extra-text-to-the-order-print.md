---
title: 'Adding extra text to the order print'
id: 6x3F7K7XfiVoOPsKR9ukUG
status: DRAFT
createdAt: 2020-06-28T19:11:23.042Z
updatedAt: 2021-11-25T14:00:11.896Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:17:44.814Z
contentType: trackArticle
productTeam: Shopping
slug: adding-extra-text-to-the-order-print
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: Adding extra text to the order print
---

>❗ The configuration of extra text added to the order printout, explained in this article, involves changing the JavaScript file `checkout-instore-custom.js`. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

By default, the order summary print does not contain any custom text. If you want to add extra text to the order print, it is necessary to edit the file `checkout-instore-custom.js`.

In this file, inside the `window.INSTORE_CONFIG` object, add the `printedOrderExtraText` property. The value of this property will be the new printed text. The code should look like the example below:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Write your extra text here',
}
```

>❗ Do not remove any of the other properties present in the `window.INSTORE_CONFIG` object, to avoid breaking other functionalities.

After reloading inStore, whenever a salesperson prints an order, this text will appear on the printout.

## Example

Before adding extra text, the printout of the order summary has the following format:

![28. Adding extra text to the order print - 1](https://images.ctfassets.net/alneenqid6w5/6kSTTkw3pk8A7aiTJXqDJJ/ec86382eb7e27484f3f37a80752a6153/28._Adding_extra_text_to_the_order_print_-_1.png)

In our example, we changed the `checkout-instore-custom.js` file by inserting the following extra text:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Esta nota não tem validade fiscal',
}
```

Now, whenever an order summary is printed, we will get the following result:

![28. Adding extra text to the order print - 2](https://images.ctfassets.net/alneenqid6w5/1g4wvz3z8tIEZuRSSiACps/c227091af9a69d0af04d21c2b6b0b8d3/28._Adding_extra_text_to_the_order_print_-_2.png)
