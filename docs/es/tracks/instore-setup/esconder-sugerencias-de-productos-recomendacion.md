---
title: 'Esconder sugerencias de productos (recomendación)'
id: 7027gOkloW6sC0yuCCkkcK
status: ARCHIVED
createdAt: 2018-12-17T17:48:42.456Z
updatedAt: 2020-08-03T20:01:06.502Z
publishedAt: 
firstPublishedAt: 2018-12-17T18:35:36.153Z
contentType: trackArticle
productTeam: Shopping
slugEN: hide-product-suggestions-recommendation
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

De forma predeterminada, inStore incluye una lista de productos sugeridos en el carrito y en la página de producto.

![inStore recommendation](https://images.ctfassets.net/alneenqid6w5/5hN8l2xFTGMU4Gw8YGq0E8/dc9f7e8e4f02db0ae31dd50b08cacd31/inStore_recommendation.png)

Si desea ocultar las recomendaciones, es necesario editar los archivos `checkout-instore-custom.css` y `checkout-instore-custom.js` presentes en el administrador del Portal. Por tratarse de archivos utilizados en diversos flujos de uso de la aplicación, es importante que usted tenga conocimientos de programación antes de cambiarlos, para evitar la ruptura de otras funcionalidades.

En el archivo `checkout-instore-custom.css` incluya la regla:

```
# -conservación {
  display: none;
}
```

En el archivo `checkout-instore-custom.js` usted necesita encontrar el objeto `window.INSTORE_CONFIG` y añadir el fragmento de código disponible a continuación:

```
window.INSTORE_CONFIG = {.
  recommendationsEnabled: false, // ocultando recomendaciones (el valor predeterminado para mostrar es: true)
}
```

> __IMPORTANTE__: No quite ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar el salto de otras funcionalidades.
 
Después de recargar el inStore, ya no verá la lista de sugerencias.
