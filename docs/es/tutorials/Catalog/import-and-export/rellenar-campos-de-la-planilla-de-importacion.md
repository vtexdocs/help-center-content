---
title: 'Rellenar campos de la planilla de importación de productos y SKUs'
id: 4nYhx63Q5yokQWaMguaIgI
status: PUBLISHED
createdAt: 2018-02-06T20:09:19.608Z
updatedAt: 2025-05-26T21:57:47.284Z
publishedAt: 2025-05-26T21:57:47.284Z
firstPublishedAt: 2018-02-06T20:23:29.492Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: filling-in-fields-in-the-import-spreadsheet
legacySlug: rellenar-campos-de-la-planilla-de-importacion
locale: es
subcategoryId: 2u48reCb68K48EAcm86ccM
---

En VTEX, se puede [importar productos y SKU de forma masiva a través de una plantilla](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#plantilla), siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Importación y exportación**, o escribe **Importación y exportación** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Exportación/Importación`.
3. Haz clic en la pestaña `Importar`. Usted puede descargar la planilla para verificar o cambiar sus productos.
4. Rellene los campos referentes a la planilla.
5. Vuelva al Admin y haga el upload del archivo con la extensión `.xls`.
6. Haz clic en `Importar`.

Dependiendo de la cantidad de productos, su procesamiento puede tardar. Después de finalizado, usted recibirá en el email registrado la confirmación de la importación.

Para entender el significado de cada uno de los campos, vea a continuación una descripción completa de la lista de campos de Producto y SKU que aparecen en la plantilla.

> ❗ Al rellenar **CaptionLink**, **DepartamentName**, **CategoryName** y **Brand**, evita utilizar las siguientes palabras reservadas, ya que esto puede perjudicar el rendimiento de tu tienda e interferir con el funcionamiento de las páginas del Admin VTEX. Consulta la lista de palabras reservadas a continuación. <ul> <li>`a`</li> <li>`meta`</li> <li>`api`</li> <li>`admin`</li> </ul>

__SkuId:__ número único de identificación del SKU. Si este campo ya está rellenado, no puede modificarlo. Para agregar un nuevo SKU, deje la columna vacía.

__SkuName:__ nombre del SKU, es decir, de la variación del producto. Campo obligatorio.

__ActivateSkuIfPossible:__   campo que activa el SKU si cumple los requisitos de tener una imagen asociada. Si se trata de un SKU kit, debe tener al menos un componente asociado activo. Introduzca _SÍ_ para la activación automática después de comprobar los requisitos. Campo obligatorio.

__SkuIsActive:__ este campo no permite ningún cambio, solo se utiliza para consulta.

__SkuEan:__ código único de identificación de SKU (código de barras). Acepta hasta 13 caracteres numéricos. Si se ha rellenado el campo _CodigoReferenciaSKU_, este campo deja de ser obligatorio.

__Height:__ altura del SKU calculada para el flete. Campo obligatorio.

__ActualHeight:__ altura real del SKU.

__Width:__ anchura del SKU calculada para el flete. Campo obligatorio.

__ActualWidth:__ anchura real del SKU.

__Length:__ largura del SKU calculada para el flete. Campo obligatorio.

__ActualLength__: largura real del SKU.

__Weight:__ peso del SKU calculado para el flete. Campo obligatorio.

__ActualWeight:__ peso real del SKU.

__MeasurementUnit:__ utilizado apenas en casos donde es necesario convertir la unidad de medida para venta. En los demás casos, utilizar _un_. Campo obligatorio.

__UnitMultiplier:__ unidad numérica que multiplica la cantidad seleccionada del producto cuando se añade al carrito. Si el multiplicador es 5, el producto se añadirá en cantidades múltiples de 5, es decir, 5, 10, 15, 20, y así sucesivamente. Campo obligatorio.

__SKUReferenceCode:__ código único de referencia del SKU creado para ayudar en la organización. Después de crearlo, no es posible editarlo a través de la plantilla. Si el campo _SKUEan_ se ha completado, este campo ya no es obligatorio.

__RewardValue:__ valor de crédito que el cliente recibe al concluir una compra de 1 unidad de un determinado SKU. Este campo debe rellenarse con valores decimales de la moneda predeterminada de la tienda. 

__EstimatedDateArrival:__ en caso de preventa, introduzca la fecha prevista de llegada del producto, en el formato _dd/mm/aaaa_.

__ManufacturerCode:__ código proporcionado por el fabricante para identificar su producto.

__ProductId:__ número único de identificación indica. Si este campo ya está rellenado, no puede modificarlo. Para agregar un nuevo producto, deje la columna vacía. 

__ProductName:__ nombre del producto. Utilice palabras sencillas y evite otros idiomas o escritura compleja. Este campo es importante para SEO y debe respetar el límite de 150 caracteres. Campo obligatorio.

__ProductShortDescription:__ descripción corta del producto. Esta información es renderizada por el control `$product.DescriptionShort` y puede ser mostrada tanto en la página del producto como en el estante.

__ProductIsActive:__ determina si el producto está activado o desactivado en su tienda. Campo no editable por planilla, debe dejarse vacío. 

__ProductReferenceCodeId:__ código único de referencia del producto creado para ayudar en la organización. Cada producto debe contener un código de referencia diferente. 

__ShowOnSite:__ esta función activa o desactiva la visibilidad de un producto en su tienda. Coloque _SÍ_ para que el producto se muestre o _NO_ para dejarlo oculto. Campo obligatorio.

__CaptionLink:__ campo utilizado para crear la URL del producto. Es recomendable es uso de la estructura sin acento y con palabras separadas por guion. Cada producto debe contener un _CaptionLink_ diferente. Campo obligatorio.

__ProductDescription:__ descripción de las principales informaciones relacionadas con el producto. Un resumen sencillo y de fácil comprensión para el cliente.

__ProductLaunchDate:__ campo utilizado para programar la fecha de activación de un producto, en formato _dd/mm/aaaa_.

__Keywords:__ sinónimos de términos relacionados con el nombre dado para su producto. Este campo es importante para hacer búsquedas más amplias. Separe cada término con una coma. Además, se aceptan caracteres especiales en el campo.

__SiteTitle:__ texto que se encuentra en la pestaña del navegador y corresponde al título de la página del producto. Este campo es importante para los motores de búsqueda y SEO. Si no se ha rellenado este campo, el sistema replicará el valor del campo _ProductName_ para completar el registro.

__MetaTagDescription:__ breve descripción del producto. Es recomendable no superar el límite de 150 caracteres para que los motores de búsqueda puedan mostrar el texto completo en las páginas de resultado. Si no se ha rellenado este campo, el sistema replicará el valor del campo _ProductName_ para completar el registro.

__SupplierId:__ campo obsoleto. Este campo no es utilizado por el sistema y se recomienda mantenerlo vacío.

__ShowOutOfStock:__ campo responsable de mostrar un producto en la tienda incluso cuando está agotado, con la sección _Avíseme_, donde el cliente puede ingresar su dirección de correo electrónico para ser notificado cuando el producto esté disponible. Marcando _SÍ_, el producto agotado aparecerá en el sitio con _Avíseme_. Si marca _NO_, no aparecerá en el sitio. Campo obligatorio.

__Kit:__ define si el SKU del producto en cuestión forma parte de un [Kit](https://help.vtex.com/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). No es posible editar este campo a través de la plantilla. Si se trata de un nuevo SKU, deje el campo vacío.

__DepartamentId:__ número único de identificación de la categoría de mayor nivel jerárquico del producto. No es posible editar este campo a través de la plantilla. Si se trata de un nuevo producto, deje el campo vacío.

__DepartamentName__: nombre relacionado con la categoría de mayor nivel jerárquico del producto.

__CategoryId:__ número único de identificación de la categoría de menor nivel jerárquico del producto. Esta información se encuentra en el módulo _Categorías_ en el Admin o por el endpoint [Get Category Tree](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-category#catalog-api-get-category-tree). Campo obligatorio.

__CategoryName:__ nombre relacionado con la categoría de menor nivel jerárquico del producto. No es posible editar este campo una vez rellenado. 

__BrandId:__ número único de identificación de la marca del producto. Esta información se encuentra en la sección _ID_ del  módulo _Marcas_ en el Admin o por el endpoint [Get Brand List](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-brand#catalog-api-get-brand-list). Campo obligatorio.

__Brand:__ nombre dado a la marca del producto. No es posible editar este campo una vez rellenado. 

__CubicWeight:__ campo obsoleto. Este campo no es utilizado por el sistema y se recomienda mantenerlo vacío.

__CommercialCondition:__ número único de identificación de la [condición comercial](https://help.vtex.com/es/tutorial/registrar-condicion-comercial--tutorials_445). Define las promociones y reglas de pago en cuotas específicas para cada SKU. 

__Stores:__ número único de identificación de la [política comercial](https://help.vtex.com/es/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). Esta información se encuentra en la sección _ID_ del  módulo _Políticas comerciales_ en el Admin.

__Accessories:__ muestra los productos que deben venderse como complemento de otro producto. Para incluir un SKU [accesorio](https://help.vtex.com/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280), incluya el ID del SKU.

__Similar:__ muestra los SKU similares a otro SKU que se mostrarán al cliente a la hora de la compra. Para añadir un SKU [similar](https://help.vtex.com/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280), incluya el ID del SKU.

__Suggestions:__ muestra los SKU que deben mostrarse como sugerencia al SKU en cuestión. Para añadir un SKU [sugerido](https://help.vtex.com/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280), incluya el ID del SKU. 

__MostrarJunto:__ muestra los SKU de los SKU sugeridos para la compra en conjunto. Para añadir un SKU [mostrar junto](https://help.vtex.com/es/tutorial/configurar-producto-similar-sugerencias-accesorios-y-genericos--tutorials_280), incluya el ID del SKU. 

__Attachment:__ muestra un [anexo](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) al comprador de un [servicio](https://help.vtex.com/es/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y) o del propio ítem comprado.

