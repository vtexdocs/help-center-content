---
title: "Erro 'não pode criar critérios de busca! erro: o filtro já existe: 'brandId' ao criar uma promoção excluindo mais de 1 marca."
id: 6s6cvYpImIBEH0SLqE3J2U
status: PUBLISHED
createdAt: 2022-09-22T15:53:15.001Z
updatedAt: 2024-02-16T20:23:47.779Z
publishedAt: 2024-02-16T20:23:47.779Z
firstPublishedAt: 2022-09-22T15:53:16.277Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: erro-nao-pode-criar-criterios-de-busca-erro-o-filtro-ja-existe-brandid-ao-criar-uma-promocao-excluindo-mais-de-1-marca
locale: pt
kiStatus: No Fix
internalReference: 663698
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao criar uma promoção, o cliente pode decidir a quais itens a promoção será aplicada.

Uma das possibilidades é selecionar os itens por marca, incluindo ou excluindo.

Ao tentar excluir mais de 1 marca, o seguinte erro aparece na IU:
Não é possível criar critérios de busca! erro: o filtro já existe: "brandId"``.

No final a promoção será criada corretamente e será aplicada corretamente nos cartlinks, esta mensagem de erro é apenas um aviso sobre a busca no catálogo que não está sendo feita como esperado.




## Simulação



1. Criar ou entrar em uma promoção;
2. Ir para o passo 2 da promoção e tentar excluir mais de 1 marca;
3. Verifique se a mensagem de erro aparecerá.



## Workaround


Uma vez que este erro não tem efeitos colaterais, a não ser visual enquanto se salva a promoção, não há necessidade de trabalho.

