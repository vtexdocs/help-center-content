---
title: 'Guia de integração para marketplaces - Marketplace não VTEX'
id: 5qHw5WfVAII44IY46sM6CI
status: DRAFT
createdAt: 2017-10-14T21:29:48.653Z
updatedAt: 2019-12-31T15:24:09.199Z
publishedAt: 
firstPublishedAt: 2017-10-14T21:46:22.332Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex-old
locale: pt
legacySlug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex-old
subcategory: 
---

## Marketplace Não Hospedado na Plataforma VTEX vendendo para Sellers Hospedados na Plataforma VTEX

Este documento tem por finalidade auxiliar na integração de um _Marketplace_ **não** hospedado na plataforma VTEX com um _Seller_ hospedado na plataforma VTEX. <br/>
Este modelo contempla troca de catalogo, atualização de condição comercial (preço, estoque) de um _SKU_ entre um Seller hospedado na plataforma VTEX e um Marketplace (afiliado) **não** hospedado na plataforma VTEX, além de auxiliar na descida de pedido e envio de autorização de despacho para o Seller hospedado na plataforma VTEX.

> ALGUNS CONCEITOS:
>> _Seller_ = Dono do produto, responsável por cumprir com a entrega do SKU.<br/>
>> _Marketplace_ = Dono da vitrine (cara com o cliente final), responsável por expor e vender o SKU.<br/>
>> _SKU_ = Item a ser trocado e vendido entre Marketplace e Seller.<br/>
>> _Endpoint_ = Ponto de acesso de um serviço na internet, serviço pronto para receber uma requisição e devolver uma resposta.<br/>


### Ações que deverão ser tomadas pelo Marketplace não hospedado na VTEX para implementação da integração:

