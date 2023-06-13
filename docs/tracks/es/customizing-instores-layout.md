---
title: Personalizando el layout del inStore
id: 7Hsd9UGwZeqPeAGs2k80BH
status: DRAFT
createdAt: 2020-06-28T19:17:52.655Z
updatedAt: 2021-11-25T14:00:41.141Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:22:31.049Z
contentType: trackArticle
productTeam: Shopping
slug: personalizando-el-layout-del-instore
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: personalizando-el-layout-del-instore
---

<div class="alert alert-danger">
Personalizar el layout del inStore, como explicado en este artículo, implica cambiar el archivo CSS <code>checkout-instore-custom.css</code>. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.
</div>

A través del panel administrativo de VTEX, la tienda tiene acceso al archivo CSS editable que define los estilos del app de inStore. Por lo tanto, es posible personalizar estos estilos.

El archivo a cambiar es exclusivamente `checkout-instore-custom.css`.

Se encuentra en la configuración del Checkout, dentro del Admin de su tienda VTEX.

Para acceder a este archivo directamente, usted puede ingresar la siguiente URL en su navegador: `https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

En este caso, `{{AccountName}}` debe reemplazarse con el nombre de su cuenta en VTEX.

Después de editar las reglas CSS del archivo, asegúrese de guardarlo.
