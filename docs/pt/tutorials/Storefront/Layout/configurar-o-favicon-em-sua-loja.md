---
title: 'Configurar o favicon em sua loja'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2024-09-23T20:18:14.557Z
publishedAt: 2024-09-23T20:18:14.557Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slugEN: configuring-favicon-in-your-store
legacySlug: como-configurar-o-favicon-em-meu-site
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal Legado. Para lojas desenvolvidas com Store Framework, siga as instruções da seção **Favicons** no guia [Configurando SEO em sua loja Store Framework](https://help.vtex.com/pt/tutorial/configurando-seo-em-sua-loja--1sKskEsjUSvgHyqM8oknVR?&utm_source=autocomplete#favicons).

Favicon é um pequeno ícone associado a um site. Ele é exibido na aba do navegador ao lado do título da página, nos favoritos, nos históricos de navegação e em outros locais onde o endereço do site aparece, como as páginas de resultados de busca.

O favicon ajuda os usuários a identificar rapidamente um site quando tem várias abas abertas ou quando estão consultando os favoritos, melhorando a experiência do usuário e reforçar a identidade e a credibilidade de uma marca.

![favicon-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/configurar-o-favicon-em-sua-loja_1.png)

Para configurar o favicon em lojas CMS Portal Legado, siga as instruções abaixo:

1. No Admin VTEX, acesse **Storefront > Layout > CMS > Files Manager > imagens**.

    ![files-manager](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/configurar-o-favicon-em-sua-loja_2.png)

2. Na segunda coluna, clique em `Add`.

    ![add-image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/configurar-o-favicon-em-sua-loja_3.png)

3. Clique em `Browse for file` para adicionar o arquivo de imagem no formato `.ico`.

    > ⚠️ O nome do arquivo deve seguir o padrão ***{storeName}**-favicon.ico*. Substitua a variável **{storeName}** pelo nome da loja cadastrado no [Gerenciamento da conta](https://help.vtex.com/pt/tutorial/gerenciamento-da-conta--2vhUVOKfCaswqLguT2F9xq).

    ![store-name-favicon](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/configurar-o-favicon-em-sua-loja_4.png)

4. Configure os [templates](https://help.vtex.com/pt/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88) com o elemento `<link>` dentro do `<head>`, da seguinte forma: `<link rel="shortcut icon" href="/arquivos/**{storeName}**-favicon.ico" />`. A variável `{storeName}` deve ser substituída pelo nome da loja.

    > ℹ️ É possível configurar o favicon com outro nome de arquivo, o que criará uma URL diferente do padrão. No entanto, como o Checkout e o OrderPlaced carregam a URL nesse padrão, é indicado seguir a forma mencionada.
