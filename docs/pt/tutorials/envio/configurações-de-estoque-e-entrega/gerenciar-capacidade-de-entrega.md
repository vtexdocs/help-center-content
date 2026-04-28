---
title: 'Gerenciar capacidade de entrega'
id: 2y217FQZCjD0I1n62yxVcz
status: PUBLISHED
createdAt: 2021-04-19T14:43:24.606Z
updatedAt: 2024-03-25T20:04:31.192Z
publishedAt: 2024-03-25T20:04:31.192Z
firstPublishedAt: 2021-05-24T17:00:14.134Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-delivery-capacity
legacySlug: gerenciar-capacidade-de-entrega
locale: pt
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Você pode acompanhar a disponibilidade de janelas de entrega e a quantidade de itens/pedidos que ainda podem ser realizados em cada janela de entrega através da página de **Capacidade de entrega**.

Para gerenciar sua **Capacidade de entrega**, você precisa ter [políticas de envio](/pt/docs/tutorials/politica-de-envio) previamente cadastradas, [Entrega agendada](/pt/docs/tutorials/entrega-agendada) habilitada e capacidade de entrega previamente configurada.

> ⚠️ Para que a [Entrega agendada](/pt/docs/tutorials/entrega-agendada) e a [Capacidade de entrega](/pt/docs/tutorials/gerenciar-capacidade-de-entrega) funcionem corretamente, você deve observar que:<ul><li>A soma {[account name](/pt/docs/tutorials/o-que-e-account-name)} + {ID da política de envio} não pode exceder 60 caracteres.</li><li>Não se deve utilizar espaçamento no ID de [políticas de envio](/pt/docs/tutorials/criar-uma-politica-de-envio).</li></ul>

No Admin VTEX, acesse **Envio > Capacidade de entrega** ou digite **Capacidade de entrega** na barra de busca no topo da página. A **Capacidade de entrega** contém uma lista das janelas de entrega da sua loja, sendo essa lista referente à política de envio selecionada no filtro `Política de envio` e ao período selecionado no filtro `Data`.

Uma vez selecionada a política de envio e a data a serem apresentadas na lista, você tem acesso às janelas de entrega cadastradas. Cada linha da lista representa uma janela de entrega e apresenta os seguintes dados:

*   **Data de entrega**: as datas disponíveis para entrega.
*   **Horário de entrega**: os horários disponíveis para entrega.
*   **Capacidade**: a capacidade de entrega.
*   **Reservado**: itens/ pedidos já reservados (compra confirmada, não pagamento confirmado).
*   **Disponível**: quantos itens/pedidos ainda estão disponíveis para agendamento (a quantidade de capacidade menos reservado)
*   **Status**: pode ser visível ou não visível, dependendo da janela de entrega ainda está disponível. A janela ficará com status visível para seus clientes se ela ainda estiver disponível.

> ℹ️ Você pode clicar em **EDITAR POLÍTICA DE ENVIO** para ser redirecionado à tela de edição da política de envio selecionada no filtro Política de envio.
