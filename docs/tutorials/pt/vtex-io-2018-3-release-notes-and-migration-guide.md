---
title: 'VTEX IO 2018.3 - Guia de migração'
id: 1r3AHYTA6sccE6YGYo4UWc
status: DRAFT
createdAt: 2018-03-08T02:24:24.212Z
updatedAt: 2020-03-13T21:24:59.954Z
publishedAt: 
firstPublishedAt: 2018-03-08T04:14:58.939Z
contentType: tutorial
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: vtex-io-2018-3-guia-de-migracao
legacySlug: vtex-io-2018-3-guia-de-migracao
subcategory: 5eBwrcLFVSwYGSOQqGKQYW
---

As atualizações lançadas pela área de Developer Experience em março de 2018 incluem diversos recursos que facilitam ainda mais o trabalho com o VTEX IO.

# Builders atualizados

Quase todos os builders foram atualizados neste ciclo de lançamento. Estes são os builders suportados a partir desta publicação, usando o `vtex.builder-hub@0.15.2`:

- pages: "0.x"
- react: "2.x"
- graphql: "1.x"
- node: "3.x"

Vamos dar uma olhada no que há de novo em cada um deles e em como migrar suas apps.

## Pages 0.x e React 2.x

O React 2.x é uma atualização incremental do 1.x que adiciona suporte para o **Render 7**. Então se você já estiver usando-o, basta alterar o builder `react` para `2.x` em seu arquivo manifest e linkar sua app para garantir que tudo funcione corretamente.

Se você está vindo do `0.x`, pode usar um novo comando no seu toolbelt: `vtex port react`. Isso ajudará a converter seu aplicativo `render/` para a nova estrutura usando as pastas `react/` e `pages/`.

O primeiro lançamento do nosso builder `pages` marca o início do nosso novo CMS, o **VTEX Pages**, que está sendo desenvolvido em nosso escritório no Rio de Janeiro!

O VTEX Pages contará com uma interface WYSIWYG completamente nova para editar seus componentes diretamente em sua loja e um administrador completo para criar páginas personalizadas. Por enquanto, você pode definir páginas para sua loja diretamente em um aplicativo criando um arquivo `pages/pages.json`.

Veja um exemplo abaixo:

```
// pages/pages.json
{
  "pages": {
    "hello-react": {
      "path": "/hello"
    }
  },
  "extensions": {
    "hello-react": {
      "component": "index"
    }
  }
}
```

Este arquivo de páginas declara uma página com o nome `hello-react` na rota pública `/hello` e então configura o ponto de extensão `hello-react` com um componente react definido no arquivo `react/index.js` do mesmo aplicativo. Agora, ao visitar `{{loja}}.myvtex.com/hello`, o componente `index.js` será renderizado.

## Importante! Instalar os aplicativos necessários para o Render 7

O Render 7 eliminou o suporte para as rotas `/_v/assets/` e `/_v/sse/`, que agora são implementadas por apps específicas que *precisam ser instaladas em sua conta*.

Ao atualizar sua app para `react@2.x`, você também precisará **instalar os seguintes aplicativos:**

- vtex.asset-server
- vtex.sse-server

Para instalá-los usando o VTEX Toolbelt, basta usar o comando `install`:

`vtex install vtex.sse-server vtex.asset-server`

Se sua conta tiver um `vtex.colossus-legacy-proxy@0.x` mais antigo, atualize-o para o `1.x`:

`vtex uninstall vtex.colossus-legacy-proxy@0.x && vtex install vtex.colossus-legacy-proxy@1.x`

### Exemplos

Alguns exemplos de aplicativos relevantes que usam react e pages:

- https://github.com/vtex-apps/hello-react
- https://github.com/vtex-apps/render-getting-started
- https://github.com/vtex-apps/catalogue

## GraphQL 1.x e Node 3.x

No GraphQL 0.x, seus resolvers costumavam ser definidos em um arquivo TypeScript em `graphql/index.ts`. Entretanto, como o `dotnet-builder` está quase pronto e você poderá definir resolvers com `dotnet-core`, decidimos que não faz sentido que seu código de resolvers NodeJS GraphQL more no diretório `graphql/`.

Além disso, é um padrão comum resolvers compartilharem o código com a pasta `node`. Mas ter duas pastas diferentes com dois `package.json` diferentes tornou isso mais difícil.

A partir do GraphQL 1.x, **apenas o schema reside na pasta graphql**. Então você continuará definindo um arquivo `graphql/schema.graphql` com todas as suas Queris, Mutations e custom types.

No entanto, se você quiser usar os resolvers node automáticos, eles devem ser definidos em `node/graphql/index.ts`. Eles continuam tendo a mesma sintaxe e devem exportar um `const resolvers` com suas queries e mutations. Veja o exemplo abaixo:

```
// graphql/schema.graphql
type Query {
  myQueryDefinedInSchema: String
}

// node/graphql/index.ts
export const resolvers = {
  Query: {
    myQueryDefinedInSchema: async (root, args, ctx) => {...},
  },
}
```

Se você está vindo do 0.x, basta mover seus resolvers para `node/graphql/index.ts` e atualizar seu arquivo manifest para adicionar `node: "3.x"`.

### Exemplos

Alguns exemplos de apps relevantes com resolvers GraphQL:

- https://github.com/vtex-apps/hello-graphql
- https://github.com/vtex-apps/store-graphql
- https://github.com/vtex-apps/catalogue
