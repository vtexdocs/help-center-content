---
title: "Los productos con variaciones de sku aprobadas en Skus Recibidos se están creando con skus duplicados en el Catálogo."
id: 2RqrBOeHDBZmfmqe6Rowl2
status: PUBLISHED
createdAt: 2023-08-29T15:50:44.042Z
updatedAt: 2023-08-29T15:50:44.976Z
publishedAt: 2023-08-29T15:50:44.976Z
firstPublishedAt: 2023-08-29T15:50:44.976Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: los-productos-con-variaciones-de-sku-aprobadas-en-skus-recibidos-se-estan-creando-con-skus-duplicados-en-el-catalogo
locale: es
kiStatus: Backlog
internalReference: 889676
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El vendedor puede enviar un producto con múltiples variaciones de sku.
En el módulo Skus Recibidos del marketplace estos skus aparecerán por separado para ser aprobados.
El vendedor puede aprobar manualmente estos skus.

El escenario que está ocurriendo es que algunos de los skus se están creando duplicados en el catálogo del marketplace debido a un fallo en la comunicación del catálogo.



## Simulación


Aprobar skus en el área pendiente de Skus Recibidos del mismo producto en un intervalo corto de tiempo.
Comprobar en el catálogo si algún sku se ha creado duplicado



## Workaround


Apruebe lentamente los skus del mismo producto para evitar errores en el catálogo.





