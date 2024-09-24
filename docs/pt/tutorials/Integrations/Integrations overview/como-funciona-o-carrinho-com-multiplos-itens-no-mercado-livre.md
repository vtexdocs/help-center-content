---
title: 'Como funciona o carrinho com múltiplos itens no Mercado Livre?'
id: 4dC1deB8bY260W0Ge4ycOq
status: PUBLISHED
createdAt: 2019-01-24T20:45:36.404Z
updatedAt: 2019-12-31T15:26:21.601Z
publishedAt: 2019-12-31T15:26:21.601Z
firstPublishedAt: 2019-01-24T22:08:07.847Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: how-does-the-cart-with-multiple-items-work-in-mercado-livre
locale: pt
legacySlug: como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

O Mercado Livre realizou uma atualização que permite a inclusão de mais de um item diferente no carrinho. O chamado __carrinho com múltiplos itens__ trouxe uma nova lógica de tratamento da identificação de pedidos e produtos, o que fez com que fosse necessário mudar a forma como a VTEX trabalha com esses dados.

## Como funciona no Mercado Livre

Com a nova funcionalidade, o Mercado Livre passou a exibir apenas um ID para o pedido, independente da quantidade de produtos adicionados no carrinho. No entanto, o back-end não trabalha com esse dado, atribuindo IDs diferentes para cada item, além de um ID único para a entrega. 

Isso significa que o código único de identificação do pedido só é exibido na tela do usuário final e não faz parte dos dados que são compartilhados com outros sistemas (como a plataforma VTEX).

## Como funciona na VTEX

O Mercado Livre envia para a VTEX os IDs processados no back-end: o da entrega e os indiviuais de cada item do pedido. Como o ID único do pedido não é enviado para nossa plataforma, foi preciso fazer uma mudança em nossa integração com o Mercado Livre.

Em vez de usar os IDs de cada item (o que geraria pedidos separados em nosso sistema), invertemos a lógica e passamos a considerar o ID de entrega para identificar o pedido como um todo. Assim, a integração consegue trabalhar com apenas o código da entrega (shipment_Id), o único fornecido pelo Mercado Livre que é compartilhado por todos os produtos de um mesmo pedido.

Você pode encontrar os dois IDs através do relatório enviado a partir do painel de integrações no Admin da VTEX.

![Pedidos Mercado Livre](//images.ctfassets.net/alneenqid6w5/2NFqrrWGlqQMYSOugYo8kQ/deba1c9f1ffb01e0db3f2874fb7ee8a3/Pedidos_Mercado_Livre.png)

>⚠️ Essa lógica de funcionamento se aplica a todos os tipos de entrega, com exceção daqueles que incluem pickup points. Nesses casos, a plataforma continua a utilizar o ID antigo.
