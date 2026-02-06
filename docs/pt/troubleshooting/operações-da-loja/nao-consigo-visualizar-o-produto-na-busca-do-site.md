---
title: 'Não consigo visualizar o produto na busca do site'
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2025-08-14T22:44:25.091Z
publishedAt: 2025-08-14T22:44:25.091Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-view-the-product-in-the-search-results
legacySlug: nao-consigo-visualizar-o-produto-na-busca-do-site
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Produto
  - Busca
  - Catálogo
  - Intelligent search
  - Rewriter
---

Quando o usuário realiza a pesquisa em uma loja VTEX por meio do [Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search), é possível que o produto desejado não seja localizado, mesmo que o termo utilizado na busca esteja presente nas informações cadastradas do item.

Cenário de exemplo: ao pesquisar no site da loja por produtos que contenham o termo "Pendleton", o resultado da busca exibe 6 produtos. Entretanto, quando acessamos o Admin VTEX (__Storefront > Intelligent Search > Explicação da busca__) e digitamos o mesmo termo, são apresentados 9 produtos.

![Filter_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/nao-consigo-visualizar-o-produto-na-busca-do-site_1.png)

![Filter_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/nao-consigo-visualizar-o-produto-na-busca-do-site_2.png)

Este comportamento pode ocorrer devido aos seguintes cenários:

1. Cadastro incorreto do produto no Catálogo.

