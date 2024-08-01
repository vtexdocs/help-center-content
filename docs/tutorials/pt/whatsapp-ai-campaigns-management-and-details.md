---
title: 'Gerenciamento e detalhes do WhatsApp AI Campaigns'
id: q9JqDErMqGV4zvsYqkD4s
status: PUBLISHED
createdAt: 2024-06-25T11:58:05.514Z
updatedAt: 2024-06-25T16:28:52.542Z
publishedAt: 2024-06-25T16:28:52.542Z
firstPublishedAt: 2024-06-25T16:11:51.825Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slug: gerenciamento-e-detalhes-do-whatsapp-ai-campaigns
locale: pt
legacySlug: gerenciamento-e-detalhes-do-whatsapp-ai-campaigns
subcategory: 4SC2gPmUH3cHD5HjGfQ5Vg
---

Esta página fornece uma visão detalhada sobre o gerenciamento e o detalhe do WhatsApp AI Campaigns na plataforma VTEX. Abordamos desde a configuração até o acompanhamento das métricas de desempenho, ajudando você a otimizar a eficácia de suas campanhas e a maximizar as conversões.

Confira neste artigo como você pode gerenciar e acompanhar suas campanhas:

- [Selecionando datas](#selecionando-datas)
- [Enviando relatório](#enviando-relatorio)
- [Editando uma campanha](#editando-uma-campanha)
- [Pausando uma campanha](#pausando-uma-cmpanha)
- [Visualizando detalhes do painel Análises](#visualizando-detalhes-do-painel-analises)

## Gerenciamento do WhatsApp AI Campaigns

A página do WhatsApp AI Campaigns permite visualizar as informações de Análises e Campanhas Ativas.

### Selecionando datas

Navegue pelos dias específicos para visualizar os disparos de mensagens realizados em cada período.

1. No Admin VTEX, acesse **Promoções > Campanhas de WhatsApp > Visão geral**.
2. Clique no Seletor de datas.
3. Selecione a data que deseja visualizar os dados de análises.

### Enviando relatório

1. No Admin VTEX, acesse Promoções > Campanhas de WhatsApp > Visão geral.
2. Clique em `ENVIAR RELATÓRIO` no canto superior direito da seção.
3. Forneça o endereço de email que irá receber o relatório.
4. Clique em `ENVIAR RELATÓRIO`.

O relatório enviado por email será um arquivo `csv`com as seguintes informações:

- **userId:** identificador único do usuário que realizou a compra. 
- **deliveredReminderAt:** data e hora em que um lembrete sobre a compra foi enviado ao usuário.
- **readReminderAt:** data e hora em que o usuário visualizou o lembrete enviado. 
- **orderCreatedAt:** data e hora em que o pedido foi criado no sistema. 
- **hasClickedOnReminder:** indica se o usuário clicou ou não no lembrete enviado. 
- **checkoutItems:** lista de itens que o usuário adicionou ao carrinho durante o processo de checkout. 
- **orderItems:** lista de itens que foram efetivamente comprados pelo usuário. 
- **orderTotal:** valor total do pedido, somando o preço de todos os itens comprados. 
- **currency:** moeda utilizada para o pagamento do pedido. 
- **orderFormId:** identificador único do formulário de pedido utilizado durante o checkout. 

### Editando uma campanha

Depois da campanha configurada, você pode editar o idioma ou o tipo de mensagem que deseja personalizar.

1. No Admin VTEX, acesse Promoções > Campanhas de WhatsApp > Visão geral.
2. Clique no ícone <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique em `Editar`.
4. Altere as informações que deseja.
5. Clique em `Confirmar`.

### Pausando uma campanha

Para pausar o envio de mensagens de uma campanha:

1. No Admin VTEX, acesse Promoções > Campanhas de WhatsApp > Visão geral.
2. Clique no ícone <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Clique em `Pausar`.
4. Clique em `Confirmar`.

## Visualizando detalhes do painel Análises

Você pode encontrar informações relativas às suas campanhas em andamento no Admin VTEX.

![Visão geral-PT](//images.ctfassets.net/alneenqid6w5/3QiT4K7FuFoTyhmlWYWKFl/5b970054cd95f9bd75086f1df4fca02d/Vis_o_geral-PT.png)

Abaixo estão os detalhes das métricas disponíveis:

- **Mensagens entregues:** número total de mensagens que chegaram com êxito aos destinatários pretendidos, sem problemas de entrega.
- **Mensagens lidas:** número total de mensagens abertas pelos destinatários, indicando o envolvimento do público.
- **Cliques únicos:** número de usuários que clicaram nos botões das mensagens.
- **Total de cliques:** número total de interações com os botões incorporados nas mensagens, fornecendo uma medida quantitativa do engajamento.
- **Total de conversões:** o número total de conversões que ocorrem após a entrega bem-sucedida de uma mensagem a um destinatário. O total de conversões é a soma das duas métricas abaixo:
      - **Conversões assistidas:** conversões que ocorrem dentro de 3 dias após o recebimento da mensagem.
      - **Conversões por clique (CTC):** conversões que ocorrem quando os usuários clicam no link da mensagem e realizam uma compra dentro de 15 dias.
- **Valor total de conversões:** valor total do pedido das conversões.
- **Valor total de conversões por clique:** valor total do pedido proveniente de conversões de clique.

