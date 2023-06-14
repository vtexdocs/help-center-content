---
title: 'Guia de integração para marketplaces - Seller não VTEX'
id: yMji0ow0rQuYgQsg26Kus
status: PUBLISHED
createdAt: 2017-10-14T21:55:39.633Z
updatedAt: 2021-08-10T18:51:48.080Z
publishedAt: 2021-08-10T18:51:48.080Z
firstPublishedAt: 2017-10-14T22:00:36.965Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: guia-de-integracao-para-marketplaces-seller-nao-vtex
locale: pt
legacySlug: guia-de-integracao-para-marketplaces-seller-nao-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Confira a versão atualizada desse <a href="https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector">guia de integração com marketplace</a> em nosso Developer Portal. 
</div> 

## Seller Não VTEX Vendendo em Marketplace Hospedado na VTEX

Este documento tem por objetivo auxiliar na integração de um _Seller_ **não** hospedado na plataforma VTEX para uma _Marketplace_ hospedado na plataforma VTEX. Nesse modelo são integrados produtos (_SKUs_), atualização de condição comercial (preço, estoque) de um SKU, além de descida de pedido e envio de autorização de despacho de pedido para o Seller.

> _Seller_ = Dono do produto, responsável por fazer a entrega.  
> _Marketplace_ = Dono da vitrine, responsável por expor e vender o SKU.  
> _SKU_ = Item a ser trocado e vendido entre Seller e Marketplace.  

### Ações que deverão ser tomadas pelo Seller não hospedado na VTEX para implementação da integração:

