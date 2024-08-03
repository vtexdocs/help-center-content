---
title: 'Como é a estrutura de App em JS do TaxHub'
id: 6hY8wkf8LCCS4o0KAaKUu0
status: DRAFT
createdAt: 2017-07-26T17:04:34.946Z
updatedAt: 2020-05-25T19:10:26.819Z
publishedAt: 
firstPublishedAt: 2017-07-26T17:52:25.165Z
contentType: tutorial
productTeam: Others
author: 2Y2pnNkWfSoUMMYcwemq4A
slug: como-e-a-estrutura-de-app-em-js-do-taxhub
locale: pt
legacySlug: como-e-a-estrutura-de-app-em-js-do-taxhub
subcategory: 
---

__Introdução__

Este documento tem a finalidade de instruir e proporcionar exemplos sobre o APP necessário para desenvolver e instalar em TaxHub, com o objetivo de que no checkout se possa ler e aplicar os impostos fornecidos e calculados no próprio APP.

Alguns pontos importantes antes de iniciar:

- Configurar os endereços nas docas. Eles serão utilizados para o cálculo do originShipping
- Quando o app estiver instalado no TaxHub do módulo da VTEX, o Checkout sempre vai chamá-lo em toda e qualquer sessão de compra para os cálculos de impostos, especificamente o arquivo JURISDICTION.
- Uma vez que o Checkout chama o TaxHub, este gera a comunicação entre o App (node.js instalada no TaxHub) e o Checkout. 
- O TaxHub na sessão de compra, realizará os requests e enviará os dados da compra para que o App possa se comunicar com o ERP ou Middleware;
- Com toda a informação que obtiver o App por meio dos requests, serão montados os JS que servirão para que o próprio App consiga a comunicação nos passos seguintes;
- Todos os responses são esperados como object pelo TaxHub, e se deve trabalhar exatamente com o que o App necessita de informação, pois os requests sempre seguintes trabalharão com base no que é devolvido. Caso se opte por devolver tudo vazio, o TaxHub vai aceitá-lo da mesma forma, mas devolverá tudo vazio nos seguintes passos.

Você deverá criar um arquivo jurisdiction.zip. a estrutura do zip segue o mesmo padrão e os arquivos serão chamados na ordem indicada abaixo para o cálculo. 

Defina o nome do arquivo inicial, com o mesmo país da loja. 
Exemplo: argentina.js ou mexico.js, o arquivo .js da pasta principal e a pasta tem que ter o mesmo nome. A pasta IVA pode ter qualquer nome.

A ordem de chamada que deve seguir também para o desenvolvimento:
![TaxHubTree](https://images.contentful.com/alneenqid6w5/5hPFG8m6pUCMuIg8e2Iymm/957b9c89844099db690e82abe53c2b7a/TxHubTree.jpg)

Depois de fazer as alterações, é necessário fazer upload do arquivo à VTEX no formato .zip sempre com a mesma estrutura de pastas.

Você terá o collection no Postman para validar o funcionamento dos javascripts. https://www.getpostman.com/collections/f29298ccf69003fd7210

No arquivo customerCode.js, está o parâmetro de entrada orderFormId. Com isso, terá acesso completo ao orderForm do carrinho para usar os dados. No chamado, é importante enviar um parâmetro adicional para não ficar em looping entre o checkout e taxhub.
/api/checkout/pub/orderForm/{orderFormId}?disableAutoCompletion=true

__Folders & JavaScripts Structure__

Levels structure
```
JURISDICTION/
     {{COUNTRY_NAME}}.JS
        {{COUNTRY_NAME}}/
        FISCALREGION.JS
        CUSTOMERCODE.JS
        ITEMCODE.JS
     {{TAX_NAME}}/
        ALIQUOT.JS
        TAXVALUE.JS
```

__Observações__

a)	A estrutura anterior é a mínima requerida para que o APP trabalhe nas sessões do checkout.
b)	O folder e o JS com a tag {{COUNTRYNAME}} necessita ser chamado exatamente com o nome do país para o qual será calculado o imposto
c)	O folder com o tag {{TAX_NAME}}, recomenda-se usar o nome do imposto que será mostrado no checkout mas é possível atribuir qualquer nome.
d)	Se você necessita calcular mais de um imposto no checkout, pode criar um segundo folder {{TAX_NAME}} com o nome do segundo imposto (e incluir os JS necessários).
e)	O APP será executado por cada elemento distinto (não pela quantidade dos elementos) no carro.


__JavaScript’s Protocol__
❖	Occupation Area.JS
Este javascript receberá um request com o endereço de origem inicial localizado nas Docas (módulo de Logística VTEX) e também o endereço do cliente. O próprio aplicativo identifica e responde a TaxHub sobre se é possível comprar ou não.

A resposta do que o aplicativo precisa fazer se dá em uma estrutura booleana. Significa, só um “verdadeiro” ou “falso” baseado na resposta do servidor, para permitir ou não continuar a compra.

Request:
```
{ 
“origin”: {
“country”: “Argentina”,
“state”: “Buenos Aires”,
“city”: “Ciudad Autónoma de Buenos Aires”, “neighborhood”: “Palermo”
}, 
“destination”: {						
“country”: “Argentina”, 
“state”: “Mendoza”,
“city”: “Mendoza”, 
“neighborhood”: “Villa Nueva”
}
 }
 ```

