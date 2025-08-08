---
title: 'Alterar precio de SKU'
id: tutorials_95
status: PUBLISHED
createdAt: 2017-04-27T22:19:48.759Z
updatedAt: 2024-01-05T17:59:41.793Z
publishedAt: 2024-01-05T17:59:41.793Z
firstPublishedAt: 2017-04-27T23:00:42.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: sku-price-change
legacySlug: alteracion-de-precio-de-sku
locale: es
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

La plataforma dispone de tres posibilidades para actualización de precio, siendo: cada ítem manualmente por el dmin., vía importación de plantilla y vía integración con el ERP. Usted verá en ese artículo cómo hacer cada una de estas formas de alterar la referida información en el sistema, pero, antes de alterar utilizando cualquier una de las opciones mencionadas, es importante fijarse en la regla de alteración de precio.

## Regla para alteración de precio

Para alterar el precio en su tienda de forma segura, la plataforma impide que el precio tenga un aumento de más del 70% o un descenso mayor que el 30%. O sea, si tengo un producto de R$ 100,00, lo máximo que consigo aumentar ese precio es para R$ 170,00 y el menor valor para el cual consigo reducirlo es para R$ 70,00. Se desarrolló esa traba para evitar errores humanos en la digitación de los precios, en el momento de la alteración a través de cualquier herramienta que se utilice.

Esta traba ha sido desarrollada para evitar errores humanos en la digitación de los precios, en el momento del cambio a través de cualquier herramienta que se utilice.

Supongamos que tenga un producto cuyo precio sea R$ 10,00 y necesita actualizar para R$ 11,00. Si la traba no existiese y por un error de digitación, actualizase para R$ 110,00. En la mejor de las hipótesis, usted pararía de vender ese ítem mientras no identificase el error y corrigiese el problema. En la peor de las hipótesis, perdería la confianza del cliente y podría ser procesado por la práctica de un precio muy superior al promedio de mercado.

El objeto de la traba para disminución de precio es evitar perjuicio, pues el cliente podría comprar sin problema el producto con el precio equivocado y, dependiendo de cuántas ventas ocurriesen con el valor equivocado, podría hasta quebrar la tienda.

## Actualización manual de cada ítem por el Admin.

Usualmente tiene lugar esa actualización cuando necesita hacerse un rápido ajuste en el precio del SKU y, como se trata de un único ítem, es más fácil hacer manualmente en el Admin. que importar una plantilla. Quien no utiliza ERP tal vez no necesite así de actualización, pues la integración con la herramienta prevé ese procedimiento. Para eso, siga el paso a paso abajo:

