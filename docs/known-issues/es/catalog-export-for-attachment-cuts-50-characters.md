---
title: 'Exportación de catálogos para recortes de anexos > 50 caracteres'
id: 7hX23y19wmMNPTUgbhh2WX
status: PUBLISHED
createdAt: 2023-12-14T16:46:58.819Z
updatedAt: 2023-12-14T16:46:59.522Z
publishedAt: 2023-12-14T16:46:59.522Z
firstPublishedAt: 2023-12-14T16:46:59.522Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: exportacion-de-catalogos-para-recortes-de-anexos-50-caracteres
locale: es
kiStatus: Backlog
internalReference: 953161
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al importar datos de adjuntos en el módulo catálogo, si dicho adjunto tiene más de 50 caracteres, se corta la cadena, lo que provoca que no se actualicen estos datos.


##

## Simulación


1 - crear un adjunto con un nombre de más de 50 caracteres, por ejemplo, "Este es un nombre de adjunto muy largo que se crea para probar una incidencia".

2 - asociarlo a un producto

3 - exportar estos datos utilizando la interfaz de usuario /admin/Site/Relatorio_Skus.aspx

4 - Compruebe la columna relacionada con esto y se mostrará como "`Este es un nombre de archivo adjunto muy largo que se crea`" (exactamente a 50 caracteres).

5 - tendrá que ajustar manualmente esta información si desea importarlo correctamente



## Workaround


Actualice los archivos adjuntos a través de la API, la interfaz de usuario o cambie manualmente su cadena incorrecta en la hoja.





