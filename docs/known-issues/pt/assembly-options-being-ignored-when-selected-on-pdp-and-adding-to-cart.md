---
title: 'Opções de montagem sendo ignoradas quando selecionadas no PDP e adicionadas ao carrinho'
id: 2u0qbC98EK6vPskprYOsnd
status: PUBLISHED
createdAt: 2023-01-31T16:00:13.354Z
updatedAt: 2023-04-05T21:24:34.525Z
publishedAt: 2023-04-05T21:24:34.525Z
firstPublishedAt: 2023-01-31T16:00:14.091Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: opcoes-de-montagem-sendo-ignoradas-quando-selecionadas-no-pdp-e-adicionadas-ao-carrinho
kiStatus: Fixed
internalReference: 743529
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em uma opção de montagem PDP, quando o usuário seleciona diferentes quantidades para um único item e vai para o carrinho de compras, a seleção é ignorada e as quantidades são redefinidas para a quantidade inicial. Mas se o usuário aumenta, para **todos** os itens, em 1 quantidade pelo menos a seleção é persistida.


##

## Simulação



- Faça o login na conta;
- Acesse o PDP em um produto com montagem;
- Os itens serão exibidos com as quantidades iniciais;
- Aumente em 1 a quantidade de qualquer um dos itens e clique no botão "Adicionar ao carrinho";
- Em seguida, vá até o carrinho da caixa e você notará as quantidades iniciais, o que significa que a seleção anterior foi ignorada.


##

## Workaround


Defina a quantidade mínima de itens que podem ser selecionados do grupo para 0 via Configurações do Anexo, por exemplo: [_**0**_-3]#10000[1-7][1]pricetable1;#20000[2-8][2]pricetable2;#30000[3-6][3]pricetable3



