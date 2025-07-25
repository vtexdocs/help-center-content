---
title: 'Gestión de redirecciones de URL'
id: 3UJuFrU8imSVWg134mkvJV
status: PUBLISHED
createdAt: 2022-02-03T13:17:46.873Z
updatedAt: 2025-07-01T18:03:07.603Z
publishedAt: 2025-07-01T18:03:07.603Z
firstPublishedAt: 2022-02-03T14:42:10.000Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-url-redirects
locale: es
legacySlug: gestion-de-redirecciones-de-url
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

**Redirecciones** es una función que redirige al cliente a cualquier otra página interna o externa. Esto se realiza en el área de búsqueda utilizando términos o filtros seleccionados.

<div class="alert alert-warning" role="alert">
  Esta función está disponible para tiendas que utilizan la tecnología <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework">Store Framework</a>. Para tiendas que utilizan <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#faststore">FastStore</a>, consulta la guía <a href="https://developers.vtex.com/docs/guides/faststore/routing-managing-urls-with-redirects-and-rewrite-paths">Gestión de URLs con redireccionamientos y reescritura de rutas</a>.
</div>

## Antes de empezar

Para crear, editar o eliminar redirecciones, el usuario del Admin VTEX debe tener un rol de acceso con el [recurso de License Manager](/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**.  

Puedes asignar al usuario un rol de acceso con el recurso siguiendo las instrucciones del artículo [Gestionar usuarios](/es/tutorial/gestionar-usuarios--tutorials_512#editando-usuarios), o crear un nuevo rol de acceso que incluya dicho recurso consultando las instrucciones del artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol).

## Crear redirección

1. En el Admin VTEX, haz clic en **Storefront** > **Redirecciones**.
2. Haz clic en `Nueva redirección`.
3. Rellena los siguientes campos:
**De**: ingresa la URL de la página desde la que se redirigirá a los visitantes. La URL no debe contener el dominio, por ejemplo: `/-mascara-regeneradora-algas-marinas/p`.
**Para**: ingresa la URL de la página a la que deseas redirigir a los visitantes. La URL no debe contener el dominio, por ejemplo: `/acondicionador-de-leche-ultra-hidratante/p`. 
4. En la casilla de selección, indica si la redirección es temporal o permanente. Si es temporal, debes definir la fecha de fin.
5. Haz clic en `Guardar` para finalizar.

![gerenciando redirecionamentos es 1](https://images.ctfassets.net/alneenqid6w5/6WZzZNgQPLtfwP1Z8fK7S9/ca2f417ea225d8d6875f37c31d0847a7/image5.png)

## Importar redirección

Para importar una redirección, sigue los pasos a continuación.

1. Haz clic en <i class="fas fa-upload"></i> `Importar`.
2. Selecciona el archivo CSV en tu computadora, asegurándote de que utilice un punto y coma como separador (`;`).
3. Haz clic en `Importar archivo`.
4. Haz clic en  `Guardar` para finalizar.

<div class="alert alert-warning" role="alert">
Ten en cuenta que algunos editores pueden modificar automáticamente el separador. Por lo tanto, antes de importar un archivo, verifica que el formato del mismo sea CSV, y que el punto y coma (<code>;</code>) se utiliza como separador de valores. No se aceptarán archivos que utilicen otros separadores como comas (<code>,</code>) o espacio de tabulación (<code>&nbsp;&nbsp;</code>).<br><br>
Algunos editores, como Google Sheets, exportan los archivos CSV con la coma (<code>,</code>) como separador predeterminado y es posible que no permitan el uso del punto y coma (<code>;</code>). En esos casos, se recomienda utilizar otros editores que permitan sustituir los separadores o guardar el archivo con el punto y coma (<code>;</code>) como separador.
</div>

## Exportar redirección

Si deseas exportar tus redirecciones, haz clic en <i class="fas fa-download"></i> `Exportar` y se descargarán a tu computadora.

<div class="alert alert-info">
No se puede crear redirecciones con rutas predefinidas como “home” "/", "login", "account", etc. Recomendamos la creación manual según las instrucciones descritas anteriormente.
</div>

