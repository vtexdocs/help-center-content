---
title: Fazer um pedido regular usando as APIs da VTEX
id: 5NEGP7hofS4eMMSWgeAY82
status: DRAFT
createdAt: 2017-12-29T14:54:18.987Z
updatedAt: 2021-10-25T23:51:41.642Z
publishedAt: 
firstPublishedAt: 2017-12-29T14:56:06.826Z
contentType: tutorial
productTeam: Others
author: 5Hp3cEFKikMGWycwa42QuG
slug: fazer-um-pedido-regular-usando-as-apis-da-vtex
legacySlug: fazer-um-pedido-regular-usando-as-apis-da-vtex
subcategory: 1vwB9FtTSQmcSewQw02QoW
---

Neste tutorial, você aprenderá a fazer um simples pedido **REGULAR** (feito, pago e entregue sob a responsabilidade de um único agente).

Vamos começar!

<div class="alert alert-warning">
<strong>Importante:</strong> para qualquer autenticação requerida pelas APIs apresentadas neste tutorial, você deve fornecer um <b>AppToken</b> e um <b>AppKey</b> válidos, registrados no módulo <b>License Manager</b> da sua conta e habilitados com permissões suficientes.
</div>

**PERMISSÕES NECESSÁRIAS**

A tabela abaixo apresenta o conjunto mínimo de permissões necessárias.

| Produto | Permissão |
| ---------- | ---------- |
| Checkout | Permite acesso a todos os carrinhos; Permite acesso a todos os pedidos; Cancelamento de Pedidos |
| Pagamentos | Fazer Pagamentos; Ver Dados de Pagamento |
| VTEX Fulfilment | Criar Pedidos; Obter informações de compra |
| OMS | Notificar Pagamentos; Visualizar Pedidos; Cancelar Pedidos |
| Checkout (ao fazer o pedido para __usuários existentes__) | Permite acesso a todos os carrinhos; Permite acesso a todos os pedidos; Cancelamento de Pedidos |

# Simular carrinho

A primeira coisa que você deve fazer é verificar se o Seller (neste caso, sua própria loja) pode fazer o fulfillment de um determinado carrinho. Assim, um request de **simulação** é exatamente como seu sistema saberá quais opções de entrega e pagamento estão disponíveis, se houver.

Para fazer isso, você só precisa enviar um request **POST** para o seguinte endpoint:
`https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orderforms/simulation`
(se necessário, você pode especificar uma **política comercial** usando o parâmetro **"sc"**)

com os headers:
```
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

e também uma **cart description** ("descrição do carrinho") dentro do seu payload.
Por exemplo, para simular o pedido de **uma** unidade do produto com **SKU ID** "1" para o CEP 33301 nos EUA:

>__OBS__: Você precisa usar um código ISO ALPHA-3 para o valor de país (**"country"**).

```json
{
  "items": [
    {
      "id": "1", 
      "quantity": 1,
      "seller": "1"
    }
  ],
  "postalCode": "33301",
  "country": "USA"
}
```

Se deu tudo certo e você recebeu um código de resposta **200 OK** sem quaisquer **mensagens de erro**, podemos prosseguir.

Do conteúdo da resposta, você usará principalmente os blocos **items**, **"logisticsInfo"** e **"paymentData"**. Mais informações sobre cada um deles serão fornecidas nos próximos passos.

## Verificar se um cliente já existe no seu banco de dados
Toda vez que tenta fazer um pedido, você deve fornecer um endereço de e-mail para identificar o cliente. Uma vez que um pedido seja feito com sucesso, o endereço de e-mail fornecido é atribuído a um perfil de cliente da sua loja.
>**Importante:** seu sistema só poderá **reutilizar** ou **atualizar** um perfil de cliente existente fazendo um **novo pedido** se as credenciais usadas neste momento tiverem as permissões de **Checkout** listadas no início deste tutorial.

Portanto, você pode querer verificar se um determinado endereço de e-mail já está vinculado a um cliente seu, para evitar quaisquer problemas de permissão e também recuperar qualquer informação armazenada.

Para verificar um endereço de e-mail para perfis existentes, basta enviar um request **GET** para o seguinte endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/profiles?email={{emailAddress}}`

Se a resposta a esse request retornar qualquer conteúdo, significa que o endereço de e-mail já está atribuído a um perfil. Neste caso, seria interessante coletar algumas informações, como **"userProfileId"** e **"addressId"** (no array **"availableAddresses"**), que será usado na próxima etapa.

## Construa o **"orderForm"**
O **orderForm** de um pedido **simples** consiste, basicamente, em **cinco** elementos principais:

1. **"items"**.
2. **"clientProfileData"**.
3. **"shippingData"** - **"address"**.
4. **"shippingData"** - **"logisticsInfo"**.
5. **"paymentData"**.

### "items"
Este é o núcleo do seu pedido. Trata-se de uma array que contém os **produtos (SKUs)** do pedido.

Da resposta de simulação de carrinho obtida a partir do primeiro passo deste tutorial, use o bloco **"items"** para obter as informações necessárias.

Assim, considerando apenas um item no carrinho, crie um bloco com a seguinte estrutura:

