---
title: 'Cómo crear landing pages con URLs personalizadas'
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2023-03-29T15:54:22.828Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-create-landing-pages-with-customized-urls
legacySlug: como-funciona-el-contexto-de-busqueda, como-crear-landing-pages-con-urls-personalizadas
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado) y para la búsqueda legada. Si tu tienda utiliza VTEX Intelligent Search, consulta la serie de artículos [Intelligent Search](/es/docs/tracks/vision-general-intelligent-search).

El buscador utilizado por las tiendas del CMS Portal (Legado) es personalizable y permite aplicar filtros por departamento, categoría, marca, colección, especificación y SKU, entre otros criterios.

Dado que estos filtros se aplican directamente en la URL, las búsquedas más complejas pueden generar direcciones extensas o poco amigables, lo que reduce su relevancia para los rastreadores de motores de búsqueda, como Google.

Para resolver esta situación, las carpetas del CMS incluyen el campo `Search Context (Default)`, que permite definir los filtros de búsqueda que se aplicarán a la página vinculada a cada carpeta. Con esta configuración, el CMS muestra los resultados esperados sin exponer los filtros en la URL, creando una ruta más amigable.

> ℹ️ Si una carpeta tiene un valor configurado en `Search Context (Default)`, este reemplazará cualquier parámetro de búsqueda ingresado directamente en la URL. Esto significa que los filtros y los criterios de ordenación, incluido el parámetro `O`, no se aplicarán a la página.

En esta guía aprenderás a usar el **contexto de búsqueda** para asociar una búsqueda con una carpeta del CMS y mostrar sus resultados en una URL amigable.

## Antes de empezar

Asegúrate de que el [template](/es/docs/tutorials/que-son-templates) de la página incluya el control `<vtex.cmc:searchResult/>`. El contexto de búsqueda solo funciona si la plantilla contiene este control. Aprende más en [Cómo usar el control Search Result](/es/docs/tutorials/como-usar-el-control-search-result).

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en **CMS > HTML Templates**.
3. Crea una nueva plantilla o asegúrate de que una existente contenga el control `<vtex.cmc:searchResult/>`. Para instrucciones detalladas, consulta [Crear y editar un template de página](/es/docs/tutorials/como-crear-un-template-de-pagina).

> ℹ️ El control `<vtex.cmc:searchResult/>` funciona únicamente en páginas con contexto de búsqueda, es decir, páginas en las que los resultados mostrados se obtuvieron a partir de una búsqueda del usuario.

## Instrucciones

Para crear una landing page con URL personalizada sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en **CMS > Sites and channels**.
3. Haz clic en el sitio web deseado.
4. Haz clic en la carpeta raíz (`/`).
5. Decide si vas a configurar el contexto de búsqueda en:
   - [Una página que ya existe en tu sitio web](#configurar-contexto-de-busqueda-en-pagina-existente)
   - [Una nueva página que vas a crear](#configurar-contexto-de-busqueda-en-una-pagina-nueva)

> ⚠️ La búsqueda legada renderiza una landing page cuando el término buscado corresponde exactamente al nombre de una carpeta configurada en el CMS. Para que esta carpeta aparezca en los resultados de búsqueda necesita tener un [layout](/es/docs/tutorials/que-son-layouts) asociado, al igual que la carpeta principal. En estructuras con más de un nivel de directorio, como `/carpeta1/landing-page`, este comportamiento puede no funcionar como se esperaba, y la búsqueda puede devolver una página 404.

### Configurar contexto de búsqueda en página existente

Después de hacer clic en la carpeta raíz (`/`) sigue las instrucciones a continuación:

6. Haz clic en la carpeta que deseas utilizar para la landing page.
7. En el lado derecho de la pantalla haz clic en `edit`.
8. En el campo `Search Context (Default)`, ingresa los parámetros de búsqueda que deseas aplicar a la página. Para mostrar, por ejemplo, productos de la categoría `111`, de la marca `222` y con la especificación `333`, utiliza el siguiente valor: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
9. Haz clic en `Save Folder`.
10. Accede a la URL de la carpeta configurada y verifica si la página muestra los productos esperados. La landing page estará disponible en la URL `https://www.{accountName}.com/{landing-page}`, donde `{accountName}` es el nombre de tu tienda y `{landing-page}` es el nombre de la carpeta en el CMS con el contexto de búsqueda configurado.

### Configurar contexto de búsqueda en una página nueva

Después de hacer clic en la carpeta raíz (`/`) sigue las instrucciones a continuación:

6. En el lado derecho de la pantalla haz clic en `new folder`.
7. Llena los campos según se describe a continuación:
   - **Folder Name:** ruta de la URL.
   - **Marketing Context (Default):** define si se puede acceder a la página mediante [parámetros UTM](https://help.vtex.com/es/docs/tutorials/que-son-utm-source-utm-campaign-y-utm-medium). Este campo es opcional.
   - **Search Context (Default):** agrega parámetros de búsqueda. Para mostrar, por ejemplo, productos de la categoría `111`, de la marca `222` y con la especificación `333`, utiliza el siguiente valor: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
   - **Protocol:** define el protocolo de comunicación entre un servidor web y un navegador web. Recomendado: `HTTPS`.
   - **Cache Type:** define el comportamiento de almacenamiento en caché del navegador. Recomendado: `Local and Remote`.
   - **Authentication Required?:** define si se podrá acceder a la página solamente después de la autenticación del usuario. Si esta opción está activada, solo los usuarios autenticados podrán acceder a la página.
8. Haz clic en `Save Folder` para guardar la nueva página.
9. Accede a la URL de la carpeta configurada y verifica si la página muestra los productos esperados. La landing page estará disponible en la URL `https://www.{accountName}.com/{landing-page}`, donde `{accountName}` es el nombre de tu tienda y `{landing-page}` es el nombre de la carpeta creada en el CMS con el contexto de búsqueda configurado.
