---
title: 'Inventário regionalizado no Magalu disponível em open beta'
createdAt: 2026-08-31T12:00:00.000Z
updatedAt: 2026-08-31T12:00:00.000Z
contentType: updates
productTeam: Channels
slugEN: 2026-08-28-regionalized-inventory-available-for-magalu
locale: pt
announcementSynopsisPT: 'Lojistas com arquitetura de franquia podem vender o estoque regionalizado no Magalu, com pedidos cumpridos pelas próprias lojas.'
tags:
  - Nova funcionalidade
  - Marketplace
---

Lojistas com [arquitetura de franquia](/pt/docs/tutorials/o-que-e-conta-franquia) na VTEX podem vender o estoque regionalizado das contas franquia no Magalu. A funcionalidade está disponível em **open beta**, com monitoramento ativo, para identificar e corrigir cenários pendentes antes da disponibilidade geral.

## O que mudou?

Até agora, a integração com o Magalu publicava apenas o estoque da conta principal. O estoque das contas franquia não era enviado ao marketplace, as lojas da rede não vendiam nesse canal e os pedidos não eram roteados para elas.

Com esta entrega, o estoque das contas franquia passa a integrar o Magalu e os [pedidos em cadeia](/pt/docs/tutorials/multilevel-omnichannel-inventory) podem ser cumpridos pelas próprias franquias. A configuração por integração, incluindo a tolerância a divergência de preço, fica no card de configuração da loja no canal.

Os principais benefícios são:

- O estoque das [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia) passa a ser considerado na publicação para o Magalu, junto com o estoque da conta principal.
- Os pedidos do Magalu podem ser roteados para a franquia responsável pelo fulfillment, no fluxo de pedido em cadeia.
- No card da integração Magalu, a loja configura a tolerância a divergência de preço daquele canal. Pedidos com diferença de valor dentro da faixa configurada são processados; pedidos fora da faixa são bloqueados.

## O que precisa ser feito?

A funcionalidade está em open beta. Para usá-la, a loja precisa ter arquitetura de franquia e a [integração com o Magalu](/pt/docs/tracks/magazine-luiza-marketplace) ativa na conta principal.

Para seguir o passo a passo da configuração, consulte [Inventário regionalizado no Magalu (Beta)](/pt/docs/tutorials/regionalized-inventory-magalu).
