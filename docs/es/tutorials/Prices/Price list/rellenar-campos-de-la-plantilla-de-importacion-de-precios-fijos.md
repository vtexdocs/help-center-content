---
title: 'Rellenar campos de la plantilla de importación de precios fijos'
id: 50RFoH3ruV97FJgeBUCURh
status: PUBLISHED
createdAt: 2019-07-10T13:38:59.441Z
updatedAt: 2021-10-05T17:30:36.162Z
publishedAt: 2021-10-05T17:30:36.162Z
firstPublishedAt: 2019-07-15T13:22:32.402Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: filling-out-an-import-spreadsheets-fixed-price-fields
locale: es
legacySlug: rellenar-campos-de-la-plantilla-de-importacion-de-precios-fijos
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Para comprender mejor el significado de cada campo de la plantilla de registro de precio fijo, vea la descripción completa de los ítems.

![tabela.preço.fixo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/Price list/rellenar-campos-de-la-plantilla-de-importacion-de-precios-fijos_1.png)

- **SKU ID:** el ID del SKU al que quiere añadir el precio fijo.
- **Trade Policy:** el nombre o el ID de la política comercial a la que se aplicará el precio fijo.
- **Price:** el valor del precio fijo.
- **List Price:** el precio de venta sugerido para el SKU.
- **Min Quantity:** la cantidad mínima del SKU para que se aplique el precio fijo.
- **Date From:** la fecha y la hora de inicio, en formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), de la programación del precio fijo. 
- **Date To:** la fecha y la hora de término, en formato [RFC3339](https://www.ietf.org/rfc/rfc3339.txt), de la programación del precio fijo. 

Los siguientes campos son opcionales en la plantilla, se exportan solo para exhibición y para facilitar la identificación de un SKU. Para visualizar estos campos en la plantilla, debe seleccionar la opción **Incluir metadatos en las tablas exportadas** en la exportación.

- **SKU Name (View Only):** nombre del SKU conforme registrado.
- **Product ID (View Only):** ID del producto conforme registro del catálogo.
- **Product Name (View Only):** el nombre del producto al cual el SKU está asociado.
- **Ref ID (View Only):** código de referencia único utilizado para facilitar la organización del catálogo de productos. Este id generalmente es creado por los sistemas internos de la tienda.
- **EAN (View Only):** código de identificación único del SKU (código de barras).

>⚠️ Plantillas de precios utilizadas para importación tienen un límite de tamaño de 1 MB. Si su plantilla actual excede este límite, le recomendamos dividirla en varios archivos, **asegurándose de que los precios que se refieren al mismo SKU se mantengan juntos en la misma plantilla**.
