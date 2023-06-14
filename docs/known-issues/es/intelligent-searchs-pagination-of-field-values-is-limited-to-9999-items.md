---
title: 'La paginación de los valores de los campos de la Búsqueda Inteligente está limitada a 9.999 elementos'
id: 1AH9HOWWqOnENncdxIBszv
status: PUBLISHED
createdAt: 2022-03-21T17:42:26.464Z
updatedAt: 2022-11-25T21:57:37.901Z
publishedAt: 2022-11-25T21:57:37.901Z
firstPublishedAt: 2022-03-21T17:42:26.905Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: la-paginacion-de-los-valores-de-los-campos-de-la-busqueda-inteligente-esta-limitada-a-9999-elementos
kiStatus: Backlog
internalReference: 428486
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La Búsqueda Inteligente tiene un problema con la paginación de los valores. Esto hace que algunos valores no se muestren al seleccionarlos en un filtro de condición, como las condiciones de Reglas de comercialización, por ejemplo. Si el campo seleccionado contiene más de 9.999 valores, sólo se mostrarán los primeros 9.999 en el desplegable de vista previa.



## Simulación


Vaya a la página de creación de una nueva regla de comercialización:
https://{accountName}.myvtex.com/admin/search/custom-result/create/

En el caso siguiente, el campo "marca" tiene más de 9.999 entradas, por lo que al escribir el valor "JEIBAO" no aparece en el desplegable para ser seleccionado.

 ![](https://vtexhelp.zendesk.com/attachments/token/sNrA3WpRgNna0svXUmZ9zUriO/?name=inline-1946343279.png)

La consulta graphQL que carga esta lista en Admin sólo es capaz de obtener un máximo de 9.999 registros.

 ![](https://vtexhelp.zendesk.com/attachments/token/4p6FFv3vW1ZPFKuvV8dbkyCCj/?name=inline-564811771.png)



## Workaround


No hay ninguna solución disponible.

