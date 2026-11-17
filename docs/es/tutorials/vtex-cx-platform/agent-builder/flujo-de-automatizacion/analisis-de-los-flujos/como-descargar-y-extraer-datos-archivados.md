---
title: "Descargar y extraer datos archivados"
id: 3fYq4fID5fMrm5BT2uVxG0
status: PUBLISHED
createdAt: 2025-09-12T17:09:16.264Z
updatedAt: 2026-11-12T14:20:00.000Z
publishedAt: 2025-10-03T14:21:49.361Z
firstPublishedAt: 2025-10-03T14:21:49.361Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-download-and-extract-archived-data
legacySlug: como-descargar-y-extraer-datos-archivados
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Los datos del flujo de automatización se almacenan durante 180 días. Después de ese período, la plataforma archiva los datos en formato **JSON** en el menú **Archives**.

## Obtener los archivos en el flujo de automatización

Es posible descargar estos datos archivados accediendo al panel de configuración. Al final de la página, la plataforma informa la cantidad de archivos y de registros.

Podrás acceder tanto al contenido de la tabla **Messages** como al de la tabla **Runs**. Para visualizar cualquiera de ellos, haz clic en el botón resaltado en amarillo.

Podrás acceder tanto al contenido de la tabla **Mensajes** como al de la tabla **Runs**. Para visualizar ambos, haz clic en el botón **Archivo de ejecución o Archivo de mensajes**.

Para descargar los archivos de mensajes, haz clic en el ícono destacado al lado de la fecha. Los archivos de la tabla mensajes vendrán con el prefijo **message**.

Para descargar los archivos, haz clic en el ícono destacado al lado de la fecha. Los archivos de la tabla ejecución vendrán con el prefijo **run**.

Finalmente, en cada archivo podrás verificar el contenido, el período (mes) y la cantidad de registros que contiene.

## Cargar y transformar los datos archivados en Power BI

Para cargar los archivos en Power BI, sigue los pasos de abajo:

1. Después de descargar los archivos, cárgalos en Power BI con Power Query. Selecciona un origen nuevo y elige **JSON**.
2. Al hacer clic en `Conectar`, cambia la opción del tipo de archivo a **Todos los archivos**.
3. Selecciona el archivo y haz clic en `Abrir`.

En Power Query aparecen **Importar**, que carga los archivos en Power BI, y **DirectQuery**, que se conecta al archivo sin importarlo. Usa **Importar**, porque el archivo se puede modificar o quitar de la carpeta.

Al importar el archivo, la consulta expande todas las columnas que contienen datos.

Elimina estos pasos para obtener los datos limpios y unir las tablas de los datos archivados con las tablas obtenidas por el conector.

## Combinar las tablas

Para combinar las tablas, sigue los pasos de abajo:

1. Selecciona **Combinar** y, a continuación, **Anexar consultas**, **Anexar consultas como nuevas**.
2. Selecciona las tablas y finaliza el proceso haciendo clic en `Aceptar`.

Al finalizar el proceso, se genera una nueva consulta con todos los datos seleccionados en una sola tabla.

> La conexión de los datos se hace a través de la API de integración con Power BI. Los datos están estructurados en formato JSON. Para acceder a todos los campos, expande las columnas en Power Query en Power BI.
