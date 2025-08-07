---
title: "Selección inesperada de varios puntos de recogida para el mismo vendedor cuando no todos los artículos están disponibles a través de la misma opción."
id: 1ILqLtP5CgtO6fhqh1dAgm
status: PUBLISHED
createdAt: 2022-08-16T01:03:28.941Z
updatedAt: 2023-05-08T18:34:26.625Z
publishedAt: 2023-05-08T18:34:26.625Z
firstPublishedAt: 2022-08-16T01:03:29.934Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: seleccion-inesperada-de-varios-puntos-de-recogida-para-el-mismo-vendedor-cuando-no-todos-los-articulos-estan-disponibles-a-traves-de-la-misma-opcion
locale: es
kiStatus: Backlog
internalReference: 467702
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Los componentes del punto de recogida en el front-end de pago están preparados para gestionar una única opción por cada vendedor. Los artículos de diferentes vendedores habituales se gestionan por separado, pero si se trata de un vendedor de marca blanca, se considerarán en el mismo grupo.

Si no todos los artículos están disponibles bajo la misma opción de punto de recogida para el mismo vendedor, puede llevar a un estado incorrecto, que incluye no tratar correctamente los artículos de una opción seleccionada en un segundo momento o incluso no mostrar correctamente las opciones adicionales aplicadas a diferentes artículos en el orderForm, centrándose sólo en la primera opción de punto de recogida.

El escenario esperado es que cualquier opción previamente seleccionada sea eliminada para aplicar únicamente la última seleccionada por el usuario.


##

## Simulación




- tener un carrito con una dirección donde no hay opciones de recogida que cubran todos los artículos,
- interactuar con las diferentes opciones de recogida para ver combinaciones inesperadas



## Workaround


Actualmente, no existe ninguna solución para esta situación.




