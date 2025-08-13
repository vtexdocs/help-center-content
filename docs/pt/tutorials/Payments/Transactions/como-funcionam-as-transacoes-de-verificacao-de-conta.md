---
title: 'Como funcionam as transações de verificação de conta?'
id: 6O51eUDbChBEFPw9oInUtm
status: PUBLISHED
createdAt: 2025-05-30T11:53:10.874Z
updatedAt: 2025-05-30T20:16:25.955Z
publishedAt: 2025-05-30T20:16:25.955Z
firstPublishedAt: 2025-05-30T20:16:25.955Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: how-do-account-verification-transactions-work
legacySlug: como-funcionam-as-transacoes-de-verificacao-de-conta
locale: pt
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Sempre que um cliente da loja adiciona um novo cartão de crédito na sua página do [Minha Conta (My Account)](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#cartoes), a instituição financeira ou a empresa emissora do cartão cria uma transação de teste para validar a utilização do cartão naquela loja.

Esta transação é realizada no valor de R$ 1,50 e pode ser identificada pela presença da sigla __AV__ (Account Verification), seguida de um número.

Veja abaixo um exemplo de transação de verificação de conta, disponível na página de transações do Admin VTEX, em __Pedidos > Transações__:

![Transação av pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/como-funcionam-as-transacoes-de-verificacao-de-conta_1.png)

> ⚠️ Após os dados do cartão serem validados pela instituição financeira ou empresa emissora, a transação de pagamento é automaticamente cancelada e o valor de R$ 1,50, estornado, sem gerar cobranças ao cliente.
