---
title: Guia de integração para marketplaces - Marketplace não VTEX com pagamento no seller
id: 4MyIxyg3p6UICk8O6w6O2W
status: DRAFT
createdAt: 2017-10-14T21:51:19.187Z
updatedAt: 2022-02-03T19:02:55.796Z
publishedAt: 
firstPublishedAt: 2017-10-14T21:55:32.638Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex-com-pagamento
legacySlug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex-com-pagamento
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Confira a versão atualizada desse <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guia de integração com marketplace</a> em nosso Developer Portal. 
</div> 

## Marketplace Não Hospedado na Plataforma VTEX vendendo para Sellers Hospedados na Plataforma VTEX com Pagamento

Este documento tem por finalidade auxiliar na integração de um _Marketplace_ **não** hospedado na plataforma VTEX com um _Seller_ hospedado na plataforma VTEX. <br/>
Este modelo contempla troca de catalogo, atualização de condição comercial (preço, estoque) de um _SKU_ entre um Seller hospedado na plataforma VTEX e um Marketplace (afiliado) **não** hospedado na plataforma VTEX, além de auxiliar na descida de pedido, transação de pagamento e envio de autorização de despacho para o Seller hospedado na plataforma VTEX.

> ALGUNS CONCEITOS:
>> _Seller_ = Dono do produto, responsável por cumprir com a entrega do SKU.<br/>
>> _Marketplace_ = Dono da vitrine (cara com o cliente final), responsável por expor e vender o SKU.<br/>
>> _SKU_ = Item a ser trocado e vendido entre Marketplace e Seller.<br/>
>> _Endpoint_ = Ponto de acesso de um serviço na internet, serviço pronto para receber uma requisição e devolver uma resposta.<br/>

#### Ações que deverão ser tomadas pelo Marketplace não hospedado na VTEX para implementação da integração:

