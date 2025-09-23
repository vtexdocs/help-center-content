---
title: 'Nova funcionalidade: opt-in de seller em promoções'
id: 1qatANjT2sZnpaYqSdHzVl
status: PUBLISHED
createdAt: 2025-09-22T11:32:44.398Z
updatedAt: 2025-09-22T19:38:42.292Z
publishedAt: 2025-09-22T19:38:42.292Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-22-new-feature-seller-opt-in-for-promotions
locale: pt
legacySlug: nova-funcionalidade-opt-in-de-seller-em-promocoes
announcementImageID: 'undefined'
announcementSynopsisPT: 'Nova funcionalidade permite inclusão e exclusão de sellers em promoções via API.'
---

A VTEX está disponibilizando a nova funcionalidade Seller Opt-in Promotions, que permite aos sellers escolherem se desejam participar de promoções no marketplace. Com essa mudança, os próprios sellers passam a ter autonomia para definir seu envolvimento, com mais controle sobre as campanhas promocionais.

## Por que fizemos essa mudança?
Antes, a associação de sellers às promoções no Admin VTEX era feita apenas pelos lojista e não permitia que os próprios sellers controlassem sua participação. Agora, com a funcionalidade Seller Opt-in Promotions, os sellers têm autonomia para se incluir ou se excluir das promoções via API, utilizando o endpoint `Seller opt-in or opt-out`.

A seguir, veja o que muda com a nova funcionalidade:

- A inclusão ou remoção de sellers em promoções deve ser feita exclusivamente via API, por meio do endpoint [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt).
- No Admin, ainda é possível criar e visualizar promoções, mas a edição da lista de sellers participantes deve ser realizada apenas via API.
- Se forem enviados IDs de sellers inválidos, a promoção será criada, mas não terá efeito, pois estará associada a sellers inexistentes.

## O que precisa ser feito?
Nenhuma ação é necessária. A funcionalidade será disponibilizada automaticamente em todas as contas VTEX a partir de 22/09/2025.

Para mais informações, acesse o artigo [Seller Opt-in](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).
