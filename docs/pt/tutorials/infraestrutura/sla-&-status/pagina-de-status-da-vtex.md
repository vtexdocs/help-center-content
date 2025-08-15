---
title: 'Página de status da VTEX'
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-12-21T17:10:08.895Z
publishedAt: 2023-12-21T17:10:08.895Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-status-page
legacySlug: status-vtex-entenda-como-funciona-o-status-da-plataforma, pagina-de-status-da-plataforma
locale: pt
subcategoryId: 5PYkoNDZyo2G80yiiqG2YW
---

Na página [Status VTEX](https://status.vtex.com/), você pode acompanhar a estabilidade da plataforma em tempo real, assim como acessar todo o histórico de incidentes.

Os eventos são reportados pela nossa equipe sempre que nosso sistema automático de monitoramento identifica uma instabilidade nos módulos da plataforma. As manutenções programadas também são comunicadas em detalhes.

![statuspage-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_1.png)

Abaixo, você encontra detalhes sobre os elementos da página de status da plataforma VTEX, desenvolvida com a ferramenta [incident.io](https://incident.io/):

* [Reportar um problema](#reportar-um-problema)
* [Notificações](#notificacoes)
* [Status geral](#status-geral)
* [Status dos sistemas](#status-dos-sistemas)
* [Calendário](#calendario)
* [Registro de incidente](#registro-de-incidente)
* [Registro de manutenção agendada](#registro-de-manutencao-agendada)

## Reportar um problema

Ao clicar no botão `Report a problem` no canto superior direito da página você pode entrar em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests) para nos informar sobre instabilidades na plataforma.

## Notificações

A página de status apresenta o botão `Subscribe to updates `no canto superior direito da página. Ao clicar, você tem a opção de se inscrever para receber atualizações via email, [feed RSS](https://rss.com/blog/how-do-rss-feeds-work/), ou [Slack](https://slack.com/).

Ao escolher a inscrição por email, você pode optar por receber notificações apenas para impactos em componentes específicos. Para isso, marque a opção **Subscribe to specific components** e, em seguida, marque os componentes a acompanhar.

![statuspage-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_2.png)

## Status geral

Nesta seção, você pode visualizar o status geral da plataforma, que pode ser _fully operational _(totalmente operacional), _experiencing issues_ (enfrentando problemas) ou _undergoing maintenance_ (em manutenção).

Quando problemas ou manutenção estão afetando algum sistema, o componente impactado é apresentado, assim como uma explicação da ocorrência. Veja exemplos a seguir.

![statuspage-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_3.png)

![statuspage-4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_4.png)

![statuspage-5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_5.png)

## Status dos sistemas

Nesta seção, é possível verificar, em tempo real, o status de cada sistema da plataforma e de seus componentes.

![statuspage-6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_6.png)

Ao clicar na seta <i class="fas fa-chevron-down"></i> ao lado do número de componentes, você pode visualizar o status de componentes específicos de cada sistema.

Se houver uma manutenção agendada para uma data futura, você verá também o botão `Upcoming maintenance scheduled`, ilustrado a seguir. Ao passar o mouse sobre ele, aparece o evento de manutenção agendada, no qual é possível clicar para visualizar o registro dessa ocorrência.

![statuspage-7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_7.png)

Os estados possíveis para cada componente são:

* **Operational:** funcionamento estável.
* **Degraded performance:** funcionamento com performance abaixo do esperado.
* **Partial outage:** funcionamento parcial das funcionalidades.
* **Full outage:** funcionamento totalmente impactado.
* **Under maintenance:** sistema em manutenção.

A seguir, detalhamos os componentes exibidos na página.

### Storefront

Problemas na navegação na frente de loja.

* **Portal/CMS:** instabilidades observadas em lojas desenvolvidas com a tecnologia de storefront [Portal CMS Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).
* **Store Framework:** instabilidades observadas em lojas desenvolvidas com a tecnologia de storefront [Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework).
* **FastStore:** instabilidades observadas em lojas desenvolvidas com a tecnologia de storefront [FastStore](https://www.faststore.dev/).
* **Sales App:** instabilidades observadas no [Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc), a solução da VTEX para vendas assistidas em lojas físicas.
* **3rd Party Apps**: instabilidades observadas em extensões mantidas por terceiros.

### Checkout

Problemas em funcionalidades relacionadas ao fluxo de criação de pedidos, ou seja, checkout e suas dependências.

 * **Order Placement:** interrupções no fluxo de vendas.
 * **Shipping Calculation:** inconsistências em condições de frete.
 * **Pricing Calculation:** inconsistências em preços, promoções ou taxas.
 * **Payments Gateway:** inconsistências em transações de pagamento.
 * **Payment Connectors:** instabilidades observadas em conectores de pagamentos específicos.

### Admin

Problemas relacionados à navegação no Admin VTEX e seus módulos, como gerenciamento de pedidos, configurações de preços e logística, por exemplo.

* **Catalog Management:** interrupções na atualização do conteúdo do catálogo (detalhes do produto, imagens, preços, inventário, indexação da busca, etc.).
* **Content Management:** interrupções na atualização de conteúdo não relacionado a produtos (banners, landing pages, promoções, cupons, cartões-presente, etc.).
* **Order Management:** interrupções no fulfillment de pedidos.
* **Marketplace Connectors:** instabilidades observadas em conectores de marketplaces específicos.
* **Admin Operations** outros impactos na experiência dos lojistas, fora do escopo de outros componentes do Admin.

### Developer Tools

Problemas relacionados a desenvolvimento de apps, integrações e temas de lojas.

* **VTEX IO:** instabilidades observadas em apps desenvolvidos em VTEX IO.
* **Master Data:** instabilidades observadas em integrações que dependem do Master Data.
* **API Integrations:** outros impactos no uso das APIs da VTEX.

## Calendário 

A seção do calendário exibe o registro de incidentes e manutenções programadas ocorridos a cada dia do mês atual.

Para navegar para meses anteriores, clique na seta `&lt;`.

Para visualizar as ocorrências de um dia específico, passe o mouse sobre a data. Para acessar a página com o registro completo da ocorrência, clique no incidente ou na manutenção listada.

![statuspage-8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_8.png)

> ⚠️ Se a manutenção agendada durar um período maior que um dia, somente a data de início estará marcada no calendário. É necessário abrir o [registro da manutenção](#registro-de-manutencao-agendada) para ver a data de início e a data de fim.

A seguir, detalhamos as informações disponíveis no [registro de incidente](#registro-de-incidente) e no [registro de manutenção agendada](#registro-de-manutencao-agendada).

## Registro de incidente

A página de detalhes do incidente contém as seguintes informações:

![statuspage-9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_9.png)

* **Título:** título que descreve o incidente.
* **Status:** cada incidente possui um ciclo definido, em que nossa equipe trabalha para identificar e solucionar os problemas. Conheça um pouco mais sobre cada etapa desse ciclo:
    * **Investigating:** o primeiro estado do incidente é dedicado à análise dos impactos, serviços relacionados e identificação da causa raiz.
    * **Identified:** com a origem do erro devidamente identificada, a equipe de desenvolvimento começa a executar ações para a solução do comportamento.
    * **Monitoring:** depois de concluir as ações de estabilização do sistema, já com os indicadores da operação normalizados, seguimos em estado alerta com um monitoramento mais próximo da performance no serviço ou módulo impactado.
    * **Resolved:** com a performance da plataforma estabilizada, voltamos ao nosso monitoramento normal e consideramos que a plataforma está funcionando como esperado.
* **Duração:** tempo até a resolução do incidente.
* **Resumo:** texto que resume o incidente.
* **Componentes afetados:** componentes da plataforma que foram impactados pelo incidente. Ao clicar na set a ao lado do número de componentes, você pode visualizar o impacto em componentes mais específicos.
* **Atualizações**: linha do tempo com as atualizações e mudanças de status do incidente.

Ao clicar no botão `Subscribe to updates` no registro de um incidente, você tem a opção de se inscrever para receber atualizações sobre aquele incidente específico via email, feed RSS, ou Slack.

## Registro de manutenção agendada

As atualizações na plataforma são feitas continuamente e, no geral, não impactam a operação dos nossos clientes. Mas, às vezes, algumas delas precisam que o serviço fique temporariamente indisponível.

Para casos que afetam a estabilidade da plataforma, usamos a página de status da VTEX para comunicar todos os detalhes: quando será executada a manutenção, o período de duração e o impacto.

O registro de manutenção agendada apresenta as mesmas informações dos registros de incidentes. Os status possíveis da manutenção agendada são:

* **Scheduled:** evento de manutenção programado.
* **In progress:** evento de manutenção em progresso.
* **Complete:** evento de manutenção finalizado.

Veja a seguir exemplos do status e da linha do tempo de uma manutenção agendada.

![statuspage-10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_10.png)

![statuspage-11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/infraestrutura/sla-&-status/pagina-de-status-da-vtex_11.png)
