---
title: 'Error de cálculo de la sección "total" del informe de indexación del catálogo'
id: 6TJXux104P2c0mruo5vlEn
status: PUBLISHED
createdAt: 2022-02-25T11:39:42.098Z
updatedAt: 2024-02-16T20:26:35.750Z
publishedAt: 2024-02-16T20:26:35.750Z
firstPublishedAt: 2022-02-25T11:39:42.485Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-de-calculo-de-la-seccion-total-del-informe-de-indexacion-del-catalogo
locale: es
kiStatus: No Fix
internalReference: 499450
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, en el informe de indexación del catálogo (RelatorioIndexacao.aspx), la sección "Total indexado" está considerando todos los productos del catálogo al llegar al 100% de la métrica, no restando los productos no indexados si es necesario.







## Simulación


1) Compruebe el total de productos indexados en la sección "Total" de esta interfaz de usuario

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/error-de-calculo-de-la-seccion-total-del-informe-de-indexacion-del-catalogo_1.png)

2) A continuación, compruebe los "Productos no indexados".

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/error-de-calculo-de-la-seccion-total-del-informe-de-indexacion-del-catalogo_2.png)

3) A continuación, vaya a la sección del catálogo "Produtos", en la que verá cuántos productos totales tiene su tienda:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/error-de-calculo-de-la-seccion-total-del-informe-de-indexacion-del-catalogo_3.png)

Las matemáticas no cuadran, la sección "Total" debería ser 71 en el ejemplo anterior, ya que hay 2 productos que tampoco están indexados.








## Workaround


n/a

