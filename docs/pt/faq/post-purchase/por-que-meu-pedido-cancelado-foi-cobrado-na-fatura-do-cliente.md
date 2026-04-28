---
title: 'Por que meu pedido cancelado foi cobrado na fatura do cliente?'
id: frequentlyAskedQuestions_492
status: PUBLISHED
createdAt: 2017-04-27T22:34:48.023Z
updatedAt: 2024-08-13T18:57:07.052Z
publishedAt: 2024-08-13T18:57:07.052Z
firstPublishedAt: 2017-04-27T23:02:22.399Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-was-my-canceled-order-charged-in-the-client-invoice
locale: pt
legacySlug: por-que-meu-pedido-cancelado-foi-cobrado-na-fatura-do-cliente
---

Normalmente, quando o pedido é cancelado, o módulo de pedidos se comunica com o de pagamento para que a transação seja cancelada. Quando isso ocorre depois que o pagamento foi aprovado, o módulo de pagamento se comunica com o conector e solicita o estorno automático do pagamento, para que ele não seja cobrado na fatura do cliente.

No entanto, não é sempre que o conector autoriza o estorno automático, e retorna para o módulo com essa informação. Com isso, é enviado um email para o usuário cadastrado no Admin VTEX em **Configurações da loja > Pagamentos > Configurações**, na aba **Notificações**. O email informa que é necessário realizar o estorno manual junto ao conector pelo qual a transação foi processada. Além disso, também cria uma tarefa no [VTEX DO](/pt/docs/tutorials/vtex-do-interface), que fica visível tanto em pagamentos quanto no módulo de pedidos.

Quando o módulo de pagamentos envia um email informando que é necessário estorno manual, a mensagem que aparece na interação da transação no módulo é a seguinte: 

Source Message: `The e-mail with subject gateway-estorno-manual-requerido has been successfully sent to usuário@loja.com.br`. 

Ou seja, quando essa mensagem aparecer na interação após uma tentativa de cancelamento e estorno de uma transação que já teve o pagamento aprovado e/ou liquidado, significa que não foi possível fazer o estorno online de forma automática junto ao conector e será necessário efetuar o estorno manualmente.
