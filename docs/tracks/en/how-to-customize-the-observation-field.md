---
title: 'How to customize the observation field'
id: 3os5JpgOpiU500Yz2zOl19
status: DRAFT
createdAt: 2019-05-22T19:00:51.038Z
updatedAt: 2020-08-03T20:02:10.252Z
publishedAt: 
firstPublishedAt: 2019-05-22T21:10:23.345Z
contentType: trackArticle
productTeam: Shopping
slug: how-to-customize-the-observation-field
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

inStore has an “observation” field where additional order information can be saved. This data is sent to the OMS through the `openTextField` field and can be recovered later either in Admin or through the API.

You can customize this field by changing its settings in ‘inStore’ to receive specific data, such as the sales rep ID card number. 

To rename the text, which is displayed by default, you must edit `checkout-instore-custom.js` found in Admin. In this archive, you must find an item called `window.INSTORE_CONFIG` and add the following code to it:

```
window.LOCALE_MESSAGES = {
  locale: "en",
  messages: {
    en: {
      cartObservation: "Sales rep ID card number", // title that is displayed in the cart
      cartObservationTitle: "Sales rep ID card number", // is displayed in the observation modal dialog window
      observationNote: "Insert sales rep ID card number" // description of the observation modal dialog window
    }
  }
};
```

<div class="alert alert-danger">
To avoid rendering other functionalities useless, it is imperative that you do not delete any of the already existing <code>window.INSTORE_CONFIG</code> properties.
</div>

If you need to apply a mask or validation logic to data inserted in this field, you can do so by including an event listener function to the `checkout-instore-custom.js` archive. This `note.visible` function is triggered when the modal dialog window is open, thereby returning your logic.

```
document.addEventListener(
  "note.visible",
  function() {
    // adds a mask or validation logic,
    // example: to get the textarea observation element, you can execute the following
    // var note = document.getElementById('note')
  },
  false
);
```

If you need something more advanced, such as a specific requisition based on inserted data, you can listen for the `note.change` event that is triggered every time the “save” button is pressed. 

```
document.addEventListener(
  "note.change",
  function(inputData) {
    // add logic that uses the data
    // "inputData" being the field content
  },
  false
);
```