1. En el Admin VTEX, accede a *Precios > Lista de precios* , o escribe *Lista de precios* en la barra de búsqueda en la parte superior de la página.
2. Después en el enlace __Filtrar Resultados o hacer una búsqueda__. 
3. Inserte el id del sku que desea hacer la alteración en la casilla __SKU__.
4. Haga clic en el botón __Añadir__ (en ese momento se minimizará la línea, entonces, necesitará hacer clic nuevamente en __Filtrar Resultados o hacer una búsqueda__. 
5. Haga clic en el botón __Buscar__ (abajo aparecerá un cuadro con los precios catastrados para el sku buscado).
6. Haga clic en el botón __Alterar__ de la línea del precio que necesita alterar.
7. En esa pantalla basta hacer las debidas alteraciones y guardar.

## Casillas del formulario de alteración de precio del SKU

Esas casillas representan las informaciones que son alteradas en cualquier una de las tres formas mencionadas.

La diferencia es que, manualmente, quien rellena visualiza ese formulario, vía importación por plantilla están dispuestos en columnas y vía integración son casillas en la estructura de request en formato JSon.

- **ID:** código del SKU que accedió.
- **Sku:** nombre del SKU.
- **Aliado (utm_source):** Casilla opcional. Se trata de un parámetro para condicionar una colocación de precio diferenciada, a partir del uso en el sitio web de la utm source que se catastre aquí.
- **Audiencia de Campaña (utm_campaign):** Casilla opcional. Se trata de un parámetro para condicionar una colocación de precio diferenciada, a partir del uso en el sitio web de la utm campaign que se catastre aquí, la cual también puede ser utilizada en enlaces de mail marketing.
- **Audiencia de Campaña interna (utmi_cp):** Casilla opcional. Se trata de un parámetro para condicionar una colocación de precio diferenciada, a partir del uso en el sitio web de la utm source que se catastre aquí. Utilizada usualmente para empleados de la tienda, cuando es el caso de tener condiciones de compra diferenciada.
- **Valor De:** Casilla obligatoria. Aquí se catastra el precio que en el sitio web queda tachado (ej.: De: R$ 100,00).
- **Valor:** Casilla obligatoria. Aquí se catastra el precio de venta del producto.
- **Fecha inicial:** Casilla obligatoria. Aquí se catastra el inicio de la vigencia del precio, que cuando catastrado o alterado vía integración con ERP, con una fecha no definida, queda 01/01/1900.
- **Fecha final:** Casilla obligatoria. Aquí se catastra el final de la vigencia del precio, que cuando catastrado o alterado vía integración con ERP, con una fecha no definida, queda 31/12/4000.
- **Política Comercial:** Casilla obligatoria, pero ya viene rellenado por defecto con la política del tienda principal. Ese casilla sirve para definir en cuál política se aplicará el precio. Si se catastrado solamente el precio para la tienda principal, todas las otras políticas comerciales catastradas en la tienda mirarán para el mismo precio de la tienda principal. A medida que se catastren precios para políticas específicas, esas políticas solamente consultarán el propio precio.
- **Seller:** Casilla opcional. Sobrepone el precio catastrado en el seller que seleccione, conforme mensaje que aparece en la propia casilla.

## A través de la importación de plantilla

Se utiliza esa herramienta usualmente para actualización de precios en masa, que puede ser de todos los productos de la tienda o de acuerdo con el filtro que haga antes de la exportación. Quien no utiliza ERP tal vez no necesite así de actualización, pues la integración con la herramienta prevé ese procedimiento. Para eso, siga los pasos abajo:

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Después en el enlace __Filtrar resultados o hacer una búsqueda__. Es necesario seguir ese paso sólo si usted quiere alterar precios de productos de una determinada categoría, por ejemplo. Caso quiera alterar productos de más de una categoría, deje los filtros en blanco.
3. Haga clic en __Seleccionar categoría__ y seleccione la categoría que desea. Solamente es posible filtrar una categoría (en ese momento, se minimizará la línea, entonces, necesitará hacer clic nuevamente en filtrar resultados o hacer una búsqueda).
4. Haga clic en el botón __Buscar__ (abajo aparecerá un cuadro con los skus buscados).
5. Después en el enlace __Exportar/importar valores__.
6. Seleccione la pestaña __Exportar__ y haga clic en el botón __Exportar para Excel__. 
7. El sistema procesará la solicitación internamente y, cuando esté listo, enviará para el correo electrónico que digite en la casilla __E-mail para notificação__. Por defecto, viene rellenado con el correo electrónico del usuario que accedió el Admin.
8. Este paso es importante, pues garantiza que el formato de su plantilla sea el correcto y minimiza problemas en el momento de la importación.

Después que llegue el correo electrónico y haga la descarga, altere solamente aquellos SKUs que realmente necesitarán de actualización, los demás pueden ser excluidos de la plantilla, así la importación llevará menos tiempo y evitará reindexación desnecesaria de los productos que no se modificaron. Es importante destacar que el formato aceptado por la plataforma para importar la plantilla es el .xls. Teniendo en cuenta que no cerró la página del admin, siga los pasos abajo:

1. Seleccione la pestaña __Importar__.
2. Haga clic en __Selecionar arquivo__.
3. Busque por el archivo que guardó en su máquina con los precios alterados.
4. Seleccione el archivo y haga clic en __Abrir__.
5. Rellene en __Email para notificação__ su correo electrónico, para que sea notificado con relación a posibles errores en la importación (relleno, formato de la plantilla, etc.).
6. Haga clic en el botón __Importar__.

## Columnas de la plantilla de importación

Esas son las columnas de la plantilla que llega en el correo electrónico del usuario, cuando hace la exportación conforme mencionado en el paso a paso más arriba. Abajo está escrito exactamente como está en la plantilla. La obligatoriedad de relleno de cada columna sigue el mismo estándar de las casillas del formulario descrito en el referido tópico más arriba.

- **StockKeepingUnitId:** id del SKU.
- **Source:** utm\_source.
- **Price:** precio de venta del producto.
- **Id:** id del precio. No altere ese valor, sino el sistema creará una nueva línea en el cuadro de precio y quedarán dos precios catastrados para el SKU.
- **StoreId:** id de la política comercial donde se aplicará el precio. Caso tenga duda de cuál es el código de identificación de alguna política, acceda el módulo de E-Commerce &gt; Marketplace &gt; Política Comercial. Verifique el número que aparece en la columna “Id &#8211; Nombre”, ese es el código que deberá utilizar aquí.
- **Medium (Desconsiderar):** Casilla descontinuada.
- **Campaign:** utm\_campaign.
- **InternalCampaign:** utmi\_cp.
- **DateFrom:** fecha del inicio de la vigencia del precio. Rellenar en el formato dd/mm/aaaa.
- **DateTo:** fecha del final de la vigencia del precio. Rellenar en el formato dd/mm/aaaa.
- **ListPrice:** precio de, también conocido como precio de lista. Es aquél que aparece tachado (ej.: De: R$ 10,00) en el sitio web.
- **RefId (No alterable):** código de referencia de producto, conforme catastro del producto. No alterar ese valor.
- **Ean13Default (No alterable):** ean del producto, conforme catastro del producto. No alterar ese valor.
- **BrandName (No alterable):** marca del producto, conforme catastro del producto. No alterar ese valor.
- **StockKeepingUnitName (No alterable):** nombre del SKU, conforme catastro del producto. No alterar ese valor.
- **SellerId:** id del seller dueño del producto. Solamente vendrá rellenado caso su tienda sea marketplace de otra tienda.

## A través de la integración con ERP

Se la configura normalmente en el momento de la puesta en marcha de su tienda y se debe seguir el manual de integración junto a su equipo técnico, para evitar integraciones inconsistentes o cualquier problema que pueda perjudicar la información que alimentará la plataforma. La actualización de precios se realiza vía API, para información acceder [API de precios](https://developers.vtex.com/docs/api-reference/pricing-api#overview).
