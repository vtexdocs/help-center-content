---
title: 'Introdução à VTEX'
id: 3QfoDZWg9YWl8lwS9MVrnU
status: PUBLISHED
createdAt: 2024-01-22T14:29:24.584Z
updatedAt: 2024-02-22T14:58:02.855Z
publishedAt: 2024-02-22T14:58:02.855Z
firstPublishedAt: 2024-02-22T13:59:50.803Z
contentType: trackArticle
productTeam: Others
slugEN: introduction-to-vtex
locale: pt
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugPT: trilha-da-loja-vtex
---

A [VTEX](https://vtex.com/br-pt/) é uma solução integrada de comércio global baseada em microsserviços, oferece marketplace de ponta a ponta, recursos nativos de gestão de pedidos (OMS) e tem um modelo composable commerce. Isso possibilita a lojas de diversos segmentos gerir operações com eficiência e escalabilidade, oferecendo aos seus clientes excelentes experiências de compra.

A imagem a seguir apresenta as soluções e possibilidades da VTEX, que serão abordadas ao longo desta trilha:

![vtex_composable_complete_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-store-overview/introducao-a-vtex_1.png)

>ℹ️ Além dos portais de documentação Help Center e [Developer Portal](https://developers.vtex.com/) e da [VTEX Community](https://community.vtex.com/), em nosso [site](https://vtex.com/br-pt/) disponibilizamos mais informações sobre a plataforma por meio de [demo videos](https://vtex.com/br-pt/resources-category/product-demo-videos-br/) (somente inglês) e [ebooks](https://vtex.com/br-pt/resources-category/ebooks-br/) criados por [parceiros](https://help.vtex.com/pt/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao). Também é possível conferir uma série de [vídeos de onboarding](https://sites.google.com/vtex.com.br/onboardingvtex/trilha) (somente português).

## Visão geral desta trilha

Esta trilha apresenta a jornada de uma loja VTEX desde as [configurações iniciais](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4EPwTXx5oFdSG1dA3zIchz) até o [go-live](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/6xYnNxDHUcY6FyChgziCoH). Mas antes de configurar os [módulos](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7) da plataforma, planejar as [integrações de backend](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) e escolher uma tecnologia de [frontend](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) para a construção da frente de loja, existe um passo anterior: definir o [tipo de conta e a arquitetura](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) que melhor atende às necessidades do negócio.

>⚠️ Cada operação de ecommerce possui suas particularidades e este conteúdo não busca traduzir todas as situações existentes. O objetivo é fornecer um modelo geral e apresentar de forma contextualizada os recursos e as possibilidades da plataforma VTEX.

A organização sequencial do conteúdo existe para fins didáticos e não significa que as etapas devam ser realizadas de forma sequencial, ou que a etapa anterior seja um bloqueio para a seguinte, pois algumas etapas podem ser executadas em paralelo, ao menos parcialmente. É o caso das integrações de backend, as configurações de alguns módulos e a implementação de frontend.

## Visão geral do Guia de onboarding

A **Trilha da loja VTEX** é a primeira das trilhas que compõem o **Guia de onboarding**. Após o go-live, existem diversas outras [soluções](https://help.vtex.com/pt/tracks/proximos-passos-apos-o-go-live--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm) e [configurações](https://help.vtex.com/pt/tracks/proximos-passos-apos-o-go-live--3J7WFZyvTcoiwkcIVFVhIS/V1fs7IkfYMfn91ZVHTLu4) na plataforma para diversificar as estratégias de venda da loja e expandir as operações do negócio. É sobre isso que se trata a segunda trilha, chamada [Próximos passos após o go-live](https://help.vtex.com/pt/tracks/proximos-passos-apos-o-go-live--3J7WFZyvTcoiwkcIVFVhIS/7bORBaAr4rIG3JgRi68jIK).

A terceira e última trilha do **Guia de onboarding** é chamada [Suporte na VTEX](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) e visa proporcionar aos nossos clientes a melhor experiência com a plataforma e nosso suporte. A trilha aborda o [funcionamento do Suporte](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/2Ik9CGbPeZIHHaYFsuyId3) e explica como abrir chamados para obter auxílio em questões [técnicas](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3thRAdTB3gGwTB0e1fVL3T), [financeiras](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3g2mhmPDx5GszNgLDICzsl) ou [comerciais](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ).

Feita esta apresentação, podemos começar a jornada.<br>
Desejamos as boas-vindas à VTEX.

