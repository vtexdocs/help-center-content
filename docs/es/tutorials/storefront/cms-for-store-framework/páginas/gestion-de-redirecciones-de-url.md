---
title: 'Gestión de redirecciones de URL'
id: 3UJuFrU8imSVWg134mkvJV
status: PUBLISHED
createdAt: 2022-02-03T13:17:46.873Z
updatedAt: 2025-08-12T19:39:14.527Z
publishedAt: 2025-08-12T19:39:14.527Z
firstPublishedAt: 2022-02-03T14:42:10.000Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-url-redirects
legacySlug: gestion-de-redirecciones-de-url
locale: es
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

**Redirecciones** es una función que redirige al cliente a cualquier otra página interna o externa. Esto se realiza en el área de búsqueda utilizando términos o filtros seleccionados.

> ⚠️ **Tiendas que usan Store Framework**: Esta funcionalidad está disponible de forma nativa. </br> **Tiendas que usan FastStore**: <ul> <li>Consulte la guía [Gestión de URLs con redirecciones y reescritura de rutas](https://developers.vtex.com/docs/guides/faststore/routing-managing-urls-with-redirects-and-rewrite-paths) para administrar las redirecciones.</li> <li>Para proyectos con más de 1.024 redirecciones, active el flujo beta habilitando la bandera `enableRedirects` para utilizar la función de Redirecciones en el Admin. Más información en [(Beta) Habilitación de redirecciones usando la bandera enableRedirects](https://developers.vtex.com/docs/guides/faststore/routing-managing-urls-with-redirects-and-rewrite-paths#beta-enabling-redirects-using-the-enableredirects-flag).</li> </ul>

## Antes de empezar

Para crear, editar o eliminar redirecciones, el usuario del Admin VTEX debe tener un rol de acceso con el [recurso de License Manager](/es/docs/tutorials/recursos-del-license-manager) **CMS Settings**.  

Puedes asignar al usuario un rol de acceso con el recurso siguiendo las instrucciones del artículo [Gestionar usuarios](/es/docs/tutorials/gestionar-usuarios-administrativos#editando-usuarios), o crear un nuevo rol de acceso que incluya dicho recurso consultando las instrucciones del artículo [Roles](/es/docs/tutorials/roles#creando-un-rol).

## Crear redirección

1. En el Admin VTEX, haz clic en **Storefront** > **Redirecciones**.
2. Haz clic en `Nueva redirección`.
3. Rellena los siguientes campos:
- **De**: ingresa la URL de la página desde la que se redirigirá a los visitantes. La URL no debe contener el dominio, por ejemplo: `/-mascara-regeneradora-algas-marinas/p`.
- **Para**: ingresa la URL de la página a la que deseas redirigir a los visitantes. La URL no debe contener el dominio, por ejemplo: `/acondicionador-de-leche-ultra-hidratante/p`. 

> ⚠️ Los parámetros de QueryString (ejemplo, `?key=value`) no se redirigen por defecto.

4. En la casilla de selección, indica si la redirección es temporal o permanente. Si es temporal, debes definir la fecha de fin.
5. Haz clic en `Guardar` para finalizar.

![gerenciando redirecionamentos es 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/páginas/gestion-de-redirecciones-de-url_1.png)

## Importar redirección

Para importar una redirección, sigue los pasos a continuación.

1. Haz clic en <i class="fas fa-upload"></i> `Importar`.
2. Selecciona el archivo CSV en tu computadora, asegurándote de que utilice un punto y coma como separador (`;`).
3. Haz clic en `Importar archivo`.
4. Haz clic en  `Guardar` para finalizar.

> ⚠️ Ten en cuenta que algunos editores pueden modificar automáticamente el separador. Por lo tanto, antes de importar un archivo, verifica que el formato del mismo sea CSV, y que el punto y coma (`;`) se utiliza como separador de valores. No se aceptarán archivos que utilicen otros separadores como comas (`,`) o espacio de tabulación (`&nbsp;&nbsp;`).<br><br> Algunos editores, como Google Sheets, exportan los archivos CSV con la coma (`,`) como separador predeterminado y es posible que no permitan el uso del punto y coma (`;`). En esos casos, se recomienda utilizar otros editores que permitan sustituir los separadores o guardar el archivo con el punto y coma (`;`) como separador.

## Exportar redirección

Si deseas exportar tus redirecciones, haz clic en <i class="fas fa-download"></i> `Exportar` y se descargarán a tu computadora.

> ℹ️ No se puede crear redirecciones con rutas predefinidas como “home” "/", "login", "account", etc. Recomendamos la creación manual según las instrucciones descritas anteriormente.

