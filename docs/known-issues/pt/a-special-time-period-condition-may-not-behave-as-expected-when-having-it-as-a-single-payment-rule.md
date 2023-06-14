---
title: 'Uma condição especial de período de tempo pode não se comportar como esperado ao tê-la como uma regra de pagamento única'
id: 5bPV3FFGvHL0a8UyMuBxrc
status: DRAFT
createdAt: 2022-12-07T19:20:30.062Z
updatedAt: 2022-12-08T13:36:56.085Z
publishedAt: 
firstPublishedAt: 2022-12-07T19:20:30.655Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: uma-condicao-especial-de-periodo-de-tempo-pode-nao-se-comportar-como-esperado-ao-tela-como-uma-regra-de-pagamento-unica
kiStatus: Backlog
internalReference: 712575
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Todo o cache combinado com o recurso de Data de Vencimento pode causar um comportamento muito estranho para nossos compradores durante o Checkout. Os maiores problemas vêm da forma como o Gateway indexa os Métodos de Pagamento:


- Se um Método de Pagamento tem uma única regra, e essa regra foi indexada fora de seu período de tempo válido, então o Método de Pagamento **não*** aparecerá no índice. Ele não aparecerá também no formulário de checkout UI. Ela permanecerá ausente até que uma nova indexação seja acionada dentro de seu período de validade.


- Se um Pagamento tem uma única regra, e essa regra foi indexada dentro de seu período de tempo válido, então o Método de Pagamento aparecerá no índice, e por extensão, no formulário de Checkout UI. Mesmo se a regra expirar mais tarde, mas não houver nova indexação acionada, então o índice não será alterado e o método de pagamento continuará a aparecer no formulário UI de Checkout.


##

## Simulação



Criar uma única regra de pagamento para qualquer forma de pagamento e depois adicionar uma condição especial de período de tempo. Certifique-se de que está dentro do período válido, depois espere até o dia seguinte fora do período, você notará que este método de pagamento ainda aparecerá no checkout.


##

## Workaround



Evite ter uma única regra de pagamento com condições especiais de período de tempo.