2. O termo utilizado não está presente em um dos campos pesquisáveis do produto. Saiba mais em [Configurações para o comportamento da busca](/pt/docs/tutorials/comportamento-da-busca#configuracoes-para-o-comportamento-da-busca) e [Configuração da busca](/pt/docs/tutorials/configuracao-da-busca).

3. Rota interna redirecionando o resultado da pesquisa para uma página de marca (brand).

## Soluções

Para permitir que os produtos pesquisados sejam exibidos corretamente no resultado da busca do site, considere verificar as seguintes soluções:

- [Verificar campos de cadastro do produto](#verificacao-dos-campos-de-cadastro-do-produto)
- [Modificar filtro de busca no Rewriter](#modificacao-do-filtro-da-busca-no-rewriter)
- [Remover rota interna de busca no Rewriter](#remocao-da-rota-interna-de-busca-no-rewriter)

### Verificação dos campos de cadastro do produto

A ausência do produto em um resultado de busca pode ser atribuída ao preenchimento incorreto de alguns campos durante o processo de [cadastro do produto](/pt/docs/tutorials/adicionar-ou-editar-produto). Siga os passos abaixo para verificar os campos __Marca__, __Mostrar no site__ e __Mostrar quando estiver fora de estoque__:

1. No Admin VTEX, acesse **Catálogo > Todos os produtos**.  

   > ⚠️ Lojas que utilizam a página **Produtos e SKUS (Beta)**, devem verificar os campos de cadastro do produto acessando **Catálogo > Produtos e SKUS** no Admin VTEX. Saiba mais em [Produtos e SKUS (Beta)](/pt/docs/tutorials/produtos-e-skus).

2. Localize o produto desejado e clique em **EDITAR**.  

3. No campo **Marca**, verifique se a informação está correta. Se necessário, adicione a marca correspondente ao produto. Somente é possível adicionar marcas que já tenham sido previamente [cadastradas na loja](/pt/docs/tracks/cadastrar-marcas).  

4. Na opção **Mostrar no site**, confirme se o campo está selecionado.  

5. Na opção **Mostrar quando estiver fora de estoque**, confirme se o campo está selecionado.  

6. Clique em *Salvar*.  

7. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página **Explicação da busca** do Intelligent Search (**Storefront > Intelligent Search > Explicação da busca**).  

> ⚠️ Se o termo de busca estiver presente no nome ou descrição do produto, mas o produto for de uma marca diferente do termo especificado na busca, prossiga com as demais etapas para solucionar o problema.

### Modificação do filtro da busca no Rewriter

Outro fator que pode contribuir para um produto não ser exibido em um resultado de busca é o comportamento padrão que o app [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) apresenta ao exibir produtos.

Se um termo for registrado no Rewriter como marca, o [Intelligent Search](/pt/docs/tutorials/explicacao-da-busca) receberá a informação de que ele deverá ser exibido apenas quando estiver presente em uma marca.

Para remover a restrição de busca por marca (*brand*) e permitir os produtos sejam localizados também por termos presentes no nome ou descrição (*full text*), siga os passos abaixo:

1. No Admin VTEX, em **Storefront > Intelligent Search > Explicação da busca**, insira o termo desejado e verifique quantos produtos são retornados na busca.  
2. Configure o app [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter). Caso este app ainda não esteja instalado em sua loja, acesse a [App Store](/pt/docs/tracks/hub-de-extensoes-app-store) para instalá-lo.  
3. Acesse o [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) em **Configurações da loja > Storefront > GraphQL IDE**.  
4. Em **Selecione um app**, clique sobre a opção do app Rewriter (**vtex.rewriter@{app-version-number}**).  

   ![Graphql_ide_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/nao-consigo-visualizar-o-produto-na-busca-do-site_3.png)

5. No campo de preenchimento da query (abaixo de **GraphiQL**), insira os dados da função mutação *saveInternal*:

    ```graphql
    mutation saverInternal($route: InternalInput!) {
      internal {
        save(route: $route) {
          from
          declarer
          type
          id
          query
          endDate
          binding
          resolveAs
          origin
          disableSitemapEntry
        }
      }
    }
    ```

6. Em __Query Variables__, insira as informações sobre a rota. Você deve substituir o valor *Pendleton* pelo termo desejado e o valor do campo *id* pela identificação do produto.

    ```graphql
    {
    "route": {
     "from": "/Pendleton",
     "declarer": "vtex.store@2.x",
     "type": "fullText",
     "id": "2000307",
     "query": {
         "map": "ft"
     },
       "origin": "user-canonical"
     }
    }
    ```

   > ⚠️ O valor *ft* (full text) ao invés de *b* (brand) no parâmetro *map* indica que produtos em que o termo *Pendleton* esteja presente no nome ou na descrição também passarão a ser exibidos na busca.

7. Clique na seta do GraphiQL IDE (ao lado de __GraphiQL__) para realizar a atualização do filtro de busca. O novo padrão de filtro de busca para o termo será confirmada pela exibição da seguinte mensagem no campo de resultados do GraphiQL IDE.

    ```graphql
    {
      "data": {
        "internal": {
          "save": {
            "from": "/Pendleton",
            "declarer": "vtex.store@2.x",
            "type": "fullText",
            "id": "2000307",
            "query": {
              "map": "ft"
            },
            "endDate": null,
            "binding": "0be568e5-52f5-44f0-9308-3ea701a9f847",
            "resolveAs": null,
            "origin": "user-canonical",
            "disableSitemapEntry": null
          }
        }
      }
    }
    ```

8. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página __Explicação da busca__ do Intelligent Search (__Storefront > Intelligent Search > Explicação da busca__).

> ⚠️ Se o termo de busca estiver relacionado a uma marca que não existe mais em seu site, será necessário remover a rota interna de busca dentro do app Rewriter conforme descrito na solução abaixo.

### Remoção da rota interna de busca no Rewriter

[Rotas internas](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) de busca no app [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) podem impedir que um produto seja exibido na busca caso este tenha sido cadastrado com uma marca que não esteja mais disponível na loja.

Para voltar a exibir produtos que contenham os termos pesquisados apenas no nome ou descrição, é necessário deletar a respectiva rota de busca. 

Para remover uma rota interna de busca do termo, siga os passos abaixo:

1. No Admin VTEX, acesse o [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) em **Configurações da loja > Storefront > GraphQL IDE**.

2. Em **Selecione um app**, clique sobre a opção do app Rewriter (**vtex.rewriter@{app-version-number}**).

3. No campo de preenchimento da query (abaixo de **GraphiQL**), insira os dados da função _internal get_, substituindo _pendleton_ pelo termo desejado. 

    ```graphql
    {
      internal {
        get(path: "/Pendleton") {
          from
          resolveAs
          type
        }
      }
    }
    ```

4. Clique na seta do GraphiQL IDE (ao lado de **GraphiQL**) e verifique no campo de resultados se a rota interna está descrita como _brand_.

    ```graphql
    {
      "data": {
        "internal": {
          "get": {
            "from": "/Pendleton",
            "resolveAs": "/Pendleton",
            "type": "brand"
          }
        }
      }
    }
    ```

5. No campo de preenchimento da query (abaixo de **GraphiQL**), insira os dados da função _mutation_, substituindo _pendleton_ pelo termo desejado. 

    ```graphql
    mutation {
      internal {
        delete(path: "/Pendleton"){
          type
        }
      }
    }
    ```

6. Clique na seta do GraphiQL IDE (ao lado de **GraphiQL**) para remover a rota interna de filtro por _brand_ e confirme se a informação abaixo aparece no campo de resultados do GraphiQL IDE.

    ```graphql
    {
      "data": {
        "internal": {
          "delete": {
            "type": "brand"
          }
        }
      }
    }
    ```

7. Repita os passos 3 e 4 para confirmar que a rota interna de redirecionamento do termo para brand foi deletada. Isto pode ser indicado pelo resultado _"get": null_ no campo de resultados do GraphiQL IDE.

    ```graphql
    {
      "data": {
        "internal": {
          "get": null
        }
      }
    }
    ```

8. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página **Explicação da busca** do Intelligent Search (**Storefront > Intelligent Search > Explicação da busca**).
