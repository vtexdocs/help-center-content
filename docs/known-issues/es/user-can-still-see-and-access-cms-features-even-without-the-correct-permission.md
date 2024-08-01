---
title: 'El usuario puede ver y acceder a las funciones del CMS incluso sin el permiso correcto'
id: n2BmrCyzXD04sysczRuyt
status: PUBLISHED
createdAt: 2024-06-07T12:22:10.494Z
updatedAt: 2024-06-07T12:22:11.466Z
publishedAt: 2024-06-07T12:22:11.466Z
firstPublishedAt: 2024-06-07T12:22:11.466Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: el-usuario-puede-ver-y-acceder-a-las-funciones-del-cms-incluso-sin-el-permiso-correcto
locale: es
kiStatus: Backlog
internalReference: 1046263
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si el usuario no tiene ninguno de los permisos de CMS el usuario no debería ser capaz de acceder o incluso ver los módulos de CMS. Pero esto no sucede.


##

## Simulación


Intente acceder a los módulos CMS usando un usuario que no tenga los siguientes permisos LM:

      CMS:

- Ver menú CMS en la barra superior
- Configuración

GraphQL:
- API GraphQL de CMS

El usuario podrá seguir accediendo y viendo los recursos (pero no editarlos).



## Workaround


N/A





