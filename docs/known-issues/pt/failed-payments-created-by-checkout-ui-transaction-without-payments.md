---
title: 'Pagamentos falhados criados pela caixa UI (transação sem pagamentos)'
id: 1LiK9rfhz2ULgmaitcYyyH
status: PUBLISHED
createdAt: 2022-09-26T14:32:12.988Z
updatedAt: 2022-11-25T22:04:12.988Z
publishedAt: 2022-11-25T22:04:12.988Z
firstPublishedAt: 2022-09-26T14:32:17.719Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: pagamentos-falhados-criados-pela-caixa-ui-transacao-sem-pagamentos
locale: pt
kiStatus: Backlog
internalReference: 339243
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Casos de pedidos incompletos onde suas transações não têm pagamentos.
Nos logs do "gatewayCallback" (Checkout API) e do próprio Gateway, podemos ver apenas o volume de transações que foram consultadas ao final da compra, mas que não tiveram pagamentos.
Nos logs da UI, temos apenas o registro genérico "payment-fail", o que não nos leva à causa.
Naturalmente, o motivo do pedido não estar concluído e a transação ficar sem pagamento vem da IU, que neste momento é quem envia os dados relevantes diretamente para a API do Gateway.



## Simulação


Não há provas de como reproduzir o caso e ele pode ter várias causas de raiz.

**No lado do Gateway, pode haver razões específicas ou diferentes, que eventualmente vêm na resposta do API (e podem até impedir a realização do "gatewayCallback"), mas também há casos que não geram nenhum registro lá (gateway). Em ambos os casos, para prosseguir com a investigação espera-se ter este registro da UI Checkout.**

Portanto, podemos ver o seguinte cenário:

- Criação da transação
- gatewayCallback devolvendo que a transação não teve pagamento
- Registro do "payment-fail" da IU sem detalhar o motivo (note que o registro provavelmente está atrasado em relação ao ponto anterior)
- Zero registros do portal sobre "ReceiveArrayPayments", o que registraria erros no pedido de "sendPayments" que a UI faz



## Workaround


N/A

