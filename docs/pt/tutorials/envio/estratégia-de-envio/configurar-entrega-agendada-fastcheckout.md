---
title: 'Configurar entrega agendada no FastCheckout'
id: 
status: PUBLISHED
createdAt: 2026-04-22T00:00:00.000Z
updatedAt: 
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Post-purchase
author: 
slugEN: configure-scheduled-delivery-fastcheckout
legacySlug: 
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

> ℹ️ Esta funcionalidade está disponível apenas para lojas que utilizam o B2B Buyer Portal, que atualmente está disponível para contas selecionadas.

A entrega agendada no FastCheckout permite às lojas VTEX oferecer aos clientes a possibilidade de escolher o melhor dia e horário para receber suas compras. Essa configuração é realizada diretamente nas políticas de envio e definem os períodos disponíveis para entregas.

![Entrega agendada Fastcheckout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/configurar-entrega-agendada-fastcheckout_1.png)

Este artigo apresenta como configurar a entrega agendada em uma política de envio existente ou em uma nova política de envio.

> ⚠️ Para que a [Entrega agendada](/pt/docs/tutorials/entrega-agendada) e a [Capacidade de entrega](/pt/docs/tutorials/gerenciar-capacidade-de-entrega) funcionem corretamente, você deve observar que:<ul><li>A soma {[account name](/pt/docs/tutorials/o-que-e-account-name)} + {ID da política de envio} não pode exceder 60 caracteres.</li><li>Não se deve utilizar espaçamento no ID de [políticas de envio](/pt/docs/tutorials/criar-uma-politica-de-envio).</li></ul>

## Janelas de envio

As janelas de envio definem os períodos de funcionamento da transportadora, ou seja, os horários em que ela aceita o recebimento de pedidos. Essas configurações influenciam diretamente o cálculo do tempo de entrega apresentado ao cliente no checkout.

### Configurar janelas de envio

Para configurar as janelas de envio em uma política de envio, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio**, ou digite **Estratégia de Envio** na barra de busca no topo da página.
2. Na aba **Políticas de Envio**, clique sobre a política de envio desejada, ou [crie uma nova política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio).
3. Na seção **Horário de funcionamento**, clique na aba `Janela de envio`.
4. Se desejar, ative a opção `Aceitar compras fora do horário de funcionamento`. Quando ativada, o intervalo de tempo entre o momento do pedido e o início do horário de funcionamento será somado ao tempo total da entrega.
5. Selecione o `Dia da semana` e preencha o `Horário de início` e o `Horário de término`.
6. Para adicionar mais dias da semana, clique em `Adicionar janela de envio` e repita o passo 5.
7. Clique em `Salvar alterações`.

> ⚠️ A **Janela de envio** e o **Horário de coleta** são opções excludentes, pois um mesmo período não pode ser simultaneamente destinado a ações diferentes.

## Entrega agendada

A funcionalidade de entrega agendada permite definir períodos de entrega para que o consumidor possa escolher o melhor dia e horário para receber o produto comprado. Os períodos de entrega disponíveis para os consumidores são chamados de janelas de entrega.

### Configurar entrega agendada

Para configurar a entrega agendada em uma política de envio, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio**, ou digite **Estratégia de Envio** na barra de busca no topo da página.
2. Na aba **Políticas de Envio**, clique sobre a política de envio desejada, ou [crie uma nova política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio).
3. Role a página até a seção **Entrega agendada**.
4. Ative a opção `Entrega agendada`.
5. No campo **Tempo máximo de entrega**, defina o tempo máximo em dias que a política de envio usa para realizar uma entrega desde a confirmação do pedido até a confirmação da entrega.
6. Na seção **Período de entrega**, configure as janelas de entrega que ficarão disponíveis para o cliente:
   * Selecione o `Dia da semana`.
   * Preencha o `Horário de início` da janela de entrega.
   * Preencha o `Horário de término` da janela de entrega.
   * Se desejar, preencha o `Valor adicional` para cobrar um valor extra neste período (opcional).
7. Para adicionar mais períodos de entrega, clique em `Adicionar novo período de entrega` e repita o passo 6.
8. Se desejar configurar a capacidade de entrega, siga as instruções da próxima seção. Caso contrário, clique em `Salvar alterações`.

> ℹ️ Uma janela de entrega deixa de estar disponível para seleção após ter sido iniciada. Apenas janelas de entrega futuras (ainda não iniciadas) ficarão disponíveis para os clientes.

### Configurar capacidade de entrega (opcional)

A capacidade de entrega permite limitar a quantidade de itens ou pedidos que podem ser entregues em cada janela de entrega, ajudando a gerenciar melhor as entregas agendadas. Esta configuração é opcional e não interfere no funcionamento básico da plataforma.

Para configurar a capacidade de entrega, siga os passos abaixo:

1. Na seção **Entrega agendada**, ative a opção `Configurar capacidade de entrega`.
2. Escolha a unidade da capacidade de entrega entre `Itens` ou `Pedidos`.
3. Clique em `Salvar alterações`.

## Saiba mais

* [Política de envio](/pt/docs/tutorials/politica-de-envio)
* [Criar uma política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio)
* [Entrega agendada](/pt/docs/tutorials/entrega-agendada)
* [Gerenciar capacidade de entrega](/pt/docs/tutorials/gerenciar-capacidade-de-entrega)
* [Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio)
