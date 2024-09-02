---
title: 'O checkout permite proceder ao formulário de pagamento sem endereço de remessa somente na IU'
id: 3k9zxMq6Pl9WBnIz5Hy6Xf
status: PUBLISHED
createdAt: 2022-11-18T18:42:08.326Z
updatedAt: 2024-02-16T20:27:39.990Z
publishedAt: 2024-02-16T20:27:39.990Z
firstPublishedAt: 2022-11-18T18:42:08.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-permite-proceder-ao-formulario-de-pagamento-sem-endereco-de-remessa-somente-na-iu
locale: pt
kiStatus: No Fix
internalReference: 699317
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho com SLA somente para entrega e o usuário digita um código postal correto, o checkout permite ao usuário prosseguir, no entanto, se o usuário retornar à página do carrinho novamente e mudar para a opção de retirada, então clique para continuar para a parte de pagamento, depois volte ao carrinho novamente, mude novamente para a opção de entrega e continue novamente, desta vez, o usuário vai para o formulário de pagamento. Além disso, há uma mensagem na parte do endereço de entrega dizendo que o componente está "esperando os dados para ser preenchido".



## Simulação


1- Adicione produtos ao carrinho e garanta que o único SLA disponível seja para entrega;
2- Vá até o checkout e preencha seu e-mail (usuário que tem dados preenchidos, endereço e perfil);
3- Vá para o formulário de envio e digite um código postal válido;
4- Retornar ao carrinho de compras;
5- Agora você escolhe a opção PUP;
6- Vá para o próximo passo;
7- Volte novamente ao carrinho e mude para entrega novamente (note que o código postal já está salvo) e depois clique para continuar;
8 - Agora você tem uma página sem dados de envio;



## Workaround


N/A

