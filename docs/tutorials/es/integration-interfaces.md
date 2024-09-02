---
title: 'Cómo funcionan las interfaces de integración de VTEX'
id: tutorials_743
status: DRAFT
createdAt: 2017-04-27T21:59:00.743Z
updatedAt: 2020-06-04T01:31:18.846Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:41.246Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: interfaces-de-integracion
locale: es
legacySlug: interfaces-de-integracion
subcategory: 1vwB9FtTSQmcSewQw02QoW
---

La integración con un ERP le permite realizar el control de stock con relación a pedidos realizados, bajas de reserva, manejo de precios, tanto para la definición de valores de tabla y para aplicaciones de campañas promocionales, además de la facturación, asociación de factura a la compra, expedición, entre otros diversos recursos. Es decir, permite gestionar todas sus relaciones de productos, precios, stocks, administración de pedidos, transportistas, entre otros a través de su ERP.

En el sistema de VTEX, usted conseguirá realizar las integraciones de su ERP por diferentes Interfaces: __API REST__ (lenguaje en JSON) y __Web Service__ (lenguaje en SOAP - XML) - que está en desuso.

![Interface de integração ES](//images.ctfassets.net/alneenqid6w5/1qC18Uk3YAIWiesmEco8us/72aaeac0b223b07ab69d2d6df38f2eb2/Interface_de_integra____o.png)

Además del ERP, para que el intercambio de información ocurra, es necesario que exista un sistema para hacer la comunicación entre el ERP y VTEX. Este sistema se llama __Integrador__. Generalmente, el propio ERP desarrolla su integrador, pero también puede ser desarrollado por la propia tienda o por una agencia contratada por la tienda.

Para integrar ERPs a VTEX, utilice nuestra [guía específica](/es/tutorial/guia-de-integracion-de-erps/).

## Interfaces

### API REST

Esta interfaz es la más actual y más recomendada para utilizar junto al sistema de VTEX.

Sólo para el Catálogo (Categorías, Marcas, Productos y SKU) el WebService puede realizar algunas acciones que las APIs por ahora no alcanzan realizar. Sin embargo, la habilitación de nuevas API se producen con frecuencia y pueden ser acompañadas en nuestro [Developer Docs](http://help.vtex.com/developer-docs/).

Por utilizar lenguaje JSON, su procesamiento es mucho más ligero y simple en estructura, que le permite trabajar mayores números de peticiones e incluso diseñar flujos para alimentar un B.I. Este es el lenguaje utilizado para la comunicación entre los módulos VTEX.

Esta interfaz tiene sus particularidades en relación a la autenticación, estructuración de parámetros de búsqueda, body para peticiones y peticiones que no necesitan de body, entre otras. También tendremos para cada módulo de VTEX (Gestión de pedidos, Pagos, MasterData, entre otros), sus respectivas bibliotecas de API cada una para su función.

A continuación se incluyen documentación que puede ayudar a iniciar las integraciones por la interfaz de API REST:

- [Bibliotecas de API por módulos](http://help.vtex.com/developer-docs/)
- [Autenticándose con usuario y contraseña en la interfaz API REST](https://help.vtex.com/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones--43tQeyQJgAKGEuCqQKAOI2)
- [Usando los filtros de Gestión de pedidos en su API](/es/tutorial/uso-de-los-filtros-del-oms-en-el-api/)
- [Tabla de estado de pedidos (todas las interfaces)](/es/faq/de-para-el-estado-de-las-solicitudes/)

### Web Service

<div class="alert alert-warning">
El Web Service VTEX debe ser usado lo menos posible para los procesos de integración.
</div>

Con excepción del Catálogo (Categorías, Marcas, Productos y SKU), que está con su API REST en desarrollo, todos los demás módulos de VTEX poseen APIs REST bien definidas y de alto rendimiento.

Nuestro WebService trabaja con una biblioteca WSDL completa y fácil en la adaptación para las integraciones en diferentes tipos de programaciones. En dicha biblioteca tendremos todos los métodos hoy disponibles para las diferentes aplicaciones con respecto a los recursos de su organización.

Al igual que la interfaz de API REST, esta interfaz tiene sus particularidades en relación a la autenticación, las versiones, los tipos de datos, entre otros.

A continuación se incluye documentación para ayudar a iniciar las integraciones por la interfaz de WebService:

- [Integración de ERPs con tiendas VTEX](http://vtex.github.io/docs/integracao/erp/index.html)
- [Cómo autenticarse en Webservice](/es/faq/como-crear-usuario-webservice/)
- [Utilizando SOAP UI para reproducir escenario del WebService](/es/tutorial/probando-webservice-con-soapui/)
- [Manual de las Clases y Métodos usados en el WebService](/es/tutorial/manual-de-clases-y-metodos-utilizados-en-webservice/)


