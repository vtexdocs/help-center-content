---
title: 'Funcionalidades de televendas'
id: UqhiccIRIK2KD0OqkzJaS
status: PUBLISHED
createdAt: 2021-05-13T18:26:51.189Z
updatedAt: 2025-01-16T18:40:14.359Z
publishedAt: 2025-01-16T18:40:14.359Z
firstPublishedAt: 2021-05-17T12:07:02.897Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: telesales-features
legacySlug: funcionalidades-de-televendas
locale: pt
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

Os recursos de televendas permitem que a equipe de atendimento da sua loja tenha autonomia para apoiar os clientes na compra, no acompanhamento e na alteração de pedidos e assinaturas.

As funcionalidades de televendas disponíveis na VTEX são:

- [Toolbar de televendas](#toolbar-de-televendas)
    - [Minha Conta](#minha-conta)
    - [Comprar em nome do cliente](#comprar-em-nome-do-cliente)
    - [Assinaturas](#assinaturas)
- [Carrinho Compartilhável](#carrinho-compartilhavel)
- [Inserir preço manual](#inserir-preco-manual)
- [Gerenciamento de pedidos](#gerenciamento-de-pedidos)

> ⚠️ Para ter acesso à toolbar de televendas, à inserção de preço manual e à página [**Todos os pedidos**](/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi), o usuário precisa ser cadastrado na loja com o [perfil de acesso Call Center operator](/pt/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227).

É necessário configurar as funcionalidades listadas acima previamente, seguindo os passos do tutorial [Como configurar as funcionalidades de televendas](/pt/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).

Assim que fizer login com o email cadastrado nesse perfil, o operador de televendas será redirecionado para a página inicial da loja.

## Toolbar de televendas

A Toolbar de televendas é uma barra superior exibida no site da loja para usuários com o perfil Call Center operator. Por meio dela, operadores de televendas podem navegar na loja, realizar compras e gerir pedidos em nome dos clientes.

Para saber como utilizar esse recurso, confira o tutorial [Toolbar de Televendas](/pt/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500).

> ℹ️ Um caso de uso do televendas é  importar pedidos de outras plataformas para o módulo Pedidos da VTEX. Para isso, você pode associar uma [política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) específica com o pagamento por [promissória](/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ) (método de pagamento aprovado imediatamente e manualmente pelo próprio operador). 

### Minha Conta

Ao navegar na loja em nome do cliente por meio da toolbar, o operador de televendas pode acessar a página **Minha Conta** para realizar a gestão de dados pessoais, endereços, pedidos, cartões e assinaturas de forma simplificada em uma única página.

Para saber mais, leia o tutorial [Como funciona a página Minha Conta](/pt/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh).

### Comprar em nome do cliente

Para realizar um pedido em nome do cliente, o operador de televendas deve entrar na loja como cliente a partir da toolbar e seguir o fluxo de compra, ou seja, incluir produtos no carrinho, preencher as informações de entrega e pagamento e concluir a compra.

Quando o operador de televendas fecha um pedido em nome do cliente, o email do operador é registrado nas informações do pedido, que podem ser visualizadas na página **Todos os pedidos**.

### Assinaturas

No módulo de assinaturas, o operador de televendas pode criar novas assinaturas ou editar assinaturas existentes em nome do cliente. Além disso, pode modificar os produtos assinados e as quantidades, a data e frequência do recebimento, o método de pagamento e o endereço de entrega.

Para entrar no menu de assinaturas, siga os passos abaixo:
1. No Admin VTEX, acesse **Pedidos > Assinaturas > Dashboards**, ou digite **Dashboards** na barra de busca no topo da página.

2. Clique na aba **Assinantes**.

3. Escolha o cliente desejado e clique em `Personificar`.

4. Na toolbar, clique em `Entrar como cliente` e faça o login. Um novo menu de assinaturas será aberto.

5. No menu **Assinaturas**, você pode clicar em:
- `Nova assinatura` para criar uma assinatura.
- `Ver detalhes` para editar uma assinatura existente.

> ℹ️ Para saber mais sobre assinaturas, leia o artigo [Como funciona a assinatura](/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).

## Carrinho Compartilhável

Com o Carrinho Compartilhável, o operador de televendas pode incluir os produtos desejados pelo cliente no carrinho e compartilhar o link do carrinho preenchido para que o cliente possa finalizar a compra.

Nesse caso, o email do operador não é registrado nas informações do pedido.

Para utilizar esse recurso, é necessário que a loja possua o aplicativo [Carrinho Compartilhável (Social Selling)](/pt/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg) instalado e ativado.

Leia o artigo [Como usar o app Carrinho Compartilhável](/pt/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) para saber mais.

## Inserir preço manual

O operador de televendas pode alterar o preço de produtos no carrinho de compras, seja ao comprar em nome do cliente ou ao criar um carrinho para compartilhar posteriormente.

Para isso, é necessário que a funcionalidade de preço manual tenha sido habilitada pelos desenvolvedores da loja por meio da [API de Checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

Para modificar o preço, o operador deve clicar duas vezes no preço exibido no carrinho e inserir qualquer outro valor. Não há restrições sobre aumento e redução de preço.

Após fechar o pedido, o preço manual precisa ser aprovado pelo administrador da loja ou por um usuário com permissão no sistema de [Autorização de Pedidos](/pt/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn). Uma vez validado o preço manual inserido, o pedido segue o fluxo de faturamento.

## Gerenciamento de pedidos

Usuários com o perfil de Call Center operator podem visualizar, acompanhar e realizar alterações nos pedidos realizados na loja a partir da visão do Admin, na página **Pedidos > Todos os pedidos**.

Leia o tutorial sobre a [Estrutura do Gerenciamento de pedidos](/pt/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A#todos-os-pedidos) para saber mais.

Para entender as principais funcionalidades da página **Todos os pedidos**, confira os artigos:

* [Alterar itens do pedido](/pt/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190).
* [Cancelar pedido](/pt/tutorial/como-cancelar-pedido--tutorials_186).
* [Devolução de itens do pedido](/pt/tutorial/como-fazer-a-devolucao-de-itens--tutorials_191).
* [Verificar detalhes de erros nos pedidos](/pt/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718).
