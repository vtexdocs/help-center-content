---
title: Error "¡no se pueden crear criterios de búsqueda! error: el filtro ya existe: "brandId"" al crear una promoción que excluye más de 1 marca.
id: 6s6cvYpImIBEH0SLqE3J2U
status: PUBLISHED
createdAt: 2022-09-22T15:53:15.001Z
updatedAt: 2022-11-25T22:11:53.363Z
publishedAt: 2022-11-25T22:11:53.363Z
firstPublishedAt: 2022-09-22T15:53:16.277Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: error-no-se-pueden-crear-criterios-de-busqueda-error-el-filtro-ya-existe-brandid-al-crear-una-promocion-que-excluye-mas-de-1-marca
kiStatus: Backlog
internalReference: 663698
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al crear una promoción, el cliente puede decidir a qué artículos se aplicará la promoción.

Una de las posibilidades es seleccionar los artículos por marca, incluyendo o excluyendo.

Al intentar excluir más de una marca aparece el siguiente error en la UI:
`¡No se pueden crear criterios de búsqueda! error: el filtro ya existe: "brandId"`

Al final la promoción se creará correctamente y se aplicará correctamente en los cartlinks, este mensaje de error es sólo un aviso de que la búsqueda en el catálogo no se está realizando como se esperaba.




## Simulación



1. Crea o introduce una promoción;
2. Ir al paso 2 de la promoción y tratar de excluir más de 1 marca;
3. Verifique que el mensaje de error aparezca.



## Workaround


Dado que este error no tiene efectos secundarios, excepto el visual mientras se guarda la promoción, no hay necesidad de una solución.

