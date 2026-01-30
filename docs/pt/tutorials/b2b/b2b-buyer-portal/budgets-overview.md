---
title: 'Visão geral de Budgets'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2025-01-30T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: pt
---

# Visão geral de Budgets

O gerenciamento de orçamentos permite que organizações B2B planejem, distribuam e acompanhem seus gastos de forma estruturada. A funcionalidade oferece operações para criar e gerenciar budgets e allocations, registrar movimentações financeiras como transactions ou reservations e acompanhar toda a atividade por meio de statements, garantindo transparência, rastreabilidade e controle sobre os gastos dos compradores.

Um budget pode ser subdividido em múltiplas allocations, e toda movimentação de valores como débitos, créditos e reembolsos, atualiza esses saldos de acordo com suas regras. A funcionalidade foi projetada para suportar fluxos nos quais budgets e allocations são criados, os saldos são consumidos por transactions ou reservations temporárias e, posteriormente, os statements são utilizados para reconciliar a atividade financeira ao longo do tempo.

>⚠️ A funcionalidade de Budgets está disponível apenas para B2B Buyer Portal. É necessária autorização do Commerce Engineer da conta para uso.

## Conceitos-chave

### Budget

Representa um montante financeiro usado para controlar gastos dentro de um contexto de negócio específico, como uma unidade organizacional ou um centro de custo. Ele define:

* O valor total disponível  
* O período em que esse valor pode ser usado, definido por uma data de início e, opcionalmente, uma data de término

O saldo do budget é atualizado conforme allocations e transactions alteram seus valores.

### Allocation

É uma subdivisão de um budget, permitindo distribuir o valor total entre diferentes entidades, como usuários, endereços e centro de custos. Qualquer alteração de saldo em uma allocation é automaticamente refletida no budget ao qual pertence.

### Transaction

É uma movimentação financeira definitiva que ajusta o saldo de uma allocation e do budget. As transactions são registradas nos statements e utilizam um campo de tipo para indicar se:

* **DEBIT**: subtraem valores   
* **CREDIT**: adicionam valores associados a reembolsos e cancelamentos

### Reservation

Bloqueia temporariamente um valor de uma allocation sem consumi-lo imediatamente. Posteriormente, essa reservation pode:

* Ser confirmada, gerando uma **transaction** correspondente  
* Ser cancelada, liberando o valor reservado sem gerar nenhuma entrada nos **statements**

### Refunds e tipos de transaction

As transactions não podem ser excluídas. Quando é necessário reverter uma transaction, cria-se um **refund**, que é representado como uma nova **transaction** do tipo CREDIT. Nos statements, tanto a transaction original DEBIT quanto o refund CREDIT aparecem, resultando em um efeito líquido zero no saldo do budget ou da allocation.

### Statements

São listas de registros financeiros de um budget ou allocation que mostram o histórico de movimentações ao longo do tempo. Expõem informações como identificadores, valores, datas, tipos e contexto, permitindo auditoria e conciliação das operações financeiras.

### Context

Identifica onde um budget se aplica e é representado pelos campos contextType e contextId. No contexto B2B, o tipo de contexto é sempre UNIT, enquanto o contextId identifica a unidade específica unitId onde o budget está sendo criado.

### Linked entity e configurações de notificação

As allocations podem ser associadas a uma **linked entity**, que descreve a qual allocation está vinculada, por exemplo, um usuário, um endereço ou um campo contábil como centro de custo. Budgets e allocations também podem ser configurados com **notification settings**, permitindo definir alertas baseados em limites ou percentuais de consumo.

## Casos de uso

### Controle de gastos B2B por unidade

Uma organização B2B pode precisar limitar quanto cada unidade de negócio pode gastar em determinado período. Você pode criar budgets associados a um **contextType UNIT** para controlar o consumo de forma centralizada.

### Acompanhamento e auditoria do uso de budgets

Times financeiros ou operacionais frequentemente precisam de visibilidade sobre como os budgets são utilizados ao longo do tempo. É permitido registrar todo consumo de valores como **transactions** e recuperar **statements** detalhados de budgets e allocations, apoiando auditorias internas, conciliações com sistemas financeiros externos e relatórios periódicos.

### Reservas temporárias e fluxos de aprovação

Alguns fluxos de negócio exigem que valores sejam reservados antes de uma aprovação final ou da conclusão de um pedido. É permitido criar reservations que bloqueiam temporariamente um valor em uma allocation. Dependendo do resultado do processo, essa reservation pode ser confirmada (gerando uma transaction) ou cancelada (liberando o valor).

### Gestão de reembolsos e correções de saldo

Quando pedidos são cancelados ou ajustes se fazem necessários, pode ser preciso devolver valores a uma allocation. Em vez de remover uma transaction existente, utiliza-se um refund, representado como uma transaction do tipo **CREDIT**, que adiciona o valor de volta ao saldo. Tanto o débito original quanto o crédito de refund permanecem visíveis nos statements, garantindo transparência.

### Monitoramento de consumo com notificações

Budgets podem ser configurados com notificações baseadas em limites de valor ou percentuais de uso. Isso permite alertar quando o consumo se aproxima ou atinge níveis críticos, ajudando as equipes a reagirem antes que os budgets sejam esgotados e a ajustarem allocations ou comportamentos de gasto.

