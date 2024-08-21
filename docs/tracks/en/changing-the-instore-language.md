---
title: 'Changing the inStore language'
id: 5xZTQNOMRKXqWjWol2sUbu
status: DRAFT
createdAt: 2020-06-28T17:20:22.942Z
updatedAt: 2021-11-25T13:59:42.220Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:35:12.789Z
contentType: trackArticle
productTeam: Shopping
slug: changing-the-instore-language
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: changing-the-instore-language
---

>❗ The language change explained in this article involves altering the JavaScript file `checkout-instore-custom.js`. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

Currently, it is possible to use the inStore in __Portuguese__, __English__, or __Spanish__.

By default, the application's language is Portuguese, but you can change this through the file `checkout-instore-custom.js`. Check out the article [How to customize inStore](https://help.vtex.com/en/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2) for further information about changing this file.

To change the language, first make sure that the `checkout-instore-custom.js` file contains the following lines of code:

```json
/* Locale configurations */
window.LOCALE_MESSAGES = {
  locale: 'pt',
  messages: {
    pt: {
     
    },
  },
};

function setNewLocaleMessages() {
  const localeEvent = new Event('changeLocaleMessages')
  localeEvent.data = window.LOCALE_MESSAGES
  document.dispatchEvent(localeEvent)
}

if (window.inStoreIsLoaded) {
  setNewLocaleMessages();
} else {
  document.addEventListener(
    'load.instore',
    function() {
      setNewLocaleMessages();
    },
    false
  );
}
```

If the code above already exists in your `checkout-instore-custom.js` file, skip this step. If only part of it is in your file, replace the current snippet with all the code above.

The language of the application is defined by the `locale` property, which is found in the following line of the code above:

`locale: 'pt',`
     
Note that, in this case, inStore is set to Portuguese (`pt`).

To change the language to English, replace the value `pt` with `en`. The resulting block of code should look like this:

```json
/ * Locale configurations * /
window.LOCALE_MESSAGES = {
  locale: 'en',
  messages: {
    en: {
     
    },
  },
};
```

After making the code change, save the file `checkout-instore-custom.js`.

Then, in the inStore application, to see the reflected changes, enter the menu and click the __Reset app local data__ button, as shown in the image below.

![22. Change the inStore language - 1 - EN.png?h=250](https://images.ctfassets.net/alneenqid6w5/7qVSATLXP6DBktXwwWsE0H/72515ce67429eaf6334a3cd1288e3884/22._Change_the_inStore_language_-_1_-_EN.png_h_250)
