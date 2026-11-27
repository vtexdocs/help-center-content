---
title: 'Visão geral de Budgets'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2026-08-28T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: pt
---

O gerenciamento de orçamentos permite que organizações B2B planejem, distribuam e acompanhem seus gastos de forma estruturada. A funcionalidade oferece operações para criar e gerenciar budgets e alocações, registrar movimentações financeiras como transactions e reservations e acompanhar toda a atividade por meio de statements, garantindo transparência, rastreabilidade e controle sobre os gastos dos compradores.

Você pode subdividir um budget em múltiplas alocações, e todas as movimentações de valores, como débitos, créditos e reembolsos, atualizam esses saldos de acordo com suas regras. A funcionalidade suporta fluxos em que as organizações criam budgets e alocações, transactions ou reservations temporárias consomem os saldos e, posteriormente, as equipes usam os statements para reconciliar a atividade financeira ao longo do tempo.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

## Conceitos-chave

### Budget

Representa um montante financeiro usado para controlar gastos dentro de um contexto de negócio específico, como uma unidade organizacional ou um centro de custo. Ele define:

* Valor total disponível.
* Período durante o qual a organização pode usar esse valor, definido por uma data de início e, opcionalmente, uma data de término.

As alocações e as transactions atualizam o saldo do budget conforme seus valores mudam.

### Alocações

As alocações são uma subdivisão de um budget, permitindo que você distribua o valor total entre diferentes entidades, como usuários, endereços ou [campos contábeis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis) (por exemplo, centros de custo). Qualquer alteração de saldo em uma alocação atualiza automaticamente o budget ao qual ela pertence.

### Transactions

As transactions são movimentações financeiras definitivas que ajustam os saldos de alocações e budgets. A plataforma as registra nos statements, e cada transaction usa um campo de tipo para indicar seu efeito:

* **DEBIT**: subtrai valores do saldo.
* **CREDIT**: adiciona valores ao saldo (por exemplo, reembolsos e cancelamentos).

### Reservations

As reservations bloqueiam temporariamente um valor de uma alocação sem consumi-lo imediatamente. Posteriormente, você pode:

* Confirmar a reservation, gerando uma **transaction** correspondente.
* Cancelar a reservation, liberando o valor reservado sem gerar nenhuma entrada nos **statements**.

### Refunds e tipos de transaction

Você não pode excluir transactions. Para reverter uma transaction, você cria um **refund**, que a plataforma representa como uma nova **transaction** do tipo CREDIT. Os statements refletem tanto a transaction DEBIT original quanto o refund CREDIT, resultando em um efeito líquido zero no saldo do budget ou da alocação.

### Statements

Os statements são listas de registros financeiros de um budget ou alocação que mostram o histórico de transactions ao longo do tempo. Eles exibem informações como identificadores, valores, datas, tipos e contexto, permitindo auditoria e conciliação das operações financeiras.

### Context

O contexto identifica onde um budget se aplica. Os campos `contextType` e `contextId` o representam. No contexto B2B, o `contextType` é sempre `UNIT`, enquanto o `contextId` identifica a unidade específica (`unitId`) onde você cria o budget.

### Linked entity e configurações de notificação

Você pode associar alocações a uma **linked entity**, que descreve a que a alocação está vinculada, como um usuário, um endereço ou um campo contábil, por exemplo, um centro de custo. Você também pode configurar budgets e alocações com **notification settings** para definir alertas baseados em limites ou percentuais de consumo.

## Casos de uso

### Controle de gastos B2B por unidade

Uma organização B2B pode precisar limitar quanto cada unidade de negócio pode gastar em um determinado período. Você pode criar budgets associados ao tipo de contexto `UNIT` (`contextType`) para gerenciar o consumo de forma centralizada.

### Acompanhamento e auditoria do uso de budgets

Times financeiros ou operacionais frequentemente precisam de visibilidade sobre como os budgets são usados ao longo do tempo. Você pode registrar todos os valores consumidos como **transactions** e recuperar **statements** detalhados de budgets e alocações, apoiando auditorias internas, conciliação com sistemas financeiros externos e relatórios periódicos.

### Reservas temporárias e fluxos de aprovação

Alguns fluxos de negócio exigem que valores sejam reservados antes da aprovação final ou da conclusão do pedido. Você pode criar reservations que bloqueiam temporariamente um valor em uma alocação. Dependendo do resultado do processo, você pode confirmar a reservation (gerando uma transaction) ou cancelá-la (liberando o valor).

### Gestão de reembolsos e correções de saldo

Quando pedidos são cancelados ou ajustes são necessários, pode ser preciso devolver valores a uma alocação. Em vez de remover uma transaction existente, você emite um refund, que a plataforma registra como uma transaction do tipo **CREDIT**, adicionando o valor de volta ao saldo. Tanto o débito original quanto o crédito do refund permanecem visíveis nos statements, garantindo transparência.

### Monitoramento de consumo com notificações

Você pode configurar budgets com notificações baseadas em limites de valor ou percentuais de uso. Isso aciona alertas quando o consumo se aproxima de níveis críticos ou os atinge, ajudando as equipes a responder antes que os budgets se esgotem e a ajustar alocações ou o comportamento de gastos.
