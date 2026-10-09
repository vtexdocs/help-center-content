---
title: 'SKU com unidades positivas no inventário, mas indisponível para venda'
excerpt: "Estoques no mesmo canal de venda compartilham o saldo. Uma quantidade negativa em um estoque pode anular o saldo positivo em outro."
id: 6HIEgJSYM8S05IyWHnIcOn
status: PUBLISHED
createdAt: 2022-02-15T15:41:43.419Z
updatedAt: 2026-10-07T00:00:00.000Z
publishedAt: 2022-02-15T15:49:48.146Z
firstPublishedAt: 2022-02-15T15:49:19.393Z
contentType: frequentlyAskedQuestion
productTeam: Shipping
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: sku-available-in-stock-but-unavailable-for-sale
locale: pt
legacySlug: sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda
---

Quando dois ou mais estoques utilizam a mesma [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) e há uma quantidade negativa de unidades em um desses estoques, o SKU fica indisponível para venda, mesmo que exista uma quantidade disponível em um dos estoques no [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).

Isso ocorre porque a plataforma VTEX soma as unidades negativas de SKU de determinado estoque às unidades positivas de outro estoque. Se a soma dessas quantidades é zero, o SKU fica indisponível para vendas na loja.

Saiba mais sobre estoque negativo no artigo [Como atualizar itens no inventário.](/pt/docs/tutorials/gerenciar-itens-em-estoque#atualizar-estoque)

> ℹ️ O [VTEX Copilot](/pt/docs/tutorials/vtex-copilot-no-admin-vtex), no Admin VTEX, pode investigar este SKU: envie o ID do SKU e ele consulta o estoque em cada armazém, incluindo quantidades reservadas e disponíveis, e indica o que está deixando o item indisponível para venda.
