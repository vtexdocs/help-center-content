---
title: '¿Por qué el producto no aparece en el sitio web?'
id: frequentlyAskedQuestions_382
status: PUBLISHED
createdAt: 2017-04-27T22:36:11.456Z
updatedAt: 2025-07-31T18:32:45.709Z
publishedAt: 2025-07-31T18:32:45.709Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: why-is-the-product-not-visible-on-the-website
locale: es
legacySlug: por-que-o-produto-nao-aparece-no-site
---

Para que un producto se muestre en la vitrina de la tienda es necesario que esté disponible para la venta mediante las siguientes configuraciones:

* El [producto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) y sus [SKUs](https://help.vtex.com/es/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u) están registrados en el catálogo.
* El producto tiene [precio](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu).
* La configuración de [logística](#logistica) permite el envío del producto al cliente, incluyendo [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb), [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj), [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), entre otros ajustes.
* La configuración de [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) es una de las siguientes:
    * El producto tiene stock disponible para la venta (los ítems [reservados](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92) no cuentan como disponibles).
    * El producto tiene stock ilimitado configurado.
    * La opción de mostrar el producto sin stock (agotado) está activada.
* Las plantillas del [Content Management System (CMS)](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) de la tienda están configuradas.

Cuando un producto no se muestra en la vitrina, deben ajustarse una o más de estas configuraciones.

Este artículo explica cómo investigar errores de indisponibilidad de productos en la vitrina y presenta las soluciones en las siguientes secciones:

* [Catálogo](#catalogo)
* [Precios](#precios)
* [Logística](#logistica)
* [CMS](#cms)

> ⚠️ Después de ajustar la información de producto y SKU o editar la configuración de logística, debes esperar a que se indexe el producto. Puedes dar seguimiento al status a través de la [cola de indexación](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao) del Admin VTEX, en **Catálogo > Informes > Productos indexados**. Después de la indexación, recomendamos acceder a la página del producto en el sitio web de la tienda con una pestaña anónima en el navegador para ver la versión actualizada y sin caché.

Hay casos en que el producto aparece en la vitrina, pero se muestra indisponible cuando se agrega al carrito. Esto puede depender de varios ajustes de logística. Aprende más en el artículo [¿Qué ajustes de logística impactan la disponibilidad del producto en el carrito?](https://help.vtex.com/es/tutorial/que-ajustes-de-logistica-impactan-la-disponibilidad-del-producto-en-el-carrito--NAyBFToRdvlDyOzeeAeNw).

## Catálogo

Te recomendamos que empieces tu búsqueda de errores por el **Catálogo**. Para verificar la configuración del **Catálogo**, sigue estas instrucciones.

1. Accede al Admin VTEX y navega hasta **Productos > Catálogo > Gestión de productos y SKU** para verificar los productos registrados en tu tienda.
2. Busca el producto que deseas mostrar en la lista, tal como se ilustra en la imagen a continuación.

    ![01-produto-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_1.PNG)

3. Sigue las instrucciones descriptas en las próximas secciones para verificar la información a continuación:
    * [Producto](#producto)
    * [SKU](#sku)
    * [Información indexada](#informacion-indexada)

### Producto

Para verificar la configuración del producto, es importante que sigas los pasos que se describen a continuación.

1. En **Productos > Catálogo > Gestión de productos y SKU**, haz clic en `Modificar` al lado del producto que desees verificar.
2. En el formulario, verifica la siguiente información:
    * **Marca:** comprueba el nombre de la marca asociada al producto y asegúrate de que está activa.
    * **Categoría:** comprueba el nombre de la categoría asociada al producto y asegúrate de que está activa.

   > ⚠️ Al crear un nuevo producto, debes asociarlo a una marca y a una categoría que estén activas para que se active por primera vez. Sin embargo, una vez que un producto ya existe y está activo, la desactivación de la categoría y la marca no lo desactivará por completo. Los productos con categorías y marcas inactivas se vuelven invisibles en la tienda, es decir, no aparecen en la búsqueda y no tienen su propia página. Para que no estén disponibles, debes restablecer su cantidad en stock a cero.

    * **Políticas comerciales:** revisa que el producto esté asociado a una [política comercial](https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Si no lo está, usa el recuadro de selección para marcar la política comercial en la que deseas incluirlo.
    * **Fecha de lanzamiento en el mercado:** verifica que la fecha de lanzamiento al mercado sea correcta. Si es una fecha futura, el producto recién se mostrará en el sitio web en la fecha indicada.
    * **Mostrar en el sitio web:** verifica si la opción **Sí** está seleccionada. De lo contrario, el producto no se mostrará.
    * **Producto activo:** verifica si la opción **Sí** está seleccionada. De lo contrario, el producto no se mostrará.
    * **Mostrar producto agotado:** verifica si la opción **Sí** está seleccionada. En ese caso, se espera que los productos sin stock aparezcan en la tienda con el botón [Avísame](https://help.vtex.com/es/tutorial/configurar-la-opcion-avisame--2VqVifQuf6Co2KG048Yu6e). Si la opción no está seleccionada, puede ser que el producto no aparezca en la tienda porque no tiene stock disponible.
    * En caso de que el producto tenga especificaciones, navega hasta la pestaña **Especificaciones** y verifica que se hayan rellenado los campos correspondientes.
3. Luego de cualquier modificación, haz clic en `Guardar`.

![02-campos-produto-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_2.png)

<p align="center">*Campos que se deben verificar en la página de información del producto*

![03-aba-especificacoes-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_3.png)

<p align="center">*Pestaña **Especificaciones***

### SKU

En la página de SKU, en **Productos > Catálogo > Gestión de productos y SKU**, sigue las instrucciones a continuación para revisar qué campo puede estar causando problemas.

1. En **Productos > Catálogo > Gestión de productos y SKU**, encuentra en la lista el SKU que desees revisar.

    En esta página, verás que al lado de cada SKU hay atajos que pueden ayudarte en tu revisión:

    | Botón | Descripción |
    |-|-|
    | ![04-botao-precos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_4.png) | Permite acceder a la __Lista de precios__ para verificar si existe un precio válido para la política comercial deseada que esté asociado a los SKU del producto. Consulta la sección de [Precios](#precios) para más información. |
    | ![05-botao-logistica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_5.png) | Permite acceder a la página __Gestión del stock__ para verificar si el SKU tiene stock disponible. Consulta la sección de [Logística](#logistica) para más información. |
    | ![06-botao-indexed-info](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_6.png) | Permite ver a cada **_seller_** que comercializa el SKU, la política comercial (**Policy**), el precio (**Value**) y la cantidad de SKU en stock (**Quantity**). |

2. En la línea del producto correspondiente al SKU que se verificará, haz clic en la flecha hacia abajo <i class="fas fa-caret-down"></i>, al lado del botón `Modificar`.
3. Haz clic en la opción** SKU** para acceder a la lista detallada de los SKU.
4. En la columna **Status**, verifica que el status indicado sea `Activo`. Si los SKU están activos, continúa con el paso 7.
5. Si algún SKU está con el status `Inactivo`, haz clic en `Modificar` para ver la información detallada del SKU.

    ![07-catalogo-skus-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_7.png)

6. En la página de información del SKU, el próximo paso es verificar los ítems que se enumeran a continuación.
    * **Activar SKU si es posible:** verifica si esta opción está seleccionada. De lo contrario, el SKU no se mostrará. Activar esta opción significa determinar que el SKU se activará si cumple con los requisitos necesarios:
        * Tener asociadas y activadas la marca y la categoría.
        * Tener al menos una imagen asociada al SKU.
        * Tener los campos rellenados de las especificaciones (en caso de tener especificaciones registradas).
        * Si el SKU es un _kit_: tener asociado un componente activo.
    * **¿SKU activo?:** verifica si esta opción está seleccionada. De lo contrario, el SKU no se mostrará.
7. Haz clic en la pestaña **Imágenes**.
8. Verifica si el SKU incluye al menos una imagen. Si no la tiene, el SKU no se activará. Realiza el paso a continuación para corregir este problema.
9. Haz clic en `Insertar` para subir una imagen nueva. Si lo prefieres, haz clic en `Asociar a las imágenes existentes` para incluir una imagen que ya se utilice en otro SKU.

![08-aba-imagens-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_8.png)

<p align="center">*Pestaña **Imágenes***

![09-sku-imagens-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_9.PNG)

### Información indexada

Para que un producto aparezca en el sitio web, debe estar [indexado](https://help.vtex.com/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion--tutorials_256). El indexador del **Catálogo** permite ver la información detallada de la indexación de cada producto y SKU, siguiendo los pasos a continuación.

1. En **Productos > Catálogo > Gestión de productos y SKU**, encuentra en la lista el producto que desees revisar.
2. En la línea correspondiente al producto que se verificará, haz clic en la flecha hacia abajo <i class="fa-solid fa-sort-down"></i> al lado del botón `Modificar`.
3. Haz clic en la opción **Información indexada** para obtener más información sobre la indexación del producto.

El registro de indexación muestra el status de cada SKU del producto. Si hay algún problema, dirá `Sku is UNAVAILABLE` (el SKU no está disponible) y mostrará el motivo del error.

En el ejemplo a continuación, podemos llegar a la conclusión de que el SKU no está disponible por falta de ítems en el stock:

![10-indexed-info-code](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_10.png)

A partir de esto, es posible tomar medidas para corregir el problema. En el caso del ejemplo, sería necesario ajustar el número de ítems en el stock del sistema de [Logística](#logistica).

Un SKU activo y sin errores tendrá el registro en el indexador parecido al que se muestra a continuación:

![11-indexed-info-code-active](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_11.png)

> ℹ️ Si la información de la indexación no muestra ningún motivo para la falta de disponibilidad de los productos, y si no encontraste ningún error en el registro de los productos y SKU, probablemente lo que resuelva el problema sea volver a indexar el producto. Para hacerlo, modifica algún campo dentro del registro del producto o alguno de sus SKU, y guarda los cambios. Esto forzará la indexación.

## Precios

En el módulo de **Precios**, es importante verificar que los SKU del producto tengan [precios base](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) registrados.

1. Accede a **Productos > Precios > Lista de precios**.
2. Verifica la línea de cada SKU y la columna correspondiente al precio en la política comercial deseada.
    * Si hay un precio informado, el problema no está en el módulo de **Precios** y podrás omitir los próximos pasos de esta sección.
    * Por otro lado, si la información que se muestra es _Precio no registrado_, deberás [crear un precio base](#crear-precio-base).

En el ejemplo a continuación, hay dos SKU sin precio base registrado. Es por esto que no hay un precio ingresado en la columna de la política comercial. Solo aparece la información _Precio no registrado_.

![12-precos-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_12.PNG)

### Crear precio base

Para crear un precio base en el Admin VTEX, sigue los pasos a continuación:

1. En **Productos > Precios > Lista de precios,** haz clic en la primera columna de la línea del SKU deseado. Aparecerá una barra lateral.
2. Rellena el campo **Precio de costo** con el costo del SKU.
3. Rellena el campo **Markup inicial** con el porcentaje de ganancia que obtendrás con la venta del SKU.

    El precio base se calculará automáticamente en función de los datos ingresados en los pasos anteriores.

4. Haz clic en la `X` o en el área fuera de la barra lateral para guardar el precio.

También puedes crear precios base por plantilla o por la API Pricing. Para más información, sigue los pasos que se describen en el artículo [Registrar precio base](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29).

## Logística

Diferentes aspectos de [logística](https://help.vtex.com/es/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) pueden afectar la disponibilidad de un producto en la vitrina. El producto puede estar indisponible porque la [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) de la tienda no permite enviar a la ubicación del cliente o porque el producto no tiene suficiente cantidad disponible para la venta en el [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139).

> ℹ️ Si el producto se muestra como disponible en la vitrina, pero indisponible al agregarlo al carrito, consulta el artículo [¿Qué ajustes de logística impactan la disponibilidad del producto en el carrito?](https://help.vtex.com/es/tutorial/que-ajustes-de-logistica-impactan-la-disponibilidad-del-producto-en-el-carrito--NAyBFToRdvlDyOzeeAeNw).

### Simulador de envío

El **Simulador de envío** permite probar la existencia de rutas viables, validar la configuración de logística de la tienda y consultar el stock.

Para simular el envío de un ítem a una ubicación, en el Admin VTEX, accede a **Envío > Simulador de envío**. Puedes consultar todos los pasos en el artículo [Simulador de envío](https://help.vtex.com/es/tutorial/simulador-de-envio--tutorials_144).

> ⚠️ Al probar la disponibilidad de un ítem mediante el **Simulador de envío**, recomendamos que todas tus [políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) den servicio a la dirección utilizada. Si el ítem no está disponible para esta ubicación, no estará disponible para ninguna. 

Cuando los ajustes de logística relacionados con la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) están configurados correctamente y la política de envío da servicio a la ubicación del cliente, la causa de que el ítem no se muestre en la vitrina puede ser el stock, según se explica a continuación.

### Stock

Para mantener la disponibilidad del producto en la vitrina en lo que respecta al stock puedes adoptar cualquiera de las siguientes estrategias:

* Garantizar suficiente cantidad de ítems para la venta (los ítems [reservados](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92) no se consideran como disponibles).
    * En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, edita el valor en la columna *Actualizar recuento* en la fila del producto correspondiente y haz clic en `Guardar`.
* Activar la opción [stock ilimitado](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) para el producto.
    * En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, activa el botón de alternancia de la columna *Stock ilimitado* en la fila del producto correspondiente y haz clic en `Guardar`.
* Configurar el producto para que se muestre en la vitrina aunque esté sin stock.
    * En el Admin VTEX, accede a **Catálogo > Todos los productos** y haz clic en Modificar en el producto correspondiente. En la pestaña *Producto*, marca la opción `Sí` en el campo `Mostrar producto sin stock`.

Si el SKU tiene el [stock futuro](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) configurado, el suministro del ítem podría tardar más de lo esperado. Durante ese periodo, la indisponibilidad del producto en la vitrina puede deberse al stock.

> ⚠️ Si tu tienda tiene [cuentas franquicia](https://help.vtex.com/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex), para que el stock de las cuentas esté disponible para la venta, los productos deben estar asociados a la misma [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) de la vitrina. 

## CMS

Si tu producto no aparece en el sitio web incluso después de verificar todas las configuraciones en **Catálogo**, **Precios** y **Logística**, es importante revisar el [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) de tu tienda. Luego, revisa si el _[binding](https://help.vtex.com/es/tutorial/que-es-binding--4NcN3NJd0IeYccgWCI8O2W)_ de tu tienda es el correcto y también revisa la configuración específica de [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) y [VTEX IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2).

> ⚠️ Para realizar la revisión que se describe a continuación en el CMS, debes pedirle ayuda al equipo de desarrolladores encargado de tu tienda.

### Binding

Independientemente de qué CMS usa tu tienda, ya sea el Portal Legado o VTEX IO, es necesario confirmar si el _[binding](https://help.vtex.com/es/tutorial/que-es-binding--4NcN3NJd0IeYccgWCI8O2W)_ está configurado, es decir, si el sitio web y su estructura de carpetas están bien asociados a tu cuenta VTEX.

1. En el Admin VTEX, accede a **CMS > Layout**.
2. Haz clic en la carpeta **CMS**.
3. Haz clic en la carpeta **Sites and channels**.
4. Verifica de qué color aparece el ícono <i class="fas fa-globe-americas"></i> al lado del nombre de tu sitio web.

    Si el ícono está azul, significa que el _binding_ está correcto y no debes hacer nada.

    Si el ícono está amarillo, hay un error en el _binding_. En ese caso, deberás seguir los pasos que se indican en el artículo [Sitio web con error: ¿cómo ajustarlo?](https://help.vtex.com/es/faq/website-com-erro-como-ajustar) para corregir el error.

### CMS - Portal Legado

Si tu tienda utiliza el [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), se recomienda que los desarrolladores de tu tienda verifiquen si el [control](https://help.vtex.com/es/tutorial/lista-de-controles-para-templates--tutorials_563#controles-para-paginas-de-departamento-categoria-y-busqueda) del resultado de la búsqueda de productos (`<vtex.cmc:searchResult/>`) se está usando en las [plantillas](https://help.vtex.com/es/tutorial/como-crear-un-template-de-pagina--frequentlyAskedQuestions_1850) de las páginas Departamento, Categoría y Búsqueda en **CMS > Layout**,  porque, de no ser así, los productos no se mostrarán.

### CMS - VTEX IO

Si tu tienda se desarrolla en [VTEX IO](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), los desarrolladores deben verificar la configuración de las **Páginas** y de los bloques incluidos en las plantillas de la tienda.

#### Páginas

En **CMS > Páginas > Páginas**, es importante revisar que la página esté usando una plantilla personalizada, ya que esta sección permite usar una plantilla incluida en el código con otra URL y nombre.

Sigue los pasos a continuación para verificar la plantilla que está usando tu tienda.

1. En **CMS > Páginas > Páginas**, haz clic en el ícono del lápiz <i class="fas fa-pencil"></i> en la línea de la página que desees verificar.
2. Baja hasta la sección **Templates**.
3. Mira el nombre que aparece en el campo **Estándar** y en el campo **Condicional**, en caso de que estén completos.

    En el ejemplo a continuación, la plantilla estándar que se usó es `vtex.curbside-pickup@0.x:store.curbside-pickup` y no hay una plantilla condicional.

    ![16-templates-cms-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/marketing-and-merchandising/por-que-el-producto-no-aparece-en-el-sitio-web_13.PNG)

4. Luego, debes configurar los bloques incluidos en la plantilla utilizada, tal como se indica en [Templates](#templates).

#### Templates

En los archivos del [tema de tu tienda](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-6-buildingyourownstoretheme) desarrollada en VTEX IO, será necesario revisar los siguientes _ítems_.

* Verifica que la página de producto (`product.jsonc`) esté incluida con todos los bloques necesarios para que funcione correctamente – [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages?_ga=2.124137738.1894771692.1651492195-816806259.1637870241), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) y [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) – tal como se describe en la [Página de producto](https://learn.vtex.com/docs/course-basic-blocks-step04pdp-lang-en). 
* Verifica que la aplicación de [Search result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) y su bloque `search-result-layout` estén debidamente incluidos en el código de la plantilla, de acuerdo con la documentación que indica Search Result.

## Más información

* [Catálogo - Definición de concepto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR)
* [¿Qué ajustes de logística impactan la disponibilidad del producto en el carrito?](https://help.vtex.com/es/tutorial/que-ajustes-de-logistica-impactan-la-disponibilidad-del-producto-en-el-carrito--NAyBFToRdvlDyOzeeAeNw)
* [Cómo funciona la indexación](https://help.vtex.com/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion--tutorials_256)
* [Módulo de precios - Visión general](https://help.vtex.com/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)
* [Gestión del stock](https://help.vtex.com/es/tutorial/gestionar-items-en-inventario--tutorials_139)
* [Simulador de envío](https://help.vtex.com/es/tutorial/simulador-de-envio--tutorials_144)
* [CMS - Visión general](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC)
