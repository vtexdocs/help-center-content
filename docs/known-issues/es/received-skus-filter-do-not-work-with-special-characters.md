---
title: 'El filtro Skus recibidos no funciona con caracteres especiales'
id: 6aSErtF2Xv5RuKuIHUEEPg
status: PUBLISHED
createdAt: 2023-11-29T17:58:26.201Z
updatedAt: 2023-11-29T17:58:26.900Z
publishedAt: 2023-11-29T17:58:26.900Z
firstPublishedAt: 2023-11-29T17:58:26.900Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: el-filtro-skus-recibidos-no-funciona-con-caracteres-especiales
locale: es
kiStatus: Backlog
internalReference: 944533
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar filtrar los skus en el módulo de Skus Recibidos, el marketplace puede elegir filtrar por vendedor, categoría y/o marca.

Sin embargo, cuando se selecciona una marca que tiene caracteres especiales (como "&" o "+") el resultado es que no hay skus en ese filtro, lo que en realidad no es correcto.


##

## Simulación



1. Filtrar por una de las opciones del módulo Skus recibidos;
2. Seleccionar un valor con carácter especial;
3. Comprobar que el resultado es sin skus;
4. Ahora busque por el valor en la búsqueda y compruebe que efectivamente hay algún skus.



## Workaround


No hay solución para arreglar el filtro, pero utilizando la búsqueda podría traer un resultado cercano de los skus.





