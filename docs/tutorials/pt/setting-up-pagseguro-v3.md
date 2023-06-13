---
title: Configurar o PagSeguro V3
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2023-03-23T15:40:31.170Z
publishedAt: 2023-03-23T15:40:31.170Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-o-pagseguro-v3
legacySlug: configurar-o-pagseguro-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Se você possui uma conta PagSeguro, pode configurar o PagseguroV3 no gateway da VTEX para receber pagamentos por: boleto, PIX, cartões de débito e crédito.

## Configurar afiliação de gateway PagseguroV3

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no __botão “+”__.
3. Clique no conector __PagSeguroV3__.
4. Em __Click to authorize VTEX to make payments__, clique em __Autorizar__. Neste momento, você será redirecionado para a página do PagSeguro, onde deverá acessar a sua conta, e autorizar a conexão da VTEX na sua conta do PagSeguro.
5. Após autorizar, você retornará automaticamente para o Admin da VTEX, e os campos __Application Key__, __Application Token__, __Application Id__ já estarão preenchidos.
6. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o PagSeguroV3 estará configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o PagSeguroV3).

Para saber como definir condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
