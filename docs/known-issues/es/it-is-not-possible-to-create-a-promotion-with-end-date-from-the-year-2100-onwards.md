---
title: No es posible crear una promoción con fecha de finalización a partir del año 2100
id: hYQQFkOsEMqmg5DMzBAhM
status: DRAFT
createdAt: 2023-05-29T21:43:04.471Z
updatedAt: 2023-05-29T21:43:04.471Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: no-es-posible-crear-una-promocion-con-fecha-de-finalizacion-a-partir-del-ano-2100
kiStatus: Backlog
internalReference: 833957
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al crear una promoción, si se selecciona una fecha de finalización posterior a 2100, la interfaz de usuario(UI) entenderá que la fecha de finalización es menor que la fecha de inicio y no será posible guardar la promoción aunque el resto de campos estén correctamente cumplimentados.

Este problema no ocurre cuando el idioma de administración seleccionado es el portugués.


##

## Simulación



1-Acceda al módulo de Promociones;
2-Haga clic en "Crear Promoción" y seleccione uno de los tipos de promociones;
3-Seleccione cualquier fecha de finalización a partir del año 2100 (la interfaz de usuario mostrará el mensaje "Atención: La fecha de finalización no puede ser anterior a la fecha de inicio");
4-Rellene los demás campos obligatorios;
5-Intente guardar la promoción (la interfaz de usuario mostrará el error "Error - The beginDate must be smaller than the endDate")




## Workaround


Si es posible, seleccione como fecha final cualquier año anterior a 2100, como por ejemplo 2099.





 por ejemplo 2099.





