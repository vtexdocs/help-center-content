---
title: 'forma não resiliente a mudanças no itemAparelhamento e ofertas'
id: 2pNOpx38Dca7HBomTZBdAD
status: PUBLISHED
createdAt: 2022-01-05T20:40:21.829Z
updatedAt: 2022-11-25T21:51:57.663Z
publishedAt: 2022-11-25T21:51:57.663Z
firstPublishedAt: 2022-06-29T13:12:46.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: forma-nao-resiliente-a-mudancas-no-itemaparelhamento-e-ofertas
locale: pt
kiStatus: Backlog
internalReference: 334191
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O OrderForm é sensível à mudança ou remoção de um item do catálogo de produtos. Se um itemAttachment deixar de existir ou começar a ter outro padrão de validação, um orderForm que já tenha dados antigos se tornará inacessível, e não será possível prosseguir com o fluxo de compra.
Este cenário também se aplica aos serviços (ofertas).



## Simulação



- Criar um anexo no catálogo e torná-lo disponível em algum item
- Criar um formulário de pedido, com estes itens
- Adicionar anexo ao item
- Desativar ou renomear anexo no catálogo



## Workaround


Uma vez registrado, os anexos do item não devem ser alterados, a menos que seja possível garantir que não haverá carrinhos com estas informações preenchidas.

