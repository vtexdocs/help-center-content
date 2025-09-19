---
title: 'Actualiza tu tienda a Google Analytics 4'
id: 01mmrSck8nvXAKsypecT9V
status: PUBLISHED
createdAt: 2023-04-28T14:42:52.792Z
updatedAt: 2023-07-17T13:38:03.472Z
publishedAt: 2023-07-17T13:38:03.472Z
contentType: updates
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2023-04-28-upgrade-your-store-to-google-analytics-4
locale: es
legacySlug: actualiza-tu-tienda-a-google-analytics-4
announcementImageID: 'undefined'
announcementSynopsisES: 'actualiza-tu-tienda-a-google-analytics-4'
---

A partir del 1 de julio de 2023, [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4) sustituirá a Universal Analytics, la versión anterior de la herramienta de análisis de datos de Google. Consulta los detalles sobre los cambios implementados [en este comunicado de Google](https://support.google.com/analytics/answer/11583528).

Para seguir monitoreando los datos de navegación en tu tienda VTEX, deberás crear una propiedad GA4 y adaptar algunas configuraciones, si utilizas el [CMS - Portal Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) o [VTEX IO - Store Framework](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2).

## ¿Qué cambió?

Universal Analytics dejará de procesar eventos el 1 de julio de 2023. Por lo tanto, la única versión funcional de la herramienta será Google Analytics 4.

Para garantizar la compatibilidad de las tiendas VTEX debes crear un registro en Google Analytics 4 y ajustar las configuraciones de tu cuenta en Google Tag Manager como se especifica en el artículo [Configurar Google Analytics 4 en tiendas VTEX](/es/tutorial/como-configurar-el-google-analytics-en-tienda-vtex--G2P0rmSrEiqCcmUMyUUwG).

Las tiendas que utilizan VTEX IO - Store Framework también necesitan configurar [la aplicación Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager) para realizar la integración con Google Analytics 4. 

## ¿Por qué realizamos este cambio?

Implementamos el cambio para permitir que las tiendas VTEX que utilizan el [CMS - Portal Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) o [VTEX IO - Store Framework](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) continúen siendo compatibles con Google Analytics 4. De este modo, seguirá siendo posible obtener datos de navegación relevantes a través de la versión más actual de la herramienta de Google.

## ¿Qué se necesita hacer?

Para que tu tienda sea compatible con la nueva herramienta de análisis de datos de Google, sigue las instrucciones de la guía [Configurar Google Analytics 4 en tiendas VTEX](/es/tutorial/como-configurar-el-google-analytics-en-tienda-vtex--G2P0rmSrEiqCcmUMyUUwG).

Si tu tienda utiliza [VTEX IO - Store Framework](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), será necesário activar una configuración en el Admin VTEX, `Send events in GA4 format`, y configurar la aplicación para recibir actualizaciones de Google Analytics 4. Para más información, accede a [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