```json
"items": [{
  "id": "1",
  "quantity": 1,
  "seller": "1",
  "price": 10000,
  "rewardValue": 0,
  "offerings": [],
  "priceTags": [],
  "isGift": false
}]
```

### "clientProfileData"
Como o nome diz, este objeto contém as informações sobre o cliente que fez a compra.

Considerando que você vai fazer o pedido para um **novo cliente**, use o seguinte exemplo para atender às suas necessidades:

```json
"clientProfileData": {
  "email": "email@domain.com",
  "firstName": "Testing",
  "lastName": "VTEX",
  "document": "078051120",
  "documentType": "ssn",
  "phone": "1234567890",
  "corporateName": null,
  "tradeName": null,
  "corporateDocument": null,
  "stateInscription": null,
  "corporatePhone": null,
  "isCorporate": false
}
```
>**OBS:** Se está fazendo o pedido para um usuário existente (e tem todas as permissões necessárias), você pode enviar o valor **"email"** dentro do **"clientProfileData"**. Além disso, se você pretende atualizar qualquer informação, basta enviá-la também.

### "shippingData" - "address"
Este objeto contém informações de endereço. Ele terá a mesma estrutura para usos de envio ou faturamento.

Consulte o exemplo abaixo para criar o seu próprio objeto **"address"**.

```json
"address": {
  "addressType": "residential",
  "receiverName": "Testing VTEX",
  "postalCode": "33301",
  "city": "Fort Lauderdale",
  "state": "FL",
  "country": "USA",
  "street": "110 East Broward Blvd",
  "number": null,
  "neighborhood": null,
  "complement": "Suite 1700",
  "reference": null,
  "geoCoordinates": []
}
```
>**OBS:** se você quiser usar uma informação de endereço recuperada de um perfil de usuário existente, basta enviar seu valor **"addressId"** dentro deste objeto **"address"**.

### "shippingData" - "logisticsInfo"
O **"logisticsInfo"** é uma array que contém a opção de entrega selecionada (com custos de frete detalhados) para cada objeto presente na array **"items"** indicada pelo valor **"itemIndex"**.

Como temos apenas um produto no carrinho neste exemplo, haverá apenas um objeto na array **"logisticsInfo"**.

Em seguida, considerando uma entrega não agendada, na array **"logisticsInfo"** da resposta de simulação do carrinho, escolha uma opção dentro da matriz **"slas"**.

A partir da opção escolhida, obtenha os valores **"id"** e **"price"** e crie um bloco **"logisticsInfo"**, como o do exemplo abaixo, onde o valor **"selectedSla"** é o **"id"** do objeto **"slas"** selecionado.

```json
"logisticsInfo": [{
  "itemIndex": 0,
  "selectedSla": "Regular",
  "price": 100
}]
```
>**OBS:** o valor **"itemIndex"** representa a posição do referido **"item"** na categoria **"items"**.

### "paymentData"
Este bloco informa o método de pagamento e as opções de parcelamento (se disponível) selecionadas para o pedido.

>**OBS:** para este tutorial, consideraremos um **método de pagamento único** com **uma parcela** e **sem juros**.

Na array **"installmentOptions"** do objeto **"paymentData"** retornado na resposta de simulação de carrinho, navegue até o sistema de pagamento desejado (use o valor **"paymentName"** como referência) e verifique se existe um objeto dentro da array **"installments"** com o valor **"count"** de **"1"**. Se sim, pegue seu valor **"paymentSystem"**.

Com esta informação, crie o **"paymentData"** como no exemplo abaixo.
Uma vez que não temos juros aplicados nem múltiplas parcelas, os valores **"referenceValue"** e **"value"** serão os mesmos, e o valor de **"installments"** será **"1"** .
>**OBS:** o **"value"** total do **"paymentData"** deve ser a **soma** dos itens e dos preços das opções de entrega selecionadas.

```json
"paymentData": {
  "id": "paymentData",
  "payments": [{
    "paymentSystem": "1",
    "referenceValue": 10100,
    "value": 10100,
    "installments": 1
  }]
}
```

## Fazer o pedido
O último passo antes de fazer o pedido, é compilar todos os componentes anteriores em um **"orderForm"**. Assim, usando todos os elementos apresentados como exemplo neste tutorial, seu **"orderForm"** deve ficar assim:
```json
{
  "items": [{
    "id": "1",
    "quantity": 1,
    "seller": "1",
    "price": 10000,
    "rewardValue": 0,
    "offerings": [],
    "priceTags": [],
    "isGift": false
  }],
  "clientProfileData": {
    "email": "email@domain.com",
    "firstName": "Testing",
    "lastName": "VTEX",
    "document": "078051120",
    "documentType": "ssn",
    "phone": "1234567890",
    "corporateName": null,
    "tradeName": null,
    "corporateDocument": null,
    "stateInscription": null,
    "corporatePhone": null,
    "isCorporate": false
  },
  "shippingData": {
    "id": "shippingData",
    "address": {
      "addressType": "residential",
      "receiverName": "Testing VTEX",
      "postalCode": "33301",
      "city": "Fort Lauderdale",
      "state": "FL",
      "country": "USA",
      "street": "110 East Broward Blvd",
      "number": "110",
      "neighborhood": "Broward",
      "complement": "Suite 1700",
      "reference": null,
      "geoCoordinates": []
    },
    "logisticsInfo": [{
      "itemIndex": 0,
      "selectedSla": "Regular",
      "price": 100
    }]
  },
  "paymentData": {
    "id": "paymentData",
    "payments": [{
      "paymentSystem": "1",
      "referenceValue": 10100,
      "value": 10100,
      "installments": 1
    }]
  }
}
```
>**OBS:** note que o objeto **"shippingData"** contém os objetos **"address"** e **"logisticsInfo"**. Além disso, apresenta o valor **"id"** como **"shippingData"**.

