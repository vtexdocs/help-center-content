---
title: 'Endereço sem país perturbando o pedidoMudanças na forma'
id: 3LfFmUaetyqZij8MCBJtcY
status: PUBLISHED
createdAt: 2022-05-16T19:58:42.987Z
updatedAt: 2024-02-16T20:23:23.949Z
publishedAt: 2024-02-16T20:23:23.949Z
firstPublishedAt: 2022-05-16T19:58:43.429Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: endereco-sem-pais-perturbando-o-pedidomudancas-na-forma
locale: pt
kiStatus: No Fix
internalReference: 579814
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se um endereço incompleto sem a informação "país" for inserido em um formulário de pedido, os itens não podem ser acrescentados a ele.

Isso acontece porque o cálculo do envio depende disso, mas embora não haja itens no carrinho, este processo não é acionado, permitindo que endereços inválidos sejam registrados.

Acontece principalmente através do uso direto de API. Nos registros internos, a exceção pode ser encontrada como "O campo País é obrigatório", sob o código de status 400.



## Simulação



- para criar um formulário de pedidos (sem itens ainda)
- para adicionar um endereço através do SendAttachment API (ShippingData), sem a propriedade do país
- para tentar adicionar um item; isso irá gerar uma exceção genérica



## Workaround


É necessário garantir que cada endereço contenha as informações do "país" desde a implementação do frontend.

