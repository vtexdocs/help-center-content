---
title: "Activar servicio al importar (SkuVincularValorServico.aspx) no funciona"
id: 1gM3bYz0IX4ozLrIkWIicb
status: PUBLISHED
createdAt: 2022-02-25T14:56:50.052Z
updatedAt: 2024-05-10T14:24:13.156Z
publishedAt: 2024-05-10T14:24:13.156Z
firstPublishedAt: 2022-02-25T14:56:50.569Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activar-servicio-al-importar-skuvincularvalorservicoaspx-no-funciona
locale: es
kiStatus: Backlog
internalReference: 339894
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, en la usabilidad de importación de SkuVincularValorServico.aspx, cuando se intenta cambiar los servicios previamente salidos de inactivos a activos, los valores no se cambian. La interfaz de usuario indica que se han cambiado los valores, pero en realidad no ocurre nada.

(Lo contrario no es cierto, el cambio de activo a inactivo funciona).


##

## Simulación


1) Ir a la UI https://account.myvtex.com/admin/Site/SkuVincularValorServico.aspx cambiando las filas de la hoja adjunta de 0 a 1 y viceversa:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/activar-servicio-al-importar-skuvincularvalorservicoaspx-no-funciona_1.png)

2) Comprueba los efectos finales en la SKU cuyos valores has cambiado:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/activar-servicio-al-importar-skuvincularvalorservicoaspx-no-funciona_2.png)

Podrá establecerlos como inactivos, pero no como activos. La interfaz de usuario de importación indica que se han realizado cambios:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/activar-servicio-al-importar-skuvincularvalorservicoaspx-no-funciona_3.png)

En realidad, no se ha modificado ningún valor en la base de datos de la cuenta en cuestión.



## Workaround


Usando la UI para hacer cambios de inactivo -->> activo y/o nuestro servicio APIs:
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-service




