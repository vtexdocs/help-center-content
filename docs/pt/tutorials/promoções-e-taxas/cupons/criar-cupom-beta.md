---
title: 'Criar cupom'
id: 7lMk3MmhNp2IEccyGApxU
status: PUBLISHED
createdAt: 2022-04-28T20:25:24.998Z
updatedAt: 2025-09-04T19:47:20.177Z
publishedAt: 2025-09-04T19:47:20.177Z
firstPublishedAt: 2022-04-28T20:42:45.525Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-a-coupon-beta
legacySlug: criar-cupom-beta
locale: pt
subcategoryId: 1TXh7VjDSIGA2eSI0CmUsi
---

Um [cupom](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL) consiste em um código promocional, composto de uma sequência de letras e números. Você pode disponibilizar cupons para aplicar promoções sobre o valor do carrinho: ao informar o código de um cupom válido no momento da compra, os seus clientes podem obter descontos sobre o valor do pedido.

Para criar um cupom pelo Admin VTEX, siga as instruções abaixo:

1. No Admin VTEX, acesse *Promoções > Cupons*, ou digite *Cupons* na barra de busca no topo da página.
2. Clique em `Criar cupom`.
3. Preencha o formulário com as [informações do cupom](#informacoes-do-cupom), a partir da seção [Geral](#geral).
4. Clique em `Salvar`.

Para ser utilizado, o cupom precisa estar vinculado a pelo menos uma promoção. Leia a seção [Vincular o cupom a uma promoção](#vincular-o-cupom-a-uma-promocao) para saber como fazer essa configuração.

Após salvar, se você tiver criado um [grupo de cupons](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL#grupos-de-cupons), você verá uma tela com os cupons gerados. Leia a seção [Cupons gerados](#cupons-gerados) para mais informações. Se você tiver criado um [cupom único](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL#cupons-unicos), você será conduzido diretamente para a [lista de cupons](/pt/tutorial/lista-de-cupons-beta--5z5ya3IonsC2W4B5h4JrsZ).

## Informações do cupom

O formulário para criar ou editar um cupom apresenta as seguintes seções:

* [Uso do cupom e promoções vinculadas](#uso-do-cupom-e-promocoes-vinculadas)
* [Geral](#geral)
* [Restrições](#restricoes)

### Uso do cupom e promoções vinculadas

O painel superior do formulário de criação e edição de cupom, ilustrado abaixo, apresenta a quantidade de vezes em que o cupom foi utilizado e a quantidade de promoções vinculadas ao cupom.

![usos-do-cupom-promocoes-vinculadas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/cupons/criar-cupom-beta_1.png)

Ao clicar em qualquer uma dessas informações no painel, você tem acesso ao modal **Ver detalhes de uso**, que apresenta os dados descritos a seguir:

* **Promoções vinculadas:** exibe o nome das promoções vinculadas ao cupom, se houver alguma. Ao clicar no nome de uma promoção, você será direcionado para a página de edição da promoção.

    O cupom só se torna disponível para uso quando está vinculado a pelo menos uma promoção. Para estabelecer esse vínculo, é necessário usar a mesma [utm_source ou utm_campaign](/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) no cadastro do cupom e no cadastro da promoção. Leia a seção [Vincular o cupom a uma promoção](#vincular-o-cupom-a-uma-promocao) para saber como fazer essa configuração.

* **Uso**: exibe a quantidade de usos do cupom e a quantidade de usos restantes, caso você tenha limitado a quantidade de usos.

    Caso o cupom seja único, esta seção apresenta a lista de pedidos em que o cupom foi utilizado e permite buscar pelo número de um pedido. Ao clicar no número de um pedido, você será conduzido para a página de detalhes do pedido no **Gerenciamento de pedidos**.

  ![ver-detalhes-de-uso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/cupons/criar-cupom-beta_2.png)

    Caso seja um grupo de cupons, esta seção apresenta a lista de códigos do grupo de cupons e permite buscar por um código específico. Ao clicar em um código, você tem acesso à lista de pedidos em que o código foi utilizado e pode buscar pelo número de um pedido. Clicando no número de um pedido, você será conduzido para a página de detalhes do pedido no **Gerenciamento de pedidos**.

  ![selecione-o-codigo-grupo-cupons](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/cupons/criar-cupom-beta_3.png)

### Geral

A seção **Geral** apresenta campos que você deve preencher com as informações gerais do seu cupom:

* **Código do cupom:** código que os clientes da sua loja precisarão informar durante o checkout para aplicar o desconto do cupom. Você não pode usar o código de um cupom já existente. Somente letras, números e hífens são permitidos e o código pode ter até 300 caracteres. Este campo é obrigatório.
* **UTM source:** possibilita atrelar o cupom a determinada `utm_source`. A `utm_source` representa a origem do tráfego, ou seja, de qual site, anunciante ou publicação veio o usuário. Exemplo: você pode definir que sempre que um usuário chegar à sua loja vindo de um clique num anúncio do Facebook, a URL será montada com o parâmetro `utm_source=fb` e o cupom será aplicado. Leia [O que são utm_source, utm_campaign e utm_medium](/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) para mais informações.
* **UTM campaign:** possibilita atrelar o cupom a determinada `utm_campaign`, ou seja, campanha que define um contexto de marketing. Exemplos: `natal`, `diadospais`.  Leia [O que são utm_source, utm_campaign e utm_medium](/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) para mais informações.
* <i class="fas fa-toggle-on"></i> **Gerar cupons em grupo:** ao manter essa opção desativada, você opta por criar um cupom único. Ao ativar essa opção, você cria um [grupo de cupons](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL#grupos-de-cupons) e visualiza os recursos a seguir. 
    * **Número de cupons:** permite definir o número de códigos a serem gerados a partir do prefixo definido em **Código do cupom**. O número máximo é 1000.
    * **Exportar cupons:** botão que permite exportar os códigos do grupo de cupons. Essa opção fica disponível apenas ao editar um grupo de cupons já existente.

> ⚠️ Ao menos uma das UTMs precisa ser definida, ou seja, é obrigatório preencher a **UTM source** ou a **UTM campaign**. Também é possível preencher ambos os campos.

### Restrições

Nesta seção do formulário, você pode configurar as seguintes restrições de uso do cupom:

* <i class="fas fa-toggle-on"></i> **Limitar o uso do cupom na minha loja:** ao ativar essa opção, você precisa informar a quantidade de vezes que o cupom poderá ser utilizado, utilizando os botões <i class="fas fa-minus"></i> e <i class="fas fa-plus"></i> ou digitando a quantidade desejada. O número mínimo é 1 e não há um número máximo.

  Ao manter essa opção desativada, o cupom pode ser utilizado por uma quantidade ilimitada de vezes.

  > ⚠️ Caso ocorra o cancelamento de um pedido com cupom de uso limitado, o limite será recalculado. Isso significa que pedidos com status **Cancelado** não contam no limite de vezes que o cupom poderá ser utilizado.

## Cupons gerados

Após salvar o novo cupom, se você tiver criado um [grupo de cupons](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL#grupos-de-cupons), você verá a tela __Cupons gerados__. Essa tela disponibiliza duas opções:

* <i class="far fa-clone"></i> **Copiar tudo:** permite copiar os códigos gerados para a sua área de transferência. Posteriormente, se desejar, você pode colá-los em um editor de planilhas como o Excel ou o Google Sheets. Também é possível copiar cada código clicando sobre ele.
* **Exportar:** permite exportar os códigos gerados para um arquivo CSV. O arquivo exportado contém uma coluna, com um código por linha.

![cupons-gerados-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/cupons/criar-cupom-beta_4.gif)

### Gerar cupons em massa
A [criação de cupons](#criar-cupons) para promoções deve ser feita a partir do módulo Promoções e Taxas. No entanto, podem ocorrer casos em que é necessário criar múltiplos cupons de uma vez, devido a alguma campanha ou ação de marketing.

A criação de cupons em massa não pode ser realizada pelo Admin VTEX, apenas pela [Promotions & Taxes API](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api). Veja como gerar cupons em grandes quantidades seguindo o guia [Criação e gerenciamento de cupons com a API de Promoções](https://developers.vtex.com/docs/guides/creating-and-managing-coupons-with-promotions-api) 

## Vincular o cupom a uma promoção

É obrigatório vincular um cupom a uma promoção para ativá-lo. Para isso, siga os passos abaixo. É possível associar um cupom a qualquer tipo de promoção, exceto a [Promoção de campanha](/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume).

1. No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2. Clique na promoção existente em que deseja inserir o cupom ou crie uma promoção clicando no botão `Nova Promoção`.
3. Se optar por criar uma nova promoção, clique no tipo de promoção que deseja criar.
4. Na seção **Quais as condições para a promoção ser válida?**, preencha os campos **utm_source** ou **utm_campaign** com os mesmos valores do cupom criado.
5. Clique em `Salvar` para finalizar.

Após essas configurações, o cupom estará ativo e disponível para uso na sua loja.

## Como usar múltiplos cupons

É possível permitir que os clientes da sua loja utilizem mais de um cupom em cada compra. Para ativar essa funcionalidade, você deverá utilizar um dos endpoints a seguir. Essa funcionalidade só está disponível via API e o limite de cupons por compra é de 20 cupons.

Ambos endpoints preenchem o campo `marketingData` do response body, não havendo diferença no uso para ativação. Siga os passos a baixo para ativar a funcionalidade:

1. Utilize um dos endpoint para ativar essa funcionalidade:
   - [POST Add coupons to the cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons)
   - [POST Add marketing data](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/attachments/marketingData)
2. [Customize](https://developers.vtex.com/docs/guides/checkout-customization-guide#customizing-checkout-ui-admin-vtex) o storefront da sua loja para permitir utilizar múltiplos cupons.
   - Se sua loja utiliza a v5 do Checkout, utilize `checkout5-custom.js checkout5-custom.css`.
   - Se sua loja utiliza a v6 do Checkout, utilize `checkout6-custom.js checkout6-custom.css`.
3. Depois da customização, você deverá solicitar a liberação da funcionalidade através de uma [abertura de chamado no Suporte VTEX](/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).
4. Marque a opção <i class="fas fa-check-square"></i> **Permitir acumular promoções** nas [configurações das promoções](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) associadas aos cupons para permitir que mais de uma promoção seja ativada pelos múltiplos cupons na mesma compra. Dessa forma, os descontos concedidos pelas diferentes promoções serão [acumulados](/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#acumular).

#### Saiba mais

* [Cupons](/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Lista de Cupons](/pt/tutorial/lista-de-cupons-beta--5z5ya3IonsC2W4B5h4JrsZ)
