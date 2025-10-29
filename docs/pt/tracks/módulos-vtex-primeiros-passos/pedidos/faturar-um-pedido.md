---
title: 'Faturar um pedido'
id: 2WgQrlHTyVo4hLjhUs1LMT
status: PUBLISHED
createdAt: 2019-11-14T16:05:32.413Z
updatedAt: 2023-03-21T20:52:23.012Z
publishedAt: 2023-03-21T20:52:23.012Z
firstPublishedAt: 2019-11-18T12:20:37.060Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: invoicing-an-order
locale: pt
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
order: 6
---

Inserir a nota fiscal no pedido é um passo obrigatório para que seu status passe para `Faturado` - sinal de que o pedido foi finalizado com sucesso. Lembrando que uma vez que um pedido seja lido como faturado pelo sistema, esse status não pode ser alterado.

A fatura de um pedido pode ser feita de duas formas: 
- __Manualmente:__ pelo *Admin VTEX > Pedidos > Todos os Pedidos*, clicando no pedido e em seguida no botão `Faturar`. Saiba mais em [Faturar um pedido manualmente](/pt/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).
- __Via API:__ caso tenha integração com ERP utilizando a chamada [Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice).

## Mudando o status para Faturado

Somente após atingir o valor total do pedido o status será alterado para `faturado`, ou seja, quando o valor do pedido corresponde ao valor faturado.

Existem três cenários para o faturamento, dependendo da situação do pedido:

- __Pedido sem alteração:__ é preciso inserir uma nota fiscal com valor equivalente ao total do pedido.
- __Pedido com alteração > descontando o valor > seguido de fatura avulsa:__ é preciso inserir uma nota fiscal com o valor que resta depois da alteração. A nota pode ser [parcial](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), ou completa, se nela constar todo o valor restante após a alteração.
- __Pedido com fatura parcial > seguido de alteração com desconto:__ é preciso realizar uma [alteração](/pt/tutorial/changing-items-from-a-complete-order--tutorials_190), descontando o valor restante. Para isso, calcule o valor total, menos o valor da fatura parcial.

## Nota Fiscal

A nota fiscal exige atenção nos seguintes pontos:
- __Número da nota fiscal__: esse número deve ser único por nota fiscal por pedido, pois, caso sejam inseridas duas notas com o mesmo número, o sistema entenderá como uma alteração de nota.
- __Número de rastreio__: esse número, juntamente com a URL de rastreio, possibilita o acompanhamento da entrega pelo cliente, por meio dos e-mails que são enviados a cada alteração nesse rastreio.
- __Chave de acesso__: é a chave de acesso para consulta da NF-e (nota fiscal eletrônica) na internet. Este campo deve ser preenchido somente em casos de nota fiscal eletrônica.

Quando a URL e o código de rastreio estão inseridos, a cada atualização do status da entrega o cliente receberá um e-mail com a notificação de que a entrega está mais próxima.

O Conversation Tracker - sistema que gerencia os e-mails trocados com o cliente - depende da inserção de algum valor nesse campo. Caso você não disponha de um número de rastreamento, basta inserir um valor qualquer para ativar o sistema de notificação.

Também é possível inserir a nota fiscal pela [API de Orders](https://developers.vtex.com/vtex-rest-api/reference/invoice).

