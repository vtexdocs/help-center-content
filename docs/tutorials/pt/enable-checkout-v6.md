---
title: Como ativar o Checkout v6
id: 7qVqv3ptRvpVVplrvg8ruH
status: PUBLISHED
createdAt: 2019-05-22T14:54:15.180Z
updatedAt: 2023-03-24T12:51:38.105Z
publishedAt: 2023-03-24T12:51:38.105Z
firstPublishedAt: 2019-05-22T18:19:40.922Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: ativar-o-checkout-v6
legacySlug: ativar-o-checkout-v6
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Para saber as vantagens do Checkout v6, acesse nosso artigo sobre o [lançamento do novo SmartCheckout™](/announcements/encante-seu-cliente-com-a-nova-experiencia-de-compra-do-smartcheckout--47B91RA1WNhUfTNg5iGU0J)

Para atualizar o checkout da sua loja para a versão mais recente (Checkout v6), você deve ativá-lo nos ambientes de Testes e de Produção.

## Ativar o Checkout v6 em Ambiente de Testes

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. Em __Atualização do Smart Checkout (V6)__, habilite a opção __Ambiente de testes (em beta)__, clicando no botão <i class="fas fa-toggle-on"></i>.
5. Clique em __Salvar__. 
6. [Acesse sua loja em ambiente beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) e realize os ajustes de estilo necessários. O Checkout v6 possui novas classes _CSS_ que devem ser levadas em consideração para customização do estilo.

![Checkoutv6_box](//images.ctfassets.net/alneenqid6w5/9hAJfi1LLwpFlcB5iWA3k/a1d6c6ab5e38fd7398ebc47b7ae32aa1/CheckoutV6_box_PT.png)

## Ativar o Checkout v6 em Ambiente de Produção

Após realizar os ajustes necessários em Ambiente de Teste, você pode ativar o Checkout v6 em ambiente de produção. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. Em __Atualização do Smart Checkout (V6)__, habilite a opção __Ambiente de produção (em beta)__, clicando no botão <i class="fas fa-toggle-on"></i> e nas duas checkboxes do checklist.
5. Clique em __Salvar__. 

Após este passo, o Checkout v6 estará instalado na sua loja.

![checkoutv6_box_2](//images.ctfassets.net/alneenqid6w5/1gXZSHO1C5yRDF6GL6h5IK/671c0ec19bac97c07c97f3276150c30d/CheckoutV6_box2_PT.png)

## Como checar se o Checkout v6 foi instalado corretamente?

1. Acesse a URL `{{accountName}}.myvtex.com/checkout`
2. Pressione `Ctrl + U` se estiver utilizando Windows ou `Opt + Cmd + U` se estiver utilizando Mac. Você irá acessar o código fonte da página.
3. Pressione `Ctrl + F` se estiver utilizando Windows ou `Cmd + F` se estiver utilizando Mac para abrir a caixa de busca do browser.
4. Busque pelo termo `checkout-ui/v6`. Se você encontrar o arquivo `//io.vtex.com.br/checkout-ui/v6.x.x/style/style.css` no código fonte da página, a migração para o Checkout v6 foi realizada com sucesso.
