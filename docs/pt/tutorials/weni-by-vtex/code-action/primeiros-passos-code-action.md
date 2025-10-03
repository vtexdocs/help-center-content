---
title: 'Primeiros passos Code Action'
id: 2JLD82mkwWbpwkowe790eh
status: PUBLISHED
createdAt: 2025-09-16T14:54:03.016Z
updatedAt: 2025-10-03T14:24:42.120Z
publishedAt: 2025-10-03T14:24:42.120Z
firstPublishedAt: 2025-10-03T14:24:42.120Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: code-action-first-steps
legacySlug: primeiros-passos-code-action
locale: pt
subcategoryId: 3q6HjVqNcRNNZttPAV93wi
---

### O que é o Code Action?

 Code action é uma ferramente que possibilita a criação de um microsserviço em Python que pode ser usado diretamente na plataforma ou em um sistema externo.

### Em quais casos utilizar?

O code action pode ser utilizado em diversos cenários, um deles seria o recebimento de webhook. Caso você precise receber algum tipo de webhook para iniciar determinada ação.

## Primeiros passos

Para utilizar esse serviço, é necessário que você possua alguma plataforma para requisição de APIs, como o [Postman](https://www.postman.com).

Com o programa instalado, você deve baixar essa [collection](https://files.helpdocs.io/fjqoxc429v/other/1752841354595/code-acti.json) e importar para dentro do seu Postman.

## Guia de uso

Para continuar neste módulo, você deve passar pela etapa anterior clicando no botão abaixo[Primeiros passos](/l/pt/code-action/primeiros-passos)

#### Autenticação

* Para que seja possível gerar esse token, você deverá fazer uma requisição para a API abaixo, passando seu **login**, **senha** utilizados na plataforma. **E caso possua autenticação de 2 fatores**, você deverá preencher no campo de totp o código de 2 fatores.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_1.png)

 Esse código tem validade de até 12h deverá ser utilizado em algumas das próximas APIs.

#### Como criar um Code Action

Você pode ter dois tipos de Code Actions, são eles: JSON e HTML.

Caso opte por JSON, o retorno do seu código, será específico para retornos do tipo JSON

Caso opte por HTML, o retorno do seu código, estará preparado para retornar um HTML

Para realizar a criação do tipo JSON, você poderá encontrar uma requisição chamada **create code action \[python] -> json,** como segue na imagem abaixo.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_3.png)

Para criar um código, como mostra na imagem acima, você precisará de alguns parâmetros como: **project\_uuid**, **code\_name** e **Bearer Token.**

* **project\_uuid**
	+ Essa informação você conseguirá pegar na URL do seu projeto na [Weni Plataforma](https://dash.weni.ai), como segue na imagem abaixo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_4.png)

* **code\_name**
	+ Essa informação deverá ser preenchido com o nome da sua preferência, de acordo com que for mais legível e didático.

Após possuir essas informações, será importante que você crie seu código seguindo o padrão que você poderá ver em [Padrão de código e exemplos](/l/pt/code-action/padrao-e-exemplos).

Logo em seguida, você poderá ir para o body, como segue na imagem abaixo e executar a requisição.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_5.png)

Coloque seu código dentro da parte de **raw** e o formato deverá ser **Text**.Após realizar a requisição, você deverá receber um retorno similar a este:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_6.png)

Esse ID será o identificador do seu código, salve-o em algum lugar, pois ele é importante para executar seu código.

### Execução do código

Para realizar a execução do código, será necessário pegar o ID do código que você criou na etapa anterior. Após isso você fará uma requisição passando o ID do seu código, como está na imagem abaixo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_7.png)

Não é necessário passar as credenciais na request acima.O seu código poderá receber requests de qualquer tipo, como: GET, POST, PUT, DELETE... Seu código deverá estar adaptado para receber a request esperada. Para dúvidas relacionadas a como pegar dados da Query ou Body, você poderá visitar [Padrão de código e exemplos](/l/pt/code-action/padr-o-de-c-digo-e-exemplos).

## Padrão de código e exemplos

### Códigos exemplares e funções

Para que seja utilizado o Code Actions, algumas regras precisam ser seguidas. Entre elas, seria o formato do código. Abaixo segue um exemplo:

