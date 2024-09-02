---
title: 'Mensagem de erro na gestão de ofertas não é atualizada depois que o sku é vinculado a integrações VTEX<>VTEX'
id: 5tMKDMsFTZlXQrkVM4WeJD
status: PUBLISHED
createdAt: 2022-12-08T14:02:22.948Z
updatedAt: 2024-02-16T20:24:16.785Z
publishedAt: 2024-02-16T20:24:16.785Z
firstPublishedAt: 2022-12-08T14:02:23.384Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: mensagem-de-erro-na-gestao-de-ofertas-nao-e-atualizada-depois-que-o-sku-e-vinculado-a-integracoes-vtexvtex
locale: pt
kiStatus: No Fix
internalReference: 712956
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando o sku é enviado para o mercado e há um erro no processo, uma interação será aberta como um erro na IU de gerenciamento de oferta. Dessa forma, a oferta será definida como status de erro.

Entretanto, se o erro for corrigido do lado do vendedor e o sku for enviado novamente para o mercado, desta vez com sucesso, a mensagem de erro não se atualiza para o sucesso, dada a impressão errada para o vendedor de que o sku ainda tem problemas.

Este comportamento está acontecendo nas integrações VTEX<>VTEX (vendedor e mercado são contas VTEX).


##

## Simulação




1. Em uma conta do portal do vendedor (ou qualquer conta com interface de gestão de ofertas) enviar um sku com um erro para o mercado;
2. Verifique na administração da oferta que há uma mensagem de erro neste sku;
3. Corrigir o sku e enviar novamente para o mercado;
4. 4. Verificar no mercado se o sku está corretamente vinculado;
5. 5. Verificar se a mensagem de erro não desapareceu na interface de gerenciamento da oferta do sku do vendedor.


##

## Workaround


Sem problemas, mas isso não afeta as vendas, o sku já está corretamente vinculado ao mercado;

