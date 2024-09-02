---
title: 'VTEX Invoice Notifier'
id: 5yEdNF95nwbJBbWst128pL
status: DRAFT
createdAt: 2019-08-05T14:15:29.750Z
updatedAt: 2020-04-08T14:40:07.701Z
publishedAt: 
firstPublishedAt: 2019-08-05T16:04:44.610Z
contentType: tutorial
productTeam: Post-purchase
author: 3uCjaRpzeMieQWwWycYAMG
slug: vtex-invoice-notifier
locale: pt
legacySlug: vtex-invoice-notifier
subcategory: 54gbzsku02c4bKmgFbp3v3
---

![invoice-flow](https://images.ctfassets.net/alneenqid6w5/1J8NLy4mw7miEPixtV20G8/80c960a20017f2058209c58681fae862/invoice-flow.svg)

## Instalação da app - VTEX Invoice Notifier

Usuário deve fazer instalação da APP através da VTEX App Store - apps.vtex.com

*Ou fazer pela CLI do VTEX IO - vtex install vtex.invoice-notifier@0.x*

Ao realizar a instalação, uma página de configuração será exibida, nela o usuário insere o endpoint de comunicação com o sistema responsável pela emissão das notas.

![install-app](https://images.ctfassets.net/alneenqid6w5/1QCqfd7Yc3lBF2BWUjPQ2g/888f9a2e18a90fa92f7b8ad32048d17d/install-app.png)

## OMS notificar faturador

Com o endpoint cadastrado na APP o OMS passa a reconhecer que está habilitado para essa loja a possibilidade de notificar um sistema externo de faturamento.

O operador deve, no pedido, selecionar o pacote ou os itens que deseja faturar e gerar uma nova notificação:

![notify-invoicer1](https://images.ctfassets.net/alneenqid6w5/1pTJ8sEgLo7cpyYcVFQKxR/7a0b066fc646d1941f3ac704023ea5f7/notify-invoicer1.png)

![notify-invoicer2](https://images.ctfassets.net/alneenqid6w5/59qqed77NuvF0rrlpdABe9/1108b18f8eba54bf25c6766803578b42/notify-invoicer2.png)

quando o usuário do OMS apertar o botão __Request Invoice__, a app irá realizar um request POST no endpoint cadastrado na APP com o seguinte BODY exemplo:


```json
{
  "orderId": "123",
  "notificationId": "fd3f5e70-8b60-11e8-b707-1195e463c587",
  "callbackUrl": "https://instore.myvtex.com/_v/invoice-notifier/123/invoice"
}
```

O faturador deve responder __200, 201, 202 ou 204__ para essa chamada, de forma que o OMS entenda que a notificação foi feita com sucesso, caso contrário, a UI irá exibir uma mensagem de falha de comunicação com o sistema faturador.


### CallbackUrl property

A propriedade *callbackUrl* é uma __propriedade__ que especifica qual endereço deve ser utilizado para o __envio do invoice gerado__. Esse fluxo é descrito na imagem inicial do fluxo.

Essa propriedade deve ser utilizada para saber qual endereço enviar o Invoice. 

Uma vez notificado com sucesso, a APP grava no Banco de Dados (VBASE) essa notificação.

![callBackProperty](https://images.ctfassets.net/alneenqid6w5/POhuHliun9MO0hYgTmPvr/1df598855b888b113ef035df3502134d/callBackProperty.png)

## Faturador pegar detalhes da nota

Com a notificação em mãos o Faturador deve pegar os detalhes dessa Invoice (notificação)  no banco de dados (VBASE). Pois a API de comunicação passa apenas o pedido e o id da notificação.

__GET__
```
http://{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/:notificationId
```
__HEADERS__

```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’

ou

‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```

__RESPONSE__

```
{
  "orderId": "123",
  "notification": {
    "id": "fd3f5e70-8b60-11e8-b707-1195e463c587",
    "items": [
      {
        "itemIndex": 0,
        "quantity": 1
      }],
    "changedItems": [ {
	"200342",
	 "230298"
	} ],
     "observation": "AGO2019"
  }
}
```

- orderId == id do pedido
- notification.id == hash que identifica essa solicitacao de picking no BD.
- `items[0]` == array que contém o índice do item no pedido e a quantidade desse item presente nessa notificação
- `changedItems[0]` == array de skus que foram inseridos no pedido após o fechamento do mesmo
- observation == string que recebe uma mensagem de observaçao escrita na interface

Além de buscar a Notificação completa, é necessário ainda pegar o pedido completo, para ter todos os detalhes de cada item e em seguida ainda buscar no catálogo qualquer detalhe fiscal, como o NCM.

Existe uma API específica para pegar todas as notificações de um pedido caso o Faturador queira incluir a validação mais completa:

__GET__

```
{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/
```

## Pegar dados completos do pedido

Ao ser notificado de um novo pedido, e com os detalhes do invoice em mãos será necessário buscar o pedido completo, pois a notificação guarda somente o índice do item a ser faturado. Índice do array de itens presente no pedido.

### GET ORDER

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}
```

O response dessa API contém os dados completos do pedido. Para a emissão da invoice é necessário algumas partes do objeto, como Dados do Cliente, dados de entrega, totalizadores de itens - frete - descontos, dados do item, CNPJ

É recomendável o backend fazer uma validação se o pedido já contém nota, se já está faturado (é possível haver um faturamento parcial).

## Pegar dados NCM de cada produto

A VTEX possui um campo no cadastro de produto - TaxCode - que deve receber o NCM do produto. Esse campo está presente nos detalhes do pedido e pode ser usado para o motor de parametrizações fiscais fazer o cálculo de impostos.

Alguns lojistas não usam esse campo e passam o NCM como especificação de produto. Nesse modelo e necessário um request adicional ao catálogo para recolher esses detalhes:

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/products/{{productId}}/specification
```

__RESPONSE__

```
[
   {
       "Value": [
           "6914.10.00"
       ],
       "Id": 19,
       "Name": "NCM"
   }
]
```

## Identificar tipo de entrega do pedido

Um pedido pode ser de dois tipos, __Delivery__ ou __Pickup-in-point__.

Um pedido delivery possui os dados do cliente, ou seja, possui todos os dados de identificação de forma a se enquadrar no cenário de Nota Fiscal Eletrônica (para os estados que exigem NFe e SAT).

Pedidos de Pickup podem conter a identificação do cliente ou não. Um pedido feito no inStore pode ser feito de forma anônima, ou seja, sem identificação. Nesse caso é obrigatório a emissão de uma NFCe - Nota Fiscal do Consumidor Eletrônica (para os estados específicos).

A forma base de identificar se um pedido é Delivery ou Pickup é através do objeto __shippingData.logisticsInfo[0].deliveryChannel__

![shipping-type](https://images.ctfassets.net/alneenqid6w5/6p9yfYsHRbz4xCX9sjrGx9/cfeb4ae8afe0d47f53e49a556c51ccc6/shipping-type.png)

## Inserir nota fiscal no pedido

Uma vez enviado com sucesso a Nota para a SEFAZ é necessário incluir essa NOTA/CUPOM no OMS e para isso enviar para o endereço da propriedade __callbackUrl__.

O payload enviado deve ser o seguinte:

__POST__ `{{callbackUrl}}`

Exemplo de callbackUrl: `https://{{account}}.myvtex.com/_v/invoice-notifier/{{orderId}}/invoice`

```
{
 "type":"Output",
 "issuanceDate":"2018-01-31",
 "invoiceNumber":"9999",   // número da NF
 "invoiceValue":"10000",  // valor final da NF
 "invoiceKey": null,  // chave de acesso à NF
 "invoiceUrl": null,  // link para a danfe ou cupom
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
 
- id == id do sku (disponível no GET ORDER `items[0].id`)
- invoiceNumber == número da Nota
- invoiceValue == somatório do sellingPrice dos skus presentes nessa -  - nota + valor de frete rateado desses itens
- invoiceKey == chave da Nota

O OMS aceita múltiplas Invoices, e o pedido atinge o status FATURADO apenas quando o total da soma de todos invoices for igual ao total do pedido.

O OMS __não__ guarda o XML da nota, apenas o link para visualização.

## Deletar notificação de invoice do BD

Após a inserção com sucesso da Nota Fiscal no pedido é necessário EXCLUIR a notificação do banco de dados VBase. Esse passo é necessário para que não ocorra o cenário de um usuário do OMS se confundir e excluir a notificação e tentar notificar novamente.

__DELETE__

`https://{{accountName}}.myvtex.com/_v/invoice-notifier/{{orderId}}/{{notification.id}}`

__HEADERS__

```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’
ou
‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```

## Faturamento parcial de pedido

É comum o cenário de ruptura, ou seja, um ou mais itens não estarem disponíveis para entrega. Nesse cenário o operador do OMS pode faturar parcialmente um pedido.

Em casos de faturamento parcial é importante atentar para o rateio do valor do Frete.

O comportamento correto é seguir rateio do valor do frete referente aos itens dessa fatura parcial.

No JSON do pedido, dentro de __logisticsInfo__ existe um array com a informação de frete para cada produto (cada índice de produtos).

O rateio é feito por produto, ou seja, caso exista uma quantidade X desse mesmo produto e a fatura parcial é de uma quantidade inferior a X é necessário fazer o rateio desse valor pela quantidade de itens.

Ex:
Digamos que tivéssemos faturando apenas 1 unidade do produto, ao invés de todas as 3. O valor de frete desse produto (2,50) seria dividido por 3 unidades:

```
"logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",
            },
            {
                "itemIndex": 1,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Transportadora",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",                  
              }
        ]
```

## Notificação de devolução

A notificação feita para gerar uma Nota Fiscal de devolução é do tipo output.

```
"type": "Output"
```

No entanto existem dois modelos de devolução possíveis. Quando uma devolução é feita na própria loja física onde a compra original foi feita e ainda esteja em tempo hábil de efetuar o estorno pela própria máquina do cartão chamamos essa operação de cancelamento.

Em outros casos a operação de devolução pode ser feito de um pedido feito em alguma outra localidade. Nessa situação a notificação levará e consideração essa informação dentro do campo __observation__.

__DEVOLUÇÃO__

```
{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore: { \"tradeAccount\": \"lojafarmgavea\" }",
   "items": [...],
}
```

__CANCELAMENTO__

```
{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore",
   "items": [...],
}
```
