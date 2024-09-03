---
title: 'Guía de integración de ERPs'
id: 3VuOwNLmb624ImooEIIkmO
status: ARCHIVED
createdAt: 2017-09-11T20:55:01.200Z
updatedAt: 2020-06-04T01:06:47.552Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:05:36.380Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracion-de-erps
locale: es
legacySlug: guia-de-integracion-de-erps
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

<div class="alert alert-danger" role="alert">
   Esta guía de integración está desactualizada y se archivará en <strong> junio de 2020 </strong>. No recomendamos usar el Webservice desde el anuncio de la <a href="https://developers.vtex.com/changelog/new-endpoints-available-in-catalog-api" target="_blank">nueva API del Catálogo</a>. Consulte la<a href="https://developers.vtex.com/docs/erp-integration-guide" target="_blank">nueva guía de integración de ERP</a> disponible en nuestro Developer Portal.
</div>

La integración de ERPs con tiendas VTEX se realiza a través de Webservice (SOAP: XML), y API REST (JSON). El [Webservice VTEX](https://help.vtex.com/tutorial/manual-de-clases-y-metodos-utilizados-en-webservice--tutorials_749) debe ser utilizado lo menos posible para los procesos de integración. Hoy con excepción del **catálogo**, todos los demás módulos de VTEX poseen APIs REST bien definidas y de alto rendimiento.

Conozca más sobre nuestras [interfaces de integración](/es/tutorial/interfaces-de-integracion).

## Integración rápida de Catálogo

Una integración expresa, sólo con los flujos básicos y necesarios. Más información [aquí](/es/tutorial/guia-de-integracion-de-erps-catalogo-expreso).

## Integración completa de Catálogo

Una integración completa, la mayoría de los flujos, implica más esfuerzo en la implementación. Más información [aquí](/es/tutorial/guia-de-integracion-de-erps-catalogo-completo)

## Integración de precios

La actualización de los precios en la tienda debe hacerse a través de la API REST de Pricing, disponibles en [Developer Docs](https://developers.vtex.com/reference/pricing-api-overview).

## Integración de inventario

La actualización de las existencias de la tienda debe realizarse a través de la API REST de Logistics, disponible en [Developer Docs](http://help.vtex.com/developer-docs/).

## Integración de pedidos

El ERP busca una lista de pedidos disponibles para integración, busca cada pedido en VTEX e inserta en el ERP, advierte a VTEX que la solicitud está en el ERP. Después el ERP envía la factura y el seguimiento a VTEX. Más información [aquí](/es/tutorial/guia-de-integracion-de-erps-pedidos).


### Pooling

El envío o el consumo de datos en un proceso de integración debe ejecutarse sólo cuando sea necesario, es decir, el dato sólo debe enviarse desde el ERP a la plataforma VTEX cuando realmente se cambia.

Se aconseja **NO** hacer una integración que barre entidades enteras del ERP y actualiza todos los datos en la plataforma VTEX de vez en cuando. Además de consumir y procesar datos innecesariamente, esto no funcionaría para tiendas con más de 5 mil SKU en el catálogo.

### Herramientas de apoyo al Integrador

Recomendamos algunas herramientas que son de extrema importancia para cualquier integrador:

#### SoapUI

Esta herramienta es muy importante en el proceso de integración, pues permite simular los métodos del Webservice, generando automáticamente el request XML.

Más información en: [Probar Webservice con SoapUI](/es/tutorial/probando-webservice-con-soapui).

#### Postman

Herramienta que permite probar, almacenar historial, guardar colecciones de peticiones del acceso de todas las API de los módulos VTEX (OMS, Logistics, Pricing, GCS, etc).

Es de suma importancia que el integrador tenga el conocimiento de herramientas de ese tipo, u otras parecidas antes de iniciar un proceso de integración usando Webservice SOAP o APIs REST VTEX.

## Acceso y credenciales

Toda llamada hecha al Webservice debe ser en "https" y un usuario y contraseña son necesarios para iniciar la conexión. Las llamadas a las API de REST también se deben realizar en "https" y deben contener en su encabezado las claves de autenticación.

El endpoint del webservice para trabajar con los métodos de catálogo es `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl`. Las API REST poseen sus propios endpoints en `https://api.vtex.com`.

- [Cómo configurar usuarios pro Webservice](/es/faq/como-crear-usuario-webservice)
- [Cómo autenticarse en la API](/es/faq/como-autenticarse-en-la-api)

Para fines de trazabilidad, cada integración (diferentes sistemas o ERP) debe poseer su usuario exclusivo.

Nota: El Webservice VTEX trabaja con esquema de escalonamiento en la demanda, pudiendo así escalar nuevas máquinas de acuerdo con la demanda de acceso. Por lo tanto, los clientes que se instalan en sistemas operativos que hacen cachés largos de DNS no son compatibles (Windows XP, Windows Server 2003, versiones antiguas de Apache).
