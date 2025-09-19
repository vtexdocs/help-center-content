---
title: 'Como identificar promoções aplicadas no carrinho?'
id: frequentlyAskedQuestions_345
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.336Z
updatedAt: 2024-11-11T16:52:36.224Z
publishedAt: 2024-11-11T16:52:36.224Z
firstPublishedAt: 2019-01-24T22:08:49.142Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-identify-promotions-applied-to-the-cart
legacySlug: como-identificar-as-promocoes-no-carrinho
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Existem três formas de saber quais promoções estão sendo aplicadas no carrinho. Confira as seções a seguir para entendê-las:

* [Gerenciamento de pedidos](#gerenciamento-de-pedidos)
* [Carrinho](#carrinho)
* [orderForm](#orderform)
* [Simulador de promoções (Beta)](#simulador-de-promocoes-beta)

## Gerenciamento de pedidos

Você pode fazer um pedido para teste na loja e, em seguida, verificar no **Gerenciamento de pedidos** quais promoções foram aplicadas.

Exemplo: imagine um pedido em que frete grátis foi aplicado, mas você não sabe o motivo. Ao clicar em um pedido no **Gerenciamento de pedidos**, você encontraria o nome da promoção registrada na seção **Promoções e parcerias**.

<img class="db center mv9 shadow-4 pointer" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/como-identificar-as-promocoes-no-carrinho_3.png" alt="detalhes-do-pedido" style="margin-bottom: 20px;"> <figcaption align = "center">*Detalhes do pedido*</figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/como-identificar-as-promocoes-no-carrinho_4.png" alt="detalhes-do-pedido-beta" style="margin-bottom: 20px;"> <figcaption align = "center">*Detalhes do pedido (Beta)*</figcaption></figure>

Se nenhuma promoção estiver listada, isso indica que o frete grátis não tem como causa uma promoção, ou seja, o cálculo de frete no módulo de **Estoque & entrega** teve como resultado zero. Nesse caso, seria necessário utilizar o **Simulador de envio** para entender por que razão o frete teve valor zero.

## Carrinho

No carrinho, você pode passar o mouse sobre o ícone de interrogação que fica abaixo do preço de cada item para visualizar os descontos aplicados, conforme ilustrado a seguir.

Porém, caso mais de uma promoção seja aplicada, o que aparecerá será apenas o somatório dos descontos, dificultando a análise do cenário.

![example-cart](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/como-identificar-as-promocoes-no-carrinho_1.png)

## orderForm

> ⚠️ Para realizar a investigação documentada nesta seção, é necessário utilizar o Google Chrome. Por se tratar de uma ferramenta externa à VTEX, ela pode ser atualizada sem aviso prévio.

Na página do carrinho, você pode verificar o orderForm, que é um arquivo em formato JSON com todas as informações correspondentes ao pedido que está sendo criado.

Siga o passo a passo para encontrar o orderForm e identificar as promoções aplicadas:

1. No carrinho, clique com o botão direito do mouse na tela e depois em **Inspecionar**. Outra opção é acessar diretamente as **Ferramentas de Desenvolvedor** utilizando o atalho `Ctrl+Shift+I`.
2. Clique em `Network`.
3. Marque a opção **Preserve log**.
4. Recarregue a página.
5. Após o carregamento, pressione `Ctrl+F` para fazer uma busca na janela das **Ferramentas de Desenvolvedor**. Digite `orderForm` na barra de busca.![order-form](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/como-identificar-as-promocoes-no-carrinho_2.png)
6. Clique sobre a linha do `orderForm`. Ao lado abrirá uma nova janela.
7. Clique em `Preview`.
8. Procure por `ratesAndBenefitsData` e clique sobre o item.
9. Clique no subitem `ratesAndBenefitsIdentifiers`.
10. Haverá um índice para cada promoção que está sendo aplicada.

    Dentro das informações desse índice, o campo `name` mostra o nome da promoção cadastrada no módulo **Promoções e Taxas**.

    O campo `id `mostra o identificador único da promoção cadastrada no módulo  **Promoções e Taxas**. Você pode acessar as configurações da promoção diretamente pela URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{id}`, substituindo `{accountName}` pelo nome da sua conta e `{id}` pelo identificador da promoção.

## Simulador de promoções (Beta)

O Simulador de Promoções é uma ferramenta que permite visualizar as promoções criadas na plataforma VTEX que foram aplicadas no carrinho de compras e suas condições de ativação. Com múltiplas possibilidades de configuração de promoções, é importante ter visibilidade da [concorrência](/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), do acúmulo de promoções durante a compra e das causas de ativação dessas promoções.

Para mais informações, leia o artigo [Simulador de promoções (Beta)](/pt/tutorial/simulador-de-promocoes-beta--4zc8SNqjqeIJ0ZRMhjlnvy).

## Saiba mais

* [Como funcionam as promoções](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
* [Como identificar promoções atribuídas a um SKU?](/pt/tutorial/como-identificar-promocoes-atribuidas-a-um-sku--frequentlyAskedQuestions_4813)
