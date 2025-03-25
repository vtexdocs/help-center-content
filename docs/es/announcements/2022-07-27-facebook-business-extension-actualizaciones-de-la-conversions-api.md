---
title: 'Facebook Business Extension: actualizaciones de la Conversions API'
id: 5lsu1b7jkWk9NlTaxfkoqs
status: PUBLISHED
createdAt: 2022-07-27T18:39:45.215Z
updatedAt: 2022-07-28T12:34:14.003Z
publishedAt: 2022-07-28T12:34:14.003Z
contentType: updates
productTeam: Apps
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: 2022-07-27-facebook-business-extension-conversions-api-updates
locale: es
legacySlug: facebook-business-extension-actualizaciones-de-la-conversions-api
announcementImageID: ''
announcementSynopsisES: 'Novedades en la API Conversions de la aplicación Facebook Business Extension.'
---

La aplicación [Facebook Business Extension](https://apps.vtex.com/vtex-facebook-fbe/p), disponible gratis en VTEX App Store, permite simplificar la integración entre tiendas VTEX y la plataforma Facebook Manager, facilitando así la oferta de productos en un canal de ventas adicional.

Una de las funcionalidades de Facebook Business Extension es la [Conversions API](https://www.facebook.com/business/help/2041148702652965?id=818859032317965), que permite detectar detalles sobre la navegación de los usuarios que acceden a la tienda.

La Conversions API ahora tiene la capacidad de detectar nuevos eventos. Los eventos corresponden a las etapas de un proceso de compra, es decir, toda la jornada del usuario desde la búsqueda del producto hasta la finalización de la compra.

La mejoría permite maximizar la confiabilidad de los datos recopilados, la correspondencia de los datos con la jornada de los usuarios y la optimización de las estrategias para eventos que reflejen las metas del negocio de tu tienda. De esta forma, es posible mostrar anuncios a los usuarios que tienen una mayor probabilidad de realizar acciones en tu tienda.

## ¿Qué cambió?

Antes, las tiendas que utilizaban la Conversions API solo podían medir los datos de navegación relacionados con el evento "Purchase", en otras palabras, la finalización de la compra. Ahora, también se pueden medir los siguientes eventos:

| **Evento** | **Descripción** |
| ------------- |-------------| 
| PageView | Visualización de la página del producto. |
| View Content | Visualización del contenido. |
| Search | Utilización de la casilla de búsqueda. |
| Add to Cart | Se agregó el producto al carrito de compras. |
| Initiate Checkout | Se agregó la información de pago. |

## ¿Por qué realizamos este cambio?

Incluimos nuevos eventos en la Conversions API para:

- Aumentar el rendimiento del alcance del público objetivo.
- Optimizar y medir las campañas con información de los usuarios que accedieron a tu sitio web.
- Potenciar la confianza de los datos recopilados.
- Trazar un paralelismo entre los dados recopilados y la jornada de los usuarios.
- Impactar posibles consumidores preferenciales con tus anuncios.

## ¿Qué se necesita hacer?

La aplicación está disponible globalmente y es completamente compatible con todas las tiendas que operan con [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-what-is-vtex-io) y parcialmente compatible con las tiendas que utilizan [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) heredado o que son [headless](https://vtex.com/en/blog/strategy/headless-commerce-what-it-is-and-why-its-growing-so-fast/). Para identificar con cuál modelo opera tu tienda, accede a la [Edition App](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-edition-app).

Las actualizaciones están disponibles de forma automática en las tiendas que ya utilizan Facebook Business Extension. Si deseas integrar tu tienda VTEX con FBE, sigue los pasos del artículo [Integración con Facebook Business Extension](https://help.vtex.com/es/tracks/integracao-com-o-facebook-business-extension--2hS3ANSZ7vlHCcba4h7k8D).
