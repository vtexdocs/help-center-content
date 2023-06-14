---
title: 'Itens repetidos no resumo de compras para carrinhos com mais de 20 itens'
id: 2k76x4aStel8e4ItTHfhof
status: PUBLISHED
createdAt: 2022-08-24T17:26:32.083Z
updatedAt: 2022-11-25T21:50:13.790Z
publishedAt: 2022-11-25T21:50:13.790Z
firstPublishedAt: 2022-08-24T17:26:32.624Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: itens-repetidos-no-resumo-de-compras-para-carrinhos-com-mais-de-20-itens
kiStatus: Backlog
internalReference: 367339
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao chegar à caixa com mais de 20 itens, os itens mostrados no resumo de compras (lista de itens do topo direito) podem ser duplicados. Os totalizadores e até mesmo o API estão corretos. O cenário não acontece na lista principal de itens (etapa do carrinho de compras).



## Simulação



- Crie um carrinho com mais de 20 itens;
- Adiantar em alguma configuração de checkout (perfil, envio ou pagamento)
- Vá para frente e para trás entre a página de checkout e a página de carrinho usando os botões UI;
- Os itens serão duplicados.



## Workaround


N/A

