---
title: Configurar Google Tag Manager
id: frequentlyAskedQuestions_616
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2023-05-03T15:25:43.535Z
publishedAt: 2023-05-03T15:25:43.535Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: integracion-con-google-tag-manager
legacySlug: integracion-con-google-tag-manager
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

<div class="alert alert-warning">
Si su tienda está construida en <a href="https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">VTEX IO</a>, debe instalar la aplicación de pixel del Google Tag Manager para hacer la integración con todas las páginas. Vea cómo hacerlo en la <a href="https://developers.vtex.com/vtex-developer-docs/docs/google-tag-manager">documentación de la app</a>.
</div>

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
Google Analytics debe configurarse con dos etiquetas: una para monitoreo de visitas y otra para monitoreo de las conversiones del ecommerce. Cada etiqueta tiene activadores diferentes, que deben configurarse según los procedimientos de las secciones a continuación.

### Visitas

Para configurar la etiqueta de monitoreo de visitas en tu tienda, consulta el siguiente paso a paso:

1. En el dashboard de [Google Tag Manager](https://tagmanager.google.com/#/home), haz clic en __Etiquetas__.
2. Haz clic en `Nueva`.
3. Asígnale un nombre a la etiqueta de forma que sea fácil distinguirla de las demás, siguiendo un patrón como `{nombre de la herramienta} - {función} - {variación}`. Ejemplo: para la etiqueta de monitoreo de visitas, `GA - Configuration`. Para la etiqueta de monitoreo de ecommerce, `GA - Purchase`.
4. En la configuración de etiquetas, haz clic en la opción __Google Analytics: configuración de GA4__.
5. En el campo __ID de medición__, ingresa el ID de Google Analytics 4 en el formato `G-xxxxxxx`.
6. Comprueba si la opción __Enviar un evento de vista de página cuando se cargue esta configuración__ está marcada.
7. En __Activación (triggering)__, selecciona la opción __Inicialización: todas las páginas (Initialization - All pages)__.
8. También en __Activación (triggering)__, marca la opción __Todos los cambios del historial__.
9. Haz clic en `Guardar` para terminar la creación de la etiqueta.

![Configuración de tag](//images.ctfassets.net/alneenqid6w5/7ugAD5EjZKtBlnLlmmtVqA/5ea6c5d2773588377abcbee77d47f8d2/Tag_configuration.png)

![Configuración Google History GA4](//images.ctfassets.net/alneenqid6w5/2EvCfzzuyZ4wAMLHt5Q0aN/745258b6d8b2a16cc7d60eac1bc536aa/All_history_changes_google.png)

### Conversiones
Para configurar la etiqueta de monitoreo de visitas en tu tienda, consulta el siguiente paso a paso:

1. En el dashboard de [Google Tag Manager](https://tagmanager.google.com/#/home), haz clic en __Etiquetas__.
2. Haz clic en `Nueva`.
3. Asígnale un nombre a la etiqueta de forma que sea fácil distinguirla de las demás, siguiendo un patrón como `{nombre de la herramienta} - {función} - {variación}`. Ejemplo: para la etiqueta de seguimiento de conversiones, `GA - Purchase`.
4. En la configuración de la __Etiqueta__, haz clic en la opción __Google Analytics: configuración de GA4__.
5. Una vez dentro, elige la etiqueta __GA - Config__ creada anteriormente en [Visitas](#visitas).
6. En Nombre de evento, elige la variable `{{Event}}`.
7. En __Activador__, haz clic en `+` para crear un nuevo activador (trigger).
8. Asígnale un nombre al activador, como `orderConfirmation - orderPlaced`.
9. Selecciona __Evento personalizado__.
10. Ingresa `purchase` en el campo __Nombre de evento__.
11. En __Este activador se activa en__, selecciona __Algunos eventos personalizados__.
12. En __Ejecute este activador cuando tenga lugar un evento y se cumplan todas estas condiciones__, selecciona las opciones __Event__, __equals__, y __purchase__.
13. Haz clic en `Guardar` para terminar la creación del activador. 
14. Haz clic en `Guardar` nuevamente para terminar la creación de la etiqueta.

## Editar configuraciones del Checkout

Después, debes configurar el código de identificación de la tienda en Tag Manager en VTEX siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a __Configuraciones de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda situada en la parte superior de la página.
2. Haz clic en el icono del sitio web deseado.
3. En el menú azul de opciones situado en la parte superior de la página, haz clic en __Checkout__.
4. En el campo __Google Tag Manager__, ingresa el código de identificación de la tienda, en el formato `GTM-XXXX`, ilustrado en la imagen siguiente.
5. Haz clic en `Guardar`.

![Google Tag Manager](//images.ctfassets.net/alneenqid6w5/2AVIJtSgxsTDl4mVRORj41/3689bbdd56348b8bfd8bb9689db86434/Google_Tag_Manager_-_ES.PNG)

Para verificar eventos (activadores) y variables disponibles en las páginas que se utilizarán en las etiquetas, puedes utilizar el modo de vista previa de Google Tag Manager. Consulta este artículo en [Google Tag Manager](https://support.google.com/tagmanager/answer/6261285?hl=es) para más información.

<div class="alert alert-info">
Puedes utilizar el píxel de Facebook junto al Google Tag Manager de tu tienda para realizar un seguimiento y optimizar los resultados de tus campañas de marketing en la red social. Consulta el paso a paso <a href="https://es-es.facebook.com/business/help/1021909254506499">en este artículo de Facebook</a>.
</div>

## VTEX IO: instalar el píxel de Google Tag Manager

Si tu tienda utiliza [VTEX IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), además de la configuración, deberás usar una nueva versión de la aplicación Google Tag Manager. Para más información, accede a [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

Esta etapa no es necesaria para las tiendas que utilizan [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).
