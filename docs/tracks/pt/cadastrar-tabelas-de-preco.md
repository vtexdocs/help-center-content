---
title: Cadastrar Tabelas de Preços
id: 2WQ3pVYfQpXkJnHr7VTFBv
status: PUBLISHED
createdAt: 2019-07-04T13:52:23.343Z
updatedAt: 2023-03-29T18:54:37.108Z
publishedAt: 2023-03-29T18:54:37.108Z
firstPublishedAt: 2019-07-17T19:40:54.612Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: cadastrar-tabelas-de-precos
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

Há duas formas de cadastrar as tabelas de preço:

- pelo Admin 
- por API REST

Siga o passo a passo abaixo para cadastrar as tabelas de preço da sua loja: 

## Admin

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Clique no botão **Tabelas de preços** na parte superior da tela.
3. Clique em `+ Criar nova tabela de preços`. Uma *barra lateral* será aberta.
4. Digite o nome da tabela de preço que deseja criar.
5. Clique em **Criar tabela de preço**.

## API REST

<div class="alert alert-warning">
As autenticações para as chamadas de API REST do módulo de Preços devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">como gerar um Appkey e um AppToken para autenticar suas integrações</a>
</div>

Para cadastrar a **tabela de preço**, você precisa enviar um __PUT__ para o seguinte endpoint:

`https://api.vtex.com/{{account}}/pricing/tables/{{priceTableName}}`

Ao passar o valor da `{{priceTableName}}` no endpoint, uma nova tabela de preços será criada.

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| priceTableName | string | Nome da tabela de preço a ser criada |

- Abaixo, temos um exemplo de Header a ser passado no request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |
