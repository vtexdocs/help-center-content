---
title: 'Los pedidos de recogida no funcionan como se esperaba'
id: 3fp47LblCRqrevZwlEakgi
status: PUBLISHED
createdAt: 2022-01-12T14:03:31.662Z
updatedAt: 2023-05-12T14:37:10.378Z
publishedAt: 2023-05-12T14:37:10.378Z
firstPublishedAt: 2022-06-30T18:13:52.273Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: los-pedidos-de-recogida-no-funcionan-como-se-esperaba
kiStatus: Fixed
internalReference: 502409
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En Colecciones (Beta), deberíamos poder cambiar el orden de los productos dentro de una colección utilizando la función "Mover a posición":

https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

Sin embargo, esta característica falla intermitentemente y no funciona correctamente todo el tiempo.


##

## Simulación


- Ir a cualquier configuración de la colección admin: `.myvtex.com/admin/collections`
- Intente cambiar el orden de un Producto dentro de la colección;
- Espere a que el producto se reindexe automáticamente con el nuevo orden en la colección.




## Workaround


No hay solución en Colecciones (Beta), pero es posible establecer manualmente el orden de los productos en Colecciones creadas a través del CMS heredado (Portal) con algunas restricciones:
https://help.vtex.com/en/known-issues/manual-sorting-of-collections-doesnt-work-as-expected--aGTNVDT6LKKoWuSceQWs0





