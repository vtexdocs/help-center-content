---
title: 'Lista de endereços disponíveis na interface do usuário do checkout sem dados para o endereço recém-criado'
id: 1BEDcoXLVAs5L039eKXsXv
status: PUBLISHED
createdAt: 2024-07-05T21:08:40.994Z
updatedAt: 2024-07-11T15:56:34.357Z
publishedAt: 2024-07-11T15:56:34.357Z
firstPublishedAt: 2024-07-05T21:08:42.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: available-addresses-list-on-checkout-ui-missing-data-for-newly-created-address
locale: pt
kiStatus: Backlog
internalReference: 1061630
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um usuário adiciona um novo endereço durante a etapa de envio do Checkout, avança para a etapa de pagamento e, em seguida, retorna à lista de endereços disponíveis da etapa de envio, esse endereço recém-criado pode estar ausente da lista ou exibir informações incompletas na interface do usuário.

## Simulação



Caso 1, para usuários autenticados:

1. Faça login na loja com um usuário que tenha pelo menos um endereço salvo e crie um carrinho.
2. Prossiga para o Checkout e acesse a tela de pagamento.
3. Clique em "Change shipping options" (Alterar opções de envio).
4. Clique em "Deliver to another address" (Entregar em outro endereço).
5. Preencha um novo endereço e clique em "Go to payment" (Ir para pagamento).
6. Clique novamente em "Change shipping options" (Alterar opções de envio).
7. Clique novamente em "Deliver to another address" (Entregar em outro endereço).
8. Clique em "Back to address list" (Voltar à lista de endereços).
9. O endereço recém-criado pode estar faltando na lista.

Caso 2, para usuários identificados, mas não autenticados:

1. Crie um carrinho e identifique-se com o e-mail de um usuário que tenha pelo menos um endereço salvo.
2. Prossiga para o Checkout e acesse a tela Payment (Pagamento).
3. Clique em "Change shipping options" (Alterar opções de envio).
4. Clique em "Deliver to another address" (Entregar em outro endereço).
5. Preencha um novo endereço e clique em "Go to payment" (Ir para pagamento).
6. Clique novamente em "Change shipping options" (Alterar opções de envio).
7. Clique novamente em "Deliver to another address" (Entregar em outro endereço).
8. Clique em "Back to address list" (Voltar à lista de endereços).
9. Para alguns países, o endereço recém-adicionado pode mostrar informações incompletas, como apenas o código postal e o nome do país.



## Workaround


Atualize a página.






