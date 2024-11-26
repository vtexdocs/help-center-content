---
title: "Error de cálculo de la sección 'total' del informe de indexación del catálogo"
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
slugEN: catalog-indexing-report-total-section-calculation-error
locale: es
kiStatus: No Fix
internalReference: 499450
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, en el informe de indexación del catálogo (RelatorioIndexacao.aspx), la sección "Total indexado" está considerando todos los productos del catálogo al llegar al 100% de la métrica, no restando los productos no indexados si es necesario.







## Simulación


1) Compruebe el total de productos indexados en la sección "Total" de esta interfaz de usuario

 ![](https://vtexhelp.zendesk.com/attachments/token/1Bn26h96IQunum61KFvIec2TB/?name=inline-1410438497.png)

2) A continuación, compruebe los "Productos no indexados".

 ![](https://vtexhelp.zendesk.com/attachments/token/5VmAoYMUYecyDIRqWpReeRNvT/?name=inline-1288887889.png)

3) A continuación, vaya a la sección del catálogo "Produtos", en la que verá cuántos productos totales tiene su tienda:

 ![](https://vtexhelp.zendesk.com/attachments/token/YNLJSiUV48sxbMRg4R3y5a084/?name=inline-1690458606.png)

Las matemáticas no cuadran, la sección "Total" debería ser 71 en el ejemplo anterior, ya que hay 2 productos que tampoco están indexados.








## Workaround


n/a

