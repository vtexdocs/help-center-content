---
title: 'SkuServicoForm.aspx no lista las tablas de valores al principio para un tipo de valor'
id: 2QrjRVvJXiWmRXTYf8DrMK
status: PUBLISHED
createdAt: 2022-06-28T16:55:32.216Z
updatedAt: 2024-02-16T20:27:50.659Z
publishedAt: 2024-02-16T20:27:50.659Z
firstPublishedAt: 2022-06-28T16:55:32.529Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: skuservicoformaspx-not-listing-value-tables-at-first-for-a-value-type
locale: es
kiStatus: No Fix
internalReference: 335819
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

Al asociar un servicio para una SKU en nuestro catálogo, para una tienda que tiene múltiples tipos de servicio y valores de servicio (campo Tipo de valor), al principio, cuando un usuario entra en la UI, la lista de opciones para un determinado "Tipo de servicio" actualmente sólo lista las opciones asociadas en la tabla Valor del primer tipo de servicio seleccionado.

Por ejemplo, en la siguiente imagen hay 3 tipos de servicio: "Garantía", "Seguros" y "Plan Tigo":

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_1.png)

Después de seleccionar la opción en este campo, sin importar cuál sea, el campo "Tabla de Valores" sólo muestra los valores del servicio asociados a la primera opción mostrada en el listado de "Tipo de Servicio":

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_2.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_3.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_4.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_5.png)

El usuario debe seleccionar primero el tipo de servicio y guardar la configuración incluso con una tabla de valores incorrecta y luego al volver a visitarla, se volverá a listar el primer valor, pero esta vez, como el primer valor será el previamente seleccionado, se listarán las opciones deseadas:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_6.png)

Esta es la selección que actualmente no funciona:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_7.png)

Aquí: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx#L88
atrás: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L186
el problema es probablemente aquí: https://github.com/vtex/vcs.commerce/blob/657c58015196fd3422b1972ed0b82b144049e238/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L387

## Simulación


1) En el UI SkuServicoTipo.aspx crear 2+ tipos de servicio
2) Crear, en la UI SkuServicoValor.aspx 2+ valores de servicio y asociar cada uno a un tipo de servicio diferente.
3) Vaya a la UI SkuServicoForm.aspx?IdSku= para cualquier SKU de la tienda.
4) Seleccione un tipo de servicio en este listado que no sea el primero de la lista:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_8.png)
5) Compruebe las tablas de valores, los valores asociados no serán los correctos, sino el listado del primer valor, que en nuestro ejemplo anterior es "Serviço 1".


## Workaround


Guardar la tabla de valores incorrecta para un tipo de servicio en la UI, volver a visitarla después y cambiarla por la tabla de valores listada deseada.

Por ejemplo, en el ejemplo de la sección Resumen de este KI, hemos seleccionado "Seguros" en el tipo de servicio e inicialmente, las tablas de valores listadas eran las de "Garantía".

Si lo guardo como 'seguros', incluso con un valor incorrecto en la Tabla de Valores:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_9.png)

Después de guardar y volver a visitar esta interfaz de usuario, las tablas de valores correctas para 'seguros' deberían aparecer en la lista y ser seleccionables:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/skuservicoformaspx-no-lista-las-tablas-de-valores-al-principio-para-un-tipo-de-valor_10.png)

