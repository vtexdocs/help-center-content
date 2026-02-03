---
title: 'Exportar chaves de API'
id: 1p4eYJWD26gOdicUdiiGC5
status: PUBLISHED
createdAt: 2025-08-12T19:38:30.979Z
updatedAt: 2025-08-13T14:18:34.326Z
publishedAt: 2025-08-13T14:18:34.326Z
firstPublishedAt: 2025-08-13T14:18:34.326Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: exporting-api-keys
legacySlug: exportar-chaves-de-api
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

A página [Chaves de API](/pt/tutorial/chaves-de-api) permite exportar informações de todas as chaves geradas e as chaves externas relacionadas à conta para um arquivo `XLSX`.

## Antes de começar

Para a exportação, é obrigatório ter o perfil de acesso [User Administrator - RESTRICTED](/pt/tutorial/perfis-de-acesso-predefinidos#user-administrator-restricted) ou um perfil [customizado](/pt/tutorial/perfis-de-acesso#criando-um-perfil-de-acesso) com o recurso *View API Keys*.

## Instruções

Siga as instruções para exportar as chaves:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email.  
2. Clique em *Configurações da conta > Chaves de API*.  
3. Clique em `Exportar`. O download do arquivo será iniciado instantaneamente.  

A seguir, confira as informações disponíveis na planilha.

### Aba Geradas

| Coluna | Descrição |
| :---- | :---- |
| `id` | Código de identificação da chave de API. |
| `keyName` | Chave de API. |
| `roles` | Perfis de acesso associados à chave de API. |
| `label` | Nome da chave de API, definido durante a criação da chave. |
| `creationDate` | Data de criação da chave de API. |
| `creationDateToken` | Caso a chave tenha um único token atual associado a ela, esta data é o momento de criação deste token. Caso a chave esteja em processo de renovação, há dois tokens associados a ela. Neste caso, esta data é o momento de criação do token que está sendo substituído pelo novo (o token que existia antes de iniciar a renovação). |
| `creationDateNewToken` | Caso a chave tenha um único token associado, este campo terá valor nulo. Caso a chave esteja em processo de renovação, há dois tokens associados a ela. Neste caso, o campo representa a data de criação do novo token que substituirá o antigo (em outras palavras, a data na qual iniciou a renovação). |
| `status` | Status da chave de API, que pode ser Active (Ativo) ou Inactive (Inativo). |

### Aba Externas

| Coluna | Descrição |
| :---- | :---- |
| `id` | Código de identificação da chave de API. |
| `keyName` | Chave de API. |
| `roles` | Perfis de acesso associados à chave de API. |
| `account` | Nome da conta terceira proprietária da chave. |
| `addedDate` | Data de adição da chave de API de terceiros. |
| `status` | Status da chave de API, que pode ser Active (Ativo) ou Inactive (Inativo). |

## Saiba mais

* [Chaves de API](/pt/tutorial/chaves-de-api)  
* [Configurar alerta para renovar tokens de API](/pt/tutorial/configurar-alerta-para-renovar-tokens-de-api)  
* [Chaves geradas](/pt/tutorial/chaves-geradas)  
* [Chaves externas](/pt/tutorial/chaves-externas)
