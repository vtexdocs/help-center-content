---
title: "Locale Switcher no funciona en el entorno myvtex"
id: 1ZB56egPjPbTaUUnws5juK
status: PUBLISHED
createdAt: 2023-03-27T12:26:31.974Z
updatedAt: 2024-02-02T21:03:39.535Z
publishedAt: 2024-02-02T21:03:39.535Z
firstPublishedAt: 2023-03-27T12:26:32.649Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: locale-switcher-no-funciona-en-el-entorno-myvtex
locale: es
kiStatus: Backlog
internalReference: 778306
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Locale Switcher no funciona en el entorno myvtex sin configurar explícitamente el espacio de trabajo/entorno, pero no hay impacto en el sitio web. Este comportamiento afecta a la navegación sólo en myvtex y gestión de contenidos para diferentes idiomas.


##

## Simulación



- Acceda al Editor de Sitios o al Front-End en el entorno myvtex sin poner el espacio de trabajo (por ejemplo: accountName.myvtex.com/admin/cms/site-editor);
- Seleccione un sitio web con multi-idioma;
- Cambie entre los idiomas;
- Verá que no habrá cambios en el idioma.



## Workaround


Utilice el espacio de trabajo "maestro" para cambiar el contenido de los distintos idiomas y valídelo mientras navega (por ejemplo: maestro--nombre_de_cuenta.myvtex.com/admin/cms/editor_sitio)



