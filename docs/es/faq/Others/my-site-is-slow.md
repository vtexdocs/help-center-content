---
title: 'Mi sitio está lento. ¿Que hacer?'
id: KdXFFAzwoCewqaSOmsigK
status: PUBLISHED
createdAt: 2018-02-06T13:14:40.270Z
updatedAt: 2019-12-31T14:24:30.944Z
publishedAt: 2019-12-31T14:24:30.944Z
firstPublishedAt: 2018-02-06T14:28:36.372Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_24
slug: mi-sitio-esta-lento
locale: es
legacySlug: mi-sitio-esta-lento
---

La performance del sitio debe ser una preocupación central para toda tienda online, ya que una navegación lenta disminuye la conversión de la tienda y su relevancia en motores de búsqueda como Google.

Hay una serie de motivos que pueden causar lentitud del sitio. En este artículo, vamos a enumerar algunos de ellos.

Si usted cree que su tienda está lenta, compruebe cada uno de los escenarios abajo.

- [Archivos externos](#archivos-externos)
- [Requests síncronos](#requests-sincronos)
- [Imágenes demasiado pesadas](#imagenes-demasiado-pesadas)
- [Tags de marketing, scripts y extensiones](#tags-de-marketing-scripts-y-extensiones)
- [Pocas páginas cacheadas](#pocas-paginas-cacheadas)

### Archivos externos

Si las páginas de su tienda dependen de que se carguen archivos externos, pueden quedar rehén del tiempo de respuesta de los servidores que entregan estos archivos.

Lo ideal es que __todos los archivos usados por su sitio estén almacenados en VTEX__. Es el caso, por ejemplo, de imágenes, vídeos, scripts, funciones y tags de propaganda.

### Requests síncronos

Los servicios externos que modifican las páginas de la tienda pueden interrumpir la carga completa hasta que se ejecuten.

Ejemplo: si su tienda hace un request para el script de un parcedo de midia directamente por el módulo CMS, sin que el código sea asincrónico ("async"), la página sólo se va a cargar después de que se ejecute la respuesta a este request.

En algunos casos esta espera es necesaria. Pero en otros no. Imagine, por ejemplo, un cuadro de chat de soporte. No es necesario interrumpir la carga de la página hasta que este servicio se ejecute.

### Imágenes demasiado pesadas

Cuando una imagen tiene un tamaño mayor que el utilizado para mostrar en el sitio, el navegador del usuario baja la imagen completa para luego reducirla en la pantalla.

Con ello, la página tarda más en cargarse de lo que necesitaba.

Las imágenes de tamaño más grande que lo necesario son causa frecuente de lentitud.

Entienda este tema a fondo en el artículo [Mejorar la performance de imágenes de los productos](/es/tutorial/mejorando-la-performance-de-imagenes-de-productos).

### Tags de marketing, scripts y extensiones

Es fundamental que usted tenga seguridad de que todas las extensiones de su tienda están allí por un motivo válido.

En caso contrario, puede que un servicio de terceros esté tomando tiempo de carga sin necesidad.

Si observa la presencia de tags duplicadas o que realizan funciones iguales o parecidas, piense en bloquear o retirar estes servicios a través de Google Tag Manager o cualquier otro gestor de tags.

### Pocas páginas cacheadas

Si su tienda fue implementada hace poco tiempo y todavía tiene __pocas visitas__, varias páginas dejan de estar en caché.

Cuando un usuario abre una página que no está en caché, ella se carga "desde cero". Por lo tanto, el tiempo de carga de esta página se vuelve más grande.

Este es un comportamiento esperado para sitios con pocas visitas, pero que suele ser eliminado con el aumento del tráfico en el sitio.
