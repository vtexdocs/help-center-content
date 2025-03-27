---
title: 'Marketplace: melhorias no módulo SKUs Recebidos'
id: 5AY73ocF0evsh3yzY6AMX6
status: PUBLISHED
createdAt: 2020-10-26T23:30:54.501Z
updatedAt: 2020-11-11T15:16:04.418Z
publishedAt: 2020-11-11T15:16:04.418Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-10-26-marketplace-improvements-on-received-skus
locale: pt
legacySlug: marketplace-melhorias-no-modulo-skus-recebidos
announcementImageID: ''
announcementSynopsisPT: 'Marketplace: Bloqueie SKUs de serem reenviados pelo seller, e também configure aprovação automática'
---

O painel do SKUs Recebidos é onde marketplaces avaliam as sugestões enviadas por sellers, para que sejam aprovados e incorporados ao seu catálogo, ou recusados. 

Agora, ao recusar uma sugestão, o marketplace bloqueia esse SKU de ser reenviado pelo Seller. Também disponibilizamos APIs para marketplaces criarem regras de aprovação automática e manual de SKUs recebidos. 

## SKUs Recebidos: bloqueie o recebimento de determinados SKUs 

Antes, recusar uma sugestão de SKU do seller não significava bloquear seu recebimento de forma permanente. O marketplace precisava indicar ao seller o recebimento indevido desses SKUs, pois caso fossem atualizados pelo seller, eles retornariam à listagem de SKUs recebidos. Consequentemente, era necessário recusá-los mais uma vez. 

A partir do dia 27/10/2020, recusar um SKU recebido significa bloquear seu envio pelo Seller. Isso significa que Sellers não poderão enviar todo o seu catálogo de uma vez, sempre que notificarem atualizações, ou SKUs novos. 

Vale notar que essa ação pode ser desfeita. É possível aprovar um SKU bloqueado por API REST, se o marketplace deseja voltar a recebê-lo como sugestão do seller. Para saber mais sobre a aprovação de SKUs, acesse nossa documentação da API no Developer Portal.

Não é preciso realizar nenhuma configuração para ativar essa funcionalidade, ela será instalada de forma automática na plataforma VTEX. Para saber mais sobre o bloqueio de SKUs, no painel do módulo SKUs recebidos, confira nosso artigo sobre [Catalogação manual de SKUs](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396).

![PT SKUs Recebidos Announcement](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2020-10-26-marketplace-melhorias-no-modulo-skus-recebidos_1.jpg)

## Configurações de aprovação automática de SKUs

Também desenvolvemos uma nova API para configurar regras de aprovação de SKUs recebidos.

Antes, não era possível configurar aprovação automática de SKUs  para agilizar o processo de seu marketplace. Agora, desenvolvemos 7 endpoints diferentes para que você gerencie as configurações de aprovação de SKUs no módulo SKUs Recebidos.

As rotas de API REST permitem habilitar aprovação automática de SKUs para um seller específico ou para todo o marketplace.

Por enquanto essa funcionalidade só está disponível através de API. Confira nossa documentação da [API de Configurações de Aprovação](https://developers.vtex.com/vtex-developer-docs/reference/sku-approval-settings) para saber mais.

