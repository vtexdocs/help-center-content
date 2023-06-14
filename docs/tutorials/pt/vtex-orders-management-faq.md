---
title: 'FAQ VTEX Gerenciamento de Pedidos'
id: 4vddUgU784wyGYQ64cw6I8
status: DRAFT
createdAt: 2018-07-20T17:27:48.286Z
updatedAt: 2022-01-21T19:44:39.976Z
publishedAt: 
firstPublishedAt: 2018-07-20T19:26:49.496Z
contentType: tutorial
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
slug: faq-vtex-gerenciamento-de-pedidos
locale: pt
legacySlug: faq-vtex-oms
subcategory: 3vhg10rO4MSmy06KeIYMIa
---

__1. Crédito - O consumidor compra na loja física (em outro PDV) e tem um crédito disponível, é possível integrar esse crédito para ele poder utilizar em todos os canais integrados ao Gerenciamento de Pedidos? Principalmente no e-commerce?__

__Resposta:__ Sim, é possível integrar para que o cliente possa utilizar o crédito em qualquer canal de venda que desejar (e-commerce, loja física ou televendas, por exemplo).

__2. No caso de uma venda feita através do pick-up point, o cliente comprou online e vai retirar o produto na loja junto com a NF. Nesse caso, o pedido feito pelo e-commerce, gerará uma DANFE?__

__Resposta:__ Depende do que o lojista quer. Por exemplo, alguns lojistas imprimem o cupom fiscal no PDV da loja outros implementam sem passar pelo PDV da loja (por regra de negócio, já que a loja tem preço diferente do site) e então imprimem DANFE ou NF-e como no processo já feito pelo warehouse. Lembrando que para transporte (ship from store) tem que ser NF-e para não ter problema fiscal no trânsito. Então para pick-up pode ser cupom, mas pra ship não.

 __2.1. O cliente irá retirar na loja o produto e ao mesmo tempo será emitido a DANFE sem passar pelo PDV da loja. É isso?__
  
  __Resposta:__ Exato, o processo foi desenhado para que o pedido chegue na loja e já seja feito pick&packing e emitindo a NF, aguardando a retirada pelo cliente. Não passará pelo PDV da loja no   momento da retirada por alguns motivos sistêmicos (PDV é Zanthus e não aceita preço diferente do da loja, e o site tem política de preços diferentes). Porém existe uma implicação fiscal neste     processo de imprimir a NF antes da retirada. Isso significa que fiscalmente o produto saiu e já não está mais em sua posse. Legalmente falando este item não pode estar mais dentro da loja. O     lojista necessita de uma licença em regime especial para fazer isso. Outro ponto: emissão de NF antecipada implica em recolhimento de impostos. Caso o cliente cancele a compra após 24h, os       impostos recolhidos não são estornados, tornando o processo fiscal mais complexo para controle destes impostos. São variáveis que podem mudar de negócio a negócio. Lembrando que pickup nao       deveria emitir cupom muito antes da retirada. Limite de 24hrs para uma nota emitida e produto ainda em loja (seria um cenário de venda a descoberto).

__3. Documentação para Pontos de Retirada (Pick-up Store)?__

__Resposta:__ [Configurar Pontos de Retirada](http://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points) ou [Configurar Seller White Label como Ponto de Retirada (Pickup Point)](http://help.vtex.com/pt/tutorial/configurar-seller-white-label-ponto-de-retirada-pickup-point)

__4. Quais meios de pagamento estão disponíveis para serem utilizados no InStore?__

__Resposta:__ Basta acessar a nossa documentação sobre o [VTEX inStore](https://help.vtex.com/pt/tutorial/vtex-instore) e buscar pelos meios de pagamento compatíveis.

__5. É possível registrar a vendedora que efetuou a venda via Prateleira Infinita, para a mesma receber sua comissão?__

__Resposta:__ Sim, é possível através do campo `código do vendedor` ou se tiver um login individualizado no InStore.

__6. É possível registrar/integrar uma venda realizada no PDV referente a uma Lista de Presente?__

__Resposta:__ A inserção do ID da lista quando o pedido for ser realizado no PDV de vocês em conjunto com a solução Omnichannel Fulfillment é o suficiente para, por parte da VTEX, identificarmos em que loja física foi comprado o item da lista e realizar a baixa. O que vocês precisarão definir é como o ID da lista será imputado no pedido, se será um campo que o vendedor poderá digitar após ter consultado no e-commerce ou se irão querer fazer uma integração em que o PDV leia e entenda as listas. De qualquer modo, essa integração não é algo que dependa da VTEX, pois temos as APIs abertas e vocês podem ficar livres para decidir como seguir.

__7. É possível que o checkout do InStore utilize o gateway de pagamento da plataforma VTEX?__

__Resposta:__ Não é possível, para pagamento por meio físico é preciso de adquirente.
