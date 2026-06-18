---
title: 'Pedidos: dados personalizados no Admin VTEX agora em disponibilidade geral'
createdAt: 2026-07-10T13:00:00.000Z
updatedAt: 2026-07-10T13:00:00.000Z
contentType: updates
productTeam: Pedidos
slugEN: 2026-07-10-orders-custom-data-in-the-vtex-admin-now-generally-available
locale: en
---

A exibição de dados personalizados nos pedidos do Admin VTEX está agora disponível para todas as lojas. Com essa mudança, lojistas e operadores de loja podem visualizar campos personalizados (`customFields`) e payloads por aplicativo (`customApps`) diretamente na página de detalhes do pedido e na visualização de impressão, sem nenhuma configuração adicional.

## O que mudou?

Antes, esse recurso estava disponível em [beta aberto](https://help.vtex.com/pt/announcements/2026-05-22-pedidos-dados-personalizados-agora-visiveis-no-admin-vtex) e exigia que as lojas solicitassem ativação entrando em contato com o [Suporte da VTEX](https://supporticket.vtex.com/support). Agora, os dados personalizados são exibidos automaticamente para todas as lojas. Quando um pedido contiver `customData`, as informações aparecem em menus colapsáveis na página de detalhes do pedido e na visualização de impressão: um para campos personalizados e outro para os payloads de aplicativos.

> ℹ️ Para saber mais sobre `customFields` e `customApps`, leia o artigo [VTEX Data Pipeline Beta](https://help.vtex.com/pt/docs/tutorials/pedidos-data-pipeline-beta#tabela-orders-custom-fields).

## Por que fizemos essa mudança?

Para dar a todos os lojistas e operadores de loja uma visão completa dos pedidos sem precisar sair do Admin VTEX, tornamos a exibição de dados personalizados disponível de forma geral. Suas principais vantagens são:

- Acesso imediato a dados personalizados diretamente na interface do Admin VTEX, sem necessidade de chamadas manuais à API.
- Visibilidade centralizada de campos personalizados da loja e informações específicas de aplicativos em um único lugar.
- Dados organizados em grupos recolhíveis, facilitando a leitura e a gestão dos pedidos.

## O que precisa ser feito?

Nenhuma ação é necessária. Os dados personalizados de pedidos já estão disponíveis automaticamente para todas as lojas que tenham `customData` associado aos seus pedidos.
