---
title: 'Migração de Request Capture para Activity Flow: o que muda nas métricas de navegação'
slug: '2026-08-05-migracao-de-request-capture-para-activity-flow-o-que-muda-nas-metricas-de-navegacao'
hidden: false
createdAt: 2026-08-05T12:00:00.000Z
updatedAt: 2026-08-05T12:00:00.000Z
contentType: updates
productTeam: Activity Flow
slugEN: 2026-08-05-request-capture-to-activity-flow-migration-navigation-metrics
locale: pt
announcementSynopsisPT: 'A VTEX substitui o pixel Request Capture pelo Activity Flow para medir navegação com mais precisão, cobertura e estabilidade, sem alterar o tráfego real da loja.'
tags:
  - Breaking change
  - Activity Flow
  - Admin
  - Master Data
  - Data Pipelines
  - Storefront
---

A VTEX está substituindo o pixel legado **Request Capture** pelo **Activity Flow** como fonte de medição de eventos de navegação na plataforma. Com essa mudança, você passa a contar com medição de navegação mais precisa, cobertura mais ampla de eventos, maior estabilidade e melhor desempenho de carregamento da loja, já que o pixel Request Capture deixa de ser carregado no storefront.

## Por que mudamos?

O Activity Flow fecha gaps conhecidos de coleta do Request Capture, usando uma instalação mais enxuta e reduzindo perdas quando a configuração da loja está incompleta.

A confiabilidade dos dados do Activity Flow é monitorada de forma contínua, com checks constantes de consistência e qualidade.

## O que mudou?

### Dados de navegação

Todos os eventos de navegação antes medidos pelo Request Capture passarão a ser medidos pelo Activity Flow. O Activity Flow pode expor tipos de evento adicionais, mas não remove eventos existentes, substituindo 100% dos dados do Request Capture.

### Impacto nas métricas

O Activity Flow mede cerca de **20% mais sessões e page views** do que o Request Capture, com base em comparações dos últimos dois anos. Esse aumento reflete uma medição mais completa, **não** um crescimento real de tráfego na sua loja.

Indicadores derivados de sessão, como sessões por hora ou por dia e taxa de conversão, tendem a acompanhar essa diferença.

### Produtos afetados

**Carrinho abandonado (Master Data)**: a heurística que identifica carrinhos abandonados usa sinais de navegação, visualização de produto e carrinho coletados pelo Request Capture. As regras de negócio para decidir quando enviar notificações permanecem as mesmas. Saiba mais em [Configurar carrinho abandonado](/pt/docs/tutorials/checkout/configurações-do-checkout/configurar-carrinho-abandonado).

**Teste A/B**: a comparação entre workspaces passará a usar sessões e pedidos medidos pelo Activity Flow à medida que a migração avança. Comparações de conversão podem variar em relação ao período anterior. Veja [Teste A/B: como, onde, quando e por quê](/pt/docs/tutorials/storefront/cms-portal-legado/layout/teste-ab-como-onde-quando-e-porque).

**VTEX Data Pipelines**: as tabelas de navegação replicadas para o data warehouse do cliente estão em transição do esquema do Request Capture para o esquema do Activity Flow. Clientes que consomem dados de navegação passarão a receber dados novos gerados pelo Activity Flow. Saiba mais em [Navegação (Data Pipeline Beta)](/pt/docs/tutorials/beta/vtex-data-pipeline-beta/navegacao-data-pipeline-beta).

### Campos renomeados

Alguns campos usados em integrações downstream podem ser renomeados, como `RC_last_cart`, usado em retargeting no Checkout. <!-- TODO: mapa de/para de campos renomeados, incluindo RC_last_cart? -->.

### Retenção de dados históricos

<!-- TODO: qual a política de retenção dos dados históricos do Request Capture após o sunset? -->.

## O que precisa ser feito?

Para integrações que consomem campos de navegação do Request Capture ou tabelas de Data Pipelines, não é esperado que campos desapareçam nem que integrações quebrem. Confira o mapa de/para para saber se ajustes de nomenclatura serão necessários.

Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Saiba mais

* [Configurar carrinho abandonado](/pt/docs/tutorials/checkout/configurações-do-checkout/configurar-carrinho-abandonado)
* [Navegação (Data Pipeline Beta)](/pt/docs/tutorials/beta/vtex-data-pipeline-beta/navegacao-data-pipeline-beta)
* [Teste A/B: como, onde, quando e por quê](/pt/docs/tutorials/storefront/cms-portal-legado/layout/teste-ab-como-onde-quando-e-porque)
* [Visão geral da loja](/pt/docs/tutorials/dashboards/visao-geral-da-loja)
