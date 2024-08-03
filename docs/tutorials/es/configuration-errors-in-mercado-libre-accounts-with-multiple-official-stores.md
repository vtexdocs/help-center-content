---
title: 'Error de configuración en cuentas de Mercado Libre con múltiples tiendas oficiales'
id: 16PIrnBPonKv5Eb3SBdKmq
status: PUBLISHED
createdAt: 2021-08-05T20:07:28.907Z
updatedAt: 2021-09-03T22:26:40.776Z
publishedAt: 2021-09-03T22:26:40.776Z
firstPublishedAt: 2021-08-06T23:27:47.273Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: error-de-configuracion-en-cuentas-de-mercado-libre-con-multiples-tiendas
locale: es
legacySlug: error-de-configuracion-en-cuentas-de-mercado-libre-con-multiples-tiendas
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

<div class="alert alert-info">
En caso de que tenga tiendas oficiales en Mercado Libre, esta documentación puede ser relevante. Mercado Libre tiene sus propios parámetros de certificación para que los sellers sean tiendas oficiales. Si desea obtener más información, contacte a su asesor de Mercado Libre.
</div>

El [seller](https://help.vtex.com/es/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) integra sus [subaccounts](https://help.vtex.com/es/tutorial/o-que-e-store-name--3gh9mTNeMgs6Qe44e8IqQK?&utm_source=autocomplete) con las [tiendas oficiales](https://www.mercadolibre.com.ar/tiendas-oficiales) del usuario de [Mercado Libre](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/51oWBHvVxSs8eAwLQhSbSd), esto puede producir un error en la importación de productos desde la integración con dicha plataforma.

Este artículo tiene el objetivo de ayudar a los usuarios a solucionar este problema.

El error se produce cuando el seller VTEX tiene dos o más subaccounts y utiliza ambas para integrarse con un único usuario de Mercado Libre. 

En este escenario, si un cliente de Mercado Libre realiza una compra con dos o más productos de diferentes tiendas oficiales del seller, el pedido no se importará a ninguna de las subaccounts de VTEX. Esto se debe a que los productos del carrito pertenecen a diferentes subaccounts, por lo que el pedido se divide entre ambas.

VTEX no recomienda este tipo de configuración porque los pedidos no se integrarán.

![cenario problemaES](https://images.contentful.com/alneenqid6w5/7Dq2eWaMl08r5O0ntzRRGM/5c9f9c1c94a09c75ad3b22da4988942e/cenario_problemaES.JPG)

Sin embargo, en la integración de las tiendas VTEX con Mercado Libre, hay dos escenarios para evitar este error. Por eso es necesario que su tienda tenga la siguiente configuración:

- [Una única subaccount VTEX y un solo usuario de Mercado Libre](#una-unica-subcuenta-vtex-y-un-solo-usuario-de-mercado-libre).
- [Múltiples subaccounts VTEX y diversas tiendas oficiales](#multiples-subcuentas-vtex-y-diversas-tiendas-oficiales).

## Una única subaccount VTEX y un solo usuario de Mercado Libre

El seller utiliza una única subcuenta en VTEX y solo se integra con una cuenta en Mercado Libre. Esta cuenta de Mercado Libre puede gestionar dos o más tiendas oficiales. 

En este escenario, si un cliente de Mercado Libre realiza una compra y el carrito contiene dos o más productos de diferentes tiendas oficiales del seller, el pedido se importará en VTEX correctamente. Esto se debe a que los productos que se anuncian en Mercado Libre forman parte del catálogo de una única subcuenta VTEX.

![cenario unicousuarioES](https://images.contentful.com/alneenqid6w5/2ioz7uT9i8krPZEmXC9HVw/7fafd490d3be84cdb63270afde292b27/cenario_unicousuarioES.JPG)

## Múltiples subaccounts VTEX y diversas tiendas oficiales

El seller VTEX tiene dos o varias subaccounts y utiliza cada una de ellas para integrarse con diferentes tiendas oficiales de Mercado Libre. 

En este escenario, si un usuario realiza una compra en Mercado Libre y el carrito contiene dos o más productos que pertenecen a diferentes subaccounts, los pedidos se integrarán normalmente en cada subcuenta VTEX. Esto ocurre porque cada pedido generado en Mercado Libre está vinculado a una subcuenta diferente en VTEX, por eso los productos vendidos coinciden con el catálogo de cada subcuenta.

![cenario multiplosES](https://images.contentful.com/alneenqid6w5/2CEz1Aa9kesmkS0BU8A1HH/8f42b09ce80f940eb6280555d3f600c0/cenario_multiplosES.JPG)
