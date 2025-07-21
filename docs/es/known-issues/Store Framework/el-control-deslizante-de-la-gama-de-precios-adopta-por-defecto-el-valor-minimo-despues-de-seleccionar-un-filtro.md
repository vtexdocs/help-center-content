---
title: "El control deslizante de la gama de precios adopta por defecto el valor mínimo después de seleccionar un filtro."
id: 15ABXMTT9cqieizxYWqC2V
status: PUBLISHED
createdAt: 2023-11-08T13:34:50.960Z
updatedAt: 2023-11-08T13:34:51.373Z
publishedAt: 2023-11-08T13:34:51.373Z
firstPublishedAt: 2023-11-08T13:34:51.373Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-control-deslizante-de-la-gama-de-precios-adopta-por-defecto-el-valor-minimo-despues-de-seleccionar-un-filtro
locale: es
kiStatus: Backlog
internalReference: 843442
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Este es un rango de precios, es un deslizador y tiene dos selectores (marcadores), uno para el mínimo y otro para el máximo para saber dónde posicionarse en el deslizador.
Al aplicarle un filtro de marca el selector no moverá su valor mínimo a los valores mínimos de la marca, mantendrá el valor mínimo por defecto y el marcador aparecerá fuera del rango.


##

## Simulación


1- Acceda a la página de una Categoría y observe el filtro de rango de precios y sus valores min y max.
2- Selecciona un filtro marcándolo a la izquierda (category2/3/4)
3- Con el filtro aplicado, observa que el deslizador de rango de precios mantendrá el valor mínimo como antes y estará fuera del rango del deslizador.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/el-control-deslizante-de-la-gama-de-precios-adopta-por-defecto-el-valor-minimo-despues-de-seleccionar-un-filtro_1.png)

Filtro con el comportamiento descrito para el valor min.


##

## Workaround


No hay ninguna solución disponible.