1. Implementar o endpoint para receber notificação de mudança de preço e estoque - Seller hospedado na VTEX vai chamar endpoint do Marketplace. Toda vez que o SKU mudar o preço e ou o estoque no Seller, o Seller tem que chamar esse endpoint do Marketplace, simplesmente comunicando a mudança. Ao receber esse request o Marketplace vem buscar o preço e estoque no Seller no metodo de consulta politica comercial que vamos falar mais abaixo.

 <br/>_exemplo da chamada:_<br/>
 ``` https://marketplace.com.br/api/notification/ ```

 [Exemplo Completo: Enviar Notificação de Mudança de Preço e Estoque de SKU](#a1)

2. Implementar busca de dados de SKU no Seller - Marketplace vai chamar endpoint do Seller na VTEX. Toda vez que o serviço de notificação de mudança do Seller avisar sobre uma SKU, e o Marketplace ainda não tem a SKU catalogada, o Marketplace vem no Seller buscar os dados da nova SKU.

 _exemplo da chamada:_<br/>
 ```http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/2000037 ```

 [Exemplo Completo: Buscar Dados de SKU](#a2)

3. Implementar busca de politica comercial (preço e estoque, frete, tipo entrega e custo) - Marketplace vai chamar endpoint do Seller. Toda vez que o serviço de notificação de mudança do Seller avisar sobre mudança de uma SKU (já catalogada), o Marketplace busca preço e ou estoque no Seller pra se atualizar.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Consultar Política Comercial](#a3)

4. Implementar busca de formas de pagamento do Seller - Marketplace vai chamar endpoint do Seller. O Marketplace irá usar esse endpoint para consultar as formas de pagamento oferecidas pelo Seller.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/merchants/payment-systems ```

 [Exemplo Completo: Consultar Formas de Pagamento no Seller](#a5)

5. Implementar busca de parcelamento - Marketplace vai chamar endpoint do Seller. O Marketplace irá usar esse endpoint para consultar os parcelamentos oferecidos pelo Seller.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/installments ```

 [Exemplo Completo: Consultar Formas de Parcelamento no Seller](#a6)

6. Implementar rotina que coloca um pedido no Seller - Marketplace vai chamar endpoint do Seller. O Marketplace irá usar esse endpoint para colocar um pedido no Seller.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Colocar um Pedido no Seller](#a7)

7. Implementar rotina que abre transação de pagamento no Seller - Marketplace vai chamar endpoint do Seller.
O Marketplace irá usar esse endpoint para abrir uma transação pagamento para o Seller.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/transactions ```

 [Exemplo Completo: Abrir uma Trasação de Pagamento no Seller](#a8)

8. Implementar rotina que coloca pagamento no Seller - Marketplace vai chamar endpoint do Seller.
O Marketplace irá usar esse endpoint para colocar um pagamento no Seller.

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/payments ```

 [Exemplo Completo: Colocar um Pagamento no Seller](#a9)

9. Implementar rotina que coloca dados adicionais de pagamento no Seller - Marketplace vai chamar endpoint do Seller.
O Marketplace irá usar esse endpoint para colocar informações adicionais de dados do pagamento  no Seller

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/[transactionid]/additional-data ```

 [Exemplo Completo: Colocar Dados Adicionais de Pagamento no Seller](#a10)

10. Implementar rotina que autoriza o pagamento no Seller - Marketplace vai chamar endpoint do Seller.
O Marketplace irá usar esse endpoint para autorizar o andamento do pagamento no Seller

 <br/>_exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/[transactionid]/authorization-request ```

 [Exemplo Completo: Autorizar o Andamento do Pagamento no Seller](#a11)

11. Implementar endpoint de receber nota fiscal e rastreamento de entrega de um pedido - Seller vai chamar endpoint do Marketplace.Nos dados do pedido é enviado uma endpoint de serviços do Marketplace, o Seller vai invocar esse endpoint tanto pra informar dados de nota fiscal quanto dados de rastreamento de transportadora. O Seller ainda pode solicitar um cancelamento de um pedido que ainda não enviou nota fiscal.

 <br/>_exemplo da chamada:_<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```<br/>

 [Exemplo Completo: Informar nota fiscal de um pedido](#a12)<br/>
 [Exemplo Completo: Informar tracking de um pedido](#a13)<br/>
 [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a14)<br/>

<div class="alert alert-warning">No POST do pedido feito pelo Marketplace, o campo <code>marketplaceserviceendpoint</code> deve vir preenchido com o url base de serviços do Marketplace.</div>

12. Implementar rotina que captura ou cancela o pagamento no Seller - Marketplace vai chamar endpoint do Seller.
O Marketplace deve capturar o pagamento ao receber a nota fiscal e deve cancelar o pagamento ao receber um cancelamento de pedido.

<br/>_exemplo da chamada de captura:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/settlement-request ```

<br/>_exemplo da chamada de cancelamento:_<br/>
``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/cancellation-request ```

 > O exemplo completo esta descrito dentro da rotina de informar nota fiscal e cancelar, citada acima.

 - - -

## Abaixo segue o passo a passo detalhado de cada fluxo:

### Troca de Catalogo de SKU e Atualização de Condição Comercial de SKU

Fluxo de troca de catalogo de SKU e atualização de preço, estoque, frete, SLAs de entrega:

![](https://images.contentful.com/alneenqid6w5/6jPPddmz1ScOiiMKSaaW2m/8672d77783e8f8a32cd2c4c209610f10/sku-sugestion-canal-nao-vtex.png)

### Inserção e Atualização de SKU - Fluxo

* Dentro da loja hospedada na VTEX, será criado um *afiliado, que é o interessado em receber o catálogo e as atualizações de condições comerciais.

* O afiliado, deverá implementar um endpoint onde receberá informações sobre alterações de condição comercial de SKUs.

* Na loja VTEX, cada vez que uma SKU comercializado pelo afiliado sofrer uma alteração na condição comercial, ou for reindexado, o endpoint de notificação do afiliado será chamado.

* Quando o afiliado recebe uma notificação que um SKU mudou a condição comercial, o afiliado deve checar se já comercializa aquela SKU daquela loja que comunicou.

  * **Caso SIM**: O afiliado consulta a condição comercial na VTEX e se atualiza.

  * **Caso NÃO**: O afiliado busca a SKU na loja, insere no seu catalogo, e depois repete o cenário do "Caso SIM".

<a name="a1"></a>
### Notificação de Mudança

Notifica o Marketplace Não VTEX que houve uma mudança nas condições comerciais (preço, estoque, SLAs de entrega) de uma SKU - Endpoint do Afiliado (Marketplace)

<br/> Endpoint: ``` https://[endpointdoafiliado}/api/notification/ ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request:_

```
{
	"IdSku" : "1634", //id da sku da VTEX
	"An" : "sandboxintegracao", //loja vtex
	"IdAffiliate":"PRT", // id do afilado cadastrado na loja vtex
	"StockModified": true, //mudou estoque?
	"PriceModified": true //mudou preço?
}
```

<a name="a3"></a>
### Busca de Condições Comerciais

Acessa a loja VTEX pegando as condições comerciais (preço, estoque, SLAs de entrega) de uma SKU  - Endpoint da Loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado} ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parametro: **sc** // sc é o canal de vendas cadastrado no marketplace
<br/> Parametro: **affiliateId** // o id do afiliado cadastrado na loja VTEX

_request:_

```
{
    "postalCode":"22251-030",            //obrigatório se country estiver preenchido
    "country":"BRA",                     //obrigatório se postalCode estiver preenchido
    "items": [                           //obrigatório: deve conter pelo menos um objeto item
        {
            "id":"287611",               //obrigatório, string
            "quantity":1,                //obrigatório-quantidade do item a ser simulada, int
            "seller":"1"                 //loja pricipal usar sempre 1
        },
        {
            "id":"5837",
            "quantity":5,
            "seller":"1"
        }
    ]
}
```

_response:_

```
{
    "items": [                                                     //pode vir um array vazio, caso item indisponivel
        {
			"id": "287611",                                        //obrigatório, string
			"requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original (request)
			"price": 7390,                                         //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"listPrice": 7490,                                     //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"quantity": 1,                                         //obrigatório, int
			"seller": "1",                                         //id do seller cadastrado na loja // obrigatório, string,
			"merchantName": "sandboxintegracao",				   //se retornado significa que o pagamento deverá ser enviado, esse campo deverá ser enviado junto com o pedido também
			"priceValidUntil": "2014-03-01T22:58:28.143"           //data, pode ser nulo
			"offerings":[                                           //Array opcional, porém não pode ser nulo: enviar array vazio ou não enviar a propriedade
				{
				    "type":"Garantia",                               //obrigatório, string
				    "id":"5",                                       //obrigatório, string
				    "name":"Garantia de 1 ano",                       //obrigatório, string
				    "price":10000                                   //Os dois dígitos menos significativos são os centavos //obrigatório, int
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
			"price": 890,                                          // Os dois dígitos menos significativos são os centavos
			"listPrice": 990,                                      // Os dois dígitos menos significativos são os centavos
			"quantity": 5,
			"seller": "1",
			"merchantName": "sandboxintegracao",
			"priceValidUntil": null
        }
    ],
    "logisticsInfo": [                                            //obrigatório (se vier vazio é considerado que o item não está disponível) -  todos os itens devem ter os mesmos SLAs
        {
            "itemIndex": 0,                                       //obrigatório, int - representa os dados de sla do item de resposta (response)
            "stockBalance": 99,                                   //obrigatório  quando o CEP foi passado no request, estoque, int
            "quantity": 1,                                        //obrigatório quando o CEP foi passado no request, qauntidade pasada no request, int
            "shipsTo": [ "BRA", "USA" ],                          //obrigatório, array de string com as siglas dos países de entrega
            "slas": [                                             //obrigatório quando o CEP foi passado no request. Pode ser um array vazio na ausencia do CEP
                {
                    "id": "Expressa",                             //obrigatório, id tipo entrega, string
                    "name": "Entrega Expressa",                   //obrigatório, nome do tipo entrega, string
                    "shippingEstimate": "2bd",                    // bd == "business days" //obrigatório, string
                    "price": 1000                                 // Os dois dígitos menos significativos são os centavos, obrigatório, int
                    "availableDeliveryWindows": [                 //opcional, podendo ser um array vazio
                    ]
                },
                {
                    "id": "Agendada",
                    "name": "Entrega Agendada",
                    "shippingEstimate": "5d",                     // d == "days, bd == "business days"
                    "price": 800,
                    "availableDeliveryWindows": [
                         {
                            "startDateUtc": "2013-02-04T08:00:00+00:00",       //date, obrigatório se for enviado delivery window
                            "endDateUtc": "2013-02-04T13:00:00+00:00",         //date, obrigatório se for enviado delivery window
                            "price": 0        //int, obrigatório se for enviado delivery window - o valor total da entrega agendada é o valor base mais o valor desse campo
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
                    "shippingEstimate": "5bd",                                  // bd == "business days"
                    "price": 200
                }
            ]
        }
    ],
    "country":"BRA",                                           //string, nulo se não enviado
    "postalCode":"22251-030"                                   //string, nulo se não enviado
}
```

<a name="a2"></a>
### Busca Informações de uma SKU

Acessa uma loja VTEX e busca dados de uma SKU - Endpoint da Loja VTEX

<br/> Endpoint: ``` http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{idsku} ```
<br/> Verb: **GET**
<br/> Accept: **application/json**
<br/> Parametro: **idSku** // identificador do SKU

_response:_

```
{
    "Id": 1634, //id da sku
    "ProductId": 1634, //id do produto pai da sku
    "NameComplete": "Primer Lisse Minute Clarins - Base Facial Alisadora 15ml", //nome completo
    "ProductName": "Primer Lisse Minute Clarins - Base Facial Alisadora",
    "ProductDescription": "<strong>Primer Lisse Minute</strong> deixa a pele imediatante alisada e suave ao toque. O primer da <strong>Clarins</strong> atenua as imperfeições e reduz a aparência dos poros. A pele fica linda a pronta para receber a make!<br/>Com o rosto limpo aplique o primer com os dedos ou com um pincel. Espalhe bem começando pela zona T (testa, nariz e queixo) em direção aos cantos externos do rosto.",
    "SkuName": "15ml",// nome da SKU
    "IsActive": true, // está ativa?
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://epocacosmeticos.vteximg.com.br/arquivos/ids/162097-55-55/primer-lisse-minute-15ml-clarins.jpg",
    "DetailUrl": "/primer-lisse-minute-clarins-base-facial-alisadora/p", //link do produto na loja
    "CSCIdentification": null,
    "BrandId": "2000050",//identificador da marca
	"BrandName": "Clarins", //nome da marca
    "Dimension": {//dimensões
        "cubicweight": 0.2083,
        "height": 10,
        "length": 10,
        "weight": 100,
        "width": 10
    },
    "IsKit": false,
    "KitItems": [],
    "Services": [//serviços
        {
            "Id": 1098,
            "Name": "Embalagem presente",
            "IsFile": false,
            "IsGiftCard": false,
            "IsRequired": false,
            "Options": [
                {
                    "Id": 1098,// identificador do serviço
                    "Name": "Embalagem presente",//nome do serviço
                    "Description": "Embalagem presente",
                    "PriceName": "Embalagem presente",
                    "ListPrice": 1, //preço DE do serviço
                    "Price": 1 //preço POR do serviço
                }
            ],
            "Attachments": []
        }
    ],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SkuCommercialOffer": {
                "DeliverySlaSamples": [
                    {
                        "Region": {
                            "Id": "1",
                            "Name": "RJ",
                            "CountryCode": "BRA",
                            "ZipCode": "22080010"
                        },
                        "DeliverySlaPerTypes": [
                            {
                                "TypeName": "Normal",
                                "Price": 9.9,
                                "Time": "00:00:00"
                            }
                        ]
                    }
                ],
                "Price": 174,
                "ListPrice": 174,
                "AvailableQuantity": 22
            },
            "SellerId": "1",
            "StockKeepingUnitId": 1634,
            "SellerStockKeepingUnitId": "1634",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        }
    ],
    "SkuPriceSheet": [],
    "Images": [ //imagens, a primeira é a principal
        {
            "ImageUrl": "http://epocacosmeticos.vteximg.com.br/arquivos/ids/162097/primer-lisse-minute-15ml-clarins.jpg",
            "ImageName": null,
            "FileId": 162097
        }
    ],
    "SkuSpecifications": [ //variações
        {
            "FieldId": 283,
            "FieldName": "Variação",
            "FieldValueIds": [ //identificador da variação
                2688
            ],
            "FieldValues": [ //valor da variação
                "15ml"
            ]
        }
    ],
    "ProductSpecifications": [],
    "ProductClustersIds": "135,149,150,151,152,153,154,155,156,157,158,159,160,161,219,310,358,366,406,407,408,451,473,480,486,525,535,546,549,552,561,569",
    "ProductCategoryIds": "/1000004/1000012/1000040/", //arvore de identificadores de categorias
    "ProductCategories": {
        "1000004": "Maquiagem", //identificador e nome da categoria
        "1000012": "Primer e Finalizador",
        "1000040": "Fixador da Maquiagem"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0,
    "AlternateIds": {
        "Ean": "3380814700219",
        "RefId": "005899"
    },
    "AlternateIdValues": [
        "3380814700219",
        "005899"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

- - -

### Simulação de Carrinho e Página de Pagamento

Este tópico tem por objetivo auxiliar o na simulação de carrinho, e consulta de formas de pagamento e  parcelamentos entre um Marketplace não VTEX com uma loja VTEX.

### No Carrinho e no Pagamento

Quando um produto é inserido no carrinho no Marketplace Não VTEX, ou faz se alguma edição no carrinho, uma consulta de simulação de carrinho deverá ser feita na loja VTEX para checar a validade das condições comerciais (preço, estoque, frete e SLAs de entrega). Quando o cliente vai para o pagamento, uma consulta as formas de pagamento, aos parcelamentos e uma outra simulação de carrinho deverá ser realizada.

_Fluxo de chamadas no carrinho e no pagamento:_

![](https://images.contentful.com/alneenqid6w5/g3Ozduhczuy0Iaqum6UMS/6e2b44530d4ae3770285d3fb39a8241b/fechato-canal-nao-vtex-com-pgto.png)

### Simulaçao de Carrinho

Acessa a loja VTEX simulando um carrinho, para checar as condições comerciais e as SLAs de entrega - Endpoint loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado} ```
<br/> Verb: **POST**<br/>
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parametro: **sc** // sc é o canal de vendas
<br/> Parametro: **affiliateId** // affiliateId é o id do afiliado cadastrado na loja VTEX

_request:_

```
{
    "postalCode":"22251-030",            //obrigatório se country estiver preenchido, string
    "country":"BRA",                     //obrigatório se postalCode estiver preenchido, string
    "items": [                           //obrigatório: deve conter pelo menos um objeto item
        {
            "id":"287611",               //obrigatório, string
            "quantity":1,                //obrigatório-quantidade do item a ser simulada, int
            "seller":"seller1"           //sigla do do seller criado no admin // obrigatório, string
        },
        {
            "id":"5837",
            "quantity":5,
            "seller":"seller1"
        }
    ]
}
```

_response:_

```
{
    "items": [                                                     //pode vir um array vazio
        {
            "id": "287611",                                        //obrigatório, string
            "requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original,
            "price": 7390,                                         // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "listPrice": 7490,                                     // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "quantity": 1,                                         //obrigatório, int
            "seller": "1",                                         // Id do seller cadastrado na loja // obrigatório, string,
			"merchantName": "sandboxintegracao",							   // referente ao pagamento, será usado ao enviar o pedido
            "priceValidUntil": "2014-03-01T22:58:28.143"           //data, pode ser nulo
            "offerings":[                                           //Array opcional, porém não pode ser nulo: enviar array vazio ou não enviar a propriedade
                {
                    "type":"Garantia",                               //obrigatório, string
                    "id":"5",                                       //obrigatório, string
                    "name":"Garantia de 1 ano",                       //obrigatório, string
                    "price":10000                                   //Os dois dígitos menos significativos são os centavos //obrigatório, int
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
            "price": 890,                                          // Os dois dígitos menos significativos são os centavos
            "listPrice": 990,                                      // Os dois dígitos menos significativos são os centavos
            "quantity": 5,
            "seller": "1",
			"merchantName": "sandboxintegracao",
            "priceValidUntil": null
        }
    ],
    "logisticsInfo": [                                            //**, obrigatório (se vier vazio é considerado que o item não está disponível) -  todos os itens devem ter os mesmos SLAs
        {
            "itemIndex": 0,                                       //obrigatório, int - representa os dados de sla do item de resposta (response)
            "stockBalance": 99,                                   //obrigatório  quando o CEP foi passado no request, estoque, int
            "quantity": 1,                                        //obrigatório quando o CEP foi passado no request, qauntidade pasada no request, int
            "shipsTo": [ "BRA", "USA" ],                          //obrigatório, array de string com as siglas dos países de entrega
            "slas": [                                             //obrigatório quando o CEP foi passado no request. Pode ser um array vazio
                {
                    "id": "Expressa",                             //obrigatório, id tipo entrega, string
                    "name": "Entrega Expressa",                   //obrigatório, nome do tipo entrega, string
                    "shippingEstimate": "2bd",                    // bd == "business days" //obrigatório, string
                    "price": 1000                                 // Os dois dígitos menos significativos são os centavos, obrigatório, int
                    "availableDeliveryWindows": [                 //opcional, podendo ser um array vazio
                    ]
                },
                {
                    "id": "Agendada",
                    "name": "Entrega Agendada",
                    "shippingEstimate": "5d",                     // d - "days, bd - "business days"
                    "price": 800,
                    "availableDeliveryWindows": [
                         {
                            "startDateUtc": "2013-02-04T08:00:00+00:00",       //date, obrigatório se for enviado delivery window
                            "endDateUtc": "2013-02-04T13:00:00+00:00",         //date, obrigatório se for enviado delivery window
                            "price": 0        //int, obrigatório se for enviado delivery window - o valor total da entrega agendada é o valor base mais o valor desse campo
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
                    "shippingEstimate": "5bd",                                  // bd - "business days"
                    "price": 200
                }
            ]
        }
    ],
    "country":"BRA",                                           //string, nulo se não enviado
    "postalCode":"22251-030"                                   //string, nulo se não enviado
}
```

>Caso o CEP e Pais não for enviado, não será retornado informações de SLA de entrega

<a name="a5"></a>
### Consulta as Formas de Pagamento Disponíveis no Seller

Acessa a loja VTEX para consultar a formas de pagamento disponíveis - Endpoint loja VTEX

<br/> endpoint: ``` https://{AccountName}.vtexpayments.com.br/api/pvt/merchants/payment-systems ```
<br/> verb: **GET**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_response:_

```
[
    {
        "id": 6, //identificador da forma de pagamento
        "name": "Boleto Bancário", //nome da forma de pagamento
        "connectorId": 0,
        "requiresDocument": false,
        "implementation": "Vtex.PaymentGateway.BankIssuedInvoice.BankIssuedInvoicePayment",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector",
        "groupName": "bankInvoice",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": false,
        "isAvailable": true, // esta disponível?
        "description": null,
        "validator": {
            "regex": null,
            "mask": null,
            "cardCodeMask": null,
            "cardCodeRegex": null,
            "weights": null,
            "useCvv": false,
            "useExpirationDate": false,
            "useCardHolderName": false,
            "useBillingAddress": false,
            "validCardLengths": null
        },
        "dueDate": "2015-01-19T14:49:14.4767186Z"
    },
    {
        "id": 2, //identificador da forma de pagamento
        "name": "Visa", //nome da forma de pagamento
        "connectorId": 0,
        "requiresDocument": true,
        "implementation": "Vtex.PaymentGateway.CreditCard.Visa",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.AdyenConnector",
        "groupName": "creditCard",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": true, // habilita parcelamento?
        "isAvailable": true, // esta disponível?
        "description": null,
        "validator": {
            "regex": "^4", // regular expression de validação
            "mask": "9999 9999 9999 9999", // mascara de validação
            "cardCodeMask": "999", // mascara do cvv
            "cardCodeRegex": "^[0-9]{3}$", // regilar expression que valida o cvv
            "weights": [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
            "useCvv": true, //cvv é obrigatório?
            "useExpirationDate": true, //usa data de expiração?
            "useCardHolderName": true, //nome do portador obrigatório?
            "useBillingAddress": true, //usa enderço de cobrança?
            "validCardLengths": null
        },
        "dueDate": "2015-01-17T14:49:14.4767186Z"
    },
    {
        "id": 4,
        "name": "Mastercard",
        "connectorId": 0,
        "requiresDocument": true,
        "implementation": "Vtex.PaymentGateway.CreditCard.Mastercard",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.AdyenConnector",
        "groupName": "creditCard",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": true,
        "isAvailable": true,
        "description": null,
        "validator": {
            "regex": "^5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0})",
            "mask": "9999 9999 9999 9999",
            "cardCodeMask": "999",
            "cardCodeRegex": "^[0-9]{3}$",
            "weights": [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
            "useCvv": true,
            "useExpirationDate": true,
            "useCardHolderName": true,
            "useBillingAddress": true,
            "validCardLengths": null
        },
        "dueDate": "2015-01-17T14:49:14.4767186Z"
    }
]
```
<a name="a6"></a>
### Consulta os Parcelamentos no Seller

Consulta a loja VTEX para buscar os parcelamentos por forma de pagamento e promoções de SKU - Endpoint loja VTEX

Aceese o anexo para ver o exemplo:

<a href="http://resources.vtex.com/pt-br/pci-gateway/configuration/v1/installments.html#">Anexo Consultar Parcelamento</a>

### Enviar Pedido, Enviar Pagamento e Autorizar Despacho

Este tópico tem por objetivo auxiliar um Marketplace não VTEX enviar um pedido, enviar uma transação de pagamento, e enviar autorização para despacho (proceder com o fulfillment do pedido).

Caso se queira uma condição comercial diferenciada para o Marketplace não VTEX, na loja VTEX deverá ser criado uma nova politica comercial, podendo assim criar promoções diferenciadas (desconto, frete, etc) somente para o afiliado desejado. Caso **não** tenha politica comercial diferenciada, deve se usar a política comercial da loja principal (sc=1).

_Fluxo de chamadas de descida de pedido, pagamento e autorização para despachar:_

![](https://images.contentful.com/alneenqid6w5/4xY2FklPgcqaEqumcwW0We/73d38049fe0b17a4fa1c4da63d4ae4af/order-canal-n-vtex-com-pgto.PNG)

<a name="a7"></a>
### Enviar Pedido

Quando o pedido é fechado em um Marketplace não VTEX, um POST deve ser feito na loja VTEX, para que essa possa receber a ordem de pedido - Endpoint Loja VTEX

<br/> endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc={idcanal}&affiliateId={idafiliado}```
<br/> verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parametro: **sc** // sc é o canal de vendas cadastrado na VTEX.<br/>
<br/> Parametro: **affiliateId** // affiliateId é o id do afiliado cadastrado n loja VTEX

_request:_

```
[
  {
	"marketplaceOrderId": "959311095", //identificador do pedido no marketplace
	"marketplaceServicesEndpoint": "https://urlmarketplace/", //leia o tópico implementando MarketplaceServicesEndpoint Actions
	"marketplacePaymentValue": 11080, //valor que o marketplace se compromete a pagar para o Seller
	"items": [
	  {
	    "id": "2002495",
	    "quantity": 1,
	    "seller": "1",
	    "commission": 0,
	    "freightCommission": 0,
	    "price": 9990,
	    "bundleItems": [], //serviços. Ex: embalagem pra presente.
	    "itemAttachment": {
	      "name": null,
	      "content": {}
	    },
	    "attachments": [], //customização do item, Ex:camisa com o numero 10
	    "priceTags": [],
	    "measurementUnit": null, unidade de medida
	    "unitMultiplier": 0, unidade multipladora,Ex: venda por quilo
	    "isGift": false
	  }
	],
	"clientProfileData": {
	  "id": "clientProfileData",
	  "email": "32172239852@gmail.com.br",
	  "firstName": "Jonas",
	  "lastName": "Alves de Oliveira",
	  "documentType": null,
	  "document": "3244239851",
	  "phone": "399271258",
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
	    "receiverName": "Jonas Alves de Oliveira",
	    "addressId": "Casa",
	    "postalCode": "13476103",
	    "city": "Americana",
	    "state": "SP",
	    "country": "BRA",
	    "street": "JOÃO DAMÁZIO GOMES",
	    "number": "311",
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
	      "shippingEstimate": "7d",
	      "price": 1090,
	      "deliveryWindow": null
	    }
	  ]
	},
	"paymentData":{
		"merchantName":"sandboxintegracao" //campo recebido na simulação de carrinho
	},
	"openTextField": null,
	"marketingData": null
 }
]
```

_response:_

```
[
  {
	"marketplaceOrderId": "959311095",
	"orderId": "123543123", //id do pedido que foi gerado na loja VTEX
	"followUpEmail": "75c70c09dbb3498c9b3bbdee59bf0687@ct.vtex.com.br",
	"items": [
	  {
	    "id": "2002495",
	    "quantity": 1,
	    "seller": "1",
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
	"paymentData":{
		"merchantName":"sandboxintegracao",
		"merchantPaymentReferenceId":"500225" //inteiro, id do pagamento, número que será enviado junto com o pagamento para conciliação.
	}
 }
]
```

_retorno de erro:_

```
 {
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```

### Enviar Pagamento - Iniciar Transação, Enviar Dados de Pagamento, Enviar Dados de Anti-Fraude e Autorização de Pagamento

Após enviar o pedido e receber o response com o paymentData.merchantPaymentReferenceId, o processo de transação de pagamento do pedido deverá ser enviado.

<a name="a8"></a>
### Iniciar Transação

Inicia uma transação de pagamento usando o paymentData.merchantPaymentReferenceId recebido no retorno de inserção de pedido - Endpoint Loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexpayments.com.br/api/pvt/transactions ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request:_

```
{
  "value":3190, //valor do pagamento
  "referenceId":"500225", //paymentData.merchantPaymentReferenceId retornado no momento que inseriu o pedido
  "channel":"sandboxintegracao", //nome do gateway de pagamento
  "urn":""
}
```

_response:_

```
{
    "id": "BB55ED929FF749E6BE5A835E4C811B77",
    "transactionId": "BB55ED929FF749E6BE5A835E4C811B77", // identificador da transação criada
    "referenceKey": "500225",
    "interactions": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/interactions"
    },
    "settlements": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/settlements"
    },
    "payments": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/payments"
    },
    "refunds": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/refunds"
    },
    "timeoutStatus": 0,
    "totalRefunds": 0,
    "status": "Started",
    "value": 3190,
    "receiverUri": "https://{AccountName}.vtexpayments.com.br:443/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/payments/",
    "startDate": "2015-01-26T18:40:31.4040955Z",
    "authorizationToken": null,
    "authorizationDate": null,
    "commitmentToken": null,
    "commitmentDate": null,
    "refundingToken": null,
    "refundingDate": null,
    "cancelationToken": null,
    "cancelationDate": null,
    "fields": [
        {
            "name": "channel",
            "value": "sandboxintegracao"
        }
    ],
    "ipAddress": null,
    "userAgent": null,
    "acceptHeader": null,
    "antifraudTid": null,
    "channel": "sandboxintegracao",
    "urn": null,
    "softDescriptor": null
}
```

<a name="a9"></a>
### Enviar Dados de Pagamento

Envia os dados referentes ao pagamento, debaixo da transação iniciada - Endpoint Loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexpayments.com.br/api/pvt/payments/{transactionId}/payments ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request:_

```
{
  "callbackUrl": "",
  "paymentsArray": "[
    {
      \"paymentSystem\": 2, //identificador da forma de pagamento
      \"paymentSystemName\": \"Visa\", //nome da forma de pagamento
      \"groupName\": \"creditCard\", //grupo da forma de pagamento, tipo
      \"currencyCode\": \"BRL\", //código da moeda
      \"installments\": 1, //numero de parcelas
      \"value\": 3190, //caso sem juros: valor total do pedido; caso parcelado com juros: multiplar o valor das parcelas com juros pelo numero de parcelas
      \"installmentsInterestRate\": 0, //juros de parcelamento
      \"installmentsValue\": 3190, //valor da parcela
      \"referenceValue\": 3190, //valor total do pedidos sem juros
      \"fields\": {
        \"document\": \"80417345615\", //documento do cartão
        \"accountId\": \"\",
        \"addressId\": \"\",
        \"cardNumber\": \"4444333322221111\", //numero do cartao, quando cartão
        \"carHolder\": \"JONAS ALVES DE OLIVEIRA\", //nome do cartão, quando cartão
        \"expireDate\": \"0617\", //mes, ano da validade do cartão
        \"cvv2\": \"171\" //codigo de validação do cartão
      },
      \"transaction\": {
        \"id\": \"BB55ED929FF749E6BE5A835E4C811B77\",//identificador da transação
        \"merchantName\": \"sandboxintegracao\",//mercahnname
        \"payments\": null
      }
    }
  ]"
}
```

_response:_

```
200
```

<a name="a10"></a>
### Enviar Dados Adicionais

Envia dados adicionais que serão usados pelo sistema de anti-fraude - Endpoint Loja VTEX

<br/> Endpoint: `https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{transactionid}/additional-data`
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parametro: **transactionid** // identificador da transação  Ex: BB55ED929FF749E6BE5A835E4C811B77

_request:_

```
[
	{
	    "name": "cart",
	    "value": "{\"items\":[
		{
						\"id\":\"122323\",
						\"name\":\"Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I ABCDEFG\",
						\"value\":1075,
						\"quantity\":1,
						\"shippingDiscount\":0,
						\"discount\":50
		}
		],\"freight\":800,
		\"tax\":0
		}"
	},
	{
	    "name": "clientProfileData",
	    "value": "{\"email\":\"jorge.maravilha@gmail.com\",\"firstName\":\"Jorge\",\"lastName\":\"Maravilha\",\"document\":\"47402620955\",\"phone\":\"+556133318800\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"70875-010\",\"address\":{\"receiverName\":\"Jorge\",\"postalCode\":\"22231130\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA SAO SALVADOR\",\"number\":\"41\",\"neighborhood\":\"FLAMENGO\",\"complement\":\"APTO 802\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false}"
	},
	{
	    "name": "shippingData",
	    "value": "{\"receiverName\":\"JORGE\",\"postalCode\":\"70875010\",\"city\":\"BRASILIA\",\"state\":\"DF\",\"country\":\"BRA\",\"street\":\"SQN 216 BLOCO A \",\"number\":\"777\",\"neighborhood\":\"ASA NORTE\",\"complement\":\"APTO 704\",\"reference\":null}"
	}
]
```

_response:_

```
{}
```

<a name="a11"></a>
### Autorização de Pagamento

Envia uma autorização para liberação  do andamento do processo de pagamento - Endpoint Loja VTEX

<br/> Endpoint: `https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/authorization-request`
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parametro: **transactionid** // identificador da transação

_request:_

```
{
    "transactionId": "BB55ED929FF749E6BE5A835E4C811B77",
    "softDescriptor": "{AccountName}",
    "prepareForRecurrency": false,
    "split": [
        {
            "merchant": "{AccountName}",
            "value": 3190,
            "remoteTransactionId": "BB55ED929FF749E6BE5A835E4C811B77"
        }
    ]
}
```

_response:_

```
{}
```

### Implementando Marketplace Services Endpoint Actions

O MarketplaceServicesEndpoint serve para o Seller VTEX informar ao canal de vendas a nota fiscal e tracking de pedido. O envio de notas fiscais pode ser parcial, obrigando assim ao informador informar além dos valores da nota fiscal, os items ele está mandando na nota fiscal parcial.

<a name="a12"></a>
### Informar Nota Fiscal

Quando a Nota Fiscal for emitida pelo Seller VTEX, está será enviada para o Marketplace no marketplaceServicesEndpoint enviado nos dados de pedido - Endpoint do Marketplace

<br/> Endpoint: `https://marketplaceServicesEndpoint/pub/orders/{marketplaceorderId}/invoice`
<br/> verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> <br/> 
_request:_

