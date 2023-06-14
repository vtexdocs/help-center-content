---
title: Por que meu pedido foi cancelado?
id: frequentlyAskedQuestions_493
status: PUBLISHED
createdAt: 2017-04-27T22:34:39.200Z
updatedAt: 2023-03-31T15:02:05.031Z
publishedAt: 2023-03-31T15:02:05.031Z
firstPublishedAt: 2017-04-27T23:02:22.347Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-meu-pedido-foi-cancelado
legacySlug: por-que-meu-pedido-foi-cancelado
---

Para identificar o motivo de cancelamento, é preciso verificar todas as comunicações realizadas entre as integrações de pagamento. Isto porque, para uma compra ser faturada, ela passa por diversas etapas que podem provocar o cancelamento.

O Smart Checkout suporta o recurso "Pre-Auth" de alguns adquirentes. Ou seja, ainda no ambiente do checkout, a plataforma faz a validação de dados do cartão. Caso exista um problema, o usuário é notificado para que possa mudar de meio de pagamento e o lojista não perca a venda. 

Para não haver perda de tempo, é criado um pedido. No caso de negação, essa transação é cancelada automaticamente.

Veja a seguir como identificar o motivo de cancelamentos.

## Verifique informações sobre o pagamento

Em seu Admin VTEX,em  **Pedidos > Transações**, ficam registradas todas as interações tanto com a operadora/gateway de pagamento quanto com o anti fraude. Esses dois agentes são responsáveis pela maioria dos cancelamentos realizados. 

Sempre que um cancelamento é feito, o agente responsável loga nos eventos da transação do pedido uma mensagem identificando o motivo da ação. Veja aqui o passo a passo de [como verificar as transações](https://help.vtex.com/pt/tutorial/como-visualizar-detalhes-do-pedido/).

## Verifique as interações do pedido

No módulo **Pedidos**, é possível analisar a origem do cancelamento do pedido. Isso significa que é possível verificar se o cancelamento foi feito pelo marketplace ou pela própria loja.

Para ver as interações de um pedido, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido desejado, acessando a [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. Na seção **Histórico do pedido**, clique no botão `Ver interações`.

### Cancelamento pelo marketplace

É possível identificar nas interações do pedido se o cancelamento foi feito pelo marketplace através da chave que foi utilizada na solicitação de cancelamento (`Cancel requested`), onde é exibida a origem da chamada:

`vtexappkey-nomedomarketplace-keydomktp`

Quando um pedido não é cancelado pelo marketplace, ou será exibido o nome do usuário que realizou o `Cancel Requested`, ou a chave da integração com a VTEX (`Cancel requested by vtexappkey-appvtex`).

### Cancelamento pela loja

No módulo **Pedidos**, os usuários da loja podem realizar o cancelamento manual de um pedido e, a qualquer momento, o ERP pode enviar um pedido de cancelamento. Além disso, é possível que o usuário solicite o cancelamento do pedido, para aprovação da loja, no status `Carência para Cancelamento`.

Nesses casos, primeiro o pedido fica com status `Cancelamento Solicitado` e após uma aprovação, ou nova solicitação de cancelamento pelos usuários da loja, o status passa para `Cancelado`. 

Todas essas alterações no pedido podem ser visualizadas nas suas interações na [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
