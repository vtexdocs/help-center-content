---
title: 'Cómo utilizar los triggers de MasterData V2 para interactuar con pedidos (orders)'
id: 4cqms9Z186yQQMvdxjflAg
status: DRAFT
createdAt: 2019-01-14T15:29:01.109Z
updatedAt: 2022-05-03T14:08:28.693Z
publishedAt: 
firstPublishedAt: 2019-01-14T15:58:19.843Z
contentType: tutorial
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: como-utilizar-los-triggers-de-masterdata-v2-para-interactuar-com-pedidos-orders
legacySlug: como-utilizar-los-triggers-de-masterdata-v2-para-interactuar-con-pedidos
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Esta guía utiliza el MasterData V2 y parte de la premisa de que usted conoce JSON Schemas.

Toda interacción con el MasterData V2 ocurre a través de la API. Recomendamos fuertemente el uso de Postman y que usted separe algún tiempo para estudiar nuestra [documentación](https://developers.vtex.com/reference/master-data-api-v2-overview).

Un trigger es una configuración de una acción a tomar (email o request HTTP) dada una condición predeterminada.

Usted puede utilizar expresiones dinámicas a través de `dot notation` en lugar de variables.

Por ejemplo, usted podría obtener el correo electrónico del usuario del pedido de esta manera: {!order.clientProfiledata.email}

En el ejemplo siguiente, vamos a configurar un trigger que será activado cuando el status de un pedido (order) cambia a facturado. Vamos a realizar un POST que contiene un JSON Schema con toda la información necesaria del trigger.

Consulte la documentación de la API del OMS. Alli usted encontrará la lista más actual de todos los status de pedidos. Por ejemplo: order-completed.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "status=devolucao-completed",
                   "active": true,
                   "action": {...

```
En el caso de condiciones más complejas, o status no ofrecido por la API del OMS, es posible crear campos y usar dot notation para realizar el efecto deseado.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "Body.ChildOne.ChildTwo=Foo",
                   "active": true,
                   "action": {...





```
