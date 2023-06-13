---
title: Botón de guardar desactivado al modificar los sinónimos de búsqueda importados
id: 1nb1JboRv5YuLyAT50YcYx
status: PUBLISHED
createdAt: 2022-04-27T14:50:02.276Z
updatedAt: 2022-11-25T21:57:47.416Z
publishedAt: 2022-11-25T21:57:47.416Z
firstPublishedAt: 2022-04-27T14:50:02.697Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: boton-de-guardar-desactivado-al-modificar-los-sinonimos-de-busqueda-importados
kiStatus: Backlog
internalReference: 508893
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar hacer cualquier cambio en una configuración de sinónimos que fue importada previamente por un archivo csv, el botón de guardar siempre se desactiva, sin importar el cambio:

 ![](https://vtexhelp.zendesk.com/attachments/token/brdXbHb75jSVJae7gJcCY8QVH/?name=inline1786590037.png)

Esto sucede porque al importar un archivo, la información de la configuración regional no se rellena automáticamente, como en el ejemplo siguiente:

 ![](https://vtexhelp.zendesk.com/attachments/token/2CvsG56Jprt18bNjvIU8Mt07m/?name=inline-2007024263.png)



## Simulación


Importar un archivo csv que contenga un sinónimo, intentar modificar cualquier información del sinónimo cargado en admin y ver que no se permite guardar.



## Workaround


Eliminar el sinónimo importado y crear el mismo manualmente.

