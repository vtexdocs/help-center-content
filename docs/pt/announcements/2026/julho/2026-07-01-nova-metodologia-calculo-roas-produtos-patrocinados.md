---
title: 'Nova metodologia de cálculo do ROAS para produtos patrocinados'
createdAt: 2026-07-01T00:00:00.000Z
updatedAt: 2026-07-01T00:00:00.000Z
contentType: updates
productTeam: Ads
slugEN: 2026-07-01-new-roas-calculation-methodology-for-sponsored-products
locale: pt
announcementSynopsisPT: 'A partir de 1º de julho de 2026, o ROAS de produtos patrocinados no VTEX Ads passa a considerar conversões por clique e por visualização, alinhando-se aos demais formatos de anúncio.'
tags:
  - Melhoria
  - VTEX Ads
---

A partir de 1º de julho de 2026, o cálculo do **ROAS** exibido para campanhas de **produtos patrocinados** no **VTEX Ads** passa a considerar conversões por clique e por visualização, alinhando-se à metodologia já aplicada aos demais formatos de anúncio. Na mesma data, a **taxa de conversão** passa a usar o denominador adequado a cada formato.

## O que mudou?

Antes desta atualização, o ROAS de campanhas de produtos patrocinados considerava apenas conversões geradas por clique, em uma janela de 7 dias. Agora, o cálculo passa a incluir também as conversões atribuídas a usuários que visualizaram o anúncio sem clicar. A janela de conversões por clique permanece em 7 dias, e as conversões por visualização usam uma janela própria de um dia.

A fórmula do ROAS consolidado permanece: receita atribuída (clique e visualização) dividida pelo custo total. A mudança ocorre apenas no numerador para produtos patrocinados, que passa a incluir a receita por visualização.

Outras alterações para anunciantes e publicadores:

- O valor de ROAS exibido por padrão nos dashboards de campanhas, anúncios, anunciantes e publicadores passa a ser o consolidado para todos os formatos.
- As colunas **ROAS click** e **ROAS view** ficam disponíveis como métricas opcionais para usuários com permissão de administrador (superAdmin), permitindo entender a origem do resultado e comparar com períodos anteriores. Essas colunas não exibem dados anteriores a 25 de março de 2026.
- Os dados anteriores a 1º de julho de 2026 permanecem com o cálculo original, e os relatórios indicam a data de corte da mudança para evitar comparações inválidas entre períodos.
- A metodologia de banners, vídeos e **Sponsored Brands** permanece a mesma.

> ⚠️ O ROAS reportado para produtos patrocinados tende a ficar maior após esta mudança. O aumento reflete uma medição mais completa do retorno gerado pelos anúncios, não uma melhora de performance da campanha.

## Ajuste na taxa de conversão por formato

Também a partir de 1º de julho de 2026, a taxa de conversão deixa de usar apenas cliques como denominador para todos os formatos. Cada formato passa a usar o denominador adequado: cliques para produtos patrocinados e visualizações para banners, vídeos e **Sponsored Brands**. Os dashboards passam a exibir **Taxa de conversão (clique)** e **Taxa de conversão (visualização)** separadamente, com tooltips que explicam o cálculo de cada uma.

## Por que mudou?

A padronização elimina a inconsistência metodológica entre formatos dentro da mesma plataforma e oferece ao anunciante uma visão mais completa do retorno real do investimento em mídia, já que parte das conversões geradas por produtos patrocinados ocorre após a visualização do anúncio, sem clique direto.

## O que precisa ser feito?

Nenhuma ação é necessária para que as mudanças entrem em vigor. Recomendamos que anunciantes e publicadores:

- Considerem o ROAS consolidado como referência principal a partir de 1º de julho de 2026.
- Utilizem as colunas **ROAS click** e **ROAS view** (disponíveis para usuários com permissão de administrador) ao analisar a origem dos resultados e ao comparar campanhas com períodos anteriores à mudança.
