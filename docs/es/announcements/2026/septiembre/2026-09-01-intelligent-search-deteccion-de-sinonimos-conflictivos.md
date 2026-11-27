---
title: 'Intelligent Search: detección de sinónimos conflictivos'
createdAt: 2026-09-01T12:00:00.000Z
updatedAt: 2026-09-01T12:00:00.000Z
publishedAt: 2026-09-01T12:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-09-01-intelligent-search-synonym-conflict-detection
locale: es
announcementSynopsisES: 'Intelligent Search ahora indica cuando un término ya está cubierto por otro sinónimo, ayudando a evitar duplicados y conflictos de relevancia.'
tags:
  - Nueva funcionalidad
  - Intelligent Search
---

VTEX lanzó una capa de detección de conflictos en el flujo de creación y edición de [sinónimos](https://help.vtex.com/es/docs/tutorials/sinonimos) de Intelligent Search, que indica cuando un término ya está cubierto por una regla existente.

![sinonimos-conflictivos-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2026/septiembre/2026-09-01-intelligent-search-deteccion-de-sinonimos-conflictivos_1.png)

## ¿Qué cambió?

- Al crear o editar un sinónimo, Intelligent Search valida los términos ingresados en relación con toda la base de sinónimos ya registrados en la tienda.
- Si un término ya está cubierto por otra regla, una notificación señala la superposición y dirige a la página de **Sinónimos conflictivos**, donde puedes revisar, editar o eliminar cada sinónimo conflictivo individualmente.
- Al hacer clic en `Guardar`, una ventana de confirmación identifica el conflicto y solicita que confirmes el registro o la edición antes de continuar.

## ¿Por qué realizamos este cambio?

En tiendas con bases extensas de sinónimos, era común recrear sinónimos que ya existían sin darse cuenta, duplicando entradas en el listado y dificultando la administración de sinónimos con el tiempo.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La detección de conflictos de sinónimos está disponible para todas las tiendas que utilizan Intelligent Search. Para más información, consulta el artículo [Crear sinónimos](https://help.vtex.com/es/docs/tutorials/crear-sinonimos#deteccion-de-sinonimos-conflictivos).
