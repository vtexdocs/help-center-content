---
title: 'Formulario B2B'
id: 2o7cyfIWtmAEE2y8KkYQcM
status: ARCHIVED
createdAt: 2018-06-28T17:07:01.490Z
updatedAt: 2020-08-03T20:00:05.795Z
publishedAt: 
firstPublishedAt: 2018-06-28T19:07:28.945Z
contentType: trackArticle
productTeam: Shopping
slugEN: b2b-form
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Este artículo es para quien desea aceptar personas jurídicas como clientes.

La funcionalidad de __Formulario B2B__ permite que una compra sea hecha por persona jurídica opcionalmente (aceptando personas físicas también) o obligatoriamente (venta sólo B2B).

Para activar el __Formulario B2B__ en inStore, será necesario editar el archivo `checkout-instore-custom.js` presente en el Admin del Portal. Por tratarse de un JavaScript presente en diversos flujos de uso de la aplicación, __es muy importante que usted tenga conocimientos de programación antes de cambiarlo__, para evitar la ruptura de otras funcionalidades.

En el archivo se necesita encontrar el objeto `window.INSTORE_CONFIG` y añadir la propiedad `customerProfile.isCorporate` con el valor `{optional: true}` para habilitar el __Formulario B2B__ como opcional y así aceptar tanto personas físicas como jurídicas como clientes; o con el valor `{optional: false}` para permitir solamente las personas jurídicas como clientes.

No quite ninguna de las otras propiedades presentes en ese objeto. El resultado debe ser algo parecido a:

Para que persona jurídica sea opcional:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: true},
  },
}
```

Para que persona jurídica sea obligatorio:
```
window.INSTORE_CONFIG = {
  customerProfile: {
    isCorporate: {optional: false},
  },
}
```

Ejemplos de cómo queda en el inStore el formulario con persona jurídica:

__Formulario B2B__ - opcional y cerrado:

![b2b-opcional-fechado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/formulario-b2b_1.png)

__Formulario B2B__ - opcional y abierto:

![b2b-opcional-aberto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/formulario-b2b_2.png)

__Formulario B2B__ - obligatorio (ya vienen todos los campos abiertos):

![b2b-obrigatorio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/formulario-b2b_3.png)
