---
title: 'Integrar con Dafiti'
id: 5jgzjzBPeMcci6YYqcAsUe
status: DRAFT
createdAt: 2017-05-17T22:06:43.485Z
updatedAt: 2020-03-06T13:58:25.304Z
publishedAt: 
firstPublishedAt: 2017-05-18T18:01:22.411Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integrando-con-dafiti
legacySlug: integrando-con-dafiti
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este tutorial va a enseñar paso a paso cómo configurar la integración de su tienda con Dafiti.

## Registro de la integración de Dafiti

1. En el menu del Admin, haga clic en __Intgraciones__.
2. Haga clic en __Configuración__.
3. Busque por la caja del __Dafiti__ y haga clic en __Integrar__.
4. Rellene los __campos__ que aparecen en la pantalla. A continuación, vamos a detallar cómo llenar cada campo.
5. Con todo rellenado correctamente, haga clic en el botón __Guardar Configuración__.

### Detalle de los campos

&bull; __Afiliado*:__ Este campo debe rellenarse con un ID de [afiliado](/es/faq/que-es-afiliado) que no exista en el registro de afiliados del Gestión de Pedidos. El ID acepta sólo tres dígitos y consonantes. Sugerencia: `DFT`. Si tiene configuraciones de [integración para multi-dominios](/es/tutorial/como-crear-multiloja-multidominio), tenga en cuenta el ID del afiliado. Este campo debe tener un valor diferente para cada dominio.

&bull; __Politica comercial:__ ID de la política comercial que será utilizada para Dafiti. Son los productos de esta política comercial que serán enviados al marketplace.

&bull; __Chave de acesso*:__ este campo se debe rellenar con el símbolo de identificación de su tienda en el marketplace. Esta información se genera directamente en el portal de Dafiti.

&bull; __Usuário*:__ rellene este campo con el usuario generado en portal de Dafiti.

&bull; __E-mail do afiliado*__:rellene con un e-mail.

&bull; __Permitir HTML na descrição do produto*:__ determina si la descripción de los productos se enviará con *tags* HTML a Dafiti. Marcando `Sim`, se enviará la descripción exacta de la forma en que está registrada en el catálogo de VTEX. Marcando `Não`, la integración eliminará todas las *tags* HTML que usted posee en la descripción de sus productos.

&bull; __Taxa de divergência de preço (Percentual)* :__ tasa de aceptación de la divergencia de valor de un pedido. Cualquier pedido que tenga una divergencia entre el precio de venta del marketplace y el precio determinado por el seller [será comparado con ese valor](/es/faq/por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto). Si la divergencia en porcentaje es menor que el valor definido en ese campo, el pedido se integrará normalmente. En caso contrario, el pedido no se integrará y se le notificará en la [pestaña de pedidos (dentro de la sección de Integraciones en Admin)](/es/tutorial/como-verificar-la-integracion-en-bridge).

_Leyenda:_<br />
`*` Campos obligatórios.<br />

Hechas las configuraciones iniciales para la integración con Dafiti, ahora vamos a enviar los datos de los productos al marketplace. El envío de algunas de estas informaciones será cargado por la Planilla de Mapeo y el resto a través de los datos ya registrados en el propio catálogo de VTEX.

## Relleno de la Planilla de Mapeo

Con esta *feature*, será posible categorizar correctamente y también crear variaciones para sus productos en Dafiti.

El mapeo debe realizarse siempre que un producto se envíe por primera vez a Dafiti. Esto significa que, ya habiendo hecho el mapeo una vez, los productos que ya fueron integrados no necesitará rehacer el mapeo. Y también que, los nuevos productos siempre deben hacer el mapeo.

