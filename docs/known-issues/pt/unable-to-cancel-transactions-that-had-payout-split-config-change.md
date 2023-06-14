---
title: 'Incapaz de cancelar transações que tiveram mudança de configuração de pagamento dividido'
id: 2bhsI5119DLOhNjk2cb6q
status: PUBLISHED
createdAt: 2022-06-28T16:44:10.992Z
updatedAt: 2022-11-25T22:06:55.006Z
publishedAt: 2022-11-25T22:06:55.006Z
firstPublishedAt: 2022-06-28T16:44:11.460Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incapaz-de-cancelar-transacoes-que-tiveram-mudanca-de-configuracao-de-pagamento-dividido
locale: pt
kiStatus: Backlog
internalReference: 364382
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há uma mudança na configuração, adicionando a divisão do pagamento, e isto faz com que novas transações tenham informações que antes não estavam disponíveis e agora serão utilizadas na operação de cancelamento, o que faz com que as transações criadas antes desta configuração não sejam canceladas.



## Simulação



1. Fazer uma transação sem que a divisão do pagamento seja configurada corretamente.
2. Antes que a transação seja finalizada, configure a divisão do pagamento.
3. Tente cancelar a transação via UI ou API.



## Workaround


Atualmente, não temos uma solução. As transações não poderão ser canceladas enquanto não tivermos uma solução. O que é indicado é que o cliente espera até que as transações de divisão pré-configuração sejam concluídas antes de se registrar.

