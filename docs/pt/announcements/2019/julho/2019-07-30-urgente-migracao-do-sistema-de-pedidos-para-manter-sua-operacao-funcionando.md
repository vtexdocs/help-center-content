---
title: 'URGENTE - Migração do sistema de pedidos: para manter sua operação funcionando, verifique se sua integração está atualizada'
id: 34eloUZ70DPYIcJkAevq32
status: PUBLISHED
createdAt: 2019-07-30T16:56:23.667Z
updatedAt: 2020-04-16T00:19:33.201Z
publishedAt: 2020-04-16T00:19:33.201Z
contentType: updates
productTeam: Post-purchase
author: authors_31
slugEN: 2019-07-30-urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
locale: pt
legacySlug: urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
announcementImageID: 'undefined'
announcementSynopsisPT: 'Para manter sua operação funcionando, verifique se sua integração está atualizada'
---

No dia 13/06/19, [anunciamos a descontinuação das APIs de Feed V1 e V2](/pt/announcements/2019-06-12-descontinuacao-do-feed-v1-e-v2-do-modulo-de-gerenciamento-de-pedidos) e a obrigatoriedade de migração para a V3 deste serviço. Esta API é responsável pelo processo de integração de pedidos entre a VTEX e sistemas externos, como os ERPs.

__Mudamos a data final de migração e as lojas que ainda não se adaptaram à nova versão têm até o dia 12/08 para adequar sua integração__. Após esta data, não será mais possível consumir dados de pedidos utilizando as versões anteriores desta API, impactando seu processo de entrega de pedidos.

> ℹ️ As lojas que já estiverem usando a V3 da API de Feed não precisam realizar nehuma ação.

É muito importante que essa migração seja feita o quanto antes para que sua operação não fique em risco. Siga as instruções a seguir e solicite ao responsável pela sua integração que execute as mudanças necessárias.

## O que você precisa fazer?

Primeiramente, é necessário configurar o Feed v3 para consumir os dados da fila de pedidos. Acesse nosso artigo para [realizar a configuração do feed](/pt/tutorial/feed-v3-de-gerenciamento-de-pedidos--5qDml3cQypWDRTgw69s4C1).

Para entender mais sobre o funcionamento do feed, acesse nosso artigo sobre [como funciona o feed do módulo de Gerenciamento de pedidos](/pt/tutorial/como-funciona-o-feed-v3-do-modulo-de-gerenciamento-de-pedidos--5SzSKee2f666YCoWkm0eQC).
