---
title: Como criar um app multilíngue
id: 7kxGvpbS8MkaMAS4UqIoKs
status: DRAFT
createdAt: 2018-03-06T15:12:14.213Z
updatedAt: 2020-03-13T21:24:57.355Z
publishedAt: 
firstPublishedAt: 2018-03-06T15:46:31.018Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: como-construir-um-app-multilingue
legacySlug: como-construir-um-app-multilingue
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Todos os aplicativos VTEX devem estar preparados para suportar múltiplos idiomas. Isso quer dizer que todas as mensagens que aparecerão nas telas, incluindo mensagens de erro, devem ser desenvolvidas de acordo com a funcinalidade de localização do VTEX IO, ou seja, devem estar em um arquivo separado. 

Para aproveitar o ecossistema de clientes VTEX em sua totalidade, recomendamos desenvolver qualquer app em inglês, português e espanhol. Para utilizar esse recurso, siga as instruções abaixo:

1. Na pasta `/react` crie uma pasta chamada `/locales` (se já não existir). Essa pasta deve conter os arquivos com as strings de mensagens utilizadas pelo código React

2. Crie um arquivo nomeado conforme o código IETF de cada idioma a ser utilizado. Por exemplo: `pt-BR.json`, `en-US.json`, `es-ES.json`, etc. Esse arquivo deve apenas conter um objeto anônimo com pares chave-valor conforme o exemplo abaixo:


``` 
{ 
"getting-started.greeting": "Bem-vindo ao seu primeiro App VTEX!",
...
}
```

A chave é o nome universal da sua mensagem, que pode ser referenciada pelo código utilizando o tag `FormattedMessage`:

```
...
<h1>
  <FormattedMessage id="getting-started.greeting"/>
</h1>
...
```

O App vai assumir automaticamente o idioma da loja onde ele está executando e chamar as mensagens correspondentes.

Caso queira ver um código executando dessa forma, o App de exemplo [Render Getting Started](https://github.com/vtex-apps/render-getting-started) demonstra esse recurso em ação.