Response: boolean
Example:
```
{
“true”						
}
```

❖	FISCALREGION.JS
Uma vez neste passo, o APP receberá um request de TaxHub com o endereço do cliente, onde o aplicativo, por sua vez, pode comprovar diretamente com o servidor sobre a condição de impostos para esta região ou, por outro lado, o próprio App pode ter configurado em sua própria estrutura o manejo de impostos a calcular pela região fiscal.

Recorda-se que todas as respostas realizadas pelo aplicativo sejam utilizadas e devolvidas na seguinte request de TaxHub.
				
Request:
```
{
“country”: “Argentina”, 
“state”: “BA”,
“city”: “Buenos Aires”, 
“neighborhood”: “Palermo”						
}
```

Response: object 

Example:
```						
{
“region”: “A”,
“taxCompliance”: “true”					
}
```

❖	CUSTOMERCODE.JS
Aqui, o aplicativo receberá uma solicitação de TaxHub com o cliente EMAIL e o accountName (nome da loja no sistema VTEX) além de ser possível a conexão ao Master Data e trazer informações do Profile System (se for necessário).

Com esta informação recebida pelo App, esses dados serão enviados ao servidor externo para processar e devolver a informação que for necessária ter no Checkout, com o objetivo de calcular os impostos para esse cliente em questão.

Request:		
```
{
“account”: “zonaprop”,
“clientEmail”: “jose.gabriel@vtex.com.br”						
}
```

Response: object 

Example:				
```
{
“dni”: “31009878”
}
```

❖	ITEMCODE.JS
Uma vez neste passo, o aplicativo receberá uma solicitação de TaxHub com o ID SKU e o accountName (nome da loja no sistema VTEX). Também nesta seção, poderemos trazer informação do produto (se for necessário).

Com esta informação recebida pelo App, esses dados serão enviados ao servidor externo para processar e devolver a informação que for necessária ter no Checkout, com o objetivo de calcular os impostos para este cliente em questão.
				
Request:					
```
{
“account”: “zonaprop”, 
“itemId”: “408”						
}
```
						
Response: object 
Example:					
```
{
“refId”: “45FSA3A”, 
“imported”: false					
}
```

❖	ALIQUOT.JS
Neste passo, o aplicativo receberá uma solicitação de TaxHub com toda a lógica previamente formada pelas respostas do aplicativo.

Com estes dados finais, o aplicativo terá o necessário para calcular os impostos para a compra. Onde a resposta aqui será exatamente a fórmula para calcular o valor do imposto e aplicá-lo no carrinho.
Preste atenção aos seguintes campos:

- __”originFiscalRegion”__: Endereço estabelecido nas Docas (requerido nas lojas que utilizam o aplicativo TaxHub);
- __”destinationFiscalRegion”:__ Endereço do cliente preenchido no momento da compra.
- __”endpoint”:__ Servidor configurado inicialmente na interface backend de Tax Hub. É um campo opcional
- __”authorizationHeader”:__ Key de autenticação do servidor “endpoint”. É um campo opcional					


Request:					
```
{
	“originFiscalRegion”: object,		              //Objeto Dock Address
	“destinationFiscalRegion”: object,            //Objeto Final client address
	“customerCode”: object,		                    //Objeto CLIENTECODE.JS
	“itemCode”: object,			                      //Objeto ITEMCODE.JS
	“endpoint”: “http://www.server.com/taxes”,    //Optional (set on TaxHub backoffice)
	“authorizationHeader”: “GDFKFDJDKDLKJLKFDJLKFDJFL” //Optional
}
```
						
Response: object 
Example:
```
{
“mva”: 0.6543,					
“destination”: 0.34,
“origin”: 0.11,
“expression” : “((((event.sellingPrice + ((event.sellingPrice + event.shippingPrice) * event.aliquot.mva)) * event.aliquot.destination) - (event.sellingPrice * event.aliquot.origin)) * 1.000000)”
}
```

❖	TAXVALUE.JS
Uma vez neste passo, passará de novo a fórmula que foi devolvida no ALIQUOT.JS para fazer o cálculo devido do imposto (a fórmula devolvida em ALIQUOT.JS não tem um padrão, a ideia é usar exatamente o que o servidor (externo) necessita como base para o cálculo).

Quando o cálculo for bem-sucedido, devolverá exatamente o nome do imposto e o valor respectivo que o representa nessa compra para o elemento.					
Request:
```		
{
“aliquot”: object, //Objeto aliquot
“itemPrice”: 79.00,
“shippingPrice”: 5.00, 
“sellingPrice”: 70.00						
}
```

Response: TaxValue[] 
Example:			
```
[{
“name”: “IVA”, 
“value”: 12.90						
}]
```

__JavaScript Archive__
*__Recommended structure__*

```
(function () { 
‘use strict’;						
var requestPromise = require(“request-promise”);
exports.run = function (event, context) {
try {
let objectResponse = {}; 
context.done(null, objectResponse);
} catch (e) 
{ context.done(e, null);					
}; 
};						
}).call(this);
```

__Observações __
1. __“event”__:  Objeto de entrada que contém as propriedades indicadas anteriormente.
2. __“context”__: Função de devolução de chamada. No primeiro parâmetro deve vir o erro, se existir. No segundo parâmetro, o objeto de resposta.
3. __Importing__: Libraries Só as bibliotecas feitas pela VTEX.
