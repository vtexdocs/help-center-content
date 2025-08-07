---
title: 'As promoções "Mais por menos" estão sendo aplicadas incorretamente a quantidades sobrepostas'
id: 58LCIFlyd31Yxuq5U0lKuo
status: PUBLISHED
createdAt: 2024-12-12T14:45:56.909Z
updatedAt: 2024-12-12T14:45:57.721Z
publishedAt: 2024-12-12T14:45:57.721Z
firstPublishedAt: 2024-12-12T14:45:57.721Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: as-promocoes-mais-por-menos-estao-sendo-aplicadas-incorretamente-a-quantidades-sobrepostas
locale: pt
kiStatus: Backlog
internalReference: 1149846
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando várias promoções "Mais por menos" são aplicadas a uma coleção com um limite de valor máximo para itens, o serviço Rates and Benefits (RnB) não consegue avaliar corretamente a aplicabilidade das promoções. Isso resulta na aplicação de mais de uma promoção, mesmo quando as quantidades de itens do carrinho deveriam permitir apenas uma promoção.

## Simulação



1. Configure a **Promoção 1**:
  - Type (Tipo): "Mais por menos"
  - Collection (Coleção): X
  - Condição: 2 itens por um valor máximo menor do que o preço normal dos produtos da coleção (por exemplo, a promoção reduz o preço do item em comparação com sua configuração padrão).
2. Configure a **Promoção 2**:
  - Type (Tipo): "More for Less" (Mais por menos)
  - Collection (Coleção): X
  - Condição: 3 itens por um valor máximo que oferece um desconto ainda maior no preço do item em comparação com a Promoção 1.
3. Teste os seguintes cenários:
  - Adicione **1 unidade do Produto A** e **1 unidade do Produto B**. Verifique se a **Promoção 1** se aplica e limita o preço do item de acordo com sua configuração. _(Comportamento esperado)_
  - Adicione **2 unidades do Produto A** e **1 unidade do Produto B**. Verifique se a **Promoção 2** se aplica, oferecendo um desconto maior que o da Promoção 1. _(Comportamento esperado)_
  - Adicione **3 unidades do Produto A** e **1 unidade do Produto B**. Verifique se a **Promoção 1** e a **Promoção 2** se aplicam incorretamente, mesmo que a quantidade do carrinho deva acionar apenas a Promoção 2. _(Comportamento inesperado)_
  - Adicione **3 unidades do Produto A** e **2 unidades do Produto B**. Verifique se apenas a **Promoção 2** é aplicada quando ambas as promoções deveriam ser aplicadas. _(Comportamento inesperado)_

O RnB perde o controle das quantidades e de quais produtos já têm descontos aplicados, levando à aplicação incorreta da promoção.



## Workaround


No momento, não há nenhuma solução alternativa conhecida para evitar esse problema.






