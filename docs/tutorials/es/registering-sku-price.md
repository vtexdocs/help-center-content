---
title: 'Registrar precio de SKU'
id: tutorials_230
status: DRAFT
createdAt: 2017-04-27T22:13:28.715Z
updatedAt: 2021-02-03T16:31:00.230Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:04.007Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: registrando-precios-de-sku
legacySlug: registrando-precios-de-sku
subcategory: 4id9W3RDyw02CasOm2C2iy
---

La funcionalidad de la plataforma que permite el registro o cambio de precios de un SKU es “Valores de Tabla de SKUs”. En ella se puede registrar el precio de cada SKU manualmente a través del admin, masivamente a través de la importación de planilla de Excel o por API. 

El proceso manual es el más indicado para cuando el operador de la tienda desea cambiar el precio de pocos SKUs, por ser más rápido y práctico el cambio en poca cantidad. Los demás procesos se deben tener en cuenta para la alteración de cantidad de SKUs de una vez de con una economía de tiempos, ya que el proceso manual demandaría mucho trabajo. Siga los pasos debajo para cada uno de los procesos.

## Registro o alteración manual

![](//images.contentful.com/alneenqid6w5/62eMKlDZ04As4ey46yiOeK/2d689eb25d9945a532d4447ba770649f/Tabela_de_Valores.gif)

### Registrar un valor nuevo

1. Acceda al módulo de __Catalog__.
2. Haga click en el botón “Registro de Productos”.
3. Luego en “Produtos y SKUs” y luego en “Importar/Exportar valores de tablas de Skus”.
4. Haga click en el botón “Nuevo Valor de Tabla”.
5. Complete el campo “Sku” con el ID del SKU que desea registrar precio.
6. Complete los demás campos (de acuerdo con las explicaciones debajo) y guarde.

### Alterar un registro existente

1. Entre al módulo de Catalog;
2. Haga click en el botón “Registro de Productos”;
3. Luego en “Produtos y SKUs” y luego en “Importar/Exportar valores de tablas de Skus”;
4. Haga click en “Filtrar resultados o hacer una búsqueda”;
5. En el campo “Sku” digite el Id del SKU que desea alterar el precio y haga click en buscar;
6. Haga click en el botón alterar;
7. Altere el campo que desea actualizar y guarde.

### Campos disponibles para registro o alteración manual

- **SKU:** Id del SKU. En el caso del registro, es un campo de registro obligatorio, pero en el caso de alteración es un campo de solo lectura.
- **Parceiro (utm_source): Opción de parámetro de URL que se utilizará en el site para que que se aplique el precio**.
- **Campaña (utm_campaign): Opción de parámetro de URL que se utilizará en el site para que que se aplique el precio**.
- **Campaña interna (utmi_cp):** Opción de parámetro de URL que se utilizará en el site para que que se aplique el precio.
- **Valor De:** Precio de lista del SKU que aparecerá en el sitio como “precio de”.
- **Valor:** Precio de venta del SKU que aparecerá en el site como “precio por”. Si el "precio de" tiene el mismo valor que el "precio por", se mostrará en el sitio el valor del "precio por". Es sobre este valor que se aplican las promociones.
- **Fecha inicial:** Inicio de vigencia del precio. Antes de esta fecha el SKU no estará disponible para la venta.
- **Fecha final:** fin de vigencia del precio. Después de esta fecha el SKU no estará disponible para la venta.
- **Política Comercial:** Política que hará que el precio se aplique, de acuerdo al registro en Catalog -> Marketplace -> Política Comercial.
- **Seller:** Define el seller que es dueño del producto. Normalmente usado en casos de tiendas que trabajan como marketplace (vendiendo productos de otras tiendas).
_Si usted hace click en el valor “Nuevo Valor de Tabla” luego de filtrar un SKU, este será un nuevo valor registrado en la tabla del SKU filtrado. Se debe tener atención en este tipo de acciones para evitar precios duplicados con las mismas condiciones (utm, validez, política comercial o seller), y que impactará negativamente en la indexación de ese SKU._

## Registro o alteración vía importación de planilla de Excel

![](//images.contentful.com/alneenqid6w5/5Pbm0WFO12QmEwW88OM2iU/453748487c805f0ef7bd20887e454670/Altera__o_de_pre_o_Importa__o.gif)

### Para registrar nuevos precios

1. Acceda al módulo de __Catalog__.
2. Haga click en el botón “Registro de productos”.
3. Luego en “Productos y SKUs” e inmediatamente en “Importar/Exportar valores de tablas de Skus”.
4. Haga click en “Exportar / Importar Valores” y luego en “Exportar”.
5. Haga click en el botón “Clique aqui”, para exportar la planilla de ejemplo. Este paso asegura que utilice una planilla que el sistema acepará.
6. Complete las columnas de acuerdo a las explicaciones debajo.
7. Guarde el archivo en su computador como .xls (Excel 97-2003 Workbook).
8. Vuelva al admin, y haga click en importar.
9. Seleccione el archivo guardado.
10. Complete el e-mail para recibir las notificaciones sobre la importación.
11. Haga click en importar. El pedido será procesado internamente por el sistema. Posteriormente se notificará la finalización del proceso e través del mail registrado.

### Para alterar precios ya registrados

1. Acceda al módulo de __Catalog__;
2. Haga click en el botón “Registro de productos”;
3. Luego en “Produtos y SKUs” y posteriormente en “Importar/Exportar valores de tablas de Skus”;
4. Haga click en “Exportar / Importar Valores” y luego en “Exportar”;
5. Complete el campo “E-mail para notificación”
6. Haga click en el botón “Exportar en Excel”
7. El pedido será procesado internamente por el sistema. Posteriormente se enviará la planilla al mail registrado.

### Campos de la planilla del Excel para importación

![](//images.contentful.com/alneenqid6w5/1wTiiJMsUcUGMoI6GGWsOw/b31f627d1a8d642532d475fd72e23ff6/Como_cadastrar_preco_SKU_2.jpg)

- **StockKeepingUnitId: **Id del SKU que desea registrar o alterar el precio;
- **Source: **valor de utm\_source;
- **Price: **precio de venta del SKU. en el sitio aparecerá en “precio por”;
- **Id: **Id del precio. Si este campo se deja en blanco, será registrado un nuevo precio. En el caso de que haya venido completado previamente en la exportación, no altere este campo.
- **StoreId**: Id de la política comercial donde el precio será aplicado. De acuerdo al Id de registro en el módulo Catalog &gt; Marketplace &gt; Política Comercial. Para registrar más de una, separe con comas (Ej.: 1,2,3);
- Medium (Desconsiderar): Este campo ya no es utilizado, no requiere completar;
- __Campaign__: valor de utm\_campaign;
- __InternalCampaign__: valor de utmi\_cp;
- __DateFrom__: fecha de inicio de vigencia del precio. El SKU no estará disponible antes de esa fecha;
- __DateTo__: fecha de fin de vigencia del precio. El SKU no estará disponible después de esta fecha;
- __ListPrice__: precio de lista. Aparecerá en el site como “precio de”;
- __RefId (No cambiable)__: Id de referencia del SKU, de acuerdo con el registro del SKU. En el caso de que el valor haya venido en la exportación, no lo modifique;
- __Ean13Default (No cambiable)__: EAN del SKU, conforme al registro del SKU. En el caso de que el valor haya venido en la exportación, no lo modifique;
- __BrandName (No cambiable)__: nombre de la marca del produto, de acuerdo con el registro del SKU. En el caso de que el valor haya venido en la exportación, no lo modifique;
- __StockKeepingUnitName (No cambiable)__: nombre del SKU, de acuerdo con el registro del SKU. En el caso de que el valor haya venido en la exportación, no lo modifique;
- __SellerId__: Id del seller dueño del SKU. Normalmente usado en casos de tiendas que trabajan como marketplace (vendiendo productos de otras tiendas).
_La planilla se debe subir con hasta 200 líneas por vez. Este procedimiento agilizará el procesamiento y evitará errores debido a la demora de procesamiento del archivo._