```
{
	"type": "Output", //Output(venda)|Input(devolução)
	"invoiceNumber": "NFe-00001", //numero da nota fiscal
	"courier": "", //quando é nota fiscal, dados de tracking vem vazio
	"trackingNumber": "", //quando é nota fiscal, dados de tracking vem vazio
	"trackingUrl": "",//quando é nota fiscal, dados de tracking vem vazio
	"items": [ //itens da nota
	  {
	    "id": "345117",
	    "quantity": 1,
	    "price": 9003
	  }
	],
	"issuanceDate": "2013-11-21T00:00:00", //data da nota
	"invoiceValue": 9508 //valor da nota
}
```

_response:_

```
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```
##### Captura de Pagamento
No momento em que o Marketplace recebe a nota fiscal, é o momento de efetuar a captura do pagamento.

endpoint: `https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/settlement-request`
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request_
```
  {value: 14890} //valor que deseja capturar
```
_response_
```
{}
```

<a name="a13"></a>
### Informar Tracking de Transportadora

Quando o pedido for entregue a uma transportadora, as informações de tracking serão enviadas para o Marketplace no marketplaceServicesEndpoint enviado nos dados de pedido - Endpoint do Marketplace

<br/> Endpoint: `https://marketplaceServicesEndpoint/pub/orders/{marketplaceorderId}/invoice`
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request:_

