---
title: 'VTEX CX Platform: logs de execução das automações de WhatsApp'
slug: '2026-09-15-vtex-cx-platform-logs-de-execucao-das-automacoes-de-whatsapp'
createdAt: 2026-09-15T00:00:00.000Z
updatedAt: 2026-09-15T00:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: '2026-09-15-vtex-cx-platform-whatsapp-automation-execution-logs'
locale: pt
announcementSynopsisPT: 'A nova aba Logs das automações de WhatsApp registra cada envio com template, contato, pedido e status, e permite filtrar, ver o JSON dos erros e exportar os dados.'
tags:
  - Nova funcionalidade
  - Storefront
  - VTEX CX Platform
---

Agora você pode acompanhar a execução das automações de WhatsApp da sua loja diretamente do Admin VTEX, na nova aba **Logs** das automações do VTEX CX Platform. Cada tentativa de envio é registrada com template, data, contato, pedido, valor e status, permitindo que você confirme se uma mensagem foi enviada e entenda por que ela foi ignorada ou falhou.

## O que mudou?

Antes, para saber se uma automação de WhatsApp havia enviado uma mensagem ou por que ela não havia sido enviada, era necessário acionar o suporte.

Agora, as automações de WhatsApp, como **WhatsApp Cart Recovery**, **WhatsApp Order Notifications** e **WhatsApp Payment Recovery**, contam com a aba **Logs**, que exibe todas as execuções na interface. Em cada registro, você encontra:

- **Template:** modelo de mensagem usado no envio, como `Abandoned Cart`.
- **Contato:** número de WhatsApp do cliente.
- **ID do OrderForm:** ID do pedido ou do carrinho.
- **Valor:** pedido ou carrinho associado ao envio.
- **Status:** resultado da execução, que pode ser `Enviado`, `Entregue`, `Lido`, `Processando`, `Ignorado` ou `Erro`.
- **Data:** data e hora da execução.

Você pode buscar por contato ou ID do pedido e filtrar os registros por período, template e status. Ao expandir um registro, você vê um resumo do resultado e o botão `Ver JSON`, que exibe o rastreamento completo da execução.

## Por que fizemos essa mudança?

Desenvolvemos a aba **Logs** para você ter acesso a informações sobre as automações sem depender do suporte. Este recurso está disponível para todos os usuários do VTEX CX Platform no Admin VTEX. Suas principais vantagens são:

- **Visibilidade completa:** todas as execuções ficam registradas em uma única lista, com os principais dados de cada envio.
- **Diagnóstico autônomo:** a busca, os filtros e o detalhamento em JSON permitem identificar rapidamente a causa de uma falha ou de um envio ignorado.
- **Exportação por email:** você pode exportar os logs e recebê-los por email para análise ou compartilhamento.

## O que precisa ser feito?

Nenhuma ação é necessária para visualizar os logs de WhatsApp no VTEX CX Platform. A atualização já está disponível no Admin VTEX de todas as lojas. Para consultar os logs, acesse **Storefront > VTEX CX Platform > Dashboard**, clique em `Configurações`, abra uma automação de WhatsApp e selecione a aba **Logs**.

Para saber mais sobre o VTEX CX Platform, consulte [Introdução ao CX](https://help.vtex.com/pt/docs/tutorials/introducao-ao-cx).
