---
title: 'O pedido da minha loja foi cancelado'
id: 6qOCSBno1vS9TmHWWveOc
status: PUBLISHED
createdAt: 2025-02-04T13:04:34.645Z
updatedAt: 2025-02-04T13:30:15.393Z
publishedAt: 2025-02-04T13:30:15.393Z
firstPublishedAt: 2025-02-04T13:30:15.393Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: my-store-order-was-canceled
legacySlug: o-pedido-da-minha-loja-foi-cancelado
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Pedidos
  - Status do pedido
  - Cancelamento
---

Após um pedido ser realizado, ele pode ser cancelado antes de completar o fluxo esperado. Para identificar o motivo de cancelamento, é preciso verificar todas as comunicações realizadas entre as integrações de pagamento. Isto porque, para uma compra ser faturada, ela passa por diversas etapas que podem provocar o cancelamento.

O Smart Checkout suporta o recurso "Pre-Auth" de alguns adquirentes. Ou seja, ainda no ambiente do checkout, a plataforma faz a validação de dados do cartão. Caso exista um problema, o usuário é notificado para que possa mudar de meio de pagamento e o lojista não perca a venda.

Neste processo, é criado um pedido. No caso de negação por parte da operadora, essa transação é cancelada automaticamente.

## Solução

Para identificar o motivo do cancelamento:

- [Verifique as interações do pagamento](#verifique-as-interações-do-pagamento)
- [Verifique as interações do pedido](#verifique-as-interações-do-pedido)

### Verifique as interações do pagamento

No Admin VTEX, em **Pedidos > Transações**, é onde ficam registradas todas as interações do pagamento, tanto com a operadora/gateway de pagamento quanto com o anti fraude. Esses agentes são responsáveis pela maioria dos cancelamentos realizados.

Quando ocorre um cancelamento, o agente responsável registra nos eventos da transação do pedido uma mensagem identificando o motivo da ação. Para saber como consultar esses eventos, veja [Visualizar detalhes da transação em Pedidos](https://help.vtex.com/pt/tutorial/como-visualizar-detalhes-do-pedido/).

### Verifique as interações do pedido

No módulo **Pedidos** do Admin VTEX, é possível analisar a origem do cancelamento do pedido, isto é, se o cancelamento foi realizado pelo marketplace ou pela própria loja.

Para ver as interações de um pedido, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Busque pelo pedido utilizando a barra de busca e filtros disponíveis em **Todos os pedidos**. 
3. Clique no pedido desejado, acessando a [Página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
4. Na seção **Histórico do pedido**, clique em `Ver interações`.

#### Cancelamento pelo marketplace

Se o cancelamento foi realizado pelo marketplace, é possível identificar nas interações através da chave que foi utilizada na solicitação de cancelamento (`Cancel requested`), como o exemplo a seguir: `vtexappkey-nomedomarketplace-keydomktp`.

Quando um pedido não é cancelado pelo marketplace, será exibido o nome do usuário que realizou o `Cancel requested` ou a chave da integração com a VTEX (`Cancel requested by vtexappkey-appvtex`).

#### Cancelamento pela loja

No módulo **Pedidos** do Admin VTEX, os pedidos podem ser cancelados manualmente ou por meio de uma solicitação de cancelamento enviada pelo ERP.

Além disso, o cliente pode solicitar o cancelamento do pedido para a loja enquanto o mesmo estiver no status `Carência para Cancelamento`. Neste caso, primeiro o pedido fica com status `Cancelamento Solicitado` e, após aprovação, o status passa para `Cancelado`.

Todas as alterações no pedido podem ser visualizadas na [Página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).

> ⚠️  Para pedidos com origem em um marketplace, mas que foram cancelados pela loja, a integração não notifica automaticamente o marketplace sobre o cancelamento. Nesses casos, **é necessário cancelar manualmente o pedido diretamente na interface do marketplace**.