1. Implementar o endpoint para receber notificação de mudança de preço e estoque - Seller hospedado na VTEX vai chamar endpoint do Marketplace. Toda vez que o SKU mudar o preço e ou o estoque no Seller, o Seller tem que chamar esse endpoint do Marketplace, simplesmente comunicando a mudança. Ao receber esse request o Marketplace vem buscar o preço e estoque no Seller no método de consulta politica comercial que vamos falar mais abaixo.

 _exemplo da chamada:_<br/>
 ``` https://marketplace.com.br/api/notification/ ```

 [Exemplo Completo: Enviar Notificação de Mudança de Preço e Estoque de SKU](#a1)

2. Implementar busca de dados de SKU no Seller - Marketplace vai chamar endpoint do Seller na VTEX. Toda vez que o serviço de notificação de mudança do Seller avisar sobre uma SKU, e o Marketplace ainda nao tem a SKU catalogada, o Marketplace vem no Seller buscar os dados da nova SKU.

 _exemplo da chamada:_<br/>
 ```http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/2000037 ```

 [Exemplo Completo: Buscar Dados de SKU](#a2)

3. Implementar busca de politica comercial (preço e estoque, frete, tipo entrega e custo) - Marketplace vai chamar endpoint do Seller. Toda vez que o serviço de notificação de mudança do Seller avisar sobre mudança de uma SKU (já catalogada), o Marketplace busca preço e ou estoque no Seller pra se atualizar.

 _exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Consultar Política Comercial](#a3)

4. Implementar rotina que coloca um pedido no Seller - Marketplace vai chamar endpoint do Seller. O Marketplace irá usar esse enpoint para colocar um pedido no Seller.

 _exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Colocar um Pedido no Seller](#a7)

5. Implementar rotina que autoriza procedimento de entrega um pedido no Seller - Marketplace vai chamar endpoint do Seller. O Marketplace irá usar esse enpoint para autorizar despacho de um pedido no Seller.

 _exemplo da chamada:_<br/>
 ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders/[orderid]/fulfill?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Autorizar um Pedido no Seller](#a7)

6. Implementar endpoint de receber nota fiscal e rastreamento de entrega de um pedido - Seller vai chamar endpoint do Marketplace. Nos dados do pedido é enviado uma endpoint de serviços do Marketplace, o Seller vai invocar esse endpoint tanto pra informar dados de nota fiscal quanto dados de rastreamanto de transportadora. O Seller ainda pode solicitar um cancelamento de um pedido que ainda não enviou nota fiscal.

 _exemplo da chamada:_<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```<br/>

 [Exemplo Completo: Informar nota fiscal de um pedido](#a12)<br/>
 [Exemplo Completo: Informar tracking de um pedido](#a13)<br/>
 [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a14)<br/>

 >NOTA
 >> No POST do pedido feito pelo Marketplace, o campo "marketplaceserviceendpoint" deve vir preenchido com o url base do serviços.

 - - -

## Abaixo segue o passo a passo detalhado de cada fluxo:

### Troca de Catalogo de SKU e Atualização de Condição Comercial de SKU

Fluxo de troca de catalogo de SKU e atualização de preço, estoque, frete, SLAs de entrega:

![](https://images.contentful.com/alneenqid6w5/2rsft4dyVWggCk88IWusG/229b96fe3ca44d907bba857900771210/sku-sugestion-canal-nao-vtex.png)

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
<br/> Vverb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**

_request:_

```json
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

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmetro: **sc** // sc é o canal de vendas cadastrado  na loja VTEX
<br/> Parâmetro: **affiliateId** // o id do afiliado cadastrado na loja VTEX

_request:_

```json
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

```json
{
    "items": [                                                     //pode vir um array vazio, caso item indisponivel
        {
			"id": "287611",                                        //obrigatório, string
			"requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original (request)
			"price": 7390,                                         //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"listPrice": 7490,                                     //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"quantity": 1,                                         //obrigatório, int
			"seller": "1",                                         //id do seller cadastrado na loja // obrigatório, string,
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
                    "shippingEstimate": "5d",                     // d - days, bd - business days
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
                    "shippingEstimate": "5bd",                                  // bd - business days
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

<br/> Endpoint: ``` http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/[idsku] ```
<br/> Verb: **GET**
<br/> Accept: **application/json**
<br/> Parâmetro: **idSku** // identificador do SKU


_response:_

```json
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

---

### Simulação de Carrinho e Página de Pagamento

Este tópico tem por objetivo auxiliar o na simulação de carrinho entre um Marketplace não VTEX com uma loja VTEX.

### No Carrinho e no Pagamento

Quando um produto é inserido no carrinho no Marketplace Não VTEX, ou faz se alguma edição no carrinho, uma consulta de simulaçao de carrinho deverá ser feita na loja VTEX para checar a validade das condições comerciais (preço, estoque, frete e SLAs de entrega). Quando o cliente vai para o pagamento, uma outra simulação de carrinho deverá ser realizada.

_Fluxo de chamadas no carrinho e no pagamento:_

![](https://images.contentful.com/alneenqid6w5/4p1SjwzKvCegCe4AUKm2Q6/954a6a85dba6a4d0789ecdd6bcc5da39/fechato-canal-nvtex.png)

### Simulação de Carrinho

Acessa a loja VTEX simulando um carrinho, para checar as condições comerciais e as SLAs de entrega - Endpoint loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmetro: **sc** // sc é o canal de vendas cadastrado na loja VTEX
<br/> Parâmetro: **affiliateId** // affiliateId é o id do afiliado cadastrado na loja VTEX

_request:_

```json
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

```json
{
    "items": [                                                     //pode vir um array vazio
        {
            "id": "287611",                                        //obrigatório, string
            "requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original,
            "price": 7390,                                         // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "listPrice": 7490,                                     // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "quantity": 1,                                         //obrigatório, int
            "seller": "1",                                         // Id do seller cadastrado na loja // obrigatório, string,
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

>Caso o CEP e Pais não for enviado, não será retornado informações de SLA de entrega. slas\[\] vazio.


### Enviar Pedido e Autorizar Despacho

Este tópico tem por objetivo auxiliar um Marketplace não VTEX enviar um pedido e enviar autorização para despacho (proceder com o fulfillment do pedido).

Caso se queira uma condição comercial diferenciada para o Marketplace não VTEX, na loja VTEX deverá ser criado uma mova politica comercial, podendo assim criar promoções diferenciadas (desconto, frete, etc) somente para o affiliado desejado. Caso não tenha politica comercial diferenciada, deve se usar a politica comercia da loja principal (sc=1).

_Fluxo de chamadas de descida de pedido, pagamento e autorização para despachar:_

![](https://images.contentful.com/alneenqid6w5/8Okv8JXjSoiwAYSiokO4m/135fef672a650d4d6b581fa7a9f2b3dc/order-canal-naum-vtex.png)


<a name="a7"></a>
### Enviar Pedido

Quando o pedido é fechado em um Marketplace não VTEX, um POST deve ser feito na loja VTEX, para que essa possa receber a ordem de pedido - Endpoint Loja VTEX

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=[idcanal]&affiliateId=[idafiliado] ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmetro: **sc** // sc é o canal de vendas cadastrado na VTEX.
<br/> Parâmetro: **affiliateId** // affiliateId é o id do afiliado cadastrado n loja VTEX

_request:_

```json
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
	    "measurementUnit": null, //unidade de medida
	    "unitMultiplier": 0, //unidade multipladora,Ex: venda por quilo
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
	"paymentData":null,
	"openTextField": null
  }
]
```

_response:_

```json
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
	"paymentData":null
	}
 }
]
```

_retorno de erro:_

```json
{
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```
<a name="a8"></a>
### Enviar Autoriação Para Despachar

Quando o pagamento do pedido é concluído no canal de vendas não VTEX, um POST deverá ser feito na loja VTEX, para que o pedido possa prosseguir para tratamento - Endpoint da Seller

<br/> Endpoint: ``` https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders/[orderid]/fulfill?sc=[idcanal]&affiliateId=[idafiliado] ```
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmetro: **sc** // sc é o canal de vendas cadastrado na VTEX.
<br/> Parâmetro: **affiliateId** // affiliateId é o id do afiliado cadastrado n loja VTEX

_request:_

```json
{
	"marketplaceOrderId": "959311095" //id do pedido originado no canal de vendas
}
```

_response:_

```json
{
	"date": "2014-10-06 18:52:00",
	"marketplaceOrderId": "111",
	"orderId": "123543123",
	"receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8",
}
```

### Implementando Marketplace Services Endpoint Actions

O MarketplaceServicesEndpoint serve para o Seller VTEX informar ao canal de vendas a nota fiscal e tracking de pedido. O envio de notas fiscais pode ser parcial, obrigando assim ao informador informar além dos valores da nota fiscal, os items ele está mandando na nota fiscal parcial.

<a name="a12"></a>
### Informar Nota Fiscal

Quando a Nota Fiscal for emitida pelo Seller VTEX, está será enviada para o Marketplace no marketplaceServicesEndpoint enviado nos dados de pedido - Endpoint do Marketplace

<br/> Endpoint: `https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice`<br/>
<br/> Verb: **POST**<br/>
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmetro: **marketplaceorderId** //identificador do pedido do Marketplace

_request:_

```json
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

```json
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a13"></a>
### Informar Tracking de Transportadora

Quando o pedido for entregue a uma transportadora, as informações de tracking serão enviadas para o Marketplace no marketplaceServicesEndpoint enviado nos dados de pedido - Endpoint do Marketplace

<br/> Endpoint: `https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice`
<br/> Verb: **POST**
<br/> Content-Type: **application/json**
<br/> Accept: **application/json**
<br/> Parâmentro: **marketplaceorderId** //identificador do pedido do Marketplace

_request:_

```json
{
	"type": "Output",
	"invoiceNumber": "NFe-00001",
	"courier": "Correios", //transportadora
	"trackingNumber": "SR000987654321", //tracking number
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

```json
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a14"></a>
### Enviar Solicitação de Cancelamento

Uma solicitação de cancelamento pode ser enviada para o para o Marketplace no marketplaceServicesEndpoint - Endpoint do Marketplace

<br/> Endpoint: `https://marketplaceServicesEndpoint/pvt/orders/[marketplaceorderId]/cancel`
<br/> Verb: **POST**
<br/> Parâmetro: **marketplaceorderId** //identificador do pedido do Marketplace


_request:_

<pre>

</pre>

_response:_

```json
{
  "orderId": "564041714680-01",
  "receipt": "5342fde6-86d1-4220-a83b-9a992145b547",
  "date": "2015-10-08T20:36:51.2390821+00:00"
}
```


>A nota fiscal e o tracking podem ser enviados na mesma chamada, basta preencher todos os dados do POST, cabendo ao receber controlar o fluxo de captura de pagamento.

