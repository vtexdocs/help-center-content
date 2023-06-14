---
title: 'Não é possível filtrar por campo de texto'
id: 3dsPrybpGgmwiuyAcq0Gl2
status: DRAFT
createdAt: 2019-08-05T20:19:42.133Z
updatedAt: 2022-02-14T22:43:11.713Z
publishedAt: 
firstPublishedAt: 2019-08-05T21:36:56.236Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slug: nao-e-possivel-filtrar-por-campo-de-texto
kiStatus: Open
internalReference: 
---

## Sumário

Hoje, é possível configurar um campo de texto como __Público para Filtrar__. Contudo, por mais que haja essa alternativa, caso o usuário faça essa edição, o sistema exibirá a mensagem de erro `Cannot filter by private fields`. 


## Simulação

- Visite o Dynamic Storage da sua conta em `https://{account}.ds.vtexcrm.com.br`;

- Acesse a aba `Entidade de dados`, escolha uma entidade e configure um campo de texto de modo que este fique público para ser filtrado.

Ao consultar esse campo por meio da API, você sempre receberá uma mensagem de erro.


## Workaround

Você pode configurar o campo para funcionar como um Varchar 750. Isso permitirá que filtros sejam utilizados normalmente.