1. Implementar chamada de notificação de mudança de preço e estoque - Seller vai chamar endpoint da VTEX. Toda vez que o SKU mudar o preço e ou o estoque no Seller, o Seller tem que chamar esse endpoint da loja na VTEX, simplesmente comunicando a mudança. Ao receber esse request o Marketplace vai buscar o preço e estoque no Seller no método de consulta politica comercial que vamos falar mais abaixo.

    _exemplo da chamada:  
    ``` https://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/skuSeller/changenotification/[idSeller]/[idskuSeller] ```

    [Exemplo Completo: Enviar Notificação de Mudança de Preço e Estoque de SKU](#a1)

2. Implementar chamada de inserção de de sugestão de SKU -  Seller vai chamar endpoint da VTEX. Toda vez que o serviço de notificação de mudança retornar SKU **não** encontrada (404), o Seller deve inserir a sugestão na loja da VTEX.

    _exemplo da chamada:  
   `https://api.vtex.com/{accountName}/suggestions/{sellerId}/{sellerskuid}`

    [Exemplo Completo: Enviar Sugestão de SKU](#a2)

3. Implementar endpoint para consulta de politica comercial (preço e estoque) - VTEX chama endpoint do Seller.  
    A loja hospedada na VTEX usará esse metodo para buscar preço e estoque no Seller tanto na indexação (catalogar preço e estoque), quanto na simulação de carrinho.

    _exemplo da chamada:  
    ``` https://{endpointSeller}/pvt/orderForms/simulation?sc=1&an=mechantname ```

     > NOTA:  
     > O metodo que consulta preço e estoque e o metodo que simula carrinho são os mesmos, mas por uma questão de construção de cache requer duas implementaçãoes, uma sendo GET e outra POST.
     > Este é um dos principais metodos da integração, precisa ter performance e disponibilidade, pois tem impacto direto no fechamento da compra no Marketplace.

    [Exemplo Completo: Consultar Política Comercial](#a3)  
    [Exemplo Completo: Simulação de Carrinho  - POST e GET](#a4)

4. Implementar endpoint para receber um pedido - VTEX chama endpoint do Seller. A loja na VTEirá usar esse endpoint para colocar um pedido no Seller.

    _exemplo da chamada:  
    ``` https://{endpointSeller}/pvt/orders?sc=1&an=mechantname ```

    [Exemplo Completo: Colocar um Pedido no Seller](#a6)

5. Implementar endpoint para autorizar despacho - VTEX chama endpoint do Seller. A loja na VTEX irá usar esse endpoint para avisar o Seller que já pode entregar com o pedido.

    _exemplo da chamada:  
    ``` https://{endpointSeller}/pvt/orders/[orderid]/fulfill?sc=1&an=mechantname ```

    [Exemplo Completo: Autorizar o Seller a Despachar o Pedido](#a8)

6. Implementar rotina de informar dados de nota fiscal e rastreamento de entrega de um pedido. Nos dados do pedido é enviado uma endpoint de serviços do Marketplace, o Seller deverá invocar esse endpoint tanto pra informar dados de nota fiscal quanto dados de rastreamento de transportadora. O Seller ainda pode solicitar um cancelamento de um pedido que ainda não enviou nota fiscal.

    _exemplo da chamada:  
    ``` https://{AccountName}.vtexcommercestable.com.br/api/oms/pub/orders/[marketplaceorderId]/invoice ```  
    ``` https://{AccountName}.vtexcommercestable.com.br/api/oms/pub/orders/[marketplaceorderId]/cancel ```

    [Exemplo Completo: Informar nota fiscal de um pedido](#a10)  
    [Exemplo Completo: Informar tracking de um pedido](#a11)  
    [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a12)

7. Rota de validação de cadastro - Auxiliar o diagnostico de problemas de integração que tenham causa, incompatibilidade de configuração entre os envolvidos (Marketplace e Seller) - para o futuro, desconsiderar

---

## Abaixo segue o passo a passo detalhado de cada fluxo:

### Troca de Catalogo e Atualização de Preço e Estoque de SKU

Sugestão de SKU, atualização de preço e estoque. Toda vez que houver uma alteração no preço ou no estoque de um SKU no Seller, o Seller deve enviar uma notificação de mudança de SKU para a loja hospedada na VTEX, caso a loja retorne em seu serviço o **response status 404**, significa que a **SKU não existe na loja**, então o Seller deve enviar a sugestão de SKU para a loja.

Caso a loja retorne em seu serviço o **response status 200 ou 202**, significa que a **SKU existe** no Marketplace, então a Marketplace vai no Seller consultar o novo preço e ou estoque.

> ATENÇÃO:  
> Este modelo **não** contempla atualizações de imagens e descrição de um SKU depois de catalogado (aceito) no Marketplace, ou seja, depois do SKU mapeado e aceito pelo Marketplace, somente preço e estoque serão atualizados dinamicamente.

_exemplo do fluxo:_

![](https://images.contentful.com/alneenqid6w5/6as0Pc3PGwQOYg4m8gOKY0/a08a7717551cb6649e2a15292254a096/sku-sugestion-seller-nao-vtex.png)

<a name="a1"><a/>
### Enviar Notificação de Mudança de Preço e Estoque de SKU

Toda vez que houver uma alteração no preço ou estoque de um SKU no Seller, o Seller deve enviar uma notificação de mudança de SKU para a loja hospedada na VTEX.

<a title="notificar mudança de sku no marketplace" href="https://documenter.getpostman.com/view/845/catalogsystem-101/Hs44#bd-9d1e-dbf5-ac7f-1515fc7b24a6" target="_blank">[Developer] - Exemplo de Request de Notificação de Mudança - Endpoint da loja hospedada na VTEX</a>

<a name="a2"><a/>
### Enviar Sugestão de SKU para Venda

Quando o serviço de notificação descrito acima retornar um **response status 404**, significa que o SKU **NÃO existe** no Marketplace hospedado na VTEX, então o Seller envia um POST com os dados da SKU que deseja sugerir para vender no Marketplace.

> O Seller faz as sugestões de suas SKUs e o administrador do Marketplace realiza o mapeamento de marcas e categorias através da pagina de administração do Marketplace, e aceita ou não a sugestão de SKU enviada pelo Seller.

<a title="envia sugestão de sku" href="https://developers.vtex.com/reference#send" target="_blank">[Developer] - Exemplo de Request de Inserção de Sugestão de SKU - Endpoint da loja hospedada na VTEX</a>

_exemplo do PUT de dados:_

```json
{
    "ProductId": 321,
    "ProductName": "Product sample",
    "NameComplete": "My complete product name?",
    "ProductDescription": "sample",
    "BrandName": "Brand 1",
    "SkuName": "Sku sample",
    "SellerId": null,
    "Height": 1,
    "Width": 1,
    "Length": 1,
    "WeightKg": 1,
    "Updated": null,
    "RefId": "REFID123",
    "SellerStockKeepingUnitId": 567,
    "CategoryFullPath": "Category 1",
    "Images": [
        {
            "imageName": "Principal",
            "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
        }
    ],
    "ProductSpecifications": [
        {
            "fieldName": "prodspec1",
            "fieldValue": "value1"
        }
    ],
    "SkuSpecifications": [
        {
            "fieldName": "skuspec1",
            "fieldValue": "value2"
        }
    ],
    "EAN": "EAN123",
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "AvailableQuantity": 111,
    "Pricing": {
        "Currency": "BRL",
        "SalePrice": 399,
        "CurrencySymbol": "R$"
    }
}
```

<a name="a3"><a/>
### Atualização de Preço e ou Estoque de SKU

Toda vez que houver uma alteração no preço ou estoque, o Seller deve enviar uma notificação de mudança de SKU para a loja hospedada na VTEX, caso a loja retorne em seu serviço o **response status 200 ou 202**, significa que a SKU **existe** na loja, então a loja vai no Seller consultar o novo preço ou estoque.

_exemplo por POST:_

```json
{
  "items": [
    {
      "id": "2000037",
      "quantity": 1,
      "Seller": "1"
    },
    {
      "id": "34562",
      "quantity": 2,
      "Seller": "1"
    }
  ],
  "marketingData": null,
  "postalCode": "22051030", //não obrigatório
  "country": "BRA", //não obrigatório
  "selectedSla": null,
  "clientProfileData": null,
  "geoCoordinates": []
}
```

_Exemplo por GET:_

QueryString com UrlEncode:  
``` purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=1&an=shopfacilfastshop ```
QueryString decodificada:  
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,  "postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc=1&an=shopfacilfastshop ```

> ATENÇÂO
> O CEP e o país não são obrigatórios, mas quando tiver um deles o outro se torna obrigatório.

---

### Simulação de Carrinho

Este tópico tem por objetivo auxiliar o integrador na simulação de carrinho, entre o Marketplace hospedado na VTEX com um Seller **não** VTEX. Quando um produto (SKU) é inserido no carrinho no marketplace VTEX, ou faz se alguma edição no carrinho, uma consulta de simulação de carrinho é feita no Seller para checar a validade das condiçoes comerciais (preço, estoque, frete e SLAs de entrega).

> ATENÇÃO  
> Esses metodos são usados no momento do fechamento da compra no Marketplace, por isso, é de suma importancia para uma boa conversão, que esses metodos sejam perfomáticos e de alta disponibilidade.

_exemplo do fluxo de chamadas no carrinho:_

![](https://images.contentful.com/alneenqid6w5/3gmJwn1ux22muGySkwMWQc/9c058728ea65151c185cc7bc261bdf21/fechamento-fluxo-nao-vtex.png)

<a name="a4"><a/>
### Simulação de Carrinho

Quando ocorre uma edição no carrinho, uma chamada será feita no Seller para checar a disponibilidade dos itens - Endpoint do Seller.

Endpoint: ```https://{sellerendpoint}/pvt/orderForms/simulation```  
Verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**

> ATENÇÃO  
> Este método também requer uma implementação em GET, que será usada para construção de cache do lado da plataforma VTEX, evitando tantos acessos ao POST. 

_request por POST:_

```json
{
  "items": [
    {
      "id": "2000037", //identificador do item no Seller
      "quantity": 1, //quantidade desejada
      "seller": "1"
    },
    {
      "id": "34562",
      "quantity": 2,
      "seller": "1"
    }
  ],
  "marketingData": null,
  "postalCode": "22051030", // não obrigatório
  "country": "BRA", // não obrigatório
  "selectedSla": null,
  "clientProfileData": null,
  "geoCoordinates": []
}
```

Na pratilheira e na página de detalhe de produto uma chamada **GET** será feita no Seller para checar a disponibilidade dos itens - Endpoint do Seller.

Endpoint: ``` https://{sellerendpoint}/pvt/orderForms/simulation?  purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=idCanal&an=merchantName ```
Verb: **GET**  
Accept: **application/json**  
Parâmetro: **purchaseContext** - Esse parâmetro na QueryString é o mesmo JSON do POST serializado   e com URLEncode

_request Por GET:_

QueryString com UrlEncode:  
```   purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc={PoliticaComercial}&an={AccountName} ```
QueryString decodificada:   
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,  "postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc={PoliticaComercial}&an={AccountName} ```

_Via POST:  
``` https://[sellerendpoint]/pvt/orderForms/simulation ```  
```json
{"items":[{"id":"13","quantity":1,"seller":"1"}],"country":"BRA"}
```

_Via GET:_  
``` https://[sellerendpoint]/pvt/orderForms/simulation?purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d ```

_response (POST e GET):_

```json
{
	"items": [ //pode vir um array vazio caso item insidponivel
	    {
	        "id": "287611",// obrigatório, string - identificador so SKU
	        "requestIndex": 0, // obrigatório, int - representa a posição desse item no array original (request)
	        "price": 7390, // obrigatório, int - preço por, os dois dígitos menos significativos são os centavos
	        "listPrice": 7490, // obrigatório, int - preço de, os dois dígitos menos significativos são os centavos
	        "quantity": 1, // obrigatório, int - retornar a quantidade solicitada ou a quantidade que consegue atender
	        "seller": "1", // obrigatório, string - retonar o que foi passado no request
	        "priceValidUntil": "2014-03-01T22:58:28.143"  // pode ser nulo, string - data de validade do preço.
	        "offerings":[  //array opcional de ofertas, porém não pode ser nulo: enviar array vazio.
	            {
	                "type":"Garantia", //obrigatório, string - tipo do serviço
	                "id":"5",  //obrigatório, string - identificador do serviço
	                "name":"Garantia de 1 ano", //obrigatório, string - nome do serviço
	                "price":10000  //obrigatório, int - preço do serviço, os dois dígitos menos significativos são os centavos
	            },
	            {
	                "type":"Embalagem de Presente",
	                "id":"6",
	                "name":"Embalagem de Presente",
	                "price":250
	            }
	        ]
	    },
	    {
	        "id": "5837",
	        "requestIndex": 1,
	        "price": 890,
	        "listPrice": 990,
	        "quantity": 5,
	        "seller": "1",
	        "priceValidUntil": null
	    }
	],
	"logisticsInfo": [ // array de informações, quando produtos indisponíveis retornar vazio []
	    {
	        "itemIndex": 0, // obrigatório, int - index do array de items
	        "stockBalance": 99, // obrigatório, int - estoque que atende
	        "quantity": 1, // obrigatório, int - retornar a quantidade solicitada ou a quantidade que consegue atender
	        "shipsTo": [ "BRA"],  // obrigatório, array de string com as siglas dos países de entrega
	        "slas": [  // obrigatório,  pode ser um array vazio na ausencia de CEP.
	            {
	                "id": "Expressa",  //obrigatório, string - identificador tipo entrega
	                "name": "Entrega Expressa",// obrigatório, string - nome do tipo entrega
	                "shippingEstimate": "2bd", // obrigatório, string - doas estimados para a entrega, bd == "business days"
	                "price": 1000 // obrigatório, int - custo da entrega, os dois dígitos menos significativos são os centavos
	                "availableDeliveryWindows": [  // opcional, janelas de entrega,  podendo ser um array vazio
	                ]
	            },
	            {
	                "id": "Agendada",
	                "name": "Entrega Agendada",
	                "shippingEstimate": "5d",  // d - days, bd -business days
	                "price": 800,
	                "availableDeliveryWindows": [
	                     {
	                        "startDateUtc": "2013-02-04T08:00:00+00:00",  // date, obrigatório se for enviado delivery window
	                        "endDateUtc": "2013-02-04T13:00:00+00:00", // date, obrigatório se for enviado delivery window
	                        "price": 0 // int, obrigatório se for enviado delivery window - o valor adicional da entrega agendada
	                    },
	                ]
	            }
	        ]
	    },
	    {
	        "itemIndex": 1,
	        "stockBalance": 1237,
	        "quantity": 5,
	        "shipsTo": [ "BRA" ],
	        "slas": [
	            {
	                "id": "Normal",
	                "name": "Entrega Normal",
	                "shippingEstimate": "5bd", // bd - business days
	                "price": 200
	            }
	        ]
	    }
	],
	"country":"BRA",   // string, nulo se não enviado
	"postalCode":"22251-030"   // string, nulo se não enviado
}
```

> ATENÇÃO!  
> O valor do frete deve ser retornado por item consultado.  
> Quando não for passado CEP retornar o array de SLAs vazio []  
> No campo quantity, retornar o solicitado ou a quantidade que consegue atender.

### Enviar Pedido e Autorizar Despacho

Este tópico tem por objetivo auxiliar o Seller a receber um pedido do Marketplace, e receber a autorização para despachar o pedido.

_exemplo do fluxo:_

![](https://images.contentful.com/alneenqid6w5/74yZ8Wbwc0K4MGm0ISsqGe/3ce44e3feb867e4828b9dd4eec5cda9f/order-seller-nao-vtex.png)

<a name="a6"><a/>
### Enviar Pedido

Quando o pedido é fechado no ambiente do Marketplace hospedado na VTEX, um POST é feito no Seller, para que este possa receber a ordem de pedido - endpoint do Seller.

Endpoint: ```https://sellerendpoint/pvt/orders?sc={PoliticaComercial}&an={AccountName}```  
Verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
[
  {
    "marketplaceOrderId": "959311095", // identificador do pedido no market place
    "marketplaceServicesEndpoint": "https://marketplaceservicesendpoint/", // leia o tópico Invocando MarketplaceServicesEndpoint Actions
    "marketplacePaymentValue": 11080, //valor que o marketplace se compromete a pagar para o Seller
    "items": [
      {
        "id": "2002495", // identificadro da SKU no Seller
        "quantity": 1, // quantidade comprada
        "Seller": "1",
        "commission": 0,
        "freightCommission": 0,
        "price": 9990, // preço da SKU
        "bundleItems": [], // serviços. Ex: embalagem pra presente.
        "itemAttachment": {
          "name": null,
          "content": {}
        },
        "attachments": [], // customização do item, Ex:camisa com o numero 10
        "priceTags": [],
        "measurementUnit": null, // unidade de medida
        "unitMultiplier": 0, // unidade multipladora, Ex: venda por quilo
        "isGift": false
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "32172239852@gmail.com.br", // e-mail do cliente
      "firstName": "Jonas", // primeiro nome do ciente
      "lastName": "Alves de Oliveira", // sobrenome do cliente
      "documentType": null,
      "document": "3244239851", // documento
      "phone": "399271258", // fone
      "corporateName": null, // se pessoa juridica, razao social
      "tradeName": null, // se pessoa juridica, nome fantasia
      "corporateDocument": null, // se pessoa juridica, documento
      "stateInscription": null, // se pessoa juridica, iscrição estadual
      "corporatePhone": null, // se pessoa juridica, fone
      "isCorporate": false, // é pessoa juridica?
      "userProfileId": null
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "Residencial", // tipo do endereço
        "receiverName": "Jonas Alves de Oliveira", // nome do destinatário
        "addressId": "Casa", // identificador do endereço
        "postalCode": "13476103", // código postal
        "city": "Americana", // cidade
        "state": "SP", // unidade federativa
        "country": "BRA", // país
        "street": "JOÃO DAMÁZIO GOMES", // logradouro
        "number": "311", // número do endereço
        "neighborhood": "SÃO JOSÉ", // bairro
        "complement": null, // complemnto
        "reference": "Bairro Praia Azul / Posto de Saúde 17", // refrencia
        "geoCoordinates": []
      },
      "logisticsInfo": [
        {
          "itemIndex": 0, // index do array de itens
          "selectedSla": "Normal", // tipo de entrega
          "lockTTL": "8d", // dias de reserva
          "shippingEstimate": "7d", // dias estimados para a entrega
          "price": 1090, // preço da entrega
          "deliveryWindow": null // janela de entrega
        }
      ]
    },
    "openTextField": null, //opcional, string
    "marketingData": {//opcional, pode ser null
      "utmSource": "buscape",
      "utmMedium": "",
      "utmCampaign": "fretegratis",
      "utmiPage": "_",
      "utmiPart": "BuscaFullText",
      "utmiCampaign": "capa artscase para iphone 5 e 5s slimfit rachel taylor contemporary colorida   padrao"
    },
    "paymentData":null
  }
]
```

_response:_

```json
[
  {
    "marketplaceOrderId": "959311095",
    "orderId": "123543123", //** - identificador do pedido inserido no Seller
    "followUpEmail": "75c70c09dbb3498c9b3bbdee59bf0687@ct.vtex.com.br",
    "items": [
      {
        "id": "2002495",
        "quantity": 1,
        "Seller": "1",
        "commission": 0,
        "freightCommission": 0,
        "price": 9990,
        "bundleItems": [],
        "priceTags": [],
        "measurementUnit": "un",
        "unitMultiplier": 1,
        "isGift": false
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "5c77abaea35f4cb6824b9326942c00e5@ct.vtex.com.br",
      "firstName": "JONAS",
      "lastName": "ALVES DE OLIVEIRA",
      "documentType": "cpf",
      "document": "32133239851",
      "phone": "1592712979",
      "corporateName": null,
      "tradeName": null,
      "corporateDocument": null,
      "stateInscription": null,
      "corporatePhone": null,
      "isCorporate": false,
      "userProfileId": null
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "Residencial",
        "receiverName": "JONAS ALVES DE OLIVEIRA",
        "addressId": "Casa",
        "postalCode": "13476103",
        "city": "Americana",
        "state": "SP",
        "country": "BRA",
        "street": "JOÃO DAMÁZIO GOMES",
        "number": "121",
        "neighborhood": "SÃO JOSÉ",
        "complement": null,
        "reference": "Bairro Praia Azul / Posto de Saúde 17",
        "geoCoordinates": []
      },
      "logisticsInfo": [
        {
          "itemIndex": 0,
          "selectedSla": "Normal",
          "lockTTL": "8d",
          "shippingEstimate": "5d",
          "price": 1090,
          "deliveryWindow": null
        }
      ]
    },
   "paymentData":null
  }
]

```

_exemplo do retorno de Erro:_

```json
{
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```

<a name="a8"><a/>
### Enviar Autorização Para Despachar

Quando o pagamento do pedido é concluído no marketplace VTEX (pagamento válido), envia se ao Seller uma autorização para dar andamento no processo de entrega do pedido - endpoint da Seller.

Endpoint: ```https://{Sellerendpoint}/pvt/orders/[orderid]/fulfill?sc={PoliticaComercial}&an=  {AccountName}```
Verb: **POST**<  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
{
	"marketplaceOrderId": "959311095" // identificador do pedido originado no Marketplace
}
```

_response:_

```json
{
	"date": "2014-10-06 18:52:00",
	"marketplaceOrderId": "959311095",
	"orderId": "123543123",
	"receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8",
}
```

## Invocando Marketplace Services Endpoint Actions

O MarketplaceServicesEndpoint serve para receber informações do Seller referentes a nota fiscal e rastreamento de entrega de pedido. É permitido o envio de notas fiscais parciais, obrigando assim ao informador informar além dos valores da nota fiscal, os itens ele está mandando na nota fiscal parcial. O pedido na VTEX só andará pra o status FATURADO quando o valor total de todas as notas fiscais de um pedido forem enviadas.

<a name="a10"><a/>
### Informar Dados de Nota Fiscal

Quando o Seller emitir a nota fiscal, deve enviar as informações da nota fiscal - endpoint plataforma VTEX.

Endpoint: ```https://{AccountName}.vtexcommercestable.com.br/api/oms/pub/orders/  {marketplaceorderId}/invoice```
Verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  
Parâmetro: **orderId** // id do pedido no Seller  

_request:_

```json
{
    "type": "Output", // Output|Input (venda|devolução)
    "invoiceNumber": "NFe-00001", // numero da nota fiscal
    "courier": "", // quando é nota fiscal, dados de tracking vem vazio
    "trackingNumber": "", // quando é nota fiscal, dados de tracking vem vazio
    "trackingUrl": "",// quando é nota fiscal, dados de tracking vem vazio
    "items": [ // itens da nota
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", // data de emissao da nota
    "invoiceValue": 9508 // valor da nota
}
```

_response:_

```json
{
    "date": "2014-02-07T15:22:56.7612218-02:00", // data do recibo
    "orderId": "123543123",
    "receipt": "38e0e47da2934847b489216d208cfd91" // protocolo gerado, pode ser nulo
}
```
<a name="a11"><a/>
### Informar Rastreamento de Entrega

Quando o Seller entregar o pedido para a transportadora, deve informar as informações de rastreamento - endpoint plataforma VTEX.

Endpoint: ```https://{AccountName}.vtexcommercestable.com.br/api/oms/pub/orders/  {marketplaceorderId}/invoice ```
Verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
{
    "type": "Output",
    "invoiceNumber": "NFe-00001",
    "courier": "Correios", // transportadora
    "trackingNumber": "SR000987654321", // identificador de rastreamentor
    "trackingUrl": "http://traking.correios.com.br/sedex/SR000987654321", // url de rastreamento
    "items": [
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", // formato esperado
    "invoiceValue": 9508
}
```

_response:_

```json
{
    "date": "2014-02-07T15:22:56.7612218-02:00", // data do recebimento
    "orderId": "123543123",
    "receipt": "38e0e47da2934847b489216d208cfd91" // protocolo gerado confirmando o recebimento do POST (GUID)
}
```

> A Nota Fiscal e o Tracking podem ser enviados na mesma chamada, basta preencher todos os dados do POST.

<a name="a12"><a/>
### Enviar Solicitação de Cancelamento

Uma solicitação de cancelamento pode ser enviada, caso o pedido se encontre em um estado que se permita cancelar, o pedido será cancelado - endpoint plataforma VTEX.

Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/oms/pvt/orders/  {marketplaceorderId}/cancel ```
Verb: **POST**  

> Para cancelar um pedido com nota fiscal já informada, enviar uma Nota Fiscal do tipo Input com o valor cheio do pedido.

---

>POR LER ATE AQUI  
>Na ferramenta POSTMAN usando esse link ``` https://www.getpostman.com/collections/ba95d70124bba8e05fe0 ``` é possível importar uma coleção de requests. Nela tem um exemplo de cada request citado nesse documento.  
