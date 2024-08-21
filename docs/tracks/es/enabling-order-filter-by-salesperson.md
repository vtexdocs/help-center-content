---
title: 'Habilitar filtro de pedidos por vendedor'
id: tbrE64fi2EvQeVpGtNpEo
status: DRAFT
createdAt: 2020-06-28T19:01:07.153Z
updatedAt: 2021-11-25T14:00:01.587Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:06:04.684Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-filtro-de-pedidos-por-vendedor
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: habilitar-filtro-de-pedidos-por-vendedor
---

>❗ El cambio en la configuración de filtro por vendedor, explicado en este artículo, implica editar el archivo `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

En inStore, es posible ver la lista de todos los pedidos completados en una tienda. Sin embargo, a veces puede ser mejor que el vendedor vea solo los pedidos que ha completado. Para habilitar esta opción, es necesario editar el archivo `checkout-instore-custom.js`.

Dentro del archivo, en el Admin de VTEX, usted debe encontrar el objeto `window.INSTORE_CONFIG` y agregar el objeto `OMSFilters`. El código debería verse como el siguiente ejemplo:

```json
window.INSTORE_CONFIG = {
  OMSFilters: {
    'f_UtmSource': '{{ vendor.storeId }}',
    'CallCenterOperatorEmail': '{{ vendor.username }}',
  },
}
```

Con eso, filtramos los pedidos para mostrar solo los realizados por el vendedor actualmente conectado en la tienda.

>❗ No elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.

Después de volver a cargar los datos de inStore, al hacer clic en el botón __Restaurar datos__, el vendedor solo verá los pedidos cerrados por él o ella.
