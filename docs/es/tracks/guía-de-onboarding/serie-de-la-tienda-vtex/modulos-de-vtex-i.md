---
title: 'Módulos de VTEX I'
id: 75MX4aorniD0BYAB8Nwbo7
status: PUBLISHED
createdAt: 2024-01-17T19:53:53.326Z
updatedAt: 2025-01-13T14:57:00.646Z
publishedAt: 2025-01-13T14:57:00.646Z
firstPublishedAt: 2024-02-22T14:07:05.427Z
contentType: trackArticle
productTeam: Others
slugEN: vtex-modules-i
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: serie-de-la-tienda-vtex
order: 5
---

La plataforma VTEX se compone de diferentes módulos, cada uno responsable de una faceta específica de la operación de la tienda. Este artículo presenta una visión general y las principales configuraciones de los siguientes módulos:

- [Catálogo](#catalogo)
- [Precios](#precios)
- [Promociones](#promociones)
- [Logística](#logistica)

> ℹ️ El artículo [Módulos de VTEX II](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ) presenta los módulos [Pagos](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagos), [Pedidos](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pedidos), y [Checkout](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#checkout).

## Catálogo

[Catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) es el módulo de VTEX mediante el cual los retailers configuran sus productos, poniéndolos a disposición en el sitio web de la tienda. La estructura del catálogo define la experiencia de compra del cliente en la tienda online, cuando este navega por las categorías de clasificación de los productos. En la guía [Catalog](https://developers.vtex.com/docs/guides/catalog-overview), los desarrolladores pueden consultar una [visión general del módulo Catálogo](/es/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe) que abarca la [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api).

### Antes de comenzar en Catálogo

No se requieren ajustes preliminares antes de realizar configuraciones en Catálogo, no obstante, los siguientes puntos deben tenerse en cuenta:

- __Navegación del cliente en el sitio web__: es importante que la tienda planifique cómo quiere organizar su [árbol de categorías](#arbol-de-categorias) y saber de antemano la experiencia de navegación que quiere proporcionar a los clientes en la jerarquía de categorías.
- __Disponibilizar productos para clientes__: para [que un producto esté disponible en la tienda](/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382), después de realizar la configuración de Catálogo, el SKU debe tener un [precio](#precios) registrado y [logística](#logistica) para envío. Además, el CMS de la tienda debe estar correctamente configurado.

### Arquitectura de Catálogo

La arquitectura de Catálogo presenta algunos conceptos fundamentales: categoría, marca, producto, SKU (_Stock Keeping Unit_) y especificación. La siguiente imagen ilustra la relación entre estos conceptos:

![arquitetura-catalogo-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/modulos-de-vtex-i_1.png)

El catálogo de la tienda debe crearse siguiendo el orden de los pasos que se indican a continuación:

1. Creación del [árbol de categorías](#arbol-de-categorias).
2. Registro de [Marcas](#marcas).
3. Registro de [Especificaciones](#especificaciones).
4. Importación de [Productos](#productos).
5. Importación de [SKUs](#skus).

La siguiente tabla muestra los principales ajustes de Catálogo para la tienda, según el orden de creación:

| **Tema** | **Configuración en el Admin VTEX** | **Configuración por API** |
| :--- | :--- | :--- |
| 1. [Árbol de categorias](/es/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) | [Registrar categoría](/es/tutorial/cadastrando-categoria--tutorials_206) | - [Categories](https://developers.vtex.com/docs/guides/categories) <br> - [Create Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category) |
| 2. [Marcas](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) | [Registrar marcas](/es/tutorial/cadastrando-marcas--tutorials_1414) | - [Brands](https://developers.vtex.com/docs/guides/brands) <br> - [Create Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand) |
| 3.1. [Especificaciones de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-producto) | [Registrar especificaciones o campos de producto](/es/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) | - [Product specifications](https://developers.vtex.com/docs/guides/product-specifications) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 3.2. [Especificaciones de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-sku) | [Registrar especificaciones o campos de SKU](/es/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119) | - [SKU specifications](https://developers.vtex.com/docs/guides/sku-specifications) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 4. [Productos](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) | [Registrar productos](/es/tutorial/cadastrando-produtos--tutorials_2567) | - [Products](https://developers.vtex.com/docs/guides/products) <br> - [Create Product with Category and Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product) |
| 5. [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) | [Rellenar campos de registro de SKU](/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) | - [SKUs](https://developers.vtex.com/docs/guides/skus) <br> - [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit) |

<br>

> ⚠️ Puedes obtener información detallada sobre la importación de productos a la plataforma VTEX desde un sistema ERP (Enterprise Resource Planning) o PIM (Product Information Manager) consultando el artículo [Integraciones de backend](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu).

#### Árbol de categorías

El [árbol de categorías](/es/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) define la estructura básica del catálogo. Las categorías actúan como niveles jerárquicos de clasificación de productos, simplificando la búsqueda del cliente y manteniendo el catálogo de la tienda organizado.

Recomendamos crear una jerarquía de hasta tres niveles, incluyendo [Departamentos](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#departamento), [Categorías](/es/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categorias) y [Subcategorias](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#subcategoria). Sin embargo, algunas tiendas pueden beneficiarse de una estructura de solamente dos niveles, con departamentos y categorías. Esto depende de la complejidad de la operación y de los tipos de productos ofrecidos.

__Ejemplo__: Departamento `Femenino`, Categoría `Blusas y camisas` y Subcategoría `Camisetas`.

Antes de importar el catálogo de la tienda a VTEX, recomendamos empezar a trabajar en el árbol de categorías creando una tabla como la que se ilustra a continuación. Esto facilita la visualización de la estructura del árbol y la presentación de las especificaciones.

![catalog_arquitecture_table_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/modulos-de-vtex-i_2.png)

> ℹ️ En el artículo [Integraciones de backend](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) puedes consultar más información sobre cómo importar especificaciones para back office.

#### Marcas

Las [Marcas](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) identifican a la empresa que crea o revende productos. En VTEX, las marcas deben registrarse de forma independiente, y al crear un producto, es obligatorio asociarlo a una marca ya registrada en la tienda.

#### Especificaciones

Las [especificaciones](/es/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) son propiedades adicionales que se pueden asignar a los productos y SKU de la tienda, como tamaño, color, voltaje o material. Es decir, existen [especificações de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-producto) y [especificaciones de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-sku).

En el __Catálogo__ de VTEX, las especificaciones se crean en el siguiente orden:

1. __Grupos de especificaciones__: son agregadores de campos de especificación. Deben estar asociados a categorías. Es habitual que solo se cree un grupo a nivel raíz y que todos los campos de especificación se asocien a este grupo.
2. __Campos de especificación__: son los campos que contendrán información adicional del producto y SKU. Deben estar asociados a categorías y grupos de especificaciones.
3. __Valores de especificación__: son valores que puedes agregar a campos de especificación.

Las especificaciones siguen la jerarquía del catálogo, por lo que cuando se crea uno de estos grupos en un departamento o categoría, se reproduce en los niveles inferiores.

#### Productos

El [Producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) es el nivel de organización del catálogo que se encuentra en la jerarquía por debajo de las categorías y por encima de los SKU. Como el producto está por encima del SKU en la jerarquía del catálogo, podemos entenderlo como una definición genérica de los ítems que se venden en tu tienda. Un producto debe tener obligatoriamente al menos un SKU asociado.

#### SKUs

El [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) (_Stock Keeping Unit_) es una variación del producto y representa la unidad física en stock que adquiere el cliente. Además, representa el último nivel en la organización de un catálogo, y para que esté activo requiere contar con una imagen y que sus especificaciones estén completas.

### Ajustes opcionales de Catálogo

La siguiente tabla muestra los ajustes opcionales de Catálogo en VTEX:

| **Funcionalidad** | **Descripción** | **Más información** |
| :---: | :--- | :--- |
| Colecciones | Una colección es la agrupación de dos o más productos que pueden compartir o no características específicas. <br> Se pueden crear colecciones para asociar productos en función de diversos criterios, como fechas conmemorativas, lanzamientos o productos más vendidos. | __Help Center__ <br> - [Colecciones - Definición del concepto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca) <br> - [Registrar colecciones (beta)](/es/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye)  <br> __Developer Portal__  <br> - [Create Collection](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/) <br> - [Get All Inactive Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/inactive) <br> - [Get All Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search) <br> - [Get Collections by search terms](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search/-searchTerms-) <br> - [Import File Example](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/stockkeepingunit/importfileexample) <br> - [Add products to Collection by imported file](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/-collectionId-/stockkeepingunit/importinsert) |
| Anexos | Un anexo es una personalización opcional y gratuita del producto que se utiliza para añadir información a un SKU. | __Help Center__ <br> - [Registrar un anexo](/es/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU) <br> - [Cómo crear un anexo de suscripción](/es/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK) <br> - [¿Qué es un anexo?](/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm)  <br> __Developer Portal__ <br> - [Catalog API - Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/attachment/-attachmentid-) <br> - [Catalog API - SKU attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment) |
| Assembly Options | Assembly Options es un tipo de anexo para casos complejos, como la personalización de productos, en los que es necesario gestionar diferentes combinaciones de productos, cantidad, ítems adicionales, costos y stock, y mostrar estas opciones en la página de producto. | __Developer Portal__ <br> - [Assembly Options](/es/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) <br> - [Assembly Option App](https://developers.vtex.com/docs/guides/assembly-options-app) |
| Servicios | Servicio con costo adicional que puede ofrecerse con un producto como opcional. Se utiliza para agregar un servicio adicional a un SKU, como embalaje para regalo, personalización o acuerdos de garantía especial. | __Help Center__ <br> - [¿Qué es un servicio?](/es/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y) <br> - [Gestión de servicios](/es/tutorial/gerenciamento-de-servicos--3sGqSI93t878ETAWzCZ0E2) <br> - [Importación de servicios](/es/tutorial/importacao-de-servicos--2LRgMnGbX0af7krrs6tXy3) <br> - [Informe de servicios](/es/tutorial/relatorio-de-servicos--7djPWfxtf9qb6hFTOgKDE8) <br> - [Programación de servicios](/es/tutorial/agendamento-de-servicos--78HPYBxDCmpCfa8i40zo7R)  <br> __Developer Portal__ <br> - [Catalog API - SKU service](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-) <br> - [Catalog API - SKU service attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetypeattachment) <br> - [Catalog API - SKU service type](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype) <br> - [Catalog API - SKU service value](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicevalue) |
| Kits | Un kit es un conjunto de SKU que se venden juntos, es decir, un SKU compuesto por uno o más SKU. | __Help Center__ <br> - [¿Qué es un kit?](/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28) <br> - [Registrar kit](/es/tutorial/cadastrando-kit--tutorials_215) <br> __Developer Portal__ <br> - [Catalog API - SKU Kit](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-kit) |

## Precios

[Precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) es el módulo de VTEX responsable de crear, editar y almacenar los datos de precios de los SKU de la tienda. Para que un producto se venda, el cliente necesita saber cuánto cuesta cada ítem mostrado en la tienda. El módulo Precios tiene funcionalidades que permiten el uso de diferentes estrategias de precios en tu negocio.

### Antes de comenzar en Precios

Antes de configurar los precios de la tienda, hay que registrar en [Catálogo](#catalogo) los productos que se venderán. El catálogo de la tienda debe contener [categorias](/es/tutorial/cadastrando-categoria--tutorials_206), [marcas](/es/tutorial/cadastrando-marcas--tutorials_1414), [productos](/es/tutorial/cadastrando-produtos--tutorials_2567) y [SKUs](/es/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) activos. Si el registro del catálogo se realizó mediante una [integración con un sistema ERP](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#integracion-con-erp), es muy importante confirmar que la información esté correcta antes de continuar. 

### Cómo funciona el módulo Precios

En la siguiente tabla se presentan los principales términos relacionados con el módulo:

| **Término** | **Definición** |
| :---: | :--- |
| Precios | Información de los valores de venta de los SKU de la tienda. |
| [Tablas de precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) | Conjunto de precios de los SKU que se pueden aplicar en un determinado contexto, como una [política comercial](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Las tablas almacenan la información de los precios que se muestran en el storefront de la tienda. |
| Precio de costo | Precio pagado por la tienda para adquirir el SKU. |
| Markup | Margen de beneficio que la tienda desea obtener con la venta del SKU. |
| [Precio base](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#definicion) | Valor calculado al combinar el __precio de costo__ y el __markup__. Este es el precio de referencia de un SKU en todas las tablas de precios. |
| [Precio de lista](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) | Precio de venta sugerido para un SKU. Este precio se mostrará en la página de producto como el precio __De__, mientras que el precio base será el precio __Por__. |
| [Regla de precio](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) | Modifica el precio de un SKU en una sola tabla de precios sin cambiar el precio base en las demás. Para que funcione, se debe registrar una regla de precio asociada a la tabla deseada. |
| [Precio fijo](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#definiciones) | Precio con prioridad sobre todas las demás configuraciones de precios presentes en una tabla de precios.  |
| [Redondeo de precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1tUIUvF6BUkDgMsknGaMkF#definiciones) | Estrategia de precios que se basa en el redondeo de precios. El objetivo de este método es influenciar la decisión de compra del consumidor al mostrar precios en un formato más fácil e intuitivo. |
| [Bloqueo de precio](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7JZhLmI3mjBVu0RMOueoy3#definicion) | Determina las variaciones máximas y mínimas del precio de un ítem. Esta funcionalidad garantiza que los precios de los SKU no cambien a valores indeseados. |

Puedes consultar más información sobre la arquitectura de precios en el artículo [Arquitectura del sistema de precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx).

### Registrar tabla de precios

La arquitectura del módulo Precios se basa en tres conceptos fundamentales:

- Precios
- Tablas de precios
- Contextos de aplicación de las tablas de precios

Los precios son la información del valor de venta de tus SKU. Estos precios se almacenan en tablas de precios. A su vez, estas tablas de precios pueden aplicarse a distintos contextos.

La relación entre los precios, la tabla de precios y el contexto que se aplicará se muestra en la siguiente imagen:

![Conceito de Precios-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/modulos-de-vtex-i_3.png)

Puedes registrar tablas de precios para los SKU de la tienda de tres maneras:

- [Admin VTEX](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/2WQ3pVYfQpXkJnHr7VTFBv#admin)
- [Plantilla](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [API](https://developers.vtex.com/docs/api-reference/pricing-api)

Los precios se pueden programar para eventos especiales, como se describe en el artículo [Programación de precios](/es/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk).

### Relación entre tablas de precios y políticas comerciales

Existe una diferencia entre las tablas de precios creadas para [políticas comerciales](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) y las creadas para otros contextos.

Las listas de precios no asociadas a políticas comerciales pueden utilizarse en contextos como __promociones__ y __clústeres de clientes__. Las tablas creadas para políticas comerciales solo pueden asociarse a la propia política comercial. Así, la tabla de precios asociada a una política comercial informa el precio de los SKU de esa política y no puede asociarse a otros contextos.

> ⚠️ Los conceptos de **tabla de precios** y [política comercial](LINK) son diferentes. La política comercial es el contexto al que se asocia una tabla de precios.

A la hora de configurar una política comercial, es imprescindible [especificar la moneda que se utilizará en la tienda](/es/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). La creación de diferentes políticas comerciales, cada una asociada a una moneda distinta, permite a la tienda mostrar a los clientes los precios en diferentes monedas. 

## Promociones

En VTEX, el retailer puede crear un conjunto de reglas para indicar si los clientes pueden recibir descuentos aplicados en ciertos contextos de compra. [Promociones](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) es el módulo de VTEX responsable de crear, editar y aplicar descuentos en el carrito de compra del cliente.

### Antes de comenzar en Promociones

Antes de configurar las promociones de tu tienda, es necesario registrar el [Catálogo](/es/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) con los productos que se venderán y establecer lo [precios](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) de los SKU.

### Cómo funciona el módulo Promociones

Consulta en la tabla a continuación los principales términos utilizados en este contexto:

| **Término** | **Definición** |
| :---: | :--- |
| Promoción | Descuento concedido al cliente, que puede estar asociado a uno o varios productos del carrito, a un envío o a un regalo. |
| Cupón | Código promocional, formado por una secuencia de letras y números. Los cupones están asociados a promociones aplicadas al valor total del carrito. Así, al ingresar un código de cupón válido en el momento de la compra, el cliente puede obtener descuentos sobre el valor del pedido. |
| Audiencia de campañas | La Audiencia de campañas es una funcionalidad que permite definir el [público objetivo](/es/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#publico-objetivo) para una promoción. La funcionalidad consiste en crear criterios de segmentación de clientes. A partir de estos criterios, la plataforma VTEX comprueba automáticamente si los clientes son elegibles para una determinada audiencia de campañas, y en consecuencia, para las [promociones de campaña](/es/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) asociadas. |
| Promoción de campaña | La promoción de campaña siempre está vinculada a una audiencia de campaña, es decir, a un público objetivo específico. Este tipo de promoción solo se aplicará al público objetivo definido en la campaña. |

### Crear promociones

En VTEX, el retailer puede crear una serie de reglas que, según el contexto de la compra, determinan si se aplicará el descuento y cómo. Entre los parámetros considerados en estas reglas se encuentran: listas de productos, listas de clientes, rangos de códigos postales, valor mínimo de los ítems en el carrito, entre otros.

Los descuentos son, principalmente, de dos tipos:

- __Nominal__: descuento de un valor bruto, como $20.
- __Porcentual__: descuento de un valor porcentual, como el 10 % del valor total del carrito.

Hay seis tipos diferentes de promociones, cada una relacionada con un escenario distinto:

| **Tipo de promoción** | **Definición** |
| :---: | :--- |
| [Regular](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) | Promoción que permite a la tienda ofrecer descuentos de forma flexible, combinando múltiples condiciones, restricciones y beneficios.  |
| [Comprar Juntos](/es/tutorial/compre-junto--tutorials_323) | Promoción utilizada para conceder descuentos en productos cuando se agregan juntos al carrito. El descuento puede aplicarse a ambos productos. También existe la opción de que el descuento solo se aplique si se añade al carrito una determinada cantidad de uno de los productos. |
| [Más Por Menos](/es/tutorial/leve-mais-por-menos--tutorials_325) | Promoción utilizada para conceder un descuento cuando el cliente añade al carrito varias unidades del mismo producto. |
| [Descuento Progresivo](/es/tutorial/desconto-progressivo--tutorials_324) | Promoción utilizada cuando se desea ofrecer un descuento porcentual a un determinado número de productos del carrito. |
| [Compra uno y lleva uno gratis](/es/tutorial/compre-e-ganhe--tutorials_322) | Promoción utilizada para ofrecer envío gratis o un regalo si se compra un determinado producto. |
| [Promoción de campaña](/es/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) | Promoción que está siempre vinculada a una audiencia de campaña, es decir, a un público objetivo específico. |

Para todas las promociones puede establecerse un periodo de validez, así como restricciones y limitaciones de uso. Las promociones también pueden programarse para eventos especiales, como se describe en el artículo [Programación de funcionalidades para eventos especiales](/es/tutorial/agendamento-para-eventos-especiais--2nd50tPWdKK4waXRZLg0JI#programar-promociones).

Consulta más información sobre las posibilidades de aplicar promociones en el artículo [Ejemplos de promociones](/es/tutorial/exemplos-de-promocao--5A8UTc7knvAscxo7e7rMFD).

###  Crear cupones

Puedes crear cupones de descuento en el [Admin VTEX](/es/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU) o a través de [API](https://developers.vtex.com/docs/guides/creating-and-managing-coupons-with-promotions-api). Para utilizarlo, el cupón debe estar vinculado al menos a una promoción.

> ⚠️ Hay una cantidad limitada de cupones activos. Se recomienda encarecidamente la reutilización de los cupones, ya que un exceso de estos podría afectar el desempeño del módulo Promociones.

### Crear promociones de campaña

Antes de crear una promoción de campaña se debe crear una [audiencia de campaña](/es/tutorial/criar-audiencia-de-campanha--6cnuDZJzIkIeocewAQQK4K) para definir el público objetivo de la promoción. A partir de los criterios definidos por el retailer pueden seleccionarse segmentos de clientes elegibles para la promoción, los cuales actúan como activadores.

Una vez creada la audiencia de campaña, es necesario asociarla a una [Promoción Regular](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), ccreando así una promoción de campaña. Este tipo de promoción engloba todas las posibilidades presentes en la [Promoción Regular](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) y las siguientes opciones adicionales:

- Público objetivo específico.
- Envío gratis para todos los envíos disponibles.
- Tabla de precios promocionales.
- Regalo entregado por sellers.

### Destacar promociones en la página del producto

Para destacar una promoción en la página del producto (PDP) sigue los pasos que se indican a continuación:

1. [Crea una promoción](/es/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi) de cualquier tipo, a excepción de Comprar juntos.
2. Activa el campo __Promoción resaltada__ en el formulario de promoción.
3. Guarda la promoción.
4. En el [CMS Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), ingresa el control de visualización de la promoción en el template: `<vtex.cmc:discountHightLight/>`. 

### Sincronización de fechas de promoción, banners y activos digitales

Es importante garantizar una coordinación perfecta al sincronizar la línea de tiempo de las promociones con las fechas de entrega de banners y activos digitales. Para hacerlo, debes comprobar las fechas de las promociones y los banners. Esta alineación estratégica garantiza que las campañas promocionales se apoyen en material visual relevante, maximizando su impacto y eficacia.

## Logística

En VTEX, el módulo [Logística](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx) es el responsable de la [logística y fulfillment](/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP) de los pedidos de la tienda, incluyendo la planificación, el transporte, el almacenamiento de los productos y el envío de los pedidos a los clientes.

### Antes de comenzar en Logística

Para realizar los ajustes de logística, deben haberse completado los siguientes pasos:

- __Registrar catálogo__: como la realización de pedidos está relacionada con el almacenamiento de ítems, los productos y SKU de la tienda deben estar registrados en el [Catálogo](#catalogo).
- __Configurar política comercial__: las [políticas comerciales](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) moldean la experiencia del cliente en el sitio web de una tienda, segmentando desde las condiciones de venta para cada público, hasta los productos ofrecidos, precios, promociones y métodos de envío.

Además, si el modelo de negocio incluye tiendas internacionales y ventas [cross-border](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs), es importante determinar previamente cuál sería el modelo de [arquitetura de la tienda](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#arquitectura-de-la-tienda).

### Ajustes obligatorios en Logística

El conjunto de configuraciones esenciales de logística para una tienda VTEX se denomina [Estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), y se compone de tres conceptos principales: política de envío, almacén y muelle.

- __[Política de envío](#politica-de-envio)__: conjunto de reglas que definen las opciones y condiciones de envío del pedido.
- __[Muelle](#muelle)__: local de distribución de los ítems vendidos.
- __[Almacén](#almacen)__: espacio físico donde se almacenan los productos a la venta.

La imagen siguiente muestra cómo se relacionan estos conceptos en la venta de un producto:

![shipping_strategy_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/modulos-de-vtex-i_4.png)

La siguiente tabla muestra los principales ajustes de logística de la tienda VTEX:

>  Recomendamos en primer lugar configurar la política de envío, en segundo lugar el muelle y, finalmente, el almacén.

| **Tema** | **Configuración en el Admin VTEX** | **Configuración por API** |
| :---: | :--- | :--- |
| [Políticas de envío](#politica-de-envio) | [Política de Envío](/es/tutorial/politica-de-envio--tutorials_140) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| [Muelle](#muelle) | [Gestionar el muelle](/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| [Almacén](#almacen) | [Gestionar almacenes](/es/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
| [Stock](#gestion-del-stock) | [Gestión del stock](/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) | [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) |

#### Política de envío  

La [Política de envio](/es/tutorial/politica-de-envio--tutorials_140) es un conjunto de reglas que definen las opciones y condiciones de envío que se presentarán a los clientes en el checkout. Las condiciones de envío incluyen transportadora, plazos y valor del envío. La política de envío se vincula al almacén a través del muelle.

La [transportadora](/es/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE) responsable del envío del pedido viene determinada por la política de envío. En primer lugar, deben registrarse las transportadoras en la [plantilla de envío](/es/tutorial/planilha-de-frete--tutorials_127), después, esta plantilla de envío se asocia cuando se crea una política de envío.

#### Muelle

El [muelle](/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) es el lugar desde el que se distribuyen y envían los ítems, el punto intermedio entre el almacén y las transportadoras. El muelle integra el almacén, la política comercial y la política de envío. Algunos de los casos de uso son:

- Centros de distribución diferentes para un único almacén.
- Muelle como centro de distribución.
- Muelle y stock corresponden al mismo espacio físico.

Para determinados productos, puede no ser necesario un espacio físico de distribución. Aun así, para el correcto funcionamiento de las operaciones de la plataforma VTEX hay que configurar el muelle obligatoriamente.

####  Almacén

La ruta logística se inicia en el [almacén](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb), que es el espacio físico de almacenamiento para los productos que vende la tienda. Cuando los ítems vendidos se alistan en el almacén, se envían al muelle de carga.

### Gestión del stock

El [stock](/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) de la tienda corresponde a los ítems almacenados que están disponibles para la venta. El almacén es la identificación de la ubicación física de almacenamiento, mientras que el stock es el conjunto de SKU disponibles para la venta.

> ❗ En VTEX, la actualización del stock una vez vendidos los ítems debe ser controlada por la propia tienda. De esta forma, tras la venta, el retailer garantiza un control de la cantidad de ítems restantes y de las operaciones de facturación con ERP. En el artículo  [Integraciones de backend](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) puedes consultar más información sobre cómo importar stock a través del back office.

### Lead time

En el Admin VTEX, en __Catálogo > Stock > Gestión de stock__, hay una configuración opcional denominada [Lead time](/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B), que permite asignar un plazo de envío a nivel de SKU. Configurar el lead time significa añadir un periodo de tiempo al [cálculo](#calculo-de-envio-de-pedidos) de envío del pedido, lo que resulta estratégico en algunos contextos.

Entre los [principales casos de uso](/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#principales-casos-de-uso), podemos mencionar productos de proveedores externos, escenarios de _dropshipping_ y venta de ítems personalizables. Configurar el lead time brinda mayor flexibilidad para definir los plazos de procesamiento y envío del producto por terceros.

### Cálculo de envío de pedidos

Para realizar el [cálculo de envio](/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de los pedidos, la plataforma VTEX considera las siguientes configuraciones:

![Envío de Pedidos_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/modulos-de-vtex-i_5.png)

- [Lead time](/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B): cantidad de tiempo configurable para el SKU de un almacén. Esta configuración es opcional y se establece en cero días de forma predeterminada.
- [Tiempo de almacén](/es/tutorial/gerenciar-estoque--tutorials_137): tiempo que tarda el SKU en pasar del almacén al [muelle](/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). Esta configuración es obligatoria, pero el tiempo puede establecerse en cero.
- [Tiempo de muelle](/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW): tiempo que tarda el SKU en salir del muelle para ser enviado al cliente. Esta configuración es obligatoria, pero el tiempo puede establecerse en cero.
- [Política de envío](/es/tutorial/politica-de-envio--tutorials_140): agrupa las reglas y condiciones de envío que se presentan a los clientes en el checkout, incluyendo transportadoras, valor del envío, horarios de funcionamiento de las transportadoras, las ventanas de entrega y la capacidad de entrega.

El [simulador de envío](/es/tutorial/simulador-de-envio--tutorials_144) permite al retailer simular y analizar las opciones de entrega disponibles para un pedido en una ubicación. La simulación comprueba la viabilidad y las condiciones de envío del pedido, como disponibilidad de los ítems, métodos de envío, costos y plazos.

### Ajustes opcionales de Logística

Para adaptarse a los distintos modelos de negocio, la plataforma VTEX ofrece una serie de ajustes opcionales, como se muestra en la tabla a continuación:

| **Funcionalidad** | **Descripción** |
| :---: | :--- |
| Puntos de recogida | Los [puntos de recogida](/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) son ubicaciones físicas que la tienda ha establecido para que los clientes recojan sus pedidos. Configurar puntos de recogida es una buena opción para las operaciones omnichannel, especialmente cuando hay un gran número de tiendas físicas, ya que cada tienda física puede convertirse en una opción para que el cliente recoja su pedido, aumentando la versatilidad de su red logística. |
| Feriados | La funcionalidad [Feriados](/es/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) permite a la tienda establecer días en los que no se procesan envíos, y esto se tiene en cuenta al calcular el tiempo de envío del pedido. |
| Reserva | La [reserva](/es/tutorial/como-a-reserva-funciona--tutorials_92) es una solución VTEX que impide que un mismo ítem se venda más de una vez. Cuando el cliente simplemente añade un producto al carrito, no se genera una reserva; su prioridad sobre el ítem solo se activa al finalizar la compra.|
| Capacidad de entrega | La [Capacidad de entrega](/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi#capacidade-de-entrega) es el límite de envíos que puede realizar la tienda en un periodo determinado. Poder delimitar el número de ítems o pedidos que se pueden enviar en cada ventana de envío significa tener más control sobre la preparación de los pedidos y aumentar las posibilidades de cumplir la promesa de entrega establecida con el cliente en el checkout. |
| Geolocalización | La [Geolocalización](/es/tutorial/gerenciar-geolocalizacao--tutorials_138) es el registro de las ubicaciones de entrega a partir de la latitud y la longitud de las direcciones. Esta funcionalidad es muy utilizada en direcciones de zonas rurales e industriales (donde hay división por terrenos) o en zonas de riesgo, cuando es necesario eliminar ciertos lugares de entrega dentro de una región. |

Consulta más información sobre conceptos logísticos en VTEX en el artículo [Glosario de logística](/es/tutorial/glossario-de-logistica--16DSSiXn548rsidi0A8Hby), también ponemos a disposición contenido específico para desarrolladores sobre la [Logistics API](https://developers.vtex.com/docs/api-reference/logistics-api#overview) en el artículo [Fulfillment and Logistics](https://developers.vtex.com/docs/guides/fulfillment).
