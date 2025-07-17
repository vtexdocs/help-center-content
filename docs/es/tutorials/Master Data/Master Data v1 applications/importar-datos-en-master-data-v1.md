---
title: 'Importar datos en Master Data v1'
id: tutorials_1135
status: PUBLISHED
createdAt: 2017-04-27T21:57:12.437Z
updatedAt: 2025-03-19T16:33:37.888Z
publishedAt: 2025-03-19T16:33:37.888Z
firstPublishedAt: 2017-04-27T23:03:43.488Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: importing-data-into-master-data-v1
locale: es
legacySlug: importar-datos-en-el-master-data
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

La inclusión y modificación en masa de registros en Master Data v1 puede realizarse por API o importando una plantilla. Este artículo tiene como objetivo proporcionar las instrucciones necesarias para crear e importar una plantilla con los datos nuevos y modificados.

## Exportar datos del formulario

Para obtener la plantilla de importación, primero exporta los datos del formulario que deseas actualizar, siguiendo los pasos descritos en Exportación de datos de Master Data v1. Así, garantizas que la plantilla utilizada esté actualizada con la versión más reciente del formulario.

## Remover campos de llenado automático

La plantilla de exportación es la misma que se debe utilizar en la importación, excepto por los campos que son de llenado automático del sistema:

- accountId
- accountName
- dataEntityId
- createdBy
- createdIn
- updatedBy
- updatedIn
- lastInteractionBy
- lastInteractionIn
- followers
- tags

Remueve esta información al rellenar la plantilla que deseas importar.

## Actualizar datos existentes

Para actualizar datos existentes, es imprescindible exportarlos como se describe en [Exportar datos del formulario](#exportar-datos-del-formulario) y modificar la información deseada en la plantilla, manteniendo la columna id sin cambios. 

## Ingresar nuevos datos

Para crear un nuevo registro, crea una nueva fila con la información del registro y mantén el valor de la columna id vacío.

<div class="alert alert-warning">
Al ingresar los datos en la plantilla, comprueba que el formato de los valores en las celdas coincida con el formato esperado por la respectiva columna (campo del formulario). Algunos ejemplos de formatos son número, texto o fecha.
</div>

## Cargar la plantilla

Después de la exportación y edición de la plantilla, debes realizar la importación de los datos. Sigue los pasos a continuación para realizar esta operación.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Haz clic en la pestaña **Aplicaciones**.
3. Haz clic en `Importar`.
4. En **Entidades de datos**, selecciona la entidad de datos del formulario en el que deseas ingresar o actualizar registros.
5. Haz clic en `Seleccionar archivo` para seleccionar el archivo de la plantilla en tu dispositivo.
6. Haz clic en el botón `Importar` en la esquina inferior derecha de la pantalla.

<div class="alert alert-warning">
Mantén el mismo formato de la plantilla exportada (XLS) para realizar la importación con éxito.
</div>
