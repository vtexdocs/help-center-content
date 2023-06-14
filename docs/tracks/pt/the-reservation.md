---
title: 'A reserva'
id: 6axzVCJECyHPGHzYjWDR52
status: CHANGED
createdAt: 2019-11-14T14:40:00.695Z
updatedAt: 2020-11-27T19:40:09.586Z
publishedAt: 2020-02-13T15:02:21.694Z
firstPublishedAt: 2019-11-18T12:20:12.356Z
contentType: trackArticle
productTeam: Post-purchase
slug: a-reserva
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugPT: pedidos
---

Depois que um pedido é finalizado, precisamos garantir que os itens do carrinho desse pedido não estarão mais disponíveis para compra em sua loja.

É aí que entra o conceito de __reserva__.

A reserva conecta o módulo de logística ao módulo de pedidos. Ela impede que um mesmo item seja comprado mais de uma vez. 

## Como a reserva funciona

<div class="alert alert-warning">
Produtos apenas inseridos no carrinho <strong>não</strong> geram reserva ou prioridade. Uma reserva é feita apenas se um pedido for <strong>finalizado</strong>.
</div>  


Este é o fluxo da reserva na VTEX: 

 1. No momento em que o cliente finaliza a compra, os itens comprados passam para o status `Reserva autorizada` no estoque. Aqui, indica-se que os itens não vão ser vendidos mais de uma vez, mas eles ainda não são retirados do estoque: essa reserva vai cair se o pagamento não for aprovado dentro do prazo de validade da reserva. Entenda como esse prazo é definido no artigo [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona).      

 2. Após o pagamento ser confirmado, o status dos itens muda para `Reserva confirmada`. Agora, a reserva não tem mais prazo de validade. Mas a compra ainda pode ser cancelada e, com isso, os itens ainda podem voltar ao status disponível.  
 
 3. Finalmente, uma vez que o pedido está na etapa de preparo para a entrega, os itens passam para o status `Reserva reconhecida`. Esse status indica que o item já não existe mais no estoque físico.      

![reservation pt](//images.ctfassets.net/alneenqid6w5/7nDqT6kSvWTESRqZLzZutZ/9009856b729712a613d4d6c36612fd9a/reservation_pt.png)

<div class="alert alert-warning">
A VTEX não desconta automaticamente os itens dos estoques, mesmo depois que eles passam para o status <code>Reserva reconhecida</code>. Os itens comprados continuarão nesse status até que o ERP ou o lojista realizem a baixa no estoque.
</div>
