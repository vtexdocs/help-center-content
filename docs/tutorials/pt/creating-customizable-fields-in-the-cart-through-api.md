---
title: Criar campos customizáveis no carrinho por API
id: YeX7AzNYyGCuwsQiImI0i
status: DRAFT
createdAt: 2019-01-24T20:45:43.946Z
updatedAt: 2020-10-29T00:19:05.391Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:02:31.448Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: criar-campos-customizaveis-no-carrinho-por-api
legacySlug: criar-campos-customizaveis-no-carrinho-por-api
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Durante o processo de checkout, algumas lojas têm a necessidade de solicitar ao cliente dados que não fazem parte do conjunto padrão de objetos do orderForm. Por exemplo: gênero, número de celular, idade etc.

Para isso, você pode usar as duas chamadas do Custom Data: uma para criar campos extras no orderForm e outra para definir o valor de cada um desses campos.

Estes dados estarão disponíveis dentro do pedido, nas APIs de _orders_ (Gerenciamento de pedidos).

Veja a documentação completa da [API de Custom Data aqui](https://developers.vtex.com/reference/custom-data).

## Criar campos customizáveis

Para criar campos customizáveis no orderForm, use a chamada abaixo:

&bull; URL: `https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`

&bull; Método: `POST`

Veja abaixo um exemplo do JSON que devemos passar no body dessa chamada.

```json
{
	"paymentConfiguration": 
	{
		"requiresAuthenticationForPreAuthorizedPaymentOption": false
	},
	"minimumQuantityAccumulatedForItems": 1,
	"decimalDigitsPrecision": 2,
	"minimumValueAccumulated": 0,
	"apps": 
	[
		{
			"id":"profile",
			"fields":
			[
				"idade",
				"sexo"
			]
		},
		{
			"id":"endereco",
			"fields":
			[
				"telefone2"
			]
		}
	]
}
```

O objeto `apps` é o que define os campos customizáveis que serão inseridos no orderForm da loja.

Ao fazermos a chamada passando o body do exemplo acima, serão criadas duas apps, que funcionam como grupos de campos: uma de ID `profile` e outra de ID `endereco`. 

Na app __profile__, teremos dois campos:
- `idade`
- `sexo`

Na app __endereco__, teremos um campo:
- `telefone2`

## Definir o valor de campos customizáveis

Depois que os campos estiverem criados com a chamada explicada acima, você pode enviar valores para eles também por API.

Para isso, use a chamada abaixo:

&bull; URL: `https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orderForm/{{orderFormId}}/customData/{{appName}}/{{appFieldName}}`

&bull; Método: `PUT`

Veja abaixo um exemplo do JSON que devemos passar no body dessa chamada.

```json
{
  "expectedOrderFormSections":
  [
    "items",
    "gifts",
    "totalizers",
    "clientProfileData",
    "shippingData",
    "paymentData",
    "sellers",
    "messages",
    "marketingData",
    "clientPreferencesData",
    "storePreferencesData",
    "customData"
  ],
  "value":{{appFieldValue}}
}
```

Na URL da chamada, você deve passar os seguintes parâmetros:
- `{{orderFormId}}`: ID do orderForm para onde os valores serão enviados.
- `{{appName}}`: nome da app (ou seja, do grupo de campos definido na chamada anterior) para onde os valores serão enviados.
- `{{appFieldName}}`: nome do campo para o qual será definido o valor. No exemplo dos campos criados na chamada anterior, poderia ser `idade`, `sexo` ou `telefone2`.

No body, deve ser passado o `{{appFieldValue}}`, que é o valor a ser enviado.
