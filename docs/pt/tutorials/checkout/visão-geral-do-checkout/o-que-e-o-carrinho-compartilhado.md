---
title: 'O que é o carrinho compartilhado'
id: 3oKJZfoAoUm8g0ukCIGsUu
status: PUBLISHED
createdAt: 2018-04-24T20:24:47.008Z
updatedAt: 2022-10-05T20:26:23.772Z
publishedAt: 2022-10-05T20:26:23.772Z
firstPublishedAt: 2018-05-03T14:07:40.683Z
contentType: tutorial
productTeam: Shopping
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: what-is-the-shared-cart
legacySlug: o-que-e-o-carrinho-compartilhado
locale: pt
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
order: 3
---

O carrinho compartilhado é a ferramenta que permite a mais de um usuário gerenciar o mesmo carrinho, adicionando, retirando ou atualizando itens e informações dele. Por meio desta funcionalidade, o seu cliente recebe maior autonomia no momento de realizar a compra, e a sua loja adquire:

- Oportunidade de maiores vendas.
- Menores esforços de logística.
- Fluxo de pedido único.

## Como funciona o carrinho compartilhado

Cada carrinho criado em uma loja possui um parâmetro de identificação, denominado `orderFormId`. 

Ao adicionarmos o `orderFormId`de um carrinho em uma URL padrão (por meio de uma `querystring`), temos acesso a página com as informações deste carrinho. Por meio desta página, que pode ser compartilhada, outros usuários podem realizar quaisquer alterações no pedido (inclusão, remoção) de itens e concluir o seu pagamento.

Exemplo:

- **URL Padrão do Checkout**: `https://www.{nomedaloja}.com/checkout/#/cart`

- **URL do carrinho compartilhado**: `https://www.{nomedaloja}.com/checkout/?orderFormId=31155bb8fd6944c99829c171aa8ed5c4#/cart`

> ⚠️ Ao montar a URL do carrinho compartilhado, garanta que a querystring **?orderFormId=...** seja posicionada entre **/checkout/** e **#/cart**.

Para obter acesso a informações de identificação de carrinhos, confira a [Checkout API](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview).

> ℹ️ A utilização da funcionalidade do carrinho abandonado é opcional, não gerando impacto para lojas que não fizerem o seu uso.

## Segurança das informações

Todas as informações (pessoais, entrega e pagamento) estão protegidas, sendo somente visualizadas pelo usuário cadastrado na plataforma (após realizar o login). Os dados aparecem mascarados para as demais pessoas que acessam o carrinho.

Para saber mais sobre proteção de dados, acesse [Segurança do SmartCheckout](/pt/docs/tutorials/seguranca-do-smartcheckout).

## Rastreamento de páginas

Quando novos parâmetros são inseridos em uma URL, como por exemplo a `querystring`, o rastreamento de páginas pode ser alterado, impactando avaliações realizadas por sistemas como o funil de conversão do Google Analytics. Para utilizar serviço de rastreamento de páginas com parâmetros adicionais, veja as regras atualizadas em 
[como configurar funil de vendas no Google Analytics](/pt/faq/configurar-funil-de-vendas-no-google-analytics).

> ℹ️ Caso utilize outro sistema de rastreamento de página em sua loja, verifique a documentação interna deste sistema.
