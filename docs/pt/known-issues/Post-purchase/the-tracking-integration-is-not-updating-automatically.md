---
title: 'A integração de rastreamento não está atualizando de forma automática'
id: 2e9RR7AnEewejyOwQBKa2c
status: PUBLISHED
createdAt: 2020-11-11T19:38:05.072Z
updatedAt: 2022-12-22T20:43:07.680Z
publishedAt: 2022-12-22T20:43:07.680Z
firstPublishedAt: 2020-11-12T14:37:01.052Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: a-integracao-de-rastreamento-nao-esta-atualizando-de-forma-automatica
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A VTEX oferece a integração de rastreamento automático de pedidos. Além do pedido estar associado a uma transportadora que disponibilize a funcionalidade de rastreio e que esteja cadastrada nas [Políticas de Envio](https://help.vtex.com/pt/tutorial/cadastrar-transportadora--tutorials_140), os pedidos precisam estar atrelados ao seu respectivo rastreamento.

A atualização automática de rastreamento por transportadoras não está funcionando em lojas VTEX. Portanto, mesmo que as transportadoras e os pedidos estejam devidamente configurados, as verificações automáticas sobre o estado da entrega não estão sendo realizadas e os emails com o estado atualizado não estão sendo enviados para os clientes.

## Simulação

Conforme detalhado no artigo [Quais transportadoras disponibilizam o rastreio de frete?](https://help.vtex.com/pt/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete--frequentlyAskedQuestions_303), para cada transportadora existe um método para implantar a integração de rastreamento automático de pedidos - verifica automaticamente o estado da entrega, a cada seis horas por até 12 dias e meio, e envia um email quando ocorre alguma alteração.

Normalmente, o cliente seria capaz de verificar o estado atualizado da entrega ao acessar as informações do pedido e de receber os emails quando ocorre uma alteração no estado da entrega. No momento, quando um pedido é feito baseado nas configurações de rastreamento automático, o cliente pode observar que o estado da entrega não é atualizado no pedido e que não ocorre o recebimento de emails conforme o esperado.


## Workaround

Você pode atualizar os dados de rastreamento ativamente utilizando o endpoint [Update Order Tracking Status](https://developers.vtex.com/vtex-developer-docs/reference/tracking#updatetrackingstatus) da Orders API.

Também é possível [inserir a variável](https://help.vtex.com/pt/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe#outras-variaveis-de-e-mails-de-pedido) `trackingURL` em alguns [templates do Message Center](https://help.vtex.com/pt/tutorial/lista-de-templates-de-e-mail-no-message-center--3g2S2kqBOoSGcCaqMYK2my), como **Order invoiced** e **Order shipped**, e o cliente será capaz de acompanhar o rastreamento pelo link.

