---
title: 'Como funciona a transferência de crédito entre empresas'
createdAt: '2026-11-19T00:00:00.000Z'
updatedAt: '2026-11-19T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: how-credit-transfer-between-companies-works
locale: pt
seeAlso:
  - "/pt/docs/tutorials/transferir-credito-entre-empresas-do-mesmo-grupo-economico"
  - "/pt/docs/tutorials/carteira-de-credito"
  - "/pt/docs/tutorials/consultar-carteira-de-credito"
---

A transferência de crédito permite que uma empresa envie parte do saldo da sua [carteira de crédito](/pt/docs/tutorials/carteira-de-credito) para outra empresa do mesmo grupo econômico. Assim, o grupo aproveita melhor o crédito disponível.

O crédito da carteira é gerado e usado no nível da empresa e abate a cobrança de [Master Data](/pt/docs/tutorials/master-data-pt) dessa mesma empresa. Em muitos grupos econômicos, algumas empresas geram crédito excedente e outras consomem mais Master Data do que o crédito disponível. A transferência resolve esse desequilíbrio.

Neste artigo, entenda quando a transferência é possível, quais são as suas regras, como ela afeta a fatura e como aparece no extrato. Para fazer uma transferência, veja [Transferir crédito entre empresas do mesmo grupo econômico](/pt/docs/tutorials/transferir-credito-entre-empresas-do-mesmo-grupo-economico).

## Regras da transferência

O crédito da carteira pertence à empresa, e não à conta. Por isso, a transferência acontece sempre entre empresas. Para entender como conta, empresa e grupo econômico se relacionam, veja [Estrutura de faturamento](/pt/docs/tutorials/carteira-de-credito#estrutura-de-faturamento).

Você escolhe o valor e não precisa de aprovação, mas só transfere entre empresas do mesmo grupo econômico e não pode reverter a transferência. A tabela a seguir apresenta as regras que se aplicam a toda transferência de crédito:

| Aspecto | Como funciona |
| --- | --- |
| Empresas permitidas | Apenas entre empresas do mesmo grupo econômico. Não é possível transferir entre grupos diferentes. |
| Grupo com uma única empresa | Não existe empresa de destino, então não é possível transferir crédito. |
| Origem e destino | A **empresa de origem** é a que envia o crédito e tem o saldo debitado. É a empresa à qual pertence a conta que você está acessando no Admin VTEX. A **empresa de destino** é a que recebe o crédito. |
| Destino da transferência | Sempre uma empresa, nunca uma conta. O nome de uma conta serve apenas para encontrar a empresa a que ela pertence. |
| Quem inicia | Somente a empresa de origem. A empresa de destino não consegue retirar crédito de outra empresa. |
| Visibilidade do saldo | A empresa de origem não vê o saldo da empresa de destino, e vice-versa. |
| Valor | Você escolhe quanto transferir. Pode ser qualquer valor maior que zero, até o saldo disponível da empresa de origem. |
| Aprovação | Não há fluxo de aprovação. A transferência é concluída após a confirmação. |
| Estorno | Não há. Para recuperar o saldo, a empresa de destino precisa fazer uma nova transferência. |
| Transferências encadeadas | Permitidas. Por exemplo, a empresa A transfere para a B, e a B transfere para a C. |
| Validade do crédito recebido | Segue a política de validade da empresa de destino. A política é configurada por empresa, e não por crédito. |
| Efeito sobre o crédito do grupo | A transferência não cria um conjunto de crédito compartilhado do grupo econômico. Ela também não altera como o crédito é gerado nem como é aplicado à cobrança de Master Data. Para saber como o crédito é calculado e usado, veja [Carteira de crédito](/pt/docs/tutorials/carteira-de-credito). |

> ⚠️ A transferência não pode ser desfeita.

## Prazo para abater a fatura

O crédito aparece na página **Créditos** conforme os clientes da empresa pagam ao longo do mês e pode ser transferido assim que aparece.

A fatura é gerada no dia 1º do mês seguinte, e o crédito que a empresa tem nesse momento abate a cobrança de Master Data. Por isso:

- Uma transferência só abate a fatura se o crédito chegar à empresa de destino antes de a fatura ser gerada.
- Uma transferência feita depois não altera a fatura já gerada. Ela vale a partir da fatura seguinte.

> ℹ️ Quando os clientes realizam pagamentos nos últimos dias do mês, o crédito pode ficar disponível sem tempo hábil para ser transferido antes da geração da fatura.

## Como a transferência aparece no extrato

Cada transferência gera duas entradas no **Extrato de crédito**, uma em cada empresa:

- **Empresa de origem:** transferência enviada para a empresa de destino, com valor, data e quem a realizou.
- **Empresa de destino:** transferência recebida da empresa de origem, com valor, data e quem a realizou. Quando a transferência é feita por uma integração, a chave de API (appKey) aparece no lugar do email.

Cada empresa vê apenas a sua própria entrada. Para saber como consultar o extrato, veja [Consultar carteira de crédito](/pt/docs/tutorials/consultar-carteira-de-credito).
