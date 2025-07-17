---
title: "A DiscountExpression sempre usa o frete mais barato, independentemente do frete selecionado"
id: 6tFmwOH8tYRohn29hC4jmR
status: PUBLISHED
createdAt: 2024-08-02T15:42:13.663Z
updatedAt: 2024-08-02T15:42:16.409Z
publishedAt: 2024-08-02T15:42:16.409Z
firstPublishedAt: 2024-08-02T15:42:16.409Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-discountexpression-sempre-usa-o-frete-mais-barato-independentemente-do-frete-selecionado
locale: pt
kiStatus: Backlog
internalReference: 1075053
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A `DiscountExpression`, que é um desconto baseado em uma fórmula definida nas configurações da promoção, sempre usa a opção de frete mais barata, independentemente do método de envio selecionado pelo cliente. Isso resulta em discrepâncias entre o desconto concedido e o desconto esperado com base no método de envio selecionado.


## Simulação



- Crie uma "fórmula" de promoção que aplique um desconto com base no valor total, incluindo o frete.
- Defina vários métodos de envio com custos diferentes.
- Adicione itens ao carrinho e selecione um método de envio que não seja o mais barato.
- Aplique a promoção e prossiga para o checkout.
- Observe que o desconto é calculado usando o método de envio mais barato, e não o selecionado.



## Workaround


Não há nenhuma solução alternativa disponível.





