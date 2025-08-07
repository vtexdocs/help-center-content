---
title: "O item adicionado à ordem de modificação está em outro pacote depois de faturado"
id: 4a3VAtnfhYeg2N1EekVyO2
status: PUBLISHED
createdAt: 2022-08-19T19:25:08.342Z
updatedAt: 2023-05-09T12:40:52.392Z
publishedAt: 2023-05-09T12:40:52.392Z
firstPublishedAt: 2022-08-19T19:25:09.023Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: o-item-adicionado-a-ordem-de-modificacao-esta-em-outro-pacote-depois-de-faturado
locale: pt
kiStatus: Backlog
internalReference: 412526
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os itens removidos ou adicionados pelo fluxo da ordem de alteração não fazem parte do pacote, portanto, não serão exibidos no e-mail da fatura e, caso todos os itens de um pedido sejam removidos e adicionados posteriormente, o e-mail da fatura não será enviado, pois os itens adicionados não são adicionados ao pacote original do pedido;

## Simulação


1 - Tenha um pedido no status "**Handling shipping**" e, em seguida, selecione "_Item Change_";
2 - Adicione uma ou mais unidades de uma SKU existente ao pedido (ou adicione uma nova SKU);
3 - Verifique se a unidade foi adicionada ao pacote;
4 - Faturar o pedido (via UI ou API). Nesse caso, fiz isso por meio da interface do usuário (_"Invoice package" > "Send an invoice" > "Total"_). Mas você pode fazer isso usando esse endpoint;
5 - E então, podemos observar que, mesmo depois de faturar o pacote inteiro, a unidade adicionada estava em um pacote separado;
6 - E não é possível faturar esse pacote separadamente;

O pedido estará normalmente no status "**Invoiced**", mas esse detalhe não é muito "amigável" para o usuário (pacotes separados)

## Workaround


Infelizmente, não temos uma solução alternativa para esse cenário.

