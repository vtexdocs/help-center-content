---
title: 'Como definir a URL de um produto?'
id: frequentlyAskedQuestions_368
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.153Z
updatedAt: 2023-03-29T14:51:40.299Z
publishedAt: 2023-03-29T14:51:40.299Z
firstPublishedAt: 2019-01-24T21:55:07.896Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-to-define-the-url-for-a-product-page
locale: pt
legacySlug: como-a-url-de-produto-e-montada
subcategoryId: pwxWmUu7T222QyuGogs68
---

A URL de um produto é o endereço eletrônico que permite acessar a página do produto na internet. É importante criar uma URL amigável e otimizada para que ela seja facilmente encontrável por ferramentas de busca e facilite a experiência do seu cliente no site do seu ecommerce. 

Na VTEX, a URL de um produto é composta pelo domínio da loja somado ao valor do campo obrigatório **textLink** durante o [cadastro do produto](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567), mais `/p`, que representa “produto”.  Exemplo: em uma loja cujo domínio é `nomedaloja.com`, ao preencher o campo **textLink** de um produto com `camisa-polo`, a estrutura final da URL do produto será `nomedaloja.com/camisa-polo/p`.

Você pode alterar o **textLink** de um produto existente a qualquer momento pelo Admin VTEX, em **Catálogo > Todos os produtos > Alterar**. Recomendamos preencher o **textLink** com o nome do seu produto, utilizando apenas as principais palavras-chave relacionadas a ele.

Confira a seção [Regras de preenchimento](#regras-de-preenchimento) para entender as restrições desse campo.

![textlink.pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/como-definir-a-url-de-um-produto_1.png)

>ℹ️ Também é possível alterar a URL de um produto utilizando a [API do Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#overview). Nesse caso, o campo a ser alterado é o `LinkId`. Confira [Update Product](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product) para mais informações.

## Regras de preenchimento

Ao preencher o campo **textLink**, é necessário respeitar as seguintes regras:

* Substitua espaços por hífens (`-`).
* Utilize no máximo 50 caracteres.
* Não utilize caracteres especiais como `! . * ' ( ) ; : @ & = + $ , / ? % # [ ] |` ou acentos como `´ ¨ ^ ~`.
* Não utilize as seguintes palavras reservadas, pois elas são utilizadas para outras funcionalidades na VTEX e podem gerar erros se aplicadas na URL do produto:
    * `a`
    * `meta`
    * `api`
    * `admin`

>❗ Observe que não cumprir as regras de preenchimento do **textLink** listadas acima pode prejudicar o desempenho da sua loja, causar problemas na busca e interferir no funcionamento de páginas definidas no Admin VTEX.

## Saiba mais

* [Cadastrar produtos](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567)
* [Preencher campos de cadastro de produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke)
