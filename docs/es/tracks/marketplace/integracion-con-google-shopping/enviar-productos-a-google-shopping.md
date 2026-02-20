---
title: 'Enviar productos a Google Shopping'
id: 5L5LnccDCj5lJk8H95GQ82
status: PUBLISHED
createdAt: 2021-04-15T14:10:45.645Z
updatedAt: 2025-09-08T17:53:08.339Z
publishedAt: 2025-09-08T17:53:08.339Z
firstPublishedAt: 2021-04-15T17:41:23.772Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-google-shopping
locale: es
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integracion-con-google-shopping
order: 7
---

En Google Shopping, solamente los [catálogos](/es/docs/tracks/catalogo-definicion-de-concepto) se integran. A diferencia de otras integraciones, **no es necesario mapear los productos mediante una plantilla.**

## Reindexar la base

Después de configurar la integración y autenticar su cuenta, el envío de productos al _marketplace_ no es automático sino que será necesario que el _seller_ [reindexe la base](/es/tutorial/entendendo-o-funcionamento-da-indexacao). Este proceso prepara los datos de los SKU y de los productos y envía al _marketplace_ la información general sobre el catálogo, los precios y el _stock_. 

> ℹ️ Solo el [usuario titular (owner)](/es/docs/tracks/que-es-el-usuario-master) tiene permiso para reindexar la base de una tienda VTEX. Durante el periodo de reindexación, que es variable, los productos ingresan en una fila para que se actualicen los datos, pero siguen disponibles para la venta en el sitio web de la tienda.

Para reindexar la base, copia en tu navegador la dirección a continuación y reemplaza {nombredelatienda} por el nombre de tu tienda:  
`{nombredelatienda}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Cuando accedas a esta dirección, haz clic en el botón Reindexar base. Puedes seguir el proceso a través del Admin VTEX, en **Catálogo > Informes.**

### Comprobar la indexación

Puedes verificar si un SKU específico se ha indexado correctamente en la política comercial de la integración. Para definir un límite sigue los pasos a continuación:  

1. En el Admin VTEX, accede a Catálogo > Productos y SKUs.  
2. En la fila del producto, haz clic en el botón menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.  
3. Selecciona la opción `Ver detalles de indexación`.  
4. Comprueba el status de cada SKU.  

Consulta a continuación los mensajes de cada status de indexación:  

| **Status** | **Tipo de mensaje** |
|---|---|
| SKU indexados | Sku: 70 - tenis amarillos variación Sales Channel: 1 Sku: 70 Price: 1740.00 Stock: 1 Quantity Sold last month SalesChannel: 1, Sales: 0 |
| SKU no indexados | Sku: 112 - tenis azules variación Sales Channel: 1 Sku: 112 Sku is UNAVAILABLE - check price and stock, Checkout Info: Code: withoutStock \| Status:error \| Message: el ítem Tenis Action - Masculino - Marino/plateado tenis amarillos variación sin stock Quantity Sold last month SalesChannel: 1, Sales: -1 |

## Aprobación de productos

Cuando Google aprueba tus productos, estos se activan automáticamente y comenzarán a aparecer en los anuncios de Google Shopping.

Algún producto podrá mostrar el error Insertion error: Ineligible SKU. Este mensaje significa que el producto no es elegible para la integración. Los productos pueden no ser elegibles por las siguientes razones:  

- El producto no tiene precio.
- El producto no tiene imagen.
- El producto no tiene _stock_ y se configuró para que se excluya cuando no tenga _stock_.

**Si algún producto es rechazado, debe revisar los datos y enviarlos nuevamente**. Puede realizar un seguimiento del status de sus productos en Google Merchant Center.

> ℹ️ Asegúrese de que sus productos cumplen con las [Especificaciones de datos de productos](https://support.google.com/merchants/answer/7052112?visit_id=637492777706451215-3729304881&rd=1&hl=es-419) definidas por Google. Si algún producto no cumple con los requisitos, el anuncio será rechazado.

En algunas circunstancias el rechazo del producto sucede después de que se ha considerado como activo. A veces esto ocurre cuando una cuenta ha sido creada recientemente.

| **SEPA MÁS** |
| ---------- |
|Vea otras razones para el rechazo de productos en el artículo de Google [Información sobre el rechazo de productos debido a infracciones de calidad de los datos de producto.](https://support.google.com/merchants/answer/9227009?hl=es-419)|

## Actualizar los datos del producto

En Google Shopping, los productos caducan automáticamente si no se actualizan en un plazo de 30 días. Esto incluye cualquier tipo de cambio, ya sea precio, _stock_ o especificación.

Sin embargo, no es algo que le deba preocupar ya que en la integración con la plataforma VTEX, **el sistema actualiza los productos automáticamente cada 29 días.**

> ℹ️ Puede haber un retraso de hasta 30 minutos entre que se procesa el cambio de los datos de un producto y la actualización en el _feed_.

## Uso de etiquetas personalizadas

Además de la información básica del producto, puedes enviar etiquetas personalizadas a Google Shopping. Este recurso se llama *etiquetas personalizadas* y permite clasificar ofertas basadas en criterios definidos por ti, como campañas promocionales, estacionalidad, márgenes o público objetivo.  

Las *etiquetas* son útiles para:  

- Organizar campañas de Google Ads.  
- Crear filtros personalizados para informes.  
- Optimizar la segmentación y el desempeño de los anuncios.  

### Configurar etiquetas personalizadas 

Debes crear las *etiquetas personalizadas* en Google Merchant Center. Después de crearlas, sigue el tutorial [Registrar especificaciones o campos de producto](/es/docs/tutorials/registrar-especificaciones-o-campos-de-producto) para asociarlas a una oferta específica utilizando **especificaciones de productos.**  

Al crear un nuevo campo de especificación, completa los valores de la siguiente manera:  

| **Campo** | **Valor** |
|:---: | :---: |
| Nombre del campo de la especificación | `googleshopping-labels`|
|Tipo de campo | Radio |

Después de crear el nuevo campo de especificación, el siguiente paso es asociar las etiquetas personalizadas a las ofertas correspondientes siguiendo los pasos a continuación:  

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.  
2. En la fila del producto, haz clic en el botón menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> .  
3. Haz clic en **Editar producto.**  
4. Llena el campo `googleshopping-labels` con los valores deseados, separándolos con punto y coma `;`.  
5. Haz clic en `Guardar`.  

> ⚠️ Cada oferta puede tener un máximo de cinco etiquetas asociadas.  

## Modificar la categorización automática

Después de que se complete la integración, sus productos se categorizarán automáticamente. Sin embargo, algunas veces puede haber un producto rechazado porque Google considera que **la categoría que se le atribuyó no es la correcta.**

>Ejemplo: difusión de anuncios de bebidas alcohólicas.

Pero antes de considerar un problema en la categorización, asegúrese de que sus productos cumplen con la política de Google para [bebidas alcohólicas](https://support.google.com/merchants/answer/6150139?hl=es-419#zippy=,bebidas-alco%C3%B3licas).

Para reemplazar una categoría incorrecta y asegurarse de que el producto sea aprobado, consulte las instrucciones en el artículo de Google [categoría producto Google](https://support.google.com/merchants/answer/6324436?hl=es-419). 

> ⚠️ Google aceptará un cambio de categoría solo en las situaciones previstas en el artículo [categoría producto Google.](https://support.google.com/merchants/answer/6324436?hl=pt-BR)
