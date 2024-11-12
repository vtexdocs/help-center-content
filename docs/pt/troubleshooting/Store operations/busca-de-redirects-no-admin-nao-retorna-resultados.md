---
title: 'Busca de redirects no Admin não retorna resultados'
id: 2u5cJhUSVM6bbEAFkgUww7
status: PUBLISHED
createdAt: 2024-07-24T13:41:02.016Z
updatedAt: 2024-11-08T19:06:54.349Z
publishedAt: 2024-11-08T19:06:54.349Z
firstPublishedAt: 2024-07-24T14:13:11.586Z
contentType: tutorial
productTeam: Others
author: 4ubliktPJIsvyl1hq91RdK
slugEN: admin-redirect-search-returns-no-results
locale: pt
legacySlug: busca-de-redirects-no-admin-nao-retorna-resultados
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Redirects

Quando o número de redirects é muito grande, a página Redirecionamentos no Admin não consegue processar a busca. Então, ao tentar realizar a busca, ela não retorna resultados. Para mais detalhes sobre a página Redirecionamentos, veja o artigo [Gerenciando redirecionamentos de URL por binding](https://help.vtex.com/pt/tutorial/gerenciando-redirecionamentos-de-url-por-binding--67GAK2TCQgjvmtPXxAqREb).

## Solução

Siga estes passos para obter os redirects:

1. Acesse a **GraphQL IDE** pela página `{nome_da_conta}.myvtex.com/admin/graphql-ide`. Substitua `{nome_da_conta}` pelo nome da sua conta VTEX.
2. Selecione o app `vtex.rewriter@x`, sendo `x` a versão do app. Por exemplo, `vtex.rewriter@1.62.0`.
3. Use a seguinte query GraphQL para listar os redirects da loja:

  ```
  query {
    redirect{
      listRedirects{
        routes{
          from
          to
          endDate
          type
          binding
        }
      }
    }
  }
  ```

  O resultado esperado aparecerá no seguinte formato:

  ```json
  {
    "data": {
      "redirect": {
        "listRedirects": {
          "routes": [
            {
              "from": "/hello",
              "to": "hola",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            },
            {
              "from": "/v/*",
              "to": "https://masrefacciones.backend.verbolia.com",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            }
          ]
        }
      }
    }
  }
  ```

4. De forma alternativa, caso o caminho do redirect que deseja encontrar seja conhecido, utilize a seguinte query GraphQL substituindo `/hello` pelo caminho do redirect desejado:

  ```
  query {
    redirect{
      get(path:"/hello"){
        from
        to
        endDate
        type
        binding
      }
    }
  }
  ```

  O resultado esperado aparecerá no seguinte formato:

  ```json
  {
    "data": {
      "redirect": {
        "get": {
          "from": "/hello",
          "to": "hola",
          "endDate": null,
          "type": "PERMANENT",
          "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
        }
      }
    }
  }
  ```

Caso os redirects não estejam como esperado, o app Rewriter permite fazer outras operações com redirects, como apagar os existentes e criar novos. Para detalhes sobre essas operações, veja o guia [Rewriter GraphQL API](https://developers.vtex.com/docs/apps/vtex.rewriter/rewriter-graphql-api).

Além disso, é possível exportar e importar redirects com arquivos `.csv` utilizando a página Redirecionamentos ou o [plugin](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins) `redirects` do VTEX IO CLI. Para detalhes sobre importar e exportar redirects, veja o artigo [Gerenciando redirecionamentos de URL por binding](https://help.vtex.com/pt/tutorial/gerenciando-redirecionamentos-de-url-por-binding--67GAK2TCQgjvmtPXxAqREb#importando-e-exportando-redirecionamentos) e a [referência de comandos do VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference#redirects-delete).
