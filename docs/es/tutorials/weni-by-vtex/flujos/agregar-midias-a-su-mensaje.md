---
title: 'Agregar mídias a su mensaje'
id: 6XfWIo7fpN4VJLzZTud2UP
status: PUBLISHED
createdAt: 2025-09-17T13:56:46.780Z
updatedAt: 2025-10-03T14:20:03.799Z
publishedAt: 2025-10-03T14:20:03.799Z
firstPublishedAt: 2025-10-03T14:20:03.799Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-media-to-the-message
legacySlug: agregar-midias-a-su-mensaje
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Puedes añadir medios a tu mensaje en nuestra plataforma. Ya sea imágenes, audios o videos, hay dos formas diferentes de agregarlos: usando una URL o subiendo el archivo directamente desde tu computadora.

#### Usando una URL

  1. Dentro de tu proyecto, haz clic en el Módulo de Flujos;

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/agregar-midias-a-su-mensaje_1.png)

  2. Elige un flujo preexistente o crea uno nuevo;
  3. Añade una nueva carta de acción, haz clic en Archivos, elige entre las opciones URL de imagen, URL de audio, URL de video, URL de documento PDF o inserta la URL del medio seleccionado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/agregar-midias-a-su-mensaje_2.png)

Puedes elegir entre las 5 opciones mencionadas anteriormente.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/agregar-midias-a-su-mensaje_3.png)

#### Usando un archivo de tu computadora

Añade una nueva carta de acción, haz clic en Archivos, elige la opción **Enviar Archivo** y selecciona el archivo directamente desde tu computadora.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/agregar-midias-a-su-mensaje_4.png)

#### Limitaciones

Existe una limitación en el tamaño del archivo que se puede enviar, ya que cada solicitud lleva un cierto tiempo y puede ocurrir un **timeout** al intentar ejecutarla. Por lo tanto, el tamaño permitido es de hasta 32 MB, pero hay algunas consideraciones:
  * Son 32 MB de carga máxima O 30 segundos intentando realizar la carga. Entonces, si el archivo es menor de 32 MB, pero la conexión a Internet es lo suficientemente lenta como para no completar la carga en 30 segundos, no se adjuntará porque se superó el tiempo de solicitud.
  * Si el canal de comunicación es WhatsApp, tiene sus propias reglas, como lo muestra la [documentación](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#supported-media-types). Podemos ver que los videos y audios tienen un tamaño máximo de 16 MB (si subes un video de 20 MB a la plataforma Weni, el video se guardará en la plataforma, pero al momento de enviarlo, WhatsApp no lo enviará). Los documentos tienen un límite máximo de 100 MB cada uno (sin embargo, la plataforma Weni solo admite hasta 32 MB)."
