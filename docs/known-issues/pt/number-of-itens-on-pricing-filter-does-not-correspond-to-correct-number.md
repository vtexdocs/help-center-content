---
title: 'O número de itens no filtro de preços não corresponde ao número correto'
id: 1FyjpY1K6JfAQ0gRIuXyuO
status: PUBLISHED
createdAt: 2022-03-16T19:37:02.943Z
updatedAt: 2022-11-25T22:12:33.361Z
publishedAt: 2022-11-25T22:12:33.361Z
firstPublishedAt: 2022-03-16T19:37:03.370Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-numero-de-itens-no-filtro-de-precos-nao-corresponde-ao-numero-correto
locale: pt
kiStatus: Backlog
internalReference: 371405
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na IU de Preços, somos capazes de filtrar por marca ou categoria. Depois de fazer um filtro, a IU retorna apenas os produtos no filtro, mas o total de itens retornados no menu é na verdade o total sem nenhum filtro, e os dados mostrados são filtrados como esperado.




## Simulação


- Ir para `.myvtex.com/admin/pricing/#/prices'.
- Fazer um filtro por marca ou categoria;
- Verificar o valor dos itens;


## Workaround


Apesar das informações de IU erradas, se exportarmos o filtro, ele retornará somente os produtos filtrados. É apenas uma informação mal entendida sobre o número de itens na IU.

