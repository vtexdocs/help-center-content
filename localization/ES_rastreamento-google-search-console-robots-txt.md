---
title: 'Rastreo Google Search Console - robots.txt'
id: tutorials_574
status: PUBLISHED
createdAt: 2017-04-27T22:00:09.026Z
updatedAt: 2023-03-29T17:32:57.686Z
publishedAt: 2023-03-29T17:32:57.686Z
firstPublishedAt: 2017-04-27T23:03:39.731Z
contentType: tutorial
productTeam: Marketing y Merchandising
author: authors_84
slugEN: google-search-console-tracking-robots-txt
legacySlug: rastreo-google-search-console-robots-txt
locale: es
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

El archivo robots.txt es un archivo de texto que los motores de búsqueda utilizan para definir reglas de escaneo del sitio web para los rastreadores.

VTEX cuenta de forma nativa con una interfaz para editar y personalizar archivos robots.txt.

Para acceder:

1. Haz clic en el menú **Configuración de la tienda**.
2. En la sección **Storefront**, haz clic en **Configuración**.
3. Luego, haz clic en la pestaña **SEO**.
4. Realiza las modificaciones deseadas en la caja de texto **Robots.txt**.

Para comprender mejor este contenido consulta a continuación las funciones básicas:

- **Allow:** al utilizar este término permites que el rastreador de las herramientas de búsqueda navegue e indexe la dirección indicada.
- **Disallow:** al utilizar este término bloqueas el contenido indicado.

Para validar el contenido del archivo `robots.txt`, es importante:

- Verificar si las URLs listadas realmente necesitan reglas específicas de rastreo.
- Confirmar si las reglas están correctamente aplicadas a las URLs deseadas.
- Asegurarse de que el archivo `sitemap.xml` esté correctamente ingresado.

La edición del archivo `robots.txt` de la tienda está disponible en:

```
{accountName}.vtexcommercestable.com.br/admin/Site/ConfigSEOContents.aspx
```

Después de configurar `robots.txt` el siguiente paso es revisar el `sitemap.xml` de la tienda. El sitemap tiene la función de mostrar la estructura del sitio web a los motores de búsqueda, indicando las páginas que deben ser rastreadas e indexadas, como categorías, productos y páginas institucionales.

Al ingresar correctamente el sitemap en Google Search Console facilitas el trabajo del rastreador, permitiendo que las páginas de la tienda se encuentren e indexen más rápidamente en los resultados de búsqueda.
