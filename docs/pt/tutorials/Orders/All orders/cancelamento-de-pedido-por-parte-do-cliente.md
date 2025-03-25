---
title: 'Cancelamento de pedido solicitado pelo cliente'
id: 3wEI6DUNtecooG2Ki4Akqo
status: PUBLISHED
createdAt: 2019-01-24T21:42:57.276Z
updatedAt: 2024-04-01T15:51:58.098Z
publishedAt: 2024-04-01T15:51:58.098Z
firstPublishedAt: 2019-01-24T21:42:57.707Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-cancellation-requested-by-the-customer
locale: pt
legacySlug: como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Existem cenários em que os clientes podem solicitar o cancelamento de um pedido. Pode ser o [cancelamento automático no período](https://help.vtex.com/pt/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo#cancelamento-no-prazo-de-carencia) de **carência para cancelamento,** ou, depois desse período, o [cancelamento aprovado pelo lojista](https://help.vtex.com/pt/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo#cancelamento-aprovado-pelo-lojista).

>❗ Uma vez que o pedido é cancelado, não é mais possível alterar o status do pedido.

>⚠️ Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

## Cancelamento no prazo de carência

Ocorre quando o cliente solicita cancelamento no [tempo carência](https://help.vtex.com/pt/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC). O pedido é cancelado automaticamente, sem a necessidade de autorização da loja. Até esse momento, seguindo o [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196), o lojista ainda não tomou nenhuma ação em relação àquele pedido.

* Essa ação é feita pelo cliente em __Meus pedidos__, ao clicar em `Solicitar cancelamento do pedido`.

>ℹ️ Quando o cliente solicita o cancelamento do pedido durante o prazo de carência, a notificação desta ação é enviada somente para o usuário com [perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) de Titular da conta (usuário master).

## Cancelamento aprovado pelo lojista

Ocorre quando o cliente solicita o cancelamento depois do período de carência, apresentando uma justificativa à loja. Nesse caso, o lojista precisa aprovar o cancelamento. Para isso, a plataforma apresenta a solicitação de cancelamento para a loja das seguintes formas:

* Na tela de detalhes do pedido, a loja recebe a solicitação de cancelamento com o motivo indicado pelo cliente, e o pedido passa a ter o status `Cancelamento solicitado`. 
* Por email enviado pela plataforma informando sobre o pedido de cancelamento. Essa é uma tarefa do [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do--tutorials_203) chamada `Cancelamento requisitado`. Com o VTEX DO, o lojista gerencia as solicitações de cancelamento que estão pendentes. 

O lojista deve aprovar ou rejeitar o pedido de cancelamento. Se o lojista não aprovar o cancelamento, recomendamos informar ao cliente sobre a impossibilidade do cancelamento do pedido.

Mesmo se o cancelamento solicitado pelo cliente for negado pelo lojista utilizando o [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do--7KMbRL4OslN8DTX9oiuCiu), é necessário que o lojista prossiga com o [faturamento](https://help.vtex.com/pt/tutorial/faturar-um-pedido--7p1h852V5t54KyscpgxE2v) do pedido, sendo isso que realmente faz o pedido seguir o seu fluxo.

>⚠️ Se a funcionalidade [Substituição de Pedidos](https://help.vtex.com/pt/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8#ativacao-da-funcionalidade) estiver ativada, os pedidos poderão ser alterados ou cancelados a qualquer momento, inclusive após o período de carência para cancelamento.

## Motivo do cancelamento

Ao cancelar o pedido, o consumidor pode informar o motivo do cancelamento. Esta configuração é customizada, tendo algumas opções como padrão. 

Para alterar as opções, realize os passos abaixo: 

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout**, ou digite *Checkout* na barra de busca no topo da página e e selecione *Configurações da loja / Storefront*.
2. No card do site desejado, clique no ícone engrenagem.
3. Clique na aba **Pedidos**.
4. Selecione a aba do idioma desejado.
5. Edite as opções disponíveis ou adicione uma nova opção, clicando em `Adicionar outr0 motivo`. 
6. Clique em **Salvar**.

## Artigos relacionados

- [Por que meu pedido foi cancelado?](https://help.vtex.com/pt/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493)
- [Configurar o tempo de carência para cancelamento do pedido](https://help.vtex.com/pt/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC)
- [Por que meu pedido foi cancelado na VTEX e não no marketplace?](https://help.vtex.com/pt/faq/por-que-meu-pedido-foi-cancelado-na-vtex-e-nao-no-marketplace--frequentlyAskedQuestions_678)
- [Substituição de pedidos](https://help.vtex.com/pt/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8)

