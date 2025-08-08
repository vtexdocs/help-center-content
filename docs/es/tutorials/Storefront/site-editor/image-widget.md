---
title: 'Reutilización de imágenes con Image Widget'
id: 7pRSVI2xXpQUzjUZj0m4ov
status: PUBLISHED
createdAt: 2021-06-30T18:06:46.531Z
updatedAt: 2024-03-27T14:07:43.190Z
publishedAt: 2024-03-27T14:07:43.190Z
firstPublishedAt: 2021-07-02T21:20:16.653Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: image-widget
legacySlug: image-widget
locale: es
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

Image Widget es un repositorio modal de bloques que permite subir imágenes al [Site Editor](https://help.vtex.com/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW). Con este modal, puede subir, almacenar y gestionar las imágenes de su tienda y utilizarlas en diferentes páginas, como la de Inicio, Producto o Newsletter.

Por ejemplo, puede añadir una nueva imagen al bloque __Carrusel__ de su tienda a través de  Image Widget.

En la siguiente sección, aprenda a [acceso a Image Widget](#acceso-a-image-widget).

## Acceso a Image Widget

Los bloques en Site Editor, que permiten subir una imagen, tienen el modal Image Widget, y en este artículo usaremos el bloque __Carrusel__ como ejemplo. Los pasos para acceder a Image Widget son los siguientes:

1. En el Admin VTEX, accede a **Storefront > Site Editor**.
2. En la columna de la derecha, seleccione el bloque al que desea enviar una imagen.
3. En __BANNERS__, haga clic en `AÑADIR.`
4. En __Imagen del banner,__ haga clic en __Hacer Upload.__

Una vez completados los pasos anteriores, se abrirá en su pantalla el modal Image Widget.

Ahora que ya sabe cómo acceder a Image Widget, vea lo que puede hacer a continuación:

- [Añadir una imagen](#añadir-una-imagen)
- [Reemplazar una imagen](#reemplazar-una-imagen)
- [Eliminar una imagen](#eliminar-una-imagen)

### Añadir una imagen
Después de [acceder a Image Widget](#acceso-a-image-widget) y con él abierto podrá añadir imágenes:

<div class="alert alert-warning">
Al agregar nuevas imágenes en el modal Image Widget usando un <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-workspace">development workspace</a>, la configuración realizada se guardará directamente en el espacio de trabajo principal. Es decir, se reflejarán inmediatamente en el modal de tu tienda.
</div>
<br>
<div class="alert alert-warning">
  El tamaño máximo que admite Image Widget es de 4 MB por archivo.
</div>

1. Haga clic en `Añadir imagen`.
2. Elige la imagen que quiere añadir y haga clic en `Abrir`.
3. El modal se cierra por sí mismo. Haga clic en `APLICAR`.

Después de completar el paso anterior, la imagen estará configurada en el bloque y en su repositorio de Image Widget, y estará lista para ser utilizada en las páginas de su tienda.

Después de añadir una imagen al modal, tiene otras opciones con ella. Vea qué más puede hacer en [Funcionalidades dentro de Image Widget](#funcionalidades-dentro-de-image-widget).

#### Funcionalidades dentro de Image Widget

Dentro del modal, algunas de las funcionalidades que tiene son un campo para buscar imágenes, filtrarlas por orden y ver sus imágenes en lista o cuadrícula.

Además, si [añadió imágenes](#añadir-una-imagen) en su modal, ahora puede ver, copiar la URL de una imagen, descargarla y eliminarla de su repositorio.

Con el modal abierto, haga clic en `más acciones` en la miniatura de una imagen.

| Opciones    | descripción     |
| ---------- | ---------- |
| __Avance__ |Abre una nueva página para obtener una vista previa de la imagen.  |
| __Copiar URL__| Le permite copiar la URL de la imagen y utilizarla en otras partes de su tienda. |
| __Descargar__      | Descargue la imagen en su computador. |
| __Eliminar__      | Remueve la imagen del repositorio.      |

### Reemplazar una imagen
En el bloque en el que desea sustituir una imagen:

1. Haga clic en `Más acciones" en la miniatura de una imagen y seleccione __Editar__.
2. Haga clic en `Más acciones` nuevamente y seleccione __Reemplazar.__
3. Con el modal abierto, haga clic en una imagen para reemplazarla.
4. Haga clic en `APLICAR.`

### Eliminar una imagen
Para eliminar una imagen del bloque deseado, haga clic en `Más acciones` en la miniatura de la imagen y seleccione __Eliminar.__ Después de este procedimiento, la imagen ya no será visible en el bloque.

<div class="alert alert-warning">
  Cuando se remueve una imagen, no significa que se excluya del repositorio. Para ello, consulte la sección <a href="#funcionalidades-dentro-de-image-widget">Funcionalidades dentro de Image Widget</a>.
</div>

