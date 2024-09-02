---
title: 'Seleção inesperada de vários pontos de coleta para o mesmo vendedor quando nem todos os itens estão disponíveis na mesma opção'
id: 1ILqLtP5CgtO6fhqh1dAgm
status: PUBLISHED
createdAt: 2022-08-16T01:03:28.941Z
updatedAt: 2023-05-08T18:34:26.625Z
publishedAt: 2023-05-08T18:34:26.625Z
firstPublishedAt: 2022-08-16T01:03:29.934Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: selecao-inesperada-de-varios-pontos-de-coleta-para-o-mesmo-vendedor-quando-nem-todos-os-itens-estao-disponiveis-na-mesma-opcao
locale: pt
kiStatus: Backlog
internalReference: 467702
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Os componentes do ponto de retirada no front-end do checkout estão preparados para lidar com uma única opção de cada vendedor. Os itens de diferentes vendedores regulares são gerenciados separadamente, mas se for um vendedor de marca branca, eles serão considerados no mesmo grupo.

Se nem todos os itens estiverem disponíveis na mesma opção de ponto de retirada para o mesmo vendedor, isso pode levar a um estado errado, que inclui não lidar corretamente com os itens de uma opção selecionada em um segundo momento ou até mesmo não mostrar corretamente as opções adicionais aplicadas a diferentes itens no formulário de pedido, concentrando-se apenas na primeira opção de ponto de retirada.

O cenário esperado é que qualquer opção selecionada anteriormente seja removida para aplicar apenas a última opção selecionada pelo usuário.

## Simulação




- ter um carrinho com um endereço em que não há opções de retirada para todos os itens,
- interagir com as diferentes opções de retirada para ver combinações inesperadas



## Workaround


Atualmente, não há solução alternativa para esse cenário.




