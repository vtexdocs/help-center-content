---
title: "B2B Checkout Settings está considerando o endereço de coleta para entregas"
id: 2yMng3qqLSfT43FoPvsmsj
status: PUBLISHED
createdAt: 2025-02-26T22:51:41.969Z
updatedAt: 2025-03-17T14:03:19.325Z
publishedAt: 2025-03-17T14:03:19.325Z
firstPublishedAt: 2025-02-26T22:51:42.713Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-esta-considerando-o-endereco-de-coleta-para-entregas
locale: pt
kiStatus: Backlog
internalReference: 1186568
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As configurações do B2B Checkout estão considerando todos os endereços disponíveis para entregas, inclusive os endereços de retirada. Se um endereço de retirada for selecionado, a página Checkout será congelada.

Na API de checkout é possível ver a mensagem "O endereço não pode ser usado para o canal de entrega fornecido".

## Simulação



- Adicione qualquer produto ao carrinho;
- Na etapa de envio, mude para retirada e volte para entrega;
- O endereço de retirada estará no endereço de entrega

## Workaround


Atualize a página.




