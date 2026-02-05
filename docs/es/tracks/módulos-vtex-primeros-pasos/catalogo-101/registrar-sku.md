---
title: 'Registrar SKU'
id: 17PxekVPmVYI4c3OCQ0ddJ
status: PUBLISHED
createdAt: 2019-05-20T13:57:45.289Z
updatedAt: 2025-06-13T18:27:58.802Z
publishedAt: 2025-06-13T18:27:58.802Z
firstPublishedAt: 2019-06-25T15:06:05.521Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-skus
locale: es
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalogo-101
order: 10
---

Hay diferentes formas de registrar SKUs: 

- Admin VTEX
- Importación de plantilla
- API

> ℹ️ Si deseas importar SKUs mediante [integraciones backend](/es/docs/tracks/integraciones-de-backend) con un ERP, consulta la guía [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

## Admin VTEX

Para saber cómo registrar un nuevo producto al catálogo de la tienda, consulta el artículo [Agregar o editar SKUs](/es/docs/tutorials/agregar-o-editar-skus).

## Plantilla

Para registrar sus SKUs por plantilla es necesario primero exportar la plantilla estándar VTEX.

### Exportar plantilla estándar

Para esto, realice el siguiente procedimiento:

1. Haga clic en **Catálogo**.
2. Haga clic en **Importación y exportación**.
3. En la primera pestaña __Todos los productos__, haga clic en **Exportación / Importación**.
4. En __Exportar__, en el recuadro verde, agregue el e-mail deseado para enviar la plantilla. A continuación, haga clic en el rectángulo azul **Exportar a Excel**
5. Al recibir la plantilla, rellene las líneas con los datos del SKU. Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre [rellenar campos de la plantilla de importación de productos y SKUs](/es/docs/tutorials/rellenar-campos-de-la-planilla-de-importacion).

### Importar plantilla

Después de rellenar los datos de la plantilla, siga el procedimiento para importar sus SKUs:

1. Haga clic en **Catálogo**.
2. Haga clic en **Importación y exportación**.
3. En la primera pestaña "Productos y SKUs", haga clic en **Exportación / Importación**.
4. Haga clic en la pestaña **Importar**.
5. En **Choose file**, en el recuadro azul seleccione la plantilla rellenada en el paso anterior.
6. Haga clic en `Importar`.

### Añadir imágenes por plantilla

Después del registro de los SKUs es necesario agregar las imágenes para que se activen. Para esto, realice el siguiente procedimiento:

1. Haga clic en **Catálogo**.
2. Haga clic en **Importación y exportación**.
3. Haga clic en la pestaña **Importación de imágenes**.
4. Haga clic en **aquí** para descargar la plantilla modelo. La plantilla estará en el formato que el sistema acepta, evitando problemas en la importación.
5. Al recibir la plantilla por e-mail, rellene los campos. Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre [importar imágenes por plantilla](/es/docs/tutorials/importando-imagenes-por-plantilla).
6. Después de rellenar la plantilla, haga clic en **Seleccionar archivo**.
7. Seleccione el archivo deseado y haga clic en __Abrir__.
8. Haga clic en **Importar**.

## API

Para registrar un SKU mediante la API, utiliza el endpoint [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit).

