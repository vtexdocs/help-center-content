---
title: 'Não consigo visualizar o produto na busca do site'
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2024-08-08T14:57:59.572Z
publishedAt: 2024-08-08T14:57:59.572Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-view-the-product-in-the-search-results
locale: pt
legacySlug: nao-consigo-visualizar-o-produto-na-busca-do-site
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Palavras-chave__: *produto, busca, catálogo, intelligent search, apps, rewriter, graphql, vtex io, redirect.*

Quando o usuário realiza a pesquisa em uma loja VTEX por meio do [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), é possível que o produto desejado não seja localizado, mesmo que o termo utilizado na busca esteja presente nas informações cadastradas do item.

Cenário de exemplo: ao pesquisar no site da loja por produtos que contenham o termo "Pendleton", o resultado da busca exibe 6 produtos. Entretanto, quando acessamos o Admin VTEX (__Storefront > Intelligent Search > Explicação da busca__) e digitamos o mesmo termo, são apresentados 9 produtos.

![Filter_1](https://images.ctfassets.net/alneenqid6w5/1bMAcWQEyVXBsUBZQp8H0K/d91a90067779eab00b0aefe3b40f889a/Filter_1.png)

![Filter_2](//images.ctfassets.net/alneenqid6w5/5TL7uaMv37zf7AGwohmAKu/eb0ef3af6e10a261b1e8176ca18ef04a/Filter_2.png)

Este comportamento pode ocorrer devido aos seguintes cenários:

1. Cadastro incorreto do produto no Catálogo.

2. O termo utilizado não está presente em um dos campos pesquisáveis do produto. Saiba mais em [Configurações para o comportamento da busca](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/23mytRDsEduqLO0Lo7yufy#configuracoes-para-o-comportamento-da-busca) e [Configuração da busca](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx).

3. Rota interna redirecionando o resultado da pesquisa para uma página de marca (brand).

## Soluções

Para permitir que os produtos pesquisados sejam exibidos corretamente no resultado da busca do site, considere verificar as seguintes soluções:

- [Verificar campos de cadastro do produto](#verificacao-dos-campos-de-cadastro-do-produto)
- [Modificar filtro de busca no Rewriter](#modificacao-do-filtro-da-busca-no-rewriter)
- [Remover rota interna de busca no Rewriter](#remocao-da-rota-interna-de-busca-no-rewriter)

### Verificação dos campos de cadastro do produto

A ausência do produto em um resultado de busca pode ser atribuída ao preenchimento incorreto de alguns campos durante o processo de [cadastro do produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke). Siga os passos abaixo para verificar os campos __Marca, Exibir no site e Mostrar produto esgotado__:

<blockquote><ui>1. No Admin VTEX, acesse <b>Catálogo > Todos os produtos</b>.</ui>

<blockquote><ui>>⚠️ Lojas que utilizam a página **Produtos e SKUS (Beta)**, devem verificar os campos de cadastro do produto acessando **Catálogo > Produtos e SKUS** no Admin VTEX. Saiba mais em [Produtos e SKUS (Beta)](https://help.vtex.com/pt/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).</blockquote>

<blockquote><ui>2. Localize o produto desejado e clique em <b>EDITAR</b>.</ui>

<blockquote><ui>3. No campo <b>Marca</b>, verifique se a informação está correta. Se necessário, adicione a marca correspondente ao produto. Somente é possível adicionar marcas que já tenham sido previamente <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR">cadastradas na loja</a>.</ui>

<blockquote><ui>4. Na opção <b>Exibir no site</b>, confirme se o campo está selecionado.</ui>

<blockquote><ui>5. Na opção <b>Mostrar produto esgotado</b>, confirme se o campo está selecionado.</ui>

<blockquote><ui>6. Clique em <i>Salvar</i>.</ui>

<blockquote><ui>7. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página <b>Explicação da busca</b> do Intelligent Search (<b>Storefront > Intelligent Search > Explicação da busca</b>).</ui>

<blockquote><ui>>⚠️ Se o termo de busca estiver presente no nome ou descrição do produto, mas o produto for de uma marca diferente do termo especificado na busca, prossiga com as demais etapas para solucionar o problema.</blockquote>

### Modificação do filtro da busca no Rewriter

Outro fator que pode contribuir para um produto não ser exibido em um resultado de busca é o comportamento padrão que o app [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) apresenta ao exibir produtos.

Se um termo for registrado no Rewriter como marca, o [Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) receberá a informação de que ele deverá ser exibido apenas quando estiver presente em uma marca.

Para remover a restrição de busca por marca (*brand*) e permitir os produtos sejam localizados também por termos presentes no nome ou descrição (*full text*), siga os passos abaixo:

  <blockquote><ui>1. No Admin VTEX, em <b>Storefront > Intelligent Search > Explicação da busca</b>, insira o termo desejado e verifique quantos produtos são retornados na busca.</ui>

<blockquote><ui>2. Configure o app <a href="https://developers.vtex.com/docs/apps/vtex.rewriter">Rewriter</a>. Caso este app ainda não esteja instalado em sua loja, acesse a <a href="https://help.vtex.com/pt/tracks/hub-de-extensoes--AW7klkYMh557y5IUOgzco/2LDRvGujYsumxi7IlE7CEJ">App Store</a> para instalá-lo.</ui>

<blockquote><ui>3. Acesse o <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a> em <b>Configurações da loja > Storefront > GraphQL IDE</b>.</ui>

<blockquote><ui>4. Em <b>Selecione um app</b>, clique sobre a opção do app Rewriter (<b>vtex.rewriter@{app-version-number}</b>).</ui>

![Graphql_ide_pt](//images.ctfassets.net/alneenqid6w5/1IBr0HvF5xxf2nfxIwW4YC/2b1cf341f212c5ac6ea16e7314d3c048/Graphql_ide_pt.png)

<blockquote><ui>5. No campo de preenchimento da query (abaixo de <b>GraphiQL</b>), insira os dados da função mutação <i>saveInternal</i>.<ui>

```
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

<blockquote><ui>6. Em <b>Query Variables</b>, insira as informações sobre a rota. Você deve substituir o valor <i>Pendleton</i> pelo termo desejado e o valor do campo <i>id</i> pela identificação do produto.<ui>

```
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

<blockquote><ui>>⚠️ O valor <i>ft</i> (full text) ao invés de <i>b</i> (brand) no parâmetro <i>map</i> indica que produtos em que o termo <i>Pendleton</i> esteja presente no nome ou na descrição também passarão a ser exibidos na busca.</blockquote>

<blockquote><ui>7. Clique na seta do GraphiQL IDE (ao lado de <b>GraphiQL</b>) para realizar a atualização do filtro de busca. O novo padrão de filtro de busca para o termo será confirmada pela exibição da seguinte mensagem no campo de resultados do GraphiQL IDE.</ui>

```
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

<blockquote><ui>8. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página <b>Explicação da busca</b> do Intelligent Search (<b>Storefront > Intelligent Search > Explicação da busca</b>).</ui>

<blockquote><ui>>⚠️ Se o termo de busca estiver relacionado a uma marca que não existe mais em seu site, será necessário remover a rota interna de busca dentro do app Rewriter conforme descrito na solução abaixo.</blockquote>

### Remoção da rota interna de busca no Rewriter

[Rotas internas](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) de busca no app [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) podem impedir que um produto seja exibido na busca caso este tenha sido cadastrado com uma marca que não esteja mais disponível na loja.

Para voltar a exibir produtos que contenham os termos pesquisados apenas no nome ou descrição, é necessário deletar a respectiva rota de busca. 

Para remover uma rota interna de busca do termo, siga os passos abaixo:

<blockquote><ui>1. No Admin VTEX, acesse o <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a> em <b>Configurações da loja > Storefront > GraphQL IDE</b>.</ui>

<blockquote><ui>2. Em <b>Selecione um app</b>, clique sobre a opção do app Rewriter (<b>vtex.rewriter@{app-version-number}</b>).</ui>

<blockquote><ui>3. No campo de preenchimento da query (abaixo de <b>GraphiQL</b>), insira os dados da função <i>internal get</i>, substituindo <i>pendleton</i> pelo termo desejado.</ui> 

```
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

<blockquote><ui>4. Clique na seta do GraphiQL IDE (ao lado de <b>GraphiQL</b>) e verifique no campo de resultados se a rota interna está descrita como <i>brand</i>.</ui>

```
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

<blockquote><ui>5. No campo de preenchimento da query (abaixo de <b>GraphiQL</b>), insira os dados da função <i>mutation</i>, substituindo <i>pendleton</i> pelo termo desejado.</ui> 

```
mutation {
  internal {
    delete(path: "/Pendleton"){
      type
    }
  }
}
```

<blockquote><ui>6. Clique na seta do GraphiQL IDE (ao lado de <b>GraphiQL</b>) para remover a rota interna de filtro por <i>brand</i> e confirme se a informação abaixo aparece no campo de resultados do GraphiQL IDE.</ui>

```
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

<blockquote><ui>7. Repita os passos 3 e 4 para confirmar que a rota interna de redirecionamento do termo para brand foi deletada. Isto pode ser indicado pelo resultado <i>"get": null</i> no campo de resultados do GraphiQL IDE.</ui>

```
{
  "data": {
    "internal": {
      "get": null
    }
  }
}
```

<blockquote><ui>8. Acesse o site da loja, digite o termo desejado e verifique se os produtos exibidos no resultado da busca são iguais aos produtos disponíveis na página <b>Explicação da busca</b> do Intelligent Search (<b>Storefront > Intelligent Search > Explicação da busca</b>).</ui>
