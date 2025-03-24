---
title: 'Crear y eliminar un gran número de redirecciones rompe la página de redirecciones.'
id: 5uFuid4a5f7uiRVW9LdT5Q
status: PUBLISHED
createdAt: 2024-04-02T19:45:07.540Z
updatedAt: 2024-04-02T19:45:08.762Z
publishedAt: 2024-04-02T19:45:08.762Z
firstPublishedAt: 2024-04-02T19:45:08.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-and-deleting-a-large-number-of-redirects-breaks-the-redirects-page
locale: es
kiStatus: Backlog
internalReference: 1010392
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Tratar con una cantidad masiva de redirecciones puede romper la página de la interfaz de usuario. Si tiene muchas redirecciones o necesita borrar una gran cantidad de redirecciones esto puede llevar a un error en el que la página de la interfaz de usuario se carga para siempre y nunca devuelve la información de las redirecciones. Creemos que esto puede ocurrir porque cuando borramos una gran cantidad de redirecciones las primeras páginas de la consulta `listRedirects` están en blanco y la interfaz de usuario buscará estas primeras páginas para cargar las primeras redirecciones y nunca las encontrará.

Esto también puede afectar a la importación/exportación CLI.


##

## Simulación



- Crear una gran cantidad de redirecciones
- Pruebe a borrarlas (a través de la interfaz de usuario o utilizando el rewriter)
- Al volver a la página de la interfaz de usuario, las redirecciones no se cargarán.



## Workaround


N/A





