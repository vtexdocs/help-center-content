---
title: "A IU não muda de estado entre a entrega e a coleta corretamente"
id: 5gKsCV8Rh779FlzppablkP
status: PUBLISHED
createdAt: 2022-05-02T18:08:17.388Z
updatedAt: 2022-11-25T21:52:46.291Z
publishedAt: 2022-11-25T21:52:46.291Z
firstPublishedAt: 2022-05-02T18:08:17.892Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-iu-nao-muda-de-estado-entre-a-entrega-e-a-coleta-corretamente
locale: pt
kiStatus: Backlog
internalReference: 526736
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, quando o usuário muda o tipo de entrega entre a entrega e a retirada na caixa (importante estar na caixa e não no carrinho, embora isso provavelmente aconteça também no carrinho), o pedidoFormulário salva o estado de entrega em `logísticaInfo` quando o pickup é selecionado.



## Simulação


Para simular este cenário, basta ir para qualquer conta na v6. Preencha o carrinho com qualquer produto que tenha disponível o método de entrega como entrega ou retirada e proceda ao check-out.

Esta questão é intermitente. Demora um pouco para ver o problema acontecer.

Para que funcione, mude entre a entrega e a retirada repetidamente até que você perceba que o formulário de pedido armazena dentro de `logisticsInfo[index].selectedSla` o tipo de entrega definido para entrega quando de fato deve ser definido como o nome estabelecido para a opção de retirada escolhida. O erro geralmente acontece quando o pickup é escolhido e no orderForm temos o tipo de entrega definido como o nome da entrega configurado.

Nota: É importante notar que não há erro sendo relatado no formulário de pedido ou na plataforma. Nós temos a IU mostrando/selecionando um tipo de entrega e a orderForm mostrando uma IU diferente.



## Workaround


Para que a compra não seja impedida, quando este problema ocorrer, atualize a página para que a situação seja corrigida ou simplesmente mude o tipo de entrega, novamente, e volte, para resolver este problema.

