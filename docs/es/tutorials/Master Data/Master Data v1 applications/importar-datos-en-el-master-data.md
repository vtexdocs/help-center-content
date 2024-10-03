---
title: 'Importar datos en el Master Data'
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2023-06-15T19:48:45.566Z
publishedAt: 2023-06-15T19:48:45.566Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: importing-data-into-master-data
locale: es
legacySlug: importar-datos-en-el-master-data
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

La inclusión y modificación masiva de registros en el Master Data puede realizarse tanto por API como por importación de planilla. Este documento tiene como objetivo demostrar el paso a paso necesario para la creación e importación de la planilla con los datos nuevos y modificados.

## Cómo montar la planilla

La mejor manera de obtener la planilla de importación es [realizando la exportación que se desea actualizar](/es/tutorial/exportacion-de-datos/). La planilla de exportación es la misma que se debe utilizar en la importación, pero con algunas modificaciones, como la retirada de campos que son de relleno automático del sistema, como "accountId",	"accountName",	"dataEntityId", "createdBy", "createdIn",	"updatedBy",	"updatedIn",	"lastInteractionBy",	"lastInteractionIn", "followers" y "tags". Así, siempre realizando una exportación antes de la importación, es garantizado que la planilla utilizada está actualizada con posibles modificaciones del formulario en cuestión.

### Actualizando datos ya existentes

1. Es imprescindible que la exportación de esos datos sea hecha y que se modifiquen los datos deseados en la planilla exportada. 
2. Mantener la columna (id) con el valor del dato ya existente. 

### Insertando nuevos datos

Deje el valor de la columna id vacío y será creado un nuevo registro.

>⚠️ Al ingresar los datos en la plantilla, asegúrate de que el formato de los valores de las celdas coincida con el formato esperado por la columna correspondiente. Ejemplos de formatos son número, texto o fecha.

## Cómo subir la planilla

Tras la exportación y edición de la planilla exportada, es hora de realizar la importación de los datos. Para ello, siga los puntos a continuación para realizar esta operación:

>⚠️ Mantenga el mismo formato de la planilla (xls) para realizar la importación con éxito.

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Haga clic en la pestaña **Aplicações.**
3. Haga clic en el botón **Importar.**
4. Seleccione la entidad de datos que desea insertar o actualizar registros (Aquí, usted debe insertar la entidad de datos del formulario donde están los registros que desea insertar o actualizar).
5. Elija el archivo.
6. Haga clic en el botón **Importar** en la esquina inferior de la pantalla.

[![Importando](https://images.contentful.com/alneenqid6w5/3xkB2DzbqoeIsk2Qice8sM/71d3c7d0379e03a8641180ccbe97dc77/Importando-1.gif)
