---
title: 'Errores de integración de stock con Mercado Libre'
id: 3pWA3vRePuGmJ5tquY4fva
status: PUBLISHED
createdAt: 2021-10-04T19:04:23.285Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:36:13.584Z
firstPublishedAt: 2021-11-01T22:14:56.937Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: mercado-livre-inventory-integration-errors
legacySlug: errores-de-integracion-de-stock-con-mercado-libre
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando se produce un error de integración de _stock_ entre **Mercado Libre** y una tienda, se informa un mensaje de error para cada SKU. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Stock** o ingresa **Stock** en la barra de búsqueda.

Los errores más comunes de integración de _stock_ con Mercado Libre son:

- **Ítem sin stock**
- **ProductId no encontrado**
- **Anuncio finalizado**
- **Anuncio en revisión**
- **Usuario sin autorización**
- **Logística Fulfillment**
- **GTIN obligatorio**
- **Token inválido**
- **Usuario inactivo**

## Solución

Para corregir los errores de integración de _stock_ con Mercado Libre, considera las opciones presentadas en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Validation error. Is not possible to activate an item without stock.**|No hay stock para el ítem, el SKU está inactivo o el ítem no está en la colección o en la política comercial de Mercado Libre.|[Actualiza la cantidad de SKUs en stock](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock) y reprocesa el error en **Marketplace > Conexiones > Stock**, haciendo clic en **Acciones > Reprocesar**. Si el error continúa, verifica el status del SKU en **Catálogo > Productos y SKUs**. Si es necesario, consulta [Asociación de SKU a una política comercial](/es/docs/tutorials/asociacion-de-sku-a-una-politica-comercial).|
|**ProductId not found.**|Las opciones **Mostrar en la tienda** y **Mostrar producto agotado** no están activas en el registro del producto, por lo que los SKUs no se integran.|Al [rellenar los campos de registro del producto](/es/docs/tutorials/agregar-o-editar-productos), activa **Mostrar en la tienda** y **Mostrar producto agotado**.|
|**Estoque não atualizado pois o anúncio no Mercado Livre está finalizado.**|El anuncio se finalizó, por ejemplo porque terminó el periodo de publicación o el anuncio incumple la política del marketplace.|No es posible actualizar el stock de un anuncio finalizado. Contacta a Mercado Libre para conocer el motivo. Consulta la [ayuda con los anuncios](https://www.mercadolibre.com.ar/ayuda/Publicaciones_644).|
|**Cannot update item XXX [status:under_review, has_bids:false] variations is not modifiable.**<br>**Cannot update item XXX [status:under_review, has_bids:false] available quantity is not modifiable.**|El anuncio está en revisión porque incumplió las condiciones de Mercado Libre, y el stock no se puede integrar mientras dure la revisión.|Contacta a Mercado Libre para corregir el anuncio en revisión.|
|**The caller is not authorized to access this resource.**|El usuario está suspendido y se interrumpió la autorización para integrar el stock. La suspensión puede deberse a pagos pendientes o a la expiración del token.|Contacta a Mercado Libre para identificar la causa y reactivar la autorización.|
|**La cantidad disponible no es modificable en items con logistica Fulfillment**|El seller usa [Mercado Envíos Full](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), así que Mercado Libre controla el stock y la entrega.|No hay una acción en VTEX para actualizar el stock de este anuncio. El control de la cantidad queda en Mercado Libre.|
|**The attributes [GTIN] are required for category.**|El GTIN, también llamado EAN en VTEX, es obligatorio para la categoría y falta, es incorrecto o no es válido en el registro del SKU.|Corrige el código de barras en el [registro de SKU](/es/docs/tutorials/agregar-o-editar-skus). El GTIN correcto debe obtenerse del proveedor o del fabricante.|
|**Error validating grant. Your authorization code or refresh token may be expired or it was already used.**<br>**Error converting access token.**|El código de autorización o el token de acceso expiró, ya se usó o se consideró inválido.|Trata el token con Mercado Libre. Después, [vuelve a autorizar la integración](/es/docs/tracks/autorizar-la-integracion-de-mercado-libre-en-el-panel-de-vtex). Si el error continúa, vuelve a [configurar el registro del conector](/es/docs/tracks/registro-de-la-integracion-de-mercado-libre) y autoriza la integración otra vez.|
|**User not active**|El usuario fue desactivado en Mercado Libre por datos de registro incorrectos o por una conducta incompatible con la política del marketplace.|Contacta a Mercado Libre para reactivar el usuario.|
