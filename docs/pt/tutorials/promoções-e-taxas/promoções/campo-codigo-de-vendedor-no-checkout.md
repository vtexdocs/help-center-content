---
title: 'Campo código de vendedor no Checkout'
id: 6hiRCXt5Cz250o7hBnN2Tp
status: PUBLISHED
createdAt: 2023-06-20T12:18:18.542Z
updatedAt: 2025-09-04T20:11:34.659Z
publishedAt: 2025-09-04T20:11:34.659Z
firstPublishedAt: 2023-06-20T15:04:21.346Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: sales-associate-code-field-at-checkout
legacySlug: campo-codigo-de-vendedor-no-checkout
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Na VTEX, você pode criar um campo para registrar o código de vendedor no Checkout. Por meio dele, é possível:
- Associar uma determinada ordem de compra a um vendedor.
- Oferecer descontos exclusivos ao consumidor.
- Administrar a performance de seus vendedores, extraindo dados como número de vendas / ticket médio por vendedor, ranking para comissionamento de vendas, entre outros.

> ⚠️ O campo **código de vendedor** não substitui o campo **cupom de desconto** (nativo na plataforma VTEX). Ao realizar as configurações deste artigo, ambos poderão ser utilizados para oferecer descontos.

Para criar o campo e inseri-lo na tela do Checkout de sua loja, três etapas são necessárias:

1. [Criar nova entidade de dados](#criar-nova-entidade-de-dados)
2. [Criar promoção Código do Vendedor](#criar-promocao-codigo-do-vendedor)
3. [Customizar UI no Checkout](#customizar-ui-no-checkout)

## Criar nova entidade de dados

O campo **Código de Vendedor** deve ser registrado no [Master Data](/pt/docs/tutorials/master-data) como uma nova entidade. Para criar a entidade de dados, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Master Data**, ou digite **Master Data** na barra de busca no topo da página.
2. Crie uma nova [entidade de dados](/pt/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar) chamada *codigovendedor*.
3. Dentro da nova entidade de dados, crie os seguintes campos:
    - **Código do vendedor**: com valor máximo de 10 caracteres (tipo Varchar10).
    - **Email**: endereço de email do vendedor (tipo Email).
    - **Nome**: nome de vendedor (tipo Text).
    - **Status**: indica se o vendedor está ativo ou inativo (tipo Boolean).
    - **Loja**: identificação da loja onde o vendedor atua (tipo Text).
    - Demais campos (conforme necessidade).

<blockquote><ui>4. Cadastre as informações de cada vendedor nos campos criados no passo anterior.</ui>

<blockquote><ui>5. Crie um [formulário](/pt/docs/tutorials/criando-formulario-no-master-data) para ter acesso às informações da nova entidade *codigovendedor* por meio da interface do Master Data.</ui>

## Criar promoção Código do Vendedor

Após a criação da entidade *codigovendedor*, é necessário associá-la a uma promoção. Para criar uma nova promoção, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Crie uma nova [promoção regular](/pt/docs/tracks/criar-promocao-regular). Preencha as informações de **Dados gerais de promoção** e **A quais itens esta promoção será aplicada?** conforme desejado.

> ℹ️ Caso deseje utilizar o campo código de vendedor para oferecer desconto no valor da compra, preencha as informações em **Tipo e valor de de desconto?**.

<blockquote><ui>3. Em **Quais as condições para a promoção ser válida?**, clique na opção **utm_campaign** e digite no campo *codigovendedor*.</ui>

![utm campaign codigovendedor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/campo-codigo-de-vendedor-no-checkout_1.PNG)

<blockquote><ui>4. Em **Restrições e limitações de uso**, adicione as demais restrições disponíveis, caso desejar. Selecione a opção **Permitir acumular promoções**.</ui>

<blockquote><ui>5. Clique em **Salvar**.</ui>

## Customizar UI no Checkout

A última etapa consiste em configurar a tela do Checkout para permitir a exibição do campo **Código do Vendedor**. 

Para realizar esta customização, é necessário entrar em contato com a agência parceira responsável pela criação da sua loja e solicitar que o novo campo seja inserido, permitindo que o cliente insira o código do vendedor e o nome do mesmo seja exibido. 

Adicionalmente, os seguintes passos devem ser realizados:

1. Ao simular uma compra e inserir o código do vendedor na tela do Checkout, certifique-se que a chamada GET [Search Documents](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search) realize a busca na entidade `codigovendedor` e retorne todas as informações cadastradas do vendedor. Exemplo de chamada: https://{accountName}.{environment}.com.br/api/dataentities/codigovendedor/search?codigovendedor=12345.

> ⚠️ O campo **status** deve retornar o valor **true**, indicando que o código do vendedor é válido.

<blockquote><ui>2. Efetue a chamada POST [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) para incluir as seguintes informações no [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) de sua loja</ui>:

<blockquote><blockquote>- **marketingData**: em *"utmCampaign"*, inserir *codigovendedor"*. Caso esta informação não seja descrita, a promoção (código do vendedor) não será aplicada no carrinho e o campo não será exibido.

<blockquote><blockquote>- **openTextField** (opcional): inserir observações ou comentários (ex. informações para filtros de comissionamento).

> ⚠️ Somente a informação do nome do vendedor deve ser exibida na tela do Checkout.

Após executar todas as etapas acima descritas, o campo **Código do Vendedor** estará disponível na tela do Checkout.

![Código do vendedor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/campo-codigo-de-vendedor-no-checkout_2.png)
