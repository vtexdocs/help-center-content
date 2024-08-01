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
slug: gerenciar-capacidade-de-entrega
locale: pt
legacySlug: gerenciar-capacidade-de-entrega
subcategory: 1UL6Q7nUN6SkA2g2SUsECi
---

Você pode acompanhar a disponibilidade de janelas de entrega e a quantidade de itens/pedidos que ainda podem ser realizados em cada janela de entrega através da página de **Capacidade de entrega**.

Para gerenciar sua **Capacidade de entrega**, você precisa ter [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) previamente cadastradas, [Entrega agendada](https://help.vtex.com/pt/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) habilitada e capacidade de entrega previamente configurada.

<div class="alert alert-warning">
Para que a <a href="https://help.vtex.com/pt/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi">Entrega agendada</a> e a <a href="https://help.vtex.com/pt/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz">Capacidade de entrega</a> funcionem corretamente, você deve observar que:<p><ul><li>A soma {<a href="https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name</a>} + {ID da política de envio} não pode exceder 60 caracteres.</li><li>Não se deve utilizar espaçamento no ID de <a href="https://help.vtex.com/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT">políticas de envio</a>.</li></ul></p>
</div>

No Admin VTEX, acesse **Envio > Capacidade de entrega** ou digite **Capacidade de entrega** na barra de busca no topo da página. A **Capacidade de entrega** contém uma lista das janelas de entrega da sua loja, sendo essa lista referente à política de envio selecionada no filtro `Política de envio` e ao período selecionado no filtro `Data`.

Uma vez selecionada a política de envio e a data a serem apresentadas na lista, você tem acesso às janelas de entrega cadastradas. Cada linha da lista representa uma janela de entrega e apresenta os seguintes dados:

*   **Data de entrega**: as datas disponíveis para entrega.
*   **Horário de entrega**: os horários disponíveis para entrega.
*   **Capacidade**: a capacidade de entrega.
*   **Reservado**: itens/ pedidos já reservados (compra confirmada, não pagamento confirmado).
*   **Disponível**: quantos itens/pedidos ainda estão disponíveis para agendamento (a quantidade de capacidade menos reservado)
*   **Status**: pode ser visível ou não visível, dependendo da janela de entrega ainda está disponível. A janela ficará com status visível para seus clientes se ela ainda estiver disponível.

<div class = "alert alert-info">
Você pode clicar em <b>EDITAR POLÍTICA DE ENVIO</b> para ser redirecionado à tela de edição da política de envio selecionada no filtro Política de envio.
</div>
