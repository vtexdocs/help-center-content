---
title: 'Conflito de interesses nos leva a identificar erroneamente a marca Cards'
id: 338SA4RpmfHwaqoY62uRjS
status: PUBLISHED
createdAt: 2022-03-25T22:11:51.426Z
updatedAt: 2022-11-25T22:09:01.048Z
publishedAt: 2022-11-25T22:09:01.048Z
firstPublishedAt: 2022-03-25T22:11:51.852Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: conflito-de-interesses-nos-leva-a-identificar-erroneamente-a-marca-cards
kiStatus: Backlog
internalReference: 316213
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Conflito de interesses nos leva a identificar erroneamente a marca Cards



## Simulação



1. Configurar duas Condições de Pagamento, uma para processamento de cartão de crédito Elo e outra para processamento de cartão de crédito Mastercard
2. Comprar um item aleatório na loja e optar por pagá-lo com cartão de crédito.
3. Preencha o número do cartão com o Elo BIN 506731 e complete com números aleatórios.
4. 4. Preencher as informações do cartão com dados falsos
5. Concluir a compra
6. Vá até admin e procure a transação já criada e o pagamento será identificado como Mastercard em vez de Elo




## Workaround



N/A

