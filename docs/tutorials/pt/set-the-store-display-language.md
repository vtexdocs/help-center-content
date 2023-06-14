---
title: Definir os textos de exibição da loja
id: 1lTwIvUzgIcs28QGCGK0Ag
status: PUBLISHED
createdAt: 2018-01-25T18:21:47.414Z
updatedAt: 2023-03-24T21:37:33.261Z
publishedAt: 2023-03-24T21:37:33.261Z
firstPublishedAt: 2018-01-25T19:53:01.303Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: definir-o-idioma-de-exibicao-da-loja
legacySlug: definir-o-idioma-de-exibicao-da-loja
subcategory: 7ogirQ8NClawO2X6xdgCKc
---

Caso você deseje alterar os textos de exibição da sua loja, veja neste artigo as questões a serem consideradas.

### Textos da loja (XML Text)

A maior parte dos textos que aparecem na loja é renderizada a partir das variáveis que ficam na seção __Textos da loja__.

Você pode consultar essas variáveis no menu do Admin VTEX, acessando **Configurações da Loja > Storefront > Configuração** e clique em __TEXTOS DA LOJA__.

### Checkout

O idioma do checkout é definido pela política comercial.

Portanto, para traduzi-lo você precisa alterar o valor do campo __Culture Info__ no cadastro de política comercial.

Se você deseja que para qualquer cenário o idioma seja inglês, por exemplo, altere o Culture Info de todas as políticas comerciais da loja para `en-us`.

Para isso, siga os passos abaixo:

1. Ainda em **Configurações da Loja**, acesse **Canais** e clique em __Políticas Comerciais__.
2. Escolha a política comercial desejada e clique em __Editar__.
3. Altere o campo __Informações culturais__ para o idioma desejado.
4. Clique `Salvar`.

### Front-end

Alguns textos da loja não são renderizados por variáveis internas nem são definidos por política comercial. Para estes casos, é necessário tratar os textos no front-end com JavaScript ou, de preferência (por ser um método mais simples) manipulando o CSS.
