---
title: Cómo cambiar el idioma del inStore
id: 6fBUrqT2KIQ6WW2GIYiUI8
status: DRAFT
createdAt: 2018-09-14T21:00:24.112Z
updatedAt: 2020-08-03T20:00:39.626Z
publishedAt: 
firstPublishedAt: 2018-09-14T21:19:21.733Z
contentType: trackArticle
productTeam: Shopping
slug: como-cambiar-el-idioma-del-instore
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

En el portal V2, usted encontrará un archivo de inStore para las personalizaciones. Sólo tiene que acceder al enlace abajo, sustituyendo `{{AccountName}}` por el nombre de su tienda.

`https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

Una vez que la aplicación de inStore esté instalada correctamente, usted encontrará una parte del archivo que configura el idioma.


```js
/* Locale configurations */

window.LOCALE_MESSAGES = {
  locale: 'en',
  messages: {
    en: {},
  },
}
```

Cambiando la propiedad `locale` para valores como `pt`, `en` o `es`, usted define el idioma que va a ser usado en la interfaz. Sólo hay que hacer el ajuste y guardar el archivo.

Al volver a cargar la aplicación de inStore, ya estará en la lengua elegida por usted.


### Idiomas disponibles
Hasta el momento, la interfaz de la aplicación de inStore soporta los siguientes idiomas:

- Portugués: utilice el valor `pt`.
- Inglés: utilice el valor `en`.
- Español (`pronto`): utilice el valor `es`.
