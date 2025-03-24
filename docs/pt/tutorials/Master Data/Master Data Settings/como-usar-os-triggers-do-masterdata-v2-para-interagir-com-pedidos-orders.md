---
title: 'Como usar os triggers do MasterData V2 para interagir com pedidos (orders)'
id: 4cqms9Z186yQQMvdxjflAg
status: ARCHIVED
createdAt: 2019-01-14T15:29:01.109Z
updatedAt: 2022-05-03T14:08:28.693Z
publishedAt: 
firstPublishedAt: 2019-01-14T15:58:19.843Z
contentType: tutorial
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slugEN: how-to-use-masterdata-v2s-triggers-to-interact-with-orders
locale: pt
legacySlug: como-usar-os-triggers-do-masterdata-v2-para-interagir-com-pedidos-orders
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---


Este guia utiliza o MasterData V2 e assume conhecimento de JSON Schemas.

Toda interação com o MasterData V2 ocorre atraves do API.  Recomendamos fortemente o uso do Postman e que você separe tempo para estudar nossa [documentação](https://developers.vtex.com/reference/master-data-api-v2-overview).

Um trigger é uma configuração de uma ação a ser tomada (email ou request HTTP) dado uma condição predeterminada.

Você pode usar expressoes dinamicas através de `dot notation` no lugar de variaveis.
Por exemplo, você poderia obter o email do usuario do pedido desta forma:

{!order.clientProfiledata.email}

No exemplo abaixo, vamos configurar uma trigger que vai ser ativada quando o estado de um pedido (order) muda para faturado.  Você vai realizar um POST contendo um JSON Schema contendo toda a informação necessaria do trigger.

Por favor consulte a documentação do API do OMS.  La você encontra a lista mais atual de todos os status de pedido.  Ex: order-completed.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "status=devolucao-completed",
                   "active": true,
                   "action": {...

```
No caso de condições mais complexas, ou status não oferecido pelo API do OMS é possivel criar campos e usar dot notation para realizar o efeito desejado.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "Body.ChildOne.ChildTwo=Foo",
                   "active": true,
                   "action": {...





```
