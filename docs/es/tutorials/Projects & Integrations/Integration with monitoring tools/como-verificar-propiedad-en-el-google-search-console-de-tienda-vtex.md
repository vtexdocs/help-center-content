---
title: 'Verificar propiedad en el Google Search Console de tienda VTEX'
id: frequentlyAskedQuestions_594
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.830Z
updatedAt: 2024-12-20T00:27:16.190Z
publishedAt: 2024-12-20T00:27:16.190Z
firstPublishedAt: 2019-01-24T22:00:50.515Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-check-the-ownership-of-vtex-store-on-google-search-console
locale: es
legacySlug: como-verificar-propiedad-en-el-google-search-console-de-tienda-vtex
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Para acceder a los datos de [Google Search Console](https://support.google.com/webmasters/answer/9128668?hl=es&ref_topic=9128571&sjid=2614223107390057925-NA) debes verificar la propiedad de tu tienda informando a Google la dirección del sitio web mediante el dominio (`mitienda`) o la URL (`https://mitienda.com`). Esto te permitirá monitorear el rendimiento de la indexación en Google.

Para activar el acceso, sigue las instrucciones de este tutorial.

## Instrucciones

1. Accede a [Google Search Console](https://search.google.com/search-console) desde tu cuenta de Google.
2. Para añadir la propiedad de tu tienda, sigue las instrucciones en [Añadir propiedades de sitio web a Search Console](https://support.google.com/webmasters/answer/34592?hl=es&sjid=165689433183140510-NA).
3. Después de añadir la propiedad, valídala haciendo clic en **Etiqueta HTML** en la sección **Otros métodos de validación**.
4. Copia la etiqueta meta del paso 1.
5. Selecciona el método de instalación apropiado para la tecnología de tu tienda:

- [Store Framework y FastStore](#store-framework-y-faststore)
- [CMS Portal Legado](#cms-portal-legado)

### Store Framework y FastStore

1. En el Admin VTEX, accede a **Apps > Hub de extensiones > App Store**.
2. Busca la aplicación **Google Search Console** y haz clic en `Instalar`. Se te redirigirá a la [página de la aplicación en la App Store](https://apps.vtex.com/vtex-google-search-console/p).
3. Haz clic en `Obtener app`.
4. Ingresa el nombre de tu cuenta y haz clic en `Confirmar`. Se te redirigirá a la página de checkout de la aplicación.

<div class="alert alert-info" role="alert"> 
La aplicación Google Search Console es gratuita.
</div>

5. Haz clic en `Finalizar compra`.
6. Haz clic en `Ir a la página de instalación` y se te redirigirá a la página de la aplicación en el Admin.
7. Haz clic en `Instalar`. Se mostrará un mensaje de éxito para la instalación y se te redirigirá a la página de configuración de la aplicación en el Admin.

![Google Search Console ES](https://images.ctfassets.net/alneenqid6w5/5R9R0LNXzNI2a1Hrci0pZ5/3a0bac4b1e248b04eb26f863b5ca2781/ES.png)

8. En el campo **Content**, agrega solo el contenido que viene después de la flag `content` de la etiqueta meta que copiaste en Google Search Console [anteriormente](#instrucciones). Por ejemplo, si tu etiqueta meta es `<meta name="google-site-verification" content="{contentID}" />`, solo debes agregar lo que está dentro de `{contentID}` en el campo **Content**.
9. Haz clic en `Guardar`.
10. Vuelve a [Google Search Console](https://search.google.com/search-console) y haz clic en `Verificar`. La verificación te dará acceso a los datos de indexación de la tienda.

### CMS Portal Legado

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Ve a la carpeta `CMS > HTML Templates` y haz clic en el archivo `Home`.
3. Agrega la etiqueta meta que copiaste [anteriormente](#instrucciones) en la sección `<head>` del template de `Home` de tu tienda.
4. Vuelve a [Google Search Console](https://search.google.com/search-console) y haz clic en `Verificar`. La verificación te dará acceso a los datos de indexación de la tienda.

