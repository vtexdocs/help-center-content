---
title: '¿Por qué el pago por boleto registrado requiere autenticación?'
id: 5gpsx6cUXKGG4asA6aiCki
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.913Z
updatedAt: 2019-12-31T15:20:11.716Z
publishedAt: 2019-12-31T15:20:11.716Z
firstPublishedAt: 2019-01-24T22:01:07.101Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: why-does-payment-with-registered-bank-slip-require-authentication
locale: es
legacySlug: por-que-el-pago-por-boleto-registrado-requiere-autenticacion
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

El boleto registrado es una forma de pago que contiene datos sensibles del cliente que está realizando la compra.

Cuando un cliente rellena sus datos para cerrar un pedido, la información de __Primero nombre, __Último nombre, __CPF__ etc. se utiliza para generar el boleto registrado.

Esta información se guarda en el perfil del cliente y se muestra en el boleto registrado. De esta manera, la autenticación funciona como una medida de seguridad para que los defraudadores no puedan acceder a esa información.

Por su cuenta, el login se solicita tanto en el momento de __elegir el boleto registrado como medio de pago__ cuanto para __bajar el boleto en la página de cierre de compra (order placed)__.

>ℹ️ La autenticación se requiere sólo a partir de la segunda compra. Como en la primera compra los datos se guardan por primera vez, no hay necesidad de autenticación. El boleto registrado será emitido con los datos informados en esta primera compra y solamente la persona que llenó las informaciones tendrá acceso a ellas.
