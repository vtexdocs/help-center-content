---
title: "El texto del botón Añadir al carro no se traduce con el editor del sitio."
id: 7rA62h80a1LpDWjgd3SImp
status: PUBLISHED
createdAt: 2024-05-02T17:33:41.019Z
updatedAt: 2024-07-03T18:28:56.642Z
publishedAt: 2024-07-03T18:28:56.642Z
firstPublishedAt: 2024-05-02T17:33:42.188Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-texto-del-boton-anadir-al-carro-no-se-traduce-con-el-editor-del-sitio
locale: es
kiStatus: Backlog
internalReference: 1026103
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar traducir un texto utilizando el editor del sitio para el botón Añadir al carro, los cambios no se aplicarán en el frente de la tienda.


##

## Simulación



1. Abrir el editor del sitio
2. Seleccione el botón Añadir a la cesta
3. Cambie la etiqueta de texto del botón por la que desee
4. Guardar cambios
5. Visualice la página y el texto será el mismo independientemente de la configuración regional seleccionada.



## Workaround


Asegúrese de que iconLabel está vacío tanto en el código de la tienda como en el editor del sitio.
Si no está seguro de si está vacío en el editor del sitio, puede restablecer el contenido pasando por la versión del editor del sitio > restablecer.

Siga la documentación aquí y los contextos aquí para establecer la etiqueta como desee en su lugar.




