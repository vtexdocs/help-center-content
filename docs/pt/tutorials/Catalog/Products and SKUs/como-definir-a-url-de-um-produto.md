---
title: 'Como definir a URL de um produto?'
id: frequentlyAskedQuestions_368
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.153Z
updatedAt: 2025-02-06T18:17:54.163Z
publishedAt: 2025-02-06T18:17:54.163Z
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

Na VTEX, a URL de um produto é composta pelo domínio da loja somado ao valor do campo obrigatório **textLink** durante o [cadastro do produto](/pt/tutorial/cadastrando-produtos--tutorials_2567), mais `/p`, que representa “produto”.  Exemplo: em uma loja cujo domínio é `nomedaloja.com`, ao preencher o campo **textLink** de um produto com `camisa-polo`, a estrutura final da URL do produto será `nomedaloja.com/camisa-polo/p`.

Você pode alterar o **textLink** de um produto existente a qualquer momento pelo Admin VTEX, em **Catálogo > Todos os produtos > Alterar**. Recomendamos preencher o **textLink** com o nome do seu produto, utilizando apenas as principais palavras-chave relacionadas a ele.

Confira a seção [Regras de preenchimento](#regras-de-preenchimento) para entender as restrições desse campo.

<div class="alert alert-info">
  <p>Também é possível alterar a URL de um produto utilizando a <a href="https://developers.vtex.com/docs/api-reference/catalog-api#overview">API do Catálogo</a>. Nesse caso, o campo a ser alterado é o <code>LinkId</code>. Confira <a href="https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product">Update Product</a> para mais informações.</p>
</div>

## Regras de preenchimento

Ao preencher o campo **textLink**, é necessário respeitar as seguintes regras:

* Substitua espaços por hífens (`-`).
* Utilize no máximo 255 caracteres (preferencialmente usar até 50).
* Não utilize caracteres especiais como `_ ! . * ' ( ) ; : @ & = + $ , / ? % # [ ] |` ou acentos como `´ ¨ ^ ~`.
* Não utilize as seguintes palavras reservadas, pois elas são utilizadas para outras funcionalidades na VTEX e podem gerar erros se aplicadas na URL do produto:
    * `a`
    * `meta`
    * `api`
    * `admin`

<div class="alert alert-danger">
  <p>Observe que não cumprir as regras de preenchimento do <strong>textLink</strong> listadas acima pode prejudicar o desempenho da sua loja, causar problemas na busca e interferir no funcionamento de páginas definidas no Admin VTEX.</p>
</div>

## Saiba mais

* [Cadastrar produtos](/pt/tutorial/cadastrando-produtos--tutorials_2567)
* [Preencher campos de cadastro de produto](/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke)
