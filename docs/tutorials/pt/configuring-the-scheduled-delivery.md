---
title: Configurar entrega agendada
id: tutorials_111
status: DRAFT
createdAt: 2017-04-27T22:19:16.609Z
updatedAt: 2021-05-24T17:38:53.796Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.972Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-funciona-a-entrega-agendada
legacySlug: como-funciona-a-entrega-agendada
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

<div class="alert alert-info">
Aviso: Esta documentação está em processo de atualização para refletir a mudança do conceito de Painéis para 
<a href="https://help.vtex.com/pt/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">estratégia de envio</a>.
</div> 


A entrega agendada é uma funcionalidade que permite definir períodos de entrega personalizados, podendo definir prazos e preços específicos, disponibilizando para o cliente a escolha do intervalo de horário em que deseja receber seu pedido. 

Ex.: Uma loja de materiais de escritório trabalha com turnos de entrega, trabalha nos finais de semana com preços diferenciados e gostaria de dar a possibilidade do cliente escolher que dia receber e em qual turno. Com a entrega agendada esta demanda pode ser atendida, veja como:

## Como configurar

Em **Estoque & entrega**, acesse **Painéis** e escolha a **Transportadora** desejada para realizar a entrega agendada. 

Em **Tipo da entrega**, clique  **Entrega agendada**.

![entrega-agendada pt](https://images.ctfassets.net/alneenqid6w5/6bbP1sy4xiKUSmYAWGWgMq/c6370ec0630605c537bea7e65e1d15a1/entrega-agendada_pt.png)
Para entender melhor como cadastrar os demais campos da transportadora, veja também nossa documentação sobre [cadastro de transportadora](http://help.vtex.com/pt/tutorial/gerenciar-transportadora).

Nesta estrutura, temos os seguintes dados:

- **Tempo máximo de entrega:** Este campo é responsável por montar a janela de entrega, e ele é sempre somado ao prazo normal (Estoque + Doca + Valor de Frete).
- **Valor padrão para a entrega:** Este campo define um valor padrão para a entrega.
- **Horário da entrega:** Este é o responsável por definir quais dias a entrega poderão ser escolhidas, quantos períodos e qual o valor que será cobrado "a mais" nestes dias, e para acrescentar mais períodos, basta clicar no botão __Incluir horário__.

## Exemplo

Usando o mesmo cenário da loja citada acima, segue a configuração da transportadora segundo sua demanda:

![](//images.contentful.com/alneenqid6w5/6AEhj0a4SIeyQWCI6IQeCk/28a10fa00baa9723e73847d983e12d66/horariosentregaagendada.jpg)

Supondo que o Estoque tem 2 dias de prazo; a Doca tem 1 dia de prazo; a Tabela de Frete tem 5 dias de prazo. O primeiro dia disponibilizado será **8** dias depois da data que o pedido está sendo efetuado. Como o Tempo Máximo de Entrega é de 10 dias, o último dia disponível para a escolha será o **18º** dia após a data que o pedido está sendo efetuado.

Se hoje é dia 3 de maio e o cliente escolhe este tipo de entrega, a janela que será apresentada será do dia 11 de maio ao dia 21 de maio. Sendo que, se escolher para entregar no sábado ou no domingo, ainda será acrescentado ao frete mais R$ 5,00.
