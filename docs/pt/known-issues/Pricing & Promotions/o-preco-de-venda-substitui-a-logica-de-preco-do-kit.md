---
title: "O preço de venda substitui a lógica de preço do KIT"
id: 6eUXEJkxQUl6NCiFWrIiFw
status: PUBLISHED
createdAt: 2022-06-28T16:56:02.848Z
updatedAt: 2025-01-02T13:49:24.155Z
publishedAt: 2025-01-02T13:49:24.155Z
firstPublishedAt: 2022-06-28T16:56:03.203Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: o-preco-de-venda-substitui-a-logica-de-preco-do-kit
locale: pt
kiStatus: Backlog
internalReference: 404486
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A composição do preço do KIT deve ser baseada no cálculo de seus componentes e suas quantidades.

Ou seja, o preço de um KIT deve ser:
`SKU_KIT_Price= (component_1*qty_1) + (component_2*qty_2) + (...) + (component_n*qty_n)`

No entanto, atualmente há uma maneira de contornar essa lógica se o usuário inserir um PUT Price diretamente no sku do kit no Pricing Module.


## Simulação



1. Crie um KIT com pelo menos dois componentes e defina seus preços e quantidades;
2. Verifique se o preço do KIT está definido de acordo com a lógica mencionada acima.
3. Atualize o preço do KIT no módulo de preços inserindo um PUT Price no sku do kit;
4. Verifique se, mesmo ao atualizar os componentes de preço e suas quantidades, o preço do KIT permanecerá como o preço de venda definido anteriormente.

*Observação importante: isso também acontece com as alterações feitas diretamente no administrador do módulo de preços após a criação do kit. Essencialmente, o preço do kit só é corrigido quando criado de acordo com a fórmula acima, mas não para atualizações posteriores

## Workaround


Faça qualquer alteração nos componentes, um novo PUT Price com o novo cálculo e a lógica correta o substituirá novamente, normalizando o comportamento "errado".





