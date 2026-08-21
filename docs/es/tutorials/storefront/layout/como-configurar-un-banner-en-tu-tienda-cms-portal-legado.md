---
title: 'Como configurar un banner en tu tienda CMS Portal (Legado)'
id: frequentlyAskedQuestions_1848
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.558Z
updatedAt: 2026-07-10T10:52:00.000Z
publishedAt: 2023-03-29T17:40:06.023Z
firstPublishedAt: 2019-01-24T22:15:27.116Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-configure-a-banner-in-your-cms-portal-legacy-store
legacySlug: como-modificar-banner
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
    - "/es/docs/tracks/cms-portal-legado"
    - "/es/docs/tutorials/definicion-de-vitrinas"
---

>⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado).

En este artículo aprenderás a crear, editar y programar banners en el CMS Portal (Legado). A lo largo de las instrucciones se explica cómo acceder al layout de la página, completar los campos del banner y definir las condiciones de visualización.

El artículo muestra cómo configurar un banner en la página de inicio, pero el mismo procedimiento puede aplicarse a cualquier página de la tienda.

## Instrucciones

Para crear o modificar un banner en la página de inicio de tu tienda sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en la carpeta **CMS > Sites and channels**.
3. Haz clic en el nombre del sitio web deseado.
4. Haz clic en la carpeta **/**.

    ![instrução CMS -pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_1.png)

5. Haz clic en **Home > Settings**.

    ![cms-home-settings PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_2.png)

6. En la ventana que se abre, haz clic en el ícono de lápiz para editar.

    ![cms_home_settings_lapis pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_3.png)

7. Llena en el formulario los campos con las configuraciones del banner. Aprende más sobre cada campo en la sección [Campos del formulario de banner](#campos-del-formulario-de-banner).
8. Haz clic en `Update Content List` para actualizar el contenido del banner. El formulario se cerrará y se mostrará la ventana abierta en el paso 6.
9. Haz clic en `Save Content` para guardar la información. Verás una ventana emergente con el mensaje `Settings saved successfully`.
10. Haz clic en `OK` para cerrar la ventana emergente.
11. Haz clic en `Save Settings`

    >⚠️ Si sales de la página sin hacer clic en el botón `Save Settings`, como se indica en el último paso, perderás toda la configuración realizada en el registro del banner.

## Campos del formulario de banner

El formulario de banner se divide en dos secciones:

- [**Content (contenido)**](#content)
- [**Condiciones de exhibición**](#display-condition-condiciones-de-exhibicion).

### Content

| Campo | Descripción |
| --- | --- |
| **Content Name** | Nombre interno que identifica el banner en el CMS. |
| **Width** | Anchura de la imagen en píxeles (ejemplo: `1170px`). |
| **Height** | Altura de la imagen en píxeles (ejemplo: `500px`). |
| **File Type** | Tipo de archivo. Para banners, selecciona `image`. |
| **URL** | Link de destino al hacer clic en el banner. |
| **Banner \ | Preview** | Campo para agregar la imagen del banner. Consulta más detalles en la sección [Cambiar o agregar la imagen del banner](#modificar-o-cargar-imagen-del-banner) |

### Display Condition (condiciones de exhibición)

Las condiciones de exhibición permiten segmentar cuándo y dónde se mostrará el banner, como se muestra en la siguiente tabla:

| Campo | Descripción |
| --- | --- |
| **Partner/Campaign/Source** | Muestra el banner cuando la URL de origen del visitante contiene parámetros UTM coincidentes (ejemplo: `utm_source=google&utm_medium=cpc`). |
| **Keywords** | Vincula la visualización del banner a búsquedas por términos específicos en el sitio web. |
| **Category/Brand** | Vincula la exhibición del banner a páginas específicas de categoría y/o marca. |
| **Active Content** | Activa la exhibición del banner en la tienda. |
| **From/To** | Define el periodo en el que el banner estará activo. Consulta más detalles en la sección [Programar un banner](#programar-un-banner). |

## Modificar o cargar imagen del banner

Para hacer cambios o cargar una nueva imagen sigue estos pasos:

1. En la sección **Content** del formulario de banner, haz clic en `add file`. Se abrirá la ventana **Insert File**, con opciones para buscar un archivo existente o cargar uno nuevo.

    ![insertar-imagen-banner](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/inserir-imagem-banner.png)

2. Elige una de las siguientes opciones para definir la imagen del banner:

   **Utilizar un archivo existente**

   a. En **Find by name**, ingresa el nombre del archivo para encontrarlo.

   b. Si conoces el identificador del archivo, puedes llenar el campo `File Id` para encontrarlo.

   c. Haz clic en `Find` para ejecutar la búsqueda.

   **Cargar una nueva imagen**

   a. En **Insert a new file**, haz clic en `Browse for file`.

   b. Selecciona la imagen de tu computadora.

3. Después de encontrar o seleccionar el archivo, haz clic en `Abrir` para vincularlo al banner.
4. Haz clic en `Save file` para actualizar el contenido del banner.
5. Haz clic en `Save Content` para guardar la información. Verás una ventana emergente con el mensaje `Settings saved successfully`.
6. Haz clic en `OK` para cerrar la ventana emergente.
7. Haz clic en `Save Settings`

    >⚠️ Si sales de la página sin hacer clic en el botón `Save Settings`, como se indica en el último paso, perderás toda la configuración realizada en el registro del banner.

## Programar un banner

Para programar un banner, debes configurar los campos **From** y **To** con las fechas de inicio y de fin de exhibición y, obligatoriamente, marcar la opción `Active Content`. Si la opción `Active Content` no está marcada el banner no se mostrará, aunque las fechas estén configuradas.

>⚠️ El CMS Portal (Legado) utiliza **UTC-0 (GMT)** en los campos **From** y **To**. Por ejemplo, si quieres que el banner se muestre a partir de las 10 a. m., hora de Brasilia (UTC-3), configura el campo **From** a la 1 p. m. (10 a. m. + 3 h = 1 p. m., en UTC-0).
