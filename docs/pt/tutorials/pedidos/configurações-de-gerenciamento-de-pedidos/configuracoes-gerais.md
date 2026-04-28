---
title: 'Configurações Gerais dos pedidos'
id: tutorials_194
status: PUBLISHED
createdAt: 2017-04-27T22:14:49.644Z
updatedAt: 2024-07-02T19:07:22.178Z
publishedAt: 2024-07-02T19:07:22.178Z
firstPublishedAt: 2017-04-27T23:00:47.468Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: general-configurations-on-the-oms
legacySlug: configuracoes-gerais
locale: pt
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

É possível realizar configurações das condições do carrinho e dos fluxos dos pedidos. 

No Admin VTEX, acesse **Configurações da loja > Pedidos > Configurações**, ou digite *Pedidos* na barra de busca no topo da página e e selecione *Configurações da loja / Pedidos*. 

![configuracoes_pedidos_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/configurações-de-gerenciamento-de-pedidos/configuracoes-gerais_1.png)

## Carrinho

As seguintes configurações estão disponíveis:

### Pagamento

Essa configuração é uma flag que ativa ou inativa a exigência de uma autenticação do usuário para pagamentos autorizados automaticamente (definido no próprio meio de pagamento).

### Pedidos

- **Quantidade mínima de itens no carrinho**: _Padrão: 1 item._ Isto irá impedir que o cliente feche a compra sem que esteja com, no mínimo, o valor em quantidade de itens igual ao definido neste campo.
- **Casas decimais a serem consideradas**: _Padrão: 2 casas._ Isto irá fazer com que os preços dos produtos sejam ilustrados de acordo com a quantidade de casas decimais definidas. Não será feito arredondamento do valor.
- **Valor mínimo total do carrinho**: _Padrão: R$0,10._ Assim como a quantidade mínima de itens no carrinho,  isto irá impedir que o cliente feche a compra sem que esteja com, no mínimo, o valor em produtos igual ao definido neste campo. O valor mínimo do carrinho também inclui taxas e frete. É o valor final do pedido que está sendo contabilizado.

## Pedidos

Estas são as opções em Pedidos:

### Fluxo do pedido

- **Tempo de Carência para Cancelamento**:  _Padrão: 30 minutos._ O status de carência para cancelamento é o que permite com que o próprio cliente ou o lojista realize o cancelamento do pedido sem que haja a necessidade da confirmação do cancelamento pela loja. Esse tempo mínimo é recomendado pois evita processos manuais de estorno de pagamentos.
- **Tempo mínimo para reserva**: _Padrão: 0 dias._ Este é o período mínimo para que um item seja reservado após a finalização da compra. Por exemplo, se definido para um dia, a reserva dos produtos se mantém por um dia a mais, após o  fechamento da compra. O preenchimento desse campo auxulia em cenários com taxas de alto cancelamento de pedidos, em que a loja não queira comprometer seu estoque disponível imediatamente após cada pedido.
- **Nome do fluxo**: _Padrão: default._ Serão realizadas configurações neste campo quando o cliente já tiver um WMS desde seu ERP para atuar de forma diferente na captura dos pedidos.

### Substituição do pedido

Essa configuração é uma flag que ativa ou inativa a possibilidade dos clientes alterarem por conta própria os seus pedidos, sem a necessidade de entrar em contato com o suporte ou pedir manualmente o cancelamento do atual pedido. 

### Modo de visualização

- **Separar visualização por nome de host no Admin:** separa os pedidos por nome de conta na lista de pedidos. Caso a opção esteja marcada, apenas os pedidos referentes ao host serão demonstrados na sua respectiva account. Caso a opção esteja desmarcada, todos os pedidos cadastrados nos domínios da loja serão demonstrados em todas as accounts.
- **Separar visualização por nome de host no MyAccount:** separa os pedidos por nome de conta no [MyAccount](/pt/docs/tutorials/como-funciona-a-minha-conta), ou seja, na conta do comprador.

### Tipo de máscara de conversa

Essa configuração permite definir a configuração do Conversation Tracker. Ela altera a visualização dos emails dos seus clientes entre os modos **Complexa** ou **Simples**. Os modos alteram a forma como o email é entregue no fluxo do pedido, adicionando uma máscara.
- **Complexa:** cria um alias (e-mail alternativo) de forma não legível evitando assim a identificação do e-mail por sistemas externos.
- **Simples:** cria um alias de menor complexidade para o e-mail do usuário comprador, fazendo com que o e-mail continue legível na UI do OMS e quando visto no JSON do pedido. Se quiser saber mais, acesse nosso artigo sobre [como é feita a comunicação com o cliente durante o fluxo pedido](/pt/docs/tutorials/conversation-tracker).

