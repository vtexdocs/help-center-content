---
title: 'Configurar una tienda B2B de autoservicio'
id: 4576nMaRKk4madDZ7liiXS
status: PUBLISHED
createdAt: 2021-03-30T13:11:03.141Z
updatedAt: 2022-10-25T13:15:21.263Z
publishedAt: 2022-10-25T13:15:21.263Z
firstPublishedAt: 2021-03-30T19:15:32.844Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-una-tienda-b2b-de-autoservicio
locale: es
legacySlug: configurar-una-tienda-b2b-de-autoservicio
subcategory: 2LrbEY7MFeKqmdfYLBCnfi
---

El escenario de autoservicio es la opción más flexible para B2B. Permite que el cliente pueda realizar el flujo de compra sin necesidad de interacción con los vendedores, lo cual reduce la fricción en el flujo de compra. Por eso, el autoservicio es un proceso que se parece a la compra en B2C. 

Este escenario tiene ventajas para el usuario, ya que le permite explorar el catálogo, el inventario y los precios con libertad, de acuerdo con su perfil de acceso. Además, el usuario puede ver información y realizar pedidos en cualquier momento, sin depender de ningún intermediario.

<div class="alert alert-info" role="info">Si ya es un cliente B2C y desea configurar un escenario B2B, contacte a <a href="https://support.vtex.com/hc/pt-br/requests">nuestro Soporte</a>.</div>

Una de las primeras decisiones que se deben tomar al estructurar una tienda B2B es decidir si la misma estará abierta o cerrada al público.

Optar por una __tienda abierta al público__ significa que cualquier usuario puede visualizar todos los productos. Esta opción es muy útil para quien desea construir una referencia para su propio sitio web y cumplir con todas las reglas de SEO centradas en el <i>ecommerce</i>.  

Usualmente, las empresas que eligen este escenario son los fabricantes de un determinado producto, ya que tienen las referencias y los contenidos (ej.: imágenes y descripciones) de cada uno de los productos que producen.

Ya una __tienda cerrada al público__ es aquella en la que los usuarios no pueden visualizar ninguno de los productos. Esta modalidad es elegida por empresas que no quieren exponer los ítems que comercializan. Y esto se debe, principalmente, a que algunas empresas deciden crear tiendas con un propósito específico, como, por ejemplo, las ventas exclusivas para colaboradores.  

Por defecto, las __tiendas VTEX están abiertas al público__. Este comportamiento también se aplica al escenario B2B.  

Sin embargo, este comportamiento se puede modificar. Usted puede configurar la tienda para que sea:

