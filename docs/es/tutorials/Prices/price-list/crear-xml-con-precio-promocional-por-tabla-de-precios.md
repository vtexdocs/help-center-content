---
title: 'Crear XML con precio promocional por tabla de precios '
id: tutorials_312
status: PUBLISHED
createdAt: 2017-04-27T22:09:13.953Z
updatedAt: 2023-03-30T15:53:05.498Z
publishedAt: 2023-03-30T15:53:05.498Z
firstPublishedAt: 2017-04-27T23:03:14.297Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-an-xml-with-promotional-price-using-a-price-table
legacySlug: crear-xml-con-precio-promocional-por-tabla-de-precios
locale: es
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Comprenda mejor la funcionalidad de XML en VTEX en el artículo [¿Cómo funciona la actualización del XML?](https://help.vtex.com/es/tutorial/como-se-hace-la-actualizacion-del-xml--tutorials_297#).

Para aplicar un precio diferenciado a los productos por XML, es necesario asociar una tabla de precios de SKU. Para esto, realice los siguientes pasos:

  1. En el Admin VTEX, accede a *Configuración de la tienda > Canales > Integración XML*, o escribe *Integración XML* en la barra de búsqueda en la parte superior de la página.
  2. Busque el archivo XML que se modificará y haga clic en `Editar`. Si quiere crear uno nuevo, lea nuestro artículo [Configurar XML](https://help.vtex.com/es/tutorial/como-configurar-xml--tutorials_242).
  3. Aquí debe verificar si los campos relacionados con el precio del SKU (menor precio del producto, mayor precio del producto, precio original del SKU, precio actual del SKU y precio actual del SKU + tasas) se rellenaron. Al menos uno de los campos debe contener información para que la operación funcione correctamente.
  4. Rellene el campo __Tablas de precios__ con el nombre de la tabla de precios deseada. A continuación, haga clic en la casilla correspondiente al tag en la columna __Exhibe contenido__. La tabla de precios seleccionada debe tener registrados los precios fijos. De lo contrario, la configuración no se realizará.
![PT-tabela de precos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/price-list/crear-xml-con-precio-promocional-por-tabla-de-precios_1.png)
> ⚠️ Cuando se incluya la tabla de precios en el XML, se sobrescribirán todos los campos de precios.
  5. Haga clic en `Guardar`.

Así, la plataforma hará la asociación de los valores de la tabla de precios con los productos registrados en la colección del archivo XML. 

Luego de terminar el registro del XML y guardar los cambios, puede verificar la información cuando se actualicen digitando la URL de la siguiente forma:

`https://{dominio}.myvtex.com/XMLData/{nombre del archivo XML}.xml`

Ejemplo de XML actualizado:

![XML-exemplo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Prices/price-list/crear-xml-con-precio-promocional-por-tabla-de-precios_2.png)

