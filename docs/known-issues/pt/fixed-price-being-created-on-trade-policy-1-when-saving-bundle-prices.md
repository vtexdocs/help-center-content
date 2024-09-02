---
title: 'Preço fixo sendo criado na política comercial 1 ao economizar preços de pacote.'
id: 3Xbh5GVn0jm2yhaOiRg3Le
status: PUBLISHED
createdAt: 2022-11-28T12:41:07.808Z
updatedAt: 2024-02-16T20:24:01.848Z
publishedAt: 2024-02-16T20:24:01.848Z
firstPublishedAt: 2022-11-28T12:41:08.426Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: preco-fixo-sendo-criado-na-politica-comercial-1-ao-economizar-precos-de-pacote
locale: pt
kiStatus: No Fix
internalReference: 705869
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Um preço de kit sku (ou pacote de sku) é a soma dos preços dos componentes do sku multiplicados pela sua quantidade.

Se um kit for composto por 1 unidade de sku A e 2 unidades de sku B, seu preço será 1x(preço de A) + 2x(preço de B).

Ao economizar este preço ou ao alterar a quantidade dos componentes do kit através da administração do catálogo, está sendo criado um preço fixo na Política Comercial 1 para o kit sku.

No entanto, este não é um comportamento esperado.



## Simulação




1. Criar um kit no catálogo;
2. Definir o preço de um componente e a quantidade no kit;
3. Alterar a quantidade do componente;
4. Verificar se foi criado um preço fixo na política comercial 1 para o kit sku.



## Workaround


Nenhuma solução.

