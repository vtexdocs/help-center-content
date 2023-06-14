---
title: 'Enabling the remarks field in the order screen'
id: 8Aj21R8bll0tdrxHWjVOs
status: DRAFT
createdAt: 2020-06-28T18:36:12.121Z
updatedAt: 2021-11-25T13:59:45.186Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:40:29.042Z
contentType: trackArticle
productTeam: Shopping
slug: enabling-the-remarks-field-in-the-order-screen
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: enabling-the-remarks-field-in-the-order-screen
---

<div class="alert alert-danger">
The customization explained in this article involves changing the JavaScript file <code>checkout-instore-custom.js</code>. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.
</div>

The inStore app allows the use of a "Remarks" field, where it's possible to store additional information regarding the order.

The data entered in this field is sent via API to the Order Management System. They populate the `openTextField` field, which can be retrieved later either in the Admin or through an API call.

A common example of using the remark field is the case where the store wants to receive an identification number from the salesperson who made the sale. The salesperson has to enter this number in the remarks field whenever closing an order.

The remarks field is enabled by a change to the file `checkout-instore-custom.js`, inside the `window.INSTORE_CONFIG` object. When enabling the field, you must set:

- The title of the field that appears in the cart.
- The title that appears in the remarks modal.
- The description of the remarks modal.

This information must be added to the code as shown in the example below.

```json
window.LOCALE_MESSAGES = {
  locale: "en",
  messages: {
    en: {
      cartObservation: "Salesperson ID", // title that appears in the cart
      cartObservationTitle: "Salesperson ID", // title that appears in the remarks modal
      observationNote: "Enter the salesperson's document ID" // description of the remarks modal
    }
  }
};
```
 
<div class="alert alert-danger">
Do not remove any of the other properties present in the <code>window.INSTORE_CONFIG</code> object, to avoid breaking other functionalities.
</div>
                             
If it's necessary to apply some validation logic or mask to the data entered in this field, you can include in the `checkout-instore-custom.js` file a function that listens to the `note.visible` event, which is triggered when the modal is open, and then develop your logic.

```json
document.addEventListener (
  "note.visible",
  function () {
    // add mask logic, validation, etc.
    // example: to capture the “textarea” element of the remarks field, you can use the following code:
    // var note = document.getElementById('note')
  },
  false
);
```

If you need something more advanced, like making a specific request based on the data entered, it is possible to listen to the `note.change` event, which is emitted whenever the button to save the data is pressed.

```json
document.addEventListener (
  "note.change",
  function (inputData) {
    // add the logic that uses the data
    // the content of the field is the value of "inputData"
  },
  false
);
```
