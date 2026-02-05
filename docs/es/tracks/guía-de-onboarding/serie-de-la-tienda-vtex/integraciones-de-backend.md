---
title: 'Integraciones de backend'
id: 7euXDZR5CCnVFSrXyczIhu
status: PUBLISHED
createdAt: 2024-02-05T13:23:32.848Z
updatedAt: 2024-02-23T02:06:48.878Z
publishedAt: 2024-02-23T02:06:48.878Z
firstPublishedAt: 2024-02-22T14:06:58.203Z
contentType: trackArticle
productTeam: Others
slugEN: backend-integrations
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: serie-de-la-tienda-vtex
order: 4
---

Normalmente, las integraciones comienzan con los softwares de back office y permiten gestionar las partes esenciales de la operación relacionadas con [Catálogo](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo), [Logística](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica) y [Pedidos](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pedidos). Los principales tipos de software presentes en el back office son:

- ERP (Enterprise Resource Planning)
- WMS (Warehouse Management System)
- PIM (Product Information Manager)
- CRM (Customer Relationship Management)

Además del back office, la plataforma de ecommerce puede integrarse a otros sistemas que suman nuevos recursos. Un ejemplo son los [provedores de pago](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagos), que permiten la comunicación para procesar pagos e incluir medios de pago adicionales en el [checkout](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#checkout).

## Integración con ERP

La configuración de integración de back office de una tienda comienza por el software ERP. Otros tipos de software pueden ser utilizados en el back office para propósitos específicos, como un PIM para los datos de productos y un WMS para el stock.

Los ERP y otros tipos de software pueden tener integraciones nativas con VTEX. En caso contrario, debes implementar un middleware propio utilizando las [API de VTEX](https://developers.vtex.com/docs/api-reference) para integrar el software con la cuenta VTEX.

La configuración consta de dos fases: la **configuración inicial** y la **configuración del middleware**. Después de realizar la configuración, podrás ver el flujo activo que se utiliza para la operación cotidiana de la tienda. Para más información sobre la configuración, consulta [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

### Configuración inicial

En esta fase se llevan a cabo los pasos para que la [cuenta VTEX](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-vtex) reciba todos los datos de los productos. En este momento, se integran el catálogo, productos, precios y stock de la tienda. En general, la configuración de esta fase puede realizarse de tres maneras:

- Integración con herramientas externas.
- Integración de plantillas.
- Importación manual a través del Admin VTEX.

Los pasos de configuración de esta fase se deben seguir en el orden indicado a continuación. Los detalles de cada paso se describen en las respectivas subsecciones de la sección [Integraciones](#integraciones) de este artículo.

1. [Arquitectura del catálogo](#arquitectura-del-catalogo)

    a. Árbol de categorías

    b. Marcas

    c. Especificaciones (grupos y campos)

2. [Importación de productos](#importar-productos)

    a. Importar productos

    b. Importar especificaciones de los productos

    c. Agregar los productos a la política comercial

    d. Importar SKU

    e. Importar especificaciones de los SKU

    f. Importar imágenes de los SKU

3. [Importación de precios](#precios)

    a. Establecer precio base

    b. Definir precios fijos para contextos específicos

4. [Importación de stock](#stock)

    a. Crear almacenes

    b. Actualizar stock de SKU

### Configuración de middleware

En esta fase se llevan a cabo los pasos para permitir que la tienda procese los pedidos. Además, se integrarán las notificaciones sobre cambios a los pedidos y las acciones para ejecutar el procesamiento de pedidos. La integración puede realizarse de dos maneras:

- **Integración de plataformas:** esta opción utiliza una plataforma externa, conocida como PaaS (Platform-as-a-service), que ya ofrece una solución lista para integrarse con VTEX y requiere un esfuerzo de desarrollo mínimo.
- **Desarrollo interno:** esta opción requiere la creación y mantenimientos de software de integración propio. El middleware debe ser capaz de funcionar con variaciones de escalabilidad que pueden surgir en picos de ventas, como los que se observan a menudo durante eventos de ventas como Black Friday.

Los pasos para la configuración se deben seguir en el orden indicado a continuación. Los detalles de cada paso se describen en las respectivas subsecciones de la sección [Integraciones](#integraciones) de este artículo.

1. [Integración/notificación de pedidos](#integracion-de-pedidos)

    a. Configurar el feed o hook

2. [Procesamiento de pedidos](#procesamiento-de-pedidos)

    a. Modificar pedido

    b. Cancelación

    c. Facturación

    d. Seguimiento

### Comportamiento de la integración con ERP

Después de configurar la tienda y completar la integración con el middleware, el flujo general de información seguirá el formato que se muestra en la imagen:

![ERP-integrations-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/integraciones-de-backend_1.jpg)

Cada una de las solicitudes o procesos representados por las flechas en el diagrama anterior es accionado por un tipo diferente de evento en la operación cotidiana de una tienda online. Para más información sobre este flujo, consulta [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide#ongoing-middleware-flow).

## Integraciones

En esta sección, se abordan las principales integraciones para el funcionamiento de una tienda VTEX. Las integraciones abarcan una amplia gama de aspectos, desde la integración de catálogo y datos de clientes hasta la gestión de pedidos e inicio de sesión único (SSO). Cada una de las integraciones se describe a continuación.

### Arquitectura del catálogo

En VTEX,[Catálogo](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalogo) es el módulo donde se configuran las características de los productos de la tienda para ponerlos a disposición de los clientes. El catálogo se debe crear siguiendo el orden de pasos descritos a continuación:

1. Creación del [árbol de categorías](#arbol-de-categorias).
2. Registro de [marcas](#marcas).
3. Registro de [especificaciones](#especificaciones) (opcional).
4. Importación de [productos](#importacion-de-productos).
5. Importación de [SKU](#importar-productos).
6. [Asociación de especificaciones de productos y SKU](#importar-productos)

Consulta más información sobre la configuración del catálogo con el back office en los artículos [Catalog](https://developers.vtex.com/docs/guides/catalog-overview) y [Set up catalog](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog).

#### Árbol de categorías

Después de definir y planificar la [arquitectura del catálogo](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#arquitectura-de-catalogo) de la tienda, puedes crear las categorías de las siguientes maneras:

1. **Admin VTEX:** crear cada categoría a través de la interfaz de usuario. Consulta los detalles en [Registrar categorías](/es/docs/tracks/registrar-categorias).
2. **API de Catálogo:** crear cada categoría mediante llamadas de API. Consulta los detalles en [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category).
3. **Integración con back office:** importar categorías a partir de un software de back office externo (ERP o PIM) integrado a VTEX. El software puede ofrecer una integración nativa con VTEX o requerir el desarrollo de middleware que utilice la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). Consulta los detalles en [Category migration from ERPs](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#category-migration-from-erps).

> ⚠️ Al importar las categorías de un software externo, la estructura de categorías en el software puede diferir de la de VTEX. En este caso, recomendamos crear una categoría simulada inactiva que no será visible en el storefront y que se puede utilizar para recibir todos los productos y SKU durante la importación. Una vez finalizada la importación, los productos pueden organizarse manualmente en el Admin VTEX para ajustarse al árbol de categorías deseado.

Las categorías tienen algunas limitaciones:

- **Mover categorías:** aunque sí es posible mover una categoría a otro nivel (superior o inferior) y/u otro departamento, es una acción arriesgada debido a las especificaciones asociadas a la categoría. Esta acción puede impactar la información de los productos, ya que los productos heredan las especificaciones nuevas además de las anteriores.
- **Agregar categorías:** no es posible eliminar una categoría a menos que se haga una [limpieza completa](/es/docs/tutorials/mantenimiento-de-base-de-datos-full-cleanup) del catálogo de la tienda.

Para más información sobre la importación de categorías al back office, consulta [Categories](https://developers.vtex.com/docs/guides/categories).

#### Marcas

Las [marcas](/es/docs/tracks/marcas-definicion-de-concepto) son atributos de productos que ayudan a los clientes a identificar el producto y la empresa de origen. Un producto debe estar asociado a una sola marca. Por ende, crear marcas es un paso obligatorio en la configuración del catálogo. Se pueden crear marcas de las siguientes formas:

1. **Admin VTEX:** crear cada marca a través de la interfaz de usuario. Consulta los detalles en [Registrar marcas](/es/docs/tracks/registrar-marcas).
2. **API de Catálogo:** crear cada marca mediante llamadas de API. Consulta los detalles en [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand).
3. **Integración con back office:** importar marcas a partir de un software de back office externo (ERP o PIM) integrado a VTEX. El software puede ofrecer una integración nativa con VTEX o requerir el desarrollo de middleware que utilice la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). Consulta los detalles en la sección [Create Brands](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#create-brands) de la guía de configuración de Catálogo para back office.

> ⚠️ Si el sistema de back office no tiene la información sobre marcas, se puede aplicar el mismo procedimiento mencionado anteriormente para categorías en el que se crea una marca simulada inactiva que solo se usa para la migración. Luego, la información de los productos puede ingresarse manualmente.

Para más información sobre la importación de marcas al back office, consulta [Brands](https://developers.vtex.com/docs/guides/brands).

#### Especificaciones

Las [especificaciones](/es/docs/tracks/especificaciones-definicion-de-concepto) son propiedades adicionales que se pueden atribuir a productos y SKU de la tienda y se utilizan para crear filtros de búsqueda y diferenciar SKU y productos en la página del producto. La creación de especificaciones puede llevarse a cabo mediante [integraciones de back office](https://developers.vtex.com/docs/guides/erp-integration-set-up-catalog#create-specifications-groups) utilizando las [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview).

Hay tres tipos de especificaciones que se deben crear en el siguiente orden:

1. Grupos de especificaciones
2. Campos de especificación
3. Valores de especificación

El diagrama a continuación ilustra el procedimiento.

![catalog_specification_diagram_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/serie-de-la-tienda-vtex/integraciones-de-backend_2.png)

Las especificaciones siguen la jerarquía de Catálogo. Cuando se crea un grupo en un departamento o categoría, el mismo se heredará en los niveles inferiores.
Una vez creados los grupos, campos y valores, hay que asociar las especificaciones a productos y SKU. Estos procedimientos se describen en la próxima sección: [Importar productos](#importar-productos).

Para más información sobre la importación de especificaciones al back office, consulta [Specifications](https://developers.vtex.com/docs/guides/specifications).

### Importar productos

Importar productos es el acto de transferir todos los datos relevantes de un producto de un sistema ERP o PIM a la plataforma VTEX. Este paso mantiene el catálogo de productos actualizado y sincronizado con la tienda. Tanto si se trata de una amplia variedad de productos, SKU o distintas variaciones, la importación eficaz de productos es esencial para la experiencia del cliente.

En VTEX, es importante entender la distinción entre productos y SKU:

- [Producto](/es/docs/tracks/productos-definicion-de-concepto): unidad abstracta del catálogo, visible en los estantes de la tienda.
- [SKU](/es/docs/tracks/sku-definicion-de-concepto): unidad concreta del catálogo en el stock que representa las variaciones específicas de un producto, como color, tamaño y otros atributos. Los SKU se muestran como ítems individuales en las páginas de los productos.

> ℹ️ La manera en que se estructuran los productos y SKU afectan directamente la experiencia de compra de los clientes.

La importación de productos debe seguir el orden descrito en la tabla a continuación:

| **Acción** | **Descripción** | **Métodos** |
| :--- | :--- | :--- |
| [1. Importar productos](https://developers.vtex.com/docs/guides/products) | Registrar los productos en el catálogo. | - Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product). <br><br>- Importación de plantillas ([método clásico](/es/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#spreadsheet) y [aplicación google-drive-import](https://developers.vtex.com/docs/apps/vtex.google-drive-import@0.x)). <br><br>- Entrada manual en el Admin VTEX. |
| [2. Importar especificaciones de los productos](https://developers.vtex.com/docs/guides/product-specifications) | Rellenar las especificaciones de los productos en el catálogo. | - Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/specification). <br><br>- Entrada manual en el [Admin VTEX](/es/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#preencher-especificacoes-de-produto). |
| [3. Agregar los productos a la política comercial](https://developers.vtex.com/docs/guides/erp-integration-import-products#add-product-to-trade-policy) | Asociar los productos a las [políticas comerciales](/es/docs/tutorials/como-funciona-una-politica-comercial) correspondientes y definir las reglas específicas (precios, pagos, estrategia de envío, etc.) según el canal de venta o público. Como mínimo, se deben agregar todos los productos a la política comercial principal. | - Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/salespolicy/-tradepolicyId-). <br><br>- Entrada manual en el [Admin VTEX](/es/docs/tracks/registrar-producto) al registrar un producto. |
| [4. Importar SKU](https://developers.vtex.com/docs/guides/skus) | Agregar SKU a los productos del catálogo. | - Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit). <br><br>- Entrada manual en el [Admin VTEX](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#adicionar-novo-sku-a-um-produto-ja-cadastrado). |
| [5. Importar especificaciones de los SKUs](https://developers.vtex.com/docs/guides/sku-specifications) | Rellenar las especificaciones de los SKU en el catálogo. | <br><br>- Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/specification). <br><br>- Entrada manual en el [Admin VTEX](/es/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119#preencher-especificacoes-de-sku). |
| [6. Importar imágenes de los SKUs](https://developers.vtex.com/docs/guides/images) | Agregar imágenes a los SKU. | - Integración mediante la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file). <br><br>- Entrada manual en el [Admin VTEX](/es/docs/tutorials/como-actualizar-la-imagen-de-un-sku). |

<br>

> ⚠️ Es común que los datos de productos en el ERP no sean adecuados para uso y visualización en una tienda online. Por esta razón, debe llevarse a cabo un proceso de enriquecimiento, que puede incluir reestructuración de categorías y la creación de descripciones de productos más detalladas y atractivas.

Después de la importación, también es importante garantizar que los datos de los productos y SKU se mantengan actualizados. Consulta las instrucciones en el artículo [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information).

Para más información sobre la importación de productos al back office, consulta [Import products](https://developers.vtex.com/docs/guides/erp-integration-import-products).

 ### Precios

Los [precios](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#precios) son la información de los valores de venta de los SKU, que se almacenan en las [tablas de precios](/es/docs/tracks/tablas-de-precio-definicion-de-concepto). Para garantizar que los productos de la tienda tengan precios competitivos y adaptados a los distintos canales de venta, es necesario entender cómo los precios se integran en VTEX.

En operaciones de venta, es común delegar el cálculo de precios al ERP, desde donde se puede importar la información. Los precios tienen un valor base definido para cada SKU y pueden variar según el contexto. Los pasos para importar precios son:

1. **Definir precio base:** el precio base sirve como referencia para determinar el precio de un producto en el sistema de precios de VTEX. El precio base de un SKU puede importarse a través de una integración mediante la [API de Precios](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) o [crearse en el Admin VTEX](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29#admin).
2. **Definir precios fijos para contextos específicos:** el precio base puede ser ajustado o modificado mediante reglas específicas, cálculos o precios fijos para llegar al precio final de retail del SKU en diferentes contextos, dependiendo de la [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial), [grupo de clientes](/es/docs/tutorials/como-crear-un-cluster-de-cliente), [promoción](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR), entre otros factores. Los precios fijos para contextos específicos pueden importarse mediante una integración que use la [API de Precios](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-), [mediante una plantilla](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D#importacao-de-precos) o [crearse en el Admin VTEX](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj#admin).

Después de la importación, también es importante garantizar que los datos de los precios se mantengan actualizados. Consulta las instrucciones en el artículo [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information#pricing-updates).

Para más información sobre la importación de precios al back office, consulta [Import prices](https://developers.vtex.com/docs/guides/erp-integration-import-prices).

### Stock

En el módulo [Logística](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistica) de VTEX, el [stock](/es/docs/tutorials/gestionar-items-en-inventario) es la relación entre los ítems de venta en una tienda (SKU) y las ubicaciones donde se guardan dichos ítems, denominados [almacenes](/es/docs/tutorials/almacen). La gestión eficiente del stock de una tienda es fundamental para importar el stock a VTEX y garantizar que los clientes puedan acceder a información precisa sobre la disponibilidad de los productos, lo que agiliza el proceso de [logística y envío](/es/docs/tutorials/fulfillment-logistica-vtex).

Los pasos para importar el stock son:

1. **Crear almacenes:** registrar las ubicaciones físicas o virtuales donde se almacenarán los SKU. Los almacenes pueden importarse mediante una integración que utilice la [API de Logística](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) o [crearse en el Admin VTEX](/es/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque%5D).
2. **Actualizar el stock de SKU:** ingresar la cantidad disponible de cada ítem en los almacenes. El stock puede importarse mediante una integración que utilice la [API de Logística](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-), mediante una [plantilla de stock](/es/docs/tutorials/importando-y-exportando-plantilla-de-stock) o [actualizarse en el Admin VTEX](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock).

Después de la importación, también es importante garantizar que los datos de los precios se mantengan actualizados. Puedes consultar las instrucciones en [Update or delete information](https://developers.vtex.com/docs/guides/erp-integration-updating-and-deleting-information#pricing-updates).

Para más información sobre la importación de stock al back office, consulta [Import inventory](https://developers.vtex.com/docs/guides/erp-integration-import-inventory).

 ### Datos de clientes

La importación de datos de clientes permite integrar los datos de los clientes de otros sistemas, como aplicaciones de CRM, con VTEX. De forma predeterminada, VTEX almacena los datos de los clientes en [Master Data V1](/es/docs/tutorials/master-data).

Los datos de Master Data se organizan en [entidades de datos](/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#entidades-de-dados) análogas a tablas en otros sistemas de bases de datos, cuyos [documentos](/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#documentos) son el equivalente de filas o registros. Los datos de perfil de los clientes se almacenan en la entidad `CL` y sus direcciones en la entidad `AD`.

Los pasos para importar los datos de clientes son:

1. **Crear nuevos perfiles de clientes:** crear documentos en la entidad `CL` con la información de perfil de los clientes, como nombre, email, teléfono, entre otros. Los datos pueden importarse a través de integración utilizando la [API de Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api#post-/api/dataentities/-acronym-/documents).
2. **Crear direcciones:** crear documentos en la entidad `AD` con las direcciones de los clientes, incluyendo información como calle, ciudad, código postal, entre otros. Cada dirección se asocia a un cliente y un cliente puede tener más de una dirección asociada. Los datos pueden importarse a través de integración utilizando la [API de Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api#post-/api/dataentities/-acronym-/documents).

Para más información sobre la importación de datos de clientes para back office, consulta el artículo [Import customer data](https://developers.vtex.com/docs/guides/import-customer-data).

### Integración de pedidos

En la plataforma VTEX se genera un [pedido](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pedidos) en el momento en que el cliente hace clic en el botón de finalizar compra. Cada pedido contiene varios datos, como los ítems del carrito, el valor de la compra, el medio de pago, entre otros.

La integración de pedidos permite la comunicación entre la aplicación de back office, ya sea ERP o WMS, y el OMS (Order Management System) de VTEX. Dicha integración desempeña un papel fundamental al:

- Manejar los eventos de cambios de [status del pedido](/es/docs/tutorials/flujo-y-status-de-pedidos).
- Obtener [detalles del pedido](/es/docs/tutorials/pagina-de-detalles-del-pedido).
- Transmitir la información de [procesamiento del pedido](#).

#### Recibir actualizaciones de pedidos

Las actualizaciones de los pedidos en el back office permite agilizar y automatizar las acciones realizadas durante el [procesamiento de los pedidos](#procesamiento-de-pedidos), tales como facturación y cancelación.
Existen dos formas dar seguimiento a los cambios de status de los pedidos en VTEX:

- [Feed v3](https://developers.vtex.com/docs/guides/orders-feed): una lista de eventos sobre las actualizaciones de los pedidos. Para este tipo de integración, VTEX proporciona un [endpoint](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/orders/feed/config?endpoint=get-/api/orders/feed/config) que el back office puede utilizar para consultar los ítems de la lista, procesar los pedidos, así como también remover los ítems de la lista.
- [Hook](https://developers.vtex.com/docs/guides/orders-feed#hook): un canal para el envío automático de notificaciones sobre las actualizaciones de los pedidos. Para este tipo de integración, la aplicación de back office proporciona un [endpoint](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/orders/hook/config?endpoint=get-/api/orders/hook/config) al que VTEX notificará sobre las actualizaciones de los pedidos. Tras recibir una notificación, el sistema de back office continúa el procesamiento del pedido.

Los dos tipos de integración permiten aplicar [filtros](https://developers.vtex.com/docs/guides/orders-feed#filter) para seleccionar los tipos de eventos que el sistema de back office debe procesar.

> ℹ️ En la mayoría de los casos, VTEX recomienda integrar los pedidos con [Feed v3](https://developers.vtex.com/docs/guides/orders-feed) porque es un método más robusto.

#### Obtener detalles del pedido

Además de los cambios de status, la operación puede necesitar información adicional sobre un pedido. Los detalles de un pedido se pueden obtener mediante la [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-), que se puede utilizar para integrar el sistema de back office deseado.

Los detalles del pedido se utilizan en diferentes etapas del procesamiento, como los ítems que requieren preparación y el valor de la compra que se debe facturar.

#### Iniciar preparación

Después de que se envían los detalles del pedido al sistema de back office, el paso final antes de iniciar el procesamiento es cambiar el status del pedido a `Iniciar preparación`. Este proceso puede integrarse con el sistema de back office mediante la [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).

Para más información sobre la integración de pedidos con el sistema de back office, consulta los artículos [Set up order integration](https://developers.vtex.com/docs/guides/erp-integration-set-up-order-integration) y [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).

### Procesamiento de pedidos

En esta etapa, se configura la integración para enviar actualizaciones de pedidos del sistema de back office, ya sea ERP o WMS, a VTEX. Durante la preparación de un pedido se pueden aplicar diversas acciones, incluyendo cambio, cancelación y facturación.

A continuación se listan los eventos que el sistema de back office puede transmitir a VTEX. La integración entre VTEX y el sistema de back office para la transmisión de estos eventos se completa mediante la [API de Pedidos](https://developers.vtex.com/docs/api-reference/orders-api).

- **Modificar pedido:** cambiar ítems o valores del pedido.
- **Cancelar pedido:** finalizar el pedido y cancelar el pago.
- **Facturar pedido:** [agregar la factura al pedido](/es/docs/tracks/facturar-un-pedido). Esto es lo que indica que el pedido se finalizó con éxito y esta listo para envío.
- **Seguir pedido:** enviar la información de seguimiento. Puede enviarse el código o la URL de seguimiento de la transportadora o las notificaciones de actualización de seguimiento. 

Para más información sobre la configuración del procesamiento de pedidos en el sistema de back office, consulta los artículos [Set up order processing](https://developers.vtex.com/docs/guides/erp-integration-set-up-order-processing) y [Change order](https://developers.vtex.com/docs/guides/change-order).

### Inicio de sesión único (SSO)

El inicio de sesión único es un método que permite autenticar usuarios en la plataforma utilizando un único conjunto de credenciales de inicio de sesión, eliminando la necesidad de iniciar sesión en cada aplicación por separado. VTEX admite la integración de proveedores de identidad externos. Además de la integración nativa con servicios como [Google](/es/docs/tutorials/registrar-client-id-y-client-secret-para-inicio-de-sesion-con-google), se pueden crear nuevas integraciones con otros proveedores.

**VTEX ID** es el servicio que identifica los usuarios en la plataforma. Este servicio opera de acuerdo con la audiencia, las reglas de negocios y el tipo de user persona que puede interactuar con cada módulo de VTEX. Las audiencias disponibles son:

| **Audiencia** | **Contexto** | **Tecnología** |
| :---: | :--- | :--- |
| [Admin VTEX](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) | Identificación en el dashboard administrativo de VTEX, también conocido como [Admin VTEX](/es/docs/tutorials/admin-vtex-comience-aqui), destinado a administradores y operadores de la tienda. | SAML 2.0 (Security Assertion Markup Language). |
| [Webstore](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) | Identificación en el storefront VTEX, destinado a los clientes de la tienda. | OAuth 2.0 (Open Authorization). |

Para más información, consulta el artículo [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide).

### Pagos

Los sistemas de [Pago](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagos) de VTEX ofrecen amplios recursos para incorporar varios [medios de pago](https://developers.vtex.com/docs/guides/payments-integration-payment-methods), [condiciones](/es/tutorial/condicoes-de-pagamento) e integraciones. En VTEX los pagos tienen las siguientes opciones de [flujo de compra](https://developers.vtex.com/docs/guides/payments-integration-purchase-flows):

- **Transparente:** el pago ocurre directamente en el checkout y el comprador escoge el medio de pago.
- **Redirección:** abre una nueva ventana en el navegador del comprador donde un servicio externo procesa el pago. Después de finalizado el pago, el comprador vuelve al checkout para concluir la compra.
- **Payment App:** abre una ventana modal en la página de checkout. Después de finalizado el pago, la ventana se cierra y el flujo de compra continúa en el checkout. Este flujo también puede utilizarse para el método de autenticación [3D Secure 2 (3DS2)](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2).

Se pueden agregar medios de pago en una tienda VTEX de dos maneras:

- **Proveedor de pago con soporte nativo:** si VTEX ofrece integración con el proveedor de pago deseado, es necesario tener un contrato con el mismo y configurar las opciones de pago a través del Admin VTEX. Consulta los detalles de configuración en [Pagos](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#pagos) y los proveedores de pago que tienen soporte en VTEX en la [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais).
- **Proveedor de pago personalizado:** Si el proveedor de pago deseado no tiene una integración con VTEX, es necesario implementar un proveedor de pago independiente utilizando el [Payment Provider Protocol](/es/docs/tutorials/payment-provider-protocol) con los [endpoints de la API](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) para conectarse con nuestro [gateway de pagos](/es/docs/tutorials/que-es-un-gateway-de-pagos). El proveedor puede implementarlo una [agencia partner de VTEX](https://vtex.com/es-mx/partners//) (el Partner Portal está disponible solamente en portugués). Para disponibilizar el proveedor en VTEX, es necesario probarlo y pasar el [proceso de homologación](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).

Para más información sobre cómo integrar un nuevo proveedor de pago, consulta el artículo [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex).

### Tarjeta de regalo

En VTEX, las tarjetas de regalo pueden utilizarse como opción de pago en el **checkout** y como parte de programas de fidelización. VTEX proporciona una solución nativa de tarjetas de regalo y también permite incorporar integraciones con proveedores de tarjeta de regalo externos. 

Se pueden agregar tarjetas de regalo en una tienda VTEX de dos maneras:

- **Solución nativa de tarjetas de regalo:** si deseas utilizar la solución nativa de VTEX para tarjetas de regalo o una integración existente, debes configurar las tarjetas de regalo a través del Admin VTEX siguiendo los pasos presentes en [Configurar tarjeta de regalo](/es/docs/tutorials/gift-card).
- **Proveedor de tarjetas de regalo personalizado:** si el proveedor de tarjetas de regalo deseado no tiene una integración con VTEX, es necesario implementar una integración independiente utilizando el [Gift Card Provider Protocol](/es/tutorial/integrando-com-gift-card). Este protocolo les permite a los proveedores desarrollar una integración con los endpoints descritos en nuestra [Gift Card Provider Protocol API](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol#overview) y conectarse co nuestro [Gift Card Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api#overview).

### Antifraude

Un antifraude es un sistema especializado en analizar las compras realizadas en los sitios web con el fin de identificar transacciones fraudulentas. En VTEX, el operador de pagos primero aprueba la compra y, luego, el antifraude evalúa el pedido. 

Se puede agregar un sistema antifraude a los pagos de una tienda VTEX de dos maneras:

- **Sistema antifraude con soporte nativo:** si el sistema antifraude deseado ya tiene una integración con VTEX, es necesario tener un contrato con una de las empresas partner y realizar la configuración en el Admin VTEX. Para más información, consulta los artículos [Configurar el antifraude](/es/docs/tutorials/como-configurar-antifraude) y [¿Qué es antifraude?](/es/docs/tutorials/que-es-antifraude).
- **Sistema antifraude personalizado:** si el sistema antifraude deseado no tiene una integración con VTEX, es necesario implementar una integración independiente utilizando el [Antifraud Provider Protocol](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works) con los endpoints de la [Antifraud Provider API](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol).

## Extensiones y aplicaciones

Además de los servicios esenciales que VTEX ofrece, las funcionalidades de las tiendas VTEX se pueden optimizar mediante la incorporación de extensiones. Las extensiones son herramientas que amplían la capacidad de la plataforma VTEX y proporcionan diversas posibilidades, tales como agregar proveedores de pago y marketplace, personalizar el storefront, construir servicios de backend personalizados y crear nuevas aplicaciones para el Admin VTEX.

Una de las formas de incorporar nuevas funcionalidades a VTEX es crear aplicaciones utilizando [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io), nuestra plataforma de desarrollo que proporciona gestión de alto rendimiento, escalabilidad y seguridad robusta. VTEX IO permite a los desarrolladores centrarse en construir soluciones de negocio sin tener que preocuparse de la infraestructura.

### Qué es una aplicación en VTEX

Una [app](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app) en VTEX es una aplicación construida con VTEX IO. Las aplicaciones son un tipo de extensión, es decir, también amplían las funcionalidades de la plataforma VTEX. Las aplicaciones pueden [desarrollarse](https://developers.vtex.com/docs/app-development) localmente, con código personalizado, y posteriormente integrarse a las tiendas que operan en nuestra infraestructura. Las aplicaciones también pueden agregarse y adquirirse a través de [VTEX App Store](https://developers.vtex.com/docs/guides/vtex-app-store).

Los tipos de aplicaciones disponibles en VTEX son:

- [Storefront](/es/docs/tracks/implementacion-del-frontend): temas de tienda desarrollados con [Store Framework](/es/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl#store-framework).
- [Frontend](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io): componentes [React](https://react.dev/) que conforman los temas de tienda desarrollados con Store Framework.
- [Admin VTEX](https://learn.vtex.com/docs/course-admin-lang-en): módulos y funcionalidades para el [Admin VTEX](/es/docs/tutorials/admin-vtex-comience-aqui).
- [Servicios (backend)](https://developers.vtex.com/docs/guides/vtex-io-documentation-service): servicios [Node](https://nodejs.org/en) o [.NET Core](https://dotnet.microsoft.com/en-us/) capaces de manejar eventos y triggers, exportar rutas HTTP y mostrar solucinadores GraphQL.
- [Pixel](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps): scripts de servicios externos que se ejecutan en el frontend y proporcionan soluciones como monitoreo de ventas, soporte al usuario, recopilación de datos y servicios de marketing.
- [Edition](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app): conjunto de configuraciones, políticas, aplicaciones de backend y frontend encapsulado y exportado por una [sponsor account](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account).

Para ver las opciones de implementación de aplicaciones, consulta la [lista de builders](https://developers.vtex.com/docs/guides/vtex-io-documentation-builders#list-of-builders).

Para más información, consulta el artículo [What is a VTEX App](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app).

### Consideraciones antes de instalar una aplicación en tu tienda

Antes de empezar el proceso de desarrollo de una nueva aplicación, recomendamos explorar las soluciones disponibles para instalación en tu tienda. Puedes encontrar estas soluciones en el [Hub de extensiones](/es/tracks/extensions-hub--AW7klkYMh557y5IUOgzco), la sección del Admin VTEX que centraliza la gestión de extensiones. El Hub de extensiones tiene las siguientes páginas:

- **App Store:** marketplace donde se encuentran las aplicaciones desarrolladas por VTEX y terceros. En esta página puedes ver, comprar e instalar aplicaciones para una cuenta VTEX. Hay aplicaciones gratis y de pago, que tienen diferentes métodos de facturación.
- **Gestión de aplicaciones:** página que permite instalar, desinstalar, remover y configurar aplicaciones en la tienda.

Algunos ejemplos de soluciones disponibles en la App Store son:

- [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app): agrega opciones de [anexos](/es/docs/tutorials/que-es-un-anexo) para personalizar SKU. Por ejemplo, agregar una frase a una camiseta o ingredientes para un sándwich.
- [Gift List](https://developers.vtex.com/docs/apps/vtex.list): permite crear listas de regalos que se pueden compartir para que otras personas compren los ítems que se van a regalar. Son útiles para eventos como cumpleaños, bodas y baby showers. Los ítems comprados se transforman en crédito que puede utilizarse para comprar cualquier ítem disponible en la tienda.
- [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming): permite transmitir en vivo desde el sitio web de la tienda para interactuar con los clientes en tiempo real. Crea oportunidades para promocionar productos y tiene varios componentes que van más allá de la reproducción de video como número de espectadores, botón de me gusta, chat en tiempo real y barra lateral para presentar productos.
- **Aplicaciones de chat para clientes:** agregan un componente de chat para interactuar con los clientes. Pueden disponer de un chatbot para interacción automática, además de proporcionar servicio al cliente humano. Algunos ejemplos de aplicaciones son [JivoChat](https://developers.vtex.com/docs/apps/vtex.jivochat), [Tawk.to](https://developers.vtex.com/docs/apps/vtex.tawk-to) y [Zendesk Chat](https://developers.vtex.com/docs/apps/vtex.zendesk-chat).
- **Aplicaciones de análisis y evaluación:** agregan componentes para que los clientes evalúen los productos de la tienda, generalmente mediante una calificación numérica o un comentario. Algunos ejemplos de aplicaciones son [Reviews and Ratings by VTEX](https://developers.vtex.com/docs/apps/vtex.reviews-and-ratings), [Bazaarvoice](https://developers.vtex.com/docs/apps/vtex.bazaarvoice) y [PowerReviews](https://developers.vtex.com/docs/apps/vtex.powerreviews).
- **Aplicaciones de redes sociales:** permite interactuar con redes sociales, como por ejemplo para divulgar productos de la tienda a través de anuncios en la plataforma de la red. Algunos ejemplos de aplicaciones son [TikTok for Business](https://developers.vtex.com/docs/apps/vtexbr.tiktok-tbp) y [Facebook Business Extension](https://developers.vtex.com/docs/apps/vtex.facebook-fbe).

### Consideraciones al crear una aplicación para tu tienda

Si no encuentras una aplicación que satisfaga las necesidades de tu tienda VTEX, tienes la opción de desarrollar una solución independiente. Hay varios aspectos que se deben tener en cuenta al desarrollar aplicaciones en VTEX:

- **¿Quién será el responsable del desarrollo y mantenimiento?** Las aplicaciones pueden ser desarrolladas y mantenidas por el equipo de desarrollo interno de la empresa o por una agencia certificada por VTEX. Puedes encontrar los [partners de implementación de VTEX](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion) en nuestro [Partner Portal](https://vtex.com/es-mx/partners//) (solamente en portugués). Además del desarrollo, el responsable de la aplicación está encargado de mantenerla y actualizarla.
- **¿Qué tipo de aplicación se debe desarrollar?** Es importante saber el contexto en que la solución deseada debe operar. Los tipos de aplicaciones disponibles se describen en la sección anterior [Qué es una aplicación en VTEX](#que-es-una-aplicacion-en-vtex). Tenemos guías de desarrollo para algunos tipos de aplicaciones como [storefront](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io), [servicio](https://developers.vtex.com/docs/guides/vtex-io-documentation-developing-service-configuration-apps) y [Pixel](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps).
- **¿Cuál es el proceso de desarrollo de una aplicación?** Las aplicaciones se desarrollan en varias etapas. En general, el proceso de desarrollo sigue los pasos a continuación:

  a. **Preparar el entorno de desarrollo:** los requisitos principales antes de empezar el desarrollo de una aplicación son [instalar VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install) (la interfaz de comando de VTEX IO) y [crear un workspace de desarrollo](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace) en la cuenta de la tienda.

  b. **Interactuar con el código:** normalmente, el desarrollo parte de un template inicial seguido de la implementación local en el código. Se debe elegir un template que corresponda al tipo de aplicación deseada. Puedes consultar los templates disponibles ejecutando el [comando](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference) `vtex init` en la CLI. Además, se debe configurar el archivo [manifest.json](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest), donde se definen varios parámetros como el nombre de la aplicación, el nombre del desarrollador (vendor) y los [permisos](https://developers.vtex.com/docs/guides/vtex-io-documentation-policies). Después de editar el código, se agrega la aplicación al workspace de desarrollo para probarla utilizando el [comando vtex link](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) en la CLI.

  c. **Empaquetar el código en una nueva versión:** después de las pruebas, se deben seguir los pasos para [lanzar una nueva versión de la aplicación](https://developers.vtex.com/docs/guides/vtex-io-documentation-releasing-a-new-app-version) y [publicar la aplicación](https://developers.vtex.com/docs/guides/vtex-io-documentation-publishing-an-app). Esto permite que el código se guarde en la infraestructura VTEX y se pueda instalar en [workspaces de producción](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-production-workspace).

  d. **(Opcional) Validar que la aplicación satisfaga la necesidad de negocio:** después de tener la versión publicada, podría ser beneficioso instalar la aplicación en un [workspace de producción](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-production-workspace) y realizar una [prueba A/B](https://developers.vtex.com/docs/guides/ab-tests) para comparar la tasa de conversión de las ventas con la nueva aplicación. 

> ℹ️ Si deseas saber más sobre el desarrollo de aplicaciones, accede a nuestro [Learning Center](https://learn.vtex.com/).

- **¿Deseas que la aplicación sea pública?** Puedes [disponibilizar](https://developers.vtex.com/docs/guides/vtex-io-documentation-making-your-new-app-version-publicly-available) la aplicación en la App Store para permitir que otras cuentas puedan aprovechar la solución desarrollada.
- **¿Deseas que la aplicación esté disponible en la App Store?** Disponibilizar la aplicación en la App Store tiene varias ventajas, como aumentar la visibilidad de la aplicación y la posibilidad de [monetizarla](https://developers.vtex.com/docs/guides/vtex-io-documentation-setting-your-apps-billing-model) siguiendo algunos pasos y reglas. En resumen, debes ser un [desarrollador registrado](https://developers.vtex.com/docs/guides/vtex-io-documentation-becoming-a-registered-vtex-app-store-developer), tener el código de la aplicación almacenado en un repositorio de [GitHub](https://github.com/), desarrollar la aplicación siguiendo las [mejores prácticas de la App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) y [enviarla](https://developers.vtex.com/docs/guides/vtex-io-documentation-submitting-your-app-in-the-vtex-app-store) al proceso de homologación. Tras el proceso de homologación, la aplicación estará disponible en la App Store.
