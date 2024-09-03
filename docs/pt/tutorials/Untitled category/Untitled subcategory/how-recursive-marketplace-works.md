---
title: 'Como funciona o Marketplace Recursivo'
id: 6Cfx9xrJb61RZFc2GZaxCv
status: ARCHIVED
createdAt: 2019-03-12T21:51:12.693Z
updatedAt: 2019-12-31T15:27:53.350Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slug: como-funciona-o-marketplace-recursivo
locale: pt
legacySlug: como-funciona-o-marketplace-recursivo
subcategoryId: unknown-subcategory
---

Antes, para uma loja VTEX conseguir vender os produtos das suas franquias em um marketplace externo, era necessário configurar a integração de todas as lojas franquias, ou seja, de todos os sellers, com o marketplace desejado. 

Essa estrutura, além de não ser escalável, desperdiça a capacidade omnichannel da VTEX como o uso do _change seller_, funcionalidade que concede autonomia aos marketplaces para a troca de seller, isso é, para a troca de quem realiza a entrega do pedido. 

Com o __Marketplace Recursivo__, todas as [contas-franquias](https://help.vtex.com/tutorial/definicoes-de-conta-franquia-e-seller-white-label?locale=pt) estão completamente integradas à conta principal. Isso significa que, quando a conta principal configurar uma integração com um marketplace externo, as contas-franquias estarão automáticamente integradas a ele também, não sendo mais preciso gerenciar cada franquia individualmente para configurar sua integração ao marketplace. 

Ao permitir que todo o estoque de uma rede de lojas físicas seja integrado a marketplaces externos sem esforço, a funcionalidade de Marketplace Recursivo cria os __pedidos de cadeia__, ou seja, pedidos de agentes intermediários cujo fluxo é levar o pedido da sua origem ([marketplace](https://help.vtex.com/tutorial/o-que-e-um-marketplace?locale=pt)) ao seu destino ([seller](https://help.vtex.com/tutorial/o-que-e-um-seller?locale=pt)). 

Para entender melhor o cenário, suponha que uma conta franquia queira vender seus produtos em um marketplace externo. A conta principal atuará como _seller_ do marketplace em questão e, ao mesmo tempo, como _marketplace_ da sua conta franquia. Portanto, os pedidos de cadeia têm características tanto de _marketplace_, por assumirem o papel de marketplace de um seller, assim como de _seller_, por também serem sellers de um marketplace. 

Dessa forma:

- __Quando uma loja VTEX for a fonte de um pedido__: pedido de Marketplace com Checkout Workflow.

- __Quando uma loja VTEX for o destino de um pedido__: pedido de Seller com Fulfillment Workflow. 

- __Quando uma loja VTEX for intermediária no fluxo de um pedido__: pedido de cadeia com __Chain Workflow__:

![marketplace-recursivo-chain-order-workflow](https://images.ctfassets.net/alneenqid6w5/1mYtSFQxV7pnlrp746nnQ4/336550750f99d86b90851742fda8f724/marketplace-recursivo-chain-order-workflow.png)


## Configuração

Para usar essa funcionalidade, é preciso que a loja que assumirá o papel de marketplace no fluxo do pedido (elo mais próximo ao cliente) ajuste suas __APIs de Checkout__. 

Além dos novos campos `marketplaceServiceEndpoint` e `marketplaceOrdergroup`, a API de placeOrder do Checkout receberá o `marketplacePaymentValue`, assim como a API de Fulfillment recebia até hoje, com a informação que o afiliado o deve. Isso tira a obrigatoriedade de transação no pedido. 

Além disso, uma rota foi criada para o andamento do pedido após a aprovação do marketplace. O marketplace também deve suportar uma rota para ser notificado do cancelamento do seller (ou do agente de cadeia) e da nota fiscal do seller (ou do agente de cadeia). 


#### PlaceOrder

Chamada para a __inserção de um pedido__:

- Método: `PUT`

- URL: `{host}api/checkout/pvt/orders?sc={sc}&affiliateId={affiliateId}`

>Ex:

```
{
    "items": [
{
    "id": "8",
    "quantity": 1,
    "seller": "1",
    "price": 12
},
{
    "id": "36",
    "quantity": 1,
    "seller": "1",
    "price": 120
}
    ],
    "clientProfileData": {
"email": "sicrano@mailinator.com"
    },
    "shippingData": {
"attachmentId": "shippingData",
"logisticsInfo": [
    {
        "itemIndex": 0,
        "selectedSla": "Retirada (14b25e5)",
        "selectedDeliveryChannel": "pickup-in-point",
        "price": 0
    },
    {
        "itemIndex": 1,
        "selectedSla": "Normal",
        "selectedDeliveryChannel": "delivery",
        "price": 0
    }
],
"selectedAddresses": [
    {
        "addressId": "-4581767308704"
    }
]
    },
	"marketplacePaymentValue":1550,
	"marketplaceOrderGroup":"testeSchirmer10",
	"marketplaceServicesEndpoint":"http://portal.vtexcommerce.com.br/api/oms?an=qamarketplace"
}
```

- __Observe que `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` e `marketplaceServicesEndpoint` são os quatro novos campos obrigatórios. O campo `paymentData` não é mais necessário.__


#### Marketplace Order Authorization 

Rota para o marketplace avisar ao pedido de cadeia que o seu andamento foi aprovado no fluxo:

- Método: `POST`

- URL: `{host}/api/checkout/pvt/orders/{orderId}/receipts/marketplace-order-authorization`

>Ex:

```
{
"marketplaceOrderGroup": "{ID ou ordergroup do pedido do marketplace}",
"authorizationReceipt":  {
        "date": "{data desejada}",
        "receipt": "{recibo}"
    }
}
```
- __Note que `orderId` é o ID do pedido de cadeia.__

#### Cancel notification

Rota do marketplace para que o pedido de cadeia possa informá-lo sobre o cancelamento de um pedido:

- Método: `POST`

- URL: `{host}/pvt/orders/order-group/{orderGroup}/notifications`

>Ex:

```
{ 
"id":"sellerOrderCancelled", 
"sellerOrderId": {ID do pedido no nosso sistema}
}
```

- __Note que `orderGroup` é o ID ou ordergroup do pedido do marketplace.__


#### Invoice 

Rota do marketplace para que o pedido de cadeia informe sobre a nota fiscal do pedido:

- Método: `POST`

- URL: `{host}/pub/orders/order-group/{orderGroup}/invoice`

>Ex:

```
{
	\"invoiceNumber\":\"7999972\",
	\"invoiceValue\":7450,
	\"issuanceDate\":\"2019-02-07T02:00:00.000Z\",
	\"invoiceUrl\":\"http://www.invoiceu.rl\",
	\"invoiceKey\":\"799\",
	\"trackingNumber\":\"9997LUX\",
	\"trackingUrl\":\"http://www.trackingu.rl\",
	\"courier\":\"Todos os CEPS\",
	\"items\": [
				{
			     \"id\": \"1231\",
			     \"price\": 7450,
			     \"quantity\": 1
}
          
```   
Exemplo de _response_:

```
{
"date": "2018-11-21T11:50:09.9994509-02:00",
"orderId": "876053333998-01",
"receipt": "95233cf2078d418ba77155380c18f398"
}

```

