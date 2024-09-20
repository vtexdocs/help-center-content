---
title: 'Cambiar el idioma de inStore'
id: 5xZTQNOMRKXqWjWol2sUbu
status: ARCHIVED
createdAt: 2020-06-28T17:20:22.942Z
updatedAt: 2021-11-25T13:59:42.220Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:35:12.789Z
contentType: trackArticle
productTeam: Shopping
slug: cambiar-el-idioma-de-instore
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: cambiar-el-idioma-de-instore
---

>❗ El cambio de idioma explicado en este artículo implica cambiar el archivo JavaScript `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

Actualmente, es posible usar el inStore en __portugués__, __inglés__ o __español__.

Por defecto, el idioma de la aplicación es el portugués, pero usted puede cambiarlo a través del archivo `checkout-instore-custom.js`. Consulte el artículo [Cómo personalizar el inStore](https://help.vtex.com/es/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2) cómo saber más sobre este archivo.

Para cambiar el idioma, primero asegúrese de que el archivo `checkout-instore-custom.js` contenga las siguientes líneas de código:

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

Si ese código ya existe en su archivo `checkout-instore-custom.js`, omita este paso. Si solo una parte está en su archivo, reemplace el fragmento actual con todo el código anterior.

El lenguaje de la aplicación está definido por la propiedad `locale`, que se encuentra en la siguiente línea del código anterior:

`locale: 'pt',`
     
En este caso, tenga en cuenta que el idioma definido es el portugués (`pt`).

Para cambiar el idioma a español, reemplace el valor `pt` con` es`. El resultado de este bloque de código debería verse así:

```json
/* Locale configurations */
window.LOCALE_MESSAGES = {
  locale: 'es',
  messages: {
    pt: {
     
    },
  },
};
```

Después de hacer el cambio de código, guarde el archivo `checkout-instore-custom.js`.

Luego, en la aplicación inStore, para ver los cambios reflejados, ingrese al menú y haga clic en el botón __Restaurar datos__, como se muestra en la imagen a continuación.

![22. Change the inStore language - 1 - ES.png?h=250](//images.ctfassets.net/alneenqid6w5/6kyOLVTDlyawsehMQwORid/589ff63de4574dc8cf1d9cc3ed84024a/22._Change_the_inStore_language_-_1_-_ES.png_h_250)