1. De acuerdo con __su país__, descargue abajo la __Planilla de Mapeo de Dafiti__ en el formato `.xlsx`.
<br/>&bull; [Brasil](//assets.ctfassets.net/alneenqid6w5/2Vbi7VaYIowaaOYCCucsQq/fa94cd636b38e9810dd6a708c95e26ac/Planilha_de_Mapeamento_da_Dafiti.xlsx))
<br/>&bull; [Colombia](//assets.ctfassets.net/alneenqid6w5/4d5y0N09IsKmy4MuAGygqs/0e43349d309fb556179dfac5f2f6c885/Planilha_de_Mapeamento_da_Dafiti_COL.xlsx)

2. De acuerdo con __su país__, descargue abajo la __Planilla de Consulta de Dafiti__ para verificar los valores aceptados de acuerdo con cada columna de la Planilla de Mapeo del paso anterior. Esta hoja de trabajo se utilizará exclusivamente como __consulta__.
<br/>&bull; [Brasil](//assets.ctfassets.net/alneenqid6w5/1gGYn5lo3qSe0iOaoKs0oa/fc1aa02e2761474f0235fcb489f930ff/Planilha_de_Consulta_Dafiti.xlsx)
<br/>&bull; [Colombia](https://s3.amazonaws.com/Marketplace-Integration/SellerCenterIntegration/Colombia.zip)

Siga el paso a paso siguiente, haciendo el de/para en la __Planilla de Mapeo__ entre el que está registrado en su producto en VTEX y los valores especificados de acuerdo con la __Planilla de Consulta__ de Dafiti.

<div class="alert alert-warning">
<strong>OBS:</strong> cualquier valor utilizado que no esté en la Planilla de Consulta ocasionará un error de integración.
</div>

1. __SKU:__ es el ID de SKU en VTEX. Este es el ID de SKU que desea enviar a Dafiti.

2. __Categoría:__ rellene el valor de la categoría a la que su SKU pertenece en Dafiti.

3. __Color__: rellene el valor del color de SKU.
<br/>_`Ex:` usted está mapeando una media roja. De acuerdo con la hoja de consulta, la columna __Color__ debe rellenarse con el valor `Rojo`.

4. __Talla__: rellene el valor de la talla de SKU.
<br/>_`Ex:` usted está mapeando una bermuda de talla 38. De acuerdo con la hoja de consulta, la columna __Talla__ se puede rellenar con el valor `38`._

5. __Gênero__: rellene con el valor del género de SKU.
<br/>_`Ex:` usted está mapeando un zapato femenino. De acuerdo con la Planilla de Consulta, la columna __Género__ debe ser rellenada con el valor `femenino`._

6. __Tipo de Producto:__ rellene el valor del Tipo de Producto de su SKU. Este campo es libre para ser llenado de la manera que encuentre más adecuada.
<br/>_`Ex:` usted está mapeando un tenis. El común es llenar la columna __Tipo de Producto__ con el valor `Tenis`._

7. __Modelo:__ rellene el valor del modelo de su SKU. Este campo es libre para ser llenado de la manera que encuentre más adecuada.
<br/>_`Ex:` usted está mapeando pantalones de chándal. El común es llenar la columna __Modelo__ con el valor `Chándal`._

<div class="alert alert-warning">
<strong>OBS:</strong> en la integración brasileña, Dafiti exige que el nombre de los productos registrados sigan el siguiente estándar: <strong>Tipo de Producto + Marca + Modelo + Color.</strong>
<br/>
Por lo tanto, siempre que encuentre valores para estos cuatro campos en VTEX, crearemos el nuevo nombre de producto automáticamente. Si alguno de los campos no está presente, le enviaremos el nombre original del producto.</div>


## Envío de imágenes

Dafiti posee una regla de negocio en la que exige que los productos enviados tengan todas sus imágenes con fondo blanco.

La integración utiliza exactamente las mismas imágenes de los productos que ya tiene registradas en catálogo de VTEX. Sin embargo, si no tiene imágenes de fondo blanco y no desea reemplazar las imágenes de su propio catálogo, la integración da la opción de enviar imágenes alternativas a través de la misma Planilla de Mapeo que se utiliza en el paso anterior. De este modo, estas son las imágenes enviadas, en lugar de las imágenes de su tienda.

Para hacer esto, siga este paso a paso:

1. Al lado de la columna Modelo, agregue una columna denominada __Image_1__.
2. En las respectivas líneas correspondientes a los SKUs, rellene con la URL de sus imágenes.

Puede enviar hasta __ocho imágenes__. De esta forma, agregue nuevas columnas siguiendo el estándar: `Image_2`, `Image_3`, ...,` Image_8`.

<div class="alert alert-warning">
<strong>OBS:</strong> recuerde siempre de utilizar <code>http</code> o <code>https</code> al principio de las URL, de lo contrario, habrá error al intentar cargar la hoja de cálculo en VTEX.</div>

## Envío de la marca del producto

La integración enviará la marca que está registrada en su producto en catálogo de VTEX.
<br/>_`Ex:` usted está enviando una camisa de Adidas, la integración enviará como marca `Adidas` también._

<div class="alert alert-warning">
<strong>OBS:</strong> similar a lo que sucede con categoría y especificaciones, Dafiti posee marcas mapeadas en su plataforma. En este caso, si alguno de sus productos tiene una marca que no está registrada en Dafiti, el mismo sufrirá un error de integración. Si esto ocurre, póngase en contacto con Dafiti para solicitar el registro de su marca en su sistema.
</div>

## Haciendo el upload

Después de rellenar la hoja de trabajo, acceda a las __Integraciones__ en el menú Admin:

1. Haga clic en __Configuración__.
2. Busque por la caja de Dafiti y haga clic en el __botón de engranaje__.
3. A continuación, haga clic en __Carga de mapeo__.
4. Seleccione la hoja de cálculo con los datos y haga clic en __Subir archivo__.

Con la carga completa, la integración envía automáticamente todos los productos de la hoja de cálculo a Dafiti.

Despues de este paso, su integración con Dafiti ahora está configurada.
