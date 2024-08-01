---
title: 'Campo Código de Vendedor no Checkout'
id: 6hiRCXt5Cz250o7hBnN2Tp
status: PUBLISHED
createdAt: 2023-06-20T12:18:18.542Z
updatedAt: 2023-06-20T21:50:57.120Z
publishedAt: 2023-06-20T21:50:57.120Z
firstPublishedAt: 2023-06-20T15:04:21.346Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: campo-codigo-de-vendedor-no-checkout
locale: pt
legacySlug: campo-codigo-de-vendedor-no-checkout
subcategory: 
---

Na VTEX, você pode criar um campo para registrar o código de vendedor no Checkout. Por meio dele, é possível:
- Associar uma determinada ordem de compra a um vendedor.
- Oferecer descontos exclusivos ao consumidor.
- Administrar a performance de seus vendedores, extraindo dados como número de vendas / ticket médio por vendedor, ranking para comissionamento de vendas, entre outros.

<div class="alert alert-warning">
  O campo <b>código de vendedor</b> não substitui o campo <b>cupom de desconto</b> (nativo na plataforma VTEX). Ao realizar as configurações deste artigo, ambos poderão ser utilizados para oferecer descontos.
</div>

Para criar o campo e inseri-lo na tela do Checkout de sua loja, três etapas são necessárias:

1. [Criar nova entidade de dados](#criar-nova-entidade-de-dados)
2. [Criar promoção Código do Vendedor](#criar-promocao-codigo-do-vendedor)
3. [Customizar UI no Checkout](#customizar-ui-no-checkout)

## Criar nova entidade de dados

O campo **Código de Vendedor** deve ser registrado no [Master Data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) como uma nova entidade. Para criar a entidade de dados, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Master Data**, ou digite **Master Data** na barra de busca no topo da página.
2. Crie uma nova [entidade de dados](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar) chamada *codigovendedor*.
3. Dentro da nova entidade de dados, crie os seguintes campos:
    - **Código do vendedor**: com valor máximo de 10 caracteres (tipo Varchar10).
    - **Email**: endereço de email do vendedor (tipo Email).
    - **Nome**: nome de vendedor (tipo Text).
    - **Status**: indica se o vendedor está ativo ou inativo (tipo Boolean).
    - **Loja**: identificação da loja onde o vendedor atua (tipo Text).
    - Demais campos (conforme necessidade).

<blockquote><ui>4. Cadastre as informações de cada vendedor nos campos criados no passo anterior.</ui>

<blockquote><ui>5. Crie um <a href="https://help.vtex.com/pt/tutorial/criando-formulario-no-master-data">formulário</a> para ter acesso às informações da nova entidade <i>codigovendedor</i> por meio da interface do Master Data.</ui>

## Criar promoção Código do Vendedor

Após a criação da entidade *codigovendedor*, é necessário associá-la a uma promoção. Para criar uma nova promoção, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Crie uma nova [promoção regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI). Preencha as informações de **Dados gerais de promoção** e **A quais itens esta promoção será aplicada?** conforme desejado.

<div class="alert alert-info">
  Caso deseje utilizar o campo código de vendedor para oferecer desconto no valor da compra, preencha as informações em <b>Tipo e valor de de desconto?</b>.
</div>

<blockquote><ui>3. Em <b>Quais as condições para a promoção ser válida?</b>, clique na opção <b>utm_campaign</b> e digite no campo <i>codigovendedor</i>.</ui>

![utm campaign codigovendedor](//images.ctfassets.net/alneenqid6w5/6jroNJYCvzunmfosErnmZF/1896457a0ea45bc20292377e8c963077/UTM_Campaign_codigovendedor.PNG)

<blockquote><ui>4. Em <b>Restrições e limitações de uso</b>, adicione as demais restrições disponíveis, caso desejar. Selecione a opção <b>Permitir acumular promoções</b>.</ui>

<blockquote><ui>5. Clique em <b>Salvar</b>.</ui>

## Customizar UI no Checkout

A última etapa consiste em configurar a tela do Checkout para permitir a exibição do campo **Código do Vendedor**. 

Para realizar esta customização, é necessário entrar em contato com a agência parceira responsável pela criação da sua loja e solicitar que o novo campo seja inserido, permitindo que o cliente insira o código do vendedor e o nome do mesmo seja exibido. 

Adicionalmente, os seguintes passos devem ser realizados:

1. Ao simular uma compra e inserir o código do vendedor na tela do Checkout, certifique-se que a chamada GET [Search Documents](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search) realize a busca na entidade `codigovendedor` e retorne todas as informações cadastradas do vendedor. Exemplo de chamada: https://{accountName}.{environment}.com.br/api/dataentities/codigovendedor/search?codigovendedor=12345.

<div class="alert alert-warning">
  O campo <b>status</b> deve retornar o valor <b>true</b>, indicando que o código do vendedor é válido.
</div>

<blockquote><ui>2. Efetue a chamada POST <a href="https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm">Update orderForm configuration</a> para incluir as seguintes informações no <a href="https://developers.vtex.com/docs/guides/orderform-fields">orderForm</a> de sua loja</ui>:

<blockquote><blockquote>- <b>marketingData</b>: em <i>"utmCampaign"</i>, inserir <i>codigovendedor"</i>. Caso esta informação não seja descrita, a promoção (código do vendedor) não será aplicada no carrinho e o campo não será exibido.

<blockquote><blockquote>- <b>openTextField</b> (opcional): inserir observações ou comentários (ex. informações para filtros de comissionamento).

<div class="alert alert-warning">
  Somente a informação do nome do vendedor deve ser exibida na tela do Checkout.
</div>

Após executar todas as etapas acima descritas, o campo **Código do Vendedor** estará disponível na tela do Checkout.

![Código do vendedor](//images.ctfassets.net/alneenqid6w5/kWi3gE5Q9gyHP2pa8XFpv/c44bb28d5954f7f015da9feb751dc8f4/Checkout_UI_-_PT_2.png)
