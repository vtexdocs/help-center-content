---
title: 'Carteira de crédito: transfira crédito entre empresas do mesmo grupo econômico'
createdAt: 2026-11-30T12:00:00.000Z
updatedAt: 2026-11-30T12:00:00.000Z
contentType: updates
productTeam: Billing
slugEN: 2026-11-30-credit-wallet-transfer-credit-between-companies-in-the-same-economic-group
locale: pt
announcementSynopsisPT: 'Agora você pode transferir parte do saldo da carteira de crédito de uma empresa para outra do mesmo grupo econômico pela página Créditos do Admin VTEX.'
tags:
  - Nova funcionalidade
  - Faturamento
---

No Admin VTEX, agora você pode transferir parte do saldo da [carteira de crédito](/pt/docs/tutorials/carteira-de-credito) de uma empresa para outra empresa do mesmo grupo econômico. Para isso, acesse a página **Créditos**, em **Informações de faturamento**. Assim, você otimiza o uso do crédito disponível entre as empresas do grupo.

## O que mudou?

Anteriormente, só a empresa que gerava o saldo da carteira de crédito podia usá-lo. Agora, na página **Créditos** do Admin VTEX, o novo botão `Transferir crédito` permite mover parte do saldo da empresa atual para outra empresa do mesmo grupo econômico. Você escolhe a empresa de destino, informa o valor (maior que zero e até o saldo disponível) e confirma a transferência após revisar o resumo.

Cada transferência gera uma entrada no **Extrato de crédito** da empresa de origem e outra no da empresa de destino. O crédito recebido segue a política de validade da empresa de destino.

Considere as regras a seguir:

- Você só pode transferir crédito entre empresas do mesmo grupo econômico.
- A transferência é parcial, não tem fluxo de aprovação e você não pode desfazê-la.
- Só a empresa de origem pode iniciar a transferência.
- Para que a transferência abata a fatura, o crédito precisa chegar à empresa de destino antes de a VTEX gerar a fatura, no dia 1 do mês seguinte.
- Uma transferência que você faz depois dessa data vale a partir da fatura seguinte.

## Por que fizemos essa mudança?

Cada empresa gera e usa o crédito da carteira de crédito no próprio nível, e esse crédito abate a cobrança de Master Data dessa mesma empresa. Em grupos econômicos com gestão financeira centralizada, algumas empresas consomem muito Master Data e geram pouco crédito, e outras geram crédito excedente. Com a transferência, você usa o crédito disponível no grupo onde ele for necessário.

## O que precisa ser feito?

Para transferir crédito, você precisa ter a permissão `Transfer Credit` na empresa de origem. Essa regra vale para usuários e para chaves de aplicação (`appKey`).

Para instruções detalhadas, acesse [Transferir crédito entre empresas do mesmo grupo econômico](/pt/docs/tutorials/transferir-credito-entre-empresas-do-mesmo-grupo-economico).
