---
title: "Os anexos de opções de montagem perdem a vinculação se os itens estiverem disponíveis em diferentes vendedores de marca branca"
id: 6hYI9jZIeOeJ78apjX7Fk2
status: PUBLISHED
createdAt: 2024-08-02T12:30:49.104Z
updatedAt: 2024-08-02T12:30:50.088Z
publishedAt: 2024-08-02T12:30:50.088Z
firstPublishedAt: 2024-08-02T12:30:50.088Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: os-anexos-de-opcoes-de-montagem-perdem-a-vinculacao-se-os-itens-estiverem-disponiveis-em-diferentes-vendedores-de-marca-branca
locale: pt
kiStatus: Backlog
internalReference: 1074856
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os anexos das opções de montagem perdem a vinculação quando dois itens são adicionados ao carrinho de diferentes vendedores de marca branca (um dos vendedores pode ser o vendedor 1), e ambos têm os mesmos anexos registrados nas opções de montagem.

O comportamento esperado é que cada anexo seja entregue de acordo com suas opções de montagem. No entanto, ambos os acessórios serão entregues pelo mesmo vendedor, fazendo com que todos os acessórios das opções de montagem e o segundo item sejam exibidos como indisponíveis.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Checkout/os-anexos-de-opcoes-de-montagem-perdem-a-vinculacao-se-os-itens-estiverem-disponiveis-em-diferentes-vendedores-de-marca-branca_1.png)

## Simulação



- Registre duas opções de montagem com os mesmos anexos;
- Registre o estoque de cada opção de montagem em diferentes vendedores de etiqueta branca;
- Registre o estoque do acessório em ambos os vendedores de marca branca;
- Adicionar as opções de montagem a um carrinho

## Workaround


N/A




