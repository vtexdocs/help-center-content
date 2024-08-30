---
title: 'Crear formulario para registrar información usando Master Data Newsletter (MD)'
id: 2R0OaawoyAUKg0CmUKAGo0
status: DRAFT
createdAt: 2017-06-08T01:15:53.801Z
updatedAt: 2020-08-06T19:33:15.607Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:16:56.064Z
contentType: tutorial
productTeam: Master Data
author: TAUXpa4XWCsIaUOoksGIE
slug: crear-formulario-para-registrar-informacion-usando-master-data-newsletter
locale: es
legacySlug: crear-formulario-para-registro-de-informacion-de-newsletter-usando-master
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

El objetivo de este artículo es que pueda entender el paso a paso de la creación e implementación de un formulario que permita el registro de la información de Newsletter en el módulo Master Data (MD).

IMPORTANTE: No se recomienda el uso de este control para el manejo de los registros de datos de clientes, teniendo en cuenta que los registros quedan almacenados sólo en el Administrador de VTEX, por lo que no es recomendable tener por separado datos de los clientes, por un lado las suscripciones al Newsletter y por el otro los registros del Checkout. Al no hacer parte del módulo Master Data (MD), solo tendrá la funcionalidad de exportar el listado de los registros, búsqueda o filtros. Por otro lado, teniendo los registros del Newsletter en Master Data (MD) usted tendrá los datos de los clientes centralizados, podrá administrar la información por medio de API, configurar triggers para envíos de correo, realizar integraciones con sistemas externos, entre otros. (Ver articulo).

Para poder realizar la creación del formulario de nuestro Newsletter es importante entender que se puede conseguir el objetivo por dos caminos principales:

1. Creando una nueva entidad de datos para el manejo de la información relacionada al Newsletter. Esta entidad será diferente a la básica de Clientes, lo que permitirá obtener una independencia de la información de Clientes y registros para el Newsletter (ver: http://help.vtex.com/es/tutorial/entidades-de-datos-creacion-y-mantenimiento/).

2. Creando un formulario asociado a la entidad de datos Clientes y que permitirá hacer el registro o edición de información dentro de dicha entidad. Si necesita de datos que actualmente no se encuentran en la entidad Clientes, usted podrá agregar más campos según la necesidad  (ver: http://help.vtex.com/es/tutorial/creando-formulario-en-master-data/).
  - PRECAUCIÓN: Sólo modificar la estructura de las entidades nativas de la plataforma con la ayuda de un agente de VTEX o agencia especializada. Un cambio incorrecto puede interferir con el flujo de compras y generar errores en la tienda. Entidades nativas: Cliente (cliente) y Endereço (dirección).
 
Luego de haber realizado las configuraciones anteriores, es necesario incluir en nuestro CMS el código HTML y JS que serán los encargados de realizar las peticiones al API de VTEX.
 
En este enlace podrán encontrar un ejemplo de un HTML y JS que sirve de guía para la implementación en el CMS.
 
[Código de ejemplo](https://assets.contentful.com/alneenqid6w5/xC0HA56uzIO8Ueca2c02g/eb126bee0a1618dff60da75c997a85e2/newsletterMasterData.rar).
 
IMPORTANTE: Este plugin fue desarrollado para ayudar a desarrollar un formulario básico usando Master Data (MD). VTEX NO ofrece soporte a esa extensión y su código es abierto, pudiendo sufrir modificaciones y adaptaciones.
