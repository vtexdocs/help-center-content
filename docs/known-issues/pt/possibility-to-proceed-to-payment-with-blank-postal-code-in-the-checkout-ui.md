---
title: 'Possibilidade de proceder ao pagamento com código postal em branco na caixa UI'
id: 32IVEgy5AgcFkCimUl87Rp
status: PUBLISHED
createdAt: 2023-01-18T21:46:19.613Z
updatedAt: 2023-01-18T21:47:44.853Z
publishedAt: 2023-01-18T21:47:44.853Z
firstPublishedAt: 2023-01-18T21:46:20.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: possibilidade-de-proceder-ao-pagamento-com-codigo-postal-em-branco-na-caixa-ui
kiStatus: Backlog
internalReference: 334310
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você é um usuário que tem um login e vai ao checkout, onde os dados são mascarados, e no formulário de envio, escolhe a opção de entrega para outros endereços, há a possibilidade de ir ao pagamento sem a necessidade de preencher o código postal. Assim, chegando ao processo de pagamento com os dados de entrega vazios na UI.


##

## Simulação


Você tem que ter seus dados mascarados e um produto que seja ao mesmo tempo entrega e coleta.


1. Adicionar produtos ao carrinho (sem login)
2. Vá até o checkout e preencha com seu e-mail (usuário que tem dados preenchidos, endereço e perfil)
3. Entre na caixa com seus dados mascarados
4. Vá para o formulário de embarque e escolha "Entregador em outro endereço".
5. Não preencha o código postal e pressione o botão "Ir para pagamento".
6. Agora você tem um endereço de remessa em branco


##

## Workaround


NA



