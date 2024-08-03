---
title: 'El texto de la InfoCard no se traduce con el editor del sitio.'
id: 5HYTZvxkPoTZltMkZcVfVO
status: PUBLISHED
createdAt: 2024-06-13T18:47:41.470Z
updatedAt: 2024-07-03T13:58:33.037Z
publishedAt: 2024-07-03T13:58:33.037Z
firstPublishedAt: 2024-06-13T18:47:42.396Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-texto-de-la-infocard-no-se-traduce-con-el-editor-del-sitio
locale: es
kiStatus: Backlog
internalReference: 1049491
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar traducir un texto utilizando el editor del sitio para el componente de la tarjeta de información, los cambios no se aplicarán en el frente de la tienda.


##

## Simulación



1. Abrir el editor del sitio
2. Seleccione el componente tarjeta de información
3. Cambiar la etiqueta de texto
4. 4. Guardar los cambios
5. Visualice la página y el texto será el mismo independientemente de la configuración regional seleccionada.



## Workaround


Asegúrese de que el encabezado está vacío tanto en el código de la tienda como en el editor del sitio.
Si no está seguro de que esté vacío en el editor del sitio, puede restablecer el contenido pasando por la versión del editor del sitio > restablecer.

Siga la documentación aquí y los contextos aquí para establecer la etiqueta como desee en su lugar.

Si esto todavía no resuelve usted puede un texto enriquecido y un componente de imagen por separado dentro de la tarjeta de información.




