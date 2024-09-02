---
title: 'Os Itens do carrinho são mantidos em ordens com valor total zero'
id: 66D6RuacgCeCMQDmLPrlNP
status: PUBLISHED
createdAt: 2024-06-24T20:59:07.721Z
updatedAt: 2024-06-24T20:59:08.668Z
publishedAt: 2024-06-24T20:59:08.668Z
firstPublishedAt: 2024-06-24T20:59:08.668Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-itens-do-carrinho-sao-mantidos-em-ordens-com-valor-total-zero
locale: pt
kiStatus: Backlog
internalReference: 1054999
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Sempre que um carrinho tiver um valor total de "0", nenhuma transação será criada ao finalizar um pedido.  Ao concluir um pedido por meio da interface do usuário do checkout, não ocorre nenhuma solicitação de processamento de pedido, portanto, os itens e os dados do carrinho são mantidos e o comprador pode criar um pedido com o mesmo carrinho novamente.

## Simulação



- Crie um carrinho com valor total `0`;
- Concluir a compra;
- Acesse novamente o carrinho depois de algum tempo; não haverá alteração no conteúdo do carrinho.



## Workaround


Não há nenhuma solução alternativa disponível.




