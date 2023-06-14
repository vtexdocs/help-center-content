---
title: 'Novas rotas de API para a aprovação automática de SKUs Recebidos'
id: 5hpcWmKE2CnTYtuDXriUzR
status: PUBLISHED
createdAt: 2020-12-18T15:52:36.273Z
updatedAt: 2020-12-18T22:15:29.469Z
publishedAt: 2020-12-18T22:15:29.469Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: novas-rotas-de-api-para-a-aprovacao-automatica-de-skus-recebidos
legacySlug: novas-rotas-de-api-para-a-aprovacao-automatica-de-skus-recebidos
announcementImageID: ''
announcementSynopsisPT: 'Marketplace: novas rotas de API para aprovação automática de SKUs recebidos'
---

O módulo de SKUs Recebidos é onde marketplaces avaliam as sugestões enviadas por sellers, para que sejam aprovadas e incorporadas ao seu catálogo, ou recusadas. Incluímos novas rotas em nossa API do SKUs Recebidos, para que operadores de marketplace tenham mais agilidade ao incorporar produtos de forma automática

## Mais possibilidades de aprovação automática de SKUs por API

Existem múltiplas possibilidades de [aprovação de SKUs recebidos](https://help.vtex.com/en/tutorial/manual-sku-cataloging--tutorials_396). Além dos endpoints que [ativam e desativam](https://help.vtex.com/announcements/marketplace-improvements-on-received-skus--5AY73ocF0evsh3yzY6AMX6)  a aprovação automática de SKUs em seu marketplace, acrescentamos novos endpoints à nossa API para configurar regras de aprovação. As configurações podem ser aplicadas a sellers específicos, ou a toda a conta do marketplace. A API permite configurar os seguintes campos:

- **Aprovação automática:** configure regras para a aprovação automática de SKUs.
- **Matcher:** cadastre um Matcher para seu marketplace, sendo ele o matcher da VTEX, ou externo.
- **Nota do Matcher:** configure uma pontuação específica para aprovação e rejeição de SKUs.
- **Mapeamento:** configure o mapeamento de especificações de produto, para tornar a aprovação mais criteriosa.

.
## O que preciso fazer?

Por enquanto, essas funcionalidades só estão disponíveis por meio de chamadas de API REST, para marketplaces VTEX. Se quiser implementar as novas configurações de aprovação automática em sua loja, confira nossa documentação no [Developer Portal](https://developers.vtex.com/vtex-developer-docs/changelog/new-marketplace-endpoints-available).

