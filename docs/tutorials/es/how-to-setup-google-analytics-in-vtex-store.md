---
title: 'Configurar Google Analytics 4 en una tienda VTEX'
id: G2P0rmSrEiqCcmUMyUUwG
status: PUBLISHED
createdAt: 2017-07-30T22:53:46.285Z
updatedAt: 2023-07-17T13:35:10.259Z
publishedAt: 2023-07-17T13:35:10.259Z
firstPublishedAt: 2017-07-30T23:24:21.394Z
contentType: tutorial
productTeam: Others
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-configurar-el-google-analytics-en-tienda-vtex
locale: es
legacySlug: como-configurar-el-google-analytics-en-tienda-vtex
subcategory: 1luKrYptdi8WoMYckakUaM
---

[Google Analytics 4 (GA4)](https://support.google.com/analytics/answer/10089681) es la versión actual de la herramienta de análisis de datos de Google. Para obtener datos sobre la navegación en tu tienda VTEX mediante Google Analytics 4, necesitas:

1. [Configurar Google Analytics 4](#configurar-google-analytics-4)
2. [Editar configuraciones de Google Tag Manager](#editar-configuraciones-de-google-tag-manager)

>ℹ️ A partir del 1 de julio de 2023, Google Analytics 4 sustituirá a Universal Analytics, la versión anterior de la herramienta. Por lo tanto, debes seguir este tutorial para adaptar los cambios a tu tienda. Consulta los detalles [en este comunicado de Google](https://support.google.com/analytics/answer/11583528).

## Configurar Google Analytics 4
Si ya utilizabas la versión anterior de Google Analytics (Universal Analytics) en tu tienda, deberás agregar una propiedad GA4. Para ello, consulta esta documentación de Google: [Añadir una propiedad de Google Analytics 4 (a un sitio web que ya tiene Google Analytics)](https://support.google.com/analytics/answer/9744165?hl=es#zippy=%2Ccontenido-del-art%C3%ADculo).

Si tu tienda no tiene configurada la versión anterior de Google Analytics, sigue las instrucciones descritas en este artículo: [GA4 - Configurar Google Analytics para un sitio web y/o app](https://support.google.com/analytics/answer/9304153).

En ambos casos, almacena el código ID de la propiedad en Google Analytics en formato `G-xxxxxxx`, obtenido en Google Analytics. Dicho código se utilizará en el siguiente paso, durante la configuración de Google Tag Manager.

## Editar configuraciones de Google Tag Manager

Una vez que hayas realizado las configuraciones necesarias en tu cuenta de Google Analytics, tendrás que cambiar la configuración de Google Tag Manager para detectar los eventos de tu tienda siguiendo los pasos descritos en [Configurar Google Tag Manager](https://help.vtex.com/es/tutorial/integracao-com-o-google-tag-manager).  

Si tu tienda utiliza [VTEX IO - Store Framework](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), además de realizar la configuración, debes configurar una nueva versión de la aplicación Google Tag Manager. Para más información, accede a [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

