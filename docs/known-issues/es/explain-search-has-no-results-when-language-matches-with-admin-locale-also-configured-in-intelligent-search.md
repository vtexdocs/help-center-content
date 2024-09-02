---
title: 'La Búsqueda Explicada no tiene resultados cuando el idioma coincide con la configuración regional del administrador también configurada en la Búsqueda Inteligente.'
id: 1NHYVn0K3mlOTrtnoRevCw
status: PUBLISHED
createdAt: 2023-05-23T15:35:17.779Z
updatedAt: 2023-05-23T15:35:18.448Z
publishedAt: 2023-05-23T15:35:18.448Z
firstPublishedAt: 2023-05-23T15:35:18.448Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: la-busqueda-explicada-no-tiene-resultados-cuando-el-idioma-coincide-con-la-configuracion-regional-del-administrador-tambien-configurada-en-la-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 830490
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se configura más de un idioma en la Búsqueda Inteligente, la Búsqueda Explicada no devolverá ningún resultado si coincide con una configuración regional de admin que también está en la Búsqueda Inteligente, pero no es la coincidencia exacta. Por ejemplo:


- Idiomas en la búsqueda inteligente: es-AR y en-US
- Si se selecciona es-AR en la Búsqueda inteligente y la configuración regional del administrador es en-US, no se muestra ningún resultado.



## Simulación



- Acceda a la Búsqueda Explicada y seleccione un idioma;
- Selecciona un idioma en el admin que también esté en Búsqueda Inteligente.



## Workaround


Seleccione el idioma exacto en el admin o cualquiera que no esté configurado en Búsqueda Inteligente.




