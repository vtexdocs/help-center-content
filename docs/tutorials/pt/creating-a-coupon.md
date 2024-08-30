---
title: 'Criar cupom'
id: tutorials_319
status: PUBLISHED
createdAt: 2017-04-27T22:09:06.076Z
updatedAt: 2023-03-31T19:41:21.767Z
publishedAt: 2023-03-31T19:41:21.767Z
firstPublishedAt: 2017-04-27T23:03:14.329Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-criar-cupom
locale: pt
legacySlug: como-criar-cupom
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

O cupom é um código que permite a aplicação de uma promoção no carrinho. O cupom só pode ser utilizado depois de estar associado a uma promoção.

Neste artigo vamos abordar:

- [Como criar um cupom](#como-criar-um-cupom)
  - [Campos de cadastro do cupom](#campos-de-cadastro-do-cupom)
    1. [Cupom](#cupom)
    2. [Restrições e limitações de uso](#restricoes-e-limitacoes-de-uso)
- [Como associar um cupom a uma promoção](#como-associar-um-cupom-a-uma-promocao)
- [Como arquivar um cupom](#como-arquivar-um-cupom)
- [Cenário de aplicação](#cenario-de-aplicacao)
- [Como usar múltiplos cupons](#como-usar-multiplos-cupons)

## Como criar um cupom

>⚠️ Há um limite para a quantidade de cupons ativos. Recomendamos reutilizar os cupons,  já que um número elevado pode comprometer o desempenho do módulo **Promoções e Taxas**.

Para criar um cupom, siga os passos abaixo.

1. No Admin VTEX, acesse *Promoções > Cupons*, ou digite *Cupons* na barra de busca no topo da página.
2. Clique em `Novo Cupom`.
3. Preencha os [campos de cadastro do cupom](#campos-de-cadastro-do-cupom).
4. Clique no botão `Salvar`.

>ℹ️ Você pode criar apenas um cupom por vez pelo Admin. Para criar cupons massivamente leia o guia [Creating and managing coupons with Promotions API](https://developers.vtex.com/vtex-rest-api/docs/creating-and-managing-coupons-with-promotions-api).

### Campos de cadastro do cupom

#### 1. Cupom

Nesta seção serão definidas as informações gerais do cupom.

- **Código do Cupom:** código de ativação do cupom. Não há limite de caracteres e o campo é obrigatório.

>⚠️ Não é possível usar caracteres especiais (somente letras, números e traços).

- **utm_source:** utm de origem.
- **utm_campaign:** utm da campanha.

#### 2. Restrições e limitações de uso

É nesta seção que as possíveis restrições do cupom são cadastradas.

- **O cliente pode comprar até X produto(s), utilizando esse cupom em uma ou mais compras:** quantidade de produtos que podem ser comprados por este cupom, independentes de quantas compras sejam realizadas para atingir este número.
- **Renovar cada utilização do cupom após X dia(s):**  a validade do cupom é renovada a partir da quantidade de dias determinados na seleção.

>ℹ️ Para limitar o cupom a um único uso, é preciso [restringir a quantidade de aplicações da promoção na sua loja e por cliente](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327#4-restricoes-e-limitacoes-de-uso).

Quando uma compra é realizada com uma promoção que possui limitação e essa compra é cancelada, esse uso da promoção volta a ser válido.

## Como associar um cupom a uma promoção

O cupom pode ser associado a todos os tipos de promoção, exceto à **Promoção de Campanha**. Um único cupom pode ser associado a uma ou mais promoções.

Para ativar o cupom e associá-lo a uma promoção, siga os seguintes passos.

1. No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2. Clique na promoção que deseja inserir o cupom ou crie uma promoção clicando no botão `Criar promoção`.
3. Na seção **Quais as condições para a promoção ser válida?**, preencha o campo **utm_source** ou **utm_campaign** com os mesmos valores do cupom previamente criado.
4. Clique em `Salvar` para finalizar.

## Como arquivar um cupom

Para inativar um cupom é preciso arquivá-lo. Para arquivar um cupom, siga os passos abaixo.

1. No Admin VTEX, acesse *Promoções > Cupons*, ou digite *Cupons* na barra de busca no topo da página.
2. Selecione o cupom que deseja arquivar.
3. Na tela de edição do cupom, clique no botão `Arquivar`.

>⚠️ Cupons não podem ser deletados, apenas arquivados. É importante enfatizar que você só pode arquivar um cupom de cada vez. Você pode editar e reutilizar um cupom, mas o **código do cupom** não pode ser modificado.

## Cenário de aplicação

É preciso criar uma promoção e divulgá-la em uma newsletter. Porém, é desejado que a promoção seja ativa apenas por um código que estará no email. O passo a passo para a criação desse cenário é o seguinte.

1. [Crie um cupom](#como-criar-um-cupom).
2. [Crie uma promoção](https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320).
3. Utilize a mesma uma `utm_source` ou `utm_campaign` do cupom na configuração da promoção.
4. Insira o código do cupom na newsletter.
5. A promoção será ativada no carrinho de compras somente quando o cliente preencher o campo **Cupom de desconto** e aplicar.

>ℹ️ Também é possível configurar os links da newsletter diretamente com as **utm_source** e **utm_campaign** e dispensar o uso do cupom.

## Como usar múltiplos cupons

É possível permitir que os clientes da sua loja utilizem mais de um cupom em cada compra. Para ativar essa funcionalidade, você deverá utilizar um dos endpoints a seguir. Essa funcionalidade só está disponível via API e o limite de cupons por compra é de 20 cupons.

Ambos endpoints preenchem o campo `marketingData` do response body, não havendo diferença no uso para ativação. Siga os passos a baixo para ativar a funcionalidade:

1. Utilize um dos endpoint para ativar essa funcionalidade:
   - [POST Add coupons to the cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons)
   - [POST Add marketing data](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/attachments/marketingData)
2. [Customize](https://developers.vtex.com/docs/guides/checkout-customization-guide#customizing-checkout-ui-admin-vtex) o storefront da sua loja para permitir utilizar múltiplos cupons.
   - Se sua loja utiliza a v5 do Checkout, utilize `checkout5-custom.js checkout5-custom.css`.
   - Se sua loja utiliza a v6 do Checkout, utilize `checkout6-custom.js checkout6-custom.css`.
3. Depois da customização, você deverá solicitar a liberação da funcionalidade através de uma [abertura de chamado no Suporte VTEX](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).
4. Marque a opção <i class="fas fa-check-square"></i> **Permitir acumular promoções** nas [configurações das promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) associadas aos cupons para permitir que mais de uma promoção seja ativada pelos múltiplos cupons na mesma compra. Dessa forma, os descontos concedidos pelas diferentes promoções serão [acumulados](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#acumular).
