---
title: 'Entrega agendada'
id: 22g3HAVCGLFiU7xugShOBi
status: PUBLISHED
createdAt: 2021-04-19T13:26:44.564Z
updatedAt: 2024-09-23T13:33:32.959Z
publishedAt: 2024-09-23T13:33:32.959Z
firstPublishedAt: 2021-05-24T17:01:23.885Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: scheduled-delivery
legacySlug: entrega-agendada, como-funciona-a-entrega-agendada
locale: pt
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

A funcionalidade de entrega agendada permite a você definir períodos de entrega para que o consumidor possa escolher o melhor dia e horário para receber o produto comprado.

Os períodos de entrega que ficam disponíveis para os consumidores são chamados de janelas de entrega e estão diretamente relacionados às Políticas de Envio da sua loja. Nesse sentido, ao oferecer entregas agendadas, você precisa considerar se a política de envio oferece este serviço.

Caso a política de envio ofereça o serviço, você pode habilitar a entrega agendada configurando as janelas de entrega e definindo a capacidade de realização das entregas para cada janela de entrega, caso desejar.A habilitação da entrega agendada é feita através do campo __Entrega Agendada__ presente na tela de criação ou edição de Política de Envio. 

> ⚠️ Para que a [Entrega agendada](/pt/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) e a [Capacidade de entrega](/pt/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz) funcionem corretamente, você deve observar que:<ul><li>A soma {[account name](/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)} + {ID da política de envio} não pode exceder 60 caracteres.</li><li>Não se deve utilizar espaçamento no ID de [políticas de envio](/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).</li></ul>

Uma vez habilitada a Entrega Agendada, você pode configurar os campos que determinarão como ela funcionará. Tais campos definem o [tempo máximo de entrega](#tempo-maximo-de-entrega), o [período de entrega](#periodo-de-entrega) e o [limite da capacidade de entrega](#capacidade-de-entrega).

Leia o artigo [Política de Envio](/pt/tutorial/politica-de-envio--tutorials_140) para saber como criar uma nova política.

## Tempo máximo de entrega

O tempo máximo de entrega é o maior período de tempo que a política de envio usa para realizar uma entrega  desde a confirmação do pedido até a  confirmação da entrega. Ele é configurado através do campo `Tempo máximo de entrega` que está localizado na tela de entrega agendada na qual você definirá a quantidade de dias que compõem o tempo máximo de entrega.

## Período de entrega

O período de entrega, também chamado de janela de entrega, se refere aos horários nos quais a transportadora está disponível para realizar entregas durante o dia. Nos períodos/janelas são definidos horários de início e fim do funcionamento por dia da semana no qual você pode ainda, definir um valor de frete adicional a ser cobrado para dias da semana específicos, como por exemplo, sábados.

> ℹ️ Uma janela de entrega deixa de estar disponível para seleção após ter sido iniciada. Apenas janelas de entrega próximas (ainda não iniciadas) ficarão disponíveis para os clientes.

## Capacidade de Entrega

Definir capacidade de entrega é a forma que você tem em limitar a quantidade de itens ou pedidos que podem ser entregues em cada janela de entrega de modo a gerenciar melhor suas entregas agendadas.

Quando o cliente finaliza a compra e seleciona a entrega agendada, as opções de data e hora apresentadas levam em consideração a capacidade de entrega. Invariavelmente, o cliente só conseguirá agendar entregas nas janelas que ainda tiverem disponibilidade de 1 item/pedido. 

> ℹ️ Se a janela já tiver a capacidade total de itens/pedidos, ela deixa de estar disponível para escolha. Para deixar novamente a janela disponível você deve aumentar os itens/pedidos da capacidade de entrega. Isso pode ser feito editando uma [Política de envio](/pt/tutorial/politica-de-envio--tutorials_140).

Leia o artigo [Gerenciar capacidade de entrega](/pt/tutorial/gerenciar-capacidade-de-entrega--2y217FQZCjD0I1n62yxVcz) para saber mais.

