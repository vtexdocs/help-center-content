---
title: 'Call Webhook: Como fazer chamadas para sistemas externos'
id: 2KRA2c41CskapG2IrqMhnO
status: PUBLISHED
createdAt: 2025-09-17T14:00:42.361Z
updatedAt: 2025-10-03T14:20:03.772Z
publishedAt: 2025-10-03T14:20:03.772Z
firstPublishedAt: 2025-10-03T14:20:03.772Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: call-webhook-making-requests-to-external-services
legacySlug: call-webhook-como-fazer-chamadas-para-sistemas-externos
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### O que é uma API?
A sigla **API** corresponde às palavras em inglês **Application Programming **Interface**. No português “Interface de Programação de Aplicações”. Elas são uma forma de **integrar sistemas,** possibilitando benefícios como a segurança dos dados e facilidade no intercâmbio entre informações.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/call-webhook-como-fazer-chamadas-para-sistemas-externos_1.png)

Atualmente, a capacidade de poder se conectar e integrar com outros sistemas é uma funcionalidade essencial para a maioria das soluções hoje em dia. Por isso, temos uma carta de ação para utilizar nos fluxos justamente para essa função: _**Call Webhook**_

### Call Webhook

A carta de **_Call Webhook_** é a responsável pela conexão entre a Weni Plataforma e outros sistemas externos, abaixo, temos um pouco sobre a anatomia dela:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/call-webhook-como-fazer-chamadas-para-sistemas-externos_2.png)

  1. Método da requisição: Onde você define qual vai ser o método para a sua requisição de API (GET, POST, PUT ou DELETE);
  2. URL da requisição: Onde você coloca a URL da requisição para a API;
  3. Cabeçalho da requisição: Onde você coloca o cabeçalho da requisição junto com informações como tokens de autorização e tipos de conteúdo;
  4. Corpo da requisição: Onde você adiciona um corpo para sua requisição (usado para POST e PUT);

### Como formatar o corpo da requisição corretamente
Normalmente, para o corpo de requisições POST e PUT utilizamos a notação JSON para enviar as informações solicitadas pela API. Abaixo, segue o exemplo de um corpo em JSON:
`{ ""platform"":""weni"", ""author"":""john"" }`

Como podemos reproduzir essa notação utilizando a carta _Call Webhook_? Na plataforma, utilizamos as funções `@json e @object` para esta construção, sendo a primeira para sinalizar qual notação iremos traduzir os valores, e a segunda para sinalizar o começo e fim das nossas chaves. Traduzindo o exemplo acima para a notação utilizada na plataforma, temos:
`@(json(object(""platform"",""weni"",""author"",""john"")))`

Caso você queira usar alguma variável como, por exemplo, `@contact.name` para o campo ""author"" do nosso exemplo, temos:
`@(json(object(""platform"",""weni"",""author"",contact.name)))`

O corpo da requisição aceita todas as variáveis e expressões suportadas na plataforma.

### Navegando em um Webhook

Após fazer a requisição você pode utilizar algumas expressões para consultar informações do retorno.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/call-webhook-como-fazer-chamadas-para-sistemas-externos_3.png)

##### **`@results`**
`@results.[nome do result do card Chamar Webhook]`: para consultar o status da requisição, como por exemplo: 200, 400, 500.

##### **`@webhook`**
Essa expressão é usada para resgatar valores retornados da última chamada webhook feita no fluxo, por exemplo:
  * `@webhook` O valor dessa variável é todo o retorno da última requisição feita.
  * `@webhook.results.cliente:`Nome do cliente retornado da API, caso retorne somente 1 objeto
  * `@webhook.results.0.cliente:`Nome do cliente retornado da API. Caso retorne em array é necessário dizer a posição do array que deseja na expressão, usando 0, 1, 2 e assim por diante.

Para armazenar os valores em outras variáveis você pode salvar como [campo de contato](https://help.vtex.com/pt/docs/tutorials/campos-de-contato) ou [resultado do fluxo](https://help.vtex.com/pt/docs/tutorials/glossario-de-variaveis).
