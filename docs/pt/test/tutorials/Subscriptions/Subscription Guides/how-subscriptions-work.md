---
title: 'Como funciona a assinatura'
id: frequentlyAskedQuestions_4453
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.886Z
updatedAt: 2024-08-29T15:23:33.643Z
publishedAt: 2024-08-29T15:23:33.643Z
firstPublishedAt: 2019-01-24T22:14:56.290Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-funciona-a-assinatura
locale: pt
legacySlug: como-funciona-a-assinatura
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

Ao finalizar a [configuração da funcionalidade Assinatura](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj), ela já estará habilitada para que o cliente da sua loja gere um pedido com assinatura. Existem duas formas do seu cliente criar uma assinatura:

### Adicionar produtos para assinatura durante o checkout

Ao adicionar um produto habilitado para Assinatura, durante o checkout, será exibido um seletor dropdown para cada produto, com as opções de Assinaturas associadas a esse SKU.

O seu cliente deverá selecionar a opção de *Assinatura* e selecionar qual a frequência da assinatura. Vale notar que esse fluxo pode ser customizado em alguns casos, dependendo da necessidade de negócio. 

Após selecionar os detalhes da assinatura, o cliente seguirá com o fluxo normal de compra. Deverá inserir o endereço de entrega e utilizar um dos [**meios de pagamento habilitados para o Sistema de Assinatura**](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj). Após a aprovação do pagamento, a assinatura será ativada.

### Criar uma nova assinatura na página “Minha Conta”

O cliente da sua loja tem acesso a uma tela de criação de assinaturas, na página **Minha Conta**. Esse espaço permite configurar uma nova assinatura sem precisar passar pelo checkout e realizar um pedido. 

Para isso, basta entrar na página **Minha Conta** no site da sua loja, acessar a seção **Assinaturas** e clicar no botão **Nova assinatura**.  Uma vez cadastrados os meios de pagamento e um endereço de entrega, basta clicar no botão **Assinar** para ativar a assinatura dos produtos selecionados.  

## Como o cliente da sua loja visualiza suas Assinaturas

>ℹ️ Em [Minha Conta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.

Após a finalização do pedido com Assinatura, o seu cliente visualiza na página **Minha Conta** a seção **Assinaturas**. Nessa seção, ele também pode encontrar a lista de assinaturas realizadas com os detalhes e estado individual. Seu cliente também receberá por e-mail uma confirmação da Assinatura e do pedido gerado.

A comunicação com seu cliente sobre a assinatura será feita pelo módulo **Central de Mensagens**. Confira nosso artigo sobre [Emails Transacionais para Assinaturas](https://help.vtex.com/pt/tutorial/e-mails-transacionais-para-pedidos-de-assinatura--2NYHqHMRqZ43Cn6s84ZCB5). 

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

## Dúvidas frequentes sobre assinaturas 

1. **Posso ter mais de uma assinatura na minha loja?**
O número de assinaturas é ilimitado, tanto para sua loja quanto para seu cliente. Isso significa que não há limite máximo de Assinaturas que podem ser vendidas pela sua loja ou compradas pelo seu cliente. No entanto, é importante estar atento para as condições que são aplicadas nas Assinaturas.

2. **O meu cliente pode comprar pela Assinatura e retirar nas lojas ou em outros pontos de retirada?**
Sim, leia o artigo [Pontos de retirada para pedidos de assinatura (Beta)](https://help.vtex.com/pt/tutorial/pontos-de-retirada-para-pedidos-de-assinatura-beta--csIqB6iBh4QNIFdEj0nVv) para mais informações.

3. **O meu cliente pode cadastrar mais de um endereço na sua assinatura?**
Não é possível cadastrar mais de um endereço na mesma assinatura.

4. **Quais são o prazo da entrega e a regra de frete?**
O prazo da entrega e regra de frete são baseados nas políticas de entrega vigentes na loja a cada ciclo da assinatura.

5. **O meu cliente pode parcelar o pagamento do seu pedido de assinatura?**
Sim, desde que a loja realize a configuração para permitir o pagamento parcelado de pedidos de assinatura. Isso é feito pelo endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), marcando os campos `isMultipleInstallmentsEnabledOnCreation` e `isMultipleInstallmentsEnabledOnUpdate` como `true` (verdadeiro).

6. **O que acontece se o cartão do meu cliente for cancelado?**
A assinatura não será gerada devido a falta de possibilidade de pagamento.  

7. **Meu cliente pode solicitar uma entrega agendada para pedido de assinatura?**
Hoje não é possível solicitar uma entrega agendada para pedidos de assinatura. Esse cenário não é atendido para que o seu cliente não seja afetado negativamente, caso a configuração logística de sua loja mude. Contudo, seu cliente pode criar uma nova assinatura marcando a data futura que desejar para a primeira entrega.

8. **Como posso cancelar, pular ou pausar o pedido de assinatura do meu cliente?**
Hoje não é possível alterar a assinatura do seu cliente pelo Admin da VTEX. Só é possível pausar, cancelar ou pular um pedido de assinatura por meio de acesso ao Televendas, no painel de assinaturas do cliente (My Account do cliente), ou então via [API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

9. **É possível adicionar itens vindos de um seller ou marketplace em um pedido de assinatura?**
A assinatura pode ser criada com itens da própria loja, de sellers VTEX ou de sellers white label (conta franquia).

10. **Se o lojista criar uma regra para valor mínimo, essa regra poderá afetar as assinaturas?**
Sim, se o valor do pedido de assinatura estiver abaixo do limite definido pela configuração _Valor mínimo total do carrinho_. Note que nosso sistema de assinaturas não aceita ciclos, ou pedidos com um valor total de $0. 

11. **Se o preço de um SKU mudar, a assinatura do meu cliente será afetada?**
Sim, o preço que o cliente paga na assinatura é baseado no preço cadastrado para cada SKU. A assinatura do cliente não acompanha as condições de preço do primeiro pedido realizado. O pedido é realizado com os mesmos produtos do pedido original, mas o preço será calculado com base no que estiver cadastrado na hora do próximo ciclo do pedido.

12. **Qual o horário no qual os pedidos de assinatura são gerados?**
A criação de pedidos de assinatura ocorre entre 6:00 e 7:00 da manhã, com referência ao fuso horário do Brasil (GMT-3).

13. **A funcionalidade Assinaturas funciona com o Seller Portal?** Não, Assinaturas não funciona com o [Seller Portal](https://help.vtex.com/pt/tutorial/how-to-set-up-your-store-on-seller-portal).
