---
title: 'Los cambios realizados en el Editor de Sitios se guardan pero no se reflejan en la página'
id: 2peoCL4YJTTike5XPwrxWT
status: PUBLISHED
createdAt: 2023-04-06T18:58:03.576Z
updatedAt: 2023-04-06T18:58:03.993Z
publishedAt: 2023-04-06T18:58:03.993Z
firstPublishedAt: 2023-04-06T18:58:03.993Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: los-cambios-realizados-en-el-editor-de-sitios-se-guardan-pero-no-se-reflejan-en-la-pagina
locale: es
kiStatus: Backlog
internalReference: 786145
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando creas una nueva página en Pages y luego cambias su ruta a algo diferente, el routeId no cambia. Así que cuando cree otra página con la misma ruta que la primera, el routeId seguirá siendo el mismo. Y entonces el editor del sitio tendrá problemas para guardar el contenido de estas dos páginas debido al conflicto en sus rutas.


##

## Simulación


1 - Crear una nueva página
2 - Cambiar la ruta de esta página
3 - Cree otra página con la misma ruta que la primera (la ruta original, antes de cambiarla)
4 - Trate de hacer cambios en esas páginas en el editor del sitio



## Workaround


Borre la ruta antigua e intente no volver a cambiarla. Si necesita cambiarla, lo mejor es borrarla y crear una nueva.





