---
title: 'Como funciona a assinatura'
id: frequentlyAskedQuestions_4453
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.886Z
updatedAt: 2025-02-19T20:14:45.602Z
publishedAt: 2025-02-19T20:14:45.602Z
firstPublishedAt: 2019-01-24T22:14:56.290Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-subscriptions-work
legacySlug: como-funciona-a-assinatura
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

O **Sistema de Assinaturas** é uma aplicação desenvolvida pela VTEX para facilitar as vendas recorrentes. Funciona como um agendador automático, realizando uma recompra na frequência solicitada pelo cliente da loja.

Seu cliente indica a periodicidade que deseja repetir a compra de um determinado item, e o sistema refaz o pedido de compra. Essa compra é feita automaticamente, a cada período agendado, com as mesmas características configuradas no pedido original. A assinatura é uma forma simples de poupar o tempo de seu cliente, trazendo mais um fluxo programado de vendas para a sua loja. 

A assinatura na VTEX consiste em uma lista de SKUs vinculada a uma certa configuração de compra. Todas as operações de gerenciamento giram em torno dessa entidade Assinatura, que contém toda a informação necessária para gerar um pedido recorrente, como:

- Perfil de usuário
- Endereço
- Forma de pagamento
- Frequência
- Data de início do pedido de assinatura

## Como o cliente da sua loja cria um pedido com assinatura

Ao finalizar a [configuração da funcionalidade Assinatura](/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj), ela já estará habilitada para que o cliente da sua loja gere um pedido com assinatura. Existem duas formas do seu cliente criar uma assinatura:

### Adicionar produtos para assinatura durante o checkout

Ao adicionar um produto habilitado para Assinatura, durante o checkout, será exibido um seletor dropdown para cada produto, com as opções de Assinaturas associadas a esse SKU.

O seu cliente deverá selecionar a opção de *Assinatura* e selecionar qual a frequência da assinatura. Vale notar que esse fluxo pode ser customizado em alguns casos, dependendo da necessidade de negócio. 

Após selecionar os detalhes da assinatura, o cliente seguirá com o fluxo normal de compra. Deverá inserir o endereço de entrega e utilizar um dos [**meios de pagamento habilitados para o Sistema de Assinatura**](/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj). Após a aprovação do pagamento, a assinatura será ativada.

### Criar uma nova assinatura na página “Minha Conta”

O cliente da sua loja tem acesso a uma tela de criação de assinaturas, na página **Minha Conta**. Esse espaço permite configurar uma nova assinatura sem precisar passar pelo checkout e realizar um pedido. 

Para isso, basta entrar na página **Minha Conta** no site da sua loja, acessar a seção **Assinaturas** e clicar no botão **Nova assinatura**.  Uma vez cadastrados os meios de pagamento e um endereço de entrega, basta clicar no botão **Assinar** para ativar a assinatura dos produtos selecionados.  

## Como o cliente da sua loja visualiza suas Assinaturas

> ℹ️ Em [Minha Conta](/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.

Após a finalização do pedido com Assinatura, o seu cliente visualiza na página **Minha Conta** a seção **Assinaturas**. Nessa seção, ele também pode encontrar a lista de assinaturas realizadas com os detalhes e estado individual. Seu cliente também receberá por e-mail uma confirmação da Assinatura e do pedido gerado.

A comunicação com seu cliente sobre a assinatura será feita pelo módulo **Central de Mensagens**. Confira nosso artigo sobre [Emails Transacionais para Assinaturas](/pt/tutorial/e-mails-transacionais-para-pedidos-de-assinatura--2NYHqHMRqZ43Cn6s84ZCB5). 

### Detalhamento de assinaturas

A nossa página de detalhamento de assinatura foi remodelada pensando em melhorar a experiência do consumidor ao reduzir o tempo para localizar informações e realizar tarefas. Além disso, contamos com a nova funcionalidade de adicionar itens a uma assinatura existente.

### Barra de ações

Adicionamos uma barra de ações para melhorar a comunicação com o usuário sobre o que precisa ser feito ou comunicar eventos importantes sobre a sua assinatura. Nessa seção, o seu cliente poderá:

-   Editar a frequência da assinatura.
-   Alterar o período da assinatura.
-   Editar o dia de cobrança.
-   Editar o endereço cadastrado na assinatura.
-   Pausar a assinatura.
-   Cancelar a assinatura.
-   Alterar o método de pagamento utilizado na cobrança recorrente da assinatura.

### Adicionar produto à sua assinatura

Agora é possível adicionar um novo item à sua assinatura através da busca dos produtos disponíveis na loja.