Agora que tem todas as informações necessárias para fazer o pedido, você deve enviar este **"orderForm"** por meio de um request **PUT** para o seguinte endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orders`
(também, se necessário, você pode especificar uma **política comercial** usando o parâmetro **"sc"**)

com o header:
```
Accept: application/json
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

>**OBS:** tenha em mente que quase todos os dados de produtos, envio e pagamento usados neste tutorial são **apenas um exemplo** para uma loja fictícia. Dito isto, usar exatamente o **"orderForm"** apresentado nesta etapa provavelmente **não** funcionará em seu próprio ambiente.

Se o request tiver como resposta o código **"201 Criado"**, você deve tomar nota de quatro informações do conteúdo dessa resposta:

1. **"orderId":** um dos valores da raiz em cada objeto a partir da array **"orders"**.
2. **"transactionId":** um dos valores da raiz dentro do objeto **"paymentData"**.
3. **"addressId":** se você estiver usando o mesmo endereço para envio e cobrança, pegue esse ID do objeto **"shippingData"**.
4. **"Vtex_CHKO_Auth":** um cookie de autenticação que é enviado com a resposta.

>**Atenção:** a partir deste momento, você tem **5 minutos** para completar o processo de pagamento. Caso contrário, o pedido será automaticamente **cancelado** e marcado como **"Incompleto"**.

## Enviar informações de pagamento

Com os valores **"orderId"** e **"transactionId"** em mãos, você deve informar à plataforma VTEX os dados de pagamento que devem ser usados para resolver o pagamento do pedido.

Para esta etapa, você deve fazer um request **POST** para o seguinte endopint:
`https://{{AccountName}}.vtexpayments.com.br/api/pub/transactions/{{transactionId}}/payments`

com o header apenas identificando o valor **"Content-Type"**:
```
Content-Type: application/json
```

enviando uma carga com base no conteúdo do **"paymentData"** presente no **"orderForm"**.

Para a maioria dos casos, ficará mais ou menos assim:
```json
[
  {
    "paymentSystem": 1,
    "paymentSystemName": "American Express",
    "group": "creditCardPaymentGroup",
    "installments": 1,
    "installmentsInterestRate": 0,
    "installmentsValue": 10100,
    "value": 10100,
    "referenceValue": 10100,
    "fields": {
      "holderName": "Testing VTEX",
      "cardNumber": "4444 3333 2222 1111",
      "validationCode": "1234",
      "dueDate": "10/20",
      "addressId": {{addressId}}
    },
    "transaction": {
      "id": {{transactionId}},
      "merchantName": {{YOUR-ACCOUNT-NAME}}
    },
    "currencyCode": "USD"
  }
]
```
>**Nota #1:** no objeto **"fields"**, você pode enviar um **"addressId"** para usar um endereço existente ou um novo objeto **"address"**.
>
>**Nota #2:** certifique-se de que todos os valores **"value"** correspondam às informações enviadas ao fazer o pedido.

## Solicitar processamento de pagamento

Finalmente, quando tudo estiver configurado, você só precisa solicitar ao módulo de pagamentos para processar as transações atribuídas ao pedido.

Para fazer isso, pegue o **"Vtex_CHKO_Auth"** e envie um request __POST__ para o seguinte endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/{{orderGroup}}`

com o header abaixo:
```
Content-Type:application/json
Accept:application/json
Cookie:Vtex_CHKO_Auth={{Vtex_CHKO_Auth}}
```

>**Nota #1:** o **"orderGroup"** é o **"orderId"** sem o *prefixo* após o símbolo "-".
> Este valor também está presente na resposta do Order Place.
>
>**Nota #2:** tenha em mente que esse processo usará os conectores de gateway configurados em seu ambiente VTEX. Tenha cuidado para evitar quaisquer encargos indesejados ou recusas de pagamento inesperadas.

## Verificar os resultados

**Ótimo! Chegamos ao fim.**
Para verificar se fez tudo certo, você pode simplesmente navegar para a página do pedido dentro da interface do módulo **OMS**, no Admin, ou pegar as informações do pedido usando nossa API do **OMS**:
`http://{{AccountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}`

Se o pagamento tiver sido processado corretamente (independentemente do resultado), o status do pedido não deve ser mais **"payment-pending"**. E você deve conseguir continuar com o pedido segundo suas regras de negócio.

É isso aí.
Nos vemos na próxima!
