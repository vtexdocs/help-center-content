---
title: 'Transferir crédito entre empresas do mesmo grupo econômico'
createdAt: '2026-11-18T00:00:00.000Z'
updatedAt: '2026-11-18T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: transferring-credit-between-companies-in-the-same-economic-group
locale: pt
seeAlso:
  - "/pt/docs/tutorials/carteira-de-credito"
  - "/pt/docs/tutorials/consultar-carteira-de-credito"
  - "/pt/docs/tutorials/visao-geral-informacoes-de-faturamento"
---

Se o seu grupo econômico tem empresas que geram crédito de sobra e outras que consomem mais [Master Data](/pt/docs/tutorials/master-data-pt) do que o crédito disponível, você pode transferir parte do saldo da [carteira de crédito](/pt/docs/tutorials/carteira-de-credito) de uma empresa para outra pela página **Créditos** do Admin VTEX.

Neste artigo, entenda como a transferência funciona e como realizá-la.

## Antes de começar

A estrutura de faturamento da VTEX segue esta hierarquia: **conta → empresa → grupo econômico**.

- **Conta**: uma loja ou ambiente VTEX. Cada conta pertence a uma única empresa. O crédito não fica na conta, e sim na empresa a que ela pertence.
- **Empresa**: unidade que possui a carteira de crédito, o extrato de crédito e a fatura consolidada. Agrupa uma ou mais contas e tem a sua própria política de validade do crédito.
- **Grupo econômico**: conjunto de empresas que pertencem ao mesmo cliente.

A transferência só é possível entre empresas do mesmo grupo econômico. Se o seu grupo econômico tem apenas uma empresa, não há empresa de destino e, portanto, não é possível transferir crédito.

> ⚠️ Para transferir crédito, é necessário ter a permissão `Transfer Credit` na empresa de origem. Ela vale para usuários (e-mail) e para chaves de API (appKey). O botão `Transferir crédito` só aparece para quem tem essa permissão na empresa atual.

Também é necessário ter acesso à página **Créditos**. Saiba mais em [Consultar carteira de crédito](/pt/docs/tutorials/consultar-carteira-de-credito).

## Como transferir crédito

Para transferir crédito para outra empresa do grupo econômico, siga os passos a seguir:

1. No Admin VTEX, clique no seu avatar — identificado pela inicial do seu e-mail — no canto superior direito da tela.
2. Clique em **Informações de faturamento > Créditos**.
3. Clique em `Transferir crédito`.
4. No modal que se abre, preencha os campos:
   - **Origem**: a empresa atual, com o saldo disponível.
   - **Destino**: selecione a empresa que receberá o crédito.
   - **Valor**: informe o valor a transferir.

   O modal exibe um aviso fixo informando que o crédito pertence à empresa, e não à conta, e que a transferência move crédito entre empresas.
5. Revise o resumo da transferência, que mostra a origem, o destino, o valor e o novo saldo da empresa de origem. A tela pede uma confirmação, nomeando as duas empresas e lembrando que a transferência não pode ser desfeita. Um aviso também informa que o crédito transferido pode ser usado na próxima fatura, gerada no dia 1 do mês seguinte. Saiba mais em [Prazo para abater a fatura](#prazo-para-abater-a-fatura).
6. Confirme a transferência.

Ao preencher os campos, considere as seguintes regras:

- O campo **Origem** não pode ser alterado.
- A lista do campo **Destino** exibe apenas empresas do mesmo grupo econômico, pelo nome cadastrado no Billing, e não inclui a empresa atual. Se houver nomes repetidos, o ID da empresa aparece ao lado do nome. Não é possível digitar um ID livre.
- O **Valor** deve ser maior que zero e até o saldo disponível da empresa de origem.

Nada é enviado antes da confirmação. Quando a transferência é concluída, o modal exibe o identificador da transferência, a empresa de destino e o valor transferido. Ao fechar o modal, o extrato e o saldo da empresa de origem são atualizados.

> ⚠️ A transferência não pode ser desfeita. Antes de confirmar, verifique a empresa de destino e o valor.

### Buscar a empresa de destino por nome de conta

Se você não souber o nome da empresa de destino, digite o nome de uma conta do grupo econômico no campo de busca para encontrar a empresa a que ela pertence.

O destino da transferência é sempre a empresa, nunca a conta, e a tela avisa isso. Se a conta pertencer à própria empresa de origem, a tela informa que é a mesma empresa e não permite continuar. Se nenhuma conta for encontrada no grupo econômico, a tela apenas informa que não há resultados, sem indicar se a conta existe em outro grupo.

## Como a transferência aparece no extrato

Cada transferência gera duas entradas no **Extrato de crédito**, uma em cada empresa, ligadas pelo mesmo identificador de transferência:

- **Empresa de origem**: transferência enviada para a empresa de destino, com valor, data e quem a realizou.
- **Empresa de destino**: transferência recebida da empresa de origem, com valor, data e quem a realizou. Quando a transferência é feita por uma integração, a chave de API (appKey) aparece no lugar do e-mail.

Cada empresa vê apenas a sua própria entrada. A empresa de origem não vê o saldo da empresa de destino, e vice-versa.

## Regras da transferência

- A transferência é parcial. Você escolhe o valor, sem limite máximo além do saldo disponível.
- Não há fluxo de aprovação.
- Não há estorno. Se precisar do crédito de volta, a empresa de destino precisa fazer uma nova transferência.
- Só a empresa de origem pode iniciar a transferência. Não é possível retirar crédito de outra empresa.
- O crédito recebido segue a política de validade da empresa de destino.
- Transferências encadeadas são permitidas. Por exemplo, a empresa A transfere para a B, e a B transfere para a C.
- A transferência não cria um conjunto de crédito compartilhado do grupo econômico, e não altera como o crédito é gerado nem como é aplicado à cobrança de Master Data.

### Prazo para abater a fatura

O crédito aparece na página **Créditos** conforme o cliente paga ao longo do mês, e pode ser transferido assim que aparece.

A fatura é gerada no dia 1 do mês seguinte, e o crédito que a empresa tem nesse momento abate a cobrança de Master Data. Por isso:

- Uma transferência só abate a fatura se o crédito chegar à empresa de destino antes de a fatura ser gerada.
- Uma transferência feita depois não altera a fatura já gerada. Ela vale a partir da fatura seguinte.

> ℹ️ Quem paga nos últimos dias do mês pode ver o crédito tarde demais para transferi-lo antes da geração da fatura.

## Mensagens de erro

A transferência não é concluída nos seguintes casos, e a tela exibe uma mensagem explicando o motivo:

- Saldo insuficiente na empresa de origem
- Empresa de destino fora do grupo econômico
- Valor inválido
- Empresa de destino inexistente
- Falta de permissão para transferir a partir da empresa de origem
- Transferência duplicada, caso em que a mensagem descreve a transferência já realizada
