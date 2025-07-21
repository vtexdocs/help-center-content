---
title: "El escáner de código de barras de Sales App sólo acepta EAN-13"
id: 5fVgFNzYDoROFbVUyqEvcC
status: PUBLISHED
createdAt: 2025-04-15T14:42:10.413Z
updatedAt: 2025-04-15T14:42:33.580Z
publishedAt: 2025-04-15T14:42:33.580Z
firstPublishedAt: 2025-04-15T14:42:10.904Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: el-escaner-de-codigo-de-barras-de-sales-app-solo-acepta-ean13
locale: es
kiStatus: Backlog
internalReference: 1211334
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El escáner de código de barras de la aplicación de ventas sólo acepta EAN-13.

Si un producto tiene registrado un UPC-A (12 dígitos), el escáner de código de barras añadirá un 0 al código de barras, dando lugar a una búsqueda vacía.



## Simulación



- Acceda a la aplicación nativa Sales App;
- Utilice el lector de código de barras y lea un UPC-12;
- Se añade un cero a la izquierda y se muestra una búsqueda vacía.



## Workaround


Añada un cero a la izquierda al código de barras en el registro SKU.




