---
title: "Importar y exportar flujos"
id: 2jwPSnXsL3wniLWt9i7IA5
status: PUBLISHED
createdAt: 2025-09-17T14:03:45.539Z
updatedAt: 2026-11-12T15:07:00.000Z
publishedAt: 2025-10-03T14:20:03.745Z
firstPublishedAt: 2025-10-03T14:20:03.745Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: import-and-export-flows
legacySlug: importar-y-exportar-flujos
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /es/docs/tutorials/creacion-de-flujos
---

Puedes exportar flujos de una organización e importarlos en otra. La exportación genera un archivo `.json`, que se utiliza durante la importación para agregar los flujos a la organización de destino.

Para duplicar un flujo dentro de la misma organización, utiliza `Copiar` en el menú de configuraciones del editor de flujos.

> Para obtener una descripción general de los flujos y su estructura, consulta [Introducción a los flujos](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos).

## Exportar flujos

Puedes abrir la página de exportación desde el editor de flujos o desde las configuraciones generales de la organización. La página muestra todos los flujos y campañas de la organización, agrupados por uso.

> ⚠️ Los flujos de un mismo grupo interactúan entre sí. Si exportas solo un flujo del grupo, es posible que no funcione correctamente después de importarlo. Selecciona todos los flujos del grupo.

### Abrir la página de exportación desde el editor de flujos

En el editor de flujos, el menú de configuraciones está junto al botón Start Flow. La opción `Exportar definición` de este menú abre la página de exportación. `Exportar traducción` es una opción diferente: exporta la traducción del flujo, no su definición. Para conocer las demás opciones de este menú, consulta [Editor de flujo y sus herramientas](https://help.vtex.com/es/docs/tutorials/editor-de-flujo-y-sus-herramientas).

Para abrir la página de exportación desde el editor de flujos, sigue estos pasos:

1. En el menú lateral, haz clic en **Flows**.
2. Abre un flujo que quieras exportar.
3. Abre el menú de configuraciones junto a `Start Flow`.
4. Haz clic en `Exportar definición`.

> ℹ️ `Exportar traducción` exporta la traducción del flujo, no su definición. Para obtener más información sobre las demás configuraciones, consulta [Editor de flujo y sus herramientas](https://help.vtex.com/es/docs/tutorials/editor-de-flujo-y-sus-herramientas).

### Desde las configuraciones generales

1. Abre las configuraciones generales de la organización de origen.
2. En el menú de opciones, haz clic en `Exportar`.

### Seleccionar y exportar flujos

Después de abrir la página de exportación:

1. Selecciona los flujos que quieres transferir. Si un flujo pertenece a un grupo, selecciona todos los flujos de ese grupo.
2. Al final de la página, haz clic en `Exportar`.

La plataforma descarga un archivo `.json` que contiene los flujos seleccionados. Guarda este archivo para realizar la importación.

## Importar flujos

1. Abre las configuraciones generales de la organización de destino.
2. En el menú de opciones, haz clic en `Importar`.
3. Selecciona el archivo `.json` generado durante la exportación.
4. Haz clic en `Importar`.

Los flujos importados se agregan a la organización de destino.
