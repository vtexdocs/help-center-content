---
title: 'Lixeira enviada não corresponde a uma marca de cartão associada'
id: 4GvoMVXIVOdFueGiNfcTvk
status: PUBLISHED
createdAt: 2022-03-26T14:46:51.930Z
updatedAt: 2022-11-25T22:09:12.062Z
publishedAt: 2022-11-25T22:09:12.062Z
firstPublishedAt: 2022-03-26T14:46:52.370Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: lixeira-enviada-nao-corresponde-a-uma-marca-de-cartao-associada
locale: pt
kiStatus: Backlog
internalReference: 308896
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A plataforma permite que você envie um BIN com outra bandeira de marca de cartão. Por exemplo, o BIN: Um BIN VISA pode ser informado, mas você pode marcar a bandeira de marca do cartão Mastercard.
Entretanto, os clientes podem não ter configurado a marca do cartão na plataforma do adquirente, causando um custo operacional.



## Simulação



1. Ir para o checkout com um item aleatório
2. Compre por Cartão de Crédito e preencha um BIN Visa no campo de número do cartão e depois complete o número do cartão com números aleatórios
3. preencher o restante dos campos do cartão com informações aleatórias
4. Mudar a bandeira da marca do cartão que aparece no campo de número do cartão e fechar a compra.
5. Vá até o administrador da transação e veja a transação já criada com uma informação de marca de cartão errada



## Workaround


N/A

