---
title: 'Configurar la importación en masa de datos de organizaciones y centros de costos'
id: 41FwcZHF3GctzKcgyKGaoF
status: PUBLISHED
createdAt: 2024-04-25T11:45:15.945Z
updatedAt: 2024-05-21T14:04:56.238Z
publishedAt: 2024-05-21T14:04:56.238Z
firstPublishedAt: 2024-04-29T18:38:46.485Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: configurar-la-importacion-en-masa-de-datos-de-organizaciones-y-centros-custo
locale: es
legacySlug: configurar-la-importacion-en-masa-de-datos-de-organizaciones-y-centros-custo
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

La importación de datos en masa simplifica el proceso de actualización y mantenimiento de información para organizaciones compradoras y sus usuarios (miembros) y centros de costo.

>⚠️ Antes de configurar la funcionalidad de importación en masa, necesitas tener la aplicación [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite) instalada en tu tienda.

Para importar los datos en masa a la plataforma VTEX, sigue los pasos a continuación:

1.	En el Admin VTEX, accede a **Apps > Organizaciones y centros de costos B2B > Organizaciones**, o ingresa **Organizaciones** en la barra de búsqueda de la parte superior de la página.

2.	En la pestaña Organizaciones, haz clic en **Nuevo** y luego en Importar en masa. Haz clic en el botón Cargar y selecciona tu archivo **XLSX**, o arrastra y suelta el archivo a la área punteada. El tamaño del archivo importado debe ser menor que 50 MB.

>ℹ️ Puedes bajar un archivo de plantilla haciendo clic en VTEX file template en la parte inferior de la ventana de importación y rellenar los datos.

<ol start="3">
	<li>Después de que la plataforma realice la verificación del archivo de importación y no encuentre errores, haz clic en Importar.</li>
</ol>

>ℹ️ Si la plataforma detecta algún error, consulta la sección **Errores de importación**.

<ol start="4">
	<li>Una vez finalizado el proceso de importación, puedes hacer clic en Ver detalles de la importación para acceder al informe de importación.</li>
</ol>

![Importação em massa - ES](https://images.ctfassets.net/alneenqid6w5/3sWvUytkkonIe01tnvXwpK/b8c5a8462d5e9f330a9601975ef2fca9/Bulk_import_vers_o_original-gif-ES.gif)

# Errores de importación

Durante el proceso de importación, el sistema comprobará si hay errores en el archivo. Si se producen errores, se te notificará por email y recibirás una alerta en la pantalla.

Para ver los detalles de los problemas encontrados, sigue los pasos a continuación:

1. Haz clic en Ver detalles de la importación y accede al informe de errores correspondiente.

2. Descarga la plantilla revisada haciendo clic en **Bajar XLSX revisado**, que muestra las celdas con error.

3. Después de corregir los errores, puedes reiniciar el proceso de importación cargando el archivo corregido nuevamente.

>ℹ️ Asegúrate de que el archivo que cargues solo contenga las correcciones de los errores previamente identificados para garantizar que la importación se realice correctamente.

![Bulk import - ES](https://images.ctfassets.net/alneenqid6w5/xXZgwvWu4ngsY9D9hjQsO/2cdc7eb8e0710fff44a55b1a2619c58b/Bulk_import_vers_o_error-gif-ES.gif)

# Importación vía API

También se pueden importar los datos a través de la API de [Bulk Import](https://developers.vtex.com/docs/api-reference/buyer-organizations?endpoint=overview), que permite validar e importar archivos, dar seguimiento al progreso y ver el resultado de la importación.
