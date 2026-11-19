---
title: 'Mapeo de URLs (redirección 301)'
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2026-11-19T15:38:00.000Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: url-mapping-301-redirect
legacySlug: mapeo-de-url-redireccion-301
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Este tutorial es para tiendas en CMS Portal (Legado). Para otras tiendas, esta configuración se realiza a través de [Páginas](/es/docs/tutorials/paginas-vision-general). Accede a la documentación [Gestión de redirecciones de URL](/es/docs/tutorials/gestion-de-redirecciones-de-url) para obtener más información.

Los mapeos de URLs se utilizan para redirigir URL específicas a otras. Este recurso es muy útil cuando la tienda ya tiene URLs indexadas en los buscadores y deseas redirigirlas a otras más atractivas, manteniendo el SEO y evitando errores de indexación.

Todos los mapeos registrados se ejecutarán en el tipo 301. La redirección 301, también conocida como redirección permanente, transfiere todos los datos importantes de la URL original (PageRank, popularidad de links) a la nueva URL.

Hay dos formas de agregar y editar un mapeo de URL:

- [Agregar o editar manualmente](#agregar-o-editar-manualmente)
- [Importar vía plantilla](#importar-via-plantilla)

Para eliminar mapeos existentes, consulta la sección [Eliminar URLs mapeadas](#eliminar-urls-mapeadas).

## Agregar o editar manualmente

Para agregar o editar un mapeo manualmente sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en la carpeta **CMS** para abrir el directorio.
3. Haz clic en la carpeta **URL Builder**.
4. Haz clic en el botón `Add` para agregar un nuevo mapeo o en el botón `Update` para editar un mapeo existente.
5. Completa los [campos de URL Builder](#campos-de-url-builder).
6. Haz clic en el botón `Save URL` para guardar.

### Campos de URL Builder

- **Url from:** la URL que será redirigida. Esta URL no debe contener el dominio de la tienda. Campo obligatorio.
- **Url to:** URL a la que se redirigirá la navegación. Esta URL no debe contener el dominio de la tienda. Campo obligatorio.
- **Start date:** fecha y hora en que el mapeo comenzará a considerarse. Campo obligatorio.
- **End date:** fecha y hora en que se dejará de considerar el mapeo.
- **Active:** indica si el mapeo está activo o inactivo.

> ℹ️ Para crear un mapeo a home (directorio raíz) ingresa una barra `/` en el campo **Url to**.

## Importar vía plantilla

Para importar mapeos vía plantilla sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en la carpeta **CMS** para abrir el directorio.
3. Haz clic en la carpeta **URL Builder**.
4. Haz clic en el botón `Import` para importar la plantilla.
5. Descarga la plantilla ilustrada a continuación haciendo clic en el botón `Click here`.

   ![ejemplo-plantilla](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/mapeo-de-url-redireccion-301_1.png)

6. Completa los [campos de la plantilla](#campos-de-la-plantilla).
7. Después de llenar la plantilla haz clic en el botón `Browse for file` en la pantalla de importación.
8. Selecciona el archivo que deseas importar desde tu computadora. El archivo debe tener la extensión `.xls` y el formato `Excel 97-2003 Workbook`.
9. Haz clic en el botón `Guardar archivo` para finalizar. Al guardar, un mensaje mostrará la cantidad de URLs agregadas.

### Campos de la plantilla

- **Url from:** URL que será redirigida. Esta URL no debe contener el dominio de la tienda. Ejemplo de cómo completarlo: `/ruta_en_mi_sitio_web_antiguo.html`.
- **Url to:** URL a la que se redirigirá la navegación. Esta URL no debe contener el dominio de la tienda. Ejemplo de cómo completarlo: `/ruta_en_mi_sitio_web_nuevo.html`.
- **Active:** indica si el mapeo está activo o inactivo. Ingresa el valor `1` para activar y `0` para inactivar.
- **Start date:** fecha en que se empezará a considerar el mapeo. El formato de la fecha debe ser `dd/mm/aaaa`.
- **End date:** fecha en que se dejará de considerar el mapeo. El formato de la fecha debe ser `dd/mm/aaaa`.
- **Remove:** opción para eliminar el mapeo. Ingresa el valor `1` para eliminar la URL.

## Eliminar URLs mapeadas

Puedes eliminar mapeos existentes [manualmente](#eliminar-manualmente) o [vía plantilla](#eliminar-via-plantilla).

### Eliminar manualmente

Para eliminar URLs manualmente sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en la carpeta **CMS** para abrir el directorio.
3. Haz clic en la carpeta **URL Builder**.
4. Selecciona la fila del mapeo que deseas eliminar.
5. En el menú superior de URL Builder, haz clic en `Delete`.

### Eliminar vía plantilla

Para eliminar URLs vía plantilla sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en la carpeta **CMS** para abrir el directorio.
3. Haz clic en la carpeta **URL Builder**.
4. En el menú superior, haz clic en el botón `Export` para descargar la plantilla con las URLs existentes.
5. En la columna **Remove** ingresa el valor `1` en las filas que deseas eliminar.
6. Importa la plantilla en URL Builder siguiendo los pasos de la sección [Importar vía plantilla](#importar-via-plantilla).
