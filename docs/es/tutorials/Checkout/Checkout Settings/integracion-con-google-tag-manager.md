---
title: 'Configurar Google Tag Manager'
id: frequentlyAskedQuestions_616
status: PUBLISHED
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2023-07-17T13:33:10.627Z
publishedAt: 2023-07-17T13:33:10.627Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: integration-with-google-tag-manager
locale: es
legacySlug: integracion-con-google-tag-manager
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

>⚠️ Si su tienda está construida en [Store Framework](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), debe instalar la aplicación de pixel del Google Tag Manager para hacer la integración con todas las páginas. Vea cómo hacerlo en la [documentación de la app](https://developers.vtex.com/vtex-developer-docs/docs/google-tag-manager).

Google Tag Manager es un sistema de gestión de etiquetas creado por Google para gestionar etiquetas JavaScript y HTML utilizadas para seguimiento y análisis de sitios web.

En VTEX, la integración con Google Tag Manager es nativa, lo que simplifica la configuración de la herramienta para analizar los datos de navegación de la tienda. En las secciones a continuación, se explican los requisitos previos y los pasos necesarios para realizar esta configuración:

- [Requisitos previos](#requisitos-previos)
- [Configurar etiquetas en Google Tag Manager](#configurar-etiquetas-en-google-tag-manager)
- [Editar configuraciones del Checkout](#editar-configuraciones-del-checkout)
- [VTEX IO: instalar píxel app de Google Tag Manager](#vtex-io-instalar-pixel-app-de-google-tag-manager)

## Requisitos previos
Antes de empezar a configurar Google Tag Manager, debes realizar los siguientes pasos:

- Crear una cuenta en [Google Tag Manager](https://tagmanager.google.com/?hl=ES#/home).
- Configurar Google Analytics 4, es decir, realizar la primera etapa descrita en la guía [Configurar el Google Analytics 4 en una tienda VTEX](https://help.vtex.com/es/tutorial/como-configurar-el-google-analytics-en-tienda-vtex).

## Configurar etiquetas en Google Tag Manager

A través de las etiquetas, Google Analytics te permite acceder a datos importantes sobre el desempeño de tu tienda, como el número de visitas y conversiones. Para obtener más información, vaya a [Setting up GA4 event](https://developers.vtex.com/docs/guides/vtex-io-documentation-setting-up-google-tag-manager#step-by-step).

## Editar configuraciones del Checkout

Después, debes configurar el código de identificación de la tienda en Tag Manager en VTEX siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a __Configuraciones de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda situada en la parte superior de la página.
2. Haz clic en el icono del sitio web deseado.
3. En el menú azul de opciones situado en la parte superior de la página, haz clic en __Checkout__.
4. En el campo __Google Tag Manager__, ingresa el código de identificación de la tienda, en el formato `GTM-XXXX`, ilustrado en la imagen siguiente.
5. Haz clic en `Guardar`.

![Google Tag Manager](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout%20Settings/integracion-con-google-tag-manager_1.PNG)

Para verificar eventos (activadores) y variables disponibles en las páginas que se utilizarán en las etiquetas, puedes utilizar el modo de vista previa de Google Tag Manager. Consulta este artículo en [Google Tag Manager](https://support.google.com/tagmanager/answer/6261285?hl=es) para más información.

>ℹ️ Puedes utilizar el píxel de Facebook junto al Google Tag Manager de tu tienda para realizar un seguimiento y optimizar los resultados de tus campañas de marketing en la red social. Consulta el paso a paso [en este artículo de Facebook](https://es-es.facebook.com/business/help/1021909254506499).

## VTEX IO: instalar el píxel de Google Tag Manager

Si tu tienda utiliza [VTEX IO - Store Framework](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), además de la configuración, deberás usar una nueva versión de la aplicación Google Tag Manager. Para más información, accede a [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

Esta etapa no es necesaria para las tiendas que utilizan [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).
