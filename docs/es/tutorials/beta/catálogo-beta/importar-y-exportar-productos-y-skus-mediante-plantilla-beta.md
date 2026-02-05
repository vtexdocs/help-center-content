---
title: 'Importar y exportar productos y SKUs mediante plantilla (Beta)'
id: 5udKxWP1ZeBD7QB7Fy2BNl
status: PUBLISHED
createdAt: 2025-09-05T16:54:23.995Z
updatedAt: 2026-01-09T15:30:32.980Z
publishedAt: 2025-11-05T15:30:32.980Z
firstPublishedAt: 2025-09-05T18:41:30.755Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-products-and-skus-using-a-spreadsheet-beta
legacySlug: importacion-y-exportacion-de-productos-y-skus-mediante-plantilla-beta
locale: es
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si tienes alguna duda, ponte en contacto con nuestro [Soporte](https://help.vtex.com/es/support).

En el Admin VTEX puedes gestionar la importación y exportación de productos y SKUs utilizando una plantilla, como se indica en las secciones a continuación:

- [Importar productos y SKUs mediante plantilla](#importar-productos-y-skus-mediante-plantilla)
- [Exportar productos y SKUs mediante plantilla](#exportar-productos-y-skus-mediante-plantilla)
- [Ventana de seguimiento de la exportación](#ventana-de-seguimiento-de-la-exportacion)
- [Campos de la plantilla de productos y SKUs](#campos-de-la-plantilla-de-productos-y-skus)

> ℹ️ Aprende a gestionar manualmente tus productos y SKUs en el Admin VTEX consultando los artículos [Agregar o editar productos](/es/docs/tutorials/agregar-o-editar-productos) y [Agregar o editar SKUs](/es/docs/tutorials/agregar-o-editar-skus). Para información sobre [integraciones de backend con ERP](/es/docs/tracks/integraciones-de-backend), consulta la guía <a hef="https://developers.vtex.com/docs/guides/erp-integration-guide">Back office integration guide (ERP/PIM/WMS)</a>.

## Importar productos y SKUs mediante plantilla

Para importar productos y SKUs a partir de una plantilla sigue los pasos a continuación:

 1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/docs/tutorials/productos-y-skus) en la barra de búsqueda en la parte superior de la página.
 2. En la parte superior de la página, haz clic en `Importar`.
 3. Haz clic en `Productos y SKUs`.
 4. En la ventana modal haz clic en **Descargar modelo de plantilla** para obtener el archivo.
 5. Llena los datos de la plantilla, tal como se indica en la sección [Campos de la plantilla de productos y SKUs](#campos-de-la-plantilla-de-productos-y-skus).
 6. Agrega la plantilla con extensión `.xls` o `.xlsx`. Puedes arrastrar el archivo y soltarlo en el área indicada, o hacer clic en la ventana modal y seleccionar el archivo desde tu dispositivo.
 7. Haz clic en `Importar`.

  > ❗ El tiempo de la operación dependerá del volumen de información que se esté procesando. La importación seguirá en curso aunque navegues a otra página.

Mientras la operación esté en curso, se mostrará un mensaje indicando que el archivo se está procesando. Al finalizar, verás el mensaje "Productos y SKUs importados con éxito", y recibirás un email de confirmación.

## Exportar productos y SKUs mediante plantilla

Para exportar un archivo `.xlsx` con información sobre tus productos y SKUs sigue los pasos a continuación:

> ℹ️ La información exportada corresponde a los campos presentados en la sección [Campos de la plantilla de productos y SKUs](#campos-de-la-plantilla-de-productos-y-skus).

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/docs/tutorials/productos-y-skus) en la barra de búsqueda en la parte superior de la página.
2. (Opcional) Si deseas exportar determinados productos y SKUs, [busca](/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By#buscar-productos) o [filtra](/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By#filtrar-productos) los ítems deseados. Este paso no es necesario para exportar todos los productos y/o SKUs.
3. En la parte superior de la página, haz clic en `Exportar`.

  > ⚠️ El límite de exportación es de 100.000 productos.
  
4. Haz clic en `Productos y SKUs`.
5. En la ventana modal de exportación selecciona el ícono correspondiente a los **Campos de producto** y/o **Campos de SKU**, según lo deseado. Los campos obligatorios no pueden deseleccionarse.

  > ⚠️ Solo podrán importarse plantillas que se hayan exportado con todos los campos.

6. Haz clic en `Exportar`.

Mientras la operación esté en curso, se mostrará un mensaje indicando que el archivo se está procesando. La operación seguirá en curso aunque navegues a otra página. Puedes seguir el progreso de la exportación a través de la ventana modal que se abrirá en la página, como se describe en la siguiente sección.

Tras finalizar la exportación recibirás un email con un link para descargar el archivo. El plazo para descargar por el link es de un día; después de este periodo el link expira. También puedes descargar el archivo desde la ventana modal que se abre en la página.

## Ventana de seguimiento de la exportación

Mientras se procesa la exportación, la página [Productos y SKUs](/es/docs/tutorials/productos-y-skus) mostrará una ventana en la parte inferior, como se ilustra en la imagen a continuación:

![export-es-loading](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/cat%C3%A1logo-beta/importar-y-exportar-productos-y-skus-mediante-plantilla-beta_1.png)

* **Exportaciones 1:** informa el número de exportaciones que se están realizando, en este caso, solo una.
* **Ícono de carga:** indica que la operación de exportación está en curso.
* **Productos y SKUs:** identifica el tipo de exportación. Otros tipos de exportación disponibles son [especificaciones de productos](/es/docs/tutorials/importar-y-exportar-especificaciones-de-productos-mediante-plantilla-beta), [especificaciones de SKUs](/es/docs/tutorials/importar-y-exportar-especificaciones-de-skus-mediante-plantilla-beta) e [imágenes de productos y SKUs](/es/docs/tutorials/importar-y-exportar-imagenes-de-productos-y-skus-mediante-plantilla-beta).
* **Fecha y hora:** muestra la hora de inicio de la exportación, en el formato `DD-MM-AAAA - hh:mm`.
* **Número en la tag azul:** informa la cantidad de ítems que se están exportando. 
* **(Opcional) Ícono flecha hacia abajo** <i class="fas fa-angle-down" aria-hidden="true"></i>: se muestra únicamente cuando hay más de una exportación en curso. Al hacer clic, la ventana de exportaciones se minimiza; la puedes volver a expandir después.
* **Ícono cerrar** <i class="fas fa-times" aria-hidden="true"></i>: al hacer clic se cierra la ventana, pero no afecta la exportación en curso.
* **Ícono cancelar** <i class="far fa-times-circle" aria-hidden="true"></i>: al hacer clic se cancela la exportación.

Después de que la operación termina, la ventana presenta los siguientes cambios:

![export-es-done](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/cat%C3%A1logo-beta/importar-y-exportar-productos-y-skus-mediante-plantilla-beta_2.png)

* **Ícono verde:** indica que la exportación ha finalizado.
* **Ícono cerrar** <i class="fas fa-times" aria-hidden="true"></i>: al hacer clic se cierra la ventana, sin opción de volver a expandirla.
* **Ícono de descarga** <i class="fas fa-download" aria-hidden="true"></i>: al hacer clic se descarga el archivo `.xlsx` en el dispositivo.

## Campos de la plantilla de productos y SKUs

La siguiente tabla presenta la descripción y el ejemplo de valor de los campos de la plantilla de importación de productos y SKUs. Los campos obligatorios están marcados con un asterisco (*).

| Campo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| ID Producto | Número único de identificación del producto. Si este campo ya está completado no se puede modificar. Para agregar un nuevo producto deja el campo vacío. | 310117603 |
| Nombre Producto* | Nombre del producto presentado a los clientes en la experiencia de navegación, puede tener hasta 150 caracteres. Por cuestiones de [SEO](/es/docs/tutorials/mejorar-el-seo-de-las-paginas-de-lista-de-productos), recomendamos:<ul><li>✅ Utilizar palabras simples</li><li>❌ Evitar otros idiomas</li><li>❌ Evitar ortografía compleja</li></ul> | Camiseta de algodón |
| Producto activo | Indica si el [status del producto](/es/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-por-status) será activo o inactivo. Este campo no se puede editar desde la plantilla, debe dejarse vacío. | (Deja el campo vacío) |
| Descripción | Texto con información general sobre el producto. Ya que este contenido se muestra a los clientes en la vitrina de la tienda, recomendamos crear un resumen simple y fácil de entender. | Modelo con cuello redondo y manga corta. |
| Descripción adicional | Contenido adicional del producto, como información resumida. Recomendamos no superar los 150 caracteres, para que los buscadores muestren el texto completo en las páginas de resultados. | Material 70% reciclado |
| ID Marca* | Código numérico que identifica la [marca](/es/docs/tutorials/que-es-una-marca) del producto. Esta información se puede encontrar en el Admin VTEX, en **Catálogo > Marcas**, o usando el endpoint [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list). | 2000003 |
| Marca | Nombre de la [marca](/es/docs/tutorials/que-es-una-marca) del producto. Una vez completado, este campo no se puede editar. | AOC |
| ID Departamento | Código numérico que identifica la categoría de mayor nivel jerárquico del producto. Este campo no se puede editar en la plantilla; para agregar un nuevo producto, deja el campo vacío. | 1000014 |
| Departamento | Nombre de la categoría de mayor nivel jerárquico del producto. | Ropa |
| ID Categoría* | Número identificador único de la categoría de menor nivel jerárquico del producto. Esta información se puede encontrar en el Admin VTEX, en **Catálogo > Categorías**, o usando el endpoint [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-). | 1000014 |
| Categoría | Nombre relacionado con la categoría de menor nivel jerárquico del producto. Puedes mover el producto de una categoría a otra. | Blusas |
| Políticas comerciales | Número único identificador de la [política comercial](/es/docs/tutorials/crear-una-politica-comercial). Esta información se puede encontrar en el Admin VTEX, en **Configuración de la tienda > Políticas comerciales**. Para incluir varias políticas comerciales, separa los números con coma sin espacios. | 1,2,7 |
| ID Categoría Global | Código de identificación de la [categoría global](/es/docs/tutorials/configurando-a-categoria-global) del producto, es decir, la taxonomía de Google utilizada en el [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=es-es), predefinida como un árbol único en la plataforma VTEX. Este campo es importante para fines de [SEO](/es/docs/tutorials/mejorar-el-seo-de-las-paginas-de-lista-de-productos). | 166 |
| Categoría global | Nombre de la [categoría global](/es/docs/tutorials/configurando-a-categoria-global). | Ropa y accesorios |
| Título de la página | Nombre que se mostrará tanto en la página de detalles del producto (PDP) como en la pestaña del navegador. Este campo es importante para fines de SEO. No pueden superarse los 150 caracteres. | Camiseta azul cuello redondo |
| Metadescripción | Breve descripción del producto. Se recomienda usar menos de 160 caracteres. Esto permite que los buscadores presenten la descripción de manera correcta en las páginas de resultados. | Camiseta azul cuello redondo de poliéster y lycra confeccionada con 70% de material reciclado |
| Mostrar en el sitio web* | Si deseas que el producto sea visible en la vitrina, llena con `sí`. Si prefieres que se mantenga oculto, llena con `no`. | sí |
| Mostrar cuando no hay stock* | Si deseas que el producto sin stock se muestre en la vitrina, llena con `sí`. Esto permite utilizar la opción [Avísame](/es/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e#) para que el cliente ingrese su email y recibe una notificación cuando el producto esté disponible nuevamente. Si prefieres que el producto sin stock se oculte en la vitrina, llena con `no`. | no |
| Fecha de lanzamiento | Fecha y hora en que el producto estará disponible para la venta. Este campo ayuda a ordenar los resultados de búsqueda del sitio web, influye en la creación de [colecciones automáticas](/es/docs/tutorials/registrar-colecciones-beta) y determina la fecha de indexación del producto. El formato permitido es `AAAA-MM-DD`. | 2025-11-25 |
| Palabras sustitutas | Sinónimos del nombre del producto, que permiten búsquedas más amplias. El límite es de 8000 caracteres, incluyendo caracteres especiales. Para agregar varias palabras, sepáralas con comas sin espacios. | camisa,blusa |
| Código de referencia Producto | Código de referencia único del producto, utilizado internamente por la tienda. Para llenar este campo, usa una combinación única de letras y/o números. | 68ce4_azul |
| Código fiscal | Secuencia numérica que identifica el producto. | 84509010 |
| ID SKU | Código numérico único que identifica el SKU. Si este campo ya está completado no se puede modificar. Para agregar un nuevo producto deja el campo vacío. | 310119261 |
| Nombre SKU* | Nombre del SKU, es decir, lo que identifica la variación del producto. | M |
| Activar SKU si es posible* | Si deseas la activación automática del SKU después de verificar los [requisitos de disponibilidad](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web), llena con `sí`. Si no deseas que se active, llena con `no`. | sí |
| SKU Activo | Este campo define si el SKU está activo (`sí`) o inactivo (`no`). El campo no permite modificación y solo se utiliza para consulta. | no |
| Kit | Este campo define si el SKU es un [kit](/es/docs/tutorials/que-es-un-kit). La acción de convertir un SKU en kit es irreversible. Si vas a crear un nuevo SKU, deja el campo vacío. | |
| Código Referencia SKU | Código de referencia único del SKU, creado para ayudar en la gestión del catálogo. Una vez creado, no se puede modificar desde la plantilla.Este campo es obligatorio a menos que se haya llenado el campo **EAN/UPC**. | |
| EAN/UPC | El EAN (European Article Number) y el UPC (Universal Product Code) son códigos de identificación internacionales y corresponden al código de barras del ítem. Cada SKU puede estar asociado únicamente a uno de estos códigos. La principal diferencia entre ambos radica en la cantidad de caracteres: el EAN contiene 13 dígitos alfanuméricos, mientras que el UPC tiene 12.Este campo es obligatorio a menos que el campo **Código Referencia SKU** haya sido llenado. | 8456971345604 |
| Código de fabricante | Código proporcionado por el fabricante para identificar el SKU. Si un SKU tiene un código específico, este campo debe llenarse. | 7154-azul |
| Peso del paquete* | Valor absoluto del peso del paquete. | 0.8 |
| Anchura del paquete* | Valor absoluto de la anchura del paquete. | 12 |
| Altura del paquete* | Valor absoluto de la altura del paquete. | 5 |
| Longitud del paquete* | Valor absoluto de la longitud del paquete. | 25 |
| Peso real | Valor absoluto del peso del producto, sin incluir empaques. | 0.6 |
| Anchura real | Valor absoluto de la anchura del producto, sin incluir empaques. | 0.1 |
| Altura real | Valor absoluto de la altura del producto, sin incluir empaques. | 1.2 |
| Longitud real | Valor absoluto de la longitud del producto, sin incluir empaques. | 0.9 |
| Peso cúbico | El sistema ya no utiliza este campo y debe dejarse vacío. | (Campo obsoleto, dejar vacío) |
| Unidad de medida* | Identificación de la unidad de medida utilizada para el recuento de ítems en stock. En general, debe llenarse con `un`, referente a unidad. Utiliza un valor diferente solo si es necesario convertir la unidad de medida para la venta. Los valores pueden ser:<ul><li>un: unidad</li><li>kg: kilogramo</li><li>g: gramo</li><li>mg: miligramo</li><li>m: metro</li><li>m²: metro cuadrado</li><li>m³: metro cúbico</li><li>cm: centímetro</li><li>cm²: centímetro cuadrado</li><li>cm³: centímetro cúbico</li><li>mm: milímetro</li><li>mm²: milímetro cuadrado</li><li>mm³: milímetro cúbico</li><li>oz: onza</li><li>lb: libra</li><li>ft: pie</li><li>ft²: pie cuadrado</li><li>ft³: pie cúbico</li><li>in: pulgada</li><li>in²: pulgada cuadrada</li><li>in³: pulgada cúbica</li></ul> | un |
| Multiplicador de unidad* | Valor numérico por el que se multiplicará el SKU para definir la cantidad en el carrito. Por ejemplo, un multiplicador de 5 significa que cada SKU representa 5 ítems en el carrito y solo permite compras en múltiplos de 5 como, por ejemplo, 10 o 15 ítems. Los valores de fracciones se pueden separar con punto o coma. Por ejemplo, medio kilogramo se puede indicar como 0.5 o 0,5. | 1 |
| Condición comercial | Código numérico único identificador de la [condición comercial](/es/docs/tutorials/registrar-condicion-comercial), que define las promociones o [condiciones de pago](/es/docs/tutorials/diferencia-entre-medios-de-pago-y-condiciones-de-pago) que deben aplicarse al SKU. | Predeterminado |
| Valor fidelidad | Crédito que el cliente recibe al comprar 1 unidad de determinado SKU. Por ejemplo, si llenas este campo con un valor de 1.00 USD, los clientes que compren este SKU obtendrán un crédito de 1.00 USD en la tienda para compras futuras. Este campo debe llenarse con valores decimales de la moneda predeterminada de la tienda. | 49.90 |
| Fecha de preventa | Fecha de preventa asignada al SKU. La fecha de preventa es la fecha prevista en que el ítem llegará a las tiendas y estará disponible para la venta. Para configurarla, debes tomar en cuenta la fecha de lanzamiento del ítem y el [cálculo de envío](/es/docs/tutorials/como-funciona-el-calculo-del-envio) a los clientes. El formato permitido es `AAAA-MM-DD`. | 2025-10-30 |
| Anexos | Nombre del [anexo](/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) que el cliente puede seleccionar como personalización del SKU. | Personalizar nombre |
| Accesorios | Ítems sugeridos como opciones que complementan la venta. Para agregar un ítem [accesorio](/es/docs/tutorials/configurar-producto-similar-sugerencias-accesorios-y-genericos), incluye el ID de SKU. Si deseas incluir varios SKUs, sepáralos con una coma sin espacios. | 320221270 |
| Sugerencias | Ítems que se muestran como sugerencias de compra. Para agregar un ítem como [sugerencia](/es/docs/tutorials/configurar-producto-similar-sugerencias-accesorios-y-genericos), incluye el ID de SKU. Si deseas incluir varios SKUs, sepáralos con una coma sin espacios. | 320221279,320221280 |
| Productos similares | Ítems que se ofrecen como alternativa de compra o que guardan similitud con el producto principal. Para agregar un ítem [similar](/es/docs/tutorials/configurar-producto-similar-sugerencias-accesorios-y-genericos), incluye el ID de SKU correspondiente. Si deseas incluir varios SKUs, sepáralos con una coma sin espacios. | 320221284 |
| Mostrar juntos | Ítems sugeridos para adquirirse conjuntamente con el producto principal. Si deseas agregar un ítem para [mostrar juntos](/es/docs/tutorials/configurar-producto-similar-sugerencias-accesorios-y-genericos), incluye el ID de SKU correspondiente. Si deseas incluir varios SKUs, sepáralos con una coma sin espacios. | 320221293,320221294 |

## Más información

* [Importar y exportar especificaciones de productos mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-especificaciones-de-productos-mediante-plantilla-beta)
* [Importar y exportar especificaciones de SKUs mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-especificaciones-de-skus-mediante-plantilla-beta)
* [Importar y exportar imágenes de productos y SKUs mediante plantilla (Beta)](/es/docs/tutorials/importar-y-exportar-imagenes-de-productos-y-skus-mediante-plantilla-beta)