- [Cerrada a usuarios anónimos](#fechada-a-usuarios-anonimos)
- [Pública con restricciones](#publica-com-restricoes)

## Cerrada a usuarios anónimos
Los usuarios anónimos son aquellos que no están autenticados y que no tienen ningún tipo de acceso a una determinada tienda, ya sea a través de un acceso de inicio de sesión o token. 

Dado que la visualización de los productos depende de un tipo de autenticación, los usuarios anónimos también se denominan internamente usuarios "no autenticados".

Para restringir la visualización de productos solo a usuarios autenticados, deberá [configurar el permiso de acceso a la tienda](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-configuring-a-b2b-environment "configurar el permiso de acceso a la tienda").

## Pública con restricciones

Las tiendas públicas con restricciones permiten que solo los usuarios que están autenticados y que cumplen ciertos requisitos predeterminados accedan a las tiendas. En caso de que el usuario no cumpla ambas condiciones, no será posible visualizar ningún producto.

La definición de los criterios de acceso incluye los siguientes pasos:

1. [Registro de usuarios](#cadastro-de-usuarios)
2. [Aprobación de usuarios](#aprovacao-de-usuarios)
3. [Configuración del catálogo de productos](#configuracao-do-catalogo-de-produtos)
4. [Configuración de la estrategia de logística](#configuracao-da-estrategia-de-logistica)
5. [Configuración de precios](#configuracao-de-precos)
6. [Configuración de medios de pago](#configuracao-de-meios-de-pagamento)

### Registro de usuarios

El registro de usuarios se realiza a través de un formulario.

Este documento se crea de acuerdo con sus necesidades. La información básica y obligatoria que contiene sobre el usuario es la necesaria para que los responsables de la empresa puedan definir si un determinado cliente puede navegar por la tienda, o no, considerando algunos factores como los que se detallan a continuación.

| Contexto               | Funcionamiento de la tienda                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Canal de ventas        | A menudo se toma la decisión de potenciar un canal de ventas en particular. Por ejemplo, una industria se puede enfocar en crear una plataforma de <i>ecommerce </i>B2B para atender a sus distribuidores, revendedores y algunas empresas de porte grande.                                                                                |
| Cuestiones legales        | Hay empresas que solo venden sus productos a clientes que actúan como revendedores. Esto sucede, principalmente, en los casos en que los productos tienen muchas especificaciones técnicas, por ejemplo. En este caso, el revendedor debe estar muy familiarizado con las características de los productos, incluso puede actuar como asesor en el momento de la venta y ayudar en la instalación de tales productos.                                                                                                                                                          |
| Ubicación geográfica | En un inicio, una operación puede atender solo determinadas regiones para facilitar su control operativo y logístico. |

En el escenario B2B, normalmente se utiliza información básica como nombre, <i>email</i>, teléfono, calle, barrio y ciudad. Puede usar un formulario para recabar esta información. 

<div class="alert alert-danger" role="alert">El campo utilizado como regla condicional en la política comercial <strong>nunca podrá formar parte del formulario</strong>, ya que el usuario no puede realizar su propia aprobación, esa es una responsabilidad de la tienda. </div>

En VTEX, los formularios se crean a través de [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data") —base de datos de la tienda— que almacena la información de la base de clientes de la tienda organizando los datos recibidos a través de los formularios en campos agrupados en diferentes entidades. 

Para crear un formulario:

1. Cree una entidad de datos con toda la información que desea que conste en el formulario. En caso de que tenga dudas, consulte el artículo sobre [cómo crear una entidad de datos en Master Data](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265?&utm_source=autocomplete "cómo crear una entidad de datos en Master Data").

2. Cree un formulario utilizando el tutorial para [crear formularios en Master Data](https://help.vtex.com/pt/tutorial/criando-formulario-no-master-data/ "crear formularios en Master Data").

De esta forma, cuando un cliente complete el formulario, sus datos se incluirán en la tabla de clientes de Master Data.

<div class="alert alert-info" role="info">Puede optar por crear un formulario con más recursos, tales como introducción automática del código postal, pestañas múltiples o la validación de la CNAE (Clasificación Nacional de Actividades Económicas). Si opta por este tipo de formulario, revise la documentación técnica de <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-new-custom-page">VTEX IO</a>.</div>

### Aprobación de usuarios
La aprobación de los usuarios, así como el registro, se realiza en [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data"). Corresponde a los responsables de la gestión del <i>ecommerce</i> aprobar el acceso de los clientes al contenido de la tienda. 

Para aprobar el acceso de los clientes a la tienda, es necesario que apruebe cada uno de los clientes que se registraron al completar el formulario. La aprobación se puede realizar a través del Admin o vía API.

### Configuración del catálogo de productos

La exhibición de los productos de la tienda para determinados grupos de usuarios se debe definir a través de la configuración de las políticas comerciales de su tienda —usted puede [crear una nueva política comercial](https://help.vtex.com/pt/faq/como-contratar-nova-politica-comercial--frequentlyAskedQuestions_700 "crear una nueva política comercial") específicamente para este fin o configurar una política existente—, ya que la política comercial posee su propio catálogo y especificaciones de precios y logística.

En esta configuración, debe seleccionar los productos que se asociarán a la política comercial destinada al contexto B2B. En VTEX, puede asociar SKUs de forma individual por medio del Admin o en masa a través de la [API de Catálogo](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview "API de Catálogo").

<div class="alert alert-info" role="info">La configuración de SKUs vía <a href="https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview">API de Catálogo</a> —asociación o creación en masa o de forma individual— se recomienda para empresas que ya tienen una operación de <i>ecommerce </i>madura y que cuentan con una área de <i>ecommerce</i> propia que gestiona y mantiene el catálogo de productos existente. Toda esa infraestructura permite la importación de todo el catálogo con todas las configuraciones actuales mediante la <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integración con el ERP</a>.</div>

### Configuración de la estrategia de logística

La configuración de la logística se debe realizar por medio de la política comercial, tal y como se efectúa con el catálogo.  

Se necesita asociar la política comercial configurada para el escenario B2B con las estrategias de envío relacionadas con la logística del <i>ecommerce</i>, incluyendo las estrategias de envío/transportadoras, los muelles y los <i>stocks</i>.

Usted puede configurar estrategias de envío, muelles y <i>stocks</i> a través de la [API de Logística](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "API de Logísitica") o a través del [Admin](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx "Admin").

Cuando se configura a través del Admin, se necesita:

1. __Asociar la política comercial para B2B a un muelle__\: la asociación se realiza completando el campo Políticas de envío y los canales de venta de la pantalla de registro/edición del muelle —si no hay muelles registrados en su tienda, deberá [registrar un muelle](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW?&utm_source=autocomplete "registrar el muelle")—. En este campo, debe introducir la política comercial configurada para el escenario B2B.

2. __Asociar una transportadora al muelle elegido__\: esta asociación se realiza completando el campo Políticas de envío relacionadas que se muestra en la pantalla de registro/edición del muelle en el cual debe seleccionar la política comercial configurada para el escenario B2B. En caso de que no hayan transportadoras registradas en su tienda, deberá [registrar una transportadora](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l "registrar una transportadora").

3. __Definir un <i>stock</i> y asociarlo al muelle__\: esta asociación se realiza a través de la selección del muelle deseado en la pantalla de registro/edición de <i>stocks. </i>En caso de que no hayan <i>stocks</i> registrados en su tienda, deberá [registrar un <i>stock</i>](https://help.vtex.com/pt/tutorial/gerenciar-estoque "registrar un {i>stock<i}"). 

Cuando se efectúa la configuración a través de la [API de Logística](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "API de Logística"), se deben realizar los mismos pasos. Por tanto, puede utilizar el endpoint <code>[Post Create/Update Dock](https://developers.vtex.com/vtex-developer-docs/reference/docks#createupdatedock "POST Create/Update Dock")</code> para asociar la política comercial al muelle, así como para asociar la transportadora al muelle completando los parámetros `salesChannels` y `freightTableIds`, respectivamente.  

La asociación del <i>stock</i> al muelle, por su parte, se realiza a través del parámetro `warehouseDock` del endpoint <code>[POST Create/Update Warehouse](https://developers.vtex.com/vtex-developer-docs/reference/warehouses#createupdatewarehouse "POST Create/Update Warehouse")</code>.

### Configuración de precios

La configuración de precios se realiza a través de [tablas de precios](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "tablas de precios"), estas son un conjunto de precios aplicados a determinados SKUs en un contexto específico. Para realizar la configuración deberá:

1. [Crear una nueva tabla de precios](https://help.vtex.com/pt/tutorial/creating-price-tables--58YmY2Iwggyw4WeSCGg24S "Crear una nueva tabla de precios").
2. Editar la configuración de la plantilla de precios.
3. Importar la plantilla de precios configurada.

También puede crear y editar tablas de precios a través del endpoint <code>[POST Create/Edit Fixed Prices on a price table (or trade policy)](https://developers.vtex.com/vtex-developer-docs/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy "POST Create/Edit Fixed Prices on a price table (or trade policy)")</code>.

### Configuración de medios de pago

En el modelo de negocios B2B, una práctica común es la concesión de crédito a algunos de los clientes de confianza, generalmente revendedores, para que ellos puedan usar el crédito para comprar ítems del propio administrador de la tienda.

La gestión de crédito es un recurso versátil y, por eso, se utiliza en diferentes escenarios de negocio en el modelo B2B. Explicamos algunas de las situaciones en que las tiendas con diferentes contextos de negocio pueden emplear esta estrategia en el artículo [Gestión de créditos por medio de Customer Credit](https://help.vtex.com/pt/tutorial/gestao-de-credito-por-meio-do-customer-credit--5lihi3WBsV5mSIDqNvnoK0 "Gestión de créditos por medio de Customer Credit").

En VTEX, los administradores de tiendas pueden utilizar [Customer Credit](https://help.vtex.com/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0 "Customer Credit"), una aplicación en la que pueden ofrecer y administrar los créditos que conceden a sus clientes. Para instalar la aplicación, consulte el paso a paso completo en el artículo [Instalar Customer Credit](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs "Instalar Customer Credit").

<div class="alert alert-info" role="info">Los medios de pago convencionales, como tarjeta de crédito, tarjeta de débito y boleto bancario (disponible en Brasil), también se pueden configurar para el contexto B2B. La gestión de crédito es el método más utilizado por los clientes.</div>

Después de instalar la aplicación en su tienda, debe configurar Customer Credit como un medio de pago disponible.  De esta manera, sus clientes podrán finalizar las compras utilizando el crédito concedido. Para realizar la configuración, lea el tutorial [cómo configurar Customer Credit como condición de pago](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg#condicoes-de-pagamento "cómo configurar Customer Credit como condición de pago"). 

## Contenido adicional: diferencias de tributación

En Brasil, una de las particularidades de los negocios B2B es la forma en que los impuestos son incluidos en el valor total de cada ítem de una tienda. 

Lea el artículo [Tasas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/3DcO1XrLqlbZsq80zxSgZS "Tarifas") para obtener más información.

### Sistema de tributación simple 

A las tiendas que trabajan con un sistema de tributación simple en que solo se agrega un tipo de impuesto al precio del SKU, se les recomienda dos métodos para configurar el modelo de definición de precios de su tienda:

- A través de la configuración de [tablas de precios](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "tablas de precios"), en el caso de tributación, debe crear tablas que solo usen precios convencionales, ya que las tablas de precios promocionales no se pueden aplicar en este contexto. 

- Através de la aplicación de [tasas](https://help.vtex.com/pt/tutorial/como-criar-taxaimposto/ "tarifas") a los precios de los SKUs para que los impuestos no se muestren en el estante de la tienda. 

### Sistema de tributación complejo

Para las tiendas que trabajan con sistemas de tributación complejos en los que hay muchas variables en el cálculo de impuestos de los productos de un catálogo muy amplio, la forma más indicada de realizar el cálculo de la tributación es mediante la integración a un sistema externo.

VTEX cuenta con un [ protocolo de integración para servicios de tributación externos que conecta al sistema y envía la información del carrito de compra —como el estado de origen de los productos y del comprador— para que se realice el cálculo de la tributación de cada uno de los SKUs.  

Para obtener más detalles sobre el protocolo, consulte la siguiente documentación:

- [Visión general del sistema](https://developers.vtex.com/vtex-rest-api/docs/tax-services-overview "Visión general del sistema") 
- [Funcionamiento del protocolo](https://developers.vtex.com/vtex-rest-api/docs/tax-services-specification "Funcionamiento del protocolo") 
- [Cómo implementar Tax Service](https://developers.vtex.com/vtex-rest-api/docs/tax-services-recipe "Cómo implementar Tax Service") 
- [Ejemplo de implementación](https://github.com/vtex-apps/tax-protocol-example "Ejemplo de implementación")

## Contenido adicional: VTEX Intelligent Search

 [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb "VTEX Intelligent Search") es una aplicación de búsqueda que ayuda a los clientes en la jornada de compra sugiriendo productos relacionados con su perfil. 

En el contexto B2B, VTEX Intelligent Search es un recurso esencial que puede ser aprovechado en la búsqueda de ítems por medio de su <i>part number</i> (código referente al modelo de producto). 

Además, es un recurso que aporta otros beneficios para este contexto, como el registro de sinónimos y el cambio de relevancia de las palabras clave, por ejemplo.

Esta aplicación se puede incorporar a su <i>ecommerce </i>mediante la configuración de VTEX IO. Puede ver el paso a paso en la guía [cómo configurar VTEX Intelligence Search](https://vtex.io/docs/app/vtex.search@2.4.0/ "cómo configurar VTEX Intelligence Search").