```
{
	"type": "Output",
	"invoiceNumber": "NFe-00001",
	"courier": "Correios", //transportadora
	"trackingNumber": "SR000987654321", /tracking number
	"trackingUrl": "http://traking.correios.com.br/sedex/SR000987654321", url de tracking
	"items": [
	  {
	    "id": "345117",
	    "quantity": 1,
	    "price": 9003
	  }
	],
	"issuanceDate": "2013-11-21T00:00:00",
	"invoiceValue": 9508
}
```

_response:_

```
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a14"></a>
### Enviar Solicitação de Cancelamento

Uma solicitação de cancelamento pode ser enviada para o para o Marketplace no marketplaceServicesEndpoint - Endpoint do Marketplace

<br/>endpoint: `https://marketplaceServicesEndpoint/pvt/orders/{marketplaceorderId}/cancel`
<br/>verb: **POST**

##### Cancelamento de Pagamento
No momento em que o Marketplace recebe uma solicitação de cancelamento de pedido, é o momento de efetuar o cancelamento da transação de pagamento.

<br/> Endpoint: ``` https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/cancellation-request ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request_
```
  {value: 14890} //valor que deseja cancelar, geralmente o total do pedido
```
_response_
```
{}
```

>A nota fiscal e o tracking podem ser enviados na mesma chamada, basta preencher todos os dados do POST, cabendo ao receber controlar o fluxo de captura de pagamento.
