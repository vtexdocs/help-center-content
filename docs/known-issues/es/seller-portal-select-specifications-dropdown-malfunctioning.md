---
title: El desplegable de selección de especificaciones del portal del vendedor no funciona correctamente
id: 7DeU9mKh7gseN7svVPtDzb
status: PUBLISHED
createdAt: 2022-12-06T14:27:57.920Z
updatedAt: 2023-05-09T19:08:09.706Z
publishedAt: 2023-05-09T19:08:09.706Z
firstPublishedAt: 2022-12-06T14:27:58.644Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-desplegable-de-seleccion-de-especificaciones-del-portal-del-vendedor-no-funciona-correctamente
kiStatus: Backlog
internalReference: 711303
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, el cuadro de selección de especificación de producto de la página accountname.myvtex.com/admin/products/new/ tiene un comportamiento defectuoso cuando se intenta seleccionar un valor para una especificación de producto.

Cuando el usuario intenta seleccionar un valor, a veces se selecciona la entrada que aparece a continuación.

Por ejemplo, tiene 2 opciones, color y tamaño. Al hacer clic en el color, que, a veces, tiene el tamaño seleccionado en su lugar:

 ![](https://vtexhelp.zendesk.com/attachments/token/PpTFjmsH4i975D0uQSLD7WmkO/?name=image.png)


##

## Simulación


Este es un caso intermitente, por lo tanto, es bastante difícil de replicar consistentemente.

De todos modos, para hacerlo, debes ir a la página mencionada y elegir la función (+) añadir variaciones.

Al hacerlo, aparecerá una ventana emergente con el menú desplegable dado que tiene el comportamiento defectuoso. Al intentar seleccionar un valor puede que en su lugar aparezcan los datos que se muestran a continuación.



## Workaround


Utilizar las APIs o incluso simplemente cambiar el idioma del admin dará resultados positivos.





