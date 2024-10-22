---
title: 'Layout do My Orders quebrado sem nenhuma customização'
id: 6o2E1VOSaW2Yso0Cg0uU8Q
status: PUBLISHED
createdAt: 2017-05-26T15:03:53.391Z
updatedAt: 2019-12-31T15:18:57.122Z
publishedAt: 2019-12-31T15:18:57.122Z
firstPublishedAt: 2017-05-26T15:06:46.244Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_6
tag: My Orders
slugEN: my-orders-layout-breaking-without-customization
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

<div class="alert alert-success">
  <div><strong>Fix:</strong></div>
  <div>O problema foi corrigindo com a propriedade <code>:root { font-size: 16px }</code> sendo entregue pelo próprio Meus Pedidos.</div>
</div>

---


![Screen Shot 2017-05-26 at 12.01.58](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Post-purchase/layout-do-my-orders-quebrado-sem-nenhuma-customizacao_1.png)

Se o layout do novo Meus Pedidos apresentar problemas em sua loja _out of the box_, sem nenhuma customização, pode ser que o CSS de sua loja esteja interferindo com ele.

Algumas versões do Bootstrap adicionam o CSS `html { font-size: 10px }`, o que interfere com os tamanhos dos elementos do novo My Orders.

## Simulação

1. Acessar `{NOMEDALOJA}.com/account/orders`;
2. Ver a lista de pedidos de alguma conta.

## Workaround

Customizar o CSS de sua loja com a propriedade CSS `html { font-size: 16px }` no My Orders, para restaurar a proporção original dos elementos.

