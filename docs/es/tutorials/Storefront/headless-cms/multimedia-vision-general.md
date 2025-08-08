---
title: 'Multimedia - Visión general'
id: 31fhjHTt4TBoo50AmGQ9b2
status: CHANGED
createdAt: 2023-05-29T23:26:35.354Z
updatedAt: 2025-03-10T18:01:14.864Z
publishedAt: 2024-07-03T19:28:25.937Z
firstPublishedAt: 2023-05-30T18:01:54.161Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: media-overview
legacySlug: multimedia-vision-general
locale: es
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

En la página Multimedia puedes gestionar los archivos multimedia de tu tienda, tales como imágenes y videos. Para las imágenes puedes cargar y organizar archivos de hasta 5 MB en los siguientes formatos: `png`, `jpg`, `gif`, `svg` y `webp`, mientras que para los videos puedes agregar una URL del proveedor de videos hospedado externamente como YouTube o Vimeo.

<div class="alert alert-warning">
Para cargar, los archivos deben tener una extensión en minúsculas, por ejemplo, <code>store.png</code>, y el límite de tamaño de archivo para cargar en Multimedia es de <b>5 MB</b>.
</div>

![Multimedia Visión general](//images.ctfassets.net/alneenqid6w5/3HL6n5pBx5OpIyJMmPccuZ/4b7fca26bb4f3b1f72d3a6fff9eca887/es-multimedia-overview.png)

demás, Multimedia está integrada con **Site Editor** y **Headless CMS**. Esta integración te permite acceder y gestionar archivos multimedia directamente a través de las soluciones de CMS de VTEX.

En esta guía aprenderás a:

- [Acceder a Multimedia](#acceder-a-multimedia)
- [Gestionar archivos en Multimedia](#gestion-de-archivos-en-multimedia)

## Acceder a Multimedia
Hay tres formas de acceder al módulo Multimedia:

- **Multimedia**: en el Admin VTEX, haz clic en **Storefront > Multimedia**. 

- **Site Editor** (para tiendas que utilizan Store Framework): en el Admin VTEX, ve a **Storefront > Site Editor**, elige un bloque que contenga una imagen (por ejemplo, Carrusel) y haz clic en `Agregar nuevo`.  Se abrirá un panel.

- **Headless CMS**: en el Admin VTEX, accede a **Storefront > Headless CMS** y elige una de las páginas creadas, como una página de producto. De las secciones disponibles, selecciona una en la que puedas agregar una imagen, como por ejemplo, [Hero](https://developers.vtex.com/docs/guides/faststore/organisms-hero). Haz clic en el componente de imagen Hero y se abrirá un panel de Multimedia.

<div class="alert alert-warning">
Ten en cuenta que la sección debe utilizar la <a href="https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-3-adding-sections-to-the-headless-cms">media-gallery</a> para beneficiarse de Multimedia. Para proyectos de <a href="https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore">FastStore</a>, las secciones que utilizan el widget media-gallery son <a href="https://developers.vtex.com/docs/guides/faststore/organisms-navbar">Navbar</a> y <a href="https://developers.vtex.com/docs/guides/faststore/organisms-hero">Hero</a>.
</div>

En la siguiente imagen se muestra una visión general de la interfaz de Multimedia y las acciones disponibles para gestionar tus archivos multimedia:

![Multimedia Features](//images.ctfassets.net/alneenqid6w5/2teyzkUy2zP5vjMLPxlXgD/db95f45451326e0664992cefa1cd8a6f/es-multimedia-features.png)

| Campo | Descripción |
| ---------- | ------------- |
| **I - Campo de búsqueda** | Encuentra los archivos disponibles en Multimedia. |
| **II - Ordenar por** | Clasifica cómo se muestran los archivos en la interfaz en función de los filtros: `Más reciente`, `Más antiguo`, `Nombre (A-Z)` y `Nombre (Z-A)`. |
| **III - Paginación** | Navega por las páginas de archivos disponibles. |
| **IV - Modo de vista** |	Elige el modo de visualización de los archivos: `Ver en lista` o `Ver en cuadrícula`. |
| **V - Agregar nuevo** | Carga un nuevo archivo desde tu dispositivo. |

## Gestión de archivos en Multimedia
Consulta las secciones a continuación sobre las acciones disponibles para gestionar archivos en Multimedia:

### Agregar imágenes

En Multimedia puedes cargar imágenes en los siguientes formatos: `png`, `jpg`, `gif`, `svg` y `webp`. El límite de tamaño de los archivos es 5 MB. Para cargar una imagen a tu tienda, sigue los pasos a continuación:

1. En la página o panel de **Multimedia**, haz clic en `Agregar nuevo` y luego en `Imagen`.

<div class="alert alert-warning">
  <p>En el panel de Multimedia de Headless CMS y en Site Editor, puedes arrastrar y soltar imágenes.</p>
</div>

2. Elige en tu dispositivo la imagen que deseas agregar y haz clic en `Abrir`.

<div class="alert alert-warning">
Recuerda que en Multimedia se admiten los siguientes formatos: <code>png</code>, <code>jpg</code>, <code>gif</code>, <code>svg</code>, y <code>webp</code>, en minúsculas y con un límite de tamaño de archivo de 5 MB.
</div>

3. Una vez cargada la imagen, aparecerá un mensaje de éxito. 

Ahora, puedes realizar otras operaciones haciendo clic en `Más acciones` (tres puntos verticales) en la imagen en miniatura y eligiendo una de las siguientes acciones:

| Campo | Descripción |
| ---------- | ------------- |
| **Vista previa** | Abre la imagen en una nueva página. |
| **Copiar URL** | Copia la URL de la imagen para poder utilizarla en otras secciones de tu tienda. |
| **Descargar** | Descarga la imagen en tu computadora. |
| **Eliminar** |	Elimina la imagen del repositorio. |

<div class="alert alert-warning">
Si eliminas la imagen solo se borrará del repositorio de Multimedia. Si agregaste la imagen a un componente Hero, por ejemplo, seguirá utilizándose en ese componente, pero no podrá utilizarse en otros.
</div>

### Agregar videos
Además de imágenes, Multimedia te permite almacenar videos que puedes utilizar en tu sitio web para crear un atractivo visual para los usuarios que naveguen por la tienda.

1. En la página **Multimedia**, haz clic en `Agregar nuevo` y luego en `Video`.
2. En la ventana modal, rellena el nombre y la URL del video según corresponda.

- **Nombre del video:** ingresa un nombre para el video que te ayude a identificarlo en la galería.
- **URL del video:** ingresa la URL del video

3. Haz clic en `Agregar video`.

Una vez agregado el video, puedes decidir cómo deseas utilizarlo haciendo clic en el menú `⋮` en la miniatura del video:

- **Copiar URL:** obtén la dirección URL del video que se debe utilizar en la tienda a través de Headless CMS.
- **Abrir video:** abre una vista previa del video en una nueva pestaña del navegador.
- **Eliminar:** elimina el video de tu galería.

### Agregar un video al contenido en Headless CMS

Integrar contenido multimedia, como videos, en Headless CMS puede optimizar la experiencia del usuario en tu sitio web. Sigue los pasos a continuación para agregar videos a tu tienda.

1. En el Admin VTEX, accede a **Storefront > Headless CMS**.
2. Selecciona el [proyecto](https://help.vtex.com/es/tutorial/managing-projects--42IpDFqTVTESH8DCypJMPM) al que deseas agregar el video.
3. Selecciona la página a la que deseas agregar el video. Por ejemplo: **Inicio**.
4. Con la página **Inicio** abierta, en la pestaña **Secciones**, agrega (`+`) una sección que tenga el widget media-gallery, como por ejemplo, **Hero**.
5. Escoge una **Sección** que tenga el widget `media-gallery`. Por ejemplo, Hero.
6. En Hero, rellena los siguientes campos:

- **Dirección URL:** pega la URL que copiaste en Multimedia.
- **Descripción del video:** descripción del video por accesibilidad.

7. Haz clic en `Guardar`.
8. Si deseas verificar tus cambios antes de publicarlos, haz clic en `Vista previa`.

### Cancelar una carga

- **Imágenes**

Si estás cargando una nueva imagen y no deseas continuar, puedes cancelar haciendo clic en la `X` superpuesta a la imagen en miniatura.

- **Videos**

Después de cargar un video, pasa el mouse sobre la miniatura del video, haz clic en el menú (`⋮`) y selecciona **Eliminar**. Si el video ya se está siendo utilizado en alguna parte de tu tienda, seguirá disponible ahí, pero no estará disponible para uso futuro.
