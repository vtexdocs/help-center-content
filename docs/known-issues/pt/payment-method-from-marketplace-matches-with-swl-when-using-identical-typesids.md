---
title: 'O método de pagamento do Marketplace combina com o SWL ao utilizar tipos idênticos:ids'
id: 4AHyl5z7ySagx6Myx0KqM7
status: PUBLISHED
createdAt: 2022-03-15T22:06:35.540Z
updatedAt: 2024-02-16T20:29:19.824Z
publishedAt: 2024-02-16T20:29:19.824Z
firstPublishedAt: 2022-03-15T22:06:36.030Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-metodo-de-pagamento-do-marketplace-combina-com-o-swl-ao-utilizar-tipos-identicosids
locale: pt
kiStatus: No Fix
internalReference: 402140
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a configuração do método de pagamento, no produto promocional, não se destina a ser passada através da solicitação/resposta de cumprimento.

Entretanto, se o usuário definir 2 formas de pagamento identicamente em cada lado (mercado e vendedor), com a mesma identificação e tipo e estabelecer uma promoção com este tipo de restrição no mercado, em vários casos a validação das promoções identificará isto como uma correspondência para itens sendo vendidos com o estoque do vendedor.

Este "não deveria" estar acontecendo sob o produto atual, é um efeito colateral inesperado. 

Os efeitos colaterais não intencionais disto são difíceis de mapear, já que a implementação do produto original não foi mapeada para que funcionasse desta forma. O seu uso não garante seu funcionamento em todos os contextos e casos.

É recomendado que você use apenas o que o produto foi projetado para fazer. Atualmente, não é possível passar a condição do método de pagamento via cumprimento, e a filtragem através do mercado gera efeitos colaterais não mapeados.




## Simulação


1) Estabelecer um método de pagamento em um mercado.

2) Configurar uma forma de pagamento em uma conta de criança deste mercado com a mesma identificação, tipo.

3) Estabelecer uma promoção no mercado restrita por esta forma de pagamento.

4) No ambiente do mercado, addToCart um item usa um item usando o inventário do vendedor.

5) A promoção será aplicada sobre o item, o que NÃO deve ser o caso sob nosso atual comportamento esperado.




## Workaround


Nenhum (já que este é um efeito colateral não intencional de algo que "não deveria funcionar e está funcionando atualmente de forma não confiável").

