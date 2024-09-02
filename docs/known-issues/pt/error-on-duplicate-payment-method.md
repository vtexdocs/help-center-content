---
title: 'Erro no método de pagamento duplicado'
id: 1wdiEae6sehlnTDnanWT7n
status: PUBLISHED
createdAt: 2023-11-02T12:23:14.027Z
updatedAt: 2023-11-02T12:23:15.109Z
publishedAt: 2023-11-02T12:23:15.109Z
firstPublishedAt: 2023-11-02T12:23:15.109Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erro-no-metodo-de-pagamento-duplicado
locale: pt
kiStatus: Backlog
internalReference: 929428
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao duplicar um método de pagamento que não possui parcelas, o operador recebe a seguinte mensagem na tela: "O sistema de pagamento atual não permite opções de parcelamento". Isso acontece porque, quando o corpo da solicitação de criação na nova regra é criado, alguns campos são inseridos por padrão, incluindo installmentOptions, mas esse campo não existe para pagamentos à vista, como débito e boleto.

## Simulação



1. Vá para a tela de condições de pagamento
2. Selecione um método de pagamento que não tenha parcelas.
3. Clique no botão para duplicar a regra.
4. A seguinte mensagem de erro será exibida na tela: "O sistema de pagamento atual não permite opções de parcelamento"



## Workaround


Temos duas maneiras de contornar esse problema:

1. Crie outra com as mesmas configurações da que você deseja duplicar;
2. Criar a regra via API, `https://.myvtex.com/api/payments/pvt/rules/`, removendo o campo installmentOptions do corpo.