```
from requests import request 
import json 

def Run(engine): 
 bd = engine.body 
 bd_dict = json.loads(bd) 

 if ""hookConfig"" in bd_dict: 
 engine.result.set({""Result"": ""Ok""}, status_code=200, content_type=""json"") 
 return None 
 else: 
 order_id = bd_dict[""OrderId""] 
 order_status = bd_dict[""State""] 
 order_domain = bd_dict[""Domain""] 

 token_flow = ""Token 20a75d5a-d35c-43c8-b435-449927ed1e4c"" 

 vtex_json = get_order_data(order_id, token_flow) 
 uuid = create_contact(vtex_json, token_flow, order_status=order_status, order_domain=order_domain) 

 engine.result.set(response, status_code=status_code, content_type=""json"") 
 return None 

def get_order_data(order_id: str, token): 
 url_api_vtex = https://weni.myvtex.com 
 vtex_app_token = ""20a75d5a-d35c-43c8-b435-449927ed1e4c"" 
 vtex_app_key = ""20a75d5a-d35c-43c8-b435-449927ed1e4c"" 

 url = f'{url_api_vtex}/api/oms/pvt/orders/{order_id}' 

 headers = { 
 'X-VTEX-API-AppToken': f'{vtex_app_token}', 
 'X-VTEX-API-AppKey': f'{vtex_app_key}' 
 } 

 response = request(""GET"", url=url, headers=headers) 
 response = response.json() 

 return response 

def create_contact(vtex_data, token, order_status, order_domain): 
 phone = vtex_data['clientProfileData'].get(""phone"").replace(""+"", """") 
 name = f'{vtex_data[""clientProfileData""].get(""firstName"")} 
 shipping_estimated_date = vtex_data[""shippingData""][""logisticsInfo""][0][""shippingEstimateDate""] 

 url = f""https://flows.weni.ai/api/v2/contacts.json?urn=whatsapp:{phone}"" 

 payload = json.dumps({ 
 ""name"": f""{name}"", 
 ""fields"": { 
 ""phone"": phone, 
 ""shippingestimatedate"": shipping_estimated_date, 
 } 
 }) 
 headers = { 
 'Authorization': token, 
 'Content-Type': 'application/json' 
 } 

 response = request(""POST"", url=url, headers=headers, data=payload) 
 response = response.json() 

 uuid = response['uuid'] 

 return uuid
```
Esse código tem a função de receber um Webhook da VTEX e conseguir consultar diretamente a API de Orders da VTEX e criar um contato na Weni Plataforma. Para isso ele segue algumas premissas.

#### Regras

* Esse código é uma lambda, então para que haja o funcionamento adequado, sempre será buscado a função **Run**. Sempre utilize e coloque a função **Run** em eu código.

* Para que consiga utilizar algumas funcionalidades, é necessário que você solicite uma função chamada **engine**, entro do seu **Run.** Exemplo:
	+ ```
	def Run(engine):
	```

* Sempre que for necessário acessar informações presentes no **body** da requisição recebida, elas estarão disponíveis em `engine.body`. No entanto, esse conteúdo **não estará no formato JSON por padrão**. Para convertê-lo em um dicionário Python, utilize a função `json.loads()`. Após essa conversão, os dados estarão prontos para serem manipulados normalmente no formato de objeto JSON.
	+ No código acima, o JSON esperado é algo parecido com este
	+ ```
	{ 
 ""Domain"": ""Marketplace"", 
 ""OrderId"": ""v40484048naf-01"", 
 ""State"": ""payment-approved"", 
 ""LastChange"": ""2019-07-29T23:17:30.0617185Z"", 
 ""Origin"": { 
 ""Account"": ""accountABC"", 
 ""Key"": ""vtexappkey-keyEDF"" 
 } 
	}
	```
* Com isso, é possível pegar o OrderId utilizando as seguintes linhas
	+ ```
	bd = engine.body 
	bd_dict = json.loads(bd) 
	order_id = bd_dict.get(""OrderId"")
	```

* Caso a informação esteja vindo através da Query da requisição, você deverá utilizar `engine.params.get(“”)`.
* Caso seja necessário pegar os headers da requisição que está sendo recebida, poderá ser utilizado o seguinte comando

```
custom_header = engine.header.get('Custom-Header') 
print(custom_header) -> ""custom_header_value""

```
* Para encerrar a execução do seu Code Action, será necessário chamar uma outra função que deverá ser: `engine.result.set(response, status_code=status_code, content_type=""json"")` seguida de um `return None`
	+ O primeiro parâmetro que está com o valor **response,** será a resposta retornada pelo seu código quando o mesmo for requisitado.
	+ O status\_code, será responsável por você afirmar para o usuário qual o se seu código deu sucesso (Sendo um status\_code 200, 201\...) ou se seu código deu erro (400, 403, 404\...)
* Caso você precise que seu código exiba algum tipo de registro durante o processamento, você pode utilizar a expressão: `engine.log.debug(”valor a ser exibido”)` , para mais informações de como visualizar essas logs acesse [Logs e Debug](/l/pt/code-action/logs-e-debug).

## Logs e Debug
### Logs de execução

Durante o processo de execução de código, como mencionado em [Padrão de código e exemplos](/l/pt/code-action/padr-o-de-c-digo-e-exemplos), é possível que seja exibido logs de execução.

Toda vez que o código é executado, é gerada uma execução de código. Para que você consiga visualizar essa execução, você poderá realizar a request abaixo passando o **ID** do seu código.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_8.png)

Após fazer essa requisição, passando o ID do Código, você irá receber algumas informações como: o **resultado da execução**, parâmetro recebido na **query**, o **body** da request e o ID da execução.

É possível realizar um filtro de tempo utilizando os parâmetros **after** e **before**, com eles você pegará apenas as execução de uma janela de tempo específica, eles esperam uma data/hora no padrão ISO 8601\. Segue um exemplo

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_9.png)

Também é possível utilizar o parâmetro **page**, para conseguir paginar melhor as buscas.

### Debugs

Com o ID da execução retornado na request acima, você conseguirá pegar mais detalhes sobre uma determinada execução, como os debugs.

Você deverá fazer uma nova request para a API abaixo, passando o ID da execução.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/code-action/primeiros-passos-code-action_10.png)

Você poderá usar o parâmetro **page**, similar na request anterior.Nese retorno acima, você terá o **content** e ele conterá o valor retornado no engine.log.debug, conforme ensinado em [Padrão de código e exemplos](/l/pt/code-action/padr-o-de-c-digo-e-exemplos).
