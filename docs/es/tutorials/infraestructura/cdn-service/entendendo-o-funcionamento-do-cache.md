---
title: 'Cómo funciona el cache'
id: tutorials_258
status: PUBLISHED
createdAt: 2017-04-27T22:11:32.790Z
updatedAt: 2021-12-03T20:51:39.557Z
publishedAt: 2021-12-03T20:51:39.557Z
firstPublishedAt: 2017-04-27T23:03:11.364Z
contentType: tutorial
productTeam: Identity
author: authors_3
slugEN: understanding-how-the-cache-works
legacySlug: entendendo-o-funcionamento-do-cache
locale: es
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

El concepto de cache es bastante difundido como siendo un dispositivo de acceso rápido. En VTEX no es diferente. Del mismo modo, el cache se utiliza como un recurso que aumenta el desempeño de cargar páginas y archivos.

Cuando una página o archivo inicia su carga, a través de la URL, el browser realiza una solicitud para el servidor que, por su parte, tiene la función de responder con información relevante para aquella solicitud. La solicitud del browser se conoce como **request** y la respuesta del servidor como **response**. Esos términos serán bastante utilizados en el transcurso de este artículo. Vea el esquema abajo:

![Como o cache funciona - comunicação entre servidor e navegador](//images.ctfassets.net/alneenqid6w5/6ONSKQqdEoIsHxcvfp5GoS/1d05717d54faede0fc00d75716d7def4/1_ES.png)

El cache está representado a través de una capa entre el browser y el servidor y, así, cuando un **request** ocurre, en vez del sistema ir a buscar la información directamente en el servidor, primero va a esa capa, lo que vuelve mucho más ágil a la respuesta. Vea el esquema abajo:

![Cómo funciona el caché: comunicación con el caché (sin caducar)](//images.ctfassets.net/alneenqid6w5/15ss3biutJhXX2WkG9k8xG/3d375c19c114eecdbe75decac28e2df3/2_PT.png)

Sin embargo, como el dato actualizado está en el servidor, de tiempo en tiempo es necesario actualizar el cache. Ese tiempo varía de acuerdo al tipo de **request, **o sea, si el **request** es una página, el tiempo es uno, si es un archivo javascript o CSS, es otro y aún, si es una imagen, será otro.

Un sitio posee innúmeras páginas: Home, páginas de departamento y categoría, de marca, búsqueda, producto, etc. Dependiendo del árbol de categoría y del mix de productos, el sitio puede alcanzar más de 10 mil páginas. 

Cada una de esas páginas se carga a través de una URL, o sea, si un sitio posee 10 mil páginas, él también poseerá 10 mil URLs diferentes. 

La capa de cache guarda una versión para cada una de esas páginas (URLs), o sea, cuando un usuario hace clic en algún producto en cualquier vitrina del sitio, la página de aquel producto comienza a ser cargada con la información cacheada de aquella URL de producto. Lo mismo ocurre con las demás páginas del sitio. Lo más importante aquí es entender que el cache se almacena basado siempre en URLs.

Si pudiéramos mirar la capa de cache como un banco de datos (o una planilla Excel), de modo general, veríamos una tabla con dos columnas: URL y contenido. 

La columna “URL” representando el nombre del **request **cacheado (página o archivo) y la columna “contenido” representando el código html o binario (en caso de archivos) de aquel **request**.

Así, cuando ocurre un **request**, el sistema busca en esa grande tabla, a partir de la “URL”, por el “contenido”, retornándolo al browser.

Como ya se ha dicho, tempo de duração del cache varía para cada tipo de **request**. Sigue tabla con el tiempo de cache para cada tipo de **request**:

| **Request**                       | Formato (identificador MIME) |        Duración        |
|-------------------------------|------------------------------|:----------------------:|
| Página/Documento              | text/html                    | Como máximo 30 minutos |
| Imagen (jpeg, gif, png, ico)  | image/*                      | Como máximo 1 hora     |
| Javascript                    | text/javascript              | Como máximo 1 hora     |
| CSS                           | text/css                     | Como máximo 1 hora     |

Cuando el cache de un **request** (página o archivo) expira, al realizar una nueva solicitud, o sea, al cargar nuevamente la URL, el sistema va al servidor, rescata la información actualizada para aquella solicitud y actualiza el contenido de aquella URL en el cache. Después de actualizada, la versión cacheada vuelve a ser retornada para nuevas solicitudes de URL. Vea el esquema ilustrando ese caso:

![Cómo funciona la caché: comunicación con la caché (caducada)](//images.ctfassets.net/alneenqid6w5/e5oS6cve6yw1tS81PYkBK/36d452de8975e10cbb847787bddaf1e1/3_ES.png)

En ese aspecto, podemos separar las respuestas en dos grupos: Cacheadas y no cacheadas.

Respuestas cacheadas: Son respuestas retornadas por la capa de cache, más performáticas.
Respuestas no cacheadas: Son respuestas que normalmente están expiradas en la capa de cache y, por eso, son retornadas por el servidor, normalmente más lentas.

Para identificar si una respuesta fue cacheada o no, acceda a la herramienta de desarrollador del browser y localice **requests** nativos de la plataforma VTEX. Al clicar en el request, el primero al recargar la página, localice, entre los headers, la propiedad “X-VTEX-Cache-Status-Janus-Edge”. 

Si el valor está rellenado con “HIT”, significa que el contenido exhibido es un contenido cacheado, o sea, fue retornado por la capa de cache. Si el valor es “MISS”, significa que el contenido exhibido no es un contenido cacheado y fue retornado directamente del servidor. 

Otra información relevante que puede ser identificada en los headers de los **requests** es la fecha en la que el cache fue creado. Esa información está disponible en la propiedad `X-vtex-processed-at`.

![](//images.contentful.com/alneenqid6w5/5GPSsb4UWA28QS4soyguSI/8772946997cc979ddf9c2297f2ca8bb6/cache.png)

Pese a que archivos javascript y CSS también tienen la duración de cache establecida, como este tipo de archivos se usa en la dormitación de los layouts y, por eso, en algunos casos, necesitan una actualización más ágil, el portal posee una inteligencia que identifica modificaciones en sus contenidos, rompiendo con la capa de cache. 

En líneas generales, si algún archivo javascript o CSS se modifica en el Gerenciador de Portal (/admin/a/), este será actualizado en cuanto el cache de la página que le llama se expire. Sin embargo, para que eso funcione, su llamada en el template no puede poseer ningún querystring, o sea, debe ser limpia, sin parámetros.

- Cambio de precio puede tardar hasta 30 minutos.
- Cambio de dato del catálogo (producto, SKU, categoría, marca etc.) puede tardar hasta 2 horas.
- Cambio de layout puede tardar hasta 40 minutos.

A pesar de parecer compleja, la capa de cache es sencilla y trae grandes beneficios para el desempeño de la tienda como un todo.
