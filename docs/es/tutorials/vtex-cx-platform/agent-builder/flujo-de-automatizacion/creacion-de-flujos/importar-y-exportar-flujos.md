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

Un flujo es el conjunto de pasos que sigue un contacto en una conversación. Para saber cómo se estructura, consulta [Introducción a los flujos](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos).

Para duplicar un flujo dentro de la misma organización, utiliza `Copiar` en el menú de configuraciones del editor de flujos. Utiliza la exportación cuando la organización de destino sea otra.

## Exportar flujos

Puedes abrir la página de exportación desde el editor de flujos o desde las configuraciones generales de la organización. La página muestra todos los flujos y campañas de la organización, agrupados por uso.

> ⚠️ Los flujos de un mismo grupo interactúan entre sí. Si exportas solo un flujo del grupo, es posible que no funcione correctamente después de importarlo. Selecciona todos los flujos del grupo.

### Abrir la página de exportación desde el editor de flujos

En el editor de flujos, el menú de configuraciones está junto al botón Start Flow. La opción `Exportar definición` de este menú abre la página de exportación. `Exportar traducción` es una opción diferente: exporta la traducción del flujo, no su definición. Para conocer las demás opciones de este menú, consulta [Editor de flujo y sus herramientas](https://help.vtex.com/es/docs/tutorials/editor-de-flujo-y-sus-herramientas).

Para abrir la página de exportación desde el editor de flujos, sigue estos pasos:

1. En el menú lateral, haz clic en **Flows**.
2. Abre el flujo que quieres exportar.
3. Abre el menú de configuraciones junto al botón Start Flow.
4. Haz clic en `Exportar definición`.

Se abrirá la página de exportación.

### Abrir la página de exportación desde las configuraciones generales de la organización

Para abrir la página de exportación desde las configuraciones generales de la organización, sigue estos pasos:

1. Abre las configuraciones generales de la organización.
2. En el menú de opciones, haz clic en `Exportar`.

Se abrirá la página de exportación.

### Seleccionar los flujos para exportar

Para exportar los flujos, sigue estos pasos:

1. En la página de exportación, selecciona los flujos que quieres exportar. Incluye todos los flujos de un mismo grupo.
2. Al final de la página, haz clic en el botón de exportación.

La plataforma genera un archivo `.json`. Utiliza este archivo para importar los flujos.

## Importar flujos

La importación utiliza el archivo `.json` generado durante la exportación para agregar los flujos a una organización. El proceso comienza en las configuraciones generales de esa organización.

Para importar los flujos, sigue estos pasos:

1. Abre las configuraciones generales de la organización que recibirá los flujos.
2. En el menú de opciones, haz clic en `Importar`.
3. Selecciona el archivo `.json` generado durante la exportación.
4. Haz clic en `Importar`.

La plataforma importa los flujos en la organización.
