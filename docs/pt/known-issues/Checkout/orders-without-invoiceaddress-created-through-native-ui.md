---
title: 'Pedidos sem invoiceAddress criados por meio da UI nativa'
id: 1XjNZhcTJ5rZJP4w3kJtcW
status: PUBLISHED
createdAt: 2022-01-24T20:21:07.893Z
updatedAt: 2023-12-19T21:34:15.743Z
publishedAt: 2023-12-19T21:34:15.743Z
firstPublishedAt: 2022-06-27T19:49:05.878Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-sem-invoiceaddress-criados-por-meio-da-ui-nativa
locale: pt
kiStatus: Fixed
internalReference: 306140
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em alguns casos, ainda é possível criar pedidos sem o `invoiceAddress` por meio da interface de checkout.
O endereço da fatura deve ser obrigatório na interface do usuário de todas as lojas que tenham a funcionalidade ativada.

## Simulação


Até o momento, as etapas conhecidas para reproduzir o cenário são:


1. Acessar a loja sem estar conectado/identificado
2. Colocar um produto no carrinho
3. No carrinho, clique em Fechar pedido
4. Na tela de e-mail, coloque um e-mail de um comprador existente - o usuário provavelmente será direcionado para a etapa de pagamento
5. Clique para editar a etapa de entrega e selecione "withdrawal" (retirada)
6. Não preencha o endereço da nota
7. Clique para editar "Personal Data" (Dados pessoais)
8. Você será solicitado a fazer login.
9. Após o login, na etapa de edição de "Personal Data", aparecerá o botão para ir direto ao pagamento, mesmo que o endereço da fatura não esteja preenchido.

Além dos casos acima, o comportamento pode ser observado quando o usuário está na etapa de envio e, ao recarregar a página, é levado automaticamente para o pagamento sem preencher os dados da fatura.
Outro cenário que induz o comportamento é alternar entre a lista de endereços registrados anteriormente e um novo endereço, o que permite que o usuário prossiga para o pagamento sem preencher o CEP (de um novo endereço).



## Workaround


Não há nenhuma solução alternativa conhecida para evitar o cenário raiz.





