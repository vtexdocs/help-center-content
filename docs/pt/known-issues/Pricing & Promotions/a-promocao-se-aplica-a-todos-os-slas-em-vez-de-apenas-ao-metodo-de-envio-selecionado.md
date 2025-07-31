---
title: "A promoção se aplica a todos os SLAs em vez de apenas ao método de envio selecionado"
id: 4ZtMasrYDttDtrtqGHrdrV
status: PUBLISHED
createdAt: 2025-07-24T12:50:20.910Z
updatedAt: 2025-07-24T18:02:56.147Z
publishedAt: 2025-07-24T18:02:56.147Z
firstPublishedAt: 2025-07-24T12:50:22.107Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-promocao-se-aplica-a-todos-os-slas-em-vez-de-apenas-ao-metodo-de-envio-selecionado
locale: pt
kiStatus: Backlog
internalReference: 1265187
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As promoções que devem ser restritas a um método de envio específico (SLA) não estão se comportando corretamente, a menos que o sinalizador obsoleto `isSlaSelected` seja explicitamente definido como `true`. A nova UI de promoção regular não expõe mais esse sinalizador e, ao criar promoções por meio dela, o sinalizador tem como padrão `false`. Isso resulta em um comportamento incorreto, em que o benefício é aplicado a qualquer método de envio disponível, desde que o método especificado esteja listado entre as opções na simulação do carrinho.

## Simulação



- Crie uma promoção com um desconto restrito a um método de envio específico e válido usando o novo formulário Promoção regular.
- No carrinho, adicione um produto e certifique-se de que os métodos de envio específicos estejam disponíveis para o carrinho.
- Observe que, mesmo que o método de envio selecionado não seja o configurado nas definições da promoção, o desconto ainda será aplicado
- O comportamento esperado é que o desconto seja aplicado somente se o método de envio específico for realmente selecionado.
- Isso só funciona corretamente se o sinalizador obsoleto `isSlaSelected` for definido como `true` (o que não é possível por meio da nova UI)

## Workaround


Defina `isSlaSelected = true` por meio da API. Isso garante que a promoção seja aplicada somente depois que o SLA correspondente for selecionado.





