---
title: 'Trabalhando com a API REST do Master Data'
id: 3Je8Rn3TOocwGoWIaEugq2
status: DRAFT
createdAt: 2017-06-21T20:27:11.616Z
updatedAt: 2021-08-31T19:50:20.583Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:25:21.651Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: trabalhando-com-a-api-rest-do-master-data
locale: pt
legacySlug: trabalhando-com-a-api-rest-do-master-data
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

Antes de trabalhar com a API REST do Master Data, é importante que se atente ao [tipo de entidade de dados](https://help.vtex.com/pt/tutorial/configurando-uma-entidade-de-dados--4RZZJhRb5KMaQOGAOCwqok?locale=pt) em que irá trabalhar.

Se for trabalhar com uma entidade CRM, é necessário modelar e parametrizar a entidade antes do uso. No caso de trabalhar com uma entidade JSON, basta prosseguir com o envio dos dados.

Toda a API REST do Master Data está documentada [nesta coleção](https://developers.vtex.com/reference/master-data-api-v1-overview), a qual você pode facilmente importar pelo botão "Run in Postman" para tirar proveito das facilidades do Postman.

## Título para esta seção

A API REST é normalmente utilizada em dois cenários:

#### Diretamente na loja (front-end)

Se o seu cenário for para utilizar dentro da loja, fique atento às seguintes observações:

- Utilize o próprio host (domínio) da loja, optando por caminhos relativos nos scripts;
- Configure quais informações deverão ser públicas na Entidade de Dados;
- Não crie loops de consultas (a loja poderá ser afetada com Throttling);
- **Crítico:** Nunca adicione via JS qualquer tipo de chave de autenticação (x-vtex-api-appKey ou x-vtex-api-appToken);

#### Integração e aplicações externas

Se o seu cenário for para trabalhar com uma integração externa:

- Utilize o host `api.vtex.com`;
- Use as chaves de autenticação (x-vtex-api-appKey ou x-vtex-api-appToken);

## Atributos frequentes

No decorrer da documentação você encontrará alguns atributos bastante utilizados:

- accountName: nome da conta VTEX
- acronym: sigla ou nome da Entidade de Dados
- id: identificador de um documento

Note que o **acronym** de uma "entidade CRM" terá somente duas letras, seguindo o configurado em sua entidade de dados. Já nas entidades JSON o **acronym** não possui restrições, é criado conforme há o envio de documentos para ele, e recomendamos usar um nome semântico. 

## Cabeçalho das requisições

Todas as requisições contam com quatro principais headers:

- Content-Type: application/json
- x-vtex-api-appKey: chave do usuário ou e-mail
- x-vtex-api-appToken: token do usuário ou senha
- Accept: application/vnd.vtex.ds.v10+json

O __Content-type__ é fixo, e referente ao tipo de dados trafegado - que é sempre JSON.

O __appKey__ e __appToken__ são as credenciais de autenticação, e devem ser dispensados para ler rotas com dados públicos. São dados extremamente sensíveis, que nunca devem ser expostos (destaque para Javascripts no frontend). Para obtê-los, consulte o artigo [Authentication](https://developers.vtex.com/docs/getting-started-authentication) no Developer Portal para saber onde encontrar a AppKey e o AppToken de sua loja.

O __Accept__ determina o schema que deve ser usado para validar os dados enviados e recebidos. Em "entidades CMS" deve ser usado sempre o valor `application/vnd.vtex.ds.v10+json`, já em entidades JSON deve seguir o formato `application/vnd.vtex.ds.NOMEDOSCHEMA.v10+json`, conforme o nome do seu schema _(texto exemplo, não deve ser assim :P)_.

## APIs

_Aqui, direcionar o usuário para as documentações com detalhes sobre as rotas da API. Decidir se vai separar em "enviando dados" e "recuperando dados" ou outro formato._

_Na API de Search, lembrar de evoluir o Postman quanto aos dados aninhados._
