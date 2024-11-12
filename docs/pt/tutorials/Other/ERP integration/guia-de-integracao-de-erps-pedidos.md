---
title: 'Guia de integração de ERPs - Pedidos'
id: 3w09vFuYoUKcUyweWguoma
status: ARCHIVED
createdAt: 2017-09-11T22:24:49.039Z
updatedAt: 2020-06-04T01:06:08.130Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:36:11.243Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: integration-guide-for-erps-orders
locale: pt
legacySlug: guia-de-integracao-de-erps-pedidos
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

A única razão para a existência de uma loja é vender. Isto significa não apenas receber pedidos feitos por clientes, mas também fazer o fulfillment desses pedidos de maneira eficiente. 

Quanto maior a operação, maior a necessidade de uma plataforma automatizada para lidar com os pedidos recebidos por diferentes canais.

Neste artigo, você encontrará o principal método para entrada dos pedidos recebidos por sua loja em sua plataforma de fulfillment.

## Visão geral

A integração de um pedido compreende quatro momentos distintos, cada um deles sendo um pequeno processo por si só.

![ERP Orders 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png) 

## Download de pedido

A primeira coisa que você precisa para o download de um pedido é saber o momento certo de fazer isso. Para ajudá-lo nessa tarefa, a VTEX oferece o Feed de pedidos. Esse serviço informa mudanças importantes no workflow do pedido, especialmente mudanças no status dos pedidos.

Após decidir que é hora de levar um pedido para sua plataforma de fulfillment, você precisa apenas fazer o download dos detalhes desse pedido e dizer ao feed que ele não precisa enviar aquele evento novamente, uma vez que seu interesse nele terminou.

No fim, para os pedidos processados, você envia ao OMS uma mensagem de "Start Handling".

![ERP Orders 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png) 

### Chamadas de API

__1. Take feed event:__
[https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus)

```
curl --request GET \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed?maxlot={{maxLot}}' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}’
```

__2. Get order detail:__
[https://developers.vtex.com/reference/orders#getorder](https://developers.vtex.com/reference/orders#getorder)
```
curl --request GET \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__3. start-handling:__
[https://developers.vtex.com/reference/orders#starthandling](https://developers.vtex.com/reference/orders#starthandling)

Você também verá essa chamada em outros passos do processo de integração, com a mudança apenas do evento-alvo.

É muito importante chamar a transição "Start-handling", já que essa é a operação que liga o pedido e a contagem de estoque à reserva de estoque, no módulo de logística da VTEX. Nesse etapa o pedido vai ser alterado de "Pronto para o manuseio" para "Iniciar manuseio" e depois para "Preparando Entrega".

```
curl --request POST \
  --url `https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/start-handling` \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__4. Ack feed:__
[https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus)
```
curl --request POST \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
    "handles":[
        "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
    ]
}
```'
```

## Fatura

Agora o pedido está sendo processado por sua plataforma de fulfillment. Durante esse processo, você pode precisar fazer mudanças no pedido original, seja por conta de ruptura de estoque, seja por outra razão qualquer. Você pode desejar remover, adicionar ou alterar itens, causando ou não mudanças no valor do pedido.

Quando você estiver pronto para a entrega do pedido, é hora de informar isso à VTEX. Assim, a autorização de pagamento poderá ser capturada e o consumidor será notificado sobre o progresso.

![ERP Orders 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

### Chamadas de API

__1. Enviar mudanças para a loja:__
[https://developers.vtex.com/reference/orders#registerchange](https://developers.vtex.com/reference/orders#registerchange)

```
curl --request POST \
  --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/changes' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '{
  "reason": “Promotion by phone.”,
  "discountValue": 1000,
  "incrementValue": 0,
  "itemsRemoved": [
    {
      "id": "234794",
      "price": 600,
      "quantity": 2
    }
  ],
  "itemsAdded": [
    {
      "id": "234788",
      "price": 200,
      "quantity": 1
    }
  ]
}’
```

__2. Enviar fatura para a loja:__
[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)
```
curl --request POST \
    --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
    --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
    --data '{
  "type":"Output",
  "issuanceDate":"2010-01-31",
  "invoiceNumber":"9999",
  "invoiceValue":"10000",
  "invoiceKey": null,
  "invoiceUrl": null,
  "courier": null,
  "trackingNumber": null,
  "trackingUrl": null,
  "items": [
    {
      "id": "1234",
      "price": 10000,
      "quantity": 1
    }
  ]
}’
```

## Rastreamento de pedido

A última etapa do seu gerenciamento de pedido é enviar informações de rastreamento do pedido à VTEX.

Embora não seja um passo necessário para que o pedido chegue ao consumidor, esta é uma das funcionalidades mais importantes para uma boa experiência do usuário. Não existe como saber com precisão a localização do produto comprado.

Não há limite para o número de mensagens de rastreamento que podem ser adicionadas a uma fatura. Normalmente, é adicionada uma mensagem para cada evento de rastreamento até que os itens sejam entregues ao comprador. No caso de produtos digitais, este último evento seria a URL para download.

É importante ressaltar que essa informação é, na verdade, um conjunto de atributos de uma fatura. Portanto, pode ser enviada junto à fatura, no momento de envio à loja, caso você tenha essa informação nessa etapa.

![ERP Orders 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png) 

### Chamadas de API

__1. Enviar informação de entrega à loja:__
[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)
```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
 "type":"Output",
 "issuanceDate":"2010-01-31",
 "invoiceNumber":"9999",
 "invoiceValue":"10000",
 "invoiceKey": null,
 "invoiceUrl": null,
 "courier": null,
 "trackingNumber": null,
 "trackingUrl": null,
 "items": [
   {
     "id": "1234",
     "price": 10000,
     "quantity": 1
    }
  ]
 }
```
}’

__2. Enviar mensagens de rastreamento à loja:__
[https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber)

```
curl --request PATCH \
  --url https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice/{{invoiceNumber}} \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
  "trackingNumber": "87658",
  "trackingUrl": null,
  "courier": null
}
```

## Passo extra: Cancelamento de pedido

Quando, por algum motivo operacional, você precisar cancelar o pedido sendo processado, uma mensagem de cancelamento pode ser enviada ao workflow do OMS. Se o pedido estiver em um status que não permite cancelamento, aparecerá um erro.

__Atenção__: pedidos com fatura não podem ser cancelados.

### Chamada de API

[https://developers.vtex.com/reference/orders#cancelorder](https://developers.vtex.com/reference/orders#cancelorder)
```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/cancel' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```
