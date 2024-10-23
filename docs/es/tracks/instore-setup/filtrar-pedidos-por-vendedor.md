---
title: 'Filtrar pedidos por vendedor'
id: 3cx02v6OPY20Mue4KKokEM
status: ARCHIVED
createdAt: 2018-06-28T16:17:22.135Z
updatedAt: 2020-08-03T19:59:26.945Z
publishedAt: 
firstPublishedAt: 2018-06-28T16:55:25.065Z
contentType: trackArticle
productTeam: Shopping
slugEN: filter-orders-by-vendor
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

En inStore es posible ver el listado de todos los pedidos finalizados en una tienda:

![pedidos finalizados](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/filtrar-pedidos-por-vendedor_1.png)

Sin embargo, a veces tiene sentido que un vendedor vea sólo los pedidos finalizados por él. Para habilitar esta opción es necesario editar el archivo `checkout-instore-custom.js` presente en el Admin del Portal. Por tratarse de un JavaScript presente en diversos flujos de uso de la aplicación, es importante que usted tenga conocimientos de programación antes de cambiarlo, para evitar la ruptura de otras funcionalidades.

Dentro del archivo usted necesita encontrar el objeto `window.INSTORE_CONFIG` y añadir el snippet disponible a continuación:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

Así estaremos filtrando los pedidos para mostrar sólo los realizados por el vendedor actualmente registrado en inStore.

__IMPORTANTE__: No quite ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funcionalidades.

Después de recargar el inStore el resultado debe ser el siguiente:

![pedidos finalizados filtrados por vendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/filtrar-pedidos-por-vendedor_2.png)
