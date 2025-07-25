---
title: 'Introducción a VTEX'
id: 3QfoDZWg9YWl8lwS9MVrnU
status: PUBLISHED
createdAt: 2024-01-22T14:29:24.584Z
updatedAt: 2025-03-26T14:04:07.991Z
publishedAt: 2025-03-26T14:04:07.991Z
firstPublishedAt: 2024-02-22T13:59:50.803Z
contentType: trackArticle
productTeam: Others
slugEN: introduction-to-vtex
locale: es
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugES: serie-de-la-tienda-vtex
---

[VTEX](https://vtex.com/co-es/) es una solución de comercio global, totalmente integrada y basada en microservicios; ofrece marketplace de punta a punta, recursos nativos de gestión de pedidos (OMS) y un modelo composable commerce, lo que permite a tiendas de diferentes segmentos gestionar operaciones con eficiencia y escalabilidad, brindando a sus clientes excelentes experiencias de compra.

La imagen a continuación muestra las soluciones y posibilidades de VTEX, que se tratarán a lo largo de esta serie de artículos:

![vtex_composable_complete_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/vtex-store-overview/introduccion-a-vtex_1.png)

<div class="alert alert-info">
Además de los portales Help Center y <a href="https://developers.vtex.com/">Developer Portal</a> y <a href="https://community.vtex.com/">VTEX Community</a>, en nuestro <a href="https://vtex.com/co-es/">sitio web</a>ofrecemos más información sobre la plataforma a través de <a href="https://vtex.com/br-pt/resources-category/product-demo-videos-br/">videos explicativos</a> (solo en inglés) y <a href="https://vtex.com/br-pt/resources-category/ebooks-br/">ebooks</a> creados por nuestros <a href="https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#partners-de-implementacion">partners</a>. También ponemos a disposición una serie de <a href="https://sites.google.com/vtex.com.br/onboardingvtex/trilha">videos de onboarding</a> (solamente en portugués).
</div>

## Visión general de esta serie

Esta serie de artículos muestra la jornada de una tienda VTEX, desde la [configuración inicial](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4EPwTXx5oFdSG1dA3zIchz) hasta el [go live](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/6xYnNxDHUcY6FyChgziCoH). Antes de configurar los [módulos](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7) de la plataforma, planificar las [integraciones de backend](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) y elegir una tecnología de [frontend](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) para la construcción del storefront, hay un paso previo: definir el [tipo de cuenta y la arquitectura](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) que mejor se ajuste a las necesidades específicas del negocio.

<div class="alert alert-warning">
Cada operación de ecommerce tiene sus propias particularidades y este contenido no busca abarcar todas las situaciones existentes. El objetivo es ofrecer un modelo general y presentar de forma contextualizada los recursos y posibilidades de la plataforma VTEX.
</div>

La organización secuencial del contenido tiene un propósito didáctico y no implica necesariamente que las etapas deban llevarse a cabo en orden lineal o que la conclusión de una etapa sea un requisito para iniciar la siguiente. En algunos casos, las etapas pueden llevarse a cabo en paralelo, o al menos parcialmente. Es el caso de las integraciones del backend, las configuraciones de determinados módulos y la implementación del frontend.

## Visión general de la Guía de onboarding

La **Serie de la tienda VTEX** es la primera de las que componen la **Guía de onboarding**. Tras el go live, existen otras [soluciones](/es/tracks/proximos-pasos-tras-el-go-live--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm) y [configuraciones](/es/tracks/proximos-pasos-tras-el-go-live--3J7WFZyvTcoiwkcIVFVhIS/V1fs7IkfYMfn91ZVHTLu4) en la plataforma cuyo objetivo es diversificar las estrategias de venta de la tienda y expandir sus operaciones comerciales. De eso trata la segunda serie, llamada [Próximos pasos tras el go live](/es/tracks/proximos-pasos-tras-el-go-live--3J7WFZyvTcoiwkcIVFVhIS/7bORBaAr4rIG3JgRi68jIK).

La tercera y última ruta de la **Guía de onboarding** se denomina [Soporte en VTEX](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) y tiene como objetivo proporcionar a nuestros clientes la mejor experiencia con la plataforma y nuestro soporte, abordando el [funcionamiento del Soporte VTEX](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/2Ik9CGbPeZIHHaYFsuyId3) y explicando cómo abrir tickets para obtener ayuda con problemas [técnicos](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3thRAdTB3gGwTB0e1fVL3T), [financieros](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3g2mhmPDx5GszNgLDICzsl) o [comerciales](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ).

Una vez hecha esta presentación, podemos empezar nuestra jornada.<br>
Te damos la bienvenida a VTEX.

