---
title: 'Mapeo de URL (redirección 301)'
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2023-03-27T13:46:43.143Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: url-mapping-301-redirect
locale: es
legacySlug: mapeo-de-url-redireccion-301
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">
<p>Este tutorial es para tiendas en el CMS legado. Para otras tiendas, esta configuración se realiza a través de <a href="https://help.vtex.com/es/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Páginas</a>. Acceda a la documentación <a href="https://help.vtex.com/es/tutorial/gerenciando-redirecionamentos-de-url--3UJuFrU8imSVWg134mkvJV" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Gestión de redirecciones de URL</a> para obtener más información.</p>
</div>

Los mapeos de URL se utilizan para redirigir URL específicas a otras URL. Este recurso es muy útil cuando la tienda ya tiene URL indexadas en los buscadores y se quiere redirigirlas a otras más atractivas, manteniendo el SEO y evitando errores de indexación.

Todos los mapeos registrados se ejecutarán en el tipo 301. Una redirección 301, también conocida como redirección permanente, transfiere todos los datos importantes de su URL original (**PageRank**, **Popularidad de Enlaces**) a la nueva URL.

Hay dos maneras de añadir y cambiar un Mapeo de URL:

- [Manualmente](#manualmente)
- [Importación por plantilla](#importacion-por-plantilla)

## Manualmente

1. En el VTEX Admin, acceda a **Storefront > Layout**.
2. Haga clic en la carpeta **CMS** para abrir el directorio.
3. Haga clic en la carpeta **URL Builder**.
4. Haga clic en el botón `Add` para incluir un nuevo mapeo o en el botón `Update` para editar un mapeo existente.
5. Rellene los [campos del URL Builder](#campos-del-url-builder).
6. Haga clic en el botón `Save URL` para guardar.

### Campos del URL Builder

- **Url from:** la URL que será redirigida. Esta URL no debe contener el dominio. Campo obligatorio.
- **Url to:** la URL a la que se redirigirá la navegación. Esta URL no debe contener el dominio. Campo obligatorio.
- **Start date:** fecha y hora en que se empezará a considerar el mapeo. Campo obligatorio.
- **End date:** fecha y hora en que se dejará de considerar el mapeo.
- **Active:** opción para determinar si el mapeo está activo o inactivo.

<div class="alert alert-info"> 
  <p>Para crear un mapeo para la home (directorio raíz), rellene el campo <b>Url to</b> con una barra <code>/</code>.</p>
</div>

## Importación por plantilla

1. En el VTEX Admin, acceda a **Storefront > Layout**.
2. Haga clic en la carpeta **CMS** para abrir el directorio.
3. Haga clic en la carpeta **URL Builder**.
4. Haga clic en el botón `Import` para importar la plantilla.
5. Descargue el modelo de plantilla que se ilustra a continuación haciendo clic en el botón `Click here`.
![exemplo-planilha](https://images.contentful.com/alneenqid6w5/2Z63gJkADcR2gveT3lncQb/9bbd790becd99acb7b647537eb71c6a9/Screenshot_5.png)
6. Rellene los [campos de la plantilla](#campos-de-la-plantilla).
7. Después de rellenar la plantilla, haga clic en el botón `Browse for file` en la página de importación.
8. Seleccione el archivo que desea importar desde su ordenador. El archivo debe tener la extensión `.xls` en formato `Excel 97-2003 Workbook`.
9. Haga clic en el botón `Save File` para finalizar. Después de guardar el archivo, un mensaje mostrará la cantidad de URL añadidas.

### Campos de la plantilla

- **Url from:** la URL que será redirigida. Esta URL no debe contener el dominio de la tienda. Ejemplo de cómo rellenarlo: `/ruta_en_mi_sitio_web_antiguo.html`.
- **Url to:** la URL a la que se redirigirá la navegación. Esta URL no debe contener el dominio de la tienda. Ejemplo de cómo rellenarlo: `/ruta_en_mi_sitio_web_antiguo.html`.
- **Active:** opción para determinar si el mapeo está activo o inactivo. Introduzca el valor `1` para activar y `0` para desactivar.
- **Start date:** fecha en que se empezará a considerar el mapeo. El formato de la fecha debe ser `dd/mm/aaaa`.
- **End date:** fecha en que se dejará de considerar el mapeo. El formato de la fecha debe ser `dd/mm/aaaa`.
