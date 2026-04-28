---
title: 'Estoque'
id: 6oIxvsVDTtGpO7y6zwhGpb
status: PUBLISHED
createdAt: 2021-08-25T20:44:37.199Z
updatedAt: 2024-11-05T18:01:30.919Z
publishedAt: 2024-11-05T18:01:30.919Z
firstPublishedAt: 2021-08-26T16:51:57.435Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: warehouse
legacySlug: estoque
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Para a plataforma VTEX o estoque é a identificação do espaço físico de armazenamento das mercadorias vendidas pelo ecommerce. É a partir do estoque que é iniciada a logística. Os itens são armazenados, separados para entrega, passam pelas docas e então são entregues pelas transportadoras aos destinatários.

É importante atentar-se à etapa logística do estoque e como as configurações na plataforma VTEX influenciam na entrega de pedidos. A partir do estoque os pedidos saem para as docas, e nas docas são retirados pelas transportadoras. 

![EstrategiaEnvio](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/estoque_1.svg)

> ℹ️ A transportadora que realizará a entrega de um certo pedido é definida pela [política de envio](/pt/docs/tutorials/politica-de-envio). Para que uma transportadora seja escolhida para a realização da entrega do pedido, é preciso que a política de envio dessa transportadora satisfaça as condições necessárias para a entrega do pedido. A política de envio é vinculada ao estoque pela Doca.

Na plataforma VTEX, é possível cadastrar o nome do estoque, adicionar itens ao estoque, [configurar as docas](/pt/docs/tutorials/gerenciar-doca) que fazem o recebimento do estoque, configurar o tempo que o pedido leva para ser preparado para ser enviado à doca e o valor cobrado por esse manuseio. 

Com um estoque cadastrado os produtos que estão disponíveis naquele estoque podem ser inseridos. É possível ter vários estoques, e para cada um adicionar os seus itens específicos, para refletir na sua configuração logística. 

> ℹ️ Para adicionar itens ao seu estoque, os produtos precisam ser previamente cadastrados no [catálogo](/pt/docs/tracks/arquitetura-do-catalogo). Com isso, é possível associá-los ao estoque pelo [gerenciamento de inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).

A disponibilidade dos produtos da sua loja é dada por produtos cadastrados em diferentes estoques. O que significa que para o cliente final os itens que ficam disponíveis durante a navegação na loja são itens referentes a todos os estoques. Assim, existe a possibilidade de em uma única compra ter produtos de diferentes estoques da sua loja. Para o controle de movimentações dos estoques e  disponibilidade de itens da sua loja acesse o [Gerenciamento de Inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).

Saiba mais sobre como gerenciar componentes logísticos na plataforma VTEX: 

*  Para saber como realizar cadastro, mudança e acompanhamento dos estoques consulte o  [Gerenciamento de Estoque](/pt/docs/tutorials/gerenciar-estoque).
* Para acompanhar e gerenciar os itens do estoque consulte o [Gerenciamento de inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).
* Para configurar e gerenciar a relação entre os estoques e as retiradas dos pedidos consulte [Gerenciamento de docas.](/pt/docs/tutorials/gerenciar-doca)

> ⚠️ A ordem de cadastro sugerida na plataforma VTEX para o funcionamento esperado do sistema logístico é: <body> <ol> <li>[Política de Envio](/pt/docs/tutorials/politica-de-envio)</li> <li>[Doca](/pt/docs/tutorials/doca)</li> <li>Estoque</li> </ol> </body>
